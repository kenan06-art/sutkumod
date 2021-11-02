const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('🔴 FREK Bot Tüm Komutlar 🔴')
.setTimestamp()
.addField('🟢 Sunucuda AFK Kalabilmek için', '!afk [Neden AFK kaldığınız dilerseniz]')
.addField('🟢 Herhangi Bir Üyeyi Sunucudan Banlamak için', '!ban [kullanıcı]')
.addField('🟢 Sunucuda Bir Üyenin Banını Açmak İçin', '!unban [kullanıcı]')
.addField('🟢 Herhangi Bir Üyeyi Seste Susturmak için', '!vmute [kullanıcı] [süre] [sebep]')
.addField('🟢 Herhangi Bir Üyeyi Chatte Susturmak için', '!tmute [kullanıcı] [süre] [sebep]')
.addField('🟢 Herhangi Bir Üyeye Jail Atmak için', '!jail [kullanıcı] [süre] [sebep]')
.addField('🟢 Sunucuda Küfür Filtresini Aktif Etmek için', '!küfür aç-kapat')
.addField('🟢 Herhangi Bir Sohbet Kanalını Temizlemek için', '!temizle [adet]   !sil [adet]')
.addField('🟢 Sunucudaki Üyeleri Öğrenmek için', '!say')
.setFooter('© 2021 Olimpos Moderation', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['yardım', 'yardim'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};