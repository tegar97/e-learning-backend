import React from 'react'
import { Paragraph } from '../../Global-Style/Typography'
import { TimeLineContainer,TimeLineHeader,TimeLineContent } from './time-line.styles'
import TimelineIcon from '@material-ui/icons/Timeline';
import TimeLinePostBox from '../Timeline-Post-Box/Timeline-Post-Box.component';
function TimeLine({match}) {
    return (
        <TimeLineContainer>
            <TimeLineHeader>
                <TimelineIcon fontSize="large" />
                <Paragraph size="1.5rem" style={{marginLeft: '1rem'}}>TimeLine</Paragraph>
            </TimeLineHeader>
            <TimeLineContent>
                  <TimeLinePostBox match={match}/>
            </TimeLineContent>

        </TimeLineContainer>
    )
}

export default TimeLine
