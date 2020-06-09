const express = require("express");
const knex = require("knex");
const configOptions = require("./knexfile").development;
const db = knex(configOptions);

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retreive cars" });
    });
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db("cars")
    .where({ id })
    .first()
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      console.lot(err);
      res.status(500).json({ error: "Failed to retrieve car" });
    });
});
router.post("/", (req, res) => {
  const newCar = req.body;
  db("cars")
    .insert(newCar)
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(newEntry => {
          res.status(201).json(newEntry);
        });
    })
    .catch(err => {
      console.log("Post error", err);
      res.status(500).json({ error: "Failed to store data" });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db("cars")
    .where({ id })
    .update(changes)
    .then(count => {
      res.status(200).json(changes);
    })
    .catch(err => {
      console.log(err);
      res.status(5000).json({ error: "Failed to update car" });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db("cars")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Failed to delete from server" });
    });
});

module.exports = router;
