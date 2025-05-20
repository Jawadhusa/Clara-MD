import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['212637915359', 'Jawad', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '212637915359'
global.packname = 'الستيكر ذا بتاع جواد اللي يسرقو gay'
global.author = '© Jawad'
global.namebot = '​IsHaQ-MD'
global.wm = '© anu By Jawad'
global.stickpack = 'الستيكر ذا بتاع جواد اللي يسرقو gay'
global.stickauth = 'الستيكر ذا بتاع جواد اللي يسرقو gay'
global.fotonya = 'https://i.ibb.co/5xsLHYTH/15a5aef74a52c5f3a39e4af19900d188.gif'
// Link Sosmed
global.sig = 'https://www.instagram.com/xyroinee'
global.sgh = 'https://github.com/Xyroinee'
global.sgc = 'https://chat.whatsapp.com/'
// Donasi
global.psaweria = 'https://saweria.co/Zeltoria'
global.ptrakterr = 'https://trakteer.id/zeltoria'
global.povo = '0896-1075-0607'
// Info Wait
global.wait = 'Sedang Di Proses, Mohon Tunggu....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'apikeymu'
global.rose = 'apikeymu'
global.xyro = 'apikeymu'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/Apikey/
global.APIKeys = {
    "https://api.xyroinee.xyz": "apikeymu",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
})

