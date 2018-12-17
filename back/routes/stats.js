const express = require('express');

const router = express.Router();

router.get('./api/stats/seasonal/', (req, res) => res.json())

module.exports = router;
