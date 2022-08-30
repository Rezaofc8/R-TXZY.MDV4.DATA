let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/c82a12f46ea9eb3a6a8a8.png', m, { packname: "Sama Sama by", author: "Tio" })
}

handler.customPrefix = /^(@+6285706735450|@6283869803330|6285706735450|450)$/i
handler.command = new RegExp

module.exports = handler
