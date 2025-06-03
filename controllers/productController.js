const { Op } = require('sequelize');
const { Product } = require('../models');

exports.getAllProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort, fields, ...filters } = req.query;

    const offset = (parseInt(page) - 1) * parseInt(limit);

    const order = sort
      ? sort.split(',').map(s => s.startsWith('-') ? [s.slice(1), 'DESC'] : [s, 'ASC'])
      : [];

    const attributes = fields ? fields.split(',') : undefined;

    const where = {};
    for (const key in filters) {
      if (filters[key] !== undefined) {
        where[key] = { [Op.eq]: filters[key] };
      }
    }

    const products = await Product.findAll({
      where,
      offset,
      limit: parseInt(limit),
      order,
      attributes
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos', details: error.message });
  }
};

exports.getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ error: 'Producto no encontrado' });
};

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const updated = await Product.update(req.body, { where: { id: req.params.id } });
  res.json(updated);
};

exports.deleteProduct = async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.status(204).send();
};