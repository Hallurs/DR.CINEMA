import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  singleCinemaContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    width: 200,
    height: 300,
    margin: 10,
  },
  nameText: {
    fontSize: 25,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  checkmark: {
    position: 'absolute',
    top: 15,
    right: 15,
    fontSize: 16,
  },
});
