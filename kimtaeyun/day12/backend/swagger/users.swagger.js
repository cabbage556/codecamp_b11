/**
 * @swagger
 * /users:
 *   post:
 *     summary: 회원가입하기
 *     description: 회원가입을 요청하는 post API입니다.
 *     tags: [User]
 *     requestBody:
 *       description: 이름, 이메일, 주민번호, 선호사이트, 비밀번호, 휴대폰번호를 전달하면 됩니다.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 김태윤
 *               email:
 *                 type: string
 *                 example: liberty556@gmail.com
 *               personal:
 *                 type: string
 *                 example: 999999-9999999
 *               prefer:
 *                 type: string
 *                 example: https://www.naver.com
 *               pwd:
 *                 type: string
 *                 example: 1234
 *               phone:
 *                 type: string
 *                 example: "01082433833"
 *     responses:
 *       200:
 *         description: 회원 id 응답
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: 63cd287745801f2ca97337f7
 *       422:
 *         description: 에러 문구 반환
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: 에러!! 핸드폰 번호가 인증되지 않았습니다. / 에러!! 이메일 형식이 올바르지 않습니다.
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 유저정보 모두 가져오기
 *     description: 객체 형태의 유저정보를 배열에 담아 응답하는 get API입니다.
 *     tags: [User]
 *     responses:
 *       200:
 *         description: 유저정보 객체 배열 응답
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   og:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: String
 *                         example: 네이버
 *                       description:
 *                         type: String
 *                         example: 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요
 *                       image:
 *                         type: String
 *                         example: https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png
 *                   name:
 *                     type: string
 *                     example: 김태윤
 *                   email:
 *                     type: string
 *                     example: liberty556@gmail.com
 *                   personal:
 *                     type: string
 *                     example: 931111-*******
 *                   prefer:
 *                     type: string
 *                     example: http://www.naver.com
 *                   phone:
 *                     type: string
 *                     example: "01082433833"
 */
