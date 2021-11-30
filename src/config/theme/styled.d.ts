import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    shadow: Shadow;
    font: Font;
    sizing: Sizing;
    style: Styles;
    media: Media;
    device: Device;
    layer: Layers;
    viewport?: Viewport;
    utils: Utils;
  }

  export interface Color {
    blue: HueLevel;
    orange: HueLevel;
    black: HueLevel;

    white: string;
    red: string;
    green: string;

    input: string;
  }

  export interface Font {
    regular: FontVariant;
    bold: FontVariant;
  }

  export interface Device {
    mobile_small: number;
    mobile_medium: number;
    mobile_large: number;
    tablet: number;
    laptop_small: number;
    laptop_medium: number;
    laptop_large: number;
    desktop: number;
  }

  export interface Media {
    mobile_small: string;
    mobile_medium: string;
    mobile_large: string;
    tablet: string;
    laptop_small: string;
    laptop_medium: string;
    laptop_large: string;
    custom: (breakpoint: number) => string;
  }

  export interface Viewport {
    height: string;
    width: string;
  }
}

interface HueLevel {
  hue_10?: string;
  hue_20: string;
  hue_40: string;
  hue_60: string;
  hue_80: string;
  hue_100: string;
}

interface Shadow {
  soft_shadow: ShadowProps;
  weak_shadow: ShadowProps;
  light_shadow: ShadowProps;
}

interface ShadowProps {
  background: string;
  box_shadow: string;
}

interface FontVariant {
  size_10: string;
  size_12: string;
  size_14: string;
  size_16: string;
  size_18: string;
  size_20: string;
  size_24?: string;
  size_32?: string;
  size_48?: string;
}

interface Sizing {
  header_size: number;
  header_size_mobile: number;
  navbar_size: number;
  footer_size: number;
  width_padding: number;
  container_width: number;
}

interface Styles {
  cut_text: string;
  absolute_fill: string;
  media_transition: string;
  section_divider: string;
}

interface Layers {
  level_0: string;
  level_1: string;
  level_2: string;
  level_3: string;
  level_4: string;
  level_5: string;
}

interface Utils {
  convertHexToRGBA: (hex: string, opacity: number) => string;
}
