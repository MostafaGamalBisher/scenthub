import type { ProductRecord } from '@/catalog/products';

export const PRODUCTS: Readonly<Record<string, ProductRecord>> = {
  'alexandria-ii': {
    name: { en: 'Alexandria II', ar: 'أليكساندريا 2' },
    house: 'xerjoff',
    concentration: 'parfum',
    audience: 'men',
    year: 2000,
    season: ['winter'],
    images: [
      {
        id: 'alex-1',
        src: 'https://placehold.co/600x400/png?text=alex-1',
        alt: { en: 'Placeholder 2 image', ar: 'صور مؤقتة عطر اليكسندريا 2' },
      },
      {
        id: 'alex-2',
        src: 'https://placehold.co/600x400/png?text=alex-2',
        alt: { en: 'Placeholder 2 image', ar: 'صور مؤقتة عطر اليكسندريا 2' },
      },
    ],
    primaryImageId: 'alex-1',
    variants: [
      {
        id: 'alex-100',
        sizeMl: 100,
        priceHalalas: 200000,
        availability: 'available',
        imageId: 'alex-1',
      },
      {
        id: 'alex-50',
        sizeMl: 50,
        priceHalalas: 100000,
        availability: 'low-stock',
      },
    ],
    notes: { top: ['lemon'], heart: ['jasmine'], base: ['vanilla'] },
  },

  'layton': {
    name: { en: 'Layton', ar: 'ليتون' },
    house: 'parfums-de-marly',
    concentration: 'edp',
    audience: 'men',
    year: 2000,
    season: ['spring'],
    images: [
      {
        id: 'lyton-1',
        src: 'https://placehold.co/600x400/png?text=lyton-1',
        alt: { en: 'Placeholder 2 image', ar: 'صورة مؤقتة عطر ليتون' },
      },
      {
        id: 'lyton-2',
        src: 'https://placehold.co/600x400/png?text=lyton-2',
        alt: { en: 'Placeholder 2 image', ar: 'صورة مؤقتة عطر ليتون' },
      },
    ],
    primaryImageId: 'lyton-1',
    variants: [
      {
        id: 'layt-100',
        sizeMl: 100,
        priceHalalas: 150000,
        availability: 'available',
      },
      {
        id: 'layt-50',
        sizeMl: 50,
        priceHalalas: 75000,
        availability: 'out-of-stock',
      },
    ],
    notes: { top: ['lemon'], heart: ['jasmine'], base: ['vanilla'] },
  },

  naxos: {
    name: { en: 'Naxos', ar: 'ناكسوس' },
    house: 'xerjoff',
    concentration: 'edp',
    audience: 'unisex',
    season: ['autumn', 'winter'],
    images: [
      {
        id: 'naxos-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Naxos',
        alt: { en: 'Sample image: Naxos', ar: 'صورة توضيحية: ناكسوس' },
      },
    ],
    primaryImageId: 'naxos-primary',
    variants: [
      {
        id: 'naxos-100',
        sizeMl: 100,
        priceHalalas: 84000,
        availability: 'available',
        imageId: 'naxos-primary',
      },
      {
        id: 'naxos-50',
        sizeMl: 50,
        priceHalalas: 60000,
        availability: 'low-stock',
        imageId: 'naxos-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  'bleu-de-chanel-edp': {
    name: {
      en: 'Bleu de Chanel Eau de Parfum',
      ar: 'بلو دو شانيل أو دو بارفان',
    },
    house: 'chanel',
    concentration: 'edp',
    audience: 'men',
    season: ['summer', 'spring'],
    images: [
      {
        id: 'bleu-de-chanel-edp-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Bleu%20de%20Chanel%20Eau%20de%20Parfum',
        alt: {
          en: 'Sample image: Bleu de Chanel Eau de Parfum',
          ar: 'صورة توضيحية: بلو دو شانيل أو دو بارفان',
        },
      },
    ],
    primaryImageId: 'bleu-de-chanel-edp-primary',
    variants: [
      {
        id: 'bleu-de-chanel-edp-100',
        sizeMl: 100,
        priceHalalas: 65000,
        availability: 'low-stock',
        imageId: 'bleu-de-chanel-edp-primary',
      },
      {
        id: 'bleu-de-chanel-edp-50',
        sizeMl: 50,
        priceHalalas: 41000,
        availability: 'available',
        imageId: 'bleu-de-chanel-edp-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  'sauvage-edt': {
    name: { en: 'Sauvage Eau de Toilette', ar: 'سوفاج أو دو تواليت' },
    house: 'dior',
    concentration: 'edt',
    audience: 'men',
    season: ['summer', 'spring'],
    images: [
      {
        id: 'sauvage-edt-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Sauvage%20Eau%20de%20Toilette',
        alt: {
          en: 'Sample image: Sauvage Eau de Toilette',
          ar: 'صورة توضيحية: سوفاج أو دو تواليت',
        },
      },
    ],
    primaryImageId: 'sauvage-edt-primary',
    variants: [
      {
        id: 'sauvage-edt-60',
        sizeMl: 60,
        priceHalalas: 41000,
        availability: 'available',
        imageId: 'sauvage-edt-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  'reflection-man': {
    name: { en: 'Reflection Man', ar: 'رفلكشن مان' },
    house: 'amouage',
    concentration: 'edp',
    audience: 'men',
    season: ['spring', 'autumn'],
    images: [
      {
        id: 'reflection-man-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Reflection%20Man',
        alt: {
          en: 'Sample image: Reflection Man',
          ar: 'صورة توضيحية: رفلكشن مان',
        },
      },
    ],
    primaryImageId: 'reflection-man-primary',
    variants: [
      {
        id: 'reflection-man-100',
        sizeMl: 100,
        priceHalalas: 109500,
        availability: 'available',
        imageId: 'reflection-man-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  'erba-pura': {
    name: { en: 'Erba Pura', ar: 'إيربا بورا' },
    house: 'xerjoff',
    concentration: 'edp',
    audience: 'unisex',
    season: ['summer', 'spring'],
    images: [
      {
        id: 'erba-pura-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Erba%20Pura',
        alt: { en: 'Sample image: Erba Pura', ar: 'صورة توضيحية: إيربا بورا' },
      },
    ],
    primaryImageId: 'erba-pura-primary',
    variants: [
      {
        id: 'erba-pura-100',
        sizeMl: 100,
        priceHalalas: 74000,
        availability: 'available',
        imageId: 'erba-pura-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  delina: {
    name: { en: 'Delina', ar: 'ديلينا' },
    house: 'parfums-de-marly',
    concentration: 'edp',
    audience: 'women',
    season: ['spring', 'summer'],
    images: [
      {
        id: 'delina-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Delina',
        alt: { en: 'Sample image: Delina', ar: 'صورة توضيحية: ديلينا' },
      },
    ],
    primaryImageId: 'delina-primary',
    variants: [
      {
        id: 'delina-75',
        sizeMl: 75,
        priceHalalas: 98000,
        availability: 'low-stock',
        imageId: 'delina-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  torino21: {
    name: { en: 'Torino21', ar: 'تورينو 21' },
    house: 'xerjoff',
    concentration: 'edp',
    audience: 'unisex',
    season: ['summer', 'spring'],
    images: [
      {
        id: 'torino21-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Torino21',
        alt: { en: 'Sample image: Torino21', ar: 'صورة توضيحية: تورينو 21' },
      },
    ],
    primaryImageId: 'torino21-primary',
    variants: [
      {
        id: 'torino21-50',
        sizeMl: 50,
        priceHalalas: 53000,
        availability: 'available',
        imageId: 'torino21-primary',
      },
      {
        id: 'torino21-100',
        sizeMl: 100,
        priceHalalas: 81000,
        availability: 'low-stock',
        imageId: 'torino21-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  'chanel-no-5-edp': {
    name: { en: 'N°5 Eau de Parfum', ar: 'شانيل رقم ٥ أو دو بارفان' },
    house: 'chanel',
    concentration: 'edp',
    audience: 'women',
    season: ['autumn', 'winter'],
    images: [
      {
        id: 'chanel-no-5-edp-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=N%C2%B05%20Eau%20de%20Parfum',
        alt: {
          en: 'Sample image: N°5 Eau de Parfum',
          ar: 'صورة توضيحية: شانيل رقم ٥ أو دو بارفان',
        },
      },
    ],
    primaryImageId: 'chanel-no-5-edp-primary',
    variants: [
      {
        id: 'chanel-no-5-edp-50',
        sizeMl: 50,
        priceHalalas: 52000,
        availability: 'available',
        imageId: 'chanel-no-5-edp-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  'miss-dior-edp': {
    name: { en: 'Miss Dior Eau de Parfum', ar: 'ميس ديور أو دو بارفان' },
    house: 'dior',
    concentration: 'edp',
    audience: 'women',
    season: ['spring'],
    images: [
      {
        id: 'miss-dior-edp-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Miss%20Dior%20Eau%20de%20Parfum',
        alt: {
          en: 'Sample image: Miss Dior Eau de Parfum',
          ar: 'صورة توضيحية: ميس ديور أو دو بارفان',
        },
      },
    ],
    primaryImageId: 'miss-dior-edp-primary',
    variants: [
      {
        id: 'miss-dior-edp-50',
        sizeMl: 50,
        priceHalalas: 47000,
        availability: 'available',
        imageId: 'miss-dior-edp-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  uden: {
    name: { en: 'Uden', ar: 'أودن' },
    house: 'xerjoff',
    concentration: 'parfum',
    audience: 'unisex',
    season: ['summer', 'spring'],
    images: [
      {
        id: 'uden-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Uden',
        alt: { en: 'Sample image: Uden', ar: 'صورة توضيحية: أودن' },
      },
    ],
    primaryImageId: 'uden-primary',
    variants: [
      {
        id: 'uden-50',
        sizeMl: 50,
        priceHalalas: 79000,
        availability: 'out-of-stock',
        imageId: 'uden-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  'interlude-man': {
    name: { en: 'Interlude Man', ar: 'إنترلود مان' },
    house: 'amouage',
    concentration: 'edp',
    audience: 'men',
    season: ['winter', 'autumn'],
    images: [
      {
        id: 'interlude-man-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Interlude%20Man',
        alt: {
          en: 'Sample image: Interlude Man',
          ar: 'صورة توضيحية: إنترلود مان',
        },
      },
    ],
    primaryImageId: 'interlude-man-primary',
    variants: [
      {
        id: 'interlude-man-100',
        sizeMl: 100,
        priceHalalas: 114000,
        availability: 'low-stock',
        imageId: 'interlude-man-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  renaissance: {
    name: { en: 'Renaissance', ar: 'رينيسانس' },
    house: 'xerjoff',
    concentration: 'edp',
    audience: 'unisex',
    season: ['summer', 'spring'],
    images: [
      {
        id: 'renaissance-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Renaissance',
        alt: { en: 'Sample image: Renaissance', ar: 'صورة توضيحية: رينيسانس' },
      },
    ],
    primaryImageId: 'renaissance-primary',
    variants: [
      {
        id: 'renaissance-100',
        sizeMl: 100,
        priceHalalas: 75000,
        availability: 'available',
        imageId: 'renaissance-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  lira: {
    name: { en: 'Lira', ar: 'ليرا' },
    house: 'xerjoff',
    concentration: 'edp',
    audience: 'women',
    season: ['autumn', 'winter'],
    images: [
      {
        id: 'lira-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Lira',
        alt: { en: 'Sample image: Lira', ar: 'صورة توضيحية: ليرا' },
      },
    ],
    primaryImageId: 'lira-primary',
    variants: [
      {
        id: 'lira-100',
        sizeMl: 100,
        priceHalalas: 82000,
        availability: 'low-stock',
        imageId: 'lira-primary',
      },
      {
        id: 'lira-50',
        sizeMl: 50,
        priceHalalas: 58000,
        availability: 'available',
        imageId: 'lira-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  herod: {
    name: { en: 'Herod', ar: 'هيرود' },
    house: 'parfums-de-marly',
    concentration: 'edp',
    audience: 'men',
    season: ['winter', 'autumn'],
    images: [
      {
        id: 'herod-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Herod',
        alt: { en: 'Sample image: Herod', ar: 'صورة توضيحية: هيرود' },
      },
    ],
    primaryImageId: 'herod-primary',
    variants: [
      {
        id: 'herod-125',
        sizeMl: 125,
        priceHalalas: 97500,
        availability: 'available',
        imageId: 'herod-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  'chance-eau-tendre-edt': {
    name: {
      en: 'Chance Eau Tendre Eau de Toilette',
      ar: 'شانس أو تندر أو دو تواليت',
    },
    house: 'chanel',
    concentration: 'edt',
    audience: 'women',
    season: ['spring', 'summer'],
    images: [
      {
        id: 'chance-eau-tendre-edt-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Chance%20Eau%20Tendre%20Eau%20de%20Toilette',
        alt: {
          en: 'Sample image: Chance Eau Tendre Eau de Toilette',
          ar: 'صورة توضيحية: شانس أو تندر أو دو تواليت',
        },
      },
    ],
    primaryImageId: 'chance-eau-tendre-edt-primary',
    variants: [
      {
        id: 'chance-eau-tendre-edt-50',
        sizeMl: 50,
        priceHalalas: 49000,
        availability: 'available',
        imageId: 'chance-eau-tendre-edt-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  'dama-bianca': {
    name: { en: 'Dama Bianca', ar: 'داما بيانكا' },
    house: 'xerjoff',
    concentration: 'edp',
    audience: 'women',
    season: ['spring'],
    images: [
      {
        id: 'dama-bianca-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Dama%20Bianca',
        alt: {
          en: 'Sample image: Dama Bianca',
          ar: 'صورة توضيحية: داما بيانكا',
        },
      },
    ],
    primaryImageId: 'dama-bianca-primary',
    variants: [
      {
        id: 'dama-bianca-100',
        sizeMl: 100,
        priceHalalas: 81000,
        availability: 'available',
        imageId: 'dama-bianca-primary',
      },
      {
        id: 'dama-bianca-50',
        sizeMl: 50,
        priceHalalas: 57000,
        availability: 'low-stock',
        imageId: 'dama-bianca-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  'dior-homme-intense': {
    name: { en: 'Dior Homme Intense', ar: 'ديور أوم إنتنس' },
    house: 'dior',
    concentration: 'edp',
    audience: 'men',
    season: ['winter', 'autumn'],
    images: [
      {
        id: 'dior-homme-intense-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Dior%20Homme%20Intense',
        alt: {
          en: 'Sample image: Dior Homme Intense',
          ar: 'صورة توضيحية: ديور أوم إنتنس',
        },
      },
    ],
    primaryImageId: 'dior-homme-intense-primary',
    variants: [
      {
        id: 'dior-homme-intense-100',
        sizeMl: 100,
        priceHalalas: 58000,
        availability: 'available',
        imageId: 'dior-homme-intense-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  guidance: {
    name: { en: 'Guidance', ar: 'غايدنس' },
    house: 'amouage',
    concentration: 'edp',
    audience: 'unisex',
    season: ['autumn', 'winter'],
    images: [
      {
        id: 'guidance-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Guidance',
        alt: { en: 'Sample image: Guidance', ar: 'صورة توضيحية: غايدنس' },
      },
    ],
    primaryImageId: 'guidance-primary',
    variants: [
      {
        id: 'guidance-100',
        sizeMl: 100,
        priceHalalas: 120000,
        availability: 'out-of-stock',
        imageId: 'guidance-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  italica: {
    name: { en: 'Italica', ar: 'إيتاليكا' },
    house: 'xerjoff',
    concentration: 'edp',
    audience: 'unisex',
    season: ['winter'],
    images: [
      {
        id: 'italica-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Italica',
        alt: { en: 'Sample image: Italica', ar: 'صورة توضيحية: إيتاليكا' },
      },
    ],
    primaryImageId: 'italica-primary',
    variants: [
      {
        id: 'italica-100',
        sizeMl: 100,
        priceHalalas: 89000,
        availability: 'available',
        imageId: 'italica-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  'ivory-route': {
    name: { en: 'Ivory Route', ar: 'آيفوري روت' },
    house: 'xerjoff',
    concentration: 'edp',
    audience: 'unisex',
    season: ['winter', 'autumn'],
    images: [
      {
        id: 'ivory-route-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Ivory%20Route',
        alt: {
          en: 'Sample image: Ivory Route',
          ar: 'صورة توضيحية: آيفوري روت',
        },
      },
    ],
    primaryImageId: 'ivory-route-primary',
    variants: [
      {
        id: 'ivory-route-50',
        sizeMl: 50,
        priceHalalas: 69000,
        availability: 'low-stock',
        imageId: 'ivory-route-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  'allure-homme-sport': {
    name: {
      en: 'Allure Homme Sport Eau de Toilette',
      ar: 'ألور أوم سبورت أو دو تواليت',
    },
    house: 'chanel',
    concentration: 'edt',
    audience: 'men',
    season: ['summer'],
    images: [
      {
        id: 'allure-homme-sport-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Allure%20Homme%20Sport%20Eau%20de%20Toilette',
        alt: {
          en: 'Sample image: Allure Homme Sport Eau de Toilette',
          ar: 'صورة توضيحية: ألور أوم سبورت أو دو تواليت',
        },
      },
    ],
    primaryImageId: 'allure-homme-sport-primary',
    variants: [
      {
        id: 'allure-homme-sport-100',
        sizeMl: 100,
        priceHalalas: 54000,
        availability: 'available',
        imageId: 'allure-homme-sport-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  greenley: {
    name: { en: 'Greenley', ar: 'غرينلي' },
    house: 'parfums-de-marly',
    concentration: 'edp',
    audience: 'unisex',
    season: ['spring', 'summer'],
    images: [
      {
        id: 'greenley-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Greenley',
        alt: { en: 'Sample image: Greenley', ar: 'صورة توضيحية: غرينلي' },
      },
    ],
    primaryImageId: 'greenley-primary',
    variants: [
      {
        id: 'greenley-125',
        sizeMl: 125,
        priceHalalas: 93500,
        availability: 'available',
        imageId: 'greenley-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  accento: {
    name: { en: 'Accento', ar: 'أكشنتو' },
    house: 'xerjoff',
    concentration: 'edp',
    audience: 'unisex',
    season: ['spring', 'autumn', 'summer'],
    images: [
      {
        id: 'accento-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Accento',
        alt: { en: 'Sample image: Accento', ar: 'صورة توضيحية: أكشنتو' },
      },
    ],
    primaryImageId: 'accento-primary',
    variants: [
      {
        id: 'accento-100',
        sizeMl: 100,
        priceHalalas: 83000,
        availability: 'available',
        imageId: 'accento-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  'diorissimo-edt': {
    name: { en: 'Diorissimo Eau de Toilette', ar: 'ديوريسيمو أو دو تواليت' },
    house: 'dior',
    concentration: 'edt',
    audience: 'women',
    season: ['spring'],
    images: [
      {
        id: 'diorissimo-edt-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Diorissimo%20Eau%20de%20Toilette',
        alt: {
          en: 'Sample image: Diorissimo Eau de Toilette',
          ar: 'صورة توضيحية: ديوريسيمو أو دو تواليت',
        },
      },
    ],
    primaryImageId: 'diorissimo-edt-primary',
    variants: [
      {
        id: 'diorissimo-edt-100',
        sizeMl: 100,
        priceHalalas: 59000,
        availability: 'low-stock',
        imageId: 'diorissimo-edt-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  'honour-woman': {
    name: { en: 'Honour Woman', ar: 'أونر وومان' },
    house: 'amouage',
    concentration: 'edp',
    audience: 'women',
    season: ['spring', 'autumn'],
    images: [
      {
        id: 'honour-woman-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Honour%20Woman',
        alt: {
          en: 'Sample image: Honour Woman',
          ar: 'صورة توضيحية: أونر وومان',
        },
      },
    ],
    primaryImageId: 'honour-woman-primary',
    variants: [
      {
        id: 'honour-woman-100',
        sizeMl: 100,
        priceHalalas: 106000,
        availability: 'available',
        imageId: 'honour-woman-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  '40-knots': {
    name: { en: '40 Knots', ar: 'فورتي نوتس' },
    house: 'xerjoff',
    concentration: 'edp',
    audience: 'unisex',
    season: ['summer', 'autumn'],
    images: [
      {
        id: '40-knots-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=40%20Knots',
        alt: { en: 'Sample image: 40 Knots', ar: 'صورة توضيحية: فورتي نوتس' },
      },
    ],
    primaryImageId: '40-knots-primary',
    variants: [
      {
        id: '40-knots-50',
        sizeMl: 50,
        priceHalalas: 68000,
        availability: 'available',
        imageId: '40-knots-primary',
      },
      {
        id: '40-knots-100',
        sizeMl: 100,
        priceHalalas: 96000,
        availability: 'low-stock',
        imageId: '40-knots-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },

  'dolce-amalfi': {
    name: { en: 'Dolce Amalfi', ar: 'دولتشي أمالفي' },
    house: 'xerjoff',
    concentration: 'edp',
    audience: 'unisex',
    season: ['autumn'],
    images: [
      {
        id: 'dolce-amalfi-primary',
        src: 'https://placehold.co/600x400/eee7df/302722/png?text=Dolce%20Amalfi',
        alt: {
          en: 'Sample image: Dolce Amalfi',
          ar: 'صورة توضيحية: دولتشي أمالفي',
        },
      },
    ],
    primaryImageId: 'dolce-amalfi-primary',
    variants: [
      {
        id: 'dolce-amalfi-100',
        sizeMl: 100,
        priceHalalas: 76500,
        availability: 'available',
        imageId: 'dolce-amalfi-primary',
      },
    ],
    notes: { top: [], heart: [], base: [] },
  },
};
