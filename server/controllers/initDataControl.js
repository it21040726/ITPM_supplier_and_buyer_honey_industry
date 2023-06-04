import Category from '../models/category.js'
import Product from '../models/product.js'
import { createCatList } from './categoryContol.js'

const initData = async (req, res) => {
    const categories = await Category.find({}).exec()
    const products = await Product.find({})
        .populate({ path: 'category', select: '_id name slug' })
        .exec()
    res.status(200).json({
        categories: createCatList(categories),
        products
    })

}

export default initData