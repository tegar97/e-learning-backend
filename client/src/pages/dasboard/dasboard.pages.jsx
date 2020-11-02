import React,{useContext,useEffect} from 'react'
import { AuthContext } from '../../context/auth'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Header ,Content,ContentRight} from '../../Global-Style/ContainerAuth';
import ProfileCardMobile from '../../component/profile-card-mobile/profile-card-mobile';
import {ContentInfo}from './dasboard.styles.pages'
import ModalCostum from '../../component/modal/modal.component';
import ToolTipIcon from '../../component/Tooltip-icon/Tooltip-icon.component';
import PageJoinAndCreateClass from '../../component/page-join-craete-class-stepper/page-join-craete-class-stepper.component';
import { GET_CLASS_TODAY, JOIN_CLASS } from '../../graphql/Class';
import ProfileCardDekstop from '../../component/Profile-card-dekstop/profile-card-dekstop.component';
import { Paragraph } from '../../Global-Style/Typography';
import { useQuery } from '@apollo/client';
import CardLesson from '../../component/card-lesson/card-lesson.component';
function Dasboard({history}) {
     const {user} = useContext(AuthContext)
     const lg = useMediaQuery('(min-width:961px)');
     const md = useMediaQuery('(max-width:960px)');
     const { loading, error, data } = useQuery(GET_CLASS_TODAY);

    return (
        <React.Fragment>
        <ModalCostum  HeaderTitle="Buat Tugas" fullScreen size="false" ButtonComponent={<ToolTipIcon/>}><PageJoinAndCreateClass history={history}/> </ModalCostum>

           {md && <ProfileCardMobile/>}
           <Content>
              <ContentRight>
                {lg && <ProfileCardDekstop data={data} loading={loading}/>}

                <ContentInfo>
                    <Paragraph size="1.8rem" style={{marginBottom: '1rem'}}>Kelas Hari ini</Paragraph>
                    {
                        loading ? <p>Loading .....</p> :  
                        data.getClassNow.length > 0 ?  data.getClassNow.map(data => (
                           <CardLesson isClass key={data.id} data={data}/>

                        )) : <Paragraph>Tidak Ada Kelas Hari ini</Paragraph>
                        

                    }
                
                </ContentInfo>

                

              </ContentRight>
                <div>
                
                </div>
          </Content>
        </React.Fragment>
    )
}

export default Dasboard
