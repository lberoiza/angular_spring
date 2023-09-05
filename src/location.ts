import {registerLocaleData} from "@angular/common";
import localeEs from '@angular/common/locales/es'
import localeDe from '@angular/common/locales/de'


export const LOCALE = {
  DE: 'de',
  ES: 'es',
  EN: 'en-US'
};

export default function initializeLocale(): void{
  registerLocaleData(localeEs, LOCALE.ES);
  registerLocaleData(localeDe, LOCALE.DE);
}
