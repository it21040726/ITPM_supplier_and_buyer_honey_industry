import express from "express"
import multer from 'multer'
import shID from 'shortid'
import path from 'path'
import slugify from 'slugify'
import { fileURLToPath } from "url"
import { adminMiddleware, requireSignin } from "../middlware/index.js"
import { catImgUpdate, createCat, deleteCategories, getCat, getCatBySlug, getCategoryPath, updateCategories } from '../controllers/categoryContol.js'

const router = express.Router()
const fileName = fileURLToPath(import.meta.url)
const __dirName = path.dirname(path.dirname(fileName))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirName, 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shID.generate() + '-' + slugify(file.originalname))
    }
})

const upload = multer({ storage })

router.post('/categories/create', requireSignin, adminMiddleware, upload.single('catImg'), createCat)
router.get('/categories/getcategory', getCat)
router.post('/categories/update', requireSignin, adminMiddleware, upload.single('catImg'), updateCategories)
router.post('/categories/img-update', requireSignin, adminMiddleware, upload.single('catImg'), catImgUpdate)
router.post('/categories/delete', requireSignin, adminMiddleware, deleteCategories)
router.get('/category/:slug', getCatBySlug)
router.get('/categoryPath/:slug', getCategoryPath)

export default router