import Calculadora from "../js/model";

describe("integration  Test claculate", () => {
  test("Suma 1 + 2 ", () => {
    const testos = new Calculadora();
    testos.set(1);
    testos.operator = "+";
    testos.set(2);
    expect(testos.operate()).toBe(3);
  });
});

describe("integration  Test claculate", () => {
  test("resta  1 -  1", () => {
    const testos = new Calculadora();
    testos.set(1);
    testos.operator = "-";
    testos.set(1);
    expect(testos.operate()).toBe(0);
  });
});
describe("integration  Test claculate", () => {
  test("multip 1 + 2 ", () => {
    const testos = new Calculadora();
    testos.set(1);
    testos.operator = "*";
    testos.set(1);
    expect(testos.operate()).toBe(1);
  });
});

describe("integration  Test claculate", () => {
  test("div 1 + 2 ", () => {
    const testos = new Calculadora();
    testos.set(1);
    testos.operator = "/";
    testos.set(1);
    expect(testos.operate()).toBe(1);
  });
});

describe("integration  Test claculate", () => {
  test("test clear ", () => {
    const testos = new Calculadora();
    testos.clear();
    expect(testos.operate()).toBe("Error");
  });
});

describe("integration  Test claculate", () => {
  test("Suma 1 + 2 ", () => {
    const testos = new Calculadora();
    testos.set(1);
    testos.operator = "=";
    testos.set(2);
    expect(testos.operate()).toBe(undefined);
  });
});
describe("check values Test calculate", () => {
  test("values", () => {

    //make the first test 
    const testos = new Calculadora();
    testos.set(1);
    expect(testos.value1).toBe('1');

   //do the second test 
    testos.operator = '+';
    testos.set(2);
    expect(testos.value2).toBe('2');

//make the exception for undefined operator 
    testos.operator = undefined;
    testos.set(3);
    expect(testos.value1).toBe('13');  

  //check updating of value2
  testos.operator = '*';
  testos.set(4);
  expect(testos.value2).toBe('24');
  });
});



describe("integration  Test claculate", () => {
  test(" ", () => {
    const testos = new Calculadora();
    testos.set_point();
    

  
  });
});