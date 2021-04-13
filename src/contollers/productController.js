//import  PrismaClientConst  from '@prisma/client';
const {PrismaClient}=require('@prisma/client');
const prisma=new PrismaClient();

exports.addProduct =(req,res)=>{

}
exports.getProduct =
    async (req,res)=>{

        const {productNumber}=req.body;
        const post=await prisma.product.findFirst({
        where:{
            productId : productNumber,
        },
        })
        res.json(post);
        }

exports.getAllProducts =(req,res)=>{

}
exports.getProductsByPageNumber =(req,res)=>{

}