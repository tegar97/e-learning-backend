import React from 'react'
import { Paragraph } from '../../Global-Style/Typography'
import {UserCollectContaiener,UserCollectHeader,UserCollectBody} from './user-collect.styles'
import PeopleIcon from '@material-ui/icons/People';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Tooltip } from '@material-ui/core';
import UserCollectTable from './../user-collect-table/user-collect-table'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function UserCollect({post}) {
    
    return (
        <UserCollectContaiener>
            <UserCollectHeader>
                <div style={{display: 'flex',alignItems: 'center'}}>
                    <PeopleIcon fontSize="large"/>
                    <Paragraph style={{marginLeft: '1rem '}}>Anggota</Paragraph> 
                    <Tooltip  title="Anggota Yang Telah Mengirim Jawaban" aria-label="add" style={{marginRight: 'auto'}}>
                         <HelpOutlineIcon fontSize="medium" style={{marginLeft: '1rem'}} />
                    </Tooltip>
                    <div>
                        <ReactHTMLTableToExcel 
                        id="test-table-xls-button"
                        className="download-table-xls-button"
                        table="table-to-xls"
                        filename="Data Nilai"
                        sheet="tablexls"
                        buttonText="Download as XLS"/>
                    </div>
                 </div>
            </UserCollectHeader>
             <UserCollectBody>
                <UserCollectTable post={post}/>
              
                <table id="table-to-xls" hidden>

                    <tr>
                        <th>name</th>
                        <th>Materi</th>
                        <th>nilai</th>
                    </tr>
                    {
                        post.user_collect.map(data => (

                            <tr key={data.user_id}>
                                <td>{data.user_name}</td>
                                <td>{post.content_title}</td>
                                <td>{data.point}</td>
                            </tr>
                        ))
                    }

                </table>
            
             </UserCollectBody>
        </UserCollectContaiener>
    )
}

export default UserCollect
