import * as React from 'react';
import {SvgXml} from 'react-native-svg';

var xml = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3333 2.54669L17.4533 0.666687L9.99996 8.12002L2.54663 0.666687L0.666626 2.54669L8.11996 10L0.666626 17.4534L2.54663 19.3334L9.99996 11.88L17.4533 19.3334L19.3333 17.4534L11.88 10L19.3333 2.54669Z" fill="white"/>
</svg>
`;

export default props => (
  <SvgXml xml={xml} height={props.height} top={props.top} />
);
