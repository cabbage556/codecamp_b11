// 커피 목록 조회 API를 요청해주세요.
const getCoffee = () => {
    console.log("index.js 파일의 openMenu 함수 안에서 getCoffee가 실행 됨");
    // 1. 백엔드 서버로 /starbucks API 요청해 커피 데이터를 받는다.
    axios.get("http://localhost:3000/starbucks").then((res) => {
        // 2. 받은 데이터로 createMenuCard 함수를 이용해 메뉴 카드를 모두 만들어주세요.
        let result = res.data;
        for (let i = 0; i < result.length; i++) {
            createMenuCard(result[i]);
        }
    });

    //객체이니깐 배열의 인덱스값으로 각 전체 객체 불러오기
};

const createMenuCard = (data) => {
    const menuCardWrapper = document.createElement("div");
    menuCardWrapper.className = "Menu_Card_Wrapper";

    const menuCardImgBox = document.createElement("div");
    menuCardImgBox.className = "Menu_Card_ImgBox";

    const menuCardName = document.createElement("div");
    menuCardName.className = "Menu_Card_Name";
    menuCardName.textContent = data?.name || "메뉴이름";

    const menuCardInfo = document.createElement("div");
    menuCardInfo.className = "Menu_Card_Info";
    menuCardInfo.textContent = data?.kcal || "칼로리";

    const menuWrapper = document.querySelector("#Menu_Background");
    menuCardWrapper.appendChild(menuCardImgBox);
    menuCardWrapper.appendChild(menuCardName);
    menuCardWrapper.appendChild(menuCardInfo);
    menuWrapper.appendChild(menuCardWrapper);
};
