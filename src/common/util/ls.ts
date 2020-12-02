class Store {
  public store: any = window.localStorage;
  public prefix: string = "bk_";
  public set(key: string, value: string, callback = function() {}) {
    let val: string;
    try {
      val = JSON.stringify(value);
    } catch (e) {
      val = value;
    }

    this.store.setItem(this.prefix + key, val);

    callback();
  }
  public get(key: string) {
    if (!key) {
      throw new Error("没有找到key。");
    }
    if (typeof key === "object") {
      throw new Error("key不能是一个对象。");
    }
    const value = this.store.getItem(this.prefix + key);
    let val: any;
    if (value !== null) {
      try {
        val = JSON.parse(value);
      } catch (e) {
        val = value;
      }
    }
    return val;
  }
  public remove(key: string) {
    this.store.removeItem(this.prefix + key);
  }
}
export default new Store();
