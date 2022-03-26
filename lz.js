const get = require('./InstagramWebApi/lzdomina');
const moment = require('moment-timezone')
const time = moment().format('DD/MM HH:mm:ss')
const { color } = require('./Lz1K/color')
const { performance } = require('perf_hooks')
const { getBuffer } = require('./Lz1K/¿')
const fs = require("fs")
const lz = new get.Client();

//========== [ //Conexão\\ ] ==========\\

lz.on('connected', () => {
console.log('\x1b[1;34m~\x1b[1;37m>>', '[\x1b[1;33mINF\x1b[1;37m]', time, color(`Conectado na conta`), color(`${lz.user.username}`))
});
 
lz.on('pendingRequest', lz => {
lz.approve();
});

lz.on('messageCreate', async function(connect) {
connect.markSeen();
var text = connect.content;

//========== [ //MENUS\\ ] ==========\\

//Lz Mods Rumo Aos 1K De Inscritos\\
//https://youtube.com/lzmodsofc\\

if (RegExp('/lz',"i").exec(text)){
connect.chat.startTyping(5000, true) 
menu = `
┏─━─❮ 👨🏼‍💻 👨🏼‍💻 ❯─━─┓
┃
┃「Teste Video LZ MODS」
┃
┗❮ ꧁✟ LZ DOMINA ✟꧂ ❯┛`
 return await connect.reply(menu)
 }
});

//Deixa Os Creditos Se For Postar Seu Kibador Safado\\
//https://youtube.com/lzmodsofc\\



//a Conta Onde o Bot Ira Se Conectar\\

lz.login('nome-de-usuario-da-conta', 'senha-da-conta');

//exemplo:
//lz.login('cupreto', '50028922');