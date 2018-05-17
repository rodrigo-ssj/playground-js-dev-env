import path from 'path'
import open from 'open'
import chalk from 'chalk'
import express from 'express'
import webpack from 'webpack'
import config from '../webpack.config'
import webpackMiddleware from 'webpack-dev-middleware'

const port = 3000
const app = express()
const compiler = webpack(config)

app.use(webpackMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../src/index.html')
  )
})

app.listen(port, err => {
  if (err)
    return console.err(err)

  const serverUrl = `http://localhost:${port}`

  console.log(chalk.blue(`Development server running at ${serverUrl}`))

  open(serverUrl)
})
