<template>
  <!-- <form action="action_page.php" style="border: 1px solid #ccc"> -->
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />

    <label for="firstName"><b>First name</b></label>
    <input
      type="text"
      placeholder="First name"
      v-model="currentUser.firstName"
    />

    <label for="lastName"><b>Last name</b></label>
    <input
      type="text"
      placeholder="Last name"
      name="email"
      v-model="currentUser.lastName"
    />

    <label for="email"><b>Email</b></label>
    <input
      type="text"
      placeholder="Email "
      name="email"
      v-model="currentUser.email"
    />

    <label for="psw"><b>Password</b></label>
    <input
      type="text"
      placeholder="Password"
      name="psw"
      v-model="currentUser.password"
    />

    <div class="clearfix">
      <!-- <button type="button" class="cancelbtn">Cancel</button> -->
      <button type="submit" class="signupbtn" @click="signUp">Sign Up</button>
    </div>
  </div>
  <!-- </form> -->
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      currentUser: {
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        workspaces: [],
      },
    };
  },
  methods: {
    async signUp() {
      const { data, status } = await axios.post(
        "http://localhost:8080/signup",
        this.currentUser
      );

      console.log(data);
      console.log(status);
    },
  },
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