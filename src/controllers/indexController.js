function indexView(req, res){
    let pessoa = req.session.pessoa
    res.render("index.html", {pessoa});

    let conta = req.session.conta
    res.render("index.html", {conta});
    
}


module.exports =  {
    indexView,
};