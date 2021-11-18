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
exports.Product = void 0;
var typeorm_1 = require("typeorm");
var Sales_1 = require("./Sales");
var Stock_1 = require("./Stock");
var Vendor_1 = require("./Vendor");
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Product.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "costPrice", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "markedPrice", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Vendor_1.Vendor; }, function (vendor) { return vendor.id; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        __metadata("design:type", Vendor_1.Vendor)
    ], Product.prototype, "vendor", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Sales_1.Sales; }, function (sales) { return sales.product; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        __metadata("design:type", Array)
    ], Product.prototype, "sales", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Stock_1.Stock; }, function (stocks) { return stocks.product; }, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }),
        __metadata("design:type", Array)
    ], Product.prototype, "stocks", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Product.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Product.prototype, "updatedAt", void 0);
    Product = __decorate([
        typeorm_1.Entity("products")
    ], Product);
    return Product;
}(typeorm_1.BaseEntity));
exports.Product = Product;
//# sourceMappingURL=Product.js.map