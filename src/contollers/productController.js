//import  PrismaClientConst  from '@prisma/client';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.addProduct = async (req, res) => {
    const { productNumber, title, price, description, category, image } = req.body;
    const product = await prisma.product.create({
        data: {
            productId: productNumber,
            title: title,
            price: price,
            description: description,
            category: category,
            image: image
        }
    });
}
exports.getProduct =
    async (req, res) => {
        const { productNumber } = req.body;
        const product = await prisma.product.findFirst({
            where: {
                productId: productNumber,
            },
        })
        res.json(product);
    }

exports.getProductByCategory =
    async (req, res) => {
        const { productCategory } = req.body;
        const product = await prisma.product.findMany({
            where: {
                category: productCategory,
            },
        })
        res.json(product);
    }
exports.getAllProducts = async (req, res) => {
    const product = await prisma.product.findMany({})
    res.json(product);
}
exports.getProductsByPageNumber = async (req, res) => {
    const { pageNumber, totalCount } = req.body;
    const product = await prisma.product.findMany({
        skip: pageNumber * totalCount,
        take: totalCount
    });
    res.json(product);
}