<script setup>
// setup pertama
import { reactive, ref } from "vue";
import gambarPertama from "/src/assets/images/satu.png";
import gambarKedua from "/src/assets/images/tiga.png";
import gambarKetiga from "/src/assets/images/mobile-app.png";

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

const layananWeloves = ref([
  {
    gambar: gambarPertama,
    judul: "Skincare Waste Management Service",
    keterangan:
      "Sistem manajemen pengelolaan sampah skincare yang bertanggung jawab dengan berlandaskan kolaborasi, inovasi dan teknologi dalam rangka mengurangi jumlah timbunan sampah yang berakhir di TPA.",
    ke: "tidak ada",
  },
  {
    gambar: gambarKedua,
    judul: "Skincare Waste Dropbox",
    keterangan:
      "Layanan pengumpulan sampah kemasan skincare dimana konsumen dapat menyetorkan sampah di lokasi titik Drop Box Welove terdekat untuk mendukung upaya kolaborasi peningkatan pengelolaan sampah dan daur ulang yang diinisiasi oleh sektor industri.",
    ke: "tidak ada",
  },
  {
    gambar: gambarKetiga,
    judul: "Skincare Marketplace App",
    keterangan:
      "Sistem daur ulang yang terintegrasi dengan aplikasi untuk mempermudah masyarakat dalam pemilihan tempat pembuangan sampah kemasan skincare yang tepat dan menukar point sampah kemasan skincare menjadi skincare baru.",
    ke: "tidak ada",
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
      src="/src/assets/images/gambar-depan-welove.jpg"
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
          color="gray"
          class="h-12 justify-self-center md:justify-self-end md:pr-6"
        />
        <div class="col-span-3 py-2">
          <div class="text-main2">{{ keteranganBagianKeempat.judul }}</div>
          <div>{{ keteranganBagianKeempat.text }}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- ini bagian kelima (layanan welove) -->
  <div class="my-10 bg-lime-100 py-3">
    <div class="text-main text-center">layanan welove</div>
    <!-- bagian looping -->
    <div class="grid grid-cols-1 md:grid-cols-3">
      <!-- ini adalah bagian card -->
      <div
        class="bg-lime-700 my-3 mx-3 text-white rounded-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1"
        v-for="layananWelove in layananWeloves"
        :key="layananWelove"
      >
        <img
          :src="layananWelove.gambar"
          :alt="layananWelove.judul"
          class="sm:h-96 h-64 w-full object-cover bg-white rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none md:rounded-bl-none md:rounded-t-3xl"
        />
        <div class="place-self-center">
          <!-- judul utama -->
          <div class="text-main2 text-center text-white py-2 px-5">
            {{ layananWelove.judul }}
          </div>
          <!-- keterangan -->
          <div class="px-5 pb-5 pt-2">{{ layananWelove.keterangan }}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- langkah pertumbuhan welove -->
  <div class="py-36">Langkah Pertumbuhan Welove</div>
  <!-- komponen terakhir -->
  <div class="px-5 pb-5 pt-2 text-center">
    <div class="text-main md:px-20">
      Ayo bersama ikuti dan sebarkan campaign #WeloveWesafeEarth, jadilah
      penyelamat bumi bersama teman-teman anda!
    </div>
    <div
      class="capitalize flex justify-center gap-x-3 text-main2 text-gray-700"
    >
      <div>welove</div>
      <div>wecare</div>
      <div>wesafe</div>
    </div>
  </div>
</template>
