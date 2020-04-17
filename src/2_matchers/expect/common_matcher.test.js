console.log('toBe() matcher uses Object.is. Expect returns expectation object.' )
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

console.log('toEqual() matcher checks value only.')
test('\'2\' + 5 equals 7', () => {
    expect('2' + 5).toEqual('25');
});

console.log('toEqual() recursively checks every field of an object or array');
test('object assignment', ()=> {
    var data = {one : 1, two: 2, 'three': 'three'};
    expect(data).not.toEqual({one: 1, two: 2});
    expect(data).toEqual({one: 1, two: 2, three: 'three'});
});

