import { Typography } from '@material-ui/core'
import React from 'react'
import { Paragraph } from '../../Global-Style/Typography'
import {PostBoxCommentContainer,PostBoxContent,PostBoxCommentImage,PostBoxCommentInfo} from './post-box-comment.styles'
function PostBoxComment() {
    return (
        <PostBoxCommentContainer>
            <Paragraph size="1rem">1 Komentar</Paragraph>
            <PostBoxContent>
                <PostBoxCommentImage src={'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg'}  alt="user photo"  />
                <PostBoxCommentInfo>
                    <Paragraph bold="700" size="1rem">Ujang Shihab <small>5 okt</small></Paragraph>
                    <p style={{fontSize : '1.1rem'}}>Material Design has standardized over 1,100 official icons, each in five different "themes" (see below). For each SVG icon, we export the respective React component from the @material-ui/icons package. You can search the full</p>
                 </PostBoxCommentInfo>
                
            </PostBoxContent>
        </PostBoxCommentContainer>
    )
}

export default PostBoxComment
