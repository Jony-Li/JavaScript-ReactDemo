# JavaScript-ReactDemo
## 环境准备
  * 1.安装Node.js  下载地址：https://nodejs.org/zh-cn/download/
  * 备注：NodeJS 安装完成后会自带npm 包管理工具
  * 2.cmd运行命令行 查看NodeJS是否安装成功
  * #node  -v    #查看版本号
  * #npm -v      #查看版本号
  * 3.安装JSPM 包管理工具
  * #npm install -g jspm

## 创建项目，例如：JavaScript-ReactDemo
  * 1.进入项目目录，执行以下命令：
  * #npm init  // 回车 会自动创建package.json   package-lock.json
  * 2.将JSPM 工具导入项目
  * #npm install  jspm --save-dev
  * 3.创建JSPM 配置文件
  * #jspm init           // 会创建config.js  脚手架文件
  * 4.导入React及三方库
  * #jspm install react
  * #jspm install react-dom
  * #jspm install semantic-ui
  * #jspm install css
  * 备注：react 语法是jsx语法。
  * 5.安装browser-sync 检测文件的改变，减少每次手动刷新；
  * #npm install browser-sync
  * 6.启动browser-sync 指定监听的文件
  * browser-sync start --server --no-notify --files 'index.html, app/**/*.js'
