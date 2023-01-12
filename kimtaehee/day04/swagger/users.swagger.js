/**
 * @swagger
 * /users:
 *   get:
 *     summary: 게시글 가져오기
 *     tags: [Board]
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
 *                   number:
 *                     type: int
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "철수"
 *                   phone:
 *                     type: string
 *                     example: "01012345678"
 *                   personal:
 *                     type: string
 *                     example: "2201102222222"
 *                   prefer:
 *                      type: string
 *                      prefer: "https://naver.com"
 *
 *
 *
 */
