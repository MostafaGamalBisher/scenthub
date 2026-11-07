import type { ProductRecord, Variant } from '@/catalog/products';

// Storefront fixtures: names identify fragrances; prices, sizes, availability,
// and seasonal groupings are illustrative. Unverified note lists are left empty.
type SampleFragrance = Pick<
  ProductRecord,
  'name' | 'house' | 'season' | 'concentration' | 'audience'
> & {
  variants: readonly Pick<
    Variant,
    'sizeMl' | 'priceHalalas' | 'availability'
  >[];
};

const fragrances: Readonly<Record<string, SampleFragrance>> = {
  'naxos': {
    name: { en: 'Naxos', ar: 'ناكسوس' },
    house: 'xerjoff',
    season: ['autumn', 'winter'],
    concentration: 'edp',
    audience: 'unisex',
    variants: [
      { sizeMl: 100, priceHalalas: 84000, availability: 'available' },
      { sizeMl: 50, priceHalalas: 60000, availability: 'low-stock' },
    ],
  },
  'bleu-de-chanel-edp': {
    name: {
      en: 'Bleu de Chanel Eau de Parfum',
      ar: 'بلو دو شانيل أو دو بارفان',
    },
    house: 'chanel',
    season: ['summer', 'spring'],
    concentration: 'edp',
    audience: 'men',
    variants: [
      { sizeMl: 100, priceHalalas: 65000, availability: 'low-stock' },
      { sizeMl: 50, priceHalalas: 41000, availability: 'available' },
    ],
  },
  'sauvage-edt': {
    name: { en: 'Sauvage Eau de Toilette', ar: 'سوفاج أو دو تواليت' },
    house: 'dior',
    season: ['summer', 'spring'],
    concentration: 'edt',
    audience: 'men',
    variants: [{ sizeMl: 60, priceHalalas: 41000, availability: 'available' }],
  },
  'reflection-man': {
    name: { en: 'Reflection Man', ar: 'رفلكشن مان' },
    house: 'amouage',
    season: ['spring', 'autumn'],
    concentration: 'edp',
    audience: 'men',
    variants: [
      { sizeMl: 100, priceHalalas: 109500, availability: 'available' },
    ],
  },
  'erba-pura': {
    name: { en: 'Erba Pura', ar: 'إيربا بورا' },
    house: 'xerjoff',
    season: ['summer', 'spring'],
    concentration: 'edp',
    audience: 'unisex',
    variants: [{ sizeMl: 100, priceHalalas: 74000, availability: 'available' }],
  },
  'delina': {
    name: { en: 'Delina', ar: 'ديلينا' },
    house: 'parfums-de-marly',
    season: ['spring', 'summer'],
    concentration: 'edp',
    audience: 'women',
    variants: [{ sizeMl: 75, priceHalalas: 98000, availability: 'low-stock' }],
  },
  'torino21': {
    name: { en: 'Torino21', ar: 'تورينو 21' },
    house: 'xerjoff',
    season: ['summer', 'spring'],
    concentration: 'edp',
    audience: 'unisex',
    variants: [
      { sizeMl: 50, priceHalalas: 53000, availability: 'available' },
      { sizeMl: 100, priceHalalas: 81000, availability: 'low-stock' },
    ],
  },
  'chanel-no-5-edp': {
    name: { en: 'N°5 Eau de Parfum', ar: 'شانيل رقم ٥ أو دو بارفان' },
    house: 'chanel',
    season: ['autumn', 'winter'],
    concentration: 'edp',
    audience: 'women',
    variants: [{ sizeMl: 50, priceHalalas: 52000, availability: 'available' }],
  },
  'miss-dior-edp': {
    name: { en: 'Miss Dior Eau de Parfum', ar: 'ميس ديور أو دو بارفان' },
    house: 'dior',
    season: ['spring'],
    concentration: 'edp',
    audience: 'women',
    variants: [{ sizeMl: 50, priceHalalas: 47000, availability: 'available' }],
  },
  'uden': {
    name: { en: 'Uden', ar: 'أودن' },
    house: 'xerjoff',
    season: ['summer', 'spring'],
    concentration: 'parfum',
    audience: 'unisex',
    variants: [
      { sizeMl: 50, priceHalalas: 79000, availability: 'out-of-stock' },
    ],
  },
  'interlude-man': {
    name: { en: 'Interlude Man', ar: 'إنترلود مان' },
    house: 'amouage',
    season: ['winter', 'autumn'],
    concentration: 'edp',
    audience: 'men',
    variants: [
      { sizeMl: 100, priceHalalas: 114000, availability: 'low-stock' },
    ],
  },
  'renaissance': {
    name: { en: 'Renaissance', ar: 'رينيسانس' },
    house: 'xerjoff',
    season: ['summer', 'spring'],
    concentration: 'edp',
    audience: 'unisex',
    variants: [{ sizeMl: 100, priceHalalas: 75000, availability: 'available' }],
  },
  'lira': {
    name: { en: 'Lira', ar: 'ليرا' },
    house: 'xerjoff',
    season: ['autumn', 'winter'],
    concentration: 'edp',
    audience: 'women',
    variants: [
      { sizeMl: 100, priceHalalas: 82000, availability: 'low-stock' },
      { sizeMl: 50, priceHalalas: 58000, availability: 'available' },
    ],
  },
  'herod': {
    name: { en: 'Herod', ar: 'هيرود' },
    house: 'parfums-de-marly',
    season: ['winter', 'autumn'],
    concentration: 'edp',
    audience: 'men',
    variants: [{ sizeMl: 125, priceHalalas: 97500, availability: 'available' }],
  },
  'chance-eau-tendre-edt': {
    name: {
      en: 'Chance Eau Tendre Eau de Toilette',
      ar: 'شانس أو تندر أو دو تواليت',
    },
    house: 'chanel',
    season: ['spring', 'summer'],
    concentration: 'edt',
    audience: 'women',
    variants: [{ sizeMl: 50, priceHalalas: 49000, availability: 'available' }],
  },
  'dama-bianca': {
    name: { en: 'Dama Bianca', ar: 'داما بيانكا' },
    house: 'xerjoff',
    season: ['spring'],
    concentration: 'edp',
    audience: 'women',
    variants: [
      { sizeMl: 100, priceHalalas: 81000, availability: 'available' },
      { sizeMl: 50, priceHalalas: 57000, availability: 'low-stock' },
    ],
  },
  'dior-homme-intense': {
    name: { en: 'Dior Homme Intense', ar: 'ديور أوم إنتنس' },
    house: 'dior',
    season: ['winter', 'autumn'],
    concentration: 'edp',
    audience: 'men',
    variants: [{ sizeMl: 100, priceHalalas: 58000, availability: 'available' }],
  },
  'guidance': {
    name: { en: 'Guidance', ar: 'غايدنس' },
    house: 'amouage',
    season: ['autumn', 'winter'],
    concentration: 'edp',
    audience: 'unisex',
    variants: [
      { sizeMl: 100, priceHalalas: 120000, availability: 'out-of-stock' },
    ],
  },
  'italica': {
    name: { en: 'Italica', ar: 'إيتاليكا' },
    house: 'xerjoff',
    season: ['winter'],
    concentration: 'edp',
    audience: 'unisex',
    variants: [{ sizeMl: 100, priceHalalas: 89000, availability: 'available' }],
  },
  'ivory-route': {
    name: { en: 'Ivory Route', ar: 'آيفوري روت' },
    house: 'xerjoff',
    season: ['winter', 'autumn'],
    concentration: 'edp',
    audience: 'unisex',
    variants: [{ sizeMl: 50, priceHalalas: 69000, availability: 'low-stock' }],
  },
  'allure-homme-sport': {
    name: {
      en: 'Allure Homme Sport Eau de Toilette',
      ar: 'ألور أوم سبورت أو دو تواليت',
    },
    house: 'chanel',
    season: ['summer'],
    concentration: 'edt',
    audience: 'men',
    variants: [{ sizeMl: 100, priceHalalas: 54000, availability: 'available' }],
  },
  'greenley': {
    name: { en: 'Greenley', ar: 'غرينلي' },
    house: 'parfums-de-marly',
    season: ['spring', 'summer'],
    concentration: 'edp',
    audience: 'unisex',
    variants: [{ sizeMl: 125, priceHalalas: 93500, availability: 'available' }],
  },
  'accento': {
    name: { en: 'Accento', ar: 'أكشنتو' },
    house: 'xerjoff',
    season: ['spring', 'autumn', 'summer'],
    concentration: 'edp',
    audience: 'unisex',
    variants: [{ sizeMl: 100, priceHalalas: 83000, availability: 'available' }],
  },
  'diorissimo-edt': {
    name: { en: 'Diorissimo Eau de Toilette', ar: 'ديوريسيمو أو دو تواليت' },
    house: 'dior',
    season: ['spring'],
    concentration: 'edt',
    audience: 'women',
    variants: [{ sizeMl: 100, priceHalalas: 59000, availability: 'low-stock' }],
  },
  'honour-woman': {
    name: { en: 'Honour Woman', ar: 'أونر وومان' },
    house: 'amouage',
    season: ['spring', 'autumn'],
    concentration: 'edp',
    audience: 'women',
    variants: [
      { sizeMl: 100, priceHalalas: 106000, availability: 'available' },
    ],
  },
  '40-knots': {
    name: { en: '40 Knots', ar: 'فورتي نوتس' },
    house: 'xerjoff',
    season: ['summer', 'autumn'],
    concentration: 'edp',
    audience: 'unisex',
    variants: [
      { sizeMl: 50, priceHalalas: 68000, availability: 'available' },
      { sizeMl: 100, priceHalalas: 96000, availability: 'low-stock' },
    ],
  },
  'dolce-amalfi': {
    name: { en: 'Dolce Amalfi', ar: 'دولتشي أمالفي' },
    house: 'xerjoff',
    season: ['autumn'],
    concentration: 'edp',
    audience: 'unisex',
    variants: [{ sizeMl: 100, priceHalalas: 76500, availability: 'available' }],
  },
};

function makeSampleProduct(id: string, sample: SampleFragrance): ProductRecord {
  const imageId = id + '-primary';
  return {
    ...sample,
    primaryImageId: imageId,
    images: [
      {
        id: imageId,
        src:
          'https://placehold.co/600x400/eee7df/302722/png?text=' +
          encodeURIComponent(sample.name.en),
        alt: {
          en: 'Sample image: ' + sample.name.en,
          ar: 'صورة توضيحية: ' + sample.name.ar,
        },
      },
    ],
    variants: sample.variants.map((variant) => ({
      ...variant,
      id: id + '-' + variant.sizeMl,
      imageId,
    })),
    notes: { top: [], heart: [], base: [] },
  };
}

export const SAMPLE_PRODUCTS: Readonly<Record<string, ProductRecord>> =
  Object.fromEntries(
    Object.entries(fragrances).map(([id, sample]) => [
      id,
      makeSampleProduct(id, sample),
    ])
  );
