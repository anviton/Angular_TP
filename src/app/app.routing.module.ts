import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentsComponent } from "./components/students/students.component";
import { RegisterStudentComponent } from "./components/register-student/register-student.component";
import { FromOfComponent } from "./components/from-of/from-of.component";
import { RangeComponent } from "./components/range/range.component";
import { MapComponent } from "./components/map/map.component";

export const appRouteList: Routes = [
    {path :'students', component: StudentsComponent },
    {path: 'register', component: RegisterStudentComponent},
    {path: 'fromof', component: FromOfComponent},
    {path: 'range', component: RangeComponent},
    {path: 'map', component: MapComponent},
    
    {path : '**', redirectTo: 'students'}
]



@NgModule({
    imports: [RouterModule.forRoot(appRouteList)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

