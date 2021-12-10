import { StyleSheet } from 'react-native';
import { coolcolor } from '../../styles/colors';

export default StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
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
  nameText: {
    fontSize: 25,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  buttonText: {
    color: 'white',
  },
  descriptionTitle: {
    fontSize: 20,
    textDecorationStyle: 'solid',
    textAlign: 'center',
    paddingTop: 15,
  },
  descriptionText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 'auto',
  },
  InformationText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 'auto',
  },
  descriptionContainer: {
    marginBottom: 'auto',
    marginTop: 'auto',
  },
});
