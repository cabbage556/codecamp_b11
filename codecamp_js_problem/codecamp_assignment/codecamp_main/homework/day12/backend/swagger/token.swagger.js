/**
 * @swagger
 * /tokens/phone:
 *   post:
 *     summary: 휴대폰 토큰 인증 요청하기
 *     description: 휴대폰 인증을 위해 토큰을 요청하는 post API입니다.
 *     tags: [Token]
 *     requestBody:
 *       description: 휴대폰 번호를 전달하면 됩니다.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "01082433833"
 *     responses:
 *       200:
 *         description: 인증 토큰 발신 성공 안내 응답
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: 휴대폰으로 인증 문자가 전송되었습니다!
 *       422:
 *         description: 휴대폰 형식 오류 안내 응답
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: 에러!! 휴대폰 형식이 올바르지 않습니다.
 */

/**
 * @swagger
 * /tokens/phone:
 *   patch:
 *     summary: 토큰 인증 완료하기
 *     description: 토큰 인증을 완료하는 patch API입니다.
 *     tags: [Token]
 *     requestBody:
 *       description: 휴대폰번호, 토큰을 전달하면 됩니다.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "01082433833"
 *               token:
 *                 type: string
 *                 example: 111111
 *     responses:
 *       200:
 *         description: 인증 완료 true 응답
 *         content:
 *           application/json:
 *             schema:
 *               type: boolean
 *               example: true
 *       422:
 *         description: 인증 실패 false 응답
 *         content:
 *           application/json:
 *             schema:
 *               type: boolean
 *               example: false
 */
