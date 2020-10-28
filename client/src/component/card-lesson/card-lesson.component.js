import React from 'react'
import {CardLessonContainer,CardIconContainer,CardContainerText,CardLessonTitle,CardLessonDetail,CardLesonDetailText,LessonProgress,LessonProgressText} from './card-lesson.styles'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {Link} from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClassIcon from '@material-ui/icons/Class';
import { Button, Typography } from '@material-ui/core';
import { Paragraph, TextPrimary } from '../../Global-Style/Typography';

const CardLesson = ({theory,assignment,isClass,classData,data}) => {
    const lg = useMediaQuery('(min-width:961px)');
    const md = useMediaQuery('(max-width:960px)');

  

    return(
     
        <CardLessonContainer>
            <CardIconContainer>
                {theory && <MenuBookIcon style={{color: '#fff' }} fontSize="small"  /> }
                {assignment && <AssignmentTurnedInIcon style={{color: '#fff'}}/> }
                {isClass &&  <ClassIcon style={{color: '#fff',fontSize: lg ? '4rem' : ''}}  /> }
            </CardIconContainer>
                {lg && isClass && 
                    <CardContainerText>
                        <Paragraph size="1.4rem" >Tegar Akmal</Paragraph>
                        <TextPrimary size="2rem">{data.name}</TextPrimary>
                        <CardLessonDetail>
                            <Paragraph size="1.2rem">Tugas Hari ini : Belum Ada Tugas</Paragraph>
                        </CardLessonDetail>
                    </CardContainerText>

                 }
                 {md && isClass && 
                    <CardContainerText>
                        <Paragraph size="1rem" >Tegar Akmal</Paragraph>
                        <TextPrimary size="1.3rem">Matematika</TextPrimary>
                        <CardLessonDetail>
                            <Paragraph size="1.2rem">Tugas Hari ini : Belum Ada Tugas</Paragraph>
                        </CardLessonDetail>
                    </CardContainerText>

                 }
        
        
                {lg && !md && <Link to={`/class/${data.id}`} style={{display: 'flex',alignItems: 'center',marginTop: '5rem',marginRight: '2rem'}}><Button  color="primary" variant="contained" style={{color: '#fff',fontSize:"1rem",padding: '1rem 2rem'}}>Lihat Kelas </Button></Link>}
                {md && !lg && <ChevronRightIcon style={{color: 'var(--color-primary)'}}/>}
        </CardLessonContainer>
        
      
    )
}

export default CardLesson