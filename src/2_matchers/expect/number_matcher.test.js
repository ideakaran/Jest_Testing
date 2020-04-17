console.log('In Jest, there are number matchers as well');
console.log('Number matchers');
test( '2 + 2', function(){
    const value = 2 + 2;
    expect(value).toBeGreaterThan(0);
    expect(value).toBeLessThan(5);
    expect(value).toEqual(4);
    expect(value).toBeLessThanOrEqual(4);
    expect(value).toBeGreaterThanOrEqual(4);
});

console.log('Floating point matchers');
test('adding floting point numbers', function(){
    const value = 0.1 + 0.2;
    expect(value).not.toEqual(0.3); //This won't work because of round error
    expect(value).toBeCloseTo(0.3);
});