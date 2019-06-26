const tagsTable = ['折扣', '饮料'];

function getTags(req, res) {
  res.send(tagsTable);
}

export default {
  'GET /api/store-product/:uuid/tags': getTags,
};