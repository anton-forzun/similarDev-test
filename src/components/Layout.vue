<script setup>
</script>

<template>
  <div class="body">
    <div>
      <video autoplay muted loop id="myVideo">
      <source src="../img/baground_sea_1.mp4" type="video/mp4" />
    </video>
    </div>
    
    
    <router-view></router-view>
  </div>
</template>



<style>
* {
  margin:0;

}
body {
  background-image: url(../img/baground_image.svg);
  background-size: cover;
  
}

#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}


</style>