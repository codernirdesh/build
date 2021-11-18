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
var entity_1 = require("../entity");
var faker = require("faker");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Vendor_1 = require("../entity/Vendor");
var Sales_1 = require("../entity/Sales");
var Stock_1 = require("../entity/Stock");
var countOf = {
    product: 200,
    vendors: 2,
    sales: 500,
    stocks: 300,
};
typeorm_1.createConnection()
    .then(function (_connection) { return __awaiter(void 0, void 0, void 0, function () {
    function populate() {
        return __awaiter(this, void 0, void 0, function () {
            var index, vendor, index, product, index, sale, index, stoke;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = 1;
                        _a.label = 1;
                    case 1:
                        if (!(index <= countOf.vendors)) return [3 /*break*/, 4];
                        vendor = Vendor_1.Vendor.create({
                            name: faker.name.findName(),
                            address: faker.address.streetAddress(),
                            phone: faker.phone.phoneNumber("98########"),
                            createdAt: faker.date.past(),
                            updatedAt: faker.date.past(),
                        });
                        return [4 /*yield*/, vendor.save()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        index++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log("Vendors Generation completed!");
                        index = 1;
                        _a.label = 5;
                    case 5:
                        if (!(index <= countOf.product)) return [3 /*break*/, 8];
                        product = entity_1.Product.create({
                            name: faker.name.findName(),
                            costPrice: faker.datatype.number({ min: 50, max: 3000 }),
                            markedPrice: faker.datatype.number({ min: 3000, max: 5000 }),
                            vendor: faker.datatype.number({ min: 1, max: countOf.vendors }),
                            sales: faker.datatype.number({ min: 1, max: countOf.sales }),
                            stocks: faker.datatype.number({ min: 1, max: countOf.stocks }),
                            createdAt: faker.date.past(),
                            updatedAt: faker.date.past(),
                        });
                        return [4 /*yield*/, product.save()];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        index++;
                        return [3 /*break*/, 5];
                    case 8:
                        console.log("Products Generation completed!");
                        index = 1;
                        _a.label = 9;
                    case 9:
                        if (!(index <= countOf.sales)) return [3 /*break*/, 12];
                        sale = Sales_1.Sales.create({
                            product: faker.datatype.number({ min: 1, max: countOf.product }),
                            quantity: faker.datatype.number({ min: 1, max: 10 }),
                            soldPrice: faker.datatype.number({ min: 3000, max: 4000 }),
                            soldTo: faker.name.findName(),
                            createdAt: faker.date.past(),
                            updatedAt: faker.date.past(),
                        });
                        return [4 /*yield*/, sale.save()];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11:
                        index++;
                        return [3 /*break*/, 9];
                    case 12:
                        console.log("Sales Generation completed!");
                        index = 1;
                        _a.label = 13;
                    case 13:
                        if (!(index <= countOf.stocks)) return [3 /*break*/, 16];
                        stoke = Stock_1.Stock.create({
                            product: faker.datatype.number({ min: 1, max: countOf.product }),
                            quantity: faker.datatype.number({ min: 5, max: 30 }),
                            vendor: faker.datatype.number({ min: 1, max: countOf.vendors }),
                            createdAt: faker.date.past(),
                            updatedAt: faker.date.past(),
                        });
                        return [4 /*yield*/, stoke.save()];
                    case 14:
                        _a.sent();
                        _a.label = 15;
                    case 15:
                        index++;
                        return [3 /*break*/, 13];
                    case 16:
                        console.log("Stocks Generation completed!");
                        return [2 /*return*/];
                }
            });
        });
    }
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, populate()];
            case 1:
                _a.sent();
                return [4 /*yield*/, _connection.close()];
            case 2:
                _a.sent();
                console.log("Completed!");
                process.exit(0);
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=Populate.js.map