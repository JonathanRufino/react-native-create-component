#! /usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const args = require('minimist');

const componentPath = '/home/jonathan/Git/react-native-create-component/component/meucomponente.js'
const indexPath = '/home/jonathan/Git/react-native-create-component/component/meuindex.js'
const stylesPath = '/home/jonathan/Git/react-native-create-component/component/meustyle.js'

const componentContent = 'meu componente';
const indexContent = 'meu index';
const stylesContent = 'meu style';

var argv = args(process.argv.slice(2));
console.log(argv);
console.log(argv[0])

console.log(path.join(path.dirname(__filename), 'component'));

// if (!fs.existsSync('component')) {
//     fs.mkdirSync('component');

//     fs.writeFileSync(componentPath, componentContent, (err) => {
//         if (err) throw err;

//         console.log('Arquivo meucomponente.js criado com sucesso...');
//     })

//     fs.writeFileSync(indexPath, indexContent, (err) => {
//         if (err) throw err;

//         console.log('Arquivo meuindex.js criado com sucesso...');
//     })

//     fs.writeFileSync(stylesPath, stylesContent, (err) => {
//         if (err) throw err;

//         console.log('Arquivo meustyle.js criado com sucesso...');
//     })

//     console.log('Pronto')
// } else {
//     console.log(chalk.red('Diretório já existe, remova o atual ou escolha outro nome.'));
//     // TODO: Perguntar se deseja remover o pacote
// }