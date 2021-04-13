import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventServie:EventService,private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot){
        const eventExists = !! this.eventServie.getEvent(+route.params['id']) // !! bolean converter,+ number converter
        if(!eventExists)
            this.router.navigate(['/404'])
        return eventExists   
    }
}