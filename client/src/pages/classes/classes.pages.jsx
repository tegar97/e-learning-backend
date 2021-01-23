import React,{useContext} from 'react'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Tooltip, useMediaQuery } from '@material-ui/core';
import {ClassPageContainer,CardGrid,ClassCard,ClassCardImage,ClassCardFooter} from './classes.styles'
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
            <CardGrid>
                {loading ? 'Loading ....'
                    :

                    data.findAllClass.map(data => (
                        <Link key={data.id} to={`class/${data.id}`}>
                        <ClassCard>
                        <ClassCardImage>
                            <div style={{padding: '1rem',color: '#fff'}}>
                                <h2>{data.name}</h2>
                                <span style={{marginTop: '10rem'}}>{data.user[0].name}</span>
                            </div>
                            <div style={{textAlign: 'right',marginTop: '.8rem',marginRight: '1rem'}}>
                                <img src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s75-c-fbw=1/photo.jpg" style={{width: '5rem',height: '5rem',borderRadius: '100%'}}/>
                            </div>
                        </ClassCardImage>
                        <div style={{padding: '5rem'}}>
                        </div>
                        <ClassCardFooter>
                        </ClassCardFooter>
        
                        </ClassCard>
                    
    
                        </Link>
                    ))

                }
                </CardGrid>


        </ClassPageContainer>
        </Content>
        </React.Fragment>
    )
}

export default Classes
