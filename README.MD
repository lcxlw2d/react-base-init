# 统一账号绑定
> by lcx (qq:275246397)
> 基于webpack-dev-server
> xyzq官微appid:wx513461a9e5de5010

# 使用方法
```bash
#安装依赖包
yarn

#开发模式 (port:9528)
yarn dev
(需手动访问localhost:9528)

#生产打包
yarn prod

```
# 测试 or 生产环境切换
- 切换index.html中引用的加密文件
- 切换配置文件'src/config/UrlCfg.js'下baseUrl

# 上线准备
- 调整接口地址为线上地址，修改配置文件'src/config/UrlCfg.js'下baseUrl.prod
- 删除原dist目录
- 执行yarn prod
- 把dist目录中的img文件夹移动到同级的css文件夹下
- 在index.html同级目录新建img文件夹,存放img标签src的图片文件
- 部署代码
