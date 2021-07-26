"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkInfo = void 0;
var LinkInfo = /** @class */ (function () {
    function LinkInfo(file) {
        this.LinkInfoSize = 0;
        this.LinkInfoHeaderSize = 0;
        this.LinkInfoFlags = 0;
        this.VolumeIDOffset = 0;
        this.LocalBasePathOffset = 0;
        this.CommonNetworkRelativeLinkOffset = 0;
        this.CommonPathSuffixOffset = 0;
        this.CommonPathSuffix = "";
        if (file) {
            this.parse(file);
        }
    }
    LinkInfo.prototype.parse = function (buf) {
        var view = new DataView(buf);
        this.LinkInfoSize = view.getUint32(0, true);
        this.LinkInfoHeaderSize = view.getUint32(4, true);
        this.LinkInfoFlags = view.getUint32(8, true);
        this.VolumeIDOffset = view.getUint32(12, true);
        this.LocalBasePathOffset = view.getUint32(16, true);
        this.CommonNetworkRelativeLinkOffset = view.getUint32(20, true);
        this.CommonPathSuffixOffset = view.getUint32(24, true);
    };
    return LinkInfo;
}());
exports.LinkInfo = LinkInfo;
//# sourceMappingURL=LinkInfo.js.map