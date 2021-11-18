"use strict";
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
exports.SalesController = void 0;
var entity_1 = require("../entity");
var SalesController = /** @class */ (function () {
    function SalesController() {
    }
    SalesController.all = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, entity_1.Sales.find({
                                relations: ["product"],
                                order: {
                                    'createdAt': "ASC",
                                }
                            })];
                    case 1:
                        data = _a.sent();
                        if (data.length <= 0) {
                            response.status(400).send({
                                msg: "Sales does not exist!\n Please try again by adding ones.",
                                statusCode: 400,
                            });
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, response.status(200).send(data)];
                    case 2:
                        error_1 = _a.sent();
                        response.status(400).send({
                            msg: "Sales does not exist!\n Please try again by adding ones.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SalesController.getOne = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var salesId, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesId = parseInt(request.params.id);
                        if (!!isNaN(salesId)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, entity_1.Sales.findOneOrFail({ id: salesId }, {
                                relations: ["product"],
                            })];
                    case 2:
                        data = _a.sent();
                        response.status(200).send(data);
                        return [2 /*return*/];
                    case 3:
                        error_2 = _a.sent();
                        response.json({
                            msg: "Sales with id '" + request.params.id + "' does not exists!\n Please try again with an valid ID.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                    case 4:
                        response.json({
                            msg: "Sales with id '" + request.params.id + "' does not exists!\n Please try again with an valid ID.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SalesController.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, quantity, soldPrice, soldTo, product, sales, newSales, data, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, quantity = _a.quantity, soldPrice = _a.soldPrice, soldTo = _a.soldTo, product = _a.product;
                        if (!!(quantity && soldPrice && soldTo && product)) return [3 /*break*/, 1];
                        return [2 /*return*/, response.status(400).send({
                                msg: "Please fill the required fields.",
                                statusCode: 400,
                            })];
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        sales = new entity_1.Sales();
                        sales.quantity = quantity;
                        sales.soldPrice = soldPrice;
                        sales.soldTo = soldTo;
                        sales.product = product;
                        return [4 /*yield*/, entity_1.Sales.create(sales)];
                    case 2:
                        newSales = _b.sent();
                        return [4 /*yield*/, newSales.save()];
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
    SalesController.remove = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var salesId, salesToRemove, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesId = parseInt(request.params.id);
                        if (!!isNaN(salesId)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, entity_1.Sales.findOneOrFail({ id: salesId })];
                    case 2:
                        salesToRemove = _a.sent();
                        return [4 /*yield*/, salesToRemove.remove()];
                    case 3:
                        data = _a.sent();
                        response.send(data);
                        return [2 /*return*/];
                    case 4:
                        error_4 = _a.sent();
                        response.status(400).send({
                            msg: "Sales with id '" + salesId + "' does not exists!\n Please try again with an valid ID.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                    case 5:
                        response.status(400).send({
                            msg: "Sales with id '" + salesId + "' does not exists!\n Please try again with an valid ID.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SalesController.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, quantity, soldPrice, soldTo, product, salesId, salesToUpdate, data, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, quantity = _a.quantity, soldPrice = _a.soldPrice, soldTo = _a.soldTo, product = _a.product;
                        salesId = parseInt(request.params.id);
                        if (!!isNaN(salesId)) return [3 /*break*/, 5];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, entity_1.Sales.findOneOrFail(salesId)];
                    case 2:
                        salesToUpdate = _b.sent();
                        if ("quantity" in request.body)
                            salesToUpdate.quantity = quantity;
                        if ("soldPrice" in request.body)
                            salesToUpdate.soldPrice = soldPrice;
                        if ("soldTo" in request.body)
                            salesToUpdate.soldTo = soldTo;
                        if ("product" in request.body)
                            salesToUpdate.product = product;
                        return [4 /*yield*/, salesToUpdate.save()];
                    case 3:
                        data = _b.sent();
                        response.status(200).send(data);
                        return [2 /*return*/];
                    case 4:
                        error_5 = _b.sent();
                        response.status(400).send({
                            msg: "Sales with id '" + salesId + "' does not exists!\n Please try again with an valid ID. It must be a number.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                    case 5:
                        response.status(400).send({
                            msg: "Sales with id '" + salesId + "' does not exists!\n Please try again with an valid ID. It must be a number.",
                            statusCode: 400,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return SalesController;
}());
exports.SalesController = SalesController;
//# sourceMappingURL=SalesController.js.map