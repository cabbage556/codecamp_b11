export function emailCheck (email) {
    if(email === undefined || email.includes("@")=== false){
        console.log("올바른 이메일 형식이 아닙니다.")
        return false
    } else {
        return true
    }
}

export function socialNumMasking (socialNum) {
    let sosialArr = socialNum.split("-")
    let beforeMasking = sosialArr[0] + "-" + sosialArr[1][0]
    let resultMasking = String(beforeMasking).padEnd(14,"*")
    return resultMasking
} 

export function makeTemplate(masking, name, email, phoneNum, likeSite) {
    const myTemplate = `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다!!</h1>
            <hr />
            <div>이메일 : ${email}</div>
            <div>주민번호 : ${masking}</div>
            <div>휴대폰번호 : ${phoneNum}</div>
            <div>내가 좋아하는 사이트 : ${likeSite}</div>
        </body>
    </html>
    `
    return myTemplate
}