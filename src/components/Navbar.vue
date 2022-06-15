<script setup>
import { reactive, ref } from "vue";
import { MenuIcon } from "@heroicons/vue/solid";

const menuTerlihat = ref(false);
function tampilkanMenu() {
  menuTerlihat.value = !menuTerlihat.value;
}

const daftarMenuNavbars = ref([
  { text: "beranda" },
  { text: "tentang" },
  { text: "layanan" },
  { text: "blog & media" },
  { text: "kontak" },
  { text: "join webinar" },
  { text: "download" },
]);
</script>

<template>
  <!-- ini adalah div utama pada navbar -->
  <div class="fixed inset-x-0 bg-white bg-opacity-80">
    <!-- ini adalah div untuk navbar -->
    <div class="flex justify-between items-center px-5 py-2">
      <!-- tampilan bagian kiri -->
      <div class="flex items-center">
        <img
          class="w-12"
          src="/src/assets/images/logo welove.png"
          alt="logo welove"
        />
        <div class="capitalize text-2xl text-green-800 font-semibold">
          welove
        </div>
      </div>
      <!-- tampilan kiri -->
      <MenuIcon class="w-8 text-green-800" @click="tampilkanMenu"></MenuIcon>
    </div>

    <!-- tampilan menu untuk tampilan mobile -->
    <!-- tampilan ini tertulis sendiri :) -->
    <div v-if="menuTerlihat" class="flex-col">
      <div
        class="capitalize text-lg font-semibold text-center py-1"
        v-for="daftarMenuNavbar in daftarMenuNavbars"
        :key="daftarMenuNavbar"
      >
        {{ daftarMenuNavbar.text }}
      </div>
    </div>
  </div>
</template>

<style></style>
