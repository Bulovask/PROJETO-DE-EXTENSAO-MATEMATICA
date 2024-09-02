# Projeto de Extensão - Matemática

## Motivação:

Estou fazendo um sistema para auxiliar no processo de gerenciar inscrições e matrículas em cursos de extensão do projeto de extensão que participo, é um projeto que visa diminuir atráves de cursos voltados para o ensino de matemática com recursos digitais (GeoGebra) a evasão em cursos superiores na área das ciências exatas, no nosso cenário os cursos que possui um alto índice de evasão são Licenciatura em Computação e Bacharelado em Engenharia Civil.

Nosso projeto está se expandindo e precisamos de formas mais eficientes para gerenciar nossos cursos, as inscrições e matrículas em cada um deles, como sou um estudante de Licenciatura em Computação e amo programar, resolvi, ao mesmo tempo em que estou aprendendo a criar sistemas web usando o Firebase, criar algo que pudesse ajudar meus colegas de projeto.

## Breve Descrição do Sistema:

O sistema será simples, contanto com dois sites, um dos usuários comuns e o outro para os administradores. O **usuário** poderá se inscrever em cursos, acompanhar a situação de suas inscrições e caso sejam deferidas ele poderá se matricular nos cursos, também poderá acompanhar estatísticas relacionadas so seu desempenho nos cursos. Já o **Administrador** poderá criar e gerenciar cursos, deferir ou não inscrições, acompanhar estatísticas sobre os cursistas e outras coisas que serão detalhadas em um documento a parte que também será disponibilizado aqui.

## Tecnologias Utilizadas:
- **Firebase Hosting** para servir os dois sites.
- **Firebase Functions** para processar as requisições dos usuários e administradores.
- **Cloud Firestore** é o banco de dados que irei usar.
- **EJS** para que eu possa dividir cada um dos sites em componentes, mas no final ter um arquivo index.html único para cada um dos sites, além de poder definir como ocorrerá a construção desses arquivos a depender de parâmetros.
- **Chokidar** para detectar automaticamente mudanças nos arquivos .ejs e construi os arquivos index.html
- **http-server** para servir localmente arquivos estáticos, pois não usarei o Firebase Hosting para servir estes arquivos, para que eu não consuma a cota gratuita do Firebase, usarei o JSDelivr.
- **JSDelivr** para fornecer os arquivos estáticos e imagens.
- **Google Classroom API** para adicionar o usuário automaticamente em uma sala do curso no Google Sala de Aula após ele se matricular.