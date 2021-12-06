import { StyleSheet } from 'react-native';
import { periwinkle, coolcolor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: periwinkle,
    alignItems: 'center',
    justifyContent: 'space-around',
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
  image: {
    width: 300,
    height: 200,
    margin: 10,
    borderRadius: 25,
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
  nameText: {
    fontSize: 25,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});
