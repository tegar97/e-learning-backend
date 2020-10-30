import React from 'react'
import { SectionCenter, SectionLeft, SectionRight } from './../class-room/class-room-styles'
import {useQuery } from '@apollo/client'
import ProfileCardMobile from '../../component/profile-card-mobile/profile-card-mobile';
import { Content } from '../../Global-Style/ContainerAuth';
import { useMediaQuery } from '@material-ui/core';
import MenuCardClass from './../../component/Menu-side-class/Menu-Side-Class.component'
import { GET_TIMELINE } from '../../graphql/TimeLine';

function DetailTimeLine({match}) {
    const lg = useMediaQuery('(min-width:961px)');
    const md = useMediaQuery('(max-width:960px)');
    const {data,loading} = useQuery(GET_TIMELINE,{
        variables: {
            id: match.params.postId
        }
    })

    console.log(loading ? ''  :data.getTimeLine/content)
    return (
        <React.Fragment>
        {md && <ProfileCardMobile/>}
        <Content> 
        {
            lg  &&  (
                <SectionLeft >
                    <MenuCardClass match={match}/>
                 </SectionLeft>
            )
        }
           
            <SectionCenter>
            {
                loading ? <p>Loading ....</p> : 's'
            }
                
             
               
            </SectionCenter>
            <SectionRight>3</SectionRight>
        </Content>
        </React.Fragment>
    )
}

export default DetailTimeLine
