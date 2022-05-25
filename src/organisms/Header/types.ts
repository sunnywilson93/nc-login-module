import { HtmlHTMLAttributes } from 'react';

export type navElement = {
  element: any;
  onClick: any;
  key: string;
};
export interface PropTypes {
  bgColor?: string;
  title?: string;
  onBack?: any;
  actions?: navElement[];
}
