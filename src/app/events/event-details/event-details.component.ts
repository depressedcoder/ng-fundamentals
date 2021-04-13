import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';

declare let toastr
@Component({
  templateUrl: "./event-details.component.html",
  styles:[`
    .contaner {padding-right: 20px; padding-left: 20px;}
    .event-image {height: 200px;}
  `]
})
export class EventsDetailsComponent implements OnInit {
  event:any
  constructor(private eventService: EventService,private route:ActivatedRoute) {
    
  }

  ngOnInit()
  {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']) //+ for converting to number
  }
}