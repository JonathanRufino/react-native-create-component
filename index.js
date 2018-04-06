#! /usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const argv = require('minimist');

const args = argv(process.argv.slice(2));
const componentName = args._[0];

const componentPath = path.join(path.dirname(__filename), componentName);

if (!fs.existsSync(componentPath)) {
    fs.mkdirSync(componentPath);

    createComponentFile()
    createStylesFile()
    createIndexFile()

    console.log('Pronto')
} else {
    console.log(chalk.red('Diretório já existe, remova o atual ou escolha outro nome.'));
    // TODO: Perguntar se deseja remover o pacote
}

function createComponentFile() {
    const componentFile = `${componentName}.js`
    const componentContent = 'component';

    // fs.writeFileSync(path.join(componentPath, componentFile), componentContent, (err) => {
    fs.writeFileSync('teste.js', 'teste', (err) => {
        console.log(err);
        if (err) throw err;

        console.log('Arquivo meucomponente.js criado com sucesso...');
    })
}

function createStylesFile() {
    const stylesFile = 'styles.js'
    const stylesContent = 'style';

    fs.writeFileSync(path.join(componentPath, stylesFile), stylesContent, (err) => {
        if (err) throw err;

        console.log('Arquivo meustyle.js criado com sucesso...');
    })
}

function createIndexFile() {
    const indexFile = 'index.js'
    const indexContent = 'index';

    fs.writeFileSync(path.join(componentPath, indexFile), indexContent, (err) => {
        if (err) throw err;

        console.log('Arquivo meuindex.js criado com sucesso...');
    })
}
