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
exports.StockController = void 0;
var entity_1 = require("../entity");
var StockController = /** @class */ (function () {
    function StockController() {
    }
    StockController.all = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, entity_1.Stock.find({
                                relations: ["product", "product.vendor"],
                            })];
                    case 1:
                        data = _a.sent();
                        if (data.length <= 0) {
                            response.status(400).send({
                                msg: "Stock does not exist!\n Please try again by adding ones.",
                                statusCode: 400,
                            });
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, response.status(200).send(data)];
                    case 2:
                        error_1 = _a.sent();
                        response.status(400).send({
                            msg: "Stock does not exist!\n Please try again by adding ones.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StockController.getOne = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var stockId, data, sold, i, availableQuantity, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stockId = parseInt(request.params.id);
                        if (!!isNaN(stockId)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, entity_1.Stock.findOneOrFail({ id: stockId }, {
                                relations: ["product", "product.vendor", "product.sales"],
                            })];
                    case 2:
                        data = _a.sent();
                        sold = 0;
                        for (i = 0; i < data.product.sales.length; i++) {
                            sold += data.product.sales[i].quantity;
                        }
                        availableQuantity = data.quantity - sold;
                        response.status(200).send(__assign(__assign({}, data), { availableQuantity: availableQuantity }));
                        return [2 /*return*/];
                    case 3:
                        error_2 = _a.sent();
                        response.json({
                            msg: "Stock with id '" + request.params.id + "' does not exists!\n Please try again with an valid ID.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                    case 4:
                        response.json({
                            msg: "Stock with id '" + request.params.id + "' does not exists!\n Please try again with an valid ID.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    StockController.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, quantity, product, stock, newStock, data, newData, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, quantity = _a.quantity, product = _a.product;
                        if (!!(quantity && product)) return [3 /*break*/, 1];
                        return [2 /*return*/, response.status(400).send({
                                msg: "Please fill the required fields.",
                                statusCode: 400,
                            })];
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        stock = new entity_1.Stock();
                        stock.quantity = quantity;
                        stock.product = product;
                        return [4 /*yield*/, entity_1.Stock.create(stock)];
                    case 2:
                        newStock = _b.sent();
                        return [4 /*yield*/, newStock.save()];
                    case 3:
                        data = _b.sent();
                        return [4 /*yield*/, entity_1.Stock.findOneOrFail({ id: data.id }, {
                                relations: ["product", "product.vendor", "product.sales"],
                            })];
                    case 4:
                        newData = _b.sent();
                        response.status(201).send(newData);
                        return [2 /*return*/];
                    case 5:
                        error_3 = _b.sent();
                        response.status(400).send({
                            msg: "Please fill the required fields.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    StockController.remove = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var stockId, stockToRemove, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stockId = parseInt(request.params.id);
                        if (!!isNaN(stockId)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, entity_1.Stock.findOneOrFail({ id: stockId })];
                    case 2:
                        stockToRemove = _a.sent();
                        return [4 /*yield*/, stockToRemove.remove()];
                    case 3:
                        data = _a.sent();
                        response.send(data);
                        return [2 /*return*/];
                    case 4:
                        error_4 = _a.sent();
                        response.status(400).send({
                            msg: "Stock with id '" + stockId + "' does not exists!\n Please try again with an valid ID.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                    case 5:
                        response.status(400).send({
                            msg: "Stock with id '" + stockId + "' does not exists!\n Please try again with an valid ID.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    StockController.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, quantity, product, stockId, stockToUpdate, data, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, quantity = _a.quantity, product = _a.product;
                        stockId = parseInt(request.params.id);
                        if (!!isNaN(stockId)) return [3 /*break*/, 5];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, entity_1.Stock.findOneOrFail(stockId)];
                    case 2:
                        stockToUpdate = _b.sent();
                        if ("quantity" in request.body)
                            stockToUpdate.quantity = quantity;
                        if ("product" in request.body)
                            stockToUpdate.product = product;
                        return [4 /*yield*/, stockToUpdate.save()];
                    case 3:
                        data = _b.sent();
                        response.status(200).send(data);
                        return [2 /*return*/];
                    case 4:
                        error_5 = _b.sent();
                        response.status(400).send({
                            msg: "Stock with id '" + stockId + "' does not exists!\n Please try again with an valid ID. It must be a number.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                    case 5:
                        response.status(400).send({
                            msg: "Stock with id '" + stockId + "' does not exists!\n Please try again with an valid ID. It must be a number.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return StockController;
}());
exports.StockController = StockController;
//# sourceMappingURL=StockController.js.map