/**
 * 会话级别存储
 */

export default class SessionStorage {
    constructor() {
    }
    /**
     * 设置会话级别持久化数据存储
     * @param key 键名
     * @param value 键值
     */
    public static setItem(key: string, value: any) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * 根据键名获取值
     * @param key 键名
     */
    public static getItem(key: string): object | number | string {
        const valuestr = window.sessionStorage.getItem(key)!;
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
        window.sessionStorage.removeItem(key);
    }
    /**
     * 清空会话存储
     */
    public static clear() {
        window.sessionStorage.clear();
    }
}
