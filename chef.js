const {sequelize, DataTypes, Model} = require('./db')

//create model for musicians in our database
class Chef extends Model {
    //add custom query methods here
}

//create attributes for model using init method
Chef.init({
    chef_name: DataTypes.STRING,
    chef_speciality: DataTypes.STRING,
    salary: DataTypes.INTEGER
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})

module.exports = {Chef}

test('Has a chef', async() => {
    await Chef.bulkCreate([{chef_name: 'Lamin', chef_speciality: 'Sous-Chef'},
                        {chef_name: 'Crystal', chef_speciality: 'Dessert'},
                        {chef_name: 'Anuja', chef_speciality: 'Entree'},
                        {chef_name: 'Nahima', chef_speciality: 'Sauce'}])
           const testChef = await Chef.findOne({
          where: {
             chef_name: 'Lamin'
          }
        });
     expect(testChef.chef_name).toBe('Lamin')
     expect(testChef.chef_speciality).toBe('Sous-Chef')
 
 })
