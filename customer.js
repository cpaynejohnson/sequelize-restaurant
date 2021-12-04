const {sequelize, DataTypes, Model} = require('./db')

class Customer extends Model {}
Customer.init({
    customer_name: DataTypes.STRING,
    payment_type: DataTypes.STRING,
    customer_address: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    waiter_id:DataTypes.INTEGER
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})

module.exports = {Customer}
