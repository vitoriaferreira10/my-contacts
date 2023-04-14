const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Se toda regra de negocio do nosso CRUD ficar dentro do controller
  // seguimos esse padrão de nomeclatura para os metodos
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Obter UM registro
  }

  store() {
    // Criar novo registro
  }

  upadate() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Sigleton -> somente uma instancia
module.exports = new ContactController();
