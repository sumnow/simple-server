    在开发vue的过程中，`npm run build`后生成的文件需要在服务端才可以使用，以往使用的是基于appche的xammp工具来显示，之前本地使用less的时候也是引入`less.min.js`文件，但xammp有些笨重，于是选择用`nodejs`来实现一个简单的本地服务,来查看依赖服务器环境的页面。

nodejs本身已经提供了创建服务的方法`createServer`，但没有提供页面入口，`express`,`koa`等框架提供了，但略复杂。

因此，写了一个简单的无依赖的服务，用来预览页面。使用方法如下：

    git clone https://github.com/sumnow/simple-server.git
    node server.js
    
打开浏览器[http://localhost:8080](http://localhost:8080)   即可查看效果。

![clipboard.png](https://github.com/sumnow/mdPhotos/blob/master/simple-server_01.png)

默认服务启动在`8080`端口，预览目录下`index.html`，可以修改`server.js`来改变端口和页面地址.

    var port = process.argv[2] || 8080;
    var pagePath = "/index.html"

或者在命令行里传递端口号 `node server.js 9527`

目前基于这个的FileBlog运行良好~

项目地址：
[https://github.com/sumnow/simple-server](https://github.com/sumnow/simple-server)
