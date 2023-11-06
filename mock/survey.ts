const list = new Array(Math.floor(Math.random() * 100))
  .fill(1)
  .map((item, index) => {
    return {
      _id: index, // 服务端 mongodb ，自动，_id 不重复
      title: 'title' + index,
      isStar: false,
      isPublished: false,
      answerCount: index,
      createdAt: Math.floor(new Date().getTime() / 1000),
    };
  });

export default {
  'GET /api/question': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: list },
      errno: 0,
    });
  },
};
