<script setup>
import { ref } from "vue";

const errors = ref([]);
const name = ref(null);
const lastName = ref(null);
const email = ref("");
const wrongEmail = ref(false);

const emailRe =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmailValid(email) {
  if (emailRe.test(email)) {
    wrongEmail;
  } else {
    wrongEmail.value = true;
  }
}
</script>

<template>
  <div class="container">
    <div class="baground_opacity"></div>
    <div class="popup_container">
      <form id="app" @submit.prevent="checkForm" method="post">
        <div class="title">
          <input
            class="input"
            type="text"
            placeholder="Введите имя"
            id="name"
            v-model="name"
            name="name"
          />

          <router-link to="/">
            <span class="close">
              <img src="../img/close_icon.svg" alt="" />
            </span>
          </router-link>
        </div>
        <div class="input-container">
          <input
            class="input"
            type="text"
            placeholder="Введите фамилию"
            id="lastName"
            v-model="lastName"
            name="lastName"
            required
          />
        </div>

        <div class="input-container">
          <input
            class="input"
            type="email"
            placeholder="Введите E-mail"
            id="email"
            v-model="email"
            name="email"
            required
            @change="isEmailValid"
          />
          <span v-show="wrongEmail" class="erorr">Incorrect email address</span>
        </div>
        <div class="input-container">
          <input
            class="input"
            type="text"
            placeholder="+380(99) 999-99-99"
            required
          />
        </div>

        <div class="btn-container">
          <div>
            <router-link class="router" to="/similarDev-test/registration">
              <button class="prev-btn">
                <img src="../img/arrow-right.svg" alt="" />
                <h4 class="submit-btn">Назад</h4>
              </button>
            </router-link>
          </div>

          <div>
            <router-link class="router" to="/similarDev-test">
              <button type="sumbit" value="Submit" class="next-btn">
                <h4>Регистрироваться</h4>
              </button>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.erorr {
  color: red;
  position: absolute;
  bottom: -8px;
  left: 20px;
  padding-left: 4px;
  padding-right: 4px;
  font-size: 14px;
  background: #fff;
}
.router {
  text-decoration: none;
}
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
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 34px;
}
.input-container {
  position: relative;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 34px;
}
.input {
  background-color: transparent;
  border: none;
  height: 50px;
  width: 50%;
  padding-left: 10px;
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
  margin-top: 120px;
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
  text-decoration: none;
}

.next-btn {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
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
    margin-left: 8px;
    font-size: 16px;
  }
}
</style>
