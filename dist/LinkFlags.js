"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkFlags = void 0;
var LinkFlags = /** @class */ (function () {
    function LinkFlags(flags) {
        if (flags === void 0) { flags = 0; }
        this.flags = flags;
    }
    Object.defineProperty(LinkFlags.prototype, "HasLinkTargetIDList", {
        get: function () {
            return (this.flags & (1 << 0)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "HasLinkInfo", {
        get: function () {
            return (this.flags & (1 << 1)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "HasName", {
        get: function () {
            return (this.flags & (1 << 2)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "HasRelativePath", {
        get: function () {
            return (this.flags & (1 << 3)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "HasWorkingDir", {
        get: function () {
            return (this.flags & (1 << 4)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "HasArguments", {
        get: function () {
            return (this.flags & (1 << 5)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "HasIconLocation", {
        get: function () {
            return (this.flags & (1 << 6)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "IsUnicode", {
        get: function () {
            return (this.flags & (1 << 7)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "ForceNoLinkInfo", {
        get: function () {
            return (this.flags & (1 << 8)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "HasExpString", {
        get: function () {
            return (this.flags & (1 << 9)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "RunInSeparateProcess", {
        get: function () {
            return (this.flags & (1 << 10)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "Unused1", {
        get: function () {
            return (this.flags & (1 << 11)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "HasDarwinID", {
        get: function () {
            return (this.flags & (1 << 12)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "RunAsUser", {
        get: function () {
            return (this.flags & (1 << 13)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "HasExpIcon", {
        get: function () {
            return (this.flags & (1 << 14)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "NoPidlAlias", {
        get: function () {
            return (this.flags & (1 << 15)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "Unused2", {
        get: function () {
            return (this.flags & (1 << 16)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "RunWithShimLayer", {
        get: function () {
            return (this.flags & (1 << 17)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "ForceNoLinkTrack", {
        get: function () {
            return (this.flags & (1 << 18)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "EnableTargetMetadata", {
        get: function () {
            return (this.flags & (1 << 19)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "DisableLinkPathTracking", {
        get: function () {
            return (this.flags & (1 << 20)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "DisableKnownFolderTracking", {
        get: function () {
            return (this.flags & (1 << 21)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "DisableKnownFolderAlias", {
        get: function () {
            return (this.flags & (1 << 22)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "AllowLinkToLink", {
        get: function () {
            return (this.flags & (1 << 23)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "UnaliasOnSave", {
        get: function () {
            return (this.flags & (1 << 24)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "PreferEnvironmentPath", {
        get: function () {
            return (this.flags & (1 << 25)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkFlags.prototype, "KeepLocalIDListForUNCTarget", {
        get: function () {
            return (this.flags & (1 << 26)) !== 0;
        },
        enumerable: false,
        configurable: true
    });
    LinkFlags.prototype.toJSON = function () {
        return this.flags;
    };
    LinkFlags.prototype.toString = function () {
        return this.flags.toString();
    };
    LinkFlags.prototype.valueOf = function () {
        return this.flags;
    };
    return LinkFlags;
}());
exports.LinkFlags = LinkFlags;
//# sourceMappingURL=LinkFlags.js.map