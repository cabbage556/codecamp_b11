import { User } from "../../models/user.model.js";
import { formatPersonal } from "../../srcs/utils.js";
import axios from "axios";
import cheerio from "cheerio";

export const createSaveUserDocument = async ({
  name,
  email,
  personal,
  prefer,
  pwd,
  phone,
  og,
}) => {
  const user = await new User({
    name,
    email,
    personal: formatPersonal({ personal }),
    prefer,
    pwd,
    phone,
    og,
  }).save();
  return user._id;
};

export const getAllUsers = async () => {
  // name, email, personal, prefer, phone, og만 골라서 가져오기
  // _id는 제외하기
  return await User.find().select([
    "name",
    "email",
    "personal",
    "prefer",
    "phone",
    "og",
    "-_id",
  ]);
};

export const getOgContent = async ({ prefer }) => {
  const og = {};
  const preferData = await axios.get(prefer);
  const $ = cheerio.load(preferData.data);
  $("meta").each((index, el) => {
    if ($(el).attr("property") && $(el).attr("property").includes("og:")) {
      const key = $(el).attr("property");
      const value = $(el).attr("content");

      if (key.includes("title")) og["title"] = value;
      else if (key.includes("image")) og["image"] = value;
      else if (key.includes("description")) og["description"] = value;
    }
  });
  return og;
};
