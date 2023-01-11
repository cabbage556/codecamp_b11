function getWelcomeTemplate({ email, id, phone, site }) {
  id = id.slice(0, 8) + "******";
  const myTemplate = `
                  <html>
                      <body>
                          <h1>코캠 가입 환영</h1>
                          <hr />
                          <div>이메일: ${email}</div>
                          <div>주민번호: ${id}</div>
                          <div>폰번호: ${phone}</div>
                          <div>선호 사이트: ${site}</div>
                      </body>
                  </html>
                  `;

  return myTemplate;
}
[email, id, phone, site] = [
  "123@cocam.com",
  "123456-1234567",
  "011-1111-2222",
  "cocam.net",
];

console.log(getWelcomeTemplate({ email, id, phone, site }));
