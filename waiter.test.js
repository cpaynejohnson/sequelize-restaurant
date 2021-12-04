const { Waiter } = require("./waiter");
const { sequelize } = require("./db");

describe("Restuarant Database", () => {
    beforeAll(async () => {
        await sequelize.sync({ force:true });

        const arrayOfWaiters = [
            {waiter_name: 'James', waiter_salary: 700},
            {waiter_name: 'Cathy', waiter_salary: 1000},
            {waiter_name: 'Jimmy', waiter_salary: 800},
            {waiter_name: 'Carl', waiter_salary: 700},
        ]
          
        await Waiter.bulkCreate(arrayOfWaiters)
    
    })
    test("waiter has a salary", async () => {
        const testWaiter = await Waiter.findOne({where: {waiter_name: "James", waiter_salary: 700 }})
        expect(testWaiter.waiter_name).toBe("James")
        expect(testWaiter.waiter_salary).toBe(700)
        return testWaiter.waiter_name
    
    console.log(testWaiter.waiter_name)
    })
})
