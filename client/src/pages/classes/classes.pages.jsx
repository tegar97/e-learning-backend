import React,{useContext} from 'react'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Tooltip, useMediaQuery } from '@material-ui/core';
import {ClassPageContainer,CardGrid} from './classes.styles'
import { Paragraph } from '../../Global-Style/Typography';
import AllCardComponent from '../../component/all-class-card/all-class-card.component';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import { useQuery } from '@apollo/client';
import {FIND_ALL_CLASS} from './../../graphql/Class'
import { Content } from '../../Global-Style/ContainerAuth';
import ProfileCardMobile from '../../component/profile-card-mobile/profile-card-mobile';
function Classes() {
    const {data,loading} = useQuery(FIND_ALL_CLASS)
    const md = useMediaQuery('(max-width:960px)');

    console.log(loading ? '' : data)
    return (
        <React.Fragment>
        
        {md && <ProfileCardMobile/>}

        <Content>
        
        <ClassPageContainer>
            <div style={{display: 'flex',alignItems: "center"}}>
                <Paragraph size="1.3rem">Kelas Anda</Paragraph>
                <Tooltip  title="Anggota Yang Telah Mengirim Jawaban" aria-label="add" style={{marginRight: 'auto'}}>
                <HelpOutlineIcon fontSize="medium" style={{marginLeft: '1rem'}} />
              </Tooltip>            
            </div>
            {loading ? 'Loading ....'
                :
                data.findAllClass.map(data => (
                    <Link key={data.id} to={`class/${data.id}`}><Paragraph>{data.name}</Paragraph></Link>
                ))

            }
        </ClassPageContainer>
        </Content>
        </React.Fragment>
    )
}

export default Classes
