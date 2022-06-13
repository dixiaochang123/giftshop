import request from '@/request'
export function getTree() {
    return request({
        url: `/productCatalogue/list`,
        method: 'get',
        params: ''
    })
}

export function productCatalogueList(data) {
    return request({
        url: `/productCatalogue/list`,
        method: 'POST',
        data: data
    })
}
export function productPage(data) {
    return request({
        url: `/product/page`,
        method: 'POST',
        data: data
    })
}