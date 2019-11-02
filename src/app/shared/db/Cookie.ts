/**
 * cookie存储 4K
 */
export default class Cookie {
    constructor() { }

    /**
     * 设置cookie
     * @param key 键名
     * @param value 键值
     * @param days 天数
     */
    public static setCookie(key: string, value: string, days: number) {
        const exp = new Date();
        exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
        window.document.cookie = key + '=' + escape(value) + ';expires=' + exp.toUTCString();
    }

    /**
     * 根据键名获取值
     * @param key 键名
     */
    public static getCookie(key: string) {
        let arr;
        const reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
        // tslint:disable-next-line: no-conditional-assignment
        if (arr = document.cookie.match(reg)) {
            const valuestr = unescape(arr[2]);
            try {
                return JSON.parse(valuestr);
            } catch {
                return valuestr;
            }
        }
        return null;
    }

    /**
     * 根据键名删除键值
     * @param key 键名
     */
    public static removeCookie(key: string) {
        const value = Cookie.getCookie(key);
        if (value !== null) {
            const exp = new Date();
            exp.setTime(exp.getTime() - 1000);
            window.document.cookie = key + '=' + escape(value) + ';expires=' + exp.toUTCString();
        }
    }
}
