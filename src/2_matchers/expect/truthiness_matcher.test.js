console.log('In tests we have matchers for distinguishing undefined, null and false');
test('null', () => {
    const n = null;
    expect(n).toBe(null);
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).toBe(0);
    expect(z).not.toBeUndefined();
    expect(z).not.toBeNull();
    expect(z).not.toBeNaN();
    expect(z).not.toBeTruthy();

})