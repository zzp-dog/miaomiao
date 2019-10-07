// 你也可以为其它的非js模块配置.d.ts文件
// 如html（告诉ts-loader把html理解成字符串）
declare module "*.html" {
    let template: string;
    export default template;
}