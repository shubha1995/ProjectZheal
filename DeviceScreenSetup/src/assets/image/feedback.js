import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0H0.00999999L0 20L4 16H20V0ZM11 12H9V10H11V12ZM11 8H9V4H11V8Z" fill="white"/>
</svg>




`;

export default props => (
  <SvgXml xml={xml} height={props.height} top={props.top} />
);
