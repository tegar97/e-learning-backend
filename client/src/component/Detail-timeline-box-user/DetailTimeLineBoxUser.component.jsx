import React from 'react'
import { Paragraph, TextPrimary } from '../../Global-Style/Typography'
import {Link as RouterLink} from 'react-router-dom'
import { Link } from '@material-ui/core'
import {BoxContainer,BoxContainerHeader} from './detail-timeline-box.user.styles'
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment-timezone'
function DetailTimeLineBoxUser({match,post}) {
 
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

                <TextPrimary size="2rem">{moment(Date.now()).format() > moment(post.due).format()? moment(post.due).format('MMMM Do YYYY, h:mm:ss a') : 'Waktu Habis'}</TextPrimary>
            </BoxContainer>

        </div>
    )
}

export default DetailTimeLineBoxUser
