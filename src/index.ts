import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(
	cors({
		origin: '*',
		credentials: true
	})
)

app.get('/', (_req: Request, res: Response) => {
	res.send('Hello')
})

app.listen(3001)
console.log('Server starting on port 3001')
