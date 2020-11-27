const sum2 = require('./sum2')

test('adds 3+5 to equal 8',()=>{
    expect(sum2(3,5,true)).toBe(8)
});
test('adds 3*5 to equal 15', ()=>{
    expect(sum2(3,5,false)).toBe(15)
})