/**
 * 设置图片尺寸
 * @param src 图片地址
 * @param size 图片尺寸 如 123.125，宽123px高125px
 */
export function setImgSize(src: string, size: string) {
    return src.replace('/w.h/', '/' + size + '/')
}
