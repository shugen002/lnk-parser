export class FileAttributesFlags {
  private flags: number;
  constructor(flags: number = 0) {
    this.flags = flags;
  }
  get FILE_ATTRIBUTE_READONLY(): boolean {
    return (this.flags & (1 << 0)) !== 0;
  }
  get FILE_ATTRIBUTE_HIDDEN(): boolean {
    return (this.flags & (1 << 1)) !== 0;
  }
  get FILE_ATTRIBUTE_SYSTEM(): boolean {
    return (this.flags & (1 << 2)) !== 0;
  }
  get Reserved1(): boolean {
    return (this.flags & (1 << 3)) !== 0;
  }
  get FILE_ATTRIBUTE_DIRECTORY(): boolean {
    return (this.flags & (1 << 4)) !== 0;
  }
  get FILE_ATTRIBUTE_ARCHIVE(): boolean {
    return (this.flags & (1 << 5)) !== 0;
  }
  get Reserved2(): boolean {
    return (this.flags & (1 << 6)) !== 0;
  }
  get FILE_ATTRIBUTE_NORMAL(): boolean {
    return (this.flags & (1 << 7)) !== 0;
  }
  get FILE_ATTRIBUTE_TEMPORARY(): boolean {
    return (this.flags & (1 << 8)) !== 0;
  }
  get FILE_ATTRIBUTE_SPARSE_FILE(): boolean {
    return (this.flags & (1 << 9)) !== 0;
  }
  get FILE_ATTRIBUTE_REPARSE_POINT(): boolean {
    return (this.flags & (1 << 10)) !== 0;
  }
  get FILE_ATTRIBUTE_COMPRESSED(): boolean {
    return (this.flags & (1 << 11)) !== 0;
  }
  get FILE_ATTRIBUTE_OFFLINE(): boolean {
    return (this.flags & (1 << 12)) !== 0;
  }
  get FILE_ATTRIBUTE_NOT_CONTENT_INDEXED(): boolean {
    return (this.flags & (1 << 13)) !== 0;
  }
  get FILE_ATTRIBUTE_ENCRYPTED(): boolean {
    return (this.flags & (1 << 14)) !== 0;
  }
  toJSON(): any {
    return this.flags;
  }
  toString(): string {
    return this.flags.toString();
  }
  valueOf(): number {
    return this.flags;
  }
}
