import { Routes } from "@angular/router";
import { UserProfileMainComponent } from "./userProfile-Main/userProfile-Main.component";
import { HomeProfileComponent } from "./home-profile/home-profile.component";
import { UserSideAppoinmentListingComponent } from "./User-Side-AppoinmentListing/User-Side-AppoinmentListing.component";
import { InterestedDoctorsComponent } from "./interestedDoctors/interestedDoctors.component";



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
            }
        ]
    }
]