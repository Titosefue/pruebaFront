import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { UsersComponent } from '../../pages/users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule
    ],
    exports: [
        HttpClientModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UsersModule { }
