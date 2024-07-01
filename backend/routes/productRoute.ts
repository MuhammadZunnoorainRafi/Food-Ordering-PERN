import express from 'express';
import { createProductController } from '../controllers/productController';

const productRoute = express.Router();

productRoute.post('/', createProductController);

export default productRoute;
