import { Routes } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Aboutus } from './aboutus/aboutus';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Course } from './course/course';
import { Admin } from './admin/admin';
import { AdminLogin } from './admin-login/admin-login';
import { View } from './view/view';
import { Login } from './login/login';
import { Signup } from './signup/signup';
export const routes: Routes = [
    {path:'about',component:Aboutus},
    {path:'home',component:Home},
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'contact',component:Contact},
    {path:'course',component:Course},
    {path:'admin',component:Admin},
    {path:'admin-login',component:AdminLogin},
    {path:'view/:id',component:View},
    {path:'login',component:Login},
    {path:'signup',component:Signup}
];
