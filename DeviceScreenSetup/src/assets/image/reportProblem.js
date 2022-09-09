import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 19H22L11 0L0 19ZM12 16H10V14H12V16ZM12 12H10V8H12V12Z" fill="#797A7B"/>
</svg>




`;

export default props => (
  <SvgXml xml={xml} height={props.height} top={props.top} />
);
