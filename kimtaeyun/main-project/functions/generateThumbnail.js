const { Storage } = require("@google-cloud/storage");
const sharp = require("sharp");

// GCP 트리거 함수
exports.generateThumbnail = async (event, context) => {
  console.log(JSON.stringify(event)); // 이벤트 객체 확인

  const bucketName = event.bucket; //  // 버킷 이름 가져오기
  const filePathInBucket = event.name; // 업로드된 파일 이름 가져오기(업로드된 폴더 경로까지 포함됨) => 원본이 업로드된 경우 'origin/123.jpg', 썸네일 업로드된 경우 'thumb/s/123.jpg`
  const storage = new Storage(); //    // 스토리지 객체 생성

  // 썸네일 이미지가 업로드된 경우에도 트리거가 발생한다.
  // 썸네일 이미지 업로드로 트리거가 된 경우 썸네일을 다시 생성하지 않도록 바로 함수를 종료시킨다.
  if (filePathInBucket.includes("thumb/")) {
    console.log("파일 이름이 thumb/ 포함중...");
    return;
  }

  // 이미지 파일 사이즈 변경 너비를 key로, 변경 너비에 해당하는 폴더 이름을 value로 갖는 객체 생성
  const widths = {
    320: "s",
    640: "m",
    1280: "l",
  };

  // Promise.all로 병렬 저장하기
  const result = await Promise.all(
    Object.keys(widths) // widths 객체의 key 배열로 map을 사용하여 Promise 배열을 생성하고, Promise.all에 넣는다.
      .map((width) => {
        // widths 객체의 key 값을 'width'로 하나씩 가져온다.
        return new Promise((resolve, reject) => {
          const filename = filePathInBucket.replace("origin/", ""); // 업로드된 파일 이름에서 폴더 경로를 지운다. (예를 들어 'width'가 320인 경우, 'thumb/s' 폴더 내부에 origin 폴더가 생기지 않게하기 위함)
          storage //                          // 스토리지의..
            .bucket(bucketName) //            // 버킷에서..
            .file(filePathInBucket) //        // 폴더 경로가 포함된 파일 이름을 사용해 파일을.. (원본 폴더 경로를 포함하는 파일 이름에서 파일을 읽어오기 위함)
            .createReadStream() //            // 스트림 형태로 읽어온다..
            .pipe(sharp().resize(width * 1)) // 파이프를 통해 sharp 라이브러리의 resize 메서드에 `width` 값에 1을 곱한 값을 넣어 이미지 사이즈를 변경하고.. (height는 width에 맞춰 사이즈가 자동 변경됨)
            .pipe(
              //                                            // 파이프를 통해
              storage //                                    // 스토리지의..
                .bucket(bucketName) //                      // 버킷에..
                .file(`thumb/${widths[width]}/${filename}`) // `thumb/s/` 폴더 내부에 '123.jpg' 파일로.. (버킷 -> thumb 폴더 -> s 폴더 -> 123.jpg)
                .createWriteStream() //                     // 스트림 형태로 저장한다.
            )
            .on("finish", () => resolve("리사이즈 후 저장 성공")) // 저장 성공한 경우 '리사이즈 후 저장 성공` 이 result 배열에 요소로 담긴다.
            .on("error", () => reject("리사이즈 후 저장 실패")); // 저장 실패한 경우 '리사이즈 후 저장 실패' 가 result 배열에 요소로 담긴다.
        });
      })
  );
  console.log("리사이즈 후 저장 결과 확인");
  console.log(result); // 저장 결과를 확인한다.
};
