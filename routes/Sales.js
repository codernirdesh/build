"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = express_1.Router();
router.get("/", controllers_1.SalesController.all);
router.post("/create", controllers_1.SalesController.create);
router.get("/:id", controllers_1.SalesController.getOne);
router.post("/delete/:id", controllers_1.SalesController.remove);
router.post("/edit/:id", controllers_1.SalesController.update);
exports.default = router;
//# sourceMappingURL=Sales.js.map