/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 커피 메뉴 리스트 가져오기
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
 *                   writer:
 *                     type: string
 *                     example: 철수
 *                   title:
 *                     type: string
 *                     example: 좋은아침 입니다~
 *                   contents:
 *                     type: string
 *                     example: 오늘 하루도 파이팅 하세요!
 */


