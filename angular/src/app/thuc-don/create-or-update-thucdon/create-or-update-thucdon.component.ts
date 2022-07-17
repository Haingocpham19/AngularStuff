import { Component, OnInit,Input,Output, EventEmitter,ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-create-or-update-thucdon',
  templateUrl: './create-or-update-thucdon.component.html'
})
export class CreateOrUpdateThucdonComponent implements OnInit {

  // @ViewChild('childModal') public childModal:ModalDirective;
  saving = false;
  @Input() dataItem:any;
  @Output() backListEvent = new EventEmitter<boolean>();

  tenThucDon:any;
  title:any;

  constructor(private service: SharedService, private modal: NzModalRef) { }

  ngOnInit(): void {
    if(this.dataItem){
      this.tenThucDon = this.dataItem.TenThucDon;
    }
  }

  save(isSave: boolean) {
    if(isSave) {
      if(!this.dataItem){
        this.addThucDon();
      }else{
        this.editThucDon(this.dataItem);
      }
    } 
  }
  cancel(isSave?: boolean) {
    this.modal.close(isSave);
  }

  addThucDon(){
    var val = {
      tenThucDon:this.tenThucDon
    };
    this.service.themThucDon(val).subscribe(data => {
       if (data) {
        this.cancel();
      }
    });
  }

  editThucDon(thucDon:any){
    var val = {
      id:thucDon.Id,
      tenThucDon:this.tenThucDon
    };
    this.service.suaThucDon(val,thucDon.Id).subscribe(data =>{
      this.cancel();
    });
  }
}
