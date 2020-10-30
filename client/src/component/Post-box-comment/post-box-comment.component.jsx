import { Typography } from '@material-ui/core'
import React from 'react'
import { Paragraph } from '../../Global-Style/Typography'
import moment from 'moment-timezone'

import {PostBoxCommentContainer,PostBoxContent,PostBoxCommentImage,PostBoxCommentInfo} from './post-box-comment.styles'
function PostBoxComment({data : {id,content ,user_id,user_name,createdAt,user_photo}}) {
    return (
        <PostBoxCommentContainer>
            <PostBoxContent>
                <PostBoxCommentImage src={'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg'}  alt="user photo"  />
                <PostBoxCommentInfo>
                    <Paragraph bold="700" size="1rem">{user_name} <small>{moment.tz(createdAt,"Asia/Jakarta").fromNow()}</small></Paragraph>
                    <p style={{fontSize : '1.1rem'}}>{content}</p>
                 </PostBoxCommentInfo>
                
            </PostBoxContent>
        </PostBoxCommentContainer>
    )
}

export default PostBoxComment
