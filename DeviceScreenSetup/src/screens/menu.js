import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../components/common/styles';
import {
  CLOSEICON,
  PROFILEIMAGE,
  MYPROFILE,
  MYDEVICE,
  MENUFEEDBACK,
  MENUPRIVACY,
  MENUTERMS,
  REPORTPROBLEM,
  HELPMENU,
  LOGOUTIMAGES,
} from '../assets/image';

const Menu = () => {
  const MenuIcons = [
    <MYPROFILE height={32} />,
    <MYDEVICE height={32} />,
    <REPORTPROBLEM height={32} />,
    <MENUFEEDBACK height={32} />,
    <HELPMENU height={32} />,
    <MENUPRIVACY height={32} />,
    <MENUTERMS height={32} />,
  ];
  const menuList = [
    {
      id: 0,
      name: 'My Profile',
      img: MenuIcons[0],
    },
    {
      id: 1,
      name: 'My Device',
      img: MenuIcons[1],
    },
    {
      id: 2,
      name: 'Report Problem',
      img: MenuIcons[2],
    },
    {
      id: 3,
      name: 'Feedback',
      img: MenuIcons[3],
    },
    {
      id: 4,
      name: 'Help',
      img: MenuIcons[4],
    },
    {
      id: 5,
      name: 'Privacy Policy',
      img: MenuIcons[5],
    },
    {
      id: 6,
      name: 'Terms and Conditions',
      img: MenuIcons[6],
    },
  ];

  const onemenulist = ({item}) => (
    <View style={styles.menuList}>
      <TouchableOpacity style={styles.menuItems}>
        <View style={styles.menuimg}>{item.img}</View>
        <Text style={styles.menuItemText}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  itemSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <View style={styles.closeIcon}>
          <CLOSEICON height={32} />
        </View>
        <View style={styles.profileImage}>
          <PROFILEIMAGE height={58} />
          <View style={styles.profileText}>
            <Text style={styles.footerText1}> User Name</Text>
            <Text style={styles.footerText1}> +91 9876543210 </Text>
          </View>
        </View>
        <View style={styles.hrline} />
        <View style={styles.menuItems}>
          <FlatList
            data={menuList}
            renderItem={onemenulist}
            ItemSeparatorComponent={itemSeparator}
            keyExtractor={menuList => menuList.id}
          />
        </View>
        <View style={styles.logout}>
          <LOGOUTIMAGES height={18} />
          <Text style={styles.logoutText}>Logout</Text>
        </View>
        <View style={styles.footer} />
        <Text style={styles.footerText}>v.1.0.0</Text>
      </View>
    </View>
  );
};

export default Menu;
