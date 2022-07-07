import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-create-or-update-thucdon',
  templateUrl: './create-or-update-thucdon.component.html',
  styleUrls: ['./create-or-update-thucdon.component.scss']
})
export class CreateOrUpdateThucdonComponent implements OnInit {

  tenThucDon:any;
  @Input() thucDon:any;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    
  }

  addThucDon(){
    var val = {
      tenThucDon:this.tenThucDon
    };
    this.service.themThucDon(val).subscribe(data => {
      alert(data);
    });
  }

  suaThucDon(thucDon:any){
    var val = {
      tenThucDon:this.tenThucDon
    };
    this.thucDon=thucDon;
    alert("đã sửa");
  }
}
