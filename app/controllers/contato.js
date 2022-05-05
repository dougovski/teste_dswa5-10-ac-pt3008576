module.exports = function(app) {
    var Contato = app.models.contato;
    var controller = {};
    controller.listaContatos = function(req, res) {
        Contato.find().exec().then(
            function(contatos) {
                res.json(contatos);
            },
            function(erro) {
                console.error(erro)
                res.status(500).json(erro);
            });
    };
