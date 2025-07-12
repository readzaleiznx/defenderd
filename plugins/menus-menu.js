import fetch from 'node-fetch';

// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu
    // const pp = imagen7;

    // let vn = './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3'
    const img = './src/assets/images/menu/languages/es/menu.png';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `${tradutor.texto1[0]}

${tradutor.texto1[1]} ${taguser}

${tradutor.texto1[2]}

${tradutor.texto1[3]} ${level}
${tradutor.texto1[4]} ${exp}
${tradutor.texto1[5]} ${role}
${tradutor.texto1[6]} ${limit}
${tradutor.texto1[7]} ${money}
${tradutor.texto1[8]} ${joincount}
${tradutor.texto1[9]} ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
${readMore}

${tradutor.texto1[10]}
 
╭───── •  ☁ • ─────╮
├💛 _${usedPrefix}menuaudios_
├💛 _${usedPrefix}menuanimes_
├💛 _${usedPrefix}labiblia_
├💛 _${usedPrefix}lang_
├💛 _${usedPrefix}langgroup_
├💛 _${usedPrefix}glx_
╰───── •  ☁ • ─────╯

${tradutor.texto1[11]}

╭───── •  ☁ • ─────╮
├💛 _${usedPrefix}grupos_
├💛 _${usedPrefix}estado_
├💛 _${usedPrefix}infobot_
├💛 _${usedPrefix}speedtest_
├💛 _${usedPrefix}donar_
├💛 _${usedPrefix}owner_
├💛 _${usedPrefix}script_
├💛 _${usedPrefix}reporte _<txt>__
├💛 _${usedPrefix}join _<wagp_url>__
├💛 _${usedPrefix}fixmsgespera_
├💛 _bot_ (sin prefijo)
╰───── •  ☁ • ─────╯

${tradutor.texto1[13]}  

╭───── •  ☁ • ─────╮
├💛 _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
├💛 _${usedPrefix}fake *<txt1> <@tag> <txt2>*_
├💛 _${usedPrefix}ppt *<papel / tijera /piedra>*_
├💛 _${usedPrefix}prostituto *<nombre / @tag>*_
├💛 _${usedPrefix}prostituta *<nombre / @tag>*_
├💛 _${usedPrefix}gay2 *<nombre / @tag>*_
├💛 _${usedPrefix}lesbiana *<nombre / @tag>*_
├💛 _${usedPrefix}pajero *<nombre / @tag>*_
├💛 _${usedPrefix}pajera *<nombre / @tag>*_
├💛 _${usedPrefix}puto *<nombre / @tag>*_
├💛 _${usedPrefix}puta *<nombre / @tag>*_
├💛 _${usedPrefix}manco *<nombre / @tag>*_
├💛 _${usedPrefix}manca *<nombre / @tag>*_
├💛 _${usedPrefix}rata *<nombre / @tag>*_
├💛 _${usedPrefix}love *<nombre / @tag>*_
├💛 _${usedPrefix}doxear *<nombre / @tag>*_
├💛 _${usedPrefix}pregunta *<txt>*_
├💛 _${usedPrefix}suitpvp *<@tag>*_
├💛 _${usedPrefix}slot *<apuesta>*_
├💛 _${usedPrefix}ttt ${tradutor.texto1[32]}
├💛 _${usedPrefix}delttt_
├💛 _${usedPrefix}acertijo_
├💛 _${usedPrefix}simi *<txt>*_
├💛 _${usedPrefix}top *<txt>*_
├💛 _${usedPrefix}topgays_
├💛 _${usedPrefix}topotakus_
├💛 _${usedPrefix}formarpareja_
├💛 _${usedPrefix}verdad_
├💛 _${usedPrefix}reto_
├💛 _${usedPrefix}cancion_
├💛 _${usedPrefix}pista_
├💛 _${usedPrefix}akinator_
├💛 _${usedPrefix}wordfind_
├💛 _${usedPrefix}glx (RPG Mundo)_
╰───── •  ☁ • ─────╯

${tradutor.texto1[14]}
 
╭───── •  ☁ • ─────╮
├💛 _${usedPrefix}enable *welcome*_
├💛 _${usedPrefix}disable *welcome*_
├💛 _${usedPrefix}enable *modohorny*_
├💛 _${usedPrefix}disable *modohorny*_
├💛 _${usedPrefix}enable *antilink*_
├💛 _${usedPrefix}disable *antilink*_
├💛 _${usedPrefix}enable *antilink2*_
├💛 _${usedPrefix}disable *antilink2*_
├💛 _${usedPrefix}enable *detect*_
├💛 _${usedPrefix}disable *detect*_
├💛 _${usedPrefix}enable *audios*_
├💛 _${usedPrefix}disable *audios*_
├💛 _${usedPrefix}enable *autosticker*_
├💛 _${usedPrefix}disable *autosticker*_
├💛 _${usedPrefix}enable *antiviewonce*_
├💛 _${usedPrefix}disable *antiviewonce*_
├💛 _${usedPrefix}enable *antitoxic*_
├💛 _${usedPrefix}disable *antitoxic*_
├💛 _${usedPrefix}enable *antitraba*_
├💛 _${usedPrefix}disable *antitraba*_
├💛 _${usedPrefix}enable *antiarabes*_
├💛 _${usedPrefix}disable *antiarabes*_
├💛 _${usedPrefix}enable *modoadmin*_
├💛 _${usedPrefix}disable *modoadmin*_
├💛 _${usedPrefix}enable *antidelete*_
├💛 _${usedPrefix}disable *antidelete*_
╰───── •  ☁ • ─────╯

${tradutor.texto1[15]}

╭───── •  ☁ • ─────╮
├💛 _${usedPrefix}play *<txt>*_
├💛 _${usedPrefix}play2 *<txt>*_
├💛 _${usedPrefix}play.1 *<txt>*_
├💛 _${usedPrefix}play.2 *<txt>*_
├💛 _${usedPrefix}playdoc *<txt>*_
├💛 _${usedPrefix}playdoc2 *<txt>*_
├💛 _${usedPrefix}playlist *<txt>*_
├💛 _${usedPrefix}ytshort *<url>*_
├💛 _${usedPrefix}ytmp3 *<url>*_
├💛 _${usedPrefix}ytmp3doc *<url>*_
├💛 _${usedPrefix}ytmp4 *<url>*_
├💛 _${usedPrefix}ytmp4doc *<url>*_
├💛 _${usedPrefix}videodoc *<url>*_
├💛 _${usedPrefix}spotify *<txt>*_
├💛 _${usedPrefix}facebook *<url>*_
├💛 _${usedPrefix}instagram *<url>*_
├💛 _${usedPrefix}igstory *<usr>*_
├💛 _${usedPrefix}tiktok *<url>*_
├💛 _${usedPrefix}tiktokimg *<url>*_
├💛 _${usedPrefix}pptiktok *<usr>*_
├💛 _${usedPrefix}mediafire *<url>*_ 
├💛 _${usedPrefix}pinterest *<txt>*_
├💛 _${usedPrefix}gitclone *<url>*_
├💛 _${usedPrefix}gdrive *<url>*_
├💛 _${usedPrefix}twitter *<url>*_
├💛 _${usedPrefix}ringtone *<txt>*_
├💛 _${usedPrefix}soundcloud *<txt>*_
├💛 _${usedPrefix}stickerpack *<url>*_
├💛 _${usedPrefix}wallpaper *<txt>*_ 
├💛 _${usedPrefix}dapk2 *<url>*_
├💛 _${usedPrefix}xnxxdl *<url>*_ 
├💛 _${usedPrefix}xvideosdl *<url>*_ 
╰───── •  ☁ • ─────╯

${tradutor.texto1[16]}

╭───── •  ☁ • ─────╮
├💛 _${usedPrefix}githubsearch *<txt>*_
├💛 _${usedPrefix}pelisplus *<txt>*_
├💛 _${usedPrefix}modapk *<txt>*_
├💛 _${usedPrefix}stickersearch *<txt>*_
├💛 _${usedPrefix}stickersearch2 *<txt>*_
├💛 _${usedPrefix}xnxxsearch *<txt>*_
├💛 _${usedPrefix}animeinfo *<txt>*_
├💛 _${usedPrefix}google *<txt>*_
├💛 _${usedPrefix}letra *<txt>*_
├💛 _${usedPrefix}npmjs *<txt>*_
├💛 _${usedPrefix}wikipedia *<txt>*_
├💛 _${usedPrefix}ytsearch *<txt>*_
├💛 _${usedPrefix}playstore *<txt>*_
╰───── •  ☁ • ─────╯

 ${tradutor.texto1[17]}
 
╭───── •  ☁ • ─────╮
├💛 _${usedPrefix}add *num>*_
├💛 _${usedPrefix}kick *<@tag>*_
├💛 _${usedPrefix}kick2 *<@tag>*_
├💛 _${usedPrefix}listanum *<txt>*_
├💛 _${usedPrefix}kicknum *<txt>*_
├💛 _${usedPrefix}grupo *<abrir/cerrar>*_
├💛 _${usedPrefix}grouptime ${tradutor.texto1[30]}
├💛 _${usedPrefix}promote *<@tag>*_
├💛 _${usedPrefix}demote *<@tag>*_
├💛 _${usedPrefix}infogroup_
├💛 _${usedPrefix}resetlink_
├💛 _${usedPrefix}link_
├💛 _${usedPrefix}setname *<txt>*_
├💛 _${usedPrefix}setdesc *<txt>*_
├💛 _${usedPrefix}invocar *<txt>*_
├💛 _${usedPrefix}setwelcome *<txt>*_
├💛 _${usedPrefix}setbye *<txt>*_
├💛 _${usedPrefix}hidetag *<txt>*_
├💛 _${usedPrefix}hidetag *<audio>*_
├💛 _${usedPrefix}hidetag *<video>*_
├💛 _${usedPrefix}hidetag *<img>*_
├💛 _${usedPrefix}warn *<@tag>*_
├💛 _${usedPrefix}unwarn *<@tag>*_
├💛 _${usedPrefix}listwarn_
├💛 _${usedPrefix}fantasmas_
├💛 _${usedPrefix}destraba_
├💛 _${usedPrefix}setpp *<img>*_
├💛 _admins *<txt>*_ ${tradutor.texto1[31]}
╰───── •  ☁ • ─────╯

${tradutor.texto1[18]}
 
╭───── •  ☁ • ─────╮
├💛 _${usedPrefix}toanime *<img>*_
├💛 _${usedPrefix}togifaud *<video>*_
├💛 _${usedPrefix}toimg *<sticker>*_
├💛 _${usedPrefix}tomp3 *<video>*_
├💛 _${usedPrefix}tomp3 *<nota de voz>*_
├💛 _${usedPrefix}toptt *<video / audio>*_
├💛 _${usedPrefix}tovideo *<sticker>*_
├💛 _${usedPrefix}tourl *<video / img / audio>*_
├💛 _${usedPrefix}tts *<idioma> <txt>*_
├💛 _${usedPrefix}tts *<efecto> <txt>*_
╰───── •  ☁ • ─────╯

${tradutor.texto1[19]}

╭───── •  ☁ • ─────╮
├💛 _${usedPrefix}logos *<efecto> <txt>*_
├💛 _${usedPrefix}logochristmas *<txt>*_
├💛 _${usedPrefix}logocorazon *<txt>*_
├💛 _${usedPrefix}ytcomment *<txt>*_
├💛 _${usedPrefix}hornycard *<@tag>*_
├💛 _${usedPrefix}simpcard *<@tag>*_
├💛 _${usedPrefix}lolice *<@tag>*_
├💛 _${usedPrefix}itssostupid_
├💛 _${usedPrefix}pixelar_
├💛 _${usedPrefix}blur_
╰───── •  ☁ • ─────╯

${tradutor.texto1[20]}
 
╭───── •  ☁ • ─────╮
├💛 _${usedPrefix}piropo_
├💛 _${usedPrefix}consejo_
├💛 _${usedPrefix}fraseromantica_
├💛 _${usedPrefix}historiaromantica_
╰───── •  ☁ • ─────╯

${tradutor.texto1[21]}
 
╭───── •  ☁ • ─────╮
├💛 _${usedPrefix}kpop *<blackpink / exo>*_
├💛 _${usedPrefix}cristianoronaldo_
├💛 _${usedPrefix}messi_
├💛 _${usedPrefix}cat_
├💛 _${usedPrefix}dog_
├💛 _${usedPrefix}meme_
├💛 _${usedPrefix}itzy_
├💛 _${usedPrefix}blackpink_
├💛 _${usedPrefix}navidad_
├💛 _${usedPrefix}wpmontaña_
├💛 _${usedPrefix}pubg_
├💛 _${usedPrefix}wpgaming_
├💛 _${usedPrefix}wpaesthetic_
├💛 _${usedPrefix}wpaesthetic2_
├💛 _${usedPrefix}wprandom_
├💛 _${usedPrefix}wallhp_
├💛 _${usedPrefix}wpvehiculo_
├💛 _${usedPrefix}wpmoto_
├💛 _${usedPrefix}coffee_
├💛 _${usedPrefix}pentol_
├💛 _${usedPrefix}caricatura_
├💛 _${usedPrefix}ciberespacio_
├💛 _${usedPrefix}technology_
├💛 _${usedPrefix}doraemon_
├💛 _${usedPrefix}hacker_
├💛 _${usedPrefix}planeta_
├💛 _${usedPrefix}randomprofile_
╰───── •  ☁ • ─────╯

${tradutor.texto1[22]}
 
╭───── •  ☁ • ─────╮
├💛 _${usedPrefix}bass_
├💛 _${usedPrefix}blown_
├💛 _${usedPrefix}deep_
├💛 _${usedPrefix}earrape_
├💛 _${usedPrefix}fast_
├💛 _${usedPrefix}fat_
├💛 _${usedPrefix}nightcore_
├💛 _${usedPrefix}reverse_
├💛 _${usedPrefix}robot_
├💛 _${usedPrefix}slow_
├💛 _${usedPrefix}smooth_
├💛 _${usedPrefix}tupai_
╰───── •  ☁ • ─────╯

${tradutor.texto1[25]}

╭───── •  ☁ • ─────╮
├💛 _${usedPrefix}inspect *<wagc_url>*_
├💛 _${usedPrefix}chatgpt *<txt>*_
├💛 _${usedPrefix}exploit *<txt>*_
├💛 _${usedPrefix}dall-e *<txt>*_
├💛 _${usedPrefix}spamwa *num|txt|cant>*_
├💛 _${usedPrefix}tamaño *<cant> <img / video>*_
├💛 _${usedPrefix}readviewonce *<img / video>*_
├💛 _${usedPrefix}clima *<país> <ciudad>*_
├💛 _${usedPrefix}encuesta *<txt1|txt2>*_
├💛 _${usedPrefix}afk *<motivo>*_
├💛 _${usedPrefix}ocr *<responde a img>*_
├💛 _${usedPrefix}hd *<responde a img>*_
├💛 _${usedPrefix}acortar *<url>*_
├💛 _${usedPrefix}calc *<operacion>*_
├💛 _${usedPrefix}del *<msj>*_
├💛 _${usedPrefix}whatmusic *<audio>*_
├💛 _${usedPrefix}readqr *<img>*_
├💛 _${usedPrefix}qrcode *<txt>*_
├💛 _${usedPrefix}readmore *<txt1|txt2>*_
├💛 _${usedPrefix}styletext *<txt>*_
├💛 _${usedPrefix}traducir *<txt>*_
├💛 _${usedPrefix}nowa *num>*_
├💛 _${usedPrefix}covid *<pais>*_
├💛 _${usedPrefix}horario_
├💛 _${usedPrefix}dropmail_
├💛 _${usedPrefix}igstalk *<usr>*_
├💛 _${usedPrefix}tiktokstalk *<usr>*_
├💛 _${usedPrefix}img *<txt>*_
╰───── •  ☁ • ─────╯

${tradutor.texto1[26]}

╭───── •  ☁ • ─────╮
├💛 _${usedPrefix}adventure_
├💛 _${usedPrefix}cazar_
├💛 _${usedPrefix}cofre_
├💛 _${usedPrefix}balance_
├💛 _${usedPrefix}claim_
├💛 _${usedPrefix}heal_
├💛 _${usedPrefix}lb_
├💛 _${usedPrefix}levelup_
├💛 _${usedPrefix}myns_
├💛 _${usedPrefix}perfil_
├💛 _${usedPrefix}work_
├💛 _${usedPrefix}minar_
├💛 _${usedPrefix}minar2_
├💛 _${usedPrefix}buy_
├💛 _${usedPrefix}buyall_
├💛 _${usedPrefix}verificar_
├💛 _${usedPrefix}robar *<cant> <@tag>*_
├💛 _${usedPrefix}crime
├💛 _${usedPrefix}transfer *<tipo> <cant> <@tag>*_
├💛 _${usedPrefix}unreg *<sn>*_
╰───── •  ☁ • ─────╯

${tradutor.texto1[27]}
 
╭───── •  ☁ • ─────╮
├💛 _${usedPrefix}sticker *<responder a img o video>*_
├💛 _${usedPrefix}sticker *<url>*_
├💛 _${usedPrefix}sticker2 *<responder a img o video>*_
├💛 _${usedPrefix}sticker2 *<url>*_
├💛 _${usedPrefix}s *<responder a img o video>*_
├💛 _${usedPrefix}s *<url>*_
├💛 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
├💛 _${usedPrefix}scircle *<img>*_
├💛 _${usedPrefix}sremovebg *<img>*_
├💛 _${usedPrefix}semoji *<tipo> <emoji>*_
├💛 _${usedPrefix}qc *<txt>*_
├💛 _${usedPrefix}attp *<txt>*_
├💛 _${usedPrefix}attp2 *<txt>*_
├💛 _${usedPrefix}attp3 *<txt>*_
├💛 _${usedPrefix}ttp *<txt>*_
├💛 _${usedPrefix}ttp2 *<txt>*_
├💛 _${usedPrefix}ttp3 *<txt>*_
├💛 _${usedPrefix}ttp4 *<txt>*_
├💛 _${usedPrefix}ttp5 *<txt>*_
├💛 _${usedPrefix}pat *<@tag>*_
├💛 _${usedPrefix}slap *<@tag>*_
├💛 _${usedPrefix}kiss *<@tag>*_
├💛 _${usedPrefix}dado_
├💛 _${usedPrefix}wm *<packname> <autor>*_
├💛 _${usedPrefix}stickermarker *<efecto> <img>*_
├💛 _${usedPrefix}stickerfilter *<efecto> <img>*_
╰───── •  ☁ • ─────╯

${tradutor.texto1[28]}

╭───── •  ☁ • ─────╮ 
├💛 _> *<funcion>*_
├💛 _=> *<funcion>*_
├💛 _$ *<funcion>*_
├💛 _${usedPrefix}dsowner_
├💛 _${usedPrefix}setprefix *<prefijo>*_
├💛 _${usedPrefix}resetprefix_
├💛 _${usedPrefix}autoadmin_
├💛 _${usedPrefix}grouplist_
├💛 _${usedPrefix}chetar_
├💛 _${usedPrefix}leavegc_
├💛 _${usedPrefix}cajafuerte_
├💛 _${usedPrefix}blocklist_
├💛 _${usedPrefix}addowner *<@tag / num>*_
├💛 _${usedPrefix}delowner *<@tag / num>*_
├💛 _${usedPrefix}block *<@tag / num>*_
├💛 _${usedPrefix}unblock *<@tag / num>*_
├💛 _${usedPrefix}enable *restrict*_
├💛 _${usedPrefix}disable *restrict*_
├💛 _${usedPrefix}enable *autoread*_
├💛 _${usedPrefix}disable *autoread*_
├💛 _${usedPrefix}enable *public*_
├💛 _${usedPrefix}disable *public*_
├💛 _${usedPrefix}enable *pconly*_
├💛 _${usedPrefix}disable *pconly*_
├💛 _${usedPrefix}enable *gconly*_
├💛 _${usedPrefix}disable *gconly*_
├💛 _${usedPrefix}enable *anticall*_
├💛 _${usedPrefix}disable *anticall*_
├💛 _${usedPrefix}enable *antiprivado*_
├💛 _${usedPrefix}disable *antiprivado*_
├💛 _${usedPrefix}enable *modejadibot*_
├💛 _${usedPrefix}disable *modejadibot*_
├💛 _${usedPrefix}enable *audios_bot*_
├💛 _${usedPrefix}disable *audios_bot*_
├💛 _${usedPrefix}enable *antispam*_
├💛 _${usedPrefix}disable *antispam*_
├💛 _${usedPrefix}msg *<txt>*_
├💛 _${usedPrefix}banchat_
├💛 _${usedPrefix}unbanchat_
├💛 _${usedPrefix}resetuser *<@tag>*_
├💛 _${usedPrefix}banuser *<@tag>*_
├💛 _${usedPrefix}unbanuser *<@tag>*_
├💛 _${usedPrefix}dardiamantes *<@tag> <cant>*_
├💛 _${usedPrefix}añadirxp *<@tag> <cant>*_
├💛 _${usedPrefix}banuser *<@tag>*_
├💛 _${usedPrefix}bc *<txt>*_
├💛 _${usedPrefix}bcchats *<txt>*_
├💛 _${usedPrefix}bcgc *<txt>*_
├💛 _${usedPrefix}bcgc2 *<aud>*_
├💛 _${usedPrefix}bcgc2 *<vid>*_
├💛 _${usedPrefix}bcgc2 *<img>*_
├💛 _${usedPrefix}bcbot *<txt>*_
├💛 _${usedPrefix}cleartpm_
├💛 _${usedPrefix}restart_
├💛 _${usedPrefix}update_
├💛 _${usedPrefix}banlist_
├💛 _${usedPrefix}addprem *<@tag> <time>*_
├💛 _${usedPrefix}addprem2 *<@tag> <time>*_
├💛 _${usedPrefix}addprem3 *<@tag> <time>*_
├💛 _${usedPrefix}addprem4 *<@tag> <time>*_
├💛 _${usedPrefix}delprem *<@tag>*_
├💛 _${usedPrefix}listcmd_
├💛 _${usedPrefix}setppbot *<reply to img>*_
├💛 _${usedPrefix}addcmd *<txt>*_
├💛 _${usedPrefix}delcmd_
├💛 _${usedPrefix}saveimage_
├💛 _${usedPrefix}viewimage_
╰───── •  ☁ • ─────╯`

    let pp
    // Nuevas Imágenes del menu para otros idiomas
    if (idioma == 'es') {
      pp = global.imagen1
    } else if (idioma == 'pt-br') {
      pp = global.imagen2
    } else if (idioma == 'fr') {
      pp = global.imagen3
    }else if (idioma == 'en') {
      pp = global.imagen4
    } else if (idioma == 'ru') {
      pp = global.imagen5
    } else {
      pp = global.imagen1 // Imagen por defecto (Español/Spanish)
    }



    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: m });
    } else {
      //await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { " contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak });
    }
  } catch {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu
    
    conn.reply(m.chat, translator.texto1[29], m);
  }
};
handler.command = /^(menu|help|comandos|commands|cmd|cmds)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }
