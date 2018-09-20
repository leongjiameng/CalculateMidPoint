import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert
} from 'react-native';
import {
  InputWithLabel,
  AppButton
} from './UI';

export default class CalculateMidPoint extends Component {
  constructor(props) {
      super(props);

      this.state = {
        Ax: '0',
        Ay: '0',
        Bx: '0',
        By: '0',
        midX: '0',
        midY: '0',
      }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.mainText}>Point A</Text>
        <View style={styles.inputsContainer}>
          <InputWithLabel style={styles.inputField}
            label={'x-coordinate'}
            value={this.state.Ax}
            onChangeText={(x) => this.setState({Ax : x})}
            keyboardType={'numeric'}
            orientation={'vertical'}
            selectTextOnFocus={true}
          />
          <InputWithLabel style={styles.inputField}
            label={'y-coordinate'}
            value={this.state.Ay}
            onChangeText={(y) => this.setState({Ay : y})}
            keyboardType={'numeric'}
            orientation={'vertical'}
            selectTextOnFocus={true}
          />
        </View>

        <Text style={styles.mainText}>Point B</Text>
        <View style={styles.inputsContainer}>
          <InputWithLabel style={styles.inputField}
            label={'x coordinate'}
            value={this.state.Bx}
            onChangeText={(x) => this.setState({Bx : x})}
            keyboardType={'numeric'}
            orientation={'vertical'}
            selectTextOnFocus={true}
          />
          <InputWithLabel style={styles.inputField}
            label={'y coordinate'}
            value={this.state.By}
            onChangeText={(y) => this.setState({By : y})}
            keyboardType={'numeric'}
            orientation={'vertical'}
            selectTextOnFocus={true}
          />
        </View>

        <Text style={styles.mainText}>Mid Point</Text>
        <View style={styles.inputsContainer}>
          <InputWithLabel style={[styles.inputField, styles.outputOveride]}
            label={'x coordinate'}
            value={this.state.midX}
            orientation={'vertical'}
            editable={false}
          />
          <InputWithLabel style={[styles.inputField, styles.outputOveride]}
            label={'y coordinate'}
            value={this.state.midY}
            orientation={'vertical'}
            editable={false}
          />
        </View>

        <View style={styles.buttonContainer}>
          <AppButton style={styles.button}
            title={'Compute'}
            theme={'primary'}
            onPress={() => {
              this.setState({
                midX: ((Number(this.state.Ax) + Number(this.state.Bx))/2).toString(),
                midY: ((Number(this.state.Ay) + Number(this.state.By))/2).toString()
              });
            }}
          />
          <AppButton style={styles.button}
            title={'Reset'}
            theme={'info'}
            onPress={() => {
              this.setState({
                Ax: '0',
                Ay: '0',
                Bx: '0',
                By: '0',
                midX: '0',
                midY: '0',
              });
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection: 'column',
    margin : 10,
  },

  mainText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },

  inputsContainer: {
    flex: 0.5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
  },

  inputField: {
    flex: 1,
    textAlign: 'right',
  },

  outputOveride: {
    fontWeight: 'bold',
    color: 'blue',
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});