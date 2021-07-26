export declare class FileAttributesFlags {
    private flags;
    constructor(flags?: number);
    get FILE_ATTRIBUTE_READONLY(): boolean;
    get FILE_ATTRIBUTE_HIDDEN(): boolean;
    get FILE_ATTRIBUTE_SYSTEM(): boolean;
    get Reserved1(): boolean;
    get FILE_ATTRIBUTE_DIRECTORY(): boolean;
    get FILE_ATTRIBUTE_ARCHIVE(): boolean;
    get Reserved2(): boolean;
    get FILE_ATTRIBUTE_NORMAL(): boolean;
    get FILE_ATTRIBUTE_TEMPORARY(): boolean;
    get FILE_ATTRIBUTE_SPARSE_FILE(): boolean;
    get FILE_ATTRIBUTE_REPARSE_POINT(): boolean;
    get FILE_ATTRIBUTE_COMPRESSED(): boolean;
    get FILE_ATTRIBUTE_OFFLINE(): boolean;
    get FILE_ATTRIBUTE_NOT_CONTENT_INDEXED(): boolean;
    get FILE_ATTRIBUTE_ENCRYPTED(): boolean;
    toJSON(): any;
    toString(): string;
    valueOf(): number;
}
