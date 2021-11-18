"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = express_1.Router();
router.get("/", controllers_1.StockController.all);
router.post("/create", controllers_1.StockController.create);
router.get("/:id", controllers_1.StockController.getOne);
router.post("/delete/:id", controllers_1.StockController.remove);
router.post("/edit/:id", controllers_1.StockController.update);
exports.default = router;
//# sourceMappingURL=Stock.js.map