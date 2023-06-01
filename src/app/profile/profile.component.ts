import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  faEye = faEye
  faTrash = faTrashAlt;
  isCollapsed = true;

  @Input() user : any;
  @Output() deleteRequest = new EventEmitter<any>();

    delete(user:any){
        this.deleteRequest.emit(user)
    }
}
