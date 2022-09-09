import * as React from 'react';
import {SvgXml} from 'react-native-svg';

var xml = `
<svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.93317 2.12962H14.8035V0H4.93317V2.12962ZM9.8703 4.25917C4.42782 4.25917 0 8.68699 0 14.1295C0 19.5722 4.42782 24 9.8703 24C15.313 24 19.7408 19.5722 19.7408 14.1295C19.7408 8.68699 15.313 4.25917 9.8703 4.25917ZM9.8703 21.8705C5.60196 21.8705 2.12931 18.3978 2.12931 14.1295C2.12931 9.8612 5.60204 6.38871 9.87038 6.38871C14.1388 6.38871 17.6116 9.8612 17.6116 14.1295C17.6116 18.3978 14.1388 21.8705 9.87038 21.8705" fill="#FCFCFC"/>
</svg>

`;

export default props => (
  <SvgXml xml={xml} height={props.height} top={props.top} />
);
