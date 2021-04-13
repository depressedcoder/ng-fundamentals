import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';

declare let toastr
@Component({
  template: `
  <div>
    <h2>Unordered List Components</h2>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <events-thumbnail (click) = "handleThumbnailClick(event.name)"[event] = "event"></events-thumbnail>
      </div>
    </div>  
  </div>
  `
})
export class EventsListComponent implements OnInit {
  events:any[]
  constructor(private eventService: EventService, 
    private toastr: ToastrService,private route:ActivatedRoute) {
    
  }

  ngOnInit(){
      this.events =this.route.snapshot.data['events']
  }
  handleThumbnailClick(eventName) {
    this.toastr.success(eventName)
  }
}