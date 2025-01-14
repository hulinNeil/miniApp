import { IConfig, IPageModule } from '.';
import { getUpperCasePath } from '../utils';

/**
 * 处理 app.json，批量导入 page js 文件
 */
export const serviceRoot = () => ({
  name: 'transform-config',
  transform(source: string, fileName: string) {
    if (/app\.json$/.test(fileName)) {
      const config: IConfig = JSON.parse(source);

      var code = `import './app.js';`;
      config.pages.forEach((item) => {
        code += `import './${item}';`;
      });
      code += `\nrequire('app.js');\ninitApp();`;

      return { code, map: null };
    }
    return null;
  },
});

/**
 * 处理 app.json，批量导入 page kml/css 文件，生成 app-config.json
 */
export const viewRoot = () => ({
  name: 'transform-config',
  transform(source: string, fileName: string) {
    if (/app\.json$/.test(fileName)) {
      const config: IConfig = JSON.parse(source);

      var code = "import {__AppCssCode__,setCssToHead} from  'inject/view.js';import AppStyle from './app.css';";
      const result: IPageModule[] = [];

      // 获取页面的模板和样式
      config.pages.forEach((item) => {
        const moduleName = getUpperCasePath(item);
        const cssModuleName = moduleName + 'Style';
        code += `import ${moduleName} from './${item}.kml';import ${cssModuleName} from './${item}.css';`;
        result.push({ path: item, moduleName, cssModuleName });
      });

      const pages: string[] = [];
      result.forEach((item) => {
        pages.push(`${JSON.stringify(item.path)}:{render: ${item.moduleName}}`);
      });

      code += `\nwindow.app = {${pages.join(',')}};\n__AppCssCode__['app'] = setCssToHead(AppStyle,'app');`;

      // 转换 css
      result.forEach((item) => {
        code += `\n__AppCssCode__['${item.path}'] = setCssToHead(${item.cssModuleName},'${item.path}');`;
      });

      return { code, map: null };
    }
    return null;
  },
});
