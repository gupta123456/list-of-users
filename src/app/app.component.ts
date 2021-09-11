import { Component,OnInit } from '@angular/core';
import {ListService} from './list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list-of-users';
  list:any;
  page = 1;
  total:any;
  limit:any;

  constructor(private service:ListService){}

  ngOnInit(){
    this.getList(this.page);
  }

  getList(page){
    this.service.getList(page).subscribe((res:any)=>{
      console.log(res.data);
      this.list = res.data;
      this.total = res.total;
      this.limit = res.per_page;
      this.page = res.page;
    })
  }

  getPage(page:Number){
    this.getList(page);
  }
}
