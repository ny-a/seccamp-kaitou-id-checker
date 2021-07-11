
interface IDList {
  name: string;
  url: string;
  isInIdRange: (id: string) => boolean;
}

const nextCamp: IDList = {
  name: 'ネクストキャンプ',
  url: 'https://www.ipa.go.jp/files/000091508.pdf',
  isInIdRange(id: string) {
    return parseInt(id) < 100;
  },
}

const secCamp: IDList = {
  name: '全国大会',
  url: 'https://www.ipa.go.jp/files/000091507.pdf',
  isInIdRange(id: string) {
    return parseInt(id) >= 100;
  },
}

export const idLists = [nextCamp, secCamp];
