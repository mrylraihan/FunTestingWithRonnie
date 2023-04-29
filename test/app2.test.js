let mockPerson; 
let app;
beforeEach(()=>{
    mockPerson={name:'William'}
    jest.mock('../Data/data.js', () => mockPerson)
    app = require('../app')
})

afterEach(()=>{
    jest.clearAllMocks()
    jest.resetModules()
})

describe('test fakeData', ()=>{
    it('should return William', ()=>{
        const result = app.returnData()
        // result.name = 'Wallie'
        expect(result.name).toBe('William')
    })
    it('should return Wallie', ()=>{
        const result = app.returnData()
        result.name = 'Wallie'
        expect(result.name).toBe('Wallie')
    })
    // it('should return Wallie', ()=>{
    //     const result = app.returnData()
    //     // result.name = 'Wallie'
    //     expect(result.name).toBe('Wallie')
    // }) if we dont use jest.resetModules() then this will pass, jest.restModules will reset to a clean mockData and make sure its a fresh instance of the mockedData, {name:'William'} which we set up in the beforeEach
    it('should return William', () => {
        const result = app.returnData()
        // result.name = 'Wallie'
        expect(result.name).toBe('William')
    })
})
