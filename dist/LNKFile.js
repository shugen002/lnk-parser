"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LNKFile = void 0;
var LinkInfo_1 = require("./LinkInfo");
var LinkTargetIDList_1 = require("./LinkTargetIDList");
var ShellLinkHeader_1 = require("./ShellLinkHeader");
/**
 * [MS-SHLLINK]: Shell Link (.LNK) Binary File Format
 *
 * Specifies the Shell Link Binary File Format, which contains information that can be used to access another data object. The Shell Link Binary File Format is the format of Windows files with the extension "LNK".
 *
 * The Shell Link Binary File Format consists of a sequence of structures that conform to the following ABNF rules RFC5234
 *
 * SHELL_LINK = SHELL_LINK_HEADER [LINKTARGET_IDLIST] [LINKINFO] [STRING_DATA] *EXTRA_DATA
 *
 * @links MS-SHLLINK https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-shllink/16cb4ca1-9339-4d0c-a68d-bf1d6cc0f943
 * @links ABNF https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-shllink/ac7b5968-68f5-4e5c-8b11-00a6f4ae98ff#gt_24ddbbb4-b79e-4419-96ec-0fdd229c9ebf
 * @link RFC5234 https://www.rfc-editor.org/rfc/rfc5234.txt
 */
var LNKFile = /** @class */ (function () {
    function LNKFile(file) {
        this.ShellLinkHeader = new ShellLinkHeader_1.ShellLinkHeader();
        this.LinkTargetIDList = new LinkTargetIDList_1.LinkTargetIDList();
        this.LinkInfo = new LinkInfo_1.LinkInfo();
        if (file) {
            this.parse(file);
        }
    }
    LNKFile.prototype.parse = function (file) {
        var pointer = 0;
        var data = new DataView(file);
        var headerSize = data.getUint32(0, true);
        this.ShellLinkHeader = new ShellLinkHeader_1.ShellLinkHeader(data.buffer.slice(0, headerSize));
        pointer += headerSize;
        if (this.ShellLinkHeader.LinkFlags.HasLinkTargetIDList) {
            var IDListSize = data.getUint16(pointer, true);
            this.LinkTargetIDList = new LinkTargetIDList_1.LinkTargetIDList(data.buffer.slice(pointer, pointer + IDListSize + 2));
            pointer += IDListSize + 2;
        }
        if (this.ShellLinkHeader.LinkFlags.HasLinkInfo) {
            var InfoSize = data.getUint32(pointer, true);
            this.LinkInfo = new LinkInfo_1.LinkInfo(data.buffer.slice(pointer, pointer + InfoSize));
            pointer += InfoSize;
        }
        if (!this.ShellLinkHeader.LinkFlags.IsUnicode) {
            console.warn("Not Unicode File , stop decode.");
            return;
        }
        var decoder = new TextDecoder("utf-16le");
        this.StringData = {};
        if (this.ShellLinkHeader.LinkFlags.HasName) {
            var NameSize = data.getUint16(pointer, true);
            var len = NameSize * 2;
            this.StringData.NAME_STRING = decoder.decode(data.buffer.slice(pointer + 2, pointer + 2 + len));
            pointer += len + 2;
        }
        if (this.ShellLinkHeader.LinkFlags.HasRelativePath) {
            var RelativePathSize = data.getUint16(pointer, true);
            var len = RelativePathSize * 2;
            this.StringData.RELATIVE_PATH = decoder.decode(data.buffer.slice(pointer + 2, pointer + 2 + len));
            pointer += len + 2;
        }
        if (this.ShellLinkHeader.LinkFlags.HasWorkingDir) {
            var WorkingDirSize = data.getUint16(pointer, true);
            var len = WorkingDirSize * 2;
            this.StringData.WORKING_DIR = decoder.decode(data.buffer.slice(pointer + 2, pointer + 2 + len));
            pointer += len + 2;
        }
        if (this.ShellLinkHeader.LinkFlags.HasArguments) {
            var ArgumentsSize = data.getUint16(pointer, true);
            var len = ArgumentsSize * 2;
            this.StringData.COMAND_LINE_ARGUMENTS = decoder.decode(data.buffer.slice(pointer + 2, pointer + 2 + len));
            pointer += len + 2;
        }
        if (this.ShellLinkHeader.LinkFlags.HasIconLocation) {
            var IconLocationSize = data.getUint16(pointer, true);
            var len = IconLocationSize * 2;
            this.StringData.ICON_LOCATION = decoder.decode(data.buffer.slice(pointer + 2, pointer + 2 + len));
            pointer += len + 2;
        }
    };
    return LNKFile;
}());
exports.LNKFile = LNKFile;
//# sourceMappingURL=LNKFile.js.map