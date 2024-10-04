import { Routes } from '@angular/router';
import { EnquiryListComponent } from './pages/enquiry-list/enquiry-list.component';
import { NewEnquiryComponent } from './pages/new-enquiry/new-enquiry.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component: EnquiryListComponent,
        title: "Enquiry List"
    },
    {
        path:'new-enquiry',
        component:NewEnquiryComponent,
        title:'New-Enquiry'
    }
];
