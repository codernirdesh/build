"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
var typeorm_1 = require("typeorm");
var Product_1 = require("./Product");
var Vendor_1 = require("./Vendor");
var Stock = /** @class */ (function (_super) {
    __extends(Stock, _super);
    function Stock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Stock.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Stock.prototype, "quantity", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Product_1.Product; }, function (product) { return product.id; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }),
        __metadata("design:type", Product_1.Product)
    ], Stock.prototype, "product", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Vendor_1.Vendor; }, function (vendor) { return vendor.id; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }),
        __metadata("design:type", Vendor_1.Vendor)
    ], Stock.prototype, "vendor", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Stock.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Stock.prototype, "updatedAt", void 0);
    Stock = __decorate([
        typeorm_1.Entity("stocks")
    ], Stock);
    return Stock;
}(typeorm_1.BaseEntity));
exports.Stock = Stock;
//# sourceMappingURL=Stock.js.map