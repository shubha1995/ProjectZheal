import { View, Text, Linking, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../components/common/styles';
import { ARROW, HELP, CALL, MAIL, WHATSAPP } from '../assets/image/index';

const Help = () => {
  const phoneargs = {
    number: '8131909497',
    prompt: true
  };
  function handleCall () {
    console.log(phoneargs.number);
    Linking.openURL(`tel:${phoneargs.number}`);
  };
 

  return (
    <View style={styles.container}>
      <View style={styles.helpContainer}>
        <View style={styles.helpBody}>
          <ARROW style={styles.arrow} height={32} />
          <Text style={styles.help}>Help</Text>
        </View>
        <View style={styles.helpImage}>
          <HELP height={262} />
        </View>
        <Text style={styles.looksText}>Looks like you are in trouble</Text>
        <Text style={styles.worryText}>
          Don’t worry, we are always there to help you
        </Text>
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleCall} style= {styles.callImage}>
            <CALL style={styles.arrow} height={32} />
            <Text style= {styles.footerText1}>Call us</Text>
            <Text style= {styles.footerText2}>9AM-9PM</Text>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.mailImage}>
            <MAIL style={styles.arrow} height={32} />
            <Text style= {styles.footerText1}>Mail us</Text>
            <Text style= {styles.footerText2}>9AM-9PM</Text>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.whatsappImage}>
            <WHATSAPP style={styles.arrow} height={32} />
            <Text style= {styles.footerText1}>Chat with us</Text>
            <Text style= {styles.footerText2}>9AM-9PM</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Help;
