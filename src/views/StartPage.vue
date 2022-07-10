<template>
  <nav>
    <router-link to="./login" class="login">Log in</router-link>
    <router-link to="./sign-up" class="signup">Sign Up</router-link>
  </nav>
</template>

<script>
</script>
  

<style scoped>
.signup {
  background: #f27e2e;
  box-shadow: 4px 4px 8px rgba(244, 86, 37, 0.25);
  border-radius: 10px;
  margin: 50px;
  padding: 10px 30px;
  text-decoration: none;
  color: #1c1a2d;
}

.login {
  border: 4px solid #f27e2e;
  margin: 50px;
  padding: 10px 30px;
  text-decoration: none;
  color: #f27e2e;
  border-radius: 10px;
}
</style>