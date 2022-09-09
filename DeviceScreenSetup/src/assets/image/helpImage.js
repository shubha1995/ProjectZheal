import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 0C3.81 0 0 3.81 0 8.5C0 13.19 3.81 17 8.5 17H9V20C13.86 17.66 17 13 17 8.5C17 3.81 13.19 0 8.5 0ZM9.5 14.5H7.5V12.5H9.5V14.5ZM9.5 11H7.5C7.5 7.75 10.5 8 10.5 6C10.5 4.9 9.6 4 8.5 4C7.4 4 6.5 4.9 6.5 6H4.5C4.5 3.79 6.29 2 8.5 2C10.71 2 12.5 3.79 12.5 6C12.5 8.5 9.5 8.75 9.5 11Z" fill="#797A7B"/>
</svg>




`;

export default props => (
  <SvgXml xml={xml} height={props.height} top={props.top} />
);