

const fetch = (text) => import('node-fetch').then(({ default: fetch }) => fetch(text));

/*
let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
                        mimetype: 'video/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: ` ⿻ Title : ${titleYt}\n ⿻ File Size : ${fileSizeInMegabytes} MB`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: titleYt,
                                body: citel.pushName,
                                thumbnail: log0,
                                renderLargerThumbnail: true,
                                mediaType: 2,
                                mediaUrl: 'https://github.com/SamPandey001/Secktor-Md',
                                sourceUrl: 'https://github.com/SamPandey001/Secktor-Md'
                            }
                        }
                    }
                   Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
               */

/*

cmd({
  pattern: "scr",
  desc: "website screenshots",
  category: "search",
  use: '<titre>',
  react: "🌐",
  filename: __filename
}, async (Void, citel, text, { isCreator }) => {
   if (!text) {
      return citel.reply(`Invalid input⚠️\nPlease use:\n${prefix}scr <url> \nor\n${prefix}scr -g <text>.`);
    }

  let url;
  if (!text.includes('http') && !text.includes('https')) {
    if (text.includes(' ')) {
      citel.reply(`Invalid text input with spaces⚠️\nPlease use:\n${prefix}scr  YourText`);
      return;
    }
    url = `https://www.google.com/search?q=${text}&tbm=isch`;
  } else {
    url = text;
    if (!url.match(/^https?:\/\/.+$/)) {
      url = `https://${url}`;
    }
  }

  const apiURL = `https://image.thum.io/get/width/1920/crop/400/fullpage/noanimate/${url}`;

  try {
    const res = await fetch(apiURL);
    if (!res.ok) {
      citel.reply(`API not responding. Please try again later.`);
      return;
    }

    const msg = `𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓢𝓒𝓡𝓔𝓔𝓝𝓢𝓗𝓞𝓣𝓢 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡\n_Here is the screenshot._`;

    await Void.sendMessage(citel.chat, {
      image: {
        url: apiURL,
      },
      caption: msg,
    }, {
      quoted: citel,
    });
  } catch (error) {
    console.error('[ERROR]', error);
    citel.reply('An error occurred while processing the command.');
  }
});
*/
///////////===========================================================================================================================================================================================================================================================================================
/*
import fetch from 'node-fetch';
let data;
let buff;
let mimeType;
let fileName;
let apiUrl;
let enviando = false;
const handler = async (m, { command, usedPrefix, conn, text }) => {
  if (!text) throw `https://github.com/jayden-official _*< BUMBLEBEE - PLAY v2 />*_\n\n*[ ❗ ] The title of the YouTube video is required.*\n\n*[ 💡 ] Example:* _${usedPrefix + command} Good Feeling - Flo Rida_\n\n*[ 💡 ] Example 2::* _${usedPrefix + command} https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvS_OkDk7p_`;
if (enviando) return;
    enviando = true
  try {
    const apiUrls = [
      `https://api.cafirexos.com/api/ytplay?text=${text}`,
      `https://api-brunosobrino.onrender.com/api/ytplay?text=${text}`      
    ];

    for (const url of apiUrls) {
      try {
        const res = await fetch(url);
        data = await res.json();
        if (data.resultado && data.resultado.url) {
          break;
        }
      } catch {}
    }

    if (!data.resultado || !data.resultado.url) {
      enviando = false;
      throw `https://github.com/jayden-official _*< SUPER - PLAY v2 />*_\n\n*[ ❗ ] An error occurred. Please try again later.*`;
    } else {
      try {      
        if (command === 'song') { // play.1 con CFROS API v1 ytmp3
              apiUrl = `https://api.cafirexos.com/api/v1/ytmp3?url=${data.resultado.url}`;
              mimeType = 'audio/mpeg';
              fileName = 'error.mp3';
              buff = await conn.getFile(apiUrl);          
            } else if (command === 'playvid') { // play.2 con CFROS API v1 ytmp4
              apiUrl = `https://api.cafirexos.com/api/v1/ytmp4?url=${data.resultado.url}`;
              mimeType = 'video/mp4';
              fileName = 'error.mp4';
              buff = await conn.getFile(apiUrl);        
        }
      } catch {        
          try {
            if (command === 'song') { // play.1 con CFROS API v2 ytmp3
              apiUrl = `https://api.cafirexos.com/api/v2/ytmp3?url=${data.resultado.url}`;
              mimeType = 'audio/mpeg';
              fileName = 'error.mp3';
              buff = await conn.getFile(apiUrl);              
            } else if (command === 'playvid') { // play.2 con CFROS API v2 ytmp4
              apiUrl = `https://api.cafirexos.com/api/v2/ytmp4?url=${data.resultado.url}`;
              mimeType = 'video/mp4';
              fileName = 'error.mp4';
              buff = await conn.getFile(apiUrl);              
            }
          } catch {
            enviando = false;
            throw `https://github.com/jayden-official _*< SUPPER - PLAY v2 />*_\n\n*[ ❗ ] An error occurred. Please try again later.*`;
          }
       }
    }
    let ikratos = `${data.resultado.title}`
    const dataMessage = `https://github.com/jayden-official _*< SUPPER - PLAY v2 />*_\n\n▢ *🎶Title:* ${data.resultado.title}\n\n▢ *🎧Published:* ${data.resultado.publicDate}\n\n▢ *⏯️Channel:* ${data.resultado.channel}\n\n▢ *🔗Video URL:* ${data.resultado.url}`;
    await conn.sendMessage(m.chat, { text: dataMessage }, { quoted: m });

    if (buff) {
      await conn.sendMessage(m.chat, {[mimeType.startsWith('audio') ? 'document' : 'video']: buff.data, mimetype: mimeType, fileName: ikratos}, {quoted: m});
conn.sendMessage(m.chat, {[mimeType.startsWith('audio') ? 'audio' : 'document']: buff.data, mimetype: mimeType, fileName: ikratos}, {quoted: m});
      enviando = false;
    } else {
      enviando = false;
      throw `https://github.com/jayden-official _*< SUPER - PLAY v2 />*_\n\n*[ ❗ ] An error occurred. Please try again later.*`;
    }
  } catch (error) {
    enviando = false;
    throw `https://github.com/jayden-official _*< SUPER - PLAY v2 />*_\n\n*[ ❗ ] An error occurred. Please try again later.*`;
  }
};
handler.command = ['song', 'playvid'];
export default handler;

*/

///////////////////////////////////////off

/*import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
const handler = async (m, {command, usedPrefix, conn, text}) => {
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙾 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`;
  try {
    if (command == 'play.1') {
      conn.reply(m.chat, `*_⏳Sᴇ ᴇsᴛᴀ ᴘʀᴏᴄᴇsᴀɴᴅᴏ Sᴜ ᴀᴜᴅɪᴏ...⏳_*`, m);
      try {
        const mediaa = await ytPlay(text);
        const audiocore = mediaa.result2?.[0]?.audio || mediaa.result2?.[1]?.audio || mediaa.result2?.[2]?.audio || null;
        const aa = await conn.sendMessage(m.chat, {audio: {url: audiocore}, fileName: `error.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
        if (!aa) {
        throw new Error('*[❗] El primero metodo fallo, intentando otro...*');
       }        
      } catch {
        const res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
        const json = await res.json();
        const aa_1 = await conn.sendMessage(m.chat, {audio: {url: json.result.audio}, fileName: `error.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
        if (!aa_1) aa_1 = await conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, {mimetype: 'audio/mpeg'});
      }
    }
    if (command == 'play.2') {
      conn.reply(m.chat, `*_⏳Sᴇ ᴇsᴛᴀ ᴘʀᴏᴄᴇsᴀɴᴅᴏ Sᴜ ᴠɪᴅᴇᴏ...⏳_*`, m);
      try {
        const mediaa = await ytPlayVid(text);
        const aa_2 = await conn.sendMessage(m.chat, {video: {url: mediaa.result}, fileName: `error.mp4`, caption: `_𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭_`, thumbnail: mediaa.thumb, mimetype: 'video/mp4'}, {quoted: m});
        if (!aa_2) {
        throw new Error('*[❗] El primero metodo fallo, intentando otro...*');
       }
      } catch {
        const res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
        const json = await res.json();
        await conn.sendFile(m.chat, json.result.video, 'error.mp4', `_𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭_`, m);
      }
    }
  } catch {
    throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*';
  }
};
handler.help = ['play.1', 'play.2'].map((v) => v + ' <texto>');
handler.tags = ['downloader'];
handler.command = ['play.1', 'play.2'];
export default handler;

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
          const {contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {audio: item.url, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, result2: resultFix, thumb});
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
          const {qualityLabel, contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {video: item.url, quality: qualityLabel, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getAudio = await ytMp3(random);
      resolve(getAudio);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getVideo = await ytMp4(random);
      resolve(getVideo);
    }).catch(reject);
  });
}*/