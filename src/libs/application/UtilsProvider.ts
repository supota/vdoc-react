class UtilsProvider {
  static getRandamNumArray = <T>(array: T[], num: number): T[] => {
    const a = array;
    const t: T[] = [];
    const r = [];
    let l = a.length;
    let n = num < l ? num : l;
    while (n-- > 0) {
      const i = (Math.random() * l) | 0;
      r[n] = t[i] || a[i];
      --l;
      t[i] = t[l] || a[l];
    }
    return r;
  };
}

export { UtilsProvider };
