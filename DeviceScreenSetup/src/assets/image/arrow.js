import * as React from 'react';
import {SvgXml} from 'react-native-svg';

var xml = `
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6667 9.66671H5.44004L12.8934 2.21337L11 0.333374L0.333374 11L11 21.6667L12.88 19.7867L5.44004 12.3334H21.6667V9.66671Z" fill="#BCBEC0"/>
</svg>
`;

export default props => (
  <SvgXml xml={xml} height={props.height} top={props.top} />
);
