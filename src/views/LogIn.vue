<template>
  <h1>Login Page</h1>
  <hr />
  <br />
  <div class="container">
    <!-- <form id="login"> -->
    <label><b>Email </b> </label>
    <input v-model="currentUser.email" type="text" placeholder="Email" />
    <br /><br />
    <label><b> Password </b> </label>
    <input
      v-model="currentUser.password"
      type="password"
      placeholder="Password"
    />
    <br /><br />
    <button class="signupbtn" @click="logIn">Log in</button>

    <br /><br />
    <!-- </form> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "LogIn",
  data() {
    return {
      currentUser: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async logIn() {
      const { data, status } = await axios.post(
        "http://localhost:8080/login",
        this.currentUser
      );

      // this.kir = data;
      console.log(data);
      console.log(status);
      // if (status === 200) {
      //   this.$router.push("/sign-up");
      // }
    },
  },
  // async created() {
  //   await this.logIn();
  // },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  margin-left: 380px;
}

button:hover {
  opacity: 1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,
.signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>