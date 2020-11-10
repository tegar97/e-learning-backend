import React from 'react'
import { Paragraph, TextPrimary } from '../../Global-Style/Typography'
import GiveScoreModal from '../give-score-modal/give-score-moda.component'
import ModalViewUserCollect from '../modal-view-user-collect/modal-view-user-collect.component'
import {UserCollectTableContainer} from './user-collect.styles'

function UserCollectTable({post :{id,user_collect}}) {
    return (
        <React.Fragment>
        
        {user_collect.map(data =>(
            <UserCollectTableContainer>

                <Paragraph size="1.15rem" style={{textTransform: 'capitalize',marginRight: 'auto'}} >{data.user_name}</Paragraph>
                <TextPrimary size="1.15rem" style={{textTransform: 'capitalize',marginRight: '2rem'}}>{data.point === null  ? '______' : data.point  }</TextPrimary>
              <ModalViewUserCollect data={data} postId={id}/>
              </UserCollectTableContainer>
        ))}
        </React.Fragment>
            
    )
}

export default UserCollectTable
