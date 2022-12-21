import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { IntlProvider } from 'react-intl';
import baskMessages from '../constants/baskMessages';
import spanishMessages from '../constants/spanishMessages';

export enum LANGUAGES {
  es = 'es',
  eu = 'eu',
}
export interface IntlContextProps {
  locale: LANGUAGES;
  setLocale: Dispatch<SetStateAction<LANGUAGES>>;
}

const IntlContext = createContext<IntlContextProps>({
  locale: LANGUAGES.es,
  setLocale: () => {},
});
export function IntlContextProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<LANGUAGES>(LANGUAGES.es);

  const messages = useMemo(() => {
    switch (locale) {
      case LANGUAGES.eu:
        return baskMessages;
      default:
        return spanishMessages;
    }
  }, [locale]);

  const value = useMemo(() => {
    return {
      locale,
      setLocale,
    };
  }, [locale]);

  return (
    <IntlContext.Provider value={value}>
      <IntlProvider messages={messages} locale="fr" defaultLocale="en">
        {children}
      </IntlProvider>
    </IntlContext.Provider>
  );
}

export const useIntlProvider = () => useContext(IntlContext);
