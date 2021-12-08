import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  singleContactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },
  nameText: {
    fontSize: 25,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  image: {
    borderRadius: 25,
    width: 50,
    height: 50,
    margin: 10,
  },
  checkmark: {
    position: 'absolute',
    top: 15,
    right: 15,
    fontSize: 16,
  },
});
