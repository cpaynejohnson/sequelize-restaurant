const {sequelize, DataTypes, Model} = require('./db')

class Chef extends Model {}

Chef.init({
    chef_name: DataTypes.STRING,
    chef_speciality: DataTypes.STRING,
    salary: DataTypes.INTEGER
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})

module.exports = {Chef}