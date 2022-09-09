import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0H4C1.79 0 0 1.79 0 4V9C0 11.21 1.79 13 4 13H6V14H16V13H18C20.21 13 22 11.21 22 9V4C22 1.79 20.21 0 18 0ZM20 9C20 10.1 19.1 11 18 11H4C2.9 11 2 10.1 2 9V4C2 2.9 2.9 2 4 2H18C19.1 2 20 2.9 20 4V9Z" fill="#797A7B"/>
</svg>



`;

export default props => (
  <SvgXml xml={xml} height={props.height} top={props.top} />
);
