import 'styled-components';
import { Theme } from '../styles/theme';

declare module 'styled-components' {
  type DefaultTheme = Theme;
}
