/**
 * @swagger
 * /tokens/phone:
 *   get:
 *     summary: 휴대폰 인증 내역 가져오기
 *     tags: [Tokens]
 *     parameters:
 *       - in: 설명입력
 *         name: number
 *         type: int
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   phone:
 *                     type: string
 *                     example: 01012345678
 *                   token:
 *                     type: string
 *                     example: 123456
 *                   isAuth:
 *                     type: boolean
 *                     example: false
 */

/**
 * @swagger
 * /tokens/phone:
 *   post:
 *     summary: 휴대폰 인증번호 발송하기
 *     tags: [Tokens]
 *     responses:
 *       200:
 *         description: 성공
 */
