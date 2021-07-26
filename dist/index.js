'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class FileAttributesFlags {
    flags;
    constructor(flags = 0) {
        this.flags = flags;
    }
    get FILE_ATTRIBUTE_READONLY() {
        return (this.flags & (1 << 0)) !== 0;
    }
    get FILE_ATTRIBUTE_HIDDEN() {
        return (this.flags & (1 << 1)) !== 0;
    }
    get FILE_ATTRIBUTE_SYSTEM() {
        return (this.flags & (1 << 2)) !== 0;
    }
    get Reserved1() {
        return (this.flags & (1 << 3)) !== 0;
    }
    get FILE_ATTRIBUTE_DIRECTORY() {
        return (this.flags & (1 << 4)) !== 0;
    }
    get FILE_ATTRIBUTE_ARCHIVE() {
        return (this.flags & (1 << 5)) !== 0;
    }
    get Reserved2() {
        return (this.flags & (1 << 6)) !== 0;
    }
    get FILE_ATTRIBUTE_NORMAL() {
        return (this.flags & (1 << 7)) !== 0;
    }
    get FILE_ATTRIBUTE_TEMPORARY() {
        return (this.flags & (1 << 8)) !== 0;
    }
    get FILE_ATTRIBUTE_SPARSE_FILE() {
        return (this.flags & (1 << 9)) !== 0;
    }
    get FILE_ATTRIBUTE_REPARSE_POINT() {
        return (this.flags & (1 << 10)) !== 0;
    }
    get FILE_ATTRIBUTE_COMPRESSED() {
        return (this.flags & (1 << 11)) !== 0;
    }
    get FILE_ATTRIBUTE_OFFLINE() {
        return (this.flags & (1 << 12)) !== 0;
    }
    get FILE_ATTRIBUTE_NOT_CONTENT_INDEXED() {
        return (this.flags & (1 << 13)) !== 0;
    }
    get FILE_ATTRIBUTE_ENCRYPTED() {
        return (this.flags & (1 << 14)) !== 0;
    }
    toJSON() {
        return this.flags;
    }
    toString() {
        return this.flags.toString();
    }
    valueOf() {
        return this.flags;
    }
}

class LinkFlags {
    flags;
    constructor(flags = 0) {
        this.flags = flags;
    }
    get HasLinkTargetIDList() {
        return (this.flags & (1 << 0)) !== 0;
    }
    get HasLinkInfo() {
        return (this.flags & (1 << 1)) !== 0;
    }
    get HasName() {
        return (this.flags & (1 << 2)) !== 0;
    }
    get HasRelativePath() {
        return (this.flags & (1 << 3)) !== 0;
    }
    get HasWorkingDir() {
        return (this.flags & (1 << 4)) !== 0;
    }
    get HasArguments() {
        return (this.flags & (1 << 5)) !== 0;
    }
    get HasIconLocation() {
        return (this.flags & (1 << 6)) !== 0;
    }
    get IsUnicode() {
        return (this.flags & (1 << 7)) !== 0;
    }
    get ForceNoLinkInfo() {
        return (this.flags & (1 << 8)) !== 0;
    }
    get HasExpString() {
        return (this.flags & (1 << 9)) !== 0;
    }
    get RunInSeparateProcess() {
        return (this.flags & (1 << 10)) !== 0;
    }
    get Unused1() {
        return (this.flags & (1 << 11)) !== 0;
    }
    get HasDarwinID() {
        return (this.flags & (1 << 12)) !== 0;
    }
    get RunAsUser() {
        return (this.flags & (1 << 13)) !== 0;
    }
    get HasExpIcon() {
        return (this.flags & (1 << 14)) !== 0;
    }
    get NoPidlAlias() {
        return (this.flags & (1 << 15)) !== 0;
    }
    get Unused2() {
        return (this.flags & (1 << 16)) !== 0;
    }
    get RunWithShimLayer() {
        return (this.flags & (1 << 17)) !== 0;
    }
    get ForceNoLinkTrack() {
        return (this.flags & (1 << 18)) !== 0;
    }
    get EnableTargetMetadata() {
        return (this.flags & (1 << 19)) !== 0;
    }
    get DisableLinkPathTracking() {
        return (this.flags & (1 << 20)) !== 0;
    }
    get DisableKnownFolderTracking() {
        return (this.flags & (1 << 21)) !== 0;
    }
    get DisableKnownFolderAlias() {
        return (this.flags & (1 << 22)) !== 0;
    }
    get AllowLinkToLink() {
        return (this.flags & (1 << 23)) !== 0;
    }
    get UnaliasOnSave() {
        return (this.flags & (1 << 24)) !== 0;
    }
    get PreferEnvironmentPath() {
        return (this.flags & (1 << 25)) !== 0;
    }
    get KeepLocalIDListForUNCTarget() {
        return (this.flags & (1 << 26)) !== 0;
    }
    toJSON() {
        return this.flags;
    }
    toString() {
        return this.flags.toString();
    }
    valueOf() {
        return this.flags;
    }
}

class LinkTargetIDList {
    IDList = [];
    IDListSize = 2;
    TerminalID = 0;
    constructor(file) {
        if (file) {
            this.parse(file);
        }
    }
    parse(buf) {
        var view = new DataView(buf);
        this.IDListSize = view.getUint16(0, true);
        var offset = 2;
        let ItemIDSize;
        while ((ItemIDSize = view.getUint16(offset, true)) > 0) {
            let ItemID = {
                ItemIDSize,
                Data: new Uint8Array(buf, offset + 2, ItemIDSize - 2),
            };
            this.IDList.push(ItemID);
            offset += ItemIDSize;
        }
        this.TerminalID = ItemIDSize;
    }
}

class LinkInfo {
    LinkInfoSize = 0;
    LinkInfoHeaderSize = 0;
    LinkInfoFlags = 0;
    VolumeIDOffset = 0;
    LocalBasePathOffset = 0;
    CommonNetworkRelativeLinkOffset = 0;
    CommonPathSuffixOffset = 0;
    LocalBasePathOffsetUnicode;
    CommonPathSuffixOffsetUnicode;
    VolumeID;
    LocalBasePath;
    CommonNetworkRelativeLink;
    CommonPathSuffix = "";
    LocalBasePathUnicode;
    CommonPathSuffixUnicode;
    constructor(file) {
        if (file) {
            this.parse(file);
        }
    }
    parse(buf) {
        const view = new DataView(buf);
        this.LinkInfoSize = view.getUint32(0, true);
        this.LinkInfoHeaderSize = view.getUint32(4, true);
        this.LinkInfoFlags = view.getUint32(8, true);
        this.VolumeIDOffset = view.getUint32(12, true);
        this.LocalBasePathOffset = view.getUint32(16, true);
        this.CommonNetworkRelativeLinkOffset = view.getUint32(20, true);
        this.CommonPathSuffixOffset = view.getUint32(24, true);
    }
}

class ShellLinkHeader {
    HeaderSize = 76;
    LinkCLSID = new Uint8Array([
        0x00, 0x02, 0x14, 0x01, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x46,
    ]);
    LinkFlags = new LinkFlags();
    FileAttributes = new FileAttributesFlags();
    CreationTime = BigInt("0");
    AccessTime = BigInt("0");
    WriteTime = BigInt("0");
    FileSize = 0;
    IconIndex = 0;
    ShowCommand = 0;
    HotKey = 0;
    Reserved1 = new Uint8Array([0, 0]);
    Reserved2 = new Uint8Array([0, 0, 0, 0]);
    Reserved3 = new Uint8Array([0, 0, 0, 0]);
    constructor(file) {
        if (file) {
            this.parse(file);
        }
    }
    parse(buf) {
        var data = new DataView(buf);
        this.HeaderSize = data.getUint32(0, true);
        this.LinkCLSID = new Uint8Array(buf.slice(4, 20));
        this.LinkFlags = new LinkFlags(data.getUint32(20, true));
        this.FileAttributes = new FileAttributesFlags(data.getUint32(24, true));
        this.CreationTime = data.getBigUint64(28, true);
        this.AccessTime = data.getBigUint64(36, true);
        this.WriteTime = data.getBigUint64(44, true);
        this.FileSize = data.getUint32(52, true);
        this.IconIndex = data.getUint32(56, true);
        this.ShowCommand = data.getUint32(60, true);
        this.HotKey = data.getUint16(64, true);
        this.Reserved1 = new Uint8Array(buf.slice(66, 68));
        this.Reserved2 = new Uint8Array(buf.slice(68, 72));
        this.Reserved3 = new Uint8Array(buf.slice(72, 76));
    }
}

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
class LNKFile {
    ShellLinkHeader = new ShellLinkHeader();
    LinkTargetIDList = new LinkTargetIDList();
    StringData;
    LinkInfo = new LinkInfo();
    constructor(file) {
        if (file) {
            this.parse(file);
        }
    }
    parse(file) {
        let pointer = 0;
        var data = new DataView(file);
        var headerSize = data.getUint32(0, true);
        this.ShellLinkHeader = new ShellLinkHeader(data.buffer.slice(0, headerSize));
        pointer += headerSize;
        if (this.ShellLinkHeader.LinkFlags.HasLinkTargetIDList) {
            var IDListSize = data.getUint16(pointer, true);
            this.LinkTargetIDList = new LinkTargetIDList(data.buffer.slice(pointer, pointer + IDListSize + 2));
            pointer += IDListSize + 2;
        }
        if (this.ShellLinkHeader.LinkFlags.HasLinkInfo) {
            var InfoSize = data.getUint32(pointer, true);
            this.LinkInfo = new LinkInfo(data.buffer.slice(pointer, pointer + InfoSize));
            pointer += InfoSize;
        }
        if (!this.ShellLinkHeader.LinkFlags.IsUnicode) {
            console.warn("Not Unicode File , stop decode.");
            return;
        }
        var decoder = new TextDecoder("utf-16le");
        this.StringData = {};
        if (this.ShellLinkHeader.LinkFlags.HasName) {
            let countCharacters = data.getUint16(pointer, true);
            let len = countCharacters * 2;
            this.StringData.NAME_STRING = {
                countCharacters,
                string: decoder.decode(data.buffer.slice(pointer + 2, pointer + 2 + len)),
            };
            pointer += len + 2;
        }
        if (this.ShellLinkHeader.LinkFlags.HasRelativePath) {
            let countCharacters = data.getUint16(pointer, true);
            let len = countCharacters * 2;
            this.StringData.RELATIVE_PATH = {
                countCharacters,
                string: decoder.decode(data.buffer.slice(pointer + 2, pointer + 2 + len)),
            };
            pointer += len + 2;
        }
        if (this.ShellLinkHeader.LinkFlags.HasWorkingDir) {
            let countCharacters = data.getUint16(pointer, true);
            let len = countCharacters * 2;
            this.StringData.WORKING_DIR = {
                countCharacters,
                string: decoder.decode(data.buffer.slice(pointer + 2, pointer + 2 + len)),
            };
            pointer += len + 2;
        }
        if (this.ShellLinkHeader.LinkFlags.HasArguments) {
            var countCharacters = data.getUint16(pointer, true);
            let len = countCharacters * 2;
            this.StringData.COMAND_LINE_ARGUMENTS = {
                countCharacters,
                string: decoder.decode(data.buffer.slice(pointer + 2, pointer + 2 + len)),
            };
            pointer += len + 2;
        }
        if (this.ShellLinkHeader.LinkFlags.HasIconLocation) {
            let countCharacters = data.getUint16(pointer, true);
            let len = countCharacters * 2;
            this.StringData.ICON_LOCATION = {
                countCharacters,
                string: decoder.decode(data.buffer.slice(pointer + 2, pointer + 2 + len)),
            };
            pointer += len + 2;
        }
    }
}

exports.FileAttributesFlags = FileAttributesFlags;
exports.LNKFile = LNKFile;
exports.LinkFlags = LinkFlags;
exports.LinkTargetIDList = LinkTargetIDList;
exports.ShellLinkHeader = ShellLinkHeader;
//# sourceMappingURL=index.js.map
