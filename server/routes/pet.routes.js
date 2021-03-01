const PetController = require('../controller/pet.controller');

module.exports = function(app){
  app.get('/api/pet', PetController.getAll);
  app.post('/api/pet', PetController.create);
  app.get('/api/pet/:id', PetController.getOne);
  app.put('/api/pet/:id', PetController.update);
  app.delete('/api/pet/:id', PetController.delete);
}