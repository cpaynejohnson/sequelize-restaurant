const {sequelize, DataTypes, Model} = require('./db')
//import models
const { Meal } = require('./meal')
const { Menu } = require('./menu')
const { Customer } = require('./customer')
const { Chef } = require('./chef')
const { Waiter } = require('./waiter')

//adds foreign keys to connect associated models
Menu.belongsTo(Meal)
Customer.belongsTo(Waiter)
Menu.belongsTo(Chef)
//gives us sequelize methods for a one to many relationship
Meal.hasMany(Menu)
Waiter.hasMany(Customer)
Chef.hasMany(Menu)


//export models with added associations
module.exports = {Menu, Meal, Customer, Chef, Waiter, sequelize}