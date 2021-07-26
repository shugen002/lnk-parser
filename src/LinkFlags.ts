export class LinkFlags {
  private flags: number;
  constructor(flags: number = 0) {
    this.flags = flags;
  }
  get HasLinkTargetIDList(): boolean {
    return (this.flags & (1 << 0)) !== 0;
  }
  get HasLinkInfo(): boolean {
    return (this.flags & (1 << 1)) !== 0;
  }
  get HasName(): boolean {
    return (this.flags & (1 << 2)) !== 0;
  }
  get HasRelativePath(): boolean {
    return (this.flags & (1 << 3)) !== 0;
  }
  get HasWorkingDir(): boolean {
    return (this.flags & (1 << 4)) !== 0;
  }
  get HasArguments(): boolean {
    return (this.flags & (1 << 5)) !== 0;
  }
  get HasIconLocation(): boolean {
    return (this.flags & (1 << 6)) !== 0;
  }
  get IsUnicode(): boolean {
    return (this.flags & (1 << 7)) !== 0;
  }
  get ForceNoLinkInfo(): boolean {
    return (this.flags & (1 << 8)) !== 0;
  }
  get HasExpString(): boolean {
    return (this.flags & (1 << 9)) !== 0;
  }
  get RunInSeparateProcess(): boolean {
    return (this.flags & (1 << 10)) !== 0;
  }
  get Unused1(): boolean {
    return (this.flags & (1 << 11)) !== 0;
  }
  get HasDarwinID(): boolean {
    return (this.flags & (1 << 12)) !== 0;
  }
  get RunAsUser(): boolean {
    return (this.flags & (1 << 13)) !== 0;
  }
  get HasExpIcon(): boolean {
    return (this.flags & (1 << 14)) !== 0;
  }
  get NoPidlAlias(): boolean {
    return (this.flags & (1 << 15)) !== 0;
  }
  get Unused2(): boolean {
    return (this.flags & (1 << 16)) !== 0;
  }
  get RunWithShimLayer(): boolean {
    return (this.flags & (1 << 17)) !== 0;
  }
  get ForceNoLinkTrack(): boolean {
    return (this.flags & (1 << 18)) !== 0;
  }
  get EnableTargetMetadata(): boolean {
    return (this.flags & (1 << 19)) !== 0;
  }
  get DisableLinkPathTracking(): boolean {
    return (this.flags & (1 << 20)) !== 0;
  }
  get DisableKnownFolderTracking(): boolean {
    return (this.flags & (1 << 21)) !== 0;
  }
  get DisableKnownFolderAlias(): boolean {
    return (this.flags & (1 << 22)) !== 0;
  }
  get AllowLinkToLink(): boolean {
    return (this.flags & (1 << 23)) !== 0;
  }
  get UnaliasOnSave(): boolean {
    return (this.flags & (1 << 24)) !== 0;
  }
  get PreferEnvironmentPath(): boolean {
    return (this.flags & (1 << 25)) !== 0;
  }
  get KeepLocalIDListForUNCTarget(): boolean {
    return (this.flags & (1 << 26)) !== 0;
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
