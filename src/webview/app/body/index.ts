import Base from '@/webview/mixin/base';
import Refresh from '@/webview/mixin/refresh';
import template from './template.html';

export interface PageBodyElement extends HTMLElement {
  enablePullDownRefresh: boolean;
}

class Body extends Refresh(Base) {
  static is = 'wx-page-body';
  static template = template;
  constructor() {
    super();
  }
}

export default Body;
