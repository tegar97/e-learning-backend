import React,{useState} from 'react'
import { GET_CLASS } from '../../graphql/Class'
import { Container, useMediaQuery } from '@material-ui/core'
import Page404 from './../../assets/404.png'
import { TextPrimary } from '../../Global-Style/Typography'
import { Content, ContentRight } from '../../Global-Style/ContainerAuth'
import { useMutation, useQuery } from '@apollo/client'

import ProfileCardMobile from '../../component/profile-card-mobile/profile-card-mobile'
import { SectionCenter, SectionLeft, SectionRight } from './class-room-styles'
import MenuCardClass from './../../component/Menu-side-class/Menu-Side-Class.component'
import TimeLine from '../../component/Time-Line/time-line.component'
import { TimeLinePost } from '../../component/Timeline-Post-Box/Timeline-post.styled'
import { GET_TIMELINES } from '../../graphql/TimeLine'
import ReactHtmlParser from 'react-html-parser';

function ClassRoom({match}) {
    //Initial value / state
    const lg = useMediaQuery('(min-width:961px)');
    const md = useMediaQuery('(max-width:960px)');
    const [error,setError] = useState('')

    const id = match.params.id
    const {data,loading} = useQuery(GET_TIMELINES,{
        variables: {id}
    })
    console.log(data)
    useQuery(GET_CLASS,{
        onError(err){
            setError(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: {id}
    })


 
 
    let  classPage;
    if(error.id){
        classPage = <div>
        <Container maxWidth="xs" style={{marginTop: '2rem'}}>
            <img src={Page404} width="300" height="300" alt="404 page"/>
            <TextPrimary size="1.3rem"> Sepertinya Anda Mengakses Kelas Yang Salah</TextPrimary>
        </Container>
    
    </div>
    }else{
        classPage = (
            <React.Fragment>
            {md && <ProfileCardMobile/>}
            <Content>
                <SectionLeft >
                    <MenuCardClass match={match}/>
                </SectionLeft>
                <SectionCenter>
                    <TimeLine match={match} />
                    {
                        loading ? 'loading ...' :
                        data.getTimeLines.map(data =>(
                            <p>{ReactHtmlParser(data.content)}</p>
                        ))
                    }
                   
                </SectionCenter>
                <SectionRight>3</SectionRight>
            </Content>
            </React.Fragment>
        )
    }
      
    return classPage
}

export default ClassRoom
