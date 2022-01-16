export {};

// Record<K, T>

type Prefectures = 'Tokyo' | 'Chiba' | 'Kanagawa' | 'Saitama';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const Covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 2000 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 1000 },
  Kanagawa: { kanji_name: '神奈川', confirmed_cases: 1500 },
  Saitama: { kanji_name: '埼玉', confirmed_cases: 500 },
};
