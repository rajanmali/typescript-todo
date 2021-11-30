import { DefaultTheme } from 'styled-components';

import { color } from './color';
import { fonts } from './fonts';
import { media, device } from './media';

import { convertHexToRGBA } from '@utils/index';

export const theme: DefaultTheme = {
  color,
  media,
  device,
  font: fonts,

  shadow: {
    soft_shadow: {
      background: '#C4C4C4',
      box_shadow: '0px 12px 24px rgba(68, 68, 68, 0.12)',
    },

    weak_shadow: {
      background: '#C4C4C4',
      box_shadow: '0px 12px 12px rgba(68, 68, 68, 0.06)',
    },

    light_shadow: {
      background: '#C4C4C4',
      box_shadow: '0px 1px 7px rgba(68 68 68, 0.06)',
    },
  },

  sizing: {
    header_size: 66,
    header_size_mobile: 95,
    footer_size: 105,
    navbar_size: 330,
    width_padding: 84,
    container_width: 1272,
  },

  style: {
    media_transition: '250ms',
    cut_text: 'text-overflow: ellipsis; overflow: hidden; white-space: nowrap;',
    section_divider: `
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
      opacity: 0.3;      
      background-color: ${color.black.hue_20};
    `,
    absolute_fill: `          
      display: block;
      position: absolute;
      height: 100%;
      width: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);            
      transition: 150ms;
      z-index: -1;
    `,
  },

  layer: {
    level_0: 'z-index: 0',
    level_1: 'z-index: 10',
    level_2: 'z-index: 20',
    level_3: 'z-index: 30',
    level_4: 'z-index: 40',
    level_5: 'z-index: 50',
  },
  utils: {
    convertHexToRGBA,
  },
};
