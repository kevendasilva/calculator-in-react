import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.calculator}>
      <View style={styles.display}>
        <Text style={styles.currentLine}>333</Text>
      </View>
      <View style={styles.keyboard}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.special}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.special}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.special}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.operator}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.data}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.data}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.data}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.operator}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.data}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.data}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.data}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.operator}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.data}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.data}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.data}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.operator}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.data}>⟳</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.data}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.data}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.key}>
            <Text style={styles.operator}>=</Text>
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

  currentLine: {
    color: '#f2f2f3',
    fontSize: 64
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
    backgroundColor: '#272b33',
    borderRadius: 24,
    flex: 1,
    fontSize: 24,
    justifyContent: 'center',
    margin: 12,
    width: 'auto'
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
    color:  '#f47a7a',
    fontSize: 24,
    fontWeight: '500'
  }
});
