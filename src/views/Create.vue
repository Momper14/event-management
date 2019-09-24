<template>
  <div class="create">
      <v-container>
          <v-card max-width="700" class="mx-auto my-auto" flat>
               <v-form v-model="valid" ref="form">
                   <v-container px-6>
                       <h1>Basic Info</h1>
                       <p>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
                        <v-text-field outlined
                            v-model="title"
                            :error-messages="nameErrors"
                            :counter="75"
                            label="Event Title *"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                            placeholder="Be clear and descriptive."
                         ></v-text-field>
                         <v-select
                            :items="items"
                            label="Category"
                            outlined
                            v-model="categorie"
                            ></v-select>
                            <v-text-field outlined v-model="organizer"
                            label="Organizer" placeholder="Tell attendees who is organizing this event.">  
                            </v-text-field>
                            <h1>Date and time</h1>
                            <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
                            <v-row>
                            <v-col cols="12" sm="6" md="4">
                            <v-menu
                                v-model="menu"
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px"   
                            >
                            <template v-slot:activator="{ on }">
                            <v-text-field outlined=""
                                    :value="dateS"
                                    label="Event Starts"
                                    readonly
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker v-model="dateS" @input="menu = false" no-title scrollable>
                                <div class="flex-grow-1"></div>
                                </v-date-picker>
                            </v-menu>
                            </v-col>
                            <div class="flex-grow-1"></div>
                             <v-col cols="12" sm="6" md="4">
                            <v-menu
                                
                                v-model="menu"
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px"
                            >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                    :value="dateE"
                                    label="Event Ends"
                                    readonly
                                    v-on="on"
                                    outlined=""
                                ></v-text-field>
                                </template>
                                <v-date-picker v-model="dateE" no-title scrollable>
                                <div class="flex-grow-1"></div>
                                </v-date-picker>
                            </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-menu
                                ref="menu"
                                v-model="menu3"  
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="time"                              
                                transition="scale-transition"
                                offset-y
                                full-width
                                max-width="290px"
                                min-width="290px"
                                >
                                <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="stime"
                                    label="Start Time"
                                    readonly
                                    outlined=""
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                v-if="menu3"
                                v-model="stime"
                                full-width
                                @click:minute="$refs.menu3.save(stime)"
                                ></v-time-picker>
                            </v-menu>
                            </v-col>
                           <v-col cols="12" sm="6" md="4">
                               <v-menu
                                ref="menu"
                                v-model="menu4"  
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="time"                              
                                transition="scale-transition"
                                offset-y
                                full-width
                                max-width="290px"
                                min-width="290px"
                                >
                                <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="etime"
                                    label="End Time"
                                    readonly
                                    outlined=""
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-time-picker
                                v-if="menu4"
                                v-model="etime"
                                full-width
                                @click:minute="$refs.menu3.save(etime)"
                                ></v-time-picker>
                            </v-menu>
                              
                           </v-col>
                            <div class="flex-grow-1"></div>
                            <v-col class="px-12 mx-12">
                                <v-btn class="mr-4" @click="submit" href="/">submit</v-btn>
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
import db from '@/fb'



export default {
    
    data() {
        return{
            title: '',
            categorie: '',
            dateS: '',
            dateE: '',
            organizer: '',
            stime: null,
            menu3: false,
            etime: null,
            menu4: false,
            items:[
                "Bussines & Professional",
                "Community & Culture",
                 "Family & Education"
            ]
              }
       
        },
  methods: {
    submit() {
        const event ={
            title: this.title,
            Category: this.categorie,
            eDate: this.dateE,
            sDate: this.dateS,
            sTime: this.stime,
            eTime: this.etime,
            organizer: this.organizer,
            
        }
        // eslint-disable-next-line 
        console.log('submit()')
        db.collection('events').add(event)
      localStorage.title = this.title;
      localStorage.categorie = this.categorie;
      localStorage.dateS= this.dateS;
      localStorage.dateE= this.dateE;
      localStorage.organizer= this.organizer;
      localStorage.stime=this.stime;
      localStorage.etime=this.etime;
      this.$refs.form.validate()  
    }
  }

}
</script>
