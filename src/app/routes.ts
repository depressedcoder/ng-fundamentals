import { Routes } from "@angular/router";
import {
    CreateEventComponent,
    EventListResolver,
    EventsListComponent,
    EventsDetailsComponent,
    EventRouteActivator
  } from './events/index'
import { Error404Component } from "./errors/404.component";
import { UserModule } from "./user/user.module";

export const appRoutes:Routes = [
    { path:'events/new', component: CreateEventComponent,canDeactivate: ['canDiactivateCreateEvent']},
    { path:'events', component: EventsListComponent, resolve:{events:EventListResolver}},
    { path:'events/:id', component: EventsDetailsComponent, canActivate: [EventRouteActivator]},// route gaurd every time checks inside EventRouteActivator [service]
    { path:'404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: () => UserModule }
]