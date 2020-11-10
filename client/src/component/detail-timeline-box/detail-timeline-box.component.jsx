import React,{useState} from 'react'
import { PostCardContainer ,CardTaskDetailAdmin,CardTaskDetailAdminHeader,CardTaskDetailAdminContent,FormGroup} from './detail-timeline.styles'
import DetailTimeLineBoxAdmin from '../detail-timeline-box-admin/detail-timeline-box-admin.component'
import { CHECK_ADMIN } from '../../graphql/Class'
import { useQuery } from '@apollo/client'
import UserCollect from '../user-collect/user-collect.component'
import DetailTimeLineBoxUser from '../Detail-timeline-box-user/DetailTimeLineBoxUser.component'

function DetailTimeLineBox({history,post,match}) {
    const {data: CheckAdmin,loading : loadingCheckAuth} = useQuery(CHECK_ADMIN,{
        variables: {id : match.params.id}

    })
    return (
        <PostCardContainer>
        {
            loadingCheckAuth ? 'Loading ...' : 
            CheckAdmin.CheckAdmin  ? 
                    <React.Fragment>
                       <DetailTimeLineBoxAdmin history={history} post={post} match={match}/>
                       <UserCollect post={post} />
                    </React.Fragment>
              :  <React.Fragment> 
                <DetailTimeLineBoxUser post={post} match={match}/>
              </React.Fragment>
         }
        
        </PostCardContainer>
    )
}

export default DetailTimeLineBox
