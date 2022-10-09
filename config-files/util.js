

const extraLibs = [
  'react-dnd',
  'react-dnd-html5-backend',
  {
    '@ali/lf-dsl-utils': {
      commonjs: '@ali/lf-dsl-utils',
      commonjs2: '@ali/lf-dsl-utils',
      amd: '@ali/lf-dsl-utils',
      root: 'lfDslUtils',
    },
    '@ali/lf-canvas-adapter': {
      commonjs: '@ali/lf-canvas-adapter',
      commonjs2: '@ali/lf-canvas-adapter',
      amd: '@ali/lf-canvas-adapter',
      root: 'lfCanvasAdapter',
    },
    '@ali/lf-canvas-factory': {
      commonjs: '@ali/lf-canvas-factory',
      commonjs2: '@ali/lf-canvas-factory',
      amd: '@ali/lf-canvas-factory',
      root: 'lfCanvasFactory',
    },
    '@ali/lf-canvas-history': {
      commonjs: '@ali/lf-canvas-history',
      commonjs2: '@ali/lf-canvas-history',
      amd: '@ali/lf-canvas-history',
      root: 'lfCanvasHistory',
    },
    '@ali/lf-model-routers': {
      commonjs: '@ali/lf-model-routers',
      commonjs2: '@ali/lf-model-routers',
      amd: '@ali/lf-model-routers',
      root: 'lfModelRouters',
    },
    '@ali/lf-schema-converter': {
      commonjs: '@ali/lf-schema-converter',
      commonjs2: '@ali/lf-schema-converter',
      amd: '@ali/lf-schema-converter',
      root: 'lfSchemaConverter',
    },
    '@ali/lf-block-canvas': {
      commonjs: '@ali/lf-block-canvas',
      commonjs2: '@ali/lf-block-canvas',
      amd: '@ali/lf-block-canvas',
      root: 'lfBlockCanvas',
    },
    '@ali/lf-x6-canvas': {
      commonjs: '@ali/lf-x6-canvas',
      commonjs2: '@ali/lf-x6-canvas',
      amd: '@ali/lf-x6-canvas',
      root: 'lfX6Canvas',
    },
    '@ali/lf-tool-debugger': {
      commonjs: '@ali/lf-tool-debugger',
      commonjs2: '@ali/lf-tool-debugger',
      amd: '@ali/lf-tool-debugger',
      root: 'lfToolDebugger',
    },
    '@ali/lf-canvas-ioc': {
      commonjs: 'lf-canvas-ioc',
      commonjs2: 'lf-canvas-ioc',
      amd: 'lf-canvas-ioc',
      root: 'lfCanvasIoc',
    },
    '@ali/lf-canvas-components': {
      commonjs: 'lf-canvas-components',
      commonjs2: 'lf-canvas-components',
      amd: 'lf-canvas-components',
      root: 'lfCanvasComponents',
    },
    '@ali/graph-layouts': {
      commonjs: 'graph-layouts',
      commonjs2: 'graph-layouts',
      amd: 'graph-layouts',
      root: 'graphLayouts',
    },
  },
];

module.exports = {
  extraLibs,
};