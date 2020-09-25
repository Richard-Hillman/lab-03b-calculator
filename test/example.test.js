
import {addNumbers} from '../math.js'
import {subtractNumbers} from '../math.js'
import {multiplyNumbers} from '../math.js'
import {divideNumbers} from '../math.js'

const test = QUnit.test;

// ==================================================================
test('should add two values', (expect) => {
    const input1 = 2 
    const input2 = 3
    const expected = 5;
    
    const actual = addNumbers(input1, input2);

    expect.equal(actual, expected);
});


// ===================================================================
test('should subtract two values', (expect) => {
    const input1 = 5 
    const input2 = 1
    const expected = 4;
    

    const actual = subtractNumbers(input1, input2);


    expect.equal(actual, expected);
});



// =====================================================================
test('should multiply two values', (expect) => {
    const input1 = 2 
    const input2 = 2
    const expected = 4;
    

    const actual = multiplyNumbers(input1, input2);


    expect.equal(actual, expected);
});



// ======================================================================
test('should divide two values', (expect) => {
    const input1 = 8 
    const input2 = 2
    const expected = 4;
    

    const actual = divideNumbers(input1, input2);


    expect.equal(actual, expected);
});

