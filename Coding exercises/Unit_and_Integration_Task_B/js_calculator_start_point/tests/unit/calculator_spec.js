var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add', function(){    
    expected = 5;
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    actual = calculator.previousTotal;
    assert.equal(expected, actual)
  });

  it('should be able to subtract', function(){    
    expected = 3;
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    actual = calculator.previousTotal;
    assert.equal(expected, actual)
  })

  it('should be able to multiply', function(){    
    expected = 15;
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    actual = calculator.previousTotal;
    assert.equal(expected, actual)
  })

  it('should be able to divide', function(){
    expected = 3;
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    actual = calculator.previousTotal;
    assert.equal(expected, actual)
  })

  it('should be able to clear without affecting the running total', function(){
    expected = 3;
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.operatorClick('=');
    actual = calculator.previousTotal;
    assert.equal(expected, actual);
  })

});
