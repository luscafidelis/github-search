import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent {
  faSearch = faSearch;
  @Output() searchRequest = new EventEmitter<string>();

  search(query:string){
    this.searchRequest.emit(query)
  }
}
