const {truncate} = require('./string-format');

test('truncates a string corectly', ()=>{
    expect(truncate("I am going home", 6)).toBe("I am g...");
});