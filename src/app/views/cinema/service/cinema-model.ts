export interface Cinema {
    id: number;
    mark: number;
    sellPrice: string;
    addr: string;
    distance: string;
    tag: Tag;
    promotion: {cardPromotionTag: string};
}

interface Tag {
    allowRefund: number;
    buyout: number;
    cityCardTag: number;
    deal: number;
    endorse: number;
    hallTypeVOList: any[];
    sell: number;
    snack: number;
    vipTag: number;
}
