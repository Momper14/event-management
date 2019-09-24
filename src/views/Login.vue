<template>
    <div class="login">
       <v-container class="mx-auto" >
           <v-card class="mx-auto" outlined max-width="700">
                <v-form v-model="valid" ref="form">
                <v-container>
                    <v-layout>
                        <h2>Let's get started</h2>
                    </v-layout>
                    <v-layout>
                    <v-text-field v-model="email" :rules="nameRules" label="Email address" required></v-text-field>
                    </v-layout>
                    <v-layout>
                         <v-text-field v-model="password" :rules="nameRules" label="Password" required></v-text-field>
                    </v-layout>
                    <v-layout row wrap justify-center>
                         <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Agree our coditions?" required>
                         </v-checkbox>
                    </v-layout>
                    <v-layout row wrap justify-center>
                         <v-btn color="error" class="md-4" @click="submit">
                        Sign In
                    </v-btn>
                    </v-layout>
                    <v-layout row wrap justify-center pt-4>
                         <p>or</p>
                    </v-layout>
                <v-layout row wrap justify-center>
                    <v-btn href="/register" color="blue" class="md-4">
                        Sign Up
                    </v-btn>
                </v-layout>

                </v-container>
            </v-form>
           </v-card>
              
       </v-container>
    </div>
 
</template>

<script>
import db from '@/fb'
//import auth from '@/fb'


export default {
    
    data() {
        return{
            email: '',
            password: '',
            checkbox: false
              }
       
        },

  methods: {
    submit() {
      
         var user = {
          email: this.email,
          password: this.password
      }
      db.collection("users").doc("one").set(user)
      db.collection("users").doc()
      db.collection("users").add(user)
      

/*
      auth.createUserWithEmailAndPassword(this.email, this.password).then(() =>{
        alert('Your account has been created !').catch(error => window.alert("Oops!")).finally(() => this.setState({ loadingResults: false}))
        //console.log(error)
        
      }
        
          
        )*/
      localStorage.email=this.email
      localStorage.password = this.password
      //custom Console
      // eslint-disable-next-line 
      console.log('submit()')

          
    },
    clear () {
        this.$v.$reset()
        this.password = ''
        this.email = ''
        this.checkbox = false
      },
  }

}
</script>
