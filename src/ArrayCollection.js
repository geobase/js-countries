class ArrayCollection extends Array {
  elements = {};

  constructor(items) {
    super();
    this.key = this.constructor.key;
    this.model = this.constructor.model;
    if (items !== undefined) {
      this.add(items);
    }
  }

  static removeAccents(string) {
    return string
      .toLowerCase()
      .replace(/[åáàãâä]/gi, 'a')
      .replace(/[éèëê]/gi, 'e')
      .replace(/[íìïî]/gi, 'i')
      .replace(/[óòöôõø]/gi, 'o')
      .replace(/[úùüû]/gi, 'u')
      .replace(/[ç]/gi, 'c')
      .replace(/[ñ]/gi, 'n');
  }

  get(key) {
    if (this.elements[key.toLowerCase()]) {
      return this.elements[key.toLowerCase()];
    }
    return null;
  }

  add(items) {
    var key;
    if (Object.prototype.toString.call(items) === '[object Array]') {
      for (var i = 0, len = items.length; i < len; ++i) {
        key = items[i].get(this.key).toLowerCase();
        this.elements[key] = items[i];
        this.push(this.elements[key]);
      }
      return;
    }

    if (items instanceof this.model) {
      key = items.get(this.key).toLowerCase();
      this.elements[key] = items;
      this.push(this.elements[key]);
      return this;
    }

    for(var prop in items) {
      if(items.hasOwnProperty(prop)) {
        key = prop.toLowerCase();
        if (items[prop] instanceof this.model) {
          this.elements[key] = items[prop];
          this.push(items[key]);
        } else {
          this.elements[key] = new this.model(items[prop]);
          this.push(this.elements[key]);
        }
      }
    }
  }

  clear() {
    while (this.length) {
      this.pop();
    }
  }

  order(keys) {
    let nonSorted = {};

    for(let prop in this.elements) {
      let newKeys = keys.slice(0);
      if(this.elements.hasOwnProperty(prop)) {
        let value = this.getChildValueRecursive(this.elements[prop], newKeys);
        nonSorted[ArrayCollection.removeAccents(value)] = this.elements[prop];
      }
    }

    let orderedKeys = [];
    for(let key in nonSorted) {
      if (nonSorted.hasOwnProperty(key)) {
        orderedKeys.push(key);
      }
    }
    orderedKeys.sort();

    this.clear();
    for (let i = 0, len = orderedKeys.length; i < len; ++i) {
      this.add(nonSorted[orderedKeys[i]]);
    }
  }

  getChildValueRecursive(item, keys) {
    const key = keys.shift();

    let value = item.get(key);
    if (keys.length) {
      return this.getChildValueRecursive(value, keys);
    } else {
      return value;
    }
  }
}

export default ArrayCollection;
