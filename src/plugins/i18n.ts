import { createI18n } from 'vue-i18n'
// 載入語言
import tw from '../lang/tw.json'
import en from '../lang/en.json'

const i18n = createI18n({
    legacy: false,
    locale: 'tw',           // 設定語言
    fallbackLocale: 'tw',   // 若選擇的語言缺少翻譯則退回的語言
    globalInjection: true,
    messages: {
        tw,
        en
    }
})
export default i18n