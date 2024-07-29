const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_49_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDg4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQxLFxuICAgICAgICA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNixcbiAgICAgICAgOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg1LFxuICAgICAgICA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk4LFxuICAgICAgICAzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDkyLFxuICAgICAgICAyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA4NixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMixcbiAgICAgICAgMTU3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDcxLFxuICAgICAgICA1MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAxLFxuICAgICAgICA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZERpZ0F2Q2RqdnBsM0R1cmE0eTdXUnphZVU0SmVENGU2ZTdUWC9BSVB0ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiamtQSXZReDlTZnVlWEh1dFMwSE12UVwiLFxuICBcInBob25lSWRcIjogXCIxNWY5Nzg2MS1mMDdlLTRmY2MtYWIwMC0zNjgyMWE3ZjM0OWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgMTY2LFxuICAgICAgMjUsXG4gICAgICAxNzEsXG4gICAgICAzLFxuICAgICAgMjMwLFxuICAgICAgMjUyLFxuICAgICAgMTE0LFxuICAgICAgNzksXG4gICAgICAyNSxcbiAgICAgIDEyMSxcbiAgICAgIDQ5LFxuICAgICAgMTAzLFxuICAgICAgMTYzLFxuICAgICAgMjI2LFxuICAgICAgMjQ2LFxuICAgICAgNDMsXG4gICAgICA5NSxcbiAgICAgIDE2NixcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDE4MCxcbiAgICAgIDE5MCxcbiAgICAgIDEwMixcbiAgICAgIDIzOSxcbiAgICAgIDIzMyxcbiAgICAgIDExMixcbiAgICAgIDQ0LFxuICAgICAgMTQ1LFxuICAgICAgNDcsXG4gICAgICA3MixcbiAgICAgIDg3LFxuICAgICAgMTQsXG4gICAgICAxNTYsXG4gICAgICA3NyxcbiAgICAgIDkwLFxuICAgICAgMTQ0LFxuICAgICAgMTE4LFxuICAgICAgMjE2LFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNbWVsY2tERUozU3dMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkxBcmdxdW9JMEpLL2JDRWNEenhrbGhyNFI0U1drYklJbGpZVW0yaW0vSEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVHRlTjlnaHdzcVBnbWVLQyt4K09GZFpmQW1tM3BXL1JxNi9QVFhRSWxINktOT0w3VUFpNFNZeWNHS2t5blNScFQzbmFLcUY3dElmaDRBdTY5NTlGQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSXE5dzlhM1lpMThSclN0R1hvRzNVWEZhaWtIT0JmejQrTWlIZkZDMzJwSDJYMER5NVMyTkphdlpFbjAzaW1rUVp6eEdva3poakVnbWQ4c0IvMXc0Z1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODg2ODE1NTA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc3NjUzMzUzMDI5NjMzOjFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODg2ODE1NTA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3MjM3NTBcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Miracle Multimedia Bot ᴅ",
  ownername:process.env.OWNER_NAME|| "Andile",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
