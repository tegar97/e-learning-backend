import React from 'react'
import { Paragraph } from '../../Global-Style/Typography'
import {BoxContainer,TimeLinePost,BoxItem} from './Timeline-post.styled'
import InfoIcon from '@material-ui/icons/Info';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ModalCostum from '../modal/modal.component';
import FormInfo from './../Form-Info/form-info.compoenent'
import CreateTask from '../create-task/create-task.component';
function TimeLinePostBox({match}) {


    return (
        <TimeLinePost>
        <Paragraph size="1rem">Buat Tugas</Paragraph>
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
              
                <CreateTask match={match}/>
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
