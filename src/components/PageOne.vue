<template>
  <div class="container">
    <div class="baground_opacity"></div>
    <div class="popup_container">
      <div class="title">
        <h3>
          Тестовое задание для разработчика Тестовое задание для разработчика
        </h3>
        <router-link to="/">
          <span class="close">
            <img src="../img/close_icon.svg" alt="" />
          </span>
        </router-link>
      </div>

      <div class="radio_btn">
        <div class="btn">
          <input class="radio" type="radio" />
          <h4 class="text">Тестовое задание для разработчика</h4>
        </div>
        <div class="btn">
          <input class="radio" type="radio" />
          <h4 class="text">Тестовое задание для разработчика</h4>
        </div>
        <div class="btn">
          <input class="radio" type="radio" />
          <h4 class="text">Тестовое задание для разработчика</h4>
        </div>
        <div class="btn">
          <input class="radio" type="radio" />
          <h4 class="text">Тестовое задание для разработчика</h4>
        </div>
        <div class="btn">
          <input class="radio" type="radio" />
          <h4 class="text">Тестовое задание для разработчика</h4>
        </div>
      </div>

      <div class="btn-container">
        <div>
          <router-link class="router" to="/">
            <button class="prev-btn">
              <img src="../img/arrow-right.svg" alt="" />
              <h4>Назад</h4>
            </button>
          </router-link>
        </div>

        <div>
          <router-link class="router" to="/registration_email">
            <button class="next-btn">
              <h4>Далее</h4>
              <img src="../img/arrow-left.svg" alt="" />
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  margin: 30px;
}
.baground_opacity {
  position: fixed;
  background-color: black;
  height: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 60%;
}
.router {
  text-decoration: none;
}
.popup_container {
  background-color: white;
  position: fixed;
  width: 800px;
  height: 570px;
  border-radius: 16px;
  padding: 40px 60px;
}

.title {
  display: flex;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #000000;
  margin-bottom: 30px;
}
.close {
  cursor: pointer;
}
.radio_btn {
  display: flex;
  flex-direction: column;
  margin-bottom: 140px;
}
.btn {
  display: flex;
  margin-bottom: 27px;
}
.radio {
  width: 32px;
  cursor: pointer;
}
.text {
  font-weight: 300;
  font-size: 16px;
  line-height: 130%;
  color: #000000;
}
.btn-container {
  display: flex;
  justify-content: space-between;
}
.prev-btn {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 14px;
  padding-bottom: 14px;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.6);
  background: #d9d9d9;
  border-radius: 6px;
  width: 180px;
  height: 50px;
  cursor: pointer;
}

.next-btn {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 180px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  color: #000000;
  background: #ffc700;
  border-radius: 6px;
  height: 50px;
  cursor: pointer;
}

@media screen and (max-width: 769px) {
  .container {
    margin: 70px 16px;
  }
  .popup_container {
    width: 310px;
    padding: 20px 16px;
    margin-bottom: 24px;
  }
  .title {
    font-size: 20px;
  }
  .prev-btn {
    font-size: 16px;
    width: 139px;
  }
  .next-btn {
    font-size: 16px;
    width: 139px;
  }
}
</style>

