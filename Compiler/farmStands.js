var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var printProduct = function (product) {
    console.log(__makeTemplateObject(["(", ")"], ["(", ")"]), product.name);
};
