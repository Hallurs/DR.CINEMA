import { StyleSheet } from 'react-native';
import { coolcolor } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1, 
    justifyContent: 'space-between',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  ViewContainer: {
    flexGrow: 1, 
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
  },
  nameText: {
    fontSize: 25,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 400,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  genresContainer: {
    fontSize: 15,
    paddingTop: 10,
    textAlign: 'center',
  },
  singleGenre: {
    marginRight: 10,
    textAlign: 'center',
  },
  TimeOfShowingContainer: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: coolcolor,
  },
  buttonText: {
    color: 'white',
  },
  normalText: {
    fontSize: 15,
    paddingTop: 10,
    textAlign: 'center',
  },
});
