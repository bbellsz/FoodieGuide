import {StyleSheet, StatusBar} from 'react-native';

const appStyles = StyleSheet.create({
  btnLoginPress: {
    flex: 0.2,
    //backgroundColor: "#F08080",
    borderRadius: 10,
    backgroundColor: '#f19b38',
    marginTop: 15,
    width: 100,
    height: 30,
    //justifyContent: 'space-around',
  },
  btnTxt: {
    fontFamily: 'charcoal',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  btnViewPress: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#f19b38',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  containerMain: {
    flex: 1,
    backgroundColor: '#fcf1e8',
  },
  headerMain: {
    flex: 0.12,
    backgroundColor: '#ffcd9b',
  },
  fixMainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 4,
  },
  txtAppName: {
    fontFamily: 'charcoal',
    padding: 10,
    margin: 5,
    fontSize: 32,
    textAlign: 'left',
  },
  txtBtnPress: {
    fontFamily: 'charcoal',
    margin: 5,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  searchBox: {
    flex: 0.5,
    borderRadius: 10,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  searchTxt: {
    fontFamily: 'charcoal',
    fontSize: 20,
    paddingLeft: 10,
  },
  scrollView: {
    backgroundColor: '#FEF5E7',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  iconSize: {
    width: 20,
    height: 20,
  },
  mainPageBox: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  restaurantImg: {
    width: '95%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  restaurantTxtName: {
    fontFamily: 'charcoal',
    fontSize: 26,
    marginTop: 10,
    textAlign: 'center',
  },
  restaurantInfo: {
    fontFamily: 'charcoal',
    fontSize: 20,
    color: '#808B96',
    textAlign: 'center',
  },
  restaurantDescript: {
    fontFamily: 'charcoal',
    fontSize: 18,
    textAlign: 'left',
    color: '#808B96',
    paddingBottom: 10,
  },
});
export default appStyles;
