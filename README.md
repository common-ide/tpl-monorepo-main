## __name__(noCase)

本仓库采用 monorepo 方式构建，使用 yarn 搭配 workspaces 来组织代码，如果没安装过的 yarn 的请先安装 yarn
```shell
tnpm i -g yarn
```

> monorepo 教程可参考：https://zhuanlan.zhihu.com/p/108118011

## 本地开发

采用 lerna 开发，先安装依赖；为了方便本地各模块可以互相引用，需要先执行一次编译（存在 dist 文件夹）：

```shell
yarn install && yarn pre-dev && yarn build
```
> 之所以需要 `yarn build` 一次，是因为多包之间存在依赖，需要本地之间建立链接，需要本地的 dist 目录

然后直接通过运行 `yarn dev` 即可打开 storybook 进行本地预览
> 如果只想指定某个组件的 storybook，可以采用 `STORYBOOK_SCOPE=alert yarn dev`

也可以直接仅仅只针对某个组件进行本地 dev 预览： `lerna run dev --scope=alert`
> 也可以直接 `cd ./packages/alert` ，然后执行 `yarn dev`


## 如何添加组件

 1. 在 config-files 文件中创建配置文件，比如 "lf-x6-canvas-demo"
 2. 在项目根目录里执行 `ide-cli create ./config-files/alert.json -d ./packages` 即可以生成标准组件

> 如果不存在 `ide-cli` 命令，通过 `tnpm install -D ide-component-cli` 安装

> 新增组件不需要现实依赖 ide-kit 或者 ette-kit 依赖，把它们看成类似于 react 的公共库即可

## 如何发布

由于 lerna 在内网的发布不太友好，所以得曲线救国
 1. （可选）执行 `lerna run version` 进行版本更新
 2. 执行 `lerna run build` 执行打包（或者通过 `lerna run build --scope=xxxx` 只打包指定的内容）
 3. （可选）执行 `gulp publish` （需要修改部分内容）执行各个包的发布
