<template>
  <div class="container">
    <div class="information-container">
      <h1 class="title">
        Тестовое задание для
        <br />
        разработчика
        <span class="title_yellow-font"
          >Тестовое задание
          <br />
          для разработчика</span
        >
      </h1>
      <h3 class="about">Тестовое задание для разработчика</h3>
      <h4 class="description">Вы получаете:</h4>
      <ul class="list">
        <li class="list-items">
          Тестовое задание для разработчика Тестовое задание для разработчика
        </li>
        <li class="list-items">
          Тестовое задание для разработчика Тестовое задание для разработчика
        </li>
        <li class="list-items">
          Тестовое задание для разработчика Тестовое задание для разработчика
        </li>
      </ul>
      <router-link to="/similarDev-test/registration">
        <button class="registration-btn">Регистрироваться</button>
      </router-link>
    </div>

    <div class="motivation-container">
      <div class="animate-container">
        <div class="image-container">
          <div class="reactangle">
            <img src="../img/reactangle_small.svg" alt="" />
          </div>
          <div class="reactangle">
            <img src="../img/reactangle_big.svg" alt="" />
          </div>
          <div class="clock">
            <img src="../img/Icon_clock.svg" alt="" />
          </div>
        </div>
        <div class="text-container">
          <h4 class="text">Тестовое задание для разработчика</h4>
          <h4 class="text">Тестовое задание для разработчика</h4>
          <h4 class="text">Тестовое задание для разработчика</h4>
        </div>
      </div>

      <div class="animate-container">
        <div class="image-container">
          <div class="reactangle">
            <img src="../img/reactangle_small.svg" alt="" />
          </div>
          <div class="reactangle">
            <img src="../img/reactangle_big.svg" alt="" />
          </div>
          <div class="clock">
            <img src="../img/Icon_coins.svg" alt="" />
          </div>
        </div>
        <div class="text-container">
          <h4 class="text">Тестовое задание для разработчика</h4>
          <h4 class="text">Тестовое задание для разработчика</h4>
          <h4 class="text">Тестовое задание для разработчика</h4>
        </div>
      </div>

      <div class="animate-container">
        <div class="image-container">
          <div class="reactangle">
            <img src="../img/reactangle_small.svg" alt="" />
          </div>
          <div class="reactangle">
            <img src="../img/reactangle_big.svg" alt="" />
          </div>
          <div class="clock">
            <img src="../img/Icon_wallet.svg" alt="" />
          </div>
        </div>
        <div class="text-container">
          <h4 class="text">Тестовое задание для разработчика</h4>
          <h4 class="text">Тестовое задание для разработчика</h4>
          <h4 class="text">Тестовое задание для разработчика</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.container {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.information-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 25%;
  margin-right: auto;
  text-align: start;
  width: 100%;
  height: 625px;
}
.title {
  font-weight: 700;
  font-size: 54px;
  line-height: 140%;
  color: #ffffff;
  text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
}
.title_yellow-font {
  color: #ffc700;
}
.about {
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #ffffff;
}
.description {
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.6);
}
.list {
  text-align: start;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}
.list-items {
  text-align: start;
}
.registration-btn {
  padding: 10px 44px;
  background: #ffc700;
  border-radius: 16px;
  color: black;
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  cursor: pointer;
}
.registration-btn:hover {
  scale: 1.05;
}
.motivation-container {
  display: flex;
  justify-content: space-evenly;
  align-self: flex-end;
  width: 100%;
  padding-top: 10px;
  margin-top: 80px;
  padding-bottom: 76px;
  bottom: 0;
  left: 0;
  background-color: black;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #ffffff;
}
.animate-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image-container {
  position: relative;
}
.text-container {
  border-left: 4px solid #ffc700;
  border-radius: 2px;
  margin-top: 20px;
}
.clock {
  position: absolute;
  bottom: 50px;
}
.text {
  padding-left: 10px;
}

.reactangle {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;

  animation: 5s linear infinite rotate;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 769px) {
  .title {
    font-size: 32px;
  }
  .about {
    font-size: 20px;
  }
  .description {
    font-size: 16px;
  }
  .list {
    font-size: 16px;
  }
  .information-container {
    margin: 0;
    margin-top: 60px;
    padding: 16px;
    text-align: start;
  }
  .motivation-container {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .animate-container {
    margin-bottom: 40px;
  }
}
</style>