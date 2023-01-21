import coolsms from 'coolsms-node-sdk';

const mysms = coolsms.default;

export function checkPhone(phone) {
    if (phone.length < 10 || phone.length > 11) {
        console.log('에러 발생!! 핸드폰 번호를 올바르게 입력해 주세요!!!');
        return false;
    } else {
        return true;
    }
}

export function getToken() {
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    return result;
}

export async function sendTokenToSMS(phone, token) {
    // const messagwService = new mysms(process.env.APIKEY, process.env.APISECRET);
    // const res = await messagwService.sendOne({
    //     to: phone,
    //     from: '01098062505',
    //     text: `[코드캠프] 안녕하세요?! 요청하신 인증번호는 ${token}입니다.`,
    // });
    console.log(res);
    console.log(`${phone}으로 인증 문자가 전송되었습니다.`);
}
