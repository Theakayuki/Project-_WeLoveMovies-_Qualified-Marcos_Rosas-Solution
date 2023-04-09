const service = require('./movies.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function list(req, res) {
  const { is_showing } = req.query;
  const data = is_showing ? await service.listIsShowing() : await service.list();
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};