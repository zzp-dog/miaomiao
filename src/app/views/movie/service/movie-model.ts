/** 城市 */
export interface City {
    /** 城市id */
    id: number;
    /** 城市名称 */
    nm: string;
    /** 城市名称拼音 */
    py: string;
    /** 是否热门城市1-是，0-否 */
    isHot: number;
}

/** 正在热映电影 */
export interface NowPlayingMovie {
    /** 电影id */
    haspromotionTag: boolean;
    /** 电影海报封面 */
    img: string;
    /** 电影版本 如 3dmax */
    version: string;
    /** 电影名称 */
    nm: string;
    /** 是否首映 */
    preShow: boolean;
    /** 评分 */
    sc: number;
    /** 是否全球发售 */
    globalReleased: boolean;
    wish: number;
    /** 主演 */
    star: string;
    rt: string;
    /** 上映信息 */
    showInfo: string;
    showst: number;
    wishst: number;
}

/** 即将上映电影 */
export interface ComingMovie extends NowPlayingMovie {
    /** 上映标题 */
    comingTitle: string;
}

/** 搜索的电影 */
export interface SearhMovie extends NowPlayingMovie {
    cat: string;
    dir: string;
    dur: number;
    enm: string;
    fra: string;
    frt: string;
    movieType: string;
    onlinePlay: boolean;
    pubDesc: string;
    type: number;
    ver: string;
    vodPlay: boolean;
}
