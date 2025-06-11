//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FCTHhGZ2FxTS9Cbk05eWxlaEt4Ny81Wi9NMXdIdnBpT3VPdHFvcDJrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjl4ejhMM2pBNFExSG43YnMvWEw2MlNhQTRBUmVwNGJKazJXUEg5LytSQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTDZhZktlR0xGbGJRakxnQzJIUlQzMW1uQjlOcHpNUWRGZW9Fc2RESVYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtYjhGbi9jZUtLYlo5OERhekxjclZzSlJlV0lyM2ZRcXpJeXNUeWxkcVdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFBSkU3SGZvMUZuazQvRG5xTm1VaVFQa1hlTFJGZ1F3cnNVUVZrb09za2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhzbzZtajg2QUFuQ0tiRjloQXYyMmlZS1FBZ1lJTTJzRjRPVlBwd01Rd2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV09sWFJSR2c2QWVhL0FGK0NPRmZJSHNqWnBlakw2dlJNdE9BZHgzTS9sST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjR6VjZKaXM0amdEK2ttZTllUnp0WG16UmhPNzdYRGRHdk9rNFBLMTBSQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlOeEFGb3M3dTlSajdoN2ltV2RDdDdPNlcwYVZYSHRDNEtXVG9IV1ViRHBFL3NDVnVoYVoyREZnSmhQdWErSDRUZDRPMG94dFZxSjFpMTlYMXY0a0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6ImM3eEpEdEhVS1lwL0xLR2s3RXk1YVpyTkFpTnBVZGxveHRWMnpHTm8xSjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NTQ2MjU5NjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTExRkY0REU0ODU5RTk4NEFEQTY3OEY4MjIwNzFCQzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0OTY1OTk1NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSmhWbkVGT1hTUC1fNjNkSnd4WFEzZyIsInBob25lSWQiOiIwZDE0Mjc4Yi0wNThhLTQ0NWEtOTgzNS1iMjM0NWE3YWVkZjUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUsvS0RIdGRPYklaSzlvN1NYT2JtUnZ0U2owPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNHS2RIWTZpc1dPV3VGUmk5WG05dHNEVWZrVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3SFZFR1ZUNCIsIm1lIjp7ImlkIjoiOTQ3NTQ2MjU5Njk6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwk4SCIMqZyp/htIDhtIThtIsg4bSAyp/qnLDhtIAg4bSP6pyw6pywyarhtITJquG0gMqfIOG0oeG0gCDKmeG0j+G0myDgv5AiLCJsaWQiOiIxNDI5NjI4NTE4NTIyODk6OEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xUWmxlb0VFS0RpcHNJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im9zNlBSR0xDanI4NkdiRDhzMisyQ1ZGZ2Z1U3BjVVZrMUp4NWx2WmUzVWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJCZVd1c3FNSGpCZUNPUXA3UEI2USs5NjJLUmd0U0NyWFJ3YlY2YmU3NnpRekhhUFU5aW5XMlZwWVVjeDQ0RVY3ZlRabzBKUmZqUDFnWDFyTnBROUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5Ym04dC83RXpiZGFOZUtTUExrMXpZaHRTQ0JwTkxMSnpFT1UxSml2bzJBMnRyMlQxNm5GcFAwV3dwUCt3eEFEVG0vb1N1NEY4V0NCMDNHNkhUcWZCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU0NjI1OTY5OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUxPajBSaXdvNi9PaG13L0xOdnRnbFJZSDdrcVhGRlpOU2NlWmIyWHQxSiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NjU5OTQ5LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUQydCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94754625969",
  PASSWORD: 
    process.env.PASSWORD || "alfa2002?",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94719036654"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
