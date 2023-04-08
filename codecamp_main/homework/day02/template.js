import { getWelcomeTemplate } from "./utils.js";

const createWelcomeTemplate = function ({
  email,
  regNumber,
  phoneNumber,
  favoriteSite,
}) {
  const welcomeTemplate = getWelcomeTemplate({
    email,
    regNumber,
    phoneNumber,
    favoriteSite,
  });
  console.log(welcomeTemplate);
};

const email = "libert556@gmail.com";
const regNumber = "210510-1010101";
const phoneNumber = "010-1234-5678";
const favoriteSite = "netflix.com";
createWelcomeTemplate({ email, regNumber, phoneNumber, favoriteSite });
