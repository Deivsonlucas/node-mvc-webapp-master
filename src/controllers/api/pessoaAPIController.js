const Pessoa = require('../../models/pessoa')


function cadastrarPessoa(req, res){
    let pessoa = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        datadenascimento: req.body.datadenascimento,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        cep: req.body.cep
    }
    
    Pessoa.create(pessoa).then((result)=>{
        res.json({result});
    }).catch((err) => {
        console.log(err)
        res.json({err});
    })
}

module.exports =  {
    cadastrarPessoa,
};