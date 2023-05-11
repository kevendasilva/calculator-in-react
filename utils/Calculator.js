class Calculator {
  #MINIMUM_NUMBER_TO_COMPUTE = 2;

  resultOf(numberA, operator, numberB) {
    if (operator == "+") {
      return numberA + numberB;
    }

    if (operator == "-") {
      return numberA - numberB;
    }

    if (operator == "/") {
      return numberA / numberB;
    }

    if (operator == "x") {
      return numberA * numberB;
    }
  }

  calculate(numbers, operations) {
    let replaceValueInNumbersAt = (index, value) => numbers[index] = value;
    let removeValueInNumbersAt = (index) => numbers.splice(index, 1);
    let removeValueInOperationsAt = (index) => operations.splice(index, 1);

    let numberA = numbers[0];
    let numberB = numbers[1];
    let operator = operations[0];

    if (numbers.length == this.#MINIMUM_NUMBER_TO_COMPUTE) {
      return this.resultOf(numberA, operator, numberB);
    }

    let operatorHasPriority = ["x", "/"].includes(operator);
    let result;

    if (operatorHasPriority) {
      result = this.resultOf(numberA, operator, numberB);

      replaceValueInNumbersAt(0, result);
      removeValueInNumbersAt(1);
      removeValueInOperationsAt(0);

      return this.calculate(numbers, operations);
    }

    let nextOperator = operations[1];
    let nextOperatorHasPriority = ["x", "/"].includes(nextOperator);

    let replaceValueAt; let removeNumberAt; let removeOperatorAt;

    if (nextOperatorHasPriority) {
      let numberC = numbers[2];

      result = this.resultOf(numberB, nextOperator, numberC);

      [replaceValueAt, removeNumberAt, removeOperatorAt] = [1, 2, 1];
    } else {
      result = this.resultOf(numberA, operator, numberB);

      [replaceValueAt, removeNumberAt, removeOperatorAt] = [0, 1, 0];
    }

    replaceValueInNumbersAt(replaceValueAt, result);
    removeValueInNumbersAt(removeNumberAt);
    removeValueInOperationsAt(removeOperatorAt);

    return this.calculate(numbers, operations);
  }
}

export default Calculator;
