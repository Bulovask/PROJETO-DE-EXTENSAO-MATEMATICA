const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');

const objectsPath = [
  `${__dirname}/../templates/user/**/*.ejs`,
  `${__dirname}/../templates/admin/**/*.ejs`,
  `${__dirname}/../templates/*.ejs`
];

function build(type) {
  exec(`node build.js ${type} local`, (error, stdout, stderr) => {
    if(error) process.stdout.write('\r\x1b[34mError:\x1b[m ' + error.message);
    else if(stderr) process.stdout.write('\r\x1b[34mError (build):\x1b[m ' + stderr);
    process.stdout.write('\r\x1b[34mSaída:\x1b[m\n\t' + stdout.replace('\n', '\n\t'));
  });
}

// console.clear();
console.log('\x1b[32mwatch.js está observando...\x1b[m\n');

const watcher = chokidar.watch(objectsPath, {
  ignored: /(^|[\/\\])\../, // ignora arquivos ocultos
  persistent: true
});

watcher.on('change', filePath => {
  const fileRelativePath = path.relative(path.join(__dirname, '../'), filePath);
  console.log(`\r\x1b[35m=>\x1b[m O arquivo ${fileRelativePath} foi alterado`);
  if (fileRelativePath.includes('user')) build('user');
  else if (fileRelativePath.includes('admin')) build('admin');
  else build('');
});

watcher.on('error', error => console.log(`Erro do Observador: ${error}`));
