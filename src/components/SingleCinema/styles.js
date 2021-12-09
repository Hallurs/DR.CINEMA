import { StyleSheet } from 'react-native';
import { coolcolor } from '../../styles/colors';

export default StyleSheet.create({
  singleCinemaContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  CinemaName: {
    fontSize: 25,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    paddingTop: 15,
    color: 'white'
  },
  WebsiteText: {
    fontSize: 20,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: coolcolor,
    borderRadius: 100,
    borderColor: "black",
    margin: 20,
  },
});