<template id="app">
  <div class="">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import { BeakerIcon } from "@heroicons/vue/solid";
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { BeakerIcon, HelloWorld, Navbar, Footer },
};
</script>

<style></style>
