import React from 'react'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Tooltip } from '@material-ui/core';
import {ClassPageContainer,CardGrid} from './classes.styles'
import { Paragraph } from '../../Global-Style/Typography';
import AllCardComponent from '../../component/all-class-card/all-class-card.component';
function Classes() {
    return (
        <ClassPageContainer>
            <div style={{display: 'flex',alignItems: "center"}}>
                <Paragraph size="1.3rem">Kelas Anda</Paragraph>
                <Tooltip  title="Anggota Yang Telah Mengirim Jawaban" aria-label="add" style={{marginRight: 'auto'}}>
                <HelpOutlineIcon fontSize="medium" style={{marginLeft: '1rem'}} />
              </Tooltip>            
            </div>
            <CardGrid>
                <AllCardComponent/>
            </CardGrid>
        </ClassPageContainer>
    )
}

export default Classes
