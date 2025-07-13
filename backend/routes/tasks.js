const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, title: "Estudiar para examen", due: "2025-07-15" },
    { id: 2, title: "Revisar apuntes", due: "2025-07-16" }
  ]);
});

module.exports = router;
