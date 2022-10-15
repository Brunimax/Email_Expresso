const nodemailer = require('nodemailer');

const especificacoes = nodemailer.createTransport({
    host: abais.se.gov.br ,
    port: 587,
    secure: false,
    auth: {
        user: 'bruno.medrado@saude.se.gov.br',
        pass: 'Brunim@x3007',
    }
});

especificacoes.sendMail({
    from: 'Testando envio <bruno.medrado@saude.se.gov.br>',
    to: 'brunimax.bm@gmail.com',
    subject: 'Testando envio de email com o nodemailer',
    html: '<h1>Isso é apenas um teste!</h1> <p>Este email foi enviado para testar se o nodemailer funciona</p>',
    text: 'Isso é apenas um teste! Este email foi enviado para testar se o nodemailer funciona',
})
.then(() => console.log("funciona"))
.catch((err) => console.log('Deu erro:', err));