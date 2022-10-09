const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');


const COMMON_EXTERNALS = {
  // ette: {
  //   commonjs: 'ette',
  //   commonjs2: 'ette',
  //   amd: 'ette',
  //   root: 'Ette',
  // },
  // 'ette-router': {
  //   commonjs: 'ette-router',
  //   commonjs2: 'ette-router',
  //   amd: 'ette-router',
  //   root: 'etteRouter',
  // },
  // 'ette-proxy': {
  //   commonjs: 'ette-proxy',
  //   commonjs2: 'ette-proxy',
  //   amd: 'ette-proxy',
  //   root: 'etteProxy',
  // },
  // react: {
  //   commonjs: 'react',
  //   commonjs2: 'react',
  //   amd: 'react',
  //   root: 'React',
  // },
  // 'react-dom': {
  //   commonjs: 'react-dom',
  //   commonjs2: 'react-dom',
  //   amd: 'react-dom',
  //   root: 'ReactDOM',
  // },
  react: 'window.React',
  'react-dom': 'window.ReactDOM',
  antd: 'window.antd',
  // mobx: 'mobx',
  // 'mobx-react': {
  //   commonjs: 'mobx-react',
  //   commonjs2: 'mobx-react',
  //   amd: 'mobx-react',
  //   root: 'mobxReact',
  // },
  // 'mobx-react-lite': {
  //   commonjs: 'mobx-react-lite',
  //   commonjs2: 'mobx-react-lite',
  //   amd: 'mobx-react-lite',
  //   root: 'mobxReact',
  // },
  // 'mobx-state-tree': {
  //   commonjs: 'mobx-state-tree',
  //   commonjs2: 'mobx-state-tree',
  //   amd: 'mobx-state-tree',
  //   root: 'mobxStateTree',
  // },
  // 'styled-components': {
  //   commonjs: 'styled-components',
  //   commonjs2: 'styled-components',
  //   amd: 'styled-components',
  //   root: 'styled',
  // },
  // 'ide-lib-utils': {
  //   commonjs: 'ide-lib-utils',
  //   commonjs2: 'ide-lib-utils',
  //   amd: 'ide-lib-utils',
  //   root: 'ideLibUtils',
  // },
  // 'ide-model-utils': {
  //   commonjs: 'ide-model-utils',
  //   commonjs2: 'ide-model-utils',
  //   amd: 'ide-model-utils',
  //   root: 'ideModelUtils',
  // },
  // 'ide-lib-base-component': {
  //   commonjs: 'ide-lib-base-component',
  //   commonjs2: 'ide-lib-base-component',
  //   amd: 'ide-lib-base-component',
  //   root: 'ideBaseComponent',
  // },
  // 'ide-lib-engine': {
  //   commonjs: 'ide-lib-engine',
  //   commonjs2: 'ide-lib-engine',
  //   amd: 'ide-lib-engine',
  //   root: 'ideLibEngine',
  // },
  'react-dnd': {
    commonjs: 'react-dnd',
    commonjs2: 'react-dnd',
    amd: 'react-dnd',
    root: 'ReactDnD',
  },
  'react-dnd-html5-backend': {
    commonjs: 'react-dnd-html5-backend',
    commonjs2: 'react-dnd-html5-backend',
    amd: 'react-dnd-html5-backend',
    root: 'ReactDnDHTML5Backend',
  },
  'react-dnd-touch-backend': {
    commonjs: 'react-dnd-touch-backend',
    commonjs2: 'react-dnd-touch-backend',
    amd: 'react-dnd-touch-backend',
    root: 'ReactDnDTouchBackend',
  },
};

function useLessLoader(config, handleLessRule) {
  const cssModel = config.module.rules.find(
    (i) => i.test.toString() === '/\\.css$/'
  );
  let lessRule = {
    test: /\.less$/,
    sideEffects: true,
    use: [
      ...cssModel.use,
      {
        loader: 'less-loader',
      },
    ],
  };
  if (handleLessRule) lessRule = handleLessRule(lessRule);
  config.module.rules.push(lessRule);
  return config;
}

const storyScope = process.env.STORYBOOK_SCOPE || '**';
const defaultStories = [`../packages/${storyScope}/stories/*.story.@(js|ts|tsx|mdx)`];

// Export a function. Accept the base config as the only param.
module.exports = {
  // core: {
  //   builder: 'webpack5',
  // },
  stories: defaultStories,
  webpackFinal: (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // const result = merge(config, {
    //   plugins: [
    //     new webpack.DefinePlugin({
    //     __VERSION__: '0.0.0',
    //     __PUBLIC_PATH__: '',
    //   })]
    // });

    // // Return the altered config
    // return result;

    config.externals = COMMON_EXTERNALS;

    // 获取原来定义的变量
    let definePluginId = config.plugins.findIndex(
      (p) => p.constructor.name === 'DefinePlugin'
    );
    const originPlugin = config.plugins[definePluginId];

    originPlugin.definitions = {
      ...originPlugin.definitions,
      __VERSION__: '"0.0.0"', // 必须要用两种引号，不然会报错。。。
      __PUBLIC_PATH__: '""',
    };

    const originTSPlugins = config.module.rules[0].use[0].options.plugins;
    // 将 reflect-meta 插件注入，不然会报错：https://stackoverflow.com/questions/52557878/babel-7-inversify-4-webpack-4-unexpected-character-on-inject
    originTSPlugins.unshift('babel-plugin-transform-typescript-metadata');

    return useLessLoader(config);
  },
};
