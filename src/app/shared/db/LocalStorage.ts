/**
 * 本地持久化存储
 */
export default class LocalStorage {
    constructor() {
    }
    /**
     * 设置本地持久化数据存储
     * @param key 键名
     * @param value 键值
     */
    public static setItem(key: string, value: any) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * 根据键名获取值
     * @param key 键名
     */
    public static getItem(key: string): object | number | string {
        const valuestr = window.localStorage.getItem(key)!;
        try {
            return JSON.parse(valuestr);
        } catch {
            return valuestr;
        }
    }
    /**
     * 根据键名清除值
     * @param key 键名
     */
    public static removeItem(key: string) {
        window.localStorage.removeItem(key);
    }
    /**
     * 清空本地存储
     */
    public static clear() {
        window.localStorage.clear();
    }
}
