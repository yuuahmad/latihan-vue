<script setup>
import { reactive, ref } from "vue";
const pesanSaya = ref("hai dunia apa kabarnya!");
const aquaSaya = ref("aqua");
var penghitung = reactive({ hitung: 12 });

// naikkan angka
const angka = ref(0);
function naikkanAngka() {
  angka.value++;
}

// binding pertama
var sesuatuAnda = ref("");

// if else pertama saya
const menuTerlihat = ref(false);
function lihatMenu() {
  menuTerlihat.value = !menuTerlihat.value;
}
</script>

<template>
  <div class="flex items-center">
    <!-- ini adalah bagian kiri navbar -->
    <div class="flex items-center">
      <img class="h-16" src="src/assets/images/logo welove.png" alt="" />
      <div class="text-green-800 text-2xl capitalize font-semibold">welove</div>
    </div>
    <!-- dan ini adalah bagian kanan navbar -->
    <div></div>
  </div>
  <div>coba 2 div dan ternyata bisa hehehe</div>
  <div>pesan saya : {{ pesanSaya }}</div>
  <div>penghitung : {{ penghitung.hitung }}</div>
  <div :class="aquaSaya">buat saya jadi aqua</div>
  <button @click="naikkanAngka">tekan saya {{ angka }}</button>
  <!-- belajar binding -->
  <input type="text" placeholder="ketik sesuatu disini" v-model="sesuatuAnda" />
  <!-- gunakan v model untuk binding ke script -->
  <div>{{ sesuatuAnda }}</div>

  <!-- tombol untuk melihat dan menyembunyikan menu -->
  <button @click="lihatMenu">menu</button>
  <div v-if="menuTerlihat">ini menu yang terlihat dan tidak terlihat</div>
</template>

<style scoped>
.aqua {
  color: brown;
}
</style>
