// const express = require('express') // 옛날 방식 -> commonJs 방식
import express from "express"; // 요즘 방식 -> module 방식
import 'dotenv/config.js'

// 이메일 가져오기
import {checkEmail,makeTemplate,sendTemplateToEmail} from "./email.js"

import { checkPhone, getToken, sendTokenToSMS } from "./phone.js"; 

// swagger 만들기
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {options} from './swagger/config.js'
import cors from 'cors'
import mongoose from "mongoose";
import { Board } from "./models/board.model.js";
import { Token } from "./models/token.model.js"

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.use(express.json());
app.use(cors())

app.get("/boards", async function (req, res) {
    const result = await Board.find()
    res.send(result);
});


app.post("/boards", async function (req, res) {
    const board = new Board({
        writer: req.body.writer,
        title : req.body.title,
        contents : req.body.contents
    })
    await board.save() 
    
    res.send("게시물 등록에 성공하였습니다.");
});

//////////////////////////////////////////

app.post("/tokens/phone", async function (req, res) {
    console.log(req);
    
    let myPhone = req.body.phone;

    const isValid = checkPhone(myPhone);
    if (isValid == false) return;

    const myToken = getToken();

    // sendTokenToSMS(myPhone, myToken);    // 잠시 주석 ** 

    // 해당 핸드폰 번호가 token에 있다면 최신 토큰 덮어씀 // find() & update // 하나에 하나
    let result = await Token.findOne({phone: myPhone})
    
    // 값이 없을 시 
    if(result == null){
        const token = new Token({
            phone : myPhone,
            token : myToken,
            isAuth : false
        })
        await token.save()
    } 
    else { 
        await Token.updateOne({phone : myPhone},
        {token : myToken},{isAuth : false})
    }
    
    // 4-6 몽고DB에 저장됨 save() , await / asnyc
    

    res.send(`${myToken} 인증번호 전송에 성공하였습니다.`);
});

// patch 자원의 부분 교체 <=> put : 자원 전체 교체
app.patch("/tokens/phone", async function(req, res){
    let {phone, token} = req.body
    //  알아보기 쉽게 재할당
    let userToken = token
    let dbToken = await Token.findOne({phone})

    if(dbToken === null){
        res.send("DB에 저장된 정보가 없습니다. false")
    }

    if(dbToken.token === userToken){
        await Token.updateOne({phone},
            {isAuth : true})
            res.send("true")
    }else {
        await Token.updateOne({phone},
            {isAuth : false})
        res.send("인증번호가 일치하지 않습니다. false")
    }

    console.log("user가 요청한 token : ", token )
    console.log("DB에 저장된 token : ", dbToken.token)
})



// 회원등록 API
// {name,age,school,email} req.body.~에서 받아옴
app.post("/users", function(req, res){
    // const name = req.body.name
    // const age = req.body.age
    // const school = req.body.school
    // const email = req.body.email
    const {name, age, school, email} = req.body // 구조분해할당

    // 1. 이메일이 정상인지 확인(1- 존재여부, 2 @포함 여부)
    const isValid = checkEmail(email)
    if(isValid == false) return
    
    // 2. 가입환영 템플릿 만들기
    let template = makeTemplate(name,age,school)
    
    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(email, template)
    
    res.send("가입완료")
    console.log(`${email}로, ${template}전달하였씁니당`)
})

// 디버그 모드
mongoose.set("debug",true)


mongoose.connect('mongodb://my-database:27017/mydocker')
    .then(()=> console.log("db 접속에 성공하였습니다."))
    .catch(()=> console.log("db접속에 실패하였습니다."))

app.listen(4000);
