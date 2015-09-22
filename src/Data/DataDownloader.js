import path from 'path';
import temp from 'temp';
import request from 'request';
import fs from 'fs';
import mkdirp from 'mkdirp';

class DataDownloader {
    static excludes = [
        'GeoLite2-City.mmdb'
    ];

    static download(meta, storage) {
        temp.track();

        if (DataDownloader.excludes.indexOf(meta.filename) === -1) {
            DataDownloader.downloadFile(meta.provider)
                .then(async function (file) {
                    return new Promise(async function(resolve, reject) {
                        if (meta.components) {
                            await DataDownloader.downloadComponents(file, meta.components, storage);
                        }
                        resolve(file);
                    });
                })
                .then(function (file) {
                    DataDownloader.moveFile(file, path.join(storage, meta.path, meta.filename));
                });
        }
    }

    static async downloadFile(file) {
        return new Promise((resolve, reject) => {
            temp.mkdir('geo', function (err, dirPath) {
                const dest = path.join(dirPath, path.basename(file));

                request({
                    strictSSL: false,
                    uri: file
                }, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        fs.writeFile(dest, body, function (err) {
                            if (err) {
                                return reject();
                            }

                            resolve(dest);
                        });
                    }
                })
            });
        });
    }

    static async downloadComponents(file, components, storage) {
        const data = JSON.parse(fs.readFileSync(file));

        for(var prop in components) {
            if(components.hasOwnProperty(prop)) {
                let component = components[prop];
                for (var i = 0, len = data.length; i < len; ++i) {
                    let key = data[i][component.key];
                    let provider = component.provider.replace('%s', key);
                    await DataDownloader.downloadFile(provider)
                        .then(async function (file) {
                            let filepath = component.path.replace('%s', key);
                            let filename = component.filename.replace('%s', key);
                            await DataDownloader.moveFile(file, path.join(storage, filepath, filename));
                        });
                }
            }
        }
    }

    static async moveFile(src, dest) {
        const dirname = path.dirname(dest);

        try {
            fs.lstatSync(dirname);
        } catch (err) {
            mkdirp.sync(dirname);
        }

        fs.renameSync(src, dest);
        return dest;
    }
}

export default DataDownloader;
