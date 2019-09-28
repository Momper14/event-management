<template>
  <div class="login">
    <v-container class="mx-auto">
      <v-card class="mx-auto" outlined max-width="700">
        <v-form ref="form">
          <v-container>
            <v-layout>
              <h2>Let's get started</h2>
            </v-layout>
            <v-layout>
              <v-text-field v-model="email" label="Email address" required></v-text-field>
            </v-layout>
            <v-layout>
              <v-text-field v-model="password" label="Password" required></v-text-field>
            </v-layout>
            <v-layout row wrap justify-center>
              <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Agree our coditions?"
                required
              ></v-checkbox>
            </v-layout>
            <v-layout row wrap justify-center>
              <v-btn color="error" class="md-4" @click="submit">Sign Up</v-btn>
            </v-layout>
            <v-layout row wrap justify-center pt-4>
              <p>or</p>
            </v-layout>
            <v-layout row wrap justify-center>
              <v-btn color="blue" class="md-4">Sign In</v-btn>
            </v-layout>
          </v-container>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { db } from '@/fb'
//import auth from '@/fb'

export default {
    
    data() {
        return {
            email: "",
            password: "",
            checkbox: false
        };
  },

  methods: {
    submit() {
      var user = {
        email: this.email,
        password: this.password
      };
      //var tmp = firebase.app().firestore().collection("users").add(user);
      db.collection("users").add(user);

      /*
      auth.createUserWithEmailAndPassword(this.email, this.password).then(() =>{
        alert('Your account has been created !').catch(error => window.alert("Oops!")).finally(() => this.setState({ loadingResults: false}))
        //console.log(error)
        
      }
        
          
        )*/
      localStorage.email = this.email;
      localStorage.password = this.password;
      //custom Console
      // eslint-disable-next-line
      console.log("submit()");
      this.$router.push("/");
    },
    clear() {
      this.$v.$reset();
      this.password = "";
      this.email = "";
      this.checkbox = false;
    }
  }
};
</script>