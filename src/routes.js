const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');

// const router = express.Router(); -> funçao que temos dentro do pacote express
// Acessando direto o objeto, pra ficar mais limpo e desestrutura
const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);

module.exports = router;
