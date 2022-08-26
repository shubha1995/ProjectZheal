import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  /*Home Screen*/
  device: {
    backgroundColor: 'black',
    height: '100%',
  },
  /*Left arrow*/
  arrow: {
    top: 35,
    left: 25,
  },
  skip: {
    top: 35,
    right: 35,
    color: 'white',
  },
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    margin: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
 
  /*body text1*/
  title: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  /*body text2*/

  setup: {
    color: '#BCBEC0',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.8,
  },
  /*body text3*/
  continue: {
    color: '#BCBEC0',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  /*body image*/
  device1: {
    left: 20,
  },

  /*button*/
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#282828',
    height: 48,
  },
  buttonText: {
    color: 'white',
    left: 85,
    fontsize: 14,
    fontweight: 500,
    lineheight: 16,
    letterspacing: 1.25,
  },
  logo: {
    left: 25,
  },
   /* Smart watches body*/
   smartwatchesbody: {
    margin: 40,
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  /*horizental line*/ 
  hrline: {
    borderBottomColor: '#DA2128',
        borderBottomWidth: 2,
        width:"50%",
        top: -15,
  },
  watches: {
    color: '#BCBEC0',
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0.8,
    left: 7,
  },
/* Device position body */
  devicebody: {
    margin: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  position: {
    left: "15%",
    color: 'white',
    fontSize: 25,
    lineHeight: 28,
    letterSpacing: 0.8,
  },
  devicePosition: {
    color: '#BCBEC0',
    left: 5,
    fontSize: 19,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  positiontext: {
    color: '#BCBEC0',
    left: 5,
    top: -46,
    fontSize: 19,
    lineHeight: 29,
    letterSpacing: 0.5,

  },
  Continuebutton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DA2128',
    height: 48,
  },
});

export {styles};
