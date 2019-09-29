<template>
    <div class="Edit">
        <v-container>
          <v-card max-width="700" class="mx-auto my-auto" flat>
               <v-form ref="form" @submit.prevent="createEvent">
                   <v-container px-6>
                       <h1>Basic Info</h1>
                       <p>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
                        <v-text-field outlined v-model="event.title" :counter="75" label="Event Title *" required placeholder="Be clear and descriptive."></v-text-field>
                        <!--<v-select label="Category" outlined :value="$store.state.activeCat" @input="setActiveCat" :options="$store.state.categories"></v-select>-->
                        <v-select outlined v-model="event.category" label="category" :items="$store.state.categories">
                        
                        </v-select>
                        <v-text-field outlined v-model="event.organizer.name" label="Organizer" placeholder="Tell attendees who is organizing this event."></v-text-field>
                        <v-textarea outlined label="Description" v-model="event.description"></v-textarea>
                        <h1>Date and time</h1>
                        <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
                        <v-row>
                            <v-col cols="6" sm="6" md="6">
                                <v-menu v-model="menu" transition="scale-transition" offset-y full-width min-width="290px" >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field outlined="" :value="dateS" label="Event Starts" readonly v-on="on"></v-text-field>
                                    </template>

                                    <v-date-picker v-model="dateS" @input="menu = false" no-title scrollable>
                                        <div class="flex-grow-1"></div>
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="6" sm="6" md="6">
                                <v-menu v-model="menu2" transition="scale-transition" offset-y full-width min-width="290px">
                                    <template v-slot:activator="{ on }">
                                        <v-text-field :value="dateE" label="Event Ends" readonly v-on="on" outlined=""></v-text-field>
                                    </template>
                                    <v-date-picker v-model="dateE" @input="menu = false" no-title scrollable>
                                        <div class="flex-grow-1"></div>
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="6" sm="6" md="6">
                                <v-menu ref="menu" v-model="menu3" :close-on-content-click="false" :nudge-right="40" :return-value.sync="stime" transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
                                    <template v-slot:activator="{ on }">
                                        <v-text-field v-model="stime" label="Start Time" readonly outlined="" v-on="on"></v-text-field>
                                    </template>
                                    <v-time-picker v-if="menu3" v-model="stime" full-width @click:minute="$refs.menu3.save(stime)"></v-time-picker>
                                </v-menu>
                            </v-col>
                           <v-col cols="6" sm="6" md="6">
                               <v-menu ref="menu" v-model="menu4" :close-on-content-click="false" :nudge-right="40" :return-value.sync="etime" transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
                                    <template v-slot:activator="{ on }">
                                        <v-text-field v-model="event.etime" label="End Time" readonly outlined="" v-on="on"></v-text-field>
                                    </template>
                                    <v-time-picker v-if="menu4" v-model="etime" full-width @click:minute="$refs.menu3.save(etime)"></v-time-picker>
                                </v-menu>
                              
                           </v-col>
                            
                           <div class="flex-grow-1"></div>                           
                           <v-col cols="6" md="2">
                                <v-btn class="mr-4" @click="editEvent">Edit</v-btn>      
                           </v-col>
                           <v-col cols="6" md="2">
                                <v-btn @click="clear">clear</v-btn>
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
        return{
            id: this.$route.params.id,  
           categories: this.$store.state.categories,
           event: this.getEventById(),
           dateS: new Date().toISOString().substr(0, 10),
           dateE: new Date().toISOString().substr(0, 10),
           menu: false,
           menu2: false,
           menu3: false, 
           menu4: false,
           stime: '',
           etime:''
            };
       
        },
        methods:{
            clear(){
            this.event.title = '',
            this.event.category = '',
            this.event.organizer.name = '',
            this.event.description = '',
            this.event.dateS = null,
            this.event.dateE = null,
            this.event.stime = null,
            this.event.etime = null

        },
        getEventById(){
            //eslint-disable-next-line
            console.log("Id is: "+this.id)
          if (this.id != null)
          this.event= this.$store.dispatch('getEventById', this.ids)
      }
        }
    }
</script>

<style lang="scss" scoped>

</style>