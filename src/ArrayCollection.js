class ArrayCollection extends Array {
  elements = {};

  constructor(items, key, model) {
    super();
    this.key = key;
    this.model = model;
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
    return this.elements[key];
  }

  add(items) {
    if (Object.prototype.toString.call(items) === '[object Array]') {
      for (var i = 0, len = items.length; i < len; ++i) {
        this.elements[items[i].get(this.key)] = items[i];
        this.push(this.elements[items[i].get(this.key)]);
      }
      return;
    }

    if (items instanceof this.model) {
      this.elements[items.get(this.key)] = items;
      this.push(this.elements[items.get(this.key)]);
      return this;
    }

    for(var prop in items) {
      if(items.hasOwnProperty(prop)) {
        if (items[prop] instanceof this.model) {
          this.elements[prop] = items[prop];
          this.push(items[prop]);
        } else {
          this.elements[prop] = new this.model(items[prop]);
          this.push(this.elements[prop]);
        }
      }
    }
  }

  clear() {
    while (this.length) {
      this.pop();
    }
  }

  order(key) {
    this.orderByChildCollection(key.split('.'));
  }

  orderByChildCollection(keys) {
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
