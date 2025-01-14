import { getRelativePath, getUpperCasePath, resolveApp } from '../utils';

const reg = /\d+rpx/gi;

const getCssArray = (text: string): Array<string | number> => {
  const result: Array<string | number> = [];

  while (reg.test(text)) {
    const matchTexts = text.match(reg);
    if (matchTexts) {
      const matchText = matchTexts[0];
      const firstString = text.split(matchText);
      if (firstString[0]) {
        result.push(JSON.stringify(firstString[0]));
      }
      result.push(matchText.split('rpx')[0]);
      text = firstString[1] ? firstString[1] : '';
    }
  }
  result.push(JSON.stringify(text));

  return result;
};

/**
 * 处理css文件
 */
const parserCss = () => {
  let inputFile = '';
  return {
    name: 'transform-css',
    options(options: { input: any }) {
      inputFile = resolveApp(options.input);
    },
    transform(source: string, fileName: string) {
      if (/\.css$/.test(fileName)) {
        const arrayCode: Array<string | number> = getCssArray(source);
        const pagePath = getRelativePath(inputFile, fileName);
        const upperPath = getUpperCasePath(pagePath) + 'Style';
        return `var ${upperPath} = [${arrayCode.join(',')}]; export default ${upperPath};`;
      }
      return null;
    },
  };
};

export default parserCss;
