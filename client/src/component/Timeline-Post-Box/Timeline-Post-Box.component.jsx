import React from 'react'
import { Paragraph } from '../../Global-Style/Typography'
import {BoxContainer,TimeLinePost,BoxItem} from './Timeline-post.styled'
import InfoIcon from '@material-ui/icons/Info';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ModalCostum from '../modal/modal.component';
import FormInfo from './../Form-Info/form-info.compoenent'
function TimeLinePostBox({match}) {


    return (
        <TimeLinePost>
        <Paragraph size="1rem">Bagikan Sesuatu Ke Kelas Anda</Paragraph>
        <BoxContainer>
            <ModalCostum fullWidth HeaderTitle="Buat Tugas"  size="false" width="sm" ButtonComponent={
                <BoxItem>
                    <InfoIcon style={{color: 'var(--color-primary)',fontSize: "4rem"}}/>
                    <Paragraph size='1.1rem'> Pengumuman</Paragraph>
                </BoxItem>
            }>
                <FormInfo match={match}/>
            </ModalCostum>

             
             <BoxItem>
                <AssignmentIcon style={{color: 'var(--color-primary)',fontSize: "4rem"}}/>
                <Paragraph size='1.1rem'> Tugas</Paragraph>
             </BoxItem>
             <BoxItem>
                <AssignmentIndIcon style={{color: 'var(--color-primary)',fontSize: "4rem"}}/>
                <Paragraph size='1.1rem'> Absensi </Paragraph>
             </BoxItem>
           
        </BoxContainer>
        </TimeLinePost>
    )
}

export default TimeLinePostBox