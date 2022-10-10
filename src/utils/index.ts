export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

type Member = {
  key: string,
  label: string,
  grade: number
}

export const memberList: ReadonlyArray<Member> = [
  { key: 'uemura_rina', label: '上村 莉菜', grade: 1 },
  { key: 'ozeki_rika', label: '尾関 梨香', grade: 1 },
  { key: 'koike_minami', label: '小池 美波', grade: 1 },
  { key: 'kobayashi_yui', label: '小林 由依', grade: 1 },
  { key: 'saitou_fuyuka', label: '齋藤 冬優花', grade: 1 },
  { key: 'sugai_yuka', label: '菅井 友香', grade: 1 },
  { key: 'habu_mizuho', label: '土生 瑞穂', grade: 1 },
  // 2期生
  { key: 'inoue_rina', label: '井上 梨名', grade: 2 },
  { key: 'endo_hikari', label: '遠藤 光莉', grade: 2 },
  { key: 'ozono_rei', label: '大園 玲', grade: 2 },
  { key: 'onuma_akiho', label: '大沼 晶保', grade: 2 },
  { key: 'kosaka_marino', label: '幸阪 茉里乃', grade: 2 },
  { key: 'seki_yumiko', label: '関 有美子', grade: 2 },
  { key: 'takemoto_yui', label: '武元 唯衣', grade: 2 },
  { key: 'tamura_hono', label: '田村 保乃', grade: 2 },
  { key: 'fujiyoshi_karin', label: '藤吉 夏鈴', grade: 2 },
  { key: 'masumoto_kira', label: '増本 綺良', grade: 2 },
  { key: 'matsuda_rina', label: '松田 里奈', grade: 2 },
  { key: 'morita_hikaru', label: '森田 ひかる', grade: 2 },
  { key: 'moriya_rena', label: '守屋 麗奈', grade: 2 },
  { key: 'yamasaki_ten', label: '山﨑 天', grade: 2 }
]