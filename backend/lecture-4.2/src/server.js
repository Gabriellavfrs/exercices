// digitar app é um atalho para preencher o require
const app = require('./app');
// aqui estou servindo meu app. Meu app estará disponível a partir da porta 3001
app.listen(3001, () => console.log('Servidor on'));
