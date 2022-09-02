import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/585a412b74033375cc2de781f0d4bffd/_jingdong',
    timeout: 10000
})

export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, { params }).then((Response) => {
            resolve(Response.data)
        }, err => {
            reject(err)
        })
    })
}
export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((Response) => {
            resolve(Response.data)
        }, err => {
            reject(err)
        })
    })
}