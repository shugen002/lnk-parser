"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkTargetIDList = void 0;
var LinkTargetIDList = /** @class */ (function () {
    function LinkTargetIDList(file) {
        this.IDList = [];
        this.IDListSize = 2;
        this.TerminalID = 0;
        if (file) {
            this.parse(file);
        }
    }
    LinkTargetIDList.prototype.parse = function (buf) {
        var view = new DataView(buf);
        this.IDListSize = view.getUint16(0, true);
        var offset = 2;
        var ItemIDSize;
        while ((ItemIDSize = view.getUint16(offset, true)) > 0) {
            var ItemID = {
                ItemIDSize: ItemIDSize,
                Data: new Uint8Array(buf, offset + 2, ItemIDSize - 2),
            };
            this.IDList.push(ItemID);
            offset += ItemIDSize;
        }
        this.TerminalID = ItemIDSize;
    };
    return LinkTargetIDList;
}());
exports.LinkTargetIDList = LinkTargetIDList;
//# sourceMappingURL=LinkTargetIDList.js.map