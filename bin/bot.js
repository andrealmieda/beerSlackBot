var Bot = require('slackbots');
const exec = require('child_process').exec;

if( process.argv.length > 2 ){
  botKey = process.argv[2]
}

// create a bot
var settings = {
    token: botKey,
    name: 'Beer Bot'
};
var bot = new Bot(settings);

bot.on('start',function(){
  console.log('Bot is UP!');
  bot.postMessageToChannel('random', 'Hello channel!');
});

bot.on('close',function(){
  console.log('Bot is now DOWN!');
})

bot.on('error',function(err){
  console.error(err);
})

bot.on('message', function(data) {
  if (data.type === 'message' && data.username == 'sadshippy'){
    exec('mplayer -ao alsa:device=hw=1.0 ../sound/sirenwail.wav', (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    });
    console.log('Mensagem recebida ->'+data.text);
  }
});
