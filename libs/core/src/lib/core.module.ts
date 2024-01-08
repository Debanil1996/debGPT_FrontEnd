import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { coreRoutes } from './lib.routes';
import { LayoutComponent } from './layout/layout.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HeaderComponent } from './header/header.component';
import { GptBaseComponent } from './gpt-base/gpt-base.component';
import { HttpClientModule } from '@angular/common/http';
import { TypewritingDirective } from './typewriting.directive';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [LayoutComponent, GptBaseComponent, TypewritingDirective],
  exports: [LayoutComponent, GptBaseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(coreRoutes),
    RouterModule,
    ButtonModule,
    InputTextModule,
    HeaderComponent,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot(),
  ],
})
export class CoreModule {}
