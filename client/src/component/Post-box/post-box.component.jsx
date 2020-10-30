import React from 'react'
import { Paragraph, TextPrimary } from '../../Global-Style/Typography'
import {PostBoxContainer,PostHeader,PostBoxBody,PostBoxFooter,Postinfo,UserImage} from './post-boxt.styles'
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment-timezone'
import  PostBoxComment  from '../Post-box-comment/post-box-comment.component';
import PostBoxCommentInput from '../post-box-comment-input/post-box-comment-input.component';


function PostBox({match,data : {id,content,content_title,created_by,createdAt,comments}}) {

    return (
        <PostBoxContainer>
            <PostHeader>
                <UserImage src={'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg'}  alt="user photo" />
                <Postinfo>
                    <Paragraph>{created_by.name} <small>Menambahkan Informasi</small></Paragraph>
                    <span>{moment.tz(createdAt,"Asia/Jakarta").fromNow()}</span>
                </Postinfo>
            </PostHeader>
            <PostBoxBody>
                <Paragraph size="1.3rem"  bold="700" >{content_title}</Paragraph>
                <Paragraph style={{marginTop: '1rem'}}size="1.1rem">{ReactHtmlParser(content)}</Paragraph>
            </PostBoxBody>
            <PostBoxFooter>
                {
                    comments.map(data => (
                        <PostBoxComment key={data.id} data={data}/>

                    ))
                }
            <PostBoxCommentInput  id={id} match={match}/>

            </PostBoxFooter>
        </PostBoxContainer>
    )
}

export default PostBox
