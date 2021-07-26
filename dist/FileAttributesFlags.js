"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAttributesFlags = void 0;
var FileAttributesFlags = /** @class */ (function () {
    function FileAttributesFlags(flags) {
        if (flags === void 0) { flags = 0; }
        this.flags = flags;
    }
    Object.defineProperty(FileAttributesFlags.prototype, "FILE_ATTRIBUTE_READONLY", {
        get: function () {
            return (this.flags & (1 << 0)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileAttributesFlags.prototype, "FILE_ATTRIBUTE_HIDDEN", {
        get: function () {
            return (this.flags & (1 << 1)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileAttributesFlags.prototype, "FILE_ATTRIBUTE_SYSTEM", {
        get: function () {
            return (this.flags & (1 << 2)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileAttributesFlags.prototype, "Reserved1", {
        get: function () {
            return (this.flags & (1 << 3)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileAttributesFlags.prototype, "FILE_ATTRIBUTE_DIRECTORY", {
        get: function () {
            return (this.flags & (1 << 4)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileAttributesFlags.prototype, "FILE_ATTRIBUTE_ARCHIVE", {
        get: function () {
            return (this.flags & (1 << 5)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileAttributesFlags.prototype, "Reserved2", {
        get: function () {
            return (this.flags & (1 << 6)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileAttributesFlags.prototype, "FILE_ATTRIBUTE_NORMAL", {
        get: function () {
            return (this.flags & (1 << 7)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileAttributesFlags.prototype, "FILE_ATTRIBUTE_TEMPORARY", {
        get: function () {
            return (this.flags & (1 << 8)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileAttributesFlags.prototype, "FILE_ATTRIBUTE_SPARSE_FILE", {
        get: function () {
            return (this.flags & (1 << 9)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileAttributesFlags.prototype, "FILE_ATTRIBUTE_REPARSE_POINT", {
        get: function () {
            return (this.flags & (1 << 10)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileAttributesFlags.prototype, "FILE_ATTRIBUTE_COMPRESSED", {
        get: function () {
            return (this.flags & (1 << 11)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileAttributesFlags.prototype, "FILE_ATTRIBUTE_OFFLINE", {
        get: function () {
            return (this.flags & (1 << 12)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileAttributesFlags.prototype, "FILE_ATTRIBUTE_NOT_CONTENT_INDEXED", {
        get: function () {
            return (this.flags & (1 << 13)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileAttributesFlags.prototype, "FILE_ATTRIBUTE_ENCRYPTED", {
        get: function () {
            return (this.flags & (1 << 14)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    FileAttributesFlags.prototype.toJSON = function () {
        return this.flags;
    };
    FileAttributesFlags.prototype.toString = function () {
        return this.flags.toString();
    };
    FileAttributesFlags.prototype.valueOf = function () {
        return this.flags;
    };
    return FileAttributesFlags;
}());
exports.FileAttributesFlags = FileAttributesFlags;
//# sourceMappingURL=FileAttributesFlags.js.map