import { getRequestConfig } from "next-intl/server";

const DEFAULT_LOCALE = "pt-BR" as const;
const SUPPORTED_LOCALES = [DEFAULT_LOCALE] as const;

function isSupportedLocale(locale: string | undefined): locale is (typeof SUPPORTED_LOCALES)[number] {
  return SUPPORTED_LOCALES.includes(locale as (typeof SUPPORTED_LOCALES)[number]);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale = isSupportedLocale(requestedLocale) ? requestedLocale : DEFAULT_LOCALE;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
