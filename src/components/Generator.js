const messageStyle = {
    ofensa: (target, message) => [
        `Para Ciro Gomes ${target} é ${message}`,
        `"${target} é o maior ${message} do páis", afirma Ciro em entrevista para ${jornal()}`,
        `Em reunião com ${reacionarios()}, Ciro Gomes afirma que ${target} sempre foi ${message}`,
    ],
    teoria: (target, message) => [
        `Sobre ${message}: ${target} é culpado afirma Ciro em entrevista ${jornal()}`,
        `Para Ciro Gomes ${target} é responsavel por ${message}`,
        `Em reunião com ${reacionarios()} Ciro dispara contra ${target}: "${conspiracao()} ${message}"`
    ],
    plano: (target, message, plano) => [
        `O nosso ${plano} ${message} que a ideia do ${target}, afirma Ciro em manifestação ao lado do MBL`,
        `${plano} é única alternativa para o país, afirma usuário do twitter com florzinha no nome 🌹`,
        `"${target} não fez ${plano} porque ${message}" afirma Ciro Gomes em palestra com ${reacionarios()}`
    ]
}

function conspiracao() {
    const conspiracoes = ['conspirou', 'organizou', 'mutretou', 'possibilitou']
    return getRandom(conspiracoes)
}

function getMessage(messageType) {
    const message = {
        teoria: [
            "o impeachment da Dilma",
            "toda a corrupção que já aconteceu no país",
            "o crescimento do fascismo",
            "excesso de identitarismo que impede o crescimento do país",
            "o negacionismo da política",
            "a minha derrota na eleição de 2018"
        ],
        ofensa: [
            "um poste daquele bandido",
            "o maior ladrão do país",
            "fascista travestido de progressita",
            "responsável pela corrupção nas estatais",
            "fascista de vermelho"
        ]
    }
    return getRandom(message[messageType])
}

function getTarget(){
    const targets = [
        "a esquerda identitária",
        "o Jones Manoel",
        "O Haddad",
        "O Lula",
        "A Dilma",
        "O PT",
        "A esquerda"
    ]
    return getRandom(targets)
}

function getPlano(){
    const message = ['vai apaziguar o país', 'vai reeguer a economia', 'a Petrobras vai se converter em uma grande empresa de energia',  'vai resolver a corrupção do PT', 'vai tirar o nome dos brasileiros do SPC', "acabará com a inflação"]
    const plano = ['projeto de país', 'PND', 'grande conciliação nacional']

    const newPlano = getRandom(plano)
    const newMessage = getRandom(message)

    return [newPlano, newMessage]
}

function getRandom(data) {
    const min = Math.ceil(0);
    const max = Math.floor(data.length - 1);
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return data[rand]
}

function reacionarios() {
    const reacas = [
        "empresários da Fiesp", "políticos do DEM", "ruralistas", "membros do MBL", "Datena", "Eduardo Paes", "ACM Neto"
    ]
    return getRandom(reacas)
}

function jornal() {
    const jornais = [
        "a Folha", "ao Estadão", "ao G1", "a Jovem Pan", "ao Antagonista", "uma multidão (15 pessoas) em uma live"
    ]
    return getRandom(jornais)
}


export default function generator() {
    const messageTypes = ["teoria", "ofensa", "plano" ]

    const type = getRandom(messageTypes)
    const target = getTarget()
    const mensagens = messageStyle[type]
    if(type === "plano") {
        const [plano, message] = getPlano()
        const options = mensagens(target, message, plano)
        return getRandom(options)
    }
    const message = getMessage(type)
    const options = mensagens(target, message)
    return getRandom(options)
}