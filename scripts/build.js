const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const args = process.argv.slice(2);

const prodURL = 'https://cdn.jsdelivr.net/gh/Bulovask/PROJETO-DE-EXTENSAO-MATEMATICA/public/res/';
const devURL = 'http://localhost:8000/';

const templatesDir = '../templates';
const outputDir = '../public';

function buildHTML(templateFile, outputFile, type, local = false) {
  const data = {
    type, local,
    cssFiles: (local ? devURL : prodURL) + '/css/',
    jsFiles: (local ? devURL : prodURL) + '/js/',
  }
  const templatePath = path.join(templatesDir, templateFile);
  const outputPath = path.join(outputDir, type, outputFile);

  ejs.renderFile(templatePath, data, (err, html) => {
    if (err) {
      console.error(`Erro ao construir o HTML!\n Aconteceu no template ${type}/${templateFile}:\n`, err);
      return;
    }

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, {recursive: true});
    }

    fs.writeFileSync(outputPath, html, 'utf8');
    console.log(`Arquivo ${type}/${outputFile} gerado com sucesso!`);
  });

}

const indexFileNames = ['index.ejs', 'index.html'];

switch(args.join(' ')) {
  case 'user':
    buildHTML(...indexFileNames, 'user', false);
  break;
  case 'admin':
    buildHTML(...indexFileNames, 'admin', false);
  break;
  case 'user local':
    buildHTML(...indexFileNames, 'user', true);
  break;
  case 'admin local':
    buildHTML(...indexFileNames, 'admin', true);
  break;
  case 'local':
    buildHTML(...indexFileNames, 'user', true);
    buildHTML(...indexFileNames, 'admin', true);
  break
  case '':
    buildHTML(...indexFileNames, 'user', false);
    buildHTML(...indexFileNames, 'admin', false);
  break
  default:
    throw Error('Argumentos incorretos: use "user", "user local", "admin" ou "admin local')
}