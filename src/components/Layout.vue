<script setup>
</script>

<template>
  <div class="body">
    <video autoplay muted loop id="myVideo">
      <source src="../img/baground_sea_1.mp4" type="video/mp4" />
    </video>
    <router-view></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
}

#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

</style>