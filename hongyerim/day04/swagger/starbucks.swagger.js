/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 커피정보 가져오기
 *     tags: [Starbucks]
 *     parameters:
 *       - in: query
 *         name: name
 *         type: string
 *       - in: query
 *         name: kcal
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
 *                     name:
 *                       type: string
 *                       example: 아메리카노
 *                     kcal:
 *                       type: int
 *                       example: 1
 */

/**
 * @swagger
 * /starbucks:
 *   post:
 *     summary: 커피정보 등록하기
 *     tags: [Starbucks]
 *     parameters:
 *       - in: query
 *         name: name
 *         type: string
 *       - in: query
 *         name: kcal
 *         type: int
 *     responses:
 *       200:
 *         description: 커피정보가 등록되었습니다!
 */
