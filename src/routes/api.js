const router = require('express').Router();

const apiController = require('../controllers/apiController');

router.get('/', apiController.list);
router.get('/:id', apiController.get);
router.post('/add', apiController.save);
router.post('/update/:id', apiController.update);
router.get('/delete/:id', apiController.delete);

module.exports = router;

