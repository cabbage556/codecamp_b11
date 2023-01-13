// 커피 목록 조회 API를 요청해주세요.
export const getCoffee = () => {
  console.log("index.js 파일의 openMenu 함수 안에서 getCoffee가 실행 됨");
  // 1. 백엔드 서버로 /starbucks API 요청해 커피 데이터를 받는다.
  // 요청 데이터 값이 있고 반환 값이 있는 GET Method

  const app = express();
  app.use(express.json());
  app.get("/starbucks", function (req, res) {
    // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
    const result = res.body;
    res.send(result);
  });

  // 2. 받은 데이터로 createMenuCard 함수를 이용해 메뉴 카드를 모두 만들어주세요.
  for (let i = 0; i < result.length; i++) {
    createMenuCard(result[i]);
  }
};

//createMenuCard({ name: "아메리카노", kcal: 5 })

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

// 값을 꺼낸다
// 꺼낸 값을 인자에 넣어 카드를 만든다
// 다음 값으로 넘어간다
