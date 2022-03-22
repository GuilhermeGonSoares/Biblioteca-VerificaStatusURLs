import fetch from "node-fetch"

function manejaErros(erro) {
    throw new Error(erro.message)
}


async function checaStatus(arrayURLs) {
    //promises async await
    try{
        const arrayStatus = await Promise.all(arrayURLs.map(async url => {
            const res = await fetch(url)
            return res.status
        }))
        return arrayStatus
    } catch (erro) {
        manejaErros(erro)
    }
}


function geraArrayDeURLs(arrayLinks) {
    return arrayLinks.map(objetoLink => Object.values(objetoLink)[0])
}

async function validaURLs(arrayLinks){
    const links = geraArrayDeURLs(arrayLinks)
    const statusLinks = await checaStatus(links)
    arrayLinks.forEach((objeto, index) => {
        objeto['status'] = statusLinks[index]
        
    });
    return arrayLinks
}

export default validaURLs