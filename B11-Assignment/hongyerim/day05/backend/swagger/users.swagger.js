/**
 * @swagger
 * /users:
 *   get:
 *     summary: 회원정보 가져오기
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: email
 *         type: string
 *       - in: query
 *         name: name
 *         type: string
 *       - in: query
 *         name: phone
 *         type: string
 *       - in: query
 *         name: personal
 *         type: string
 *       - in: query
 *         name: prefer
 *         type: string
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   email:
 *                     type: string
 *                     example: aaa@gmail.com
 *                   name:
 *                     type: string
 *                     example: 철수
 *                   phone:
 *                     type: string
 *                     example: 010-1111-1111
 *                   personal:
 *                     type: string
 *                     example: 220110-1111111
 *                   prefer:
 *                     type: string
 *                     example: https://naver1.com
 *
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: 회원정보 등록하기
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: email
 *         type: string
 *       - in: query
 *         name: name
 *         type: string
 *       - in: query
 *         name: phone
 *         type: string
 *       - in: query
 *         name: personal
 *         type: string
 *       - in: query
 *         name: prefer
 *         type: string
 *     responses:
 *       200:
 *         description: 회원정보가 등록되었습니다!!
 */
