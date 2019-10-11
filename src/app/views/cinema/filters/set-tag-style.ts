export function setTagStyle(key: string) {
    const map: {[key: string]: string} = {
        allowRefund: 'bl',
        buyout: 'or',
        cityCardTag: 'bl',
        deal: 'or',
        endorse: 'bl',
        sell: 'bl',
        snack: 'or',
        vipTag: 'or'
    };
    return map[key];
}
