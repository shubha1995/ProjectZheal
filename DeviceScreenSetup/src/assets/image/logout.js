import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2H9V0H0V18H9V16H2V2Z" fill="#939598"/>
<path d="M18 9L14 5V8H6V10H14V13L18 9Z" fill="#939598"/>
</svg>





`;

export default props => (
  <SvgXml xml={xml} height={props.height} top={props.top} />
);
