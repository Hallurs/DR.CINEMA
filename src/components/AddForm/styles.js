import { StyleSheet } from 'react-native';
import { coolcolor, lightgrey } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: lightgrey,
  },
  icon: {
    fontSize: 60,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  iconscontainer: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: coolcolor,
  },
  buttonText: {
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 26,
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  textInput: {
    fontSize: 20,
    height: 40
  },
  iconscontainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  singleIcon: {
    marginRight: 5,
    marginLeft: 5
  },
  errorText: {
    fontSize: 20,
    color: 'red',
  }
});
