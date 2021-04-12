import { Component,OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';

declare let toastr
@Component({
  selector: 'events-list',
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
  constructor(private eventService: EventService, private toastr: ToastrService) {
    
  }

  ngOnInit()
  {
    this.events = this.eventService.getEvents()
  }
  handleThumbnailClick(eventName) {
    this.toastr.success(eventName)
  }
}