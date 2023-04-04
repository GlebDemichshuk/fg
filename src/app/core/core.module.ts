import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {HeaderComponent} from "./components/header/header.component";
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {ContentComponent} from "./components/content/content.component";

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, SideBarComponent, ContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class CoreModule { }
