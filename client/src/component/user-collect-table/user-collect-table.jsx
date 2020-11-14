import React,{Suspense} from 'react'
import { Paragraph, TextPrimary } from '../../Global-Style/Typography'
import GiveScoreModal from '../give-score-modal/give-score-moda.component'
import {UserCollectTableContainer} from './user-collect.styles'

function UserCollectTable({post :{id,user_collect}}) {
    const ModalViewUserCollect = React.lazy(() => import('../modal-view-user-collect/modal-view-user-collect.component'))
    return (
        <React.Fragment>
        
        {user_collect.map(data =>(
            <UserCollectTableContainer>

                <Paragraph size="1.15rem" style={{textTransform: 'capitalize',marginRight: 'auto'}} >{data.user_name}</Paragraph>
                <TextPrimary size="1.15rem" style={{textTransform: 'capitalize',marginRight: '2rem'}}>{data.point === null  ? '______' : data.point  }</TextPrimary>
                <Suspense fallback={<div>Loading...</div>}>
                    <ModalViewUserCollect data={data} postId={id}/>
                
                </Suspense>
              </UserCollectTableContainer>
        ))}
        </React.Fragment>
            
    )
}

export default UserCollectTable
