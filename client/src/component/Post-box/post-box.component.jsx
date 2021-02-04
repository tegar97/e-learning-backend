import React,{useState,useContext} from 'react'
import { Paragraph, TextPrimary } from '../../Global-Style/Typography'
import {PostBoxContainer,PostHeader,PostBoxBody,PostBoxFooter,Postinfo,UserImage,PostTaskInfo,PostTaskContainer,PostImageContainer,PostFileContainer} from './post-boxt.styles'
import ReactHtmlParser from 'react-html-parser';

import moment from 'moment-timezone'
import  PostBoxComment  from '../Post-box-comment/post-box-comment.component';
import PostBoxCommentInput from '../post-box-comment-input/post-box-comment-input.component';
import BookIcon from '@material-ui/icons/Book';
import { Button, useMediaQuery } from '@material-ui/core';
import { AuthContext } from '../../context/auth';
import {Link} from 'react-router-dom'
import FileCopyIcon from '@material-ui/icons/FileCopy';

const replace = domNode => {
    if (domNode.type === 'tag' && domNode.name === 'b') {
      return null
    }
    if (domNode.type === 'tag' && domNode.name === 'h2') {
        return null
      }
  };


function PostBox({match,data : {id,content,content_title,created_by,file,createdAt,comments,commentsCount,type_content,due}}) {
    const [loadMore ,setLoadMore] = useState(commentsCount)
    const {user} = useContext(AuthContext)
    const [imageType,setImageType] = useState(['jpg','png','jfif',"jpeg"])
    const lg = useMediaQuery('(min-width:961px)');

    return (
        <PostBoxContainer border={lg ? true : false}>
            <PostHeader>
                <UserImage src={'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg'}  alt="user photo" />
                <Postinfo>
                    <Paragraph style={{textTransform: 'capitalize'}}>{created_by.name} <small>Menambahkan {type_content === 'task' ? 'Tugas' : 'Informasi'} Baru</small></Paragraph>
                    <span>{moment.tz(createdAt,"Asia/Jakarta").fromNow()}</span>
                </Postinfo>
            </PostHeader>
            <PostBoxBody>
            
                {type_content === 'task' ? 
                <React.Fragment>
                    <PostTaskContainer>
                            <BookIcon fontSize="large"  />
                            <PostTaskInfo>
                                <Paragraph size="1.3rem"  >{content_title}</Paragraph>
                                <Paragraph size="1rem" >Batas Waktu Pengumpulan {moment(due).calendar()}</Paragraph>
                                <Paragraph style={{marginTop: '1rem'}}size="1.1rem">{ReactHtmlParser(content, {replace})}</Paragraph>
                            </PostTaskInfo>
                            <div>
                            
                        
                            <Link to={`${match.url}/d/${id}`}><Button  style={{color : '#fff'}} variant="contained"  color='primary' >{     created_by._id === user.id ? 'Lihat Hasil' : 'Kumpulkan'}</Button></Link> 
                            
                            </div>
                            
                    </PostTaskContainer> 
                    <PostImageContainer>
                    {imageType.includes(file.split('.').pop().toLowerCase()) ?
                     <img src={ `https://backend.tegar.cyou/images/${file}` } alt="image" width="100%" height="400" style={{objectFit: 'cover'}}/>
                    : file ?
                     <PostFileContainer>
                        <FileCopyIcon/>
                        <p style={{marginRight: 'auto'}}>{file}</p>
                        <a download href={`https://backend.tegar.cyou/images/${file}`}>download</a>
                     </PostFileContainer>   
                    :
                    ''
                    }
                
                    
                
                </PostImageContainer>
                </React.Fragment>
                : (
                    <React.Fragment>
                        <Paragraph size="1.3rem"  >{content_title}</Paragraph>
                        <Paragraph style={{marginTop: '1rem'}}size="1.1rem">{ReactHtmlParser(content, {replace})}</Paragraph>
                        
                    </React.Fragment>
                )}

            
               
            </PostBoxBody>
            <PostBoxFooter>
                {
                    loadMore > 1 ? <Paragraph   onClick={() => setLoadMore(1)}  style={{marginTop: '1rem',cursor:"pointer"}}> Sembunyikan Komentar  </Paragraph>
                    :
                    <Paragraph  onClick={() => setLoadMore(commentsCount)} style={{marginTop: '1rem',cursor:"pointer"}}> {commentsCount} Komentar </Paragraph>
                }
                {
                    comments.filter((item ,idx) => idx+1 >= loadMore )
                    .map(data => (
                          <PostBoxComment key={data.id} data={data}/>
                    ))
                }
            <PostBoxCommentInput  id={id} match={match}/>

            </PostBoxFooter>
        </PostBoxContainer>
    )
}

export default PostBox
