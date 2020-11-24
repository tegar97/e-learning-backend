import React,{useState} from 'react'
import { Paragraph, TextPrimary } from '../../Global-Style/Typography'
import {Link as RouterLink} from 'react-router-dom'
import { Button, Link, Typography } from '@material-ui/core'
import {BoxContainer,BoxContainerHeader,BoxScore} from './detail-timeline-box.user.styles'
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment-timezone'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useMutation, useQuery } from '@apollo/client'
import { SEND_TASK,GET_SCORE } from '../../graphql/Task'
import { CHECK_FINISH_TASK } from '../../graphql/Login'
import { UPLOAD_FILE } from '../../graphql/upload'

function DetailTimeLineBoxUser({match,post}) {
    const [taskMessageOnline,settaskMessageOnline] = useState('')
    const [file,setFile] = useState('')
    const {data,loading} = useQuery(CHECK_FINISH_TASK,{
     
          variables : {
            id: post.id
        }
    })
    const {data: getScore,loading:loadingGetScore} = useQuery(GET_SCORE,{
        variables : {
            timeLineId: post.id
        }
    })

    const [sendTask,{loading :loadingSendData}] = useMutation(SEND_TASK,{
        
        variables:{
            task_message_online : taskMessageOnline,
            timeLineId : post.id,
            file: file.name

        },
        refetchQueries : [{query: CHECK_FINISH_TASK,variables : {id : post.id} },{query: GET_SCORE,variables : {timeLineId: post.id} }]
    })

    const [uploadFile] = useMutation(UPLOAD_FILE)


    const onSelectFile = e => {
   
        // I've kept this example simple by using the first image instead of multiple

        setFile(e.target.files[0])
     

    }


    const onSubmit =(e) =>{
        e.preventDefault();
     
        
   
        sendTask()
             
        uploadFile({variables: {
            file
        }
        })

    }
    return (
        <React.Fragment>

        {
            loading  ? "Loading.." : 
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
                    loading ? 'loading' : data.CheckFinishTask ?    
                    <React.Fragment>
                        <BoxContainer>
                            <BoxContainerHeader>
                                <Paragraph>Jawaban Anda</Paragraph>
                            </BoxContainerHeader>
                            <div style={{display: 'flex',marginTop: '1rem'}}>
                                <p style={{marginRight: 'auto'}}>{loadingGetScore ? 'Loading' :ReactHtmlParser(getScore.GetScore.task_message_online)}</p>
                                <BoxScore>
                                    <Paragraph size="1.1rem">Nilai</Paragraph>
                                    <Paragraph size="2rem">{loadingGetScore ? '' :  getScore.GetScore.point ? getScore.GetScore.point : '-'}</Paragraph>
                                </BoxScore>
                            
                            </div>
                        </BoxContainer> 
                        <BoxContainer>
                            <BoxContainerHeader>
                                <Paragraph>FeedBack Guru</Paragraph>
                            </BoxContainerHeader>
                            <Paragraph  style={{marginRight: 'auto'}}>{loadingGetScore ? 'loading' : ReactHtmlParser(getScore.GetScore.feedBack)}</Paragraph>

                        </BoxContainer> 
                    </React.Fragment>
                    
                    :  <BoxContainer>
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
                            <input type="file"  required onChange={onSelectFile}/>
                        </div>
                {
                    loadingSendData ? 
                    <Button type="submit" disabled variant="contained" color="primary" style={{marginTop: '1rem',color :'#ffff'}}>Loading ...</Button>
                        :
                        post.isActive ? 
                    <Button type="submit" variant="contained" color="primary" style={{marginTop: '1rem',color :'#ffff'}}>submit</Button>
                        :
                    <Button disabled type="submit" variant="contained" color="primary" style={{marginTop: '1rem',color :'#ffff'}}>Tugas Telah Ditutup</Button>
                }
                </form>
            </BoxContainer> 
                }
               
    
    
            </div>
        }
        </React.Fragment>

    )
}

export default DetailTimeLineBoxUser
