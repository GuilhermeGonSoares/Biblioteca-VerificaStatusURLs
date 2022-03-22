import pegaArquivo from './index.js'
import chalk from 'chalk'
import validaURLs from './http-validacao.js'

const caminho = process.argv

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2])
    if (caminho[3] === 'validar') {
        console.log(chalk.yellowBright('Links validados'), await validaURLs(resultado))
    }else {
        console.log(chalk.yellowBright('Lista de links'), resultado)
    }
}

processaTexto(caminho)