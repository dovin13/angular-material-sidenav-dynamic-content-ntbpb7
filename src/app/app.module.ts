import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompCComponent } from './comp-c/comp-c.component';
import { FormsModule } from '@angular/forms';
/*
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { CustomSelectComponent } from './custom-dropdown/custom-select.component';
import { CustomSelectOptionComponent } from './custom-dropdown/custom-select-option.component';
import { DropdownComponent } from './custom-dropdown/dropdown.component';
*/


@NgModule({
  declarations: [AppComponent, CompAComponent, CompBComponent, CompCComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    /*
    
    OverlayModule,
    PortalModule,
    CustomSelectComponent,
    CustomSelectOptionComponent,
    DropdownComponent
    */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}