import {api} from 'config';

/**
 * Fetches the publication Types
 * @returns {Promise}
 */
export function loadPresignedData(file) {
    console.log('loadPresignedData');
    return new Promise((resolve, reject) => {
        api.get(`file/upload/presigned/${file[0].name}`).then(response => {
            console.log('PUTTING file ... ');
            const options = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Content-Length': file[0].size
                }
            };

            console.log(`PUTTINGS ${file[0].name} ... `);
            api.put(response.data, file[0], options).then(result => {
                console.log('SUCCESS', result);
                resolve(result);
            }).catch(err => {
                console.log('ERROR', err);
                reject(err);
            });
        }).catch(e => {
            console.log('error', e);
            reject(e);
            throw e;
        });
    });
}
