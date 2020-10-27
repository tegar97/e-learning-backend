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

function App() {
  //Lazy React Component
  const Login = lazy(() => import('./pages/login/login.pages'))
  const Register = lazy(() => import('./pages/register/register.pages'))
  const Dasboard = lazy(() => import('./pages/dasboard/dasboard.pages'))
  const DetailTimeLine = lazy(() => import('./pages/detail-timeline/detail-timeline.pages'))
  const Classes = lazy(() => import('./pages/classes/classes.pages'))
  const ClassRoom = lazy(() => import('./pages/class-room/class-room.pages'))
  const MenuMobile = lazy(() => import('./pages/menu-mobile/menu-mobile.pages'))
  const ForgotPassword = lazy(() => import('./pages/forgot-password/forgot-password'))
  const ResetPassword = lazy(() => import('./pages/reset-password/reset-password'))



  return (
    <AuthProvider>
   <Router>

   <ThemeProvider theme={theme}>
      <Suspense fallback={<Spinner/>}>

        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <PrivateRoute  exact path="/"  layout={RouteWithNavbar} component={Dasboard}/>
            <Route exact path="/detailTimeLine" component={DetailTimeLine}/>
            <Route exact path="/class" component={Classes}/>
            <Route exact path="/class-room" component={ClassRoom}/>
            <Route exact path="/menu-mobile" component={MenuMobile}/>
            <Route exact path="/forgot-password" component={ForgotPassword}/>
            <Route exact path="/reset-password/:token" component={ResetPassword}/>
         </Switch>

      </Suspense> 
    </ThemeProvider>
    
    </Router>
    </AuthProvider>
  );
}

export default App;
