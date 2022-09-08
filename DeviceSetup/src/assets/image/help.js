import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="262" height="262" viewBox="0 0 262 262" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M168.678 34.92C192.926 43.4806 213.383 60.3113 226.454 82.456C239.526 104.601 244.377 130.643 240.155 156.009C235.933 181.375 222.909 204.442 203.369 221.159C183.829 237.876 159.024 247.174 133.31 247.419C107.597 247.664 82.6189 238.841 62.7642 222.499C42.9095 206.158 29.4476 183.343 24.7431 158.062C20.0386 132.781 24.3923 106.651 37.0396 84.2611C49.6868 61.8713 69.8187 44.6538 93.8993 35.6327" stroke="#C52127" stroke-width="4" stroke-miterlimit="10" stroke-dasharray="12 15 5 12 15 5"/>
<path d="M62.3657 174.599C62.6806 196.874 80.9932 214.676 103.268 214.361C125.543 214.046 143.345 195.734 143.03 173.459L142.386 127.882C142.071 105.607 123.758 87.8053 101.483 88.1202C79.2084 88.4351 61.4064 106.748 61.7213 129.023L62.3657 174.599Z" fill="#D47B57"/>
<path d="M113.141 179.753L117.246 179.696L117.616 185.546L113.519 185.604L113.141 179.753Z" fill="white"/>
<path d="M106.356 179.852L110.846 179.788L111.195 185.639L106.699 185.703L106.356 179.852Z" fill="white"/>
<path d="M100.121 179.938L104.796 179.874L105.145 185.725L100.47 185.789L100.121 179.938Z" fill="white"/>
<path d="M88.0127 180.109L98.731 179.959L99.0802 185.81L88.3619 185.96L88.0127 180.109Z" fill="white"/>
<path d="M126.916 116.469L127.323 116.939C127.615 117.256 127.823 117.64 127.928 118.058C128.1 118.47 128.164 118.919 128.114 119.362C128.008 120.232 127.599 121.037 126.959 121.636L126.247 122.099C125.714 122.36 125.121 122.473 124.529 122.427L123.66 122.234C123.108 122.046 122.616 121.714 122.234 121.272L121.828 120.802C121.286 120.113 121.005 119.255 121.037 118.379C121.048 117.931 121.181 117.495 121.422 117.117C121.586 116.719 121.851 116.37 122.192 116.106L122.904 115.635C123.436 115.38 124.026 115.27 124.615 115.314L125.484 115.5C126.035 115.695 126.526 116.029 126.909 116.469H126.916Z" fill="black"/>
<path d="M113.825 120.887L113.355 121.294C113.04 121.589 112.655 121.797 112.236 121.899C111.82 122.056 111.374 122.119 110.931 122.085C110.487 122.05 110.057 121.919 109.67 121.7C109.272 121.536 108.923 121.27 108.658 120.93L108.188 120.218C107.933 119.685 107.823 119.096 107.867 118.507L108.052 117.631C108.248 117.08 108.582 116.59 109.022 116.205L109.492 115.799C109.808 115.507 110.193 115.298 110.611 115.193C111.022 115.018 111.472 114.954 111.915 115.008C112.359 115.025 112.792 115.158 113.169 115.393C113.571 115.555 113.922 115.821 114.188 116.163L114.652 116.875C114.912 117.406 115.025 117.996 114.979 118.586L114.787 119.462C114.596 120.013 114.265 120.505 113.825 120.887Z" fill="black"/>
<path d="M122.804 109.749C123.219 109.519 123.662 109.347 124.123 109.236C124.559 109.11 125.009 109.043 125.463 109.036C125.729 109.022 125.995 109.022 126.261 109.036H126.574C126.71 109.036 126.717 109.036 126.574 109.036L126.781 109.072C127.303 109.165 127.815 109.313 128.306 109.513C128.579 109.588 128.871 109.551 129.116 109.41C129.362 109.27 129.542 109.038 129.617 108.765C129.686 108.496 129.651 108.211 129.519 107.967C129.387 107.722 129.168 107.537 128.905 107.447C127.747 106.997 126.507 106.801 125.267 106.874C124.028 106.947 122.818 107.285 121.721 107.867C121.486 108.01 121.315 108.237 121.243 108.503C121.172 108.768 121.205 109.051 121.336 109.293C121.482 109.524 121.71 109.692 121.974 109.763C122.238 109.834 122.519 109.804 122.762 109.677L122.804 109.749Z" fill="black"/>
<path d="M115.721 107.996C114.484 107.239 113.1 106.754 111.661 106.573C110.222 106.393 108.761 106.52 107.376 106.948C107.112 107.036 106.891 107.222 106.759 107.467C106.627 107.711 106.592 107.997 106.663 108.266C106.741 108.537 106.922 108.767 107.167 108.907C107.411 109.046 107.701 109.085 107.974 109.015C109.084 108.659 110.258 108.548 111.415 108.691C112.571 108.834 113.683 109.226 114.673 109.841C114.794 109.918 114.93 109.97 115.072 109.993C115.214 110.016 115.359 110.01 115.498 109.976C115.638 109.942 115.769 109.88 115.884 109.795C115.999 109.709 116.096 109.6 116.168 109.476C116.24 109.352 116.287 109.215 116.305 109.072C116.323 108.93 116.312 108.785 116.273 108.647C116.234 108.509 116.168 108.38 116.078 108.268C115.987 108.156 115.876 108.063 115.749 107.996H115.721Z" fill="black"/>
<path d="M143.022 173.46L142.623 145.175L61.9082 142.901V143.771L62.3643 174.6C62.4377 179.897 63.554 185.128 65.6492 189.993C67.7445 194.858 70.7779 199.263 74.5759 202.956C78.3739 206.649 82.8623 209.557 87.7846 211.515C92.7069 213.473 97.9667 214.442 103.263 214.366C108.56 214.292 113.791 213.175 118.656 211.079C123.521 208.982 127.925 205.948 131.617 202.15C135.309 198.351 138.217 193.862 140.174 188.939C142.131 184.017 143.099 178.757 143.022 173.46Z" fill="#DA2128"/>
<path d="M118.144 162.236C126.972 162.236 134.129 155.079 134.129 146.251C134.129 137.423 126.972 130.266 118.144 130.266C109.316 130.266 102.159 137.423 102.159 146.251C102.159 155.079 109.316 162.236 118.144 162.236Z" fill="#D47B57"/>
<path d="M61.8014 135.069L85.6753 135.126C85.3973 115.464 85.7465 97.7048 101.575 95.5312C121.059 92.8516 139.523 102.829 140.322 129.653L140.571 137.735L142.517 137.799L142.374 127.886C142.299 122.589 141.181 117.359 139.084 112.495C136.988 107.63 133.954 103.226 130.155 99.5341C126.357 95.8421 121.868 92.9345 116.946 90.9772C112.024 89.0199 106.764 88.0513 101.468 88.1268C96.1714 88.202 90.9419 89.3199 86.0777 91.4164C81.2135 93.513 76.81 96.5472 73.1186 100.346C69.4272 104.144 66.5202 108.633 64.5637 113.555C62.6072 118.477 61.6395 123.737 61.7159 129.033L61.8014 135.069Z" fill="#662F26"/>
<path d="M113.975 83.1524C109.357 89.9226 99.3225 89.5663 92.1247 89.4808C83.5372 89.3525 83.5301 102.693 92.1247 102.822C104.824 103.007 117.78 101.14 125.491 89.887C127.529 86.9081 126.054 82.4897 123.104 80.7579C119.804 78.8338 115.977 80.1664 113.975 83.1524Z" fill="#662F26"/>
<path d="M107.882 127.116C107.882 127.116 121.864 136.495 131.128 133.074C131.128 133.074 131.962 147.591 116.433 144.89C103.028 142.531 107.882 127.116 107.882 127.116Z" fill="#3F0000"/>
<path d="M112.799 133.487C110.885 132.994 108.862 133.142 107.041 133.908C107.212 138.369 109.05 143.607 116.398 144.89C117.303 145.048 118.217 145.151 119.134 145.196C119.206 144.982 119.277 144.768 119.334 144.548C119.933 142.214 119.582 139.738 118.356 137.664C117.131 135.59 115.132 134.088 112.799 133.487Z" fill="#843F44"/>
<path d="M77.8931 169.512C83.4781 169.512 88.0056 164.984 88.0056 159.399C88.0056 153.814 83.4781 149.287 77.8931 149.287C72.3081 149.287 67.7805 153.814 67.7805 159.399C67.7805 164.984 72.3081 169.512 77.8931 169.512Z" fill="#D47B57"/>
<path d="M107.397 174.5L103.292 174.557L103.085 180.415L107.19 180.358L107.397 174.5Z" fill="white"/>
<path d="M114.181 174.401L109.692 174.465L109.506 180.33L114.003 180.266L114.181 174.401Z" fill="white"/>
<path d="M120.417 174.315L115.742 174.379L115.557 180.244L120.239 180.173L120.417 174.315Z" fill="white"/>
<path d="M132.525 174.144L121.807 174.294L121.629 180.152L132.347 180.002L132.525 174.144Z" fill="white"/>
<path d="M152.451 20.3106H112.086C110.461 20.3106 109.143 21.6284 109.143 23.2539V44.3627C109.143 45.9882 110.461 47.3059 112.086 47.3059H152.451C154.076 47.3059 155.394 45.9882 155.394 44.3627V23.2539C155.394 21.6284 154.076 20.3106 152.451 20.3106Z" fill="#DA2128"/>
<path d="M126.396 31.7416H122.27V35.8679H126.396V31.7416Z" fill="white"/>
<path d="M134.335 31.7416H130.209V35.8679H134.335V31.7416Z" fill="white"/>
<path d="M142.267 31.7416H138.141V35.8679H142.267V31.7416Z" fill="white"/>
<path d="M139.758 47.2988L138.141 54.9599L149.344 47.2988H139.758Z" fill="#DA2128"/>
<path d="M77.8931 159.399C77.8931 159.399 87.6065 181.306 120.438 174.315C140.065 170.132 165.642 138.34 165.642 138.34" stroke="#D47B57" stroke-width="9.24" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M162.941 156.313C166.818 156.313 169.961 153.171 169.961 149.294C169.961 145.417 166.818 142.274 162.941 142.274C159.064 142.274 155.922 145.417 155.922 149.294C155.922 153.171 159.064 156.313 162.941 156.313Z" fill="#D47B57"/>
<path d="M85.4115 201.232V231.826" stroke="#DA2128" stroke-width="10.72" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M122.797 206.335V241.212" stroke="#DA2128" stroke-width="10.72" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M80.4657 139.808C87.4755 139.808 93.158 134.126 93.158 127.116C93.158 120.106 87.4755 114.424 80.4657 114.424C73.4559 114.424 67.7733 120.106 67.7733 127.116C67.7733 134.126 73.4559 139.808 80.4657 139.808Z" fill="#C52127"/>
<path d="M80.4657 124.486C80.4657 124.486 76.0758 92.8018 101.468 88.141" stroke="#C52127" stroke-width="10.72" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.14" d="M222.22 116.277L208.501 177.059L155.922 172.683L170.51 109.656L222.22 116.277Z" fill="#DA2128"/>
<g opacity="0.26">
<path d="M182.546 124.002C183.333 123.789 184.025 123.318 184.511 122.663C184.998 122.009 185.249 121.21 185.226 120.396C185.176 119.377 184.734 118.418 183.993 117.718C183.252 117.018 182.269 116.631 181.249 116.64C180.753 116.632 180.26 116.725 179.801 116.912C179.341 117.1 178.925 117.379 178.576 117.731C178.227 118.084 177.953 118.504 177.771 118.966C177.588 119.427 177.501 119.921 177.515 120.417C177.548 121.136 177.78 121.832 178.185 122.427C178.59 123.022 179.153 123.493 179.81 123.788C177.365 124.037 172.612 125.213 171.97 130.615L188.597 132.34C188.781 130.451 188.267 128.56 187.153 127.023C186.038 125.487 184.399 124.412 182.546 124.002Z" fill="#DA2128"/>
<path d="M194.269 118.728L217.701 121.55L212.919 140.999L189.566 138.59L194.269 118.728Z" fill="#DA2128"/>
<path d="M168.478 141.362L212.556 145.602L206.05 171.13L162.036 167.374L168.478 141.362Z" fill="#DA2128"/>
</g>
<path opacity="0.26" d="M187.62 139.131L169.968 137.115L171.051 133.209L188.525 135.026L187.62 139.131Z" fill="#DA2128"/>
</svg>


`;

export default props => (
  <SvgXml xml={xml} height={props.height} left={props.left} />
);
