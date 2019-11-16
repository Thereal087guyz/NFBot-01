const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjQ0ODYxNDMyMzYxNjQ4MTMw.Xc6MKQ.O9TsecwE_708rSc2IrCEDHP7GHw';

bot.on('ready', () =>{
    console.log('This bot is online!')
})

bot.on('message' , msg=>{
    if(msg.content === "เราจะทำตามสัญญา"){
        msg.reply('ขอเวลาอีกไม่นาน');
    }
})

bot.on('message' , msg=>{
    if(msg.content === "I see a firefighter fighting fire"){
        msg.reply('I see a car mechanic changing tire');
    }
})

bot.on('message' , msg=>{
    if(msg.content === "//cmds"){
        msg.reply('//cmds = show all commands //rank = show rank //show NFB = shows NFB logo //show_all_Vocaloid_bots_avaliable //server info = shows server info');
    }
})

bot.on('message' , msg=>{
    if(msg.content === "ชอบเพลงป่ะ"){
        msg.reply('ไม่!ร ำคาญมาก');
    }
})

bot.on('message' , msg=>{
    if(msg.content === "//rank"){
        msg.reply('คนสร้างขี้เกียจโปรแกรมอะนะ');
    }
})

bot.on('message' , msg=>{
    if(msg.content === "//teach me English"){
        msg.reply('I ต้องใช้กับ am');
    }
})
bot.login(process.env.bot_token);
