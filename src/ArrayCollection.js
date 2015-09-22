class ArrayCollection extends Array {
    get(key) {
        return this.elements[key];
    }

    add(items) {
        if (items instanceof this.model) {
            this.elements[items[this.key]] = items;
            this.push(this.elements[items[this.key]]);
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
        let ordered = {};

        for(let prop in this.elements) {
            let newKeys = keys.slice(0);
            if(this.elements.hasOwnProperty(prop)) {
                let value = this.getChildValueRecursive(this.elements[prop], newKeys);
                console.log(value);
            }
        }
    }

    getChildValueRecursive(item, keys) {
        const key = keys.shift();

        let value;
        if (item instanceof ArrayCollection) {
            value = item.get(key);
        } else {
            value = item[key];
        }

        if (keys.length) {
            return this.getChildValueRecursive(value, keys);
        } else {
            return value;
        }
    }
}

export default ArrayCollection;
