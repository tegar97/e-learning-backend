import React,{useState} from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_CLASS } from '../../graphql/Class'
import { Container, useMediaQuery } from '@material-ui/core'
import Page404 from './../../assets/404.png'
import { TextPrimary } from '../../Global-Style/Typography'
import { Content, ContentRight } from '../../Global-Style/ContainerAuth'
import { useForm } from '../../utils/hooks'
import { CREATE_ANNOUCMENT,GET_TIMELINES } from '../../graphql/TimeLine'
import ProfileCardMobile from '../../component/profile-card-mobile/profile-card-mobile'
import { SectionCenter, SectionLeft, SectionRight } from './class-room-styles'
import MenuCardClass from './../../component/Menu-side-class/Menu-Side-Class.component'
import TimeLine from '../../component/Time-Line/time-line.component'
function ClassRoom({match}) {
    //Initial value / state
    const lg = useMediaQuery('(min-width:961px)');
    const md = useMediaQuery('(max-width:960px)');
    
    const id = match.params.id
    const InitialState ={
        content: '',
        type_content: 'announcement',
        class_id : id,

    }

    //USE STATE 
    const {value,onChange,onSubmit} = useForm(CreatePostCallBack,InitialState)
    const [error,setError] = useState('')
    
    //GRAPHQL MUTATIN & QUERY 
    const [CreatePost] = useMutation(CREATE_ANNOUCMENT,{
        update(proxy,result){
            const data = proxy.readQuery({
                query: GET_TIMELINES,
                variables: {id}
            })
            proxy.writeQuery({
                query: GET_TIMELINES,
                variables: {id},

                data:{
                    getTimeLines : [result.data.CreatePost,...data.getTimeLines]
                }
            })
        },
        variables: value
    
    })
    const {data,loading} = useQuery(GET_TIMELINES,{
        variables: {id}
    })
    useQuery(GET_CLASS,{
        onError(err){
            setError(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: {id}
    })
    //callBack
    function CreatePostCallBack() {
        CreatePost()
    }
    const {content} = value
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
                    <TimeLine  />
                </SectionCenter>
                <SectionRight>3</SectionRight>
            </Content>
            </React.Fragment>
        )
    }
      
    return classPage
}

export default ClassRoom
