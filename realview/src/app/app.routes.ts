import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MyPropertiesComponent } from './user-dashboard/my-properties/my-properties.component';
import { SavedPropertiesComponent } from './user-dashboard/saved-properties/saved-properties.component';
import { ContactRequestsComponent } from './user-dashboard/contact-requests/contact-requests.component';
import { RouterModule} from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertiesPageComponent } from './properties/properties.component';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';
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
    path: '',
    component: HomeComponent,
  },
  {
     path: 'page-not-found', 
     component: PageNotFoundComponent,
     }, // 404 Page
  {
    path: 'login',
    component: LoginComponent,
  },
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
  }
];

