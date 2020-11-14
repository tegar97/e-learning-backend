import React,{Suspense,lazy } from 'react'
//styles
import './App.css';
import theme from './config/theme'

//library
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ThemeProvider from '@material-ui/styles/ThemeProvider';

//component
import Spinner from './component/spinner/spinner'
import { AuthProvider } from './context/auth';
import PrivateRoute from './route/PrivateRoute';
import RouteWithNavbar from './route/RouteWithNavbar';
import { ModalProvider } from './context/setModal';


import Login from './pages/login/login.pages'
import Register from './pages/register/register.pages'
import Dasboard from './pages/dasboard/dasboard.pages'
import DetailTimeLine from './pages/detail-timeline/detail-timeline.pages'
import Classes from './pages/classes/classes.pages'
import ClassRoom from './pages/class-room/class-room.pages'
import MenuMobile from './pages/menu-mobile/menu-mobile.pages'
import ForgotPassword from './pages/forgot-password/forgot-password'
import ResetPassword from './pages/reset-password/reset-password'
import notifyPages from './pages/notify/notify.pages';
function App() {
  //Lazy React Component
  // const Login = lazy(() => import('./pages/login/login.pages'))
  // const Register = lazy(() => import('./pages/register/register.pages'))
  // const Dasboard = lazy(() => import('./pages/dasboard/dasboard.pages'))
  // const DetailTimeLine = lazy(() => import('./pages/detail-timeline/detail-timeline.pages'))
  // const Classes = lazy(() => import('./pages/classes/classes.pages'))
  // const ClassRoom = lazy(() => import('./pages/class-room/class-room.pages'))
  // const MenuMobile = lazy(() => import('./pages/menu-mobile/menu-mobile.pages'))
  // const ForgotPassword = lazy(() => import('./pages/forgot-password/forgot-password'))
  // const ResetPassword = lazy(() => import('./pages/reset-password/reset-password'))



  return (
    <Router>
    
    <ThemeProvider theme={theme}>

     <AuthProvider>
      <ModalProvider>
      
      <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <PrivateRoute  exact path="/"  layout={RouteWithNavbar} component={Dasboard}/>
          <PrivateRoute exact path="/class"   layout={RouteWithNavbar} component={Classes}/>
          <PrivateRoute exact  path="/class/:id" layout={RouteWithNavbar} component={ClassRoom}/>
          <PrivateRoute exact path="/class/:id/d/:postId" layout={RouteWithNavbar}  component={DetailTimeLine}/>
          <PrivateRoute exact path="/menu-mobile" layout={RouteWithNavbar}  component={MenuMobile}/>
          <PrivateRoute exact path="/notify" layout={RouteWithNavbar}  component={notifyPages}/>
          <Route exact path="/forgot-password" component={ForgotPassword}/>
          <Route exact path="/reset-password/:token" component={ResetPassword}/>
       </Switch>
      </ModalProvider>
         </AuthProvider>
 
    </ThemeProvider>
    
    </Router>
  );
}

export default App;
