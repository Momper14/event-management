<template>
   <nav>
       <v-app-bar flat app>
           <v-toolbar-title class="text-uppercase grey--text">
               <a href="/" style="text-decoration: none" class="grey--text">
               <span class="font-weight-light">event</span>
               <span>managment</span>
               </a>
               
           </v-toolbar-title>
           <v-spacer> </v-spacer>
            <v-toolbar-items> 
            <v-btn text>
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on }">
                        <v-btn text v-on="on">Daily Calendar</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="headline"></span>
                        </v-card-title>
                        <v-card-text>
                           <CalDaily />
                        </v-card-text>
                        <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-btn>
            <v-btn text>
                 <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on }">
                        <v-btn text v-on="on">Weekly Calendar</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="headline"></span>
                        </v-card-title>
                        <v-card-text>
                           <CalWeekly />
                        </v-card-text>
                        <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-btn>
           
            <v-btn href="/create" text>Create Event</v-btn>
            <v-btn href="/login" text>Sign In</v-btn>
      </v-toolbar-items>
       </v-app-bar>
   </nav>

</template>

<script>
import CalDaily from './CalDaily';
import CalWeekly from './CalWeekly';

export default {
    components: {CalDaily, CalWeekly},
    data(){
       return{
           cal_item: this.$store.state.cal_items,
           dialog: false,
           events: this.$store.state.events   
          
       } 
    },
    
  }

</script>