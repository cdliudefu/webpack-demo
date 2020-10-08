
const fs = require('fs');

class TestPlugin {
    constructor(options) {
      this.options = Object.assign({
          name: 'webxiaoma',
          htmlPath: ''
      },options);
    }

    apply(compiler) {
      compiler.hooks.emit.tap('HelloWorldPlugin', (compilation) => {
        compilation.chunks.forEach(chunk => {
              chunk.files.forEach(filename=>{
                let filesSource = compilation.assets[filename].source();
                let source = `//作者：${this.options.name} \n//时间：${new Date()}  \n${filesSource}`;

                if ((/\.js$/).test(filename)) { // 判断是否是js文件，如果是放到js文件夹下
                      // 这里将js文件放入到js文件夹下后，删除以前assets存在的该文件。
                      delete compilation.assets[filename];
                      compilation.assets[`js/${filename}`] = {
                          source() {
                                  return source;
                          },
                          size() {
                                  return source.length;
                          }
                      };
                } else {
                    compilation.assets[filename] = {
                        source() {
                                return source;
                        },
                        size() {
                                return source.length;
                        }
                    };
                }
              });
        });

        // 生成index,html 文件
        let contentHTML;
        if (this.options.htmlPath) { // 如果文件路径存在，读取文件
            let htmlFile = fs.readFileSync(this.options.htmlPath).toString();
            // 添加打包后的js文件
            let content = '\n<script src="./dist/js/main.js"></script>\n</body>';
            contentHTML = htmlFile.replace('</body>',content);
        } else {
             contentHTML = `<!DOCTYPE html>
                <html lang="en">
                <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <title>测试</title>
                    </head>
                    <body>
                        <div id="root"></div>
                        <script src="./dist/js/main.js"></script>
                </body>
                </html>`;
        }

          compilation.assets['index.html'] = {
             source() {
                 return contentHTML;
             },
             size() {
                 return contentHTML.length;
             }
          };
        console.log('编译完成!');
      });
    }
  }

  module.exports = TestPlugin;
