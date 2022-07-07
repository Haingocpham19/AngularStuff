import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-create-or-update-thucdon',
  templateUrl: './create-or-update-thucdon.component.html',
  styleUrls: ['./create-or-update-thucdon.component.scss']
})
export class CreateOrUpdateThucdonComponent implements OnInit {

  @Input() thucDon:any;
  tenThucDon:any;
  title:any;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.tenThucDon = this.thucDon.tenThucDon;
    if(this.thucDon){
      this.title = "Sửa thực đơn";
    }else{
      this.title = "Thêm thực đơn";
    }
  }

  addThucDon(){
    var val = {
      tenThucDon:this.tenThucDon
    };
    this.service.themThucDon(val).subscribe(data => {
      alert(data);
    });
  }

  editThucDon(thucDon:any){
    var val = {
      id:thucDon.Id,
      tenThucDon:this.thucDon.tenThucDon
    };
    this.service.suaThucDon(val,thucDon.Id).subscribe(data =>{
      alert(data);
    });
  }
}
