const { src, dest, series } = require('gulp');
const del = require('del');
const path = require('path');
// 批量发布 tnpm 包
var shell = require('shelljs');

const DIST_DIR = path.join(__dirname, './dist');

function clean() {
  return del([DIST_DIR]);
}

function copy() {
  // 需要忽略 node_modules
  return src([
    'packages/**/dist/**/*.js',
    'packages/**/dist/**/*.map',
    '!packages/**/node_modules/**/*.js',
    '!packages/**/node_modules/**/*.map',
  ]).pipe(dest(DIST_DIR));
}

// 只处理一级目录
function walk1LevelDirSync(dirPath, callback) {
  var fs = require('fs'),
    path = require('path');
  fs.readdirSync(dirPath).forEach(function (name) {
    var filePath = path.join(dirPath, name);
    var stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      callback(filePath, stat);
    }
  });
}

// 提升目录，将 dist 文件夹删除
function liftup(cb) {
  walk1LevelDirSync(DIST_DIR, (filePath, stat) => {
    // 将 dist/*.js 文件上移
    shell.cd(filePath);
    shell.exec('cp -r ./dist/* ./');
    shell.exec('rm -r ./dist');
  });

  cb && cb();
}

function publish(cb) {
  const pkgPaths = [
    //   path.join(__dirname, 'packages', 'graph-layouts'),
    //   path.join(__dirname, 'packages', 'lf-canvas-history'),
    //   path.join(__dirname, 'packages', 'lf-dsl-utils'),
    //   path.join(__dirname, 'packages', 'lf-model-routers'),
    //   path.join(__dirname, 'packages', 'lf-schema-converter'),
    //   path.join(__dirname, 'packages', 'lf-tool-debugger'),
    //   path.join(__dirname, 'packages', 'lf-x6-canvas'),
    //   path.join(__dirname, 'packages', 'lf-x6-canvas-editor'),
  ];

  pkgPaths.forEach((pkgPath) => {
    shell.cd(pkgPath);
    shell.exec('tnpm publish');
  });

  cb && cb();
}

exports.clean = clean;
exports.publish = publish;
exports.copy = copy;
exports.default = series(clean, copy, liftup);
