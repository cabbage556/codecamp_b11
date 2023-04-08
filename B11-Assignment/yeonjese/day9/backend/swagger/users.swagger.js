/**
 * @swagger
 * /users:
 *   get:
 *     summary: 게시글 가져오기
 *     tags: [users]
 *     parameters:
 *       - in: query
 *         name: number
 *         type: int
 *     responses:
 *       200:
 *         description: 성공했따
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   email:
 *                     type: string
 *                     example: aa@naver.com
 *                   name:
 *                     type: string
 *                     example: 철수
 *                   phone:
 *                     type: string
 *                     example: "010-1515-1515"
 *                   personal:
 *                     type: string
 *                     example: "1234567-1234567"
 *                   prefer:
 *                     type: string
 *                     example: "https://naver.com"
 */
