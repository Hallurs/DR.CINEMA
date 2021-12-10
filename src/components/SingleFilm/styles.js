import { StyleSheet } from 'react-native';
import { coolcolor, lightgrey, periwinkle } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  singleContactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },
  ViewContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  nameText: {
    fontSize: 25,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  image: {
    width: 200,
    height: 400,
    margin: 10,
    alignItems: 'center'
  },
  genresContainer: {
    flexDirection: 'row',
  },
  singleGenre: {
    marginRight: 10,
  },
  TimeOfShowingContainer: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
});
