const chokidar = require('chokidar');
const { exec } = require('child_process');

const objectsPath = [
  './templates/user/**/*.ejs',
  './templates/admin/**/*.ejs',
  './templates/*.ejs'
];

function build(type) {
  exec(`node build.js ${type} local`, (error, stdout, stderr) => {
    if(error) process.stdout.write('\r\x1b[34mError:\x1b[m ' + error.message);
    else if(stderr) process.stdout.write('\r\x1b[34mError (build):\x1b[m ' + stderr);
    process.stdout.write('\r\x1b[34mSaída:\x1b[m\n\t' + stdout.replace('\n', '\n\t'));
  });
}

console.clear();
console.log('\x1b[32mwatch.js está observando...\x1b[m\n');

const watcher = chokidar.watch(objectsPath, {
  ignored: /(^|[\/\\])\../, // ignora arquivos ocultos
  persistent: true
});

watcher.on('change', path => {
  console.log(`\r\x1b[35m=>\x1b[m O arquivo ${path} foi alterado`);
  if (path.includes('user')) build('user');
  else if (path.includes('admin')) build('admin');
  else build('');
});

watcher.on('error', error => console.log(`Erro do Observador: ${error}`));
