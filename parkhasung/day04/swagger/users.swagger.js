/**
 * @swagger
 * /users:
 *   get:
 *     summary: 유저목록 가져오기
 *     tags: [Users]
 *     parameters:
 *       - in: query
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
 *                   email:
 *                     type: string
 *                     example: 영희
 *                   phone:
 *                     type: string
 *                     example: 010-1234-5678
 *                   personal:
 *                     type: string
 *                     example: 000000-1234567
 *                   prefer:
 *                     type: string
 *                     example: https://naver.com
 */
