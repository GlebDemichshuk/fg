import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  MinusOutline,
  CloseOutline,
  UserOutline,
  CodepenOutline,
  BookOutline,
  TeamOutline,
  ArrowRightOutline,
} from '@ant-design/icons-angular/icons';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

const icons = [MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
  MinusOutline,
  CloseOutline,
  UserOutline,
  CodepenOutline,
  BookOutline,
  TeamOutline,
  ArrowRightOutline,
];

const nzModules = [
  NzButtonModule,
  NzLayoutModule,
  NzMenuModule,
  NzTypographyModule,
];

@NgModule({
  imports: [
    NzIconModule,
    [...nzModules],
  ],
  exports: [
    NzIconModule,
    [...nzModules],
  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons },
  ],
})

export class NgZorroModule {

}
