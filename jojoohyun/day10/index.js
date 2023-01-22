import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import { Token } from './models/token.model.js';
import { checkPhone, getToken, sendTokenToSMS } from './phone.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/tokens/phone", async (req,res) => {
  
    const phone = req.body.phone
    // findone({phone},)
    

    // 1. 휴대폰 번호 자릿수 맞는지 확인하기 (10~11자리)
    const isValid = checkPhone(phone)
    if(isValid ===  false){
        return
    }
  
   // 2. 휴대폰 인증번호 6자리 생성
    const myToken = getToken()
    console.log("@@@@@@@@@@@@"+myToken);

    
    const doc = await Token.findOne({phone})
    doc === null ? new Token({
        token: mytoken,
        phone: phone,
        isAuth: false,
    }).save() 
    : await Token.updateOne({phone : phone} , {token : myToken , isAuth : true})

   // 3. 번호에 인증번호(토큰) 전송하기 (돈이 아까워서 잠시 주석!!!)
    // sendTokenToSMS(phone, mytoken)
  
    res.send("인증완료")
  })
  
  app.patch("/tokens/phone", async(req, res)=>{

    const { phone, token } = req.body
    console.log(phone)
    const doc = await Token.findOne({ phone })
    if(doc === null){
        res.send("DB에 저장된 정보가 없습니다. false")
    }

    if(doc.token === token){
        await Token.updateOne({phone},
            {isAuth : true})
            res.send("true")
    }else {
        await Token.updateOne({phone},
            {isAuth : false})
        res.send("인증번호가 일치하지 않습니다. false")
    }
})
    
    // 삼항연산자법
    // return doc === null ? await Token.updateOne({phone : phone} , { isAuth : true})  
    // : res.send("false");
  
    // res.send("true");
  







mongoose.connect("mongodb://my-database:27017/mydocker")
  .then(() => console.log("db접속에 성공하였습니다."))
  .catch(() => console.log("db접속에 실패하였습니다."))

// 3000 => 포트번호 listen = 기다린다(포스트맨에서 샌드버튼 누르는것을 기다린다) 
app.listen(4000)