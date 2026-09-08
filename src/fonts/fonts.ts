import localFont from 'next/font/local';

export const ebGaramond = localFont({
  src: './eb-garamond/EBGaramond-Regular.ttf',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-eb-garamond',
  adjustFontFallback: false,
});

export const amiri = localFont({
  src: './amiri/Amiri-Regular.ttf',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-amiri',
  declarations: [{ prop: 'size-adjust', value: '114%' }],
});

export const workSans = localFont({
  src: [
    {
      path: './work-sans/WorkSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './work-sans/WorkSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './work-sans/WorkSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-work-sans',
  adjustFontFallback: false,
});

export const ibmPlexSansArabic = localFont({
  src: [
    {
      path: './ibm-plex-sans-arabic/IBMPlexSansArabic-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './ibm-plex-sans-arabic/IBMPlexSansArabic-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './ibm-plex-sans-arabic/IBMPlexSansArabic-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-ibm-plex-sans-arabic',
  adjustFontFallback: false,
  declarations: [{ prop: 'size-adjust', value: '108%' }],
});
