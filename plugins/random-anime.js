import axios from 'axios';

const handler = async (m, {command, conn, usedPrefix}) => {
 const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/𝐂𝐀𝐆𝐀 - 𝐇𝐈𝐄𝐋𝐎/master/src/JSON/anime-${command}.json`)).data;
 const haha = await res[Math.floor(res.length * Math.random())];
 conn.sendFile(m.chat, haha, 'error.jpg', `_${command}_`, m);
};

handler.help = ['akira', 'akiyama', 'anna', 'asuna', 'ayuzawa', 'boruto', 'chiho', 'chitoge', 'deidara', 'erza', 'elaina', 'eba', 'emilia', 'hestia', 'hinata', 'inori', 'isuzu', 'itachi', 'itori', 'kaga', 'kagura', 'kaori', 'keneki', 'kotori', 'kurumi', 'madara', 'mikasa', 'miku', 'minato', 'naruto', 'nezuko', 'sagiri', 'sasuke', 'sakura', 'cosplay'];
handler.tags = ['random'];
handler.command = ['akira', 'akiyama', 'anna', 'asuna', 'ayuzawa', 'boruto', 'chiho', 'chitoge', 'deidara', 'erza', 'elaina', 'eba', 'emilia', 'hestia', 'hinata', 'inori', 'isuzu', 'itachi', 'itori', 'kaga', 'kagura', 'kaori', 'keneki', 'kotori', 'kurumi', 'madara', 'mikasa', 'miku', 'minato', 'naruto', 'nezuko', 'sagiri', 'sasuke', 'sakura', 'cosplay'];

export default handler;
