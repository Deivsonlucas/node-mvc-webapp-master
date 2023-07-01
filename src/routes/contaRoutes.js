const express = require('express');
const router = express.Router();

const contaController = require('../controllers/contaController');

router.get('/conta/cadastrarcontacorrente', contaController.cadastrarContacorrenteView);
router.post('/conta/cadastrarcontacorrente', contaController.cadastrarConta);

router.get('/conta/consultasaldo/:id', contaController.consultaSaldoView);

router.get('/conta/listarcontas', contaController.listarContasView);

router.get('/conta/movimentos', contaController.movimentosView);
router.post('/conta/cadastrarmovimentos', contaController.cadastrarmovimento);

router.get('/conta/listarmovimentos', contaController.listarmovimentosView);

module.exports = router;