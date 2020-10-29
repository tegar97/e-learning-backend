import { CardContent, Typography } from '@material-ui/core'
import {Link, useLocation} from 'react-router-dom'
import React from 'react'
import { Paragraph } from '../../Global-Style/Typography'
import {MenuSideContainer,MenuCard,ListContainer,ListItems,CardBody,MenuHeader} from './Menu-Slide-Class.styles'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ListIcon from '@material-ui/icons/List';
import PeopleIcon from '@material-ui/icons/People';
function MenuSideClass({match}) {
        const location = useLocation()
  
    return (
        <MenuSideContainer>
            <MenuHeader >
                <ListIcon fontSize="large"/>
                <Paragraph size="1.5rem" style={{marginLeft: '1rem'}}>Menu</Paragraph>
            
            </MenuHeader>
            <MenuCard>
                <CardBody>
                <ListContainer >
                   <ListItems as={Link} to={`/class/${match.params.id}`} active={match.url === location.pathname ? true : false }>   
                        <ChatBubbleIcon />
                         <Paragraph size="1.5rem" style={{marginLeft: '1rem'}}>Diskusi</Paragraph> 
                    </ListItems>
                    <ListItems  as={Link} to={`/class/${match.params.id}/anggota`} active={`${match.url}/anggota` === location.pathname ? true : false }>   
                         <PeopleIcon />
                        <Paragraph size="1.5rem" style={{marginLeft: '1rem'}}>Anggota</Paragraph> 
                    </ListItems>
                    <ListItems  as={Link}  to={`/class/${match.params.id}/absensi`} active={`${match.url}/absensi` === location.pathname ? true : false}>   
                        <ChatBubbleIcon />
                        <Paragraph size="1.5rem" style={{marginLeft: '1rem'}}>Absensi</Paragraph> 
                 </ListItems>
                </ListContainer>
                </CardBody>
            </MenuCard>
        </MenuSideContainer>
    )
}

export default MenuSideClass
