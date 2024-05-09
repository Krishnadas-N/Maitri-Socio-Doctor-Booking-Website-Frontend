import { Routes } from "@angular/router";
import { UserProfileMainComponent } from "./user-profile-main-page/user-profile-main-page.component"; 
import { HomeProfileComponent } from "./home-profile/home-profile.component";
import { UserSideAppoinmentListingComponent } from "./user-side-appoinment-listing/user-side-appoinment-listing.component"; 
import { InterestedDoctorsComponent } from "./interested-doctors/interested-doctors.component"; 
import { WalletComponent } from "../../../../shared/Components/wallet/wallet.component"; 
import { MedicalRecordComponent } from "./medical-record/medical-record.component";
import { NotificationComponent } from "../../../../shared/Components/notification-component/notification.component";



export const profileRoutes:Routes=[
    {
        path:'',
        component:UserProfileMainComponent,
        children:[
            {
                path:'',
                component:HomeProfileComponent
            },
            {
                path:'appoinments',
                component :UserSideAppoinmentListingComponent
            },
            {
                path:'interests',
                component:InterestedDoctorsComponent
            },
            {
                path:'wallet',
                component:WalletComponent
            },
            {
                path:'medical-records',
                component:MedicalRecordComponent
            },
            {
                path:'notifications',
                data:{expectedRole:'User'},
                component:NotificationComponent,
            }
        ]
    }
]