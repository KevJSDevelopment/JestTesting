import {functions} from '../firstTest'

test('add numbers & returns sum', () => {
   expect(functions.add(3, 4)).toBe(7)
});

test('adds two numbers & gives sum', () => {
    expect(functions.add(3, 4)).not.toBe(8)
})

test('expect null', () => {
    expect(functions.isNull()).toBeNull()
 });

test('expect user to not be null', () => {
    expect(functions.createUser()).not.toBe(null)
});

test('expect user to be an object with first', () => {
    expect(functions.createUser()).toEqual({ firstName: "Mickey", lastName: "Mouse"})
});

test('expect array to contain admin', () => {
    const array = ['admin', 'kevin', 'notAdmin']
    expect(array).toContain('admin')
})

//working with async
test('user should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})