const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/sendMsgToChannel', async(req, res) => {
  console.log(req.body.msg)
  console.log(req.body.channelID)
    
  try{
    await axios({
      method:"post",
      url:`https://discord.com/api/channels/${req.body.channelID}/messages`,
      headers:{
          Authorization: `Bot ${process.env.BOT_TOKEN}`
      },
      data:{
          content:req.body.msg
      }
    }) 
  
    res.send("Done!")
  }
  catch(e){
    res.send('error')
  }

})

app.post('/verify', async(req, res) => {
  console.log(req.body.account)
  console.log(req.body.password)
    
  try{
    await axios({
      method:"post",
      url:`https://discord.com/api/channels/${req.body.channelID}/messages`,
      headers:{
          Authorization: `Bot ${process.env.BOT_TOKEN}`
      },
      data:{
          content:req.body.msg
      }
    }) 
  
    res.send("Done!")
  }
  catch(e){
    res.send('error')
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})