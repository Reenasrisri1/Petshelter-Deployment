const Pet = require('../model/pet.model');

module.exports = {
  getAll: (req, res) => {
    Pet.find()
    .sort({type : "descending"})
      .then((allPets) => {
        console.log(allPets);
        res.json(allPets);
      })
      .catch((err) => {
        console.log(`error in getAll:${err}`);
        res.json(err);
      });
  },

  create: (req, res) => {
    console.log(req.body);
    Pet.create(req.body)
      .then((newPet) => {
        console.log(newPet);
        res.json(newPet);
      })
      .catch((err) => {
        console.log(`error in create:${err}`);
        res.json(err);
      });
  },

  getOne: (req, res) => {
    console.log(req.params.id);
    Pet.findById(req.params.id)
      .then((onePet) => {
        console.log(`onePet: ${onePet}`);
        res.json(onePet);
      })
      .catch((err) => {
        console.log(`error in getOne:${err}`);
        res.json(err);
      });
  },

  update: (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((udatedPet) => {
        console.log(udatedPet);
        res.json(udatedPet);
      })
      .catch((err) => {
        console.log(`error in update:${err}`);
        res.json(err);
      });
  },

  delete: (req, res) => {
    console.log(req.params.id);
    Pet.findByIdAndRemove(req.params.id)
      .then((removedPet) => {
        console.log(removedPet);
        res.json(removedPet);
      })
      .catch((err) => {
        console.log(`error in delete:${err}`);
        res.json(err);
      });
  }
};