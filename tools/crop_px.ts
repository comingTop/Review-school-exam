// Crop a pixel box from a page PNG. Usage: tsx tools/crop_px.ts <page.png> <left> <top> <w> <h> <out>
import sharp from 'sharp'
const [png,l,t,w,h,out] = process.argv.slice(2)
await sharp(png).extract({left:+l,top:+t,width:+w,height:+h}).jpeg({quality:92}).toFile(out)
console.log('wrote',out)
