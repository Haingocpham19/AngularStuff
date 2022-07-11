import { Component, OnInit,Input,Output, EventEmitter,ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-or-update-thucdon',
  templateUrl: './create-or-update-thucdon.component.html',
  styleUrls: ['./create-or-update-thucdon.component.scss']
})
export class CreateOrUpdateThucdonComponent implements OnInit {

  // @ViewChild('childModal') public childModal:ModalDirective;
  saving = false;
  @Input() thucDon:any;
  @Output() backListEvent = new EventEmitter<boolean>();

  tenThucDon:any;
  title:any;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    if(this.thucDon){
      this.tenThucDon = this.thucDon.TenThucDon;
    }
  }

  save(isSave: boolean) {
    if(isSave) {
      if(!this.thucDon){
        this.addThucDon();
      }else{
        this.editThucDon(this.thucDon);
      }
    } 
  }

  addThucDon(){
    var val = {
      tenThucDon:this.tenThucDon
    };
    this.service.themThucDon(val).subscribe(data => {
      alert("đã thêm");
    });
  }

  editThucDon(thucDon:any){
    var val = {
      id:thucDon.Id,
      tenThucDon:this.tenThucDon
    };
    this.service.suaThucDon(val,thucDon.Id).subscribe(data =>{
      alert("đã sửa");
    });
  }
}
