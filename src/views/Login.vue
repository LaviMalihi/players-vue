<template>
  <div>
    <div class="buttons">
      <input class="email" type="email" placeholder="Email address..." v-model="email"/>
      <input class="password" type="password" placeholder="password..." v-close-popup v-model="password"/>
    </div>
    <q-btn class="login" @click="login()"> התחבר</q-btn>
    <q-btn class="register" @click="register(email,password)"> רישום</q-btn>
  </div>
</template>

<script>

import firebaseInstance from '../middleware/firebase'
// import firebase from "firebase/compat";

export default {
  name: "Login",
  data() {
    return {
      flagRegister: false,
      password: '',
      email: ''
    }
  },
  methods: {
    login() {
      const provider = new firebaseInstance.firebase.auth.GoogleAuthProvider()
      firebaseInstance.firebase.auth()
          .signInWithPopup(provider)
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            window.user = result.user
            this.$router.push('/home')
            // ...
          }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    },
    register(email, password) {
      firebaseInstance.firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            this.$router.push('/home')

            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
          });
    },
    logout() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            alert('Successfully logged out');
            this.$router.push('/');
          })
          .catch(error => {
            alert(error.message);
            this.$router.push('/');
          });
    },

  },
  created() {
    if (window.user) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
/*.login{*/
/*  width: 100%;*/
/*  padding: 12px 20px;*/
/*  margin: 8px 0;*/
/*  display: inline-block;*/
/*  border: 1px solid #ccc;*/
/*  border-radius: 4px;*/
/*  box-sizing: border-box;*/
/*}*/
.login {
  background-color: black; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
}

.register {
  background-color: black; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  margin-left: 90px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
}

.email {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.password {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}


</style>