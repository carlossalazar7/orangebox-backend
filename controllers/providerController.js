const { Op } = require('sequelize');
const { Provider } = require('../models');


exports.getAllProviders = async (req, res) => {
  const { page = 1, limit = 10, sort, fields, ...filters } = req.query;

  const offset = (page - 1) * limit;
  const order = sort ? sort.split(',').map(s => s.startsWith('-') ? [s.slice(1), 'DESC'] : [s, 'ASC']) : [];
  const attributes = fields ? fields.split(',') : undefined;

  const where = {};
  for (const key in filters) where[key] = { [Op.eq]: filters[key] };

  const providers = await Provider.findAll({
    where,
    offset: parseInt(offset),
    limit: parseInt(limit),
    order,
    attributes
  });

  res.json(providers);
};

exports.getProviderById = async (req, res) => {
  const provider = await Provider.findByPk(req.params.id);
  if (provider) res.json(provider);
  else res.status(404).json({ error: 'Proveedor no encontrado' });
};

exports.createProvider = async (req, res) => {
  const provider = await Provider.create(req.body);
  res.status(201).json(provider);
};

exports.updateProvider = async (req, res) => {
  const updated = await Provider.update(req.body, { where: { id: req.params.id } });
  res.json(updated);
};

exports.deleteProvider = async (req, res) => {
  await Provider.destroy({ where: { id: req.params.id } });
  res.status(204).send();
};