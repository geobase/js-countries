import request from 'request';
import Meta from './Meta';

class MetaMapper {
    static loadCollection() {
        return new Promise((resolve, reject) => {
            request({
                strictSSL: false,
                uri: 'https://smartdataprovider.com/meta.json'
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve(MetaMapper.mapCollection(JSON.parse(body)));
                }
            })
        });
    }

    static mapCollection(collection) {
        let returnValue = [];
        for (var i = 0, len = collection.length; i < len; ++i) {
            returnValue.push(new Meta(collection[i]));
        }
        return returnValue;
    }
}

export default MetaMapper;
