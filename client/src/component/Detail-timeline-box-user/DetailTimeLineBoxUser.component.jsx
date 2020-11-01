import React,{useState} from 'react'
import { Paragraph, TextPrimary } from '../../Global-Style/Typography'
import {Link as RouterLink} from 'react-router-dom'
import { Button, Link } from '@material-ui/core'
import {BoxContainer,BoxContainerHeader} from './detail-timeline-box.user.styles'
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment-timezone'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useMutation, useQuery } from '@apollo/client'
import { SEND_TASK } from '../../graphql/Task'
import { CHECK_FINISH_TASK } from '../../graphql/Login'

function DetailTimeLineBoxUser({match,post}) {
    const [taskMessageOnline,settaskMessageOnline] = useState('')
    console.log (moment(Date.now()).format() > moment(post.due).format())
    console.log( moment(Date.now()).format())

    const {data,loading} = useQuery(CHECK_FINISH_TASK,{
     
          variables : {
            id: post.id
        }
    })
    const [sendTask] = useMutation(SEND_TASK,{
        
        variables:{
            task_message_online : taskMessageOnline,
            timeLineId : post.id
        },
        refetchQueries : [{query: CHECK_FINISH_TASK,variables : {id : post.id} }]
    })


    const onSubmit =(e) =>{
        e.preventDefault();
        sendTask()
    }
    return (
        <div>
            <BoxContainer>
                <Paragraph style={{marginRight: 'auto'}}><Link component={RouterLink} to={`/class/${match.params.id}`}>Kembali</Link></Paragraph>
            </BoxContainer>
            <BoxContainer>
                <BoxContainerHeader>
                    <Paragraph>Catatan </Paragraph>
                </BoxContainerHeader>
                <Paragraph>{ReactHtmlParser(post.content)}</Paragraph>

              
            </BoxContainer>
            <BoxContainer>
                <BoxContainerHeader>
                    <Paragraph>Tanggal Waktu Deadline</Paragraph>
                </BoxContainerHeader>
                {
                  loading ? 'lOADING ...' : 
                    <TextPrimary size="2rem">{moment(Date.now()).format() < moment(post.due).format() && post.isActive? moment(post.due).format('MMMM Do YYYY, h:mm:ss a') : 'Waktu Habis'}</TextPrimary>
                  
                }
            </BoxContainer>
            {
                loading ? 'loading' :  data.CheckFinishTask && post.isActive  && moment(Date.now()).format() > moment(post.due).format()? 'Selesai' :  <BoxContainer>
                <BoxContainerHeader>
                    <Paragraph>Jawaban</Paragraph>
                </BoxContainerHeader>
                <form onSubmit={onSubmit}> 
                    <CKEditor name="content" editor={ ClassicEditor } data={taskMessageOnline} id="content"
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        settaskMessageOnline(data)
                    } }/>
                    <div style={{marginTop: '1rem',marginButton: '1rem'}}>
                    <Paragraph style={{marginTop: '1rem',marginButton: '1rem'}}>
                            File (pdf,word,photo,dll)
                        </Paragraph>
                        <input type="file"/>
                    </div>
    
            <Button type="submit" variant="contained" color="primary" style={{marginTop: '1rem',color :'#ffff'}}>Submit</Button>
            </form>
        </BoxContainer> 
            }
           


        </div>
    )
}

export default DetailTimeLineBoxUser
