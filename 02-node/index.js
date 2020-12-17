/*
0 - obter um usúario
1 - obter o número de telefone de um usúario a partir de seu id
2 - obter o endereço do usúaria pelo Id
*/

function getUser(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      name: 'Thiago',
      dataNascimento: new Date()
    });
  }, 1000);

};

function getPhone(idUser, callback) {
  setTimeout(function () {
    return callback(null, {
      telefone: '99770-4283',
      dd: '21'
    })
  }, 2000)
};

function getAndres(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'projetada',
      numero: 85
    })
  }, 2000)
}

// function resolveUser(erro, user) {
//   console.log('user', user);
// };

getUser(function resolveUsuario(error, user) {
  // null || "" || 0 === false
  if (error) {
    console.error('DEU RUIM em usuário', error)
    return;
  }
  getPhone(user.id, function resolveTelephone(error1, phone) {
    if (error1) {
      console.error('DEU RUIM no telefone', error)
      return;
    }
    getAndres(user.id, function resolveAndress(error2, endereco) {
      if (error2) {
        console.error('DEU RUIM no endereço', error)
        return;
      }
      console.log(`
        nome: ${user.name},
        endereço: ${endereco.rua}, ${endereco.numero}
        telephone: (${phone.dd}) ${phone.telefone}
      `)
    })
  })

});
// const telephone = getPhone(user.id);


