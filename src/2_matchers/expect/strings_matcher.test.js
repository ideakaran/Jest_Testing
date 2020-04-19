console.log('We can check Strings against regular expression with toMatch');

test('there is no I in team', () => {
   expect('team').not.toMatch('I');
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
})