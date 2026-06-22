import express from 'express';
import { Router } from 'express';
import productsController from '../controllers/products.js';
import { checkProductSlugExists } from '../middlewares/checkProductSlugExist.js';
const productsRouter = express.Router();

productsRouter.get('/', productsController.index);

productsRouter.get('/:slug', [checkProductSlugExists ,productsController.show]);

export default productsRouter;