<template>
  <div class="home">
       <v-container>
      <v-row>
        <v-cols cols="12" sm="4">
          <v-row>
        <v-card max-width="344" class="mx-4 my-4" v-for="event in events" :key="event.name">
        <v-list-item>
          <v-list-item-avatar color="grey">{{event.startDay}} <br> {{event.startTime}}</v-list-item-avatar> 
          <v-list-item-content>
            <v-list-item-title class="headline">{{event.title}}</v-list-item-title>
            <v-list-item-subtitle>by {{event.organizer}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

        <v-card-text>
          {{event.description}}
        </v-card-text>

        <v-card-actions>
          <form v-if = "!submitted">
          <v-btn v-on:click.prevent="post" text color="green accent-4"> Edit</v-btn>
          </form>
          
          <v-btn v-on:click="removeEvent(event)" text color="red accent-4">Delete</v-btn>
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

  </div>
</template>

<script>
export default {
    
    data() {
        return{
          categories: this.$store.state.categories,
          events: this.$store.state.events
            };
       
        },
computed:{
   
  },
  methods: {
  
    

}
}
</script>
