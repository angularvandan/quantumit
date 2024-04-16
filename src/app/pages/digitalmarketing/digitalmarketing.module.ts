import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalmarketingRoutingModule } from './digitalmarketing-routing.module';
import { ServicesComponent } from './services/services.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { FormComponent } from 'src/app/components/form/form.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CasestudyComponent } from './casestudy/casestudy.component';


@NgModule({
  declarations: [
    DigitalMarketingComponent,
    ServicesComponent,
    CasestudyComponent,

  ],
  imports: [
    SharedModule,
    CommonModule,
    DigitalmarketingRoutingModule
  ]
})
export class DigitalmarketingModule { }