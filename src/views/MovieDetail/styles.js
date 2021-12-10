import { StyleSheet } from 'react-native';
import { coolcolor, periwinkle } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: periwinkle,
  },
  singleContactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  nameText: {
    fontSize: 25,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  image: {
    borderRadius: 25,
    width: 200,
    height: 400,
    margin: 10,
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
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: coolcolor,
  },
  buttonText: {
    color: 'white',
  },
});
