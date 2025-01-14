export const createElement = window.core.createElement;
export const __AppCssCode__ = (window.__AppCssCode__ = {});

const BASE_DEVICE_WIDTH = 750;
var deviceWidth = window.innerWidth || 375;

const rpx2px = (rpx) => {
  if (rpx === 0) {
    return 0;
  }
  rpx = (rpx / BASE_DEVICE_WIDTH) * deviceWidth;
  rpx = Math.floor(rpx);
  return rpx;
};

export const setCssToHead = (word, path) => {
  return () => {
    var cssText = '';
    var style = document.createElement('style');
    var head = document.head || document.getElementsByTagName('head')[0];
    word.forEach(function (text) {
      if (typeof text === 'number') {
        cssText += rpx2px(text) + 'px';
      } else if (typeof text === 'string') {
        cssText += text;
      }
    });
    if (cssText) {
      style.setAttribute('path', path);
      style.appendChild(document.createTextNode(cssText));
      head.appendChild(style);
    }
  };
};

export const _concat = (...arg) => {
  return ''.concat(...arg);
};

export const createListElement = (data, element) => {
  const results = [];
  for (let _index = 0; _index < list.length; _index++) {
    var item = list[_index];
    var index = _index;
    subCode.code ? `subCode.code\nindex = _index;` : '';
    key.push(_result.code);
  }
};
