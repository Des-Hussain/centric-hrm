import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { SearchTextfieldComponent } from "../utils/widgets/search-textfield/search-textfield.component";

const components = [LayoutComponent, HeaderComponent, SidebarComponent];

@NgModule({
    declarations: [...components],
    exports: [...components],
    imports: [
        CommonModule,
        SearchTextfieldComponent
    ]
})
export class ComponentsModule { }
