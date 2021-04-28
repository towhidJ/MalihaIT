import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminThemeComponent } from './admin-theme/admin-theme.component';



@NgModule({
    declarations: [
        AdminThemeComponent
    ],
    exports: [
        AdminThemeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CoreModule { }
