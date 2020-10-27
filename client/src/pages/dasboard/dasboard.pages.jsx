import React,{useContext,useEffect} from 'react'
import { AuthContext } from '../../context/auth'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Header ,Content,Content2} from '../../Global-Style/ContainerAuth';
import ProfileCardMobile from '../../component/profile-card-mobile/profile-card-mobile';
import {DasboardHeading,HeadingContainer,DasboardTextLink,ContetContainer}from './dasboard.styles.pages'
import CardLesson from '../../component/card-lesson/card-lesson.component';
import BookIcon from '@material-ui/icons/Book';
import ModalCostum from '../../component/modal/modal.component';
import ToolTipIcon from '../../component/Tooltip-icon/Tooltip-icon.component';
import PageJoinAndCreateClass from '../../component/page-join-craete-class-stepper/page-join-craete-class-stepper.component';
import { useMutation } from '@apollo/client';
import { JOIN_CLASS } from '../../graphql/Class';
function Dasboard({history}) {
     const {user} = useContext(AuthContext)
     const lg = useMediaQuery('(max-width:961px)');
     const md = useMediaQuery('(max-width:960px)');
    
 
    return (
        <React.Fragment>
           {md && <ProfileCardMobile/>}
           <Content>
           <ModalCostum  HeaderTitle="Buat Tugas" fullScreen size="false" ButtonComponent={<ToolTipIcon/>}><PageJoinAndCreateClass history={history}/> </ModalCostum>

                <Content2>
                    <ContetContainer>
                    <HeadingContainer>
                        <DasboardHeading>Kelas Hari ini</DasboardHeading>
                        <DasboardTextLink to="/class">Lihat Semua</DasboardTextLink>
                    </HeadingContainer>
                <CardLesson isClass/>
                </ContetContainer>
                <ContetContainer>
                    <HeadingContainer>
                    { lg && <BookIcon fontSize="large" style={{color:  '#4BA8CE'}}/>}
                    { md && <BookIcon fontSize="default" style={{color:  '#4BA8CE'}}/>}
                        <DasboardHeading  className="ml-1">tugas hari ini</DasboardHeading>
                        <DasboardTextLink to="/class-more">Lihat Semua</DasboardTextLink>
                    </HeadingContainer>
                    <CardLesson assignment/>
                
                </ContetContainer>

                </Content2>
                <div>

                </div>
                
            </Content>

        </React.Fragment>
    )
}

export default Dasboard
