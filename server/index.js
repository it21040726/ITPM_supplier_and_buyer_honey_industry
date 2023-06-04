import express from "express"
import bodyParser from "body-parser"
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from "helmet"
import morgan from "morgan"
import { fileURLToPath } from "url"
import path from "path"
import { connect } from "./dbConnection.js"

//Routes
import adminRoutes from './routes/AdminRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import sellerPostRoutes from './routes/sellerPostRoutes.js'
import buyerPostRoutes from './routes/buyerPostRoutes.js'

dotenv.config()

const filePath = fileURLToPath(import.meta.url);
const dirName = path.dirname(filePath);

const app = express()
app.use(express.json())
app.use(express.json({ limit: "20mb" }));
app.use(express.static(path.join(dirName, "uploads")));
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


app.use('/api', adminRoutes)
app.use('/api', categoryRoutes)
app.use('/api', buyerPostRoutes)
app.use('/api', sellerPostRoutes)

//mongoose config
const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
    console.log(`\n\n############################## \n\n Server Running on port : ${PORT}\n\n############################## \n\n `)
    connect()
})

