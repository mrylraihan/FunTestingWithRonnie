const app = require('../app')

beforeEach(()=>{
    jest.resetAllMocks()
})
describe('test addNumbers', ()=>{
    it('test addNumbers Origin Method', ()=>{
        const num = 1
        const result = app.addNumbers(num)
        expect(result).toBe(1)
    })
    // jest.spyOn(app, 'addNumbers').mockImplementation((a,b)=>a+b)
    it('test addNumbers spyedOn', ()=>{
        jest.spyOn(app, 'addNumbers').mockImplementation((a, b) => a + b)
        const num1 = 1
        const num2 = 1
        const result = app.addNumbers(num1, num2)
        expect(result).toBe(2)
    })
    it('test addNumbers Origin Method', ()=>{
        // jest.spyOn(app, 'addNumbers').mockImplementation((a,b)=>a-b)
        const num1 = 1
        // const num2 = 1
        // const result = app.addNumbers(num1, num2)
        const result = app.addNumbers(num1)
        expect(result).toBe(1)
    })

})