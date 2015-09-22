import MetaMapper from "./Meta/MetaMapper";
import path from 'path';
import DataDownloader from './DataDownloader';

class DataUpdater {
    static update() {
        const storage = path.join(__dirname, '..', '..', 'storage');

        return new Promise((resolve, reject) => {
            MetaMapper.loadCollection()
                .then(function (collection) {
                    for (var i = 0, len = collection.length; i < len; ++i) {
                        DataDownloader.download(collection[i], storage);
                    }
                });
        });
    }
}

export default DataUpdater;
