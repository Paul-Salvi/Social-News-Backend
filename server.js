const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const productRouter=require( './src/routes/products.routes.js');
app.use(bodyParser.json());
app.use('/api/v1/product',productRouter);
app.listen(port, () => { console.log(`Server is listening on port ${port}`); });