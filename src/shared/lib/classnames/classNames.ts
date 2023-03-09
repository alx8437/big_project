type Mods = Record<string, boolean | string>

export function classnames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(item => Boolean(item)),
    ...Object.entries(mods)
      .filter(([classname, value]) => Boolean(value))
      .map(([classname, value]) => classname)
  ]
    .join(' ')
}