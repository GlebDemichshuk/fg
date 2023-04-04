import { TranslocoLoader } from '@ngneat/transloco';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import en from '../assets/i18n/en.json';
import ru from '../assets/i18n/ru.json';
import kz from '../assets/i18n/kz.json';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpService implements TranslocoLoader {
  getTranslation(lang: string) {
    let langData;
    switch (lang) {
      case 'en':
        langData = en;
        break;
      case 'kz':
        langData = kz;
        break;
      default:
        langData = ru;
    }
    return of(langData);
  }
}
