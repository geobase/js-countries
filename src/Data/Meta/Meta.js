class Meta {
    constructor(attributes) {
        for(var prop in attributes) {
            if(attributes.hasOwnProperty(prop)) {
                this[prop] = attributes[prop];
            }
        }
    }
}


export default Meta;
