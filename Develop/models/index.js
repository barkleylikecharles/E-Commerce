// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Create associations
// Product belongs to category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
//Product belongs to many tags
Product.belongsToMany(Tag, {
through: ProductTag,
foreignKey: 'product_id'
});
// Category has many products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
// Tag belongs to many products 
Tag.belongsToMany(Product, { 
  through: ProductTag, 
  foreignKey: "tag_id",
 });



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
