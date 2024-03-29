import express from "express"         // 요즘방식 => module
import cors from 'cors';
import {getMyemail,sendMy} from "./myEmail.js"
import {checkPhone, getToken, sendTokenToSMS} from "./phone.js"
import 'dotenv/config'


import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import {options} from "./swagger/config.js"


const app = express()
app.use(cors());
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.post("/tokens/phone",function (req, res){
  
  const myphone = req.body.qqq;


    const isValid = checkPhone(myphone);
    if(isValid === false) return;
    
    const mytoken = getToken();
  
    sendTokenToSMS(myphone,mytoken);

    res.send('전송완료')
})


app.post('/login', (req, res) => {

  const {SignupName,SignupPersonal,PhoneNumber01,PhoneNumber02,PhoneNumber03,SignupPrefer,SignupEmail} = req.body

  let mytemplate = getMyemail({SignupName,SignupPersonal,PhoneNumber01,PhoneNumber02,PhoneNumber03,SignupPrefer,SignupEmail})

  sendMy(SignupEmail,mytemplate)

  res.send("발송완료")
})

app.listen(3000)