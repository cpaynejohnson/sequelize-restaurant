const {sequelize, DataTypes, Model} = require('./db')

class Meal extends Model {}
Meal.init({
    breakfast_menu: DataTypes.STRING,
    lunch_menu: DataTypes.STRING,
    dinner_menu: DataTypes.STRING,
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})

module.exports = {Meal}
