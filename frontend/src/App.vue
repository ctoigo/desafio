<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import router from './router'

const isAuthenticated = ref(!!localStorage.getItem("token"))

const logout = () => {
  localStorage.removeItem("token")
  isAuthenticated.value = false
  router.push("/login")
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/dashboard" v-if="isAuthenticated">Dashboard</RouterLink>
        <RouterLink to="/login" v-if="!isAuthenticated">Login</RouterLink>
        <RouterLink to="/register" v-if="!isAuthenticated">Register</RouterLink>
        <button v-if="isAuthenticated" @click="logout">Logout</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

button {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #369a75;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
