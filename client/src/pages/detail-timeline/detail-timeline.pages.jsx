import React from 'react'
import { SectionCenter, SectionLeft, SectionRight } from './../class-room/class-room-styles'
import {useQuery } from '@apollo/client'
import ProfileCardMobile from '../../component/profile-card-mobile/profile-card-mobile';
import { Content } from '../../Global-Style/ContainerAuth';
import { useMediaQuery } from '@material-ui/core';
import MenuCardClass from './../../component/Menu-side-class/Menu-Side-Class.component'
import { GET_TIMELINE, GET_TIMELINES } from '../../graphql/TimeLine';
import DetailTimeLineBox from '../../component/detail-timeline-box/detail-timeline-box.component';
import ClassInfo from '../../component/class-info/class-info.component';
import CodeClassBox from '../../component/code-class-box/code-class-box.component';
import { GET_CLASS } from '../../graphql/Class';

function DetailTimeLine({match,history}) {
    const lg = useMediaQuery('(min-width:961px)');
    const md = useMediaQuery('(max-width:960px)');
    const {data,loading} = useQuery(GET_TIMELINE,{
        variables: {
            id: match.params.postId
        }
    })
    const {data : timelines,loading : loadingTimeLines} = useQuery(GET_CLASS,{
     
        variables: {id : match.params.id}
    })
    
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
                loading ? 'loading ...' : 
                <DetailTimeLineBox history={history} match={match} post={data.getTimeLine}/>
     
            }
             
               
            </SectionCenter>
            <SectionRight>
            <ClassInfo classDetail={timelines} loading={loadingTimeLines}/>
            <CodeClassBox  classDetail={timelines} loading={loadingTimeLines} />
            </SectionRight>
        </Content>
        </React.Fragment>
    )
}

export default DetailTimeLine
