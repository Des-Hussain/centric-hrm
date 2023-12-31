import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';

const components = [LayoutComponent, HeaderComponent, SidebarComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class ComponentsModule { }
