import React,{useState} from 'react'
import { GET_CLASS } from '../../graphql/Class'
import { Container, useMediaQuery } from '@material-ui/core'
import Page404 from './../../assets/404.png'
import { TextPrimary } from '../../Global-Style/Typography'
import { Content } from '../../Global-Style/ContainerAuth'
import {useQuery } from '@apollo/client'

import ProfileCardMobile from '../../component/profile-card-mobile/profile-card-mobile'
import { SectionCenter, SectionLeft, SectionRight } from './class-room-styles'
import MenuCardClass from './../../component/Menu-side-class/Menu-Side-Class.component'
import TimeLine from '../../component/Time-Line/time-line.component'
import ClassInfo from '../../component/class-info/class-info.component'
import CodeClassBox from '../../component/code-class-box/code-class-box.component'
import AppBarClass from '../../component/app-bar-class/app-bar-class.component'

function ClassRoom({match}) {
    //Initial value / state
    const lg = useMediaQuery('(min-width:961px)');
    const md = useMediaQuery('(max-width:960px)');
    const [error,setError] = useState('')

    const id = match.params.id
  
    const {data,loading} = useQuery(GET_CLASS,{
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
           
            <Content border="0"> 
            {md && <AppBarClass classDetail={data} loading={loading}/>}
            {
                lg  &&  (
                    <SectionLeft >
                        <MenuCardClass match={match}/>
                     </SectionLeft>
                )
            }
               
                <SectionCenter>
                    
                    <TimeLine match={match} />
                 
                   
                </SectionCenter>
                {
                    lg && 
                    <SectionRight>
                   
                        <ClassInfo classDetail={data} loading={loading}/>
                        <CodeClassBox  classDetail={data} loading={loading} />
                    </SectionRight>
                }
            </Content>
            </React.Fragment>
        )
    }
      
    return classPage
}

export default ClassRoom
