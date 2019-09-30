<template>
  <div class="Edit">
    <v-container>
      <v-card max-width="700" class="mx-auto my-auto" flat>
        <v-form ref="form" @submit.prevent="createEvent">
          <v-container px-6>
            <h1>Basic Info</h1>
            <p>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
            <v-text-field
              outlined
              v-model="event.name"
              :counter="75"
              label="Event Name"
              required
              placeholder="Be clear and descriptive."
            ></v-text-field>
            <!--             <v-select
              outlined
              v-model="event.category"
              label="category"
              :items="$store.state.categories"
            ></v-select>-->
            <v-text-field
              outlined
              v-model="event.organizer"
              label="Organizer"
              placeholder="Tell attendees who is organizing this event."
            ></v-text-field>
            <v-textarea outlined label="Details" v-model="event.details"></v-textarea>
            <h1>Date and time</h1>
            <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
            <v-row>
              <v-col cols="6" sm="6" md="6">
                <v-menu v-model="menu" transition="scale-transition" offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      outlined
                      :value="startDate"
                      label="Event Starts"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>

                  <v-date-picker v-model="startDate" @input="menu = false" no-title scrollable>
                    <div class="flex-grow-1"></div>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="6" sm="6" md="6">
                <v-menu v-model="menu2" transition="scale-transition" offset-y min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field :value="endDate" label="Event Ends" readonly v-on="on" outlined></v-text-field>
                  </template>
                  <v-date-picker v-model="endDate" @input="menu = false" no-title scrollable>
                    <div class="flex-grow-1"></div>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="6" sm="6" md="6">
                <v-menu
                  ref="menu"
                  v-model="menu3"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="startTime"
                      label="Start Time"
                      readonly
                      outlined
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker v-if="menu3" v-model="startTime"></v-time-picker>
                </v-menu>
              </v-col>
              <v-col cols="6" sm="6" md="6">
                <v-menu
                  ref="menu"
                  v-model="menu4"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="endTime" label="End Time" readonly outlined v-on="on"></v-text-field>
                  </template>
                  <v-time-picker v-if="menu4" v-model="endTimee"></v-time-picker>
                </v-menu>
              </v-col>

              <div class="flex-grow-1"></div>
              <v-col cols="6" md="2">
                <v-btn class="mr-4" @click="editEvent">Edit</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: Object.assign({}, this.getEventById(this.$route.params.id)),
      menu: false,
      menu2: false,
      menu3: false,
      menu4: false
    };
  },
  computed: {
    startDate: {
      get: function() {
        return this.getDate(this.event.start);
      },
      set: function(val) {
        this.event.start = val + " " + this.getTime(this.event.start);
      }
    },
    startTime: {
      get: function() {
        return this.getTime(this.event.start);
      },
      set: function(val) {
        this.event.start = this.getDate(this.event.start) + " " + val;
      }
    },
    endDate: {
      get: function() {
        return this.getDate(this.event.end);
      },
      set: function(val) {
        this.event.end = val + " " + this.getTime(this.event.end);
      }
    },
    endTime: {
      get: function() {
        return this.getTime(this.event.end);
      },
      set: function(val) {
        this.event.end = this.getDate(this.event.end) + " " + val;
      }
    }
  },
  methods: {
    getDate(timmestamp) {
      return timmestamp.split(" ")[0];
    },
    getTime(timmestamp) {
      let time = timmestamp.split(" ")[1];
      return time != undefined ? time : "00:00";
    },
    getEventById(id) {
      if (id) {
        return this.$store.getters.getEventById(+id);
      }
      return {};
    },
    editEvent() {
      this.$store.dispatch("updateEvent", this.event);
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>