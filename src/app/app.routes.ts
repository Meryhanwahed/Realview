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
import { LatestPropertiesComponent } from './components/latest-properties/latest-properties.component';
import { ConfirmSuccessComponent } from './components/confirm-success/confirm-success.component';
import { EditPropertyComponent } from './components/edit-property/edit-property.component';
import { LatestSalePropertiesComponent } from './components/latest-sale-properties/latest-sale-properties.component';
import { LatestRentPropertiesComponent } from './components/latest-rent-properties/latest-rent-properties.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PriceGuideComponent } from './price-guide/price-guide.component';
export const routes: Routes = [

  { path: 'property/:id', component: PropertyDetailsComponent },

  {path: 'price-guide',component :PriceGuideComponent},
  {path: 'user-profile',component :UserProfileComponent},
  {path: 'latest-sale-properties',component :LatestSalePropertiesComponent},
  {path: 'latest-rent-properties',component :LatestRentPropertiesComponent},
  { path: 'edit-property/:id', component: EditPropertyComponent },

  { path: 'success', component: ConfirmSuccessComponent },

  {
    path: 'latest-properties/:id',
    component: LatestPropertiesComponent
  },
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
   // canActivate: [authGuard]  // ✅ يمنع الزوار غير المسجلين
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

