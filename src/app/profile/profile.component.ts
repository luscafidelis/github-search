import { Component, Input } from '@angular/core';
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

  @Input() user:any;
}
