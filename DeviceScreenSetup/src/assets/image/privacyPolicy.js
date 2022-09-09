import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 4L9 0L0 4V10C0 15.55 3.84 20.74 9 22C11.3 21.44 13.33 20.1 14.88 18.29L11.76 15.17C9.82 16.46 7.18 16.24 5.47 14.53C3.52 12.58 3.52 9.41 5.47 7.46C7.42 5.51 10.59 5.51 12.54 7.46C14.25 9.17 14.46 11.81 13.18 13.75L16.08 16.65C17.29 14.69 18 12.38 18 10V4Z" fill="#797A7B"/>
</svg>




`;

export default props => (
  <SvgXml xml={xml} height={props.height} top={props.top} />
);
