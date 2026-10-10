import type { Metadata } from 'next';
import { amiri, ebGaramond, workSans, ibmPlexSansArabic } from '@/fonts/fonts';
import '../globals.css';
import { ThemeProvider } from '@/app/providers/theme-provider';
import { isLocale, LOCALES } from '@/i18n/config';
import { notFound } from 'next/navigation';
import LocaleSwitcher from '@/app/[locale]/_components/LocaleSwitcher';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'scenthub',
  description: 'fragrance e-commerce',
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === 'en' ? 'ltr' : 'rtl'}
      className={` ${ebGaramond.variable} ${amiri.variable} ${workSans.variable} ${ibmPlexSansArabic.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-text">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Suspense fallback={<p>Loading...</p>}>
            <LocaleSwitcher locale={locale} />
          </Suspense>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
