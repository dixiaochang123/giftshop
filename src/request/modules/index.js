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
export function productOnlineDesign(data) {
    return request({
        url: `/productOnlineDesign/list`,
        method: 'POST',
        data: data
    })
}
export function productOrderAdd(data) {
    return request({
        url: `/productOrder/add`,
        method: 'POST',
        data: data
    })
}
export function productOrderUpdate(data) {
    return request({
        url: `/productOrder/update`,
        method: 'POST',
        data: data
    })
}
export function productOnlineDesignFindTwoList(data) {
    return request({
        url: `/productOnlineDesign/findTwoList`,
        method: 'POST',
        data: data
    })
}
export function uploadFile(data) {
    return request({
        url: `/hzld-file/file/uploadFile`,
        method: 'POST',
        data: data
    })
}
export function productUserFiles(data) {
    return request({
        url: `/productUserFiles/add`,
        method: 'POST',
        data: data
    })
}