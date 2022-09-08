import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.24 15.58C10.12 21.24 14.76 25.86 20.42 28.76L24.82 24.36C25.36 23.82 26.16 23.64 26.86 23.88C29.1 24.62 31.52 25.02 34 25.02C35.1 25.02 36 25.92 36 27.02V34C36 35.1 35.1 36 34 36C15.22 36 0 20.78 0 2C0 0.9 0.9 0 2 0H9C10.1 0 11 0.9 11 2C11 4.5 11.4 6.9 12.14 9.14C12.36 9.84 12.2 10.62 11.64 11.18L7.24 15.58Z" fill="#DA2128"/>
</svg>

`;

export default props => (
  <SvgXml xml={xml} height={props.height} top={props.top} />
);
