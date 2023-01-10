import {checkEmail, getWelcomeTemplate, sendTemplateToEmail} from './email.js'

//본문
function createUser({name, age, school , email, createdAt}){
    //1.이메일 정상인지 확인(1.존재여부 2.@여부있는지)
    const isValid = checkEmail(email)
    if(isValid === false)
        return
    
    //2.가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({name, age, school , email, createdAt})
    //3.이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(email, myTemplate)
}


const name = "철수"
const age = 8
const school = "다람쥐초등학교"
const email = "aa.com"
const createdAt = "2023-01-10" 
// new Date()
createUser({name, age, school , email, createdAt})