<script setup></script>

<template>
  <!-- div hanya untuk background -->
  <div class="bg-lime-600 py-10 text-white p-">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 sm:place-items-center md:grid-cols-5 md:place-items-start place-items-center container px-5 sm:mx-auto gap-5"
    >
      <!-- gambar welove -->
      <div class="bg-white bg-opacity-90 rounded-full">
        <img
          class="w-32 lg:w-44"
          src="/src/assets/images/logo welove.png"
          alt="logo welove"
        />
      </div>

      <!-- keterangan tentang-->
      <div class="w-full md:col-span-2">
        <div class="footer-text-main">tentang</div>
        <div>
          Welove menyediakan jasa layanan pengelolaan sampah kemasan skincare
          dengan inovasi terbaru yang lebih modern dan berbasis teknologi
          digital sehingga akan membantu masyarakat, khususnya wanita kalangan
          muda dalam menyelesaikan permasalahan sampah kemasan sisa dari produk
          kecantikkan atau skincare.
        </div>
      </div>
      <!-- keterangan help -->
      <div class="w-full">
        <div class="footer-text-main">Welove Help</div>
        <div>
          <div>help center</div>
          <div>email center</div>
          <div>website welove</div>
          <div>whatsapp center</div>
        </div>
      </div>
      <!-- media sosial -->
      <div class="w-full">
        <div class="footer-text-main gap-2">media sosial</div>
        <div class="grid grid-cols-1 gap-1">
          <!-- twitter -->
          <div class="flex">
            <font-awesome-icon
              color="white"
              size="xl"
              icon="fa-brands fa-twitter"
              class="color"
            />
            <div class="ml-2 capitalize">twitter</div>
          </div>
          <!-- instagram -->
          <div class="flex">
            <font-awesome-icon
              color="white"
              size="xl"
              icon="fa-brands fa-instagram"
              class="color"
            />
            <div class="ml-2 capitalize">instagram</div>
          </div>
          <!-- whatsapp -->
          <div class="flex">
            <font-awesome-icon
              color="white"
              size="xl"
              icon="fa-brands fa-whatsapp"
              class="color"
            />
            <div class="ml-2 capitalize">whatsapp</div>
          </div>
          <!-- facebook -->
          <div class="flex">
            <font-awesome-icon
              color="white"
              size="xl"
              icon="fa-brands fa-facebook"
              class="color"
            />
            <div class="ml-2 capitalize">facebook</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
