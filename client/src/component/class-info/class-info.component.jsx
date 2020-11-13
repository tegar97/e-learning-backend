import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import { Paragraph } from '../../Global-Style/Typography';
import {ClassInfoContainer,ClassInfoHeader,ClassInfoContent,LogoBox,ClassInfoBox,ClassRoles} from './class-info.styles'
function ClassInfo({classDetail,loading}) {
   
  
    return (
        <ClassInfoContainer>
            <ClassInfoHeader>
                    <InfoIcon fontSize="large"/>
                    <Paragraph size="1.5rem" style={{marginLeft: '1rem'}}>TimeLine</Paragraph>

            </ClassInfoHeader>
            <ClassInfoContent>
                <LogoBox>
                        <Paragraph style={{textTransform: 'uppercase'}} size="2rem">{loading ? '.....' : classDetail.getDetailRoom.name.substr(0,2)}</Paragraph>
                </LogoBox>
                <ClassInfoBox>
                    <Paragraph size="1.2rem">{loading ? '.....' : classDetail.getDetailRoom.name}</Paragraph>
                  
                </ClassInfoBox>

                <ClassRoles>
                    <Paragraph bold="500" style={{color: '#000'}}>-</Paragraph>
                 </ClassRoles>

            </ClassInfoContent>


        </ClassInfoContainer>
    )
}

export default ClassInfo
