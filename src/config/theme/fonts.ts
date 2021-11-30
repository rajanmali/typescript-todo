import { Font } from 'styled-components';

const defaultFontProps = `
  font-family: Nunito Sans;
  font-style: normal;      
  letter-spacing: 0.5px;
`;

export const fonts: Font = {
  regular: {
    size_10: `
      ${defaultFontProps}      
      font-weight: normal;
      font-size: 10px;
      line-height: 16px;      
    `,

    size_12: `
      ${defaultFontProps}      
      font-weight: normal;
      font-size: 12px;
      line-height: 20px;      
    `,

    size_14: `
      ${defaultFontProps}      
      font-weight: normal;
      font-size: 14px;
      line-height: 23px;      
    `,

    size_16: `
      ${defaultFontProps}      
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;      
    `,

    size_18: `
      ${defaultFontProps}      
      font-weight: normal;
      font-size: 18px;
      line-height: 28px;      
    `,

    size_20: `
      ${defaultFontProps}      
      font-weight: normal;
      font-size: 20px;
      line-height: 32px;      
    `,
  },

  bold: {
    size_10: `
      ${defaultFontProps}      
      font-weight: 800;
      font-size: 10px;
      line-height: 16px;      
    `,

    size_12: `
      ${defaultFontProps}      
      font-weight: 800;
      font-size: 12px;
      line-height: 20px;      
    `,

    size_14: `
      ${defaultFontProps}      
      font-weight: 800;
      font-size: 14px;
      line-height: 23px;      
    `,

    size_16: `
      ${defaultFontProps}      
      font-weight: 800;
      font-size: 16px;
      line-height: 26px;      
    `,

    size_18: `
      ${defaultFontProps}      
      font-weight: 800;
      font-size: 18px;
      line-height: 28px;      
    `,

    size_20: `
      ${defaultFontProps}      
      font-weight: 800;
      font-size: 20px;
      line-height: 32px;      
    `,

    size_24: `
      ${defaultFontProps}      
      font-weight: 800;
      font-size: 24px;
      line-height: 38px;  
      letter-spacing: 1px;    
    `,

    size_32: `
      ${defaultFontProps}      
      font-weight: 800;
      font-size: 32px;
      line-height: 52px;      
      letter-spacing: 2px;
    `,

    size_48: `
      ${defaultFontProps}      
      font-weight: 800;
      font-size: 48px;
      line-height: 72px;      
      letter-spacing: 2px;
    `,
  },
};
