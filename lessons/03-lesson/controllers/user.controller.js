const db = require('../db/users');

module.exports = {
    getSingleUser: (req, res) => {
        const { user_id } = req.params;
        const user = db[user_id];

        if (!user) {
            res.status(404).json('User not found');
            return;
        }

        res.json(user);
    },
    createUser: (req, res) => {
        res.json('OK');
    },
    getAllUsers: (req, res) => {
        res.json('OK');
    }
};
