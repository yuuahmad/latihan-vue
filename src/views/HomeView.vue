<script setup>
// setup pertama
import { reactive, ref } from "vue";
const keteranganBagianKeempats = ref([
  {
    ikon: "fa-solid fa-recycle",
    judul: "Recycling",
    text: "Mengurangi jumlah kemasan sampah skincare yang beredar di masyarakat dan mengurangi jumlah sampah kemasan yang berakhir di TPA",
  },
  {
    ikon: "fa-solid fa-rupiah-sign",
    judul: "EPR System",
    text: "Berkontribusi dalam peningkatan ekonomi serta membantu penerapan ekonomi sirkular",
  },
  {
    ikon: "fa-solid fa-graduation-cap",
    judul: "Educate",
    text: "Mengedukasi lebih banyak remaja dan masyarakat luas dalam pengelolaan sampah kemasan skincare",
  },
]);
</script>

<template>
  <!-- ini bagian pertama -->
  <div
    class="sm:grid sm:grid-cols-2 sm:pt-16 sm:place-items-center sm:container sm:mx-auto"
  >
    <img
      class="h-96 sm:h-full lg:h-96 w-full object-cover object-center sm:order-last rounded-b-3xl sm:rounded-3xl"
      src="/src/assets/images/gambardepan-welove.jpg"
      alt=" gambar depan welove"
    />
    <div class="px-5">
      <!-- ini untuk keterangan utama -->
      <div class="text-main">
        Mengurangi Sampah Skincare dengan Pengolahan Sampah Skincare yang Tepat
      </div>
      <!-- dan ini untuk keterangan lainnya -->
      <div class="text-subtitle">
        Ayo bersama ikuti dan sebarkan campaign #WeloveWesafeEarth, jadilah
        penyelamat bumi bersama dengan teman-teman anda!
      </div>
    </div>
  </div>
  <!-- ini bagian kedua -->
  <div class="my-10 bg-lime-100">
    <!-- div untuk container -->
    <div class="sm:container sm:mx-auto py-10 px-5">
      <div class="text-main">welove</div>
      <div>
        Welove bergerak pada bidang jasa pengelolaan sampah kemasan skincare.
        Dengan Visi menjadi layanan pengelolaan sampah kemasan skincare yang
        tepat bagi masyarakat dan meningkatkan nilai ekonomi sampah kemasan
        skincare, Welove memberikan layanan pengelolaan sampah skincare dan
        menghubungkan konsumen dengan perusahaan penghasil produk.
      </div>
    </div>
  </div>
  <!-- ini bagian ketiga -->
  <div
    class="grid grid-cols-1 gap-1 sm:container sm:mx-auto px-5 my-10 sm:grid-cols-3 md:grid-cols-5"
  >
    <!-- div untuk kata -->
    <div
      class="sm:col-span-1 md:col-span-2 sm:place-self-center order-last sm:order-first mt-3 sm:mt-0"
    >
      <div class="text-main">welove</div>
      <div class="text-subtitle">
        Tukar sampah skincare mu menjadi skincare baru!
      </div>
      <div @click="null">learn more</div>
    </div>
    <!-- div untuk video youtube -->
    <!-- <div class="sm:col-span-2 md:col-span-3">youtube</div> -->
    <iframe
      class="sm:col-span-2 md:col-span-3 sm:h-56 lg:h-80 xl:h-96 w-full aspect-video place-self-center"
      src="https://www.youtube.com/embed/neh52FaH1R0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <!-- bagian keempat -->
  <div
    class="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-10 sm:container sm:mx-auto px-5"
  >
    <!-- judul bagian -->
    <div class="text-center self-center text-main">Misi Welove</div>
    <!-- keterangan bagian -->
    <div class="col-span-6 lg:col-span-8">
      <div
        class="grid grid-cols-4 gap-x-5 items-center"
        v-for="keteranganBagianKeempat in keteranganBagianKeempats"
        :key="keteranganBagianKeempat"
      >
        <font-awesome-icon
          :icon="keteranganBagianKeempat.ikon"
          color="grey"
          class="h-16 place-self-center"
        />
        <div class="col-span-3 py-2">
          <div class="text-main2">{{ keteranganBagianKeempat.judul }}</div>
          <div>{{ keteranganBagianKeempat.text }}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- ini bagian kelima (layanan welove) -->
  <div class="my-10 bg-lime-100">
    <!-- div untuk container -->
    <div class="sm:container sm:mx-auto py-10 px-5">
      <div class="text-main">welove</div>
      <div>
        Welove bergerak pada bidang jasa pengelolaan sampah kemasan skincare.
        Dengan Visi menjadi layanan pengelolaan sampah kemasan skincare yang
        tepat bagi masyarakat dan meningkatkan nilai ekonomi sampah kemasan
        skincare, Welove memberikan layanan pengelolaan sampah skincare dan
        menghubungkan konsumen dengan perusahaan penghasil produk.
      </div>
    </div>
  </div>
</template>
