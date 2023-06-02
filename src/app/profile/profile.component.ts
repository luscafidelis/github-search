import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEye, faTrashAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { SearchService } from '../services/search/search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: SearchService){ }

  //ícones
  faEye = faEye
  faTrash = faTrashAlt;
  faMapMarker = faMapMarkerAlt;

  isCollapsed = true;

  @Input() user : any;
  @Output() deleteRequest = new EventEmitter<any>();

  delete(user:any){
      this.deleteRequest.emit(user)
  }
  showUserInfo(){
    this.isCollapsed = !this.isCollapsed
  }

  ngOnInit(): void {
      this.service.getUser(this.user.login)
        .subscribe(user => this.user = user);
  }
}
