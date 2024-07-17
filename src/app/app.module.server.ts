import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
// Example import statement in app.module.server.ts


import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
