var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function() {
        
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        
        
        
        
        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '81987009876',
            adress: {
                postalcode: '04042005',
                street: 'Avenida Doutor Altino Arantes',
                number: '1132',
                details: 'apto 142',
                district: 'Vila Clementino',
                city_uf: 'São Paulo/SP'
            },
            deliveryMethod: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}