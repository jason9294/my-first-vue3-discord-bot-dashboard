<template>
  <input type="text" placeholder="頻道ID" v-model="channel">
  <input type="text" placeholder="請輸入訊息" v-model="message">
  <button v-on:click="sendMsg">發送訊息</button>
</template>


<script setup>
import { ref } from "@vue/reactivity"
import axios from 'axios'


const message = ref("")
const channel = ref("")

const sendMsg = async() => {
  alert(message.value)
  const res = await axios({
    method: "post",
    url: "http://localhost:5000/sendMsgToChannel",
    data: {
      msg: message.value,
      channelID: channel.value
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
