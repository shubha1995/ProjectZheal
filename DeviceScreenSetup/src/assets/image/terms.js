import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 20H12V22H0V20ZM4.24 7.07L7.07 4.24L21.21 18.38L18.38 21.21L4.24 7.07ZM11.32 0L16.98 5.66L14.15 8.49L8.49 2.83L11.32 0ZM2.83 8.48L8.49 14.14L5.66 16.97L0 11.31L2.83 8.48Z" fill="#797A7B"/>
</svg>





`;

export default props => (
  <SvgXml xml={xml} height={props.height} top={props.top} />
);
