/** Convert alternatives of given question ids to type:'image' pointing at per-letter images,
 * and drop the question-level images[] array for those (the images live in the alternatives).
 * Usage: tsx tools/apply_alt_images.ts <file.tsx> <spec.json> [--write]
 * spec: { "<id>": "<app image path prefix, e.g. /enem/2010/images/enem_2010_d1_q80>" }  (adds _A.jpg etc)
 */
import { readFileSync, writeFileSync } from 'node:fs'
const [file, specPath] = process.argv.slice(2)
const write = process.argv.includes('--write')
const spec: Record<string,string> = JSON.parse(readFileSync(specPath,'utf8'))
const lines = readFileSync(file,'utf8').split('\n')
const out: string[] = []
let curId: string|null = null, inAlts = false, altIndent=''
const LET=['A','B','C','D','E']
let changed=0
for (let i=0;i<lines.length;i++){
  const idM = lines[i].match(/^\s*id:\s*(\d+),/); if (idM) curId=idM[1]
  if (curId && spec[curId]) {
    // drop images: [...] line for this question (single or multi-line array)
    const imgM = lines[i].match(/^(\s*)images:\s*\[/)
    if (imgM) { // skip until closing ], possibly same line
      if (/\],\s*$/.test(lines[i])) { changed++; continue }
      let j=i; while(j<lines.length && !/\],\s*$/.test(lines[j])) j++; i=j; changed++; continue
    }
    const aM = lines[i].match(/^(\s*)alternatives:\s*\[/)
    if (aM) {
      altIndent=aM[1]; out.push(lines[i]); inAlts=true; let k=0
      let j=i+1
      for (; j<lines.length; j++){
        if (/^\s*\],\s*$/.test(lines[j])) break
        // each alternative object line(s): replace with image alt
        if (/\{\s*id:\s*'[A-E]'/.test(lines[j])) {
          const letter = lines[j].match(/id:\s*'([A-E])'/)![1]
          out.push(`${altIndent}  { id: '${letter}', type: 'image', value: \`${spec[curId]}_${letter}.jpg\` },`)
          k++
          // skip any continuation lines of a multi-line alternative value
          while (j+1<lines.length && !/\},\s*$/.test(lines[j]) && !/\{\s*id:\s*'[A-E]'/.test(lines[j+1]) && !/^\s*\],\s*$/.test(lines[j+1])) j++
        }
      }
      out.push(lines[j]) // the ]
      i=j; inAlts=false; changed++; continue
    }
  }
  out.push(lines[i])
}
if (write){ writeFileSync(file,out.join('\n')); console.log('WROTE',file,'blocks changed:',changed) }
else console.log('(dry run) blocks changed:',changed)
