// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Create associations

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Product.belongsToMany(Tag, {
through: ProductTag,
foreignKey: 'product_id'
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Tag.belongsToMany(Product, { 
  through: ProductTag, 
  foreignKey: "tag_id",
 });


// Post.belongsToMany(User, {
// through: Vote,
// as: 'voted_posts',
// foreignKey: 'post_id'
// });
// Vote.belongsTo(User, {
// foreignKey: 'user_id'
// });
// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
