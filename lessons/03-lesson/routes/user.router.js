const router = require('express').Router();

router.post('/', (req, res) => {

});

router.get('/', (req, res) => {
    res.json('Hello World!')
});

router.get('/:user_id', (req, res) => {

});

router.put('/:user_id', (req, res) => {

});

router.delete('/:user_id', (req, res) => {

});

module.exports = router;