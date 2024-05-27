import jsonServer from 'json-server'
import fs from 'node:fs'
import path from 'node:path'

const server = jsonServer.create()

//write operations
const filePath = path.join(__dirname, './src/data/data.json')
const data = fs.readFileSync(filePath, 'utf-8')
const db = JSON.parse(data)
const router = jsonServer.router(db)

const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id',
  })
)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})

// Export the Server API
export default server
