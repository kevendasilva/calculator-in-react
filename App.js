import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Calculator from './utils/Calculator.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const MAXIMUM_OF_CHARACTERS = 9;
  const [lastCharacters, setLastCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);

  function appendCharacter(newCharacter) {
    if (characters.length == MAXIMUM_OF_CHARACTERS) {
      alert("Quantidade máxima de caracteres foi atingida!");
      return;
    }

    setCharacters([...characters, newCharacter]);
  }

  function removeLastCharacter() {
    if (characters.length == 0) {
      return;
    }

    const newCharacters = characters.slice(0, -1);
    setCharacters(newCharacters);
  }

  function clearLine() {
    setLastCharacters([]);
    setCharacters([]);
  }

  function setStyle(kind) {
    if (kind == "operator") {
      return styles.operator;
    }

    if (kind == "special") {
      return styles.special;
    }

    return;
  }

  function setContent(character) {
    if (["operator", "special"].includes(character[1])) {
      return <FontAwesome5 name={character[0]} />;
    }

    return character[0];
  }

  function processData() {
    let numbers = [];
    let operators = [];
    let number = "";
    let sequenceOfOperators = false;

    characters.map((character, index) => {
      let value = character[0];
      let kind = character[1];
      let parseNumber = () => {
        numbers.includes(".") ? numbers.push(parseFloat(number)) : numbers.push(parseInt(number));
        number = "";
      };

      if (index == 0 && kind == "operator") {
        return setCharacters(characters);
      }

      if (kind == "number") {
        number += value;
        sequenceOfOperators = false;
      }

      if (kind == "special") {
        parseNumber();

        operators.push("/");
        numbers.push(100);
      }

      if (kind == "operator") {
        if (sequenceOfOperators) {
          return setCharacters(characters);
        }

        if (value == "minus") operators.push("-");
        else if (value == "times") operators.push("x");
        else if (value == "plus") operators.push("+");
        else if (value == "divide") operators.push("/");

        sequenceOfOperators = true;

        if (number) parseNumber();
      }

      if (index == characters.length - 1 && kind == "number") parseNumber();
    });

    return [numbers, operators];
  }

  function getResult() {
    let numbers = [];
    let operators = [];

    [numbers, operators] = processData();

    console.log(numbers, operators);

    const calculator = new Calculator;
    const result = calculator.calculate(numbers, operators);

    console.log(result);

    setLastCharacters(characters);

    setCharacters([[result, ""]])
  }

  return (
    <View style={styles.calculator}>
      <View style={styles.display}>
        <Text style={styles.lastLine}>
          {lastCharacters.length ? (
            lastCharacters.map((character, index) => (
              <Text key={index} style={setStyle(character[1])}>
                {setContent(character)}
              </Text>
            ))
          ) : (
            ""
          )}
        </Text>
        <Text style={styles.currentLine}>
          {characters.length ? (
            characters.map((character, index) => (
              <Text key={index} style={setStyle(character[1])}>
                {setContent(character)}
              </Text>
            ))
          ) : (
            "0"
          )}
        </Text>
      </View>
      <View style={styles.keyboard}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.key} onPress={() => clearLine()}>
            <Text style={styles.special}>
              {characters.length ? "C" : "AC"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.special}>
              +/-
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter(["percent", "special"])}>
            <Text style={styles.special}>
              <FontAwesome5 name="percent" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter(["divide", "operator"])}>
            <Text style={styles.operator}>
              <FontAwesome5 name="divide" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter([7, "number"])}>
            <Text style={styles.data}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter([8, "number"])}>
            <Text style={styles.data}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter([9, "number"])}>
            <Text style={styles.data}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter(["times", "operator"])}>
            <Text style={styles.operator}>
              <FontAwesome5 name="times" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter([4, "number"])}>
            <Text style={styles.data}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter([5, "number"])}>
            <Text style={styles.data}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter([6, "number"])}>
            <Text style={styles.data}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter(["minus", "operator"])}>
            <Text style={styles.operator}>
              <FontAwesome5 name="minus" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter([1, "number"])}>
            <Text style={styles.data}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter([2, "number"])}>
            <Text style={styles.data}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter([3, "number"])}>
            <Text style={styles.data}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter(["plus", "operator"])}>
            <Text style={styles.operator}>
              <FontAwesome5 name="plus" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.data} onPress={() => removeLastCharacter()}>
              <FontAwesome5 name="undo" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter([0, "number"])}>
            <Text style={styles.data}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => appendCharacter([".", "number"])}>
            <Text style={styles.data}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key} onPress={() => getResult()}>
            <Text style={styles.operator}>
              <FontAwesome5 name="equals" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calculator: {
    backgroundColor: '#22252d',
    flex: 1
  },

  display: {
    alignItems: 'flex-end',
    flex: 2,
    justifyContent: 'flex-end',
    padding: 36
  },

  lastLine: {
    color: '#f2f2f3',
    fontSize: 32
  },

  currentLine: {
    color: '#f2f2f3',
    fontSize: 48
  },

  keyboard: {
    backgroundColor: '#292d36',
    borderRadius: 36,
    flex: 3,
    padding: 20
  },

  row: {
    flex: 1,
    flexDirection: 'row'
  },

  key: {
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: '#272b33',
    borderRadius: 24,
    flex: 1,
    fontSize: 24,
    justifyContent: 'center',
    margin: 12
  },

  data: {
    color: '#f2f2f3',
    fontSize: 24,
    fontWeight: '500'
  },

  special: {
    color: '#26f6d1',
    fontSize: 24,
    fontWeight: '500'
  },

  operator: {
    color: '#f47a7a',
    fontSize: 24,
    fontWeight: '500'
  }
});
