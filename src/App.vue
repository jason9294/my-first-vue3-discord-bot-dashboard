<template>
<div>
  <input type="text" placeholder="帳號" v-model="account">
  <input type="text" placeholder="密碼" v-model="password">
  <button v-on:click="verify">登入</button>
</div>
<div>
  <input type="text" placeholder="頻道ID" v-model="channel">
  <input type="text" placeholder="請輸入訊息" v-model="message">
  <button v-on:click="sendMsg">發送訊息</button>
</div>
  
</template>


<script setup>
import { ref } from "@vue/reactivity"
import axios from 'axios'


const message = ref("")
const channel = ref("")
const account = ref("")
const password = ref("")

const sendMsg = async() => {
  alert(message.value)
  const res = await axios({
    method: "post",
    url: "http://26.224.196.17:5000/sendMsgToChannel",
    data: {
      msg: message.value,
      channelID: channel.value
    }
  })

  alert(res.data)
}

const verify = async() => {
  alert(message.value)
  const res = await axios({
    method: "post",
    url: "http://26.224.196.17:5000/verify",
    data: {
      account: account.value,
      password: password.value
    }
  })

  alert(res.data)
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
