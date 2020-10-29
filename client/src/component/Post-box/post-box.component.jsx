import React from 'react'
import { Paragraph } from '../../Global-Style/Typography'
import {PostBoxContainer,PostHeader,PostBoxBody,PostBoxFooter,Postinfo,UserImage} from './post-boxt.styles'
import ReactHtmlParser from 'react-html-parser';

function PostBox({match}) {

    return (
        <PostBoxContainer>
            <PostHeader>
                <UserImage src={'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg'}  alt="user photo" />
                <Postinfo>
                    <Paragraph>Tegar Akmal <small>Menambahkan Informasi</small></Paragraph>
                    <span>18 jam yang lalu</span>
                </Postinfo>
            </PostHeader>
            <PostBoxBody>
           
            </PostBoxBody>
            <PostBoxFooter>

            </PostBoxFooter>
        </PostBoxContainer>
    )
}

export default PostBox
