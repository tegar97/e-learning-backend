import React from 'react'
import { Paragraph, TextPrimary } from '../../Global-Style/Typography'
import {UserCollectTableContainer} from './user-collect.styles'
import ModalCostum from '../../component/modal/modal.component';
import { Button } from '@material-ui/core';

function UserCollectTable({post :{user_collect}}) {
    return (
        <React.Fragment>
            {user_collect.map(data =>(
            <UserCollectTableContainer key={data.user_id}>
                    <React.Fragment>
                        <Paragraph size="1.15rem" style={{textTransform: 'capitalize',marginRight: 'auto'}} >{data.user_name}</Paragraph>
                        <TextPrimary size="1.15rem" style={{textTransform: 'capitalize',marginRight: '2rem'}}>{data.point === null  ? '-' : ''  }</TextPrimary>
                        
                    </React.Fragment>
        
                
            </UserCollectTableContainer>
            ))}
          
        </React.Fragment>
    )
}

export default UserCollectTable
