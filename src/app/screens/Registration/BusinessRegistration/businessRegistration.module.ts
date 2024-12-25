// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { Business2Component } from './business2/business2.component';
// import { Business3Component } from './business3/business3.component';
// import { Business1Component } from './business1/business1.component';
// import { Business1RoutingModule } from './business1/business1-routing.module';
// import { Business2RoutingModule } from './business2/business2-routing.module';
// import { Business3RoutingModule } from './business3/business3-routing.module';
// import { RouterModule, Routes } from '@angular/router';
// import { BusinessRegistrationRoutingModule } from './businessRegistration-routing.module';

// const routes: Routes = [
//   {
//     path: "business1",
//     loadChildren: () =>
//       import("./business1/business1-routing.module").then(
//         (module) => module.Business1RoutingModule
//       ),
//   },
//   {
//     path: "business2",
//     loadChildren: () =>
//       import("./business2/business2-routing.module").then(
//         (module) => module.Business2RoutingModule
//       ),
//   },
//   {
//     path: "business3",
//     loadChildren: () =>
//       import("./business3/business3-routing.module").then(
//         (module) => module.Business3RoutingModule
//       ),
//   },
// ];

// @NgModule({
//   declarations: [
//     Business1Component,
//     Business2Component,
//     Business3Component,
//   ],
//   imports: [
//     CommonModule,
//     Business1RoutingModule,
//     Business2RoutingModule,
//     Business3RoutingModule,
//     ReactiveFormsModule,
//     RouterModule,
//     BusinessRegistrationRoutingModule
//   ],
//   exports: [ // Export components if needed in other modules
//     Business1Component,
//     Business2Component,
//     Business3Component,
//   ],
// })
// export class BusinessRegistrationModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Business1Component } from './business1/business1.component';
import { Business2Component } from './business2/business2.component';
import { Business3Component } from './business3/business3.component';
import { BusinessRegistrationRoutingModule } from './businessRegistration-routing.module';

@NgModule({
  declarations: [
    Business1Component,
    Business2Component,
    Business3Component,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BusinessRegistrationRoutingModule,
  ],
  // exports: [ 
  //      Business1Component,
  //       Business2Component,
  //      Business3Component,
  //     ],
})
export class BusinessRegistrationModule {}
