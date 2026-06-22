import { Router } from "express";
import express from "express";
import categoriesController from "../controllers/categories.js";
import { checkCategorySlugExists } from "../middlewares/checkCategorySlugExist.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/", categoriesController.index);

categoriesRouter.get("/:categorySlug", [checkCategorySlugExists ,categoriesController.show]);

export default categoriesRouter;