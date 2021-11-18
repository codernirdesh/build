"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
var entity_1 = require("../entity");
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.all = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, entity_1.Product.find({
                                relations: ["vendor", "sales", "stocks"],
                            })];
                    case 1:
                        data = _a.sent();
                        if (data.length <= 0) {
                            return [2 /*return*/, response.status(400).send({
                                    msg: "Products does not exist!\n Please try again by adding ones.",
                                    statusCode: 400,
                                })];
                        }
                        return [2 /*return*/, response.status(200).send(data)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, response.status(400).send({
                                msg: "Customers does not exist!\n Please try again by adding ones.",
                                statusCode: 400,
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.getOne = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var productId, data, stockQuantity, sold, availableStockQuantity, i, thisItem, i, thisItem, newData, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productId = parseInt(request.params.id);
                        if (!!isNaN(productId)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, entity_1.Product.findOneOrFail({ id: productId }, {
                                relations: ["sales", "vendor", "stocks"],
                            })];
                    case 2:
                        data = _a.sent();
                        stockQuantity = 0;
                        sold = 0;
                        availableStockQuantity = 0;
                        // Counting Stocks
                        for (i = 0; i < data.stocks.length; i++) {
                            thisItem = data.stocks[i];
                            stockQuantity += thisItem.quantity;
                        }
                        // Counting Sales
                        for (i = 0; i < data.sales.length; i++) {
                            thisItem = data.sales[i];
                            sold += thisItem.quantity;
                        }
                        // Getting available stocks by subtracting
                        // Sold items from the Total Stock of the Product.
                        availableStockQuantity = stockQuantity - sold;
                        newData = __assign(__assign({}, data), { stockQuantity: stockQuantity, availableStockQuantity: availableStockQuantity });
                        response.status(200).send(newData);
                        return [2 /*return*/];
                    case 3:
                        error_2 = _a.sent();
                        response.json({
                            msg: "Product with id '" + request.params.id + "' does not exists!\n Please try again with an valid ID.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                    case 4:
                        response.json({
                            msg: "Product with id '" + request.params.id + "' does not exists!\n Please try again with an valid ID.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductController.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, costPrice, markedPrice, vendor, product, newProduct, data, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, costPrice = _a.costPrice, markedPrice = _a.markedPrice, vendor = _a.vendor;
                        if (!!(name && costPrice && markedPrice && vendor)) return [3 /*break*/, 1];
                        return [2 /*return*/, response.status(400).send({
                                msg: "Please fill the required fields.",
                                statusCode: 400,
                            })];
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        product = new entity_1.Product();
                        product.name = name;
                        product.costPrice = costPrice;
                        product.markedPrice = markedPrice;
                        product.vendor = vendor;
                        return [4 /*yield*/, entity_1.Product.create(product)];
                    case 2:
                        newProduct = _b.sent();
                        return [4 /*yield*/, newProduct.save()];
                    case 3:
                        data = _b.sent();
                        response.status(201).send(data);
                        return [2 /*return*/];
                    case 4:
                        error_3 = _b.sent();
                        response.status(400).send({
                            msg: "Please fill the required fields.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.remove = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var productId, productToRemove, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productId = parseInt(request.params.id);
                        if (!!isNaN(productId)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, entity_1.Product.findOneOrFail({ id: productId })];
                    case 2:
                        productToRemove = _a.sent();
                        return [4 /*yield*/, productToRemove.remove()];
                    case 3:
                        data = _a.sent();
                        response.send(data);
                        return [3 /*break*/, 5];
                    case 4:
                        error_4 = _a.sent();
                        response.status(400).send({
                            msg: error_4,
                            statusCode: 400,
                        });
                        // response.status(400).send({
                        //   msg: `Lol Product with id '${productId}' does not exists!\n Please try again with an valid ID.`,
                        //   statusCode: 400,
                        // });
                        return [2 /*return*/];
                    case 5:
                        response.status(400).send({
                            msg: "Product with id '" + productId + "' does not exists!\n Please try again with an valid ID.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductController.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, costPrice, markedPrice, vendor, productId, productToUpdate, data, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, costPrice = _a.costPrice, markedPrice = _a.markedPrice, vendor = _a.vendor;
                        productId = parseInt(request.params.id);
                        if (!!isNaN(productId)) return [3 /*break*/, 5];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, entity_1.Product.findOneOrFail(productId)];
                    case 2:
                        productToUpdate = _b.sent();
                        if ("name" in request.body)
                            productToUpdate.name = name;
                        if ("costPrice" in request.body)
                            productToUpdate.costPrice = costPrice;
                        if ("markedPrice" in request.body)
                            productToUpdate.markedPrice = markedPrice;
                        if ("vendor" in request.body)
                            productToUpdate.vendor = vendor;
                        return [4 /*yield*/, productToUpdate.save()];
                    case 3:
                        data = _b.sent();
                        response.status(200).send(data);
                        return [2 /*return*/];
                    case 4:
                        error_5 = _b.sent();
                        response.status(400).send({
                            msg: "Product with id '" + productId + "' does not exists!\n Please try again with an valid ID. It must be a number.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                    case 5:
                        response.status(400).send({
                            msg: "Product with id '" + productId + "' does not exists!\n Please try again with an valid ID. It must be a number.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProductController;
}());
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map