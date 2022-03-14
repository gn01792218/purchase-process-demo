import req from './http'

//取得創建order頁面的系統預設語言
export const getOrderCreatedSystemLang = () => {
    return req('get','v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f')
}

//取得payment頁面的語言API
export const getPaymentSystemLang = () => {
    return req('get','v3/d51a9d01-59b2-4a06-84a3-675b30f90ccd')
}
