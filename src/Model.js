class Model {
  attributes = {};

  set(attributes) {
    var newAttributes = {};
    for(let prop in attributes) {
      if(attributes.hasOwnProperty(prop)) {
        if (typeof this.model !== 'undefined' && typeof this.model[prop] !== 'undefined') {
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

  get(attribute) {
    if (typeof this[attribute] === 'function') {
      return this[attribute]();
    }

    return this.attributes[attribute] !== undefined ? this.attributes[attribute] : null;
  }
}

export default Model;
