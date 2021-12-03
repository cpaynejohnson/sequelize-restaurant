const {sequelize, DataTypes, Model} = require('./db')
//import models
const { MenuItem } = require('./meal')
const { Menu } = require('./menu')
const { Customer } = require('./customer')
const { Chef } = require('./chef')

//associate models
//adds foreign key to musician table connecting a menu item instance to a specific menu
MenuItem.belongsTo(Menu)
Customer.belongsTo(Waiter)
Menu.belongsTo(Chef)
//gives us sequelize methods for a one to many relationship
Menu.hasMany(MenuItem)
Waiter.hasMany(Customer)
Chef.hasMany(Menu)


//export models with added associations
module.exports = {Menu, MenuItem, sequelize}