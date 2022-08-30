let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
verdi!!! afa
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6285706735450|@6283869803330/i
handler.command = new RegExp

module.exports = handler
