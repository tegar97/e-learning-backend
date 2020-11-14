import React,{Suspense} from 'react'
import { Paragraph } from '../../Global-Style/Typography'
import {BoxContainer,TimeLinePost,BoxItem} from './Timeline-post.styled'
import InfoIcon from '@material-ui/icons/Info';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ModalCostum from '../modal/modal.component';
import FormInfo from './../Form-Info/form-info.compoenent'
import { useMediaQuery } from '@material-ui/core';
function TimeLinePostBox({match}) {
    const lg = useMediaQuery('(min-width:961px)');
    const CreateTask = React.lazy(() => import('../create-task/create-task.component'));
    const FormInfo = React.lazy(() => import('./../Form-Info/form-info.compoenent'));


    return (
        <TimeLinePost border={lg ? true : false}>
        <Paragraph size="1rem">Buat Tugas</Paragraph>
        <BoxContainer>
            <ModalCostum fullWidth HeaderTitle="Buat Tugas"  size="false" width="sm" ButtonComponent={
                <BoxItem>
                    <InfoIcon style={{color: 'var(--color-primary)',fontSize: "4rem"}}/>
                    <Paragraph size='1.1rem'> Pengumuman</Paragraph>
                </BoxItem>
            }>
            <Suspense fallback={<div>Loading...</div>}>
             <FormInfo match={match}/>
            
            </Suspense>
            </ModalCostum>
             <BoxItem>
             <Suspense fallback={<div>Loading...</div>}>
                <CreateTask match={match}/>
            </Suspense>
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
