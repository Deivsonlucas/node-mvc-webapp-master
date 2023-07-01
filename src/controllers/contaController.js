const Conta = require('../models/conta');
const Movimento = require('../models/movimentos');

function cadastrarContacorrenteView(req, res){
    res.render("conta/cadastrarcontacorrente.html", {});
}

function cadastrarConta(req, res){
    let conta = {
        nomedeusuario: req.body.nomedeusuario,
        numerodaconta: req.body.numerodaconta,
        nomedaconta: req.body.nomedaconta,
        datadeabertura: req.body.datadeabertura,
        saldo: req.body.saldo,
    }
    
    Conta.create(conta).then((result)=>{
        console.log(conta);
        res.render("conta/cadastrarcontacorrente.html", {conta});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("conta/cadastrarcontacorrente.html", {erro});
    })
}

function listarContasView(req, res){

    Conta.findAll().then((conta)=>{
        res.render("conta/listarcontas.html", {conta});
    })
}

function consultaSaldoView(req, res){
    let id = req.params.id
    let conta;
    Conta.findByPk(id).then((conta)=>{
        res.render("conta/consultasaldo.html", {conta});
    })
}

function movimentosView(req, res){
    res.render("conta/movimentos.html", {});
}

function cadastrarmovimento(req, res){
    let movimento = {
        contacorrente_id: req.body.contacorrente_id,
        tipo: req.body.tipo,
        data_movimento: req.body.data_movimento,
        valor: req.body.valor,
        contacorrente_origem: req.body.contacorrente_origem,
        contacorrente_destino: req.body.contacorrente_destino,
        observacao: req.body.observacao,

    }
    
    Movimento.create(movimento).then((result)=>{
        console.log(movimento);
        res.render("conta/listarmovimentos.html", {movimento});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("conta/cadastrarmovimentos.html", {erro});
    })
}

function listarmovimentosView(req, res){

    Movimento.findAll().then((movimento)=>{
    res.render("conta/listarmovimentos.html", {movimento});
    })
    
}

function editarsaldo(req, res) {
    let saldo = {
        saldo: req.body.saldo,
    }
    Conta.update(
      saldo,
      {
        where: {
            id: req.body.id_conta,
        },
      }
    ).then(function (sucesso) {
        res.render("pessoa/editar.html", {pessoa, sucesso});
    })
    .catch(function (erro) {
        res.render("pessoa/editar.html", {pessoa, erro})
    });

}

module.exports =  {
    cadastrarContacorrenteView,
    cadastrarConta,
    listarContasView,
    consultaSaldoView,
    movimentosView,
    cadastrarmovimento,
    listarmovimentosView,
};