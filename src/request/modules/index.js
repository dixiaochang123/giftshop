import request from '@/request'

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
export function productMaterialPage(data) {
    return request({
        url: `/productMaterial/page`,
        method: 'POST',
        data: data
    })
}
export function productSizePage(data) {
    return request({
        url: `/productSize/page`,
        method: 'POST',
        data: data
    })
}
export function productCraftPage(data) {
    return request({
        url: `/productCraft/page`,
        method: 'POST',
        data: data
    })
}
export function productPackagePage(data) {
    return request({
        url: `/productPackage/page`,
        method: 'POST',
        data: data
    })
}