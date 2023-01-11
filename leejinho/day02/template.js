import { emailCheck,socialNumMasking,makeTemplate } from "./sub.js"

function mainRender (name, email, socialNum, phoneNum, likeSite) {
    let valid1 = emailCheck (email) 
    if(valid1 == false) return

    let masking = socialNumMasking (socialNum)

    let template = makeTemplate(masking, name, email, phoneNum, likeSite)

    console.log(template)
}


const name = "코드캠프"
const email = 'support@codebootcamp.co.kr'
const socialNum = "940301-111111"
const phoneNum = "010-0000-0000"
const likeSite = "codebootCamp.co.kr"

mainRender(name, email, socialNum, phoneNum, likeSite)

