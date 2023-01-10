function hipenCkeck(userNum) {
    if (!userNum.includes('-')) {
        console.log('에러발생!!! 형식이 올바르지 않습니다.');
        return false;
    } else {
        return true;
    }
}

function userNumCkeck(firstNum, lastNum) {
    if (firstNum.length === 6 && lastNum.length === 7) {
        return true;
    } else {
        console.log('에러발생!!! 개수를 제대로 입력해 주세요.');
        return false;
    }
}

function userNumHide(firstNum, lastNum) {
    const userHide = lastNum.split('');
    const newUserHide = userHide[0] + '*'.repeat(6);
    console.log(`${firstNum}-${newUserHide}`);
}

function customRegistrationNumber(userNum) {
    const firstNum = userNum.split('-')[0];
    const lastNum = userNum.split('-')[1];

    // 1. - 형식으로 되있어야한다.
    const isHipen = hipenCkeck(userNum);
    if (isHipen === false) return;

    // 2. 주민번호 앞 6자리, 뒤 7자리어야 한다.
    const isUserNum = userNumCkeck(firstNum, lastNum);
    if (isUserNum === false) return;

    // 3. 뒷자리 7자리중, 끝 6자리는 *로 변경해야 한다.
    userNumHide(firstNum, lastNum);
}

customRegistrationNumber('210510-1010101');
customRegistrationNumber('210510-1010101010101');
customRegistrationNumber('2105101010101');
