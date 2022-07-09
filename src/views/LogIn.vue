<template>
  <h2>Login Page</h2>
  <br />
  <div class="login">
    <!-- <form id="login"> -->
    <label><b>Email </b> </label>
    <input v-model="currentUser.email" />
    <br /><br />
    <label><b> Password </b> </label>
    <input v-model="currentUser.password" />
    <br /><br />
    <button @click="logIn" />

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
body {
  margin: 0;
  padding: 0;
  background-color: #6abadeba;
  font-family: "Arial";
}
.login {
  width: 382px;
  overflow: hidden;
  margin: auto;
  margin: 20 0 0 450px;
  padding: 80px;
  background: #23463f;
  border-radius: 15px;
}
h2 {
  text-align: center;
  color: #277582;
  padding: 20px;
}
label {
  color: #08ffd1;
  font-size: 17px;
}
#Uname {
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 3px;
  padding-left: 8px;
}
#Pass {
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 3px;
  padding-left: 8px;
}
#log {
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 17px;
  padding-left: 7px;
  color: blue;
}
span {
  color: white;
  font-size: 17px;
}
a {
  float: right;
  background-color: grey;
}
</style>