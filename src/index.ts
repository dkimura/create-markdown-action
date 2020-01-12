import fs from 'fs'
import path from 'path'

import core from '@actions/core'

const generateFile = (outputPath: string, data: string) =>
  fs.writeFileSync(outputPath, data)

const generateData = (title: string, body: string) => `
---
name: ${title}
---

${body}
`

try {
  const fileName = core.getInput('fileName')
  const title = core.getInput('title')
  const body = core.getInput('body')

  const data = generateData(title, body)
  const outputPath = path.resolve('.', fileName)

  generateFile(outputPath, data)
} catch (error) {
  console.log(error)
}
