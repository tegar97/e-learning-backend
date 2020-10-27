import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react'
import NavMobile from '../component/nav-mobile/nav-mobile';
import Navbar from '../component/navbar/navbar'
import { ContainerAuth, ContainerController } from '../Global-Style/ContainerAuth';
function RouteWithNavbar(props) {
    const xl = useMediaQuery('(min-width:961px)');
    const md = useMediaQuery('(max-width:960px)');
    return (
        <React.Fragment>
        {xl && <Navbar/>}
        {md && <NavMobile/>}
            
        <ContainerController >
             {props.children}
        </ContainerController>

        </React.Fragment>
    )
}

export default RouteWithNavbar
