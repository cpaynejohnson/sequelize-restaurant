const {sequelize, DataTypes, Model} = require('./db')

class Menu extends Model {}

Menu.init({
    menu_name: DataTypes.STRING,
    age_req: DataTypes.BOOLEAN,
    time_served: DataTypes.STRING
}, {
    sequelize,
    timestamps: false
})

module.exports = {Menu}


//create instances of Musician Model for testing
    // test('menus have age requirement', async() => {
    //     //read test instance from db
    //     const testMenu = await Menu.findOne({where: {menu_name: 'Breakfast'}});
    //     expect(testMenu.age_req).toBe(false)
    // })

    // test('menu has time served', async() => {
    //     //read test Musician instance from db
    //     const testMenu = await Menu.findOne({where: {menu_name: 'Mixed Drinks'}});
    //     expect(testMenu.time_served).toBe('all day')
    // })