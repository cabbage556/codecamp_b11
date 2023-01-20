import coolsms from 'coolsms-node-sdk';

const mysms = coolsms.default;

export function checkPhone(myphone) {
    if (myphone.length < 10 || myphone.length > 11) {
        console.log('에러 발생!! 핸드폰 번호를 올바르게 입력해 주세요!!!'); // early-exit
        return false;
    } else {
        return true;
    }
}

export function getToken() {
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    return result;
}

export async function sendTokenToSMS(myphone, result) {
    const messagwService = new mysms(process.env.APIKEY, process.env.APISECRET);
    const res = await messagwService.sendOne({
        to: myphone,
        from: '01098062505',
        text: `안녕하세요!! 인증번호는 ${result}입니다!!`,
    });
    console.log(res);
}
