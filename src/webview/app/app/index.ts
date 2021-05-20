import Base from '@/webview/mixin/base';
import template from './template.html';

class App extends Base {
  static is = 'wx-app';
  static template = template;
  constructor() {
    super();
  }
  connectedCallback() {
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') {
        KipleViewJSBridge.publishHandler('onAppEnterForeground', {}, 1);
      } else {
        KipleViewJSBridge.publishHandler('onAppEnterBackground', {}, 1);
      }
    });
  }
}

export default App;