import React from 'react'
import { Paragraph, TextPrimary } from '../../Global-Style/Typography'
import {UserCollectTableContainer} from './user-collect.styles'

function UserCollectTable({post :{user_collect}}) {
    return (
        <UserCollectTableContainer>
            {user_collect.map(data =>(
                <React.Fragment>
                    <Paragraph size="1.15rem" style={{textTransform: 'capitalize',marginRight: 'auto'}} >{data.user_name}</Paragraph>
                    <TextPrimary size="1.15rem" style={{textTransform: 'capitalize',marginRight: '2rem'}}>{data.point === null  ? '______' : ''  }</TextPrimary>
                    <Paragraph size="1.15rem" style={{textTransform: 'capitalize'}}>Lihat</Paragraph>
                </React.Fragment>
            ))}
            
        </UserCollectTableContainer>
    )
}

export default UserCollectTable
