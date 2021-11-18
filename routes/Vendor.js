"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = express_1.Router();
router.get("/", controllers_1.VendorController.all);
router.post("/create", controllers_1.VendorController.create);
router.get("/:id", controllers_1.VendorController.getOne);
router.post("/delete/:id", controllers_1.VendorController.remove);
router.post("/edit/:id", controllers_1.VendorController.update);
exports.default = router;
//# sourceMappingURL=Vendor.js.map