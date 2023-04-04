import {
  TRANSLOCO_CONFIG, TRANSLOCO_LOADER, translocoConfig, TranslocoModule,
} from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { TranslocoHttpService } from './transloco-http.service';

@NgModule({
  exports: [TranslocoModule],
  imports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'ru', 'kz'],
        defaultLang: 'ru',
        fallbackLang: 'ru',
        reRenderOnLangChange: true,
        prodMode: environment.production,
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpService },
  ],
})
export class TranslocoRootModule {}
