<template>
  <div class="home">
    <v-container fluid style="margin: 0px; padding: 0px; width: 100%">
      <v-container fluid style="margin: 0px; padding: 0px; width: 100%">
        <v-img
          src="@/assets/background.jpg"
          lazy-src="https://picsum.photos/id/11/10/6"
          aspect-ratio="1"
          class="grey lighten-2"
          max-width="100%"
          max-height="500"
        >
          <v-container fluid style="padding: 10px ">
            <v-row align="end" justify="end" style=" padding: 70px">
              <form style="background-color: white; width:400px">
                <v-container fluid style=" padding: 30px">
                  <p>I want to go out</p>
                  <v-select :items="dates" label="Any Date" required></v-select>
                  <v-text-field label="In"></v-text-field>
                  <p>And I'm in the mood for</p>
                  <v-select :items="categories" label="Anything"></v-select>
                  <v-btn class="px-4; mx-4" @click="submit">submit</v-btn>
                </v-container>
              </form>
            </v-row>
          </v-container>
        </v-img>
      </v-container>

      <v-container style="padding-left: 5%">
        <v-row>
          <v-cols cols="12" sm="4">
            <v-row>
              <v-card max-width="300" class="mx-4 my-4" v-for="event in events" :key="event.name">
                <v-list-item>
                  <v-list-item-avatar color="grey">
                    {{event.start}}
                    <br />
                    {{event.stime}}
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline">{{event.name}}</v-list-item-title>
                    <v-list-item-subtitle>by {{event.organizer}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

                <v-card-text>{{event.description}}</v-card-text>

                <v-card-actions>
                  <v-btn @click="editEvent(event)" text color="green accent-4">Edit</v-btn>

                  <v-btn @click="deleteEvent(event)" text color="red accent-4">Delete</v-btn>
                  <div class="flex-grow-1"></div>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-row>
          </v-cols>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
//import moment from 'moment'
export default {
  data() {
    return {
      categories: this.$store.state.categories,
      events: this.$store.state.events,
      dates: this.$store.state.dates,
      select: "",
      location: ""
    };
  },
  computed: {},
  methods: {
    deleteEvent(event) {
      //eslint-disable-next-line
      console.log("delete was called!");
      this.$store.dispatch("deletEvent", event.id);
    },
    editEvent(event) {
      //eslint-disable-next-line
      console.log("edit was called!");
      this.$router.push("/edit/" + event.id);
      //this.$store.dispatch('editEvent', event.id)
    }
  }
};
</script>
