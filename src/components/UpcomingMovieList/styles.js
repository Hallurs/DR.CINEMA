import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  singleUpcomingMovieContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  image: {
    width: 200,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameText: {
    fontSize: 20,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textAlign: 'center',
  },
  icon: {
    fontSize: 60,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  checkmark: {
    position: 'absolute',
    alignItems: 'center',
    color: 'white',
    fontSize: 64
  },
});