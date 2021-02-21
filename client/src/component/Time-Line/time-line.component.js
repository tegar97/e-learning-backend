import React,{useContext} from 'react'
import { Paragraph } from '../../Global-Style/Typography'
import { TimeLineContainer,TimeLineHeader,TimeLineContent,TimeLineFooter } from './time-line.styles'
import TimelineIcon from '@material-ui/icons/Timeline';
import TimeLinePostBox from '../Timeline-Post-Box/Timeline-Post-Box.component';
import PostBox from '../Post-box/post-box.component';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

import { useMutation, useQuery } from '@apollo/client'
import { GET_TIMELINES } from '../../graphql/TimeLine'
import { AuthContext } from '../../context/auth';
import { CHECK_ADMIN } from '../../graphql/Class';
import { useMediaQuery } from '@material-ui/core';
function TimeLine({match,classDetail,classLoading}) {
    const lg = useMediaQuery('(min-width:961px)');

    const id = match.params.id

    const {data,loading} = useQuery(GET_TIMELINES,{
        variables: {id}
    })
    const {data: CheckAdmin,loading : loadingCheckAuth} = useQuery(CHECK_ADMIN,{
        variables: {id}

    })
    console.log(loadingCheckAuth ? '' : CheckAdmin.CheckAdmin)

    const {user} = useContext(AuthContext)
    return (
        <TimeLineContainer>
        {
            lg && 
            <TimeLineHeader>
                <TimelineIcon fontSize="large" />
            
                   
                    <Paragraph size="1.5rem" style={{marginLeft: '1rem'}}>TimeLine</Paragraph>
             
            </TimeLineHeader>
        }
            <TimeLineContent>
            {
                loadingCheckAuth ? <Skeleton height={176}/> :
                CheckAdmin.CheckAdmin  ? <TimeLinePostBox match={match}/> : ''

            }

                  {
                    loading ? 
                    <div>
                    <Box display="flex" alignItems="center">
                      <Box margin={1}>
                          <Skeleton variant="circle">
                            <Avatar />
                          </Skeleton> 
                      </Box>
                      <Box width="100%">
                       
                          <Skeleton width="100%">
                            <Typography>.</Typography>
                          </Skeleton>
                        
                      </Box>
                    </Box>
                  
                      <Skeleton variant="rect" width="100%">
                        <div style={{ paddingTop: '57%' }} />
                      </Skeleton>
                  
                    
                  </div>
                    :
                    data.getTimeLines.map(data =>(
                      
                           <PostBox  match={match}  key={data.id} data={data}/>

                    ))
                }
            </TimeLineContent>
            <TimeLineFooter>1
                
            </TimeLineFooter>

        </TimeLineContainer>
    )
}

export default TimeLine
