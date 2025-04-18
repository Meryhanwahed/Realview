import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MyPropertiesComponent } from './user-dashboard/my-properties/my-properties.component';
import { SavedPropertiesComponent } from './user-dashboard/saved-properties/saved-properties.component';
import { ContactRequestsComponent } from './user-dashboard/contact-requests/contact-requests.component';
import { RouterModule} from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertiesPageComponent } from './properties/properties.component';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';

export const routes: Routes = [
  {
    path: 'property-details/:id',
    component: PropertyDetailsComponent
  },
  {
    path: 'properties',
    component:PropertiesPageComponent
  },
  
  { path: 'add-property', component: AddPropertyComponent },
  {
     path: 'page-not-found', 
     component: PageNotFoundComponent,
     }, // 404 Page

  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path:'user-dashboard',
    component: UserDashboardComponent,
  },
  {
    path:'my-properties',
    component: MyPropertiesComponent,
  },
  {
    path:'saved-properties',
    component: SavedPropertiesComponent,
  },
  {
    path:'contact-requests',
    component: ContactRequestsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [guestGuard]  // ✅ يمنع الدخول للمسجلين مسبقًا
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]  // ✅ يمنع الزوار غير المسجلين
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

