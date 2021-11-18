"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = express_1.Router();
router.get("/", controllers_1.ProductController.all);
router.post("/create", controllers_1.ProductController.create);
router.get("/:id", controllers_1.ProductController.getOne);
router.post("/delete/:id", controllers_1.ProductController.remove);
router.post("/edit/:id", controllers_1.ProductController.update);
exports.default = router;
//# sourceMappingURL=Product.js.map