//import the associated models from associations.js
const {Menu, Meal, Waiter, Chef, Customer} = require('./associations')
const {sequelize} = require('./db')

describe('Menu Item Database', () => {
    beforeAll(async() => {
        //reset database
        await sequelize.sync({force:true})
        //create arrays for each model to be tested
        const arrayOfMenus = [
            {food_name: 'Egg muffin', chef_id: '2', price: 2},
            {food_name: 'French Toast', chef_id: '3', price: 5},
            {food_name: 'Burger', chef_id: '3', price: 6},
            {food_name: 'Fries', chef_id: '2', price: 3},
            {food_name: 'Pasta', chef_id: '1', price: 8},
            {food_name: 'Daquiri', chef_id: '3', price: 6},
            {food_name: 'Tacos', chef_id: '4', price: 8},
            {food_name: 'Martini', chef_id: '1', price: 5}
        ]
        const arrayOfMeals =[
            {breakfast_menu: 'French toast', lunch_menu: 'French Dip Sandwiches', dinner_menu: 'chicken'},
            {breakfast_menu: 'Egg muffin', lunch_menu: 'Tacos', dinner_menu: 'Spaghetti'},
                        
        ]
        const arrayOfWaiters = [
            {waiter_name: 'James', waiter_salary: 700},
            {waiter_name: 'Cathy', waiter_salary: 1000},
            {waiter_name: 'Jimmy', waiter_salary: 800},
            {waiter_name: 'Carl', waiter_salary: 700},
        ]

        const arrayOfChefs = [    
            {chef_name: 'Lamin', chef_speciality: 'Sous-Chef'},
            {chef_name: 'Crystal', chef_speciality: 'Dessert'},
            {chef_name: 'Anuja', chef_speciality: 'Entree'},
            {chef_name: 'Nahima', chef_speciality: 'Sauce'}
        ]

        const arrayOfCustomers = [
            {customer_name: "CJohnson",payment_type: "card", customer_address: "500 Apple Ave",phone_number: 7779311000},
            {customer_name: "ASurawashi",payment_type: "card", customer_address: "101 Main St",phone_number: 123456789},
            {customer_name: "NAbea",payment_type: "cash", customer_address: "200 River Rd",phone_number: 746329383},
            {customer_name: "LSuso",payment_type: "cash", customer_address: "2304 Main St",phone_number: 8836593204}
        ]
        
        //add arrays to database
        await Menu.bulkCreate(arrayOfMenus)
        await Meal.bulkCreate(arrayOfMeals)
        await Waiter.bulkCreate(arrayOfWaiters)
        await Chef.bulkCreate(arrayOfChefs)
        await Customer.bulkCreate(arrayOfCustomers)
    })
   

    test('price of food can be found', async() => {
        //read test Band instance from db
        const testMenu = await Menu.findOne({where: {food_name: 'French Toast'}});
        expect(testMenu.price).toBe(5)
        const testMenu2 = await Menu.findOne({where: {food_name: 'Burger'}});
        expect(testMenu2.price).toBe(6)
    })

    test('meals have many menus', async()=> { 
        //create 2 test instances of Menu items
        const testMeal = await Meal.findOne({where: {breakfast_menu: 'Egg muffin'}})
        expect(testMeal.breakfast_menu).toBe('Egg muffin')
        expect(testMeal.lunch_menu).toBe('Tacos')
        expect(testMeal.dinner_menu).toBe('Spaghetti')
 
    })

    test("waiter has a salary", async () => {
        const testWaiter = await Waiter.findOne({where: {waiter_name: "James"}})
        expect(testWaiter.waiter_name).toBe('James')
        expect(testWaiter.waiter_salary).toBe(700)
                
    })

    test('Has a chef', async() => {
        const testChef = await Chef.findOne({where: {chef_name: 'Lamin'}});
        expect(testChef.chef_speciality).toBe('Sous-Chef')
    
    })
    
    test('Has customers', async() => {
        const testCustomer = await Customer.findOne({where: {customer_address: '200 River Rd'}});
        expect(testCustomer.customer_name).toBe('NAbea')
    })

 })
 