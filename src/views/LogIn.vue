<template>
  <h1>Login Page</h1>
  <!-- <hr /> -->
  <br />
  <div class="container">
    <!-- <form id="login"> -->
    <div class="password-input">
      <label><b>Email </b> </label>
      <input
        class="input"
        v-model="currentUser.email"
        type="text"
        placeholder="Email"
      />
    </div>
    <br /><br />
    <div class="password-input">
      <label><b> Password </b> </label>
      <input
        class="input"
        v-model="currentUser.password"
        type="password"
        placeholder="Password"
      />
    </div>
    <br /><br />
    <button class="signupbtn" @click="logIn">Log in</button>

    <br /><br />
    <!-- </form> -->
  </div>
</template>

<script>
// import axios from "axios";

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
      this.$router.push("/home");
      // const { data, status } = await axios.post(
      //   "http://localhost:8080/login",
      //   this.currentUser
      // );
      //
      // // this.kir = data;
      // console.log(data);
      // console.log(status);
      // if (status === 200 && data == "Login Was Successful !!") {
      //   this.$router.push("/home");
      // }
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

/* Float cancel and signup buttons and add an equal width */

.signupbtn {
  background: #f27e2e;
  box-shadow: 4px 4px 8px rgba(244, 86, 37, 0.25);
  border-radius: 10px;
  margin: 50px;
  padding: 10px 30px;
  text-decoration: none;
  color: #1c1a2d;
  margin-top: -9px;
  height: 46px;
}

/* Add padding to container elements */
.container {
  padding: 0px 20px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.input {
  background: #3a365e !important;
  border-radius: 10px;
  color: #ead2b7;
}

.password-input {
  margin-top: -30px 0px;
  padding: 0px;
  width: 284px !important;
}
</style>