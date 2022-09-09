import * as React from 'react';
import {SvgXml} from 'react-native-svg';

var xml = `
<svg width="262" height="262" viewBox="0 0 262 262" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M139.312 78.8518H130.272C109.974 78.8518 93.5194 95.3065 93.5194 115.604V171.287C93.5194 191.585 109.974 208.039 130.272 208.039H139.312C159.61 208.039 176.065 191.585 176.065 171.287V115.604C176.065 95.3065 159.61 78.8518 139.312 78.8518Z" fill="#D47B57"/>
<path d="M118.509 192.772V250.495" stroke="#C52127" stroke-width="10.72" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M155.079 172.47V249.335" stroke="#C52127" stroke-width="10.72" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M175.693 163.862C175.693 163.862 165.432 158.507 165.788 137.492H156.877C156.768 143.467 154.318 149.161 150.053 153.348C145.789 157.535 140.052 159.881 134.075 159.881C128.099 159.881 122.361 157.535 118.097 153.348C113.833 149.161 111.383 143.467 111.274 137.492H103.424C103.781 158.515 93.5194 163.862 93.5194 163.862V171.287C93.5194 181.034 97.3915 190.382 104.284 197.275C111.176 204.167 120.525 208.039 130.272 208.039H139.312C149.06 208.039 158.408 204.167 165.3 197.275C172.193 190.382 176.065 181.034 176.065 171.287V162.944L175.693 163.862Z" fill="#C52127"/>
<path d="M173.342 146.904C173.342 146.904 190.437 155.557 184.673 224.178" stroke="#D47B57" stroke-width="9.24" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M179.978 224.171C183.266 224.171 185.932 221.505 185.932 218.217C185.932 214.929 183.266 212.264 179.978 212.264C176.69 212.264 174.025 214.929 174.025 218.217C174.025 221.505 176.69 224.171 179.978 224.171Z" fill="#D47B57"/>
<path d="M96.1587 69.4855C102.073 69.4855 106.867 64.691 106.867 58.7767C106.867 52.8625 102.073 48.068 96.1587 48.068C90.2444 48.068 85.45 52.8625 85.45 58.7767C85.45 64.691 90.2444 69.4855 96.1587 69.4855Z" fill="#D47B57"/>
<path d="M110 137.492H93.5194" stroke="#C52127" stroke-width="3.37" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M176.065 137.492H158.303" stroke="#C52127" stroke-width="3.37" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M125.987 101.255C131.736 101.255 131.743 92.3212 125.987 92.3212C120.231 92.3212 120.223 101.255 125.987 101.255Z" fill="#161616"/>
<path d="M145.228 101.255C150.977 101.255 150.984 92.3212 145.228 92.3212C139.471 92.3212 139.464 101.255 145.228 101.255Z" fill="#161616"/>
<path d="M136.612 111.729C137.312 111.88 137.998 112.093 138.66 112.366L138.205 112.176C139.107 112.552 139.956 113.044 140.73 113.64L140.344 113.337L140.875 113.777C141.242 114.125 141.726 114.325 142.232 114.338C142.74 114.336 143.226 114.133 143.584 113.773C143.942 113.413 144.143 112.927 144.143 112.419C144.145 112.168 144.096 111.919 143.999 111.687C143.903 111.455 143.761 111.245 143.582 111.069C141.889 109.567 139.839 108.522 137.629 108.035C137.128 107.913 136.6 107.983 136.15 108.233C135.932 108.359 135.742 108.527 135.59 108.727C135.438 108.927 135.327 109.155 135.263 109.399C135.2 109.642 135.185 109.895 135.22 110.144C135.255 110.393 135.339 110.633 135.467 110.849C135.59 111.065 135.754 111.254 135.951 111.405C136.147 111.556 136.372 111.666 136.612 111.729V111.729Z" fill="#161616"/>
<path d="M134.792 74.4379C134.034 74.4379 133.275 74.4606 132.517 74.5061C131.142 73.6677 129.887 72.6473 128.785 71.4725C123.423 65.6782 115.263 72.2309 116.931 78.5105C110.89 81.4032 105.641 85.7193 101.636 91.0879C97.6308 96.4566 94.9886 102.717 93.9365 109.332H99.7535C100.817 103.641 103.247 98.294 106.835 93.7506C110.424 89.2072 115.062 85.6038 120.352 83.2506C127.178 89.5454 136.332 91.7979 145.569 90.3417C148.527 89.8791 150.461 86.9061 150.741 83.9938C155.651 86.466 159.924 90.0391 163.226 94.4343C166.528 98.8294 168.77 103.928 169.777 109.332H175.602C174.066 99.6107 169.112 90.7559 161.632 84.3597C154.151 77.9635 144.634 74.4454 134.792 74.4379V74.4379Z" fill="#662F26"/>
<path d="M124.182 172.766H119.98L119.685 178.757H123.886L124.182 172.766Z" fill="white"/>
<path d="M131.129 172.766H126.533L126.26 178.757H130.856L131.129 172.766Z" fill="white"/>
<path d="M137.507 172.766H132.722L132.449 178.757H137.234L137.507 172.766Z" fill="white"/>
<path d="M149.9 172.766H138.933L138.66 178.757H149.627L149.9 172.766Z" fill="white"/>
<path d="M88.567 63.6533C88.567 63.6533 54.9922 113.883 96.4241 149.353" stroke="#D47B57" stroke-width="9.24" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M148.648 30.1998H152.235C152.362 30.2005 152.486 30.1736 152.601 30.1209C152.715 30.0683 152.817 29.9912 152.899 29.8951C152.98 29.799 153.04 29.6862 153.074 29.5646C153.107 29.443 153.113 29.3155 153.092 29.1912C152.502 26.172 151.355 23.289 149.71 20.6894C149.639 20.5825 149.545 20.4927 149.435 20.4267C149.324 20.3607 149.201 20.32 149.073 20.3077C148.945 20.2953 148.816 20.3116 148.696 20.3553C148.575 20.399 148.465 20.4691 148.375 20.5605L145.129 23.8065L139.873 18.5507C139.714 18.3876 139.624 18.1685 139.624 17.9402C139.624 17.7119 139.714 17.4927 139.873 17.3296L142.581 14.607C142.672 14.5178 142.742 14.4096 142.786 14.2903C142.83 14.171 142.847 14.0434 142.836 13.9166C142.825 13.7898 142.787 13.667 142.723 13.5569C142.659 13.4468 142.572 13.3522 142.467 13.2797C139.86 11.5425 136.946 10.315 133.882 9.66213C133.757 9.63747 133.627 9.64091 133.503 9.67219C133.38 9.70348 133.264 9.76183 133.165 9.84306C133.067 9.92429 132.987 10.0264 132.933 10.142C132.879 10.2575 132.85 10.3838 132.85 10.5115V14.4098C132.853 14.5265 132.831 14.6425 132.787 14.7507C132.743 14.8588 132.678 14.957 132.595 15.0392C132.512 15.1214 132.413 15.186 132.305 15.229C132.196 15.272 132.08 15.2926 131.963 15.2895H125.395C125.282 15.2875 125.17 15.2632 125.066 15.2179C124.961 15.1727 124.867 15.1073 124.788 15.0256C124.71 14.9439 124.647 14.8475 124.606 14.7418C124.564 14.6361 124.544 14.5233 124.546 14.4098V10.5115C124.546 10.3838 124.518 10.2575 124.463 10.142C124.409 10.0264 124.33 9.92429 124.231 9.84306C124.132 9.76183 124.017 9.70348 123.893 9.67219C123.769 9.64091 123.64 9.63747 123.514 9.66213C120.45 10.3136 117.536 11.5412 114.929 13.2797C114.825 13.3522 114.737 13.4468 114.674 13.5569C114.61 13.667 114.571 13.7898 114.56 13.9166C114.549 14.0434 114.567 14.171 114.611 14.2903C114.655 14.4096 114.725 14.5178 114.816 14.607L117.553 17.3296C117.634 17.4094 117.699 17.5044 117.742 17.6092C117.786 17.714 117.809 17.8265 117.809 17.9402C117.809 18.0538 117.786 18.1663 117.742 18.2711C117.699 18.3759 117.634 18.4709 117.553 18.5507L112.912 23.1921C112.832 23.2731 112.737 23.3374 112.632 23.3812C112.528 23.4251 112.415 23.4477 112.301 23.4477C112.188 23.4477 112.075 23.4251 111.97 23.3812C111.866 23.3374 111.771 23.2731 111.691 23.1921L109.052 20.5605C108.961 20.4691 108.852 20.399 108.731 20.3553C108.61 20.3116 108.481 20.2953 108.354 20.3077C108.226 20.32 108.102 20.3607 107.992 20.4267C107.882 20.4927 107.788 20.5825 107.717 20.6894C106.071 23.2878 104.926 26.1714 104.342 29.1912C104.32 29.3151 104.325 29.4424 104.357 29.564C104.39 29.6856 104.449 29.7986 104.53 29.8949C104.611 29.9912 104.712 30.0684 104.827 30.1211C104.941 30.1738 105.065 30.2007 105.191 30.1998H108.786C109.016 30.2078 109.234 30.3063 109.391 30.4739C109.549 30.6415 109.634 30.8647 109.628 31.0948V37.6702C109.628 37.8995 109.537 38.1194 109.375 38.2815C109.213 38.4437 108.993 38.5348 108.763 38.5348H105.351C105.222 38.533 105.094 38.5603 104.977 38.6148C104.86 38.6692 104.757 38.7494 104.675 38.8493C104.593 38.9491 104.535 39.0662 104.505 39.1916C104.475 39.3171 104.474 39.4477 104.501 39.5738C105.172 42.4877 106.367 45.2554 108.028 47.7418C108.099 47.8463 108.193 47.9335 108.303 47.9973C108.412 48.061 108.535 48.0998 108.661 48.1106C108.787 48.1215 108.914 48.1043 109.033 48.0602C109.151 48.0161 109.259 47.9462 109.347 47.8556L111.668 45.5045C111.748 45.4236 111.843 45.3593 111.948 45.3154C112.053 45.2716 112.165 45.249 112.279 45.249C112.392 45.249 112.505 45.2716 112.61 45.3154C112.714 45.3593 112.809 45.4236 112.889 45.5045L117.553 50.1536C117.635 50.234 117.699 50.3297 117.743 50.4351C117.787 50.5405 117.81 50.6537 117.81 50.7679C117.81 50.8821 117.787 50.9953 117.743 51.1007C117.699 51.2061 117.635 51.3018 117.553 51.3822L115.278 53.6119C115.187 53.702 115.118 53.8113 115.075 53.9318C115.032 54.0523 115.016 54.1809 115.029 54.3082C115.042 54.4355 115.084 54.5582 115.15 54.6674C115.217 54.7766 115.307 54.8694 115.415 54.9392C117.888 56.5109 120.624 57.6258 123.492 58.2306C123.617 58.2553 123.746 58.2519 123.87 58.2206C123.994 58.1893 124.11 58.1309 124.208 58.0497C124.307 57.9685 124.386 57.8664 124.441 57.7508C124.495 57.6352 124.523 57.509 124.523 57.3812V54.2793C124.523 54.05 124.614 53.8301 124.776 53.668C124.939 53.5058 125.158 53.4147 125.388 53.4147H131.963C132.192 53.4147 132.412 53.5058 132.575 53.668C132.737 53.8301 132.828 54.05 132.828 54.2793V57.3812C132.826 57.5087 132.854 57.6348 132.907 57.7504C132.961 57.866 133.039 57.9682 133.138 58.0496C133.236 58.131 133.351 58.1895 133.474 58.2208C133.598 58.2521 133.727 58.2555 133.852 58.2306C136.722 57.6259 139.46 56.511 141.936 54.9392C142.043 54.8688 142.133 54.7755 142.199 54.666C142.265 54.5565 142.305 54.4336 142.318 54.3063C142.33 54.1791 142.314 54.0507 142.27 53.9305C142.226 53.8104 142.156 53.7015 142.065 53.6119L139.835 51.3822C139.675 51.2179 139.585 50.9974 139.585 50.7679C139.585 50.5384 139.675 50.3179 139.835 50.1536L144.5 45.5045C144.579 45.4236 144.674 45.3593 144.779 45.3154C144.884 45.2716 144.997 45.249 145.11 45.249C145.224 45.249 145.336 45.2716 145.441 45.3154C145.546 45.3593 145.641 45.4236 145.721 45.5045L148.034 47.8177C148.123 47.9084 148.231 47.9783 148.351 48.0225C148.47 48.0666 148.597 48.0838 148.724 48.073C148.851 48.0621 148.974 48.0234 149.084 47.9596C149.194 47.8958 149.289 47.8085 149.361 47.7039C151.019 45.2159 152.214 42.4488 152.888 39.5359C152.914 39.4099 152.911 39.2798 152.88 39.155C152.85 39.0302 152.792 38.9137 152.71 38.8142C152.629 38.7147 152.526 38.6345 152.41 38.5796C152.294 38.5247 152.167 38.4964 152.038 38.4968H148.648C148.419 38.4968 148.199 38.4057 148.037 38.2436C147.875 38.0815 147.784 37.8616 147.784 37.6323V31.0948C147.781 30.979 147.801 30.8637 147.843 30.7558C147.885 30.6478 147.948 30.5493 148.028 30.466C148.109 30.3827 148.205 30.3162 148.311 30.2705C148.418 30.2248 148.532 30.2008 148.648 30.1998ZM130.158 42.4709C128.348 42.781 126.486 42.507 124.841 41.6886C123.197 40.8702 121.856 39.5498 121.012 37.9186C120.168 36.2873 119.865 34.4298 120.146 32.6148C120.428 30.7998 121.28 29.1215 122.578 27.8227C123.877 26.524 125.555 25.6722 127.37 25.3905C129.185 25.1089 131.043 25.4121 132.674 26.2562C134.305 27.1003 135.626 28.4415 136.444 30.0858C137.263 31.7301 137.537 33.5922 137.227 35.4025C136.923 37.1667 136.081 38.7936 134.815 40.0594C133.549 41.3251 131.922 42.1676 130.158 42.4709V42.4709Z" fill="#C52127"/>
<path d="M171.226 28.4631C197.032 37.5741 218.803 55.4868 232.715 79.0548C246.626 102.623 251.789 130.339 247.296 157.335C242.802 184.331 228.94 208.881 208.145 226.672C187.349 244.463 160.95 254.358 133.584 254.619C106.217 254.88 79.6343 245.49 58.5035 228.098C37.3727 210.706 23.0456 186.425 18.0386 159.52C13.0316 132.614 17.665 104.805 31.1249 80.9758C44.5848 57.1469 66.0104 38.8227 91.6385 29.2215" stroke="#C52127" stroke-width="4" stroke-miterlimit="10" stroke-dasharray="12 15 5 12 15 5"/>
<path d="M105.32 44.7462C105.32 44.7462 96.6214 46.5512 90.7285 56.2133" stroke="#D47B57" stroke-width="9.24" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

export default props => <SvgXml xml={xml} height={props.height} />;