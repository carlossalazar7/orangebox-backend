'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    providerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });

  Product.associate = function(models) {
    Product.belongsTo(models.Provider, { foreignKey: 'providerId' });
  };
  
  return Product;
};