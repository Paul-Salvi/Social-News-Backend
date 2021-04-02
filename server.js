const express = require('express');
const bodyParser=require('body-parser');
const { PrismaClient } = require('@prisma/client');
const prisma=new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get('/', (req, res) => { res.send("{'Health Check':'Healthy' }"); });
app.post('/createTags',async (req,res)=>{
const {tag}=req.body;
const post=await prisma.tags.create({
data:{
    name : tag
}
})
res.json(post);
})
app.post('/getTags',async (req,res)=>{
    const {tagNumber}=req.body;
    const post=await prisma.tags.findFirst({
    where:{
        tagId : tagNumber,
    },
    })
    res.json(post);
    })
app.listen(port, () => { console.log(`Server is listening on port ${port}`); });