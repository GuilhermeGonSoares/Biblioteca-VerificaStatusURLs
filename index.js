import chalk from 'chalk'
import fs from 'fs'


function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayResultados = []
    let temp;
    while ((temp = regex.exec(texto)) !== null){
       arrayResultados.push({ [temp[1]]:temp[2] })
    }
    return arrayResultados.length === 0 ? 'Não há links' : arrayResultados
}


function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'))
}


//Escrever de forma síncrona e executar de forma assíncrona
async function pegaArquivo(caminhoDoArquivo){
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8')
        return extraiLinks(texto)
    } catch(err) {
        trataErro(err)
    }
}


export default pegaArquivo