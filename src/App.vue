<script setup>
import Layout from "./components/Layout.vue";
import HomePage from "./components/HomePage.vue";
</script>

<template>
  <div>
    <Layout>
      <router-view>
        <Home-Page />
      </router-view>
      
    </Layout>
  </div>
</template>

<style scoped>
</style>
