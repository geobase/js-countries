class Model {
  attributes = {};

  constructor(attributes) {
    this._model = this.constructor.model ? this.constructor.model : {};
    this.set(attributes);
  }

  set(attributes) {
    var newAttributes = {};
    for(let prop in attributes) {
      if(attributes.hasOwnProperty(prop)) {
        if (this.model[prop] !== undefined) {
          newAttributes[prop] = new this.model[prop];
          newAttributes[prop].add(attributes[prop]);
        } else {
          newAttributes[prop] = attributes[prop];
        }
      }
    }
    for(let prop in newAttributes) {
      if(newAttributes.hasOwnProperty(prop)) {
        this.attributes[prop] = newAttributes[prop];
      }
    }
  }

  get(attribute, option) {
    var funcName = 'get' + attribute;

    if (this[attribute] !== undefined) {
      return this[attribute];
    } else if (typeof this[funcName] === 'function') {
      return this[funcName](option);
    }

    return this.attributes[attribute] !== undefined ? this.attributes[attribute] : null;
  }

  get model() {
    return this._model;
  }
}

export default Model;
