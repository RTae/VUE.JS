const express = require('express');
const router = express.Router();

router.get("/login/", (req, res) => {
    res.json({
        result: "LOGIN PASS",
    })
})

module.exports = router