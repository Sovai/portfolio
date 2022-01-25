<script>
import TheHeader from "../components/TheHeader.vue";
export default {
  name: "AppLayout",
  components: { TheHeader },
};
</script>

<template>
  <div class="container mx-auto">
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<style lang="scss"></style>
