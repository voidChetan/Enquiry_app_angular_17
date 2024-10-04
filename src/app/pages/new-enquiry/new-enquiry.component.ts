import { Component, OnInit, inject } from '@angular/core';
import  {FormsModule} from '@angular/forms'
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-new-enquiry',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-enquiry.component.html',
  styleUrl: './new-enquiry.component.css'
})
export class NewEnquiryComponent implements OnInit{

  enquiryStatusList: any []=[];
  enquirySubjectList: any []=[];
  enquiryObj: any = {
    "enquiryId": 0,
    "customerName": "",
    "contactNo": "",
    "altContactNo": "",
    "email": "",
    "enquiryStatusId": "",
    "enquirySubjectId": "",
    "createdDate":new Date(),
    "naration": ""
  }

  masterService= inject(MasterService)

  ngOnInit(): void {
    this.getAllStatus();
    this.getAllSubject();
  }

  getAllStatus() {
    this.masterService.getAllEnquiryStatus().subscribe((res:any)=>{
      this.enquiryStatusList = res.data;
    })
  }
  getAllSubject() {
    this.masterService.getAllSubjects().subscribe((res:any)=>{
      this.enquirySubjectList = res.data;
    })
  }

  onSave() {
    debugger;
    this.masterService.createNewEnquiry(this.enquiryObj).subscribe((res:any)=>{
      if(res.result) {
        alert('Enquiry Created')
      } else {
        alert(res.message)
      }
    }, error=>{
      debugger;
    })
  }
}
