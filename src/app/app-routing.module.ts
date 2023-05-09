import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { FaceSnapComponent } from "./face-snap/face-snap.component";

const routes: Routes=[
    {
        path: 'login',
        component: LoginComponent
    },{
        path: 'facesnaps',
        component: FaceSnapComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}