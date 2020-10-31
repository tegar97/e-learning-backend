import React from 'react'
import { Paragraph } from '../../Global-Style/Typography'
import {UserCollectContaiener,UserCollectHeader,UserCollectBody} from './user-collect.styles'
import PeopleIcon from '@material-ui/icons/People';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Tooltip } from '@material-ui/core';
import UserCollectTable from './../user-collect-table/user-collect-table'
function UserCollect({post}) {
    
    return (
        <UserCollectContaiener>
            <UserCollectHeader>
                <div style={{display: 'flex',alignItems: 'center'}}>
                    <PeopleIcon fontSize="large"/>
                    <Paragraph style={{marginLeft: '1rem '}}>Anggota</Paragraph> 
                    <Tooltip title="Anggota Yang Telah Mengirim Jawaban" aria-label="add">
                         <HelpOutlineIcon fontSize="medium" style={{marginLeft: '1rem'}}/>
                    </Tooltip>
                 </div>
            </UserCollectHeader>
             <UserCollectBody>
                <UserCollectTable post={post}/>
             </UserCollectBody>
        </UserCollectContaiener>
    )
}

export default UserCollect
