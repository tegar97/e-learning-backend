import React from 'react'
import { Paragraph } from '../../Global-Style/Typography'
import { TimeLineContainer,TimeLineHeader,TimeLineContent,TimeLineFooter } from './time-line.styles'
import TimelineIcon from '@material-ui/icons/Timeline';
import TimeLinePostBox from '../Timeline-Post-Box/Timeline-Post-Box.component';
import PostBox from '../Post-box/post-box.component';
import Grow from '@material-ui/core/Grow';

import { useMutation, useQuery } from '@apollo/client'
import { GET_TIMELINES } from '../../graphql/TimeLine'
function TimeLine({match}) {
    const id = match.params.id

    const {data,loading} = useQuery(GET_TIMELINES,{
        variables: {id}
    })
    return (
        <TimeLineContainer>
            <TimeLineHeader>
                <TimelineIcon fontSize="large" />
                <Paragraph size="1.5rem" style={{marginLeft: '1rem'}}>TimeLine</Paragraph>
            </TimeLineHeader>
            <TimeLineContent>
                  <TimeLinePostBox match={match}/>
                  {
                    loading ? 'loading ...' :
                    data.getTimeLines.map(data =>(
                      
                           <PostBox  match={match}  key={data.id} data={data}/>

                    ))
                }
            </TimeLineContent>
            <TimeLineFooter>
                
            </TimeLineFooter>

        </TimeLineContainer>
    )
}

export default TimeLine
