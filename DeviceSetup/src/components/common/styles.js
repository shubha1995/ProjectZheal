import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /* Home Screen */

  container: {
    backgroundColor: 'black',
    height: '100%'
  },
  smartWatchesbody: {
    height: '100%'

  },
  device: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  /* Left arrow */
  // arrow: {
  //   top: 32,
  //   left: 32
  // },
  skip: {
    top: 35,
    right: 35,
    color: 'white'
  },
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  body: {
    margin: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },

  /* body text1 */
  title: {
    color: 'white',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.15
  },
  /* body text2 */

  setupText: {
    color: '#BCBEC0',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.8
  },
  /* body text3 */
  continueText: {
    color: '#BCBEC0',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.5
  },
  /* body image */
  deviceSetupImage: {
    alignSelf: 'center'
  },

  /* button */
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#282828',
    height: 48,
    paddingLeft: 40
  },
  buttonPressed: {

    borderColor: 'red',
    borderWidth: 1
  },
  buttonText: {
    color: 'white',
    fontsize: 14,
    fontweight: 500,
    lineheight: 16,
    letterspacing: 1.25
  },
  logo: {
    marginRight: 24
  },
  /* Smart watches body */
  smartwatchesbody: {
    margin: 40,
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  /* horizental line */
  hrline: {
    borderBottomColor: '#DA2128',
    borderBottomWidth: 2,
    width: '50%',
    top: -15
  },
  watches: {
    color: '#BCBEC0',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.8,
    left: 7,
    fontWeight: '700'
  },
  /* Device position body */
  devicebody: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  textSection: {
    alignItems: 'center',
    marginLeft: 64,
    marginRight: 64
  },
  position: {
    color: 'white',
    fontSize: 25,
    lineHeight: 28,
    letterSpacing: 0.8
  },
  devicePosition: {
    color: '#BCBEC0',
    textAlign: 'center',
    fontSize: 19,
    lineHeight: 24,
    letterSpacing: 0.5
  },
  positiontext: {
    color: '#BCBEC0',
    fontSize: 19,
    lineHeight: 29,
    letterSpacing: 0.5
  },
  Continuebutton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DA2128',
    justifyContent: 'center',
    height: 48,
    width: 160
  },
  // Help screen start here
  helpContainer: {
    flex: 1,
    margin: 32,
  },
  helpBody: {
    flexDirection: 'row'
  },
  help: {
    marginLeft: 120,
    color: 'white',
    fontSize: 20
  },
  helpImage: {
    left: 36,
    top: 16
  },
  looksText: {
    color: '#BCBEC0',
    textAlign: 'center',
    fontSize: 19,
    lineHeight: 24,
    letterSpacing: 0.5,
    top: 58
  },
  worryText: {
    color: '#BCBEC0',
    textAlign: 'center',
    fontSize: 19,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontWeight: '350',
    top: 80
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 140

  },
  callImage: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  mailImage: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'

  },
  whatsappImage: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  footerText1: {
    color: 'white',
    top: 16
  },
  footerText2: {
    color: 'white',
    top: 16,
    color: '#BCBEC0',
    fontSize: 14
  }
});

export { styles };
