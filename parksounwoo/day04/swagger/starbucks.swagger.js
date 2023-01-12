/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 커피 메뉴 가져오기
 *     tags: [starbucks]
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
 *                   kcal:
 *                     type: int
 *                     example: 5
 *                   name:
 *                     type: string
 *                     example: "아메리카노"
 */
