<template>
   <nav>
       <v-toolbar flat app>
           <v-toolbar-title class="text-uppercase grey--text">
               <a href="/" style="text-decoration: none" class="grey--text">
               <span class="font-weight-light">event</span>
               <span>managment</span>
               </a>
               
           </v-toolbar-title>
           <v-spacer> </v-spacer>
            <v-toolbar-items>
            <v-btn href="/create" text>Create Event</v-btn>
            <v-btn href="/login" text>Sign In</v-btn>
      </v-toolbar-items>
       </v-toolbar>
   </nav>

</template>

<script>
export default {
    data(){
       return{
           
       } 
    }
}
</script>