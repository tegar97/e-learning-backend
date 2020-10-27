import React from 'react'
import {CardLessonContainer,CardIconContainer,CardContainerText,CardLessonTitle,CardLessonDetail,CardLesonDetailText,LessonProgress,LessonProgressText} from './card-lesson.styles'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {Link} from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClassIcon from '@material-ui/icons/Class';

const CardLesson = ({theory,assignment,isClass,classData}) => {
    const lg = useMediaQuery('(min-width:961px)');
    const md = useMediaQuery('(max-width:960px)');

  

    return(
        <Link to={isClass ? `/group/$1` : ''}>
        <CardLessonContainer>
            <CardIconContainer>
                {theory && <MenuBookIcon style={{color: '#fff'}}/> }
                {assignment && <AssignmentTurnedInIcon style={{color: '#fff'}}/> }
                {isClass && <ClassIcon style={{color: '#fff'}}/> }
            </CardIconContainer>
            
            <CardContainerText>

                <CardLessonTitle>{isClass ? 'Matematika'  : 'Belajar Python'}</CardLessonTitle>
                {!isClass && <CardLessonDetail>
                    <CardLesonDetailText>Pemograman Java</CardLesonDetailText>
                    <CardLesonDetailText>27 agustus 2019</CardLesonDetailText>
                </CardLessonDetail>}
                {lg && isClass && 
                <CardLessonDetail>
                    <CardLesonDetailText></CardLesonDetailText>
                    <CardLesonDetailText>27 agustus</CardLesonDetailText>
                </CardLessonDetail>}
                {
                    
                    isClass && md && !lg &&  
                    <div style={{marginTop: '0.5rem'}}>
                        <LessonProgressText>3/8 Tugas selesai (30%) | Senin, 08:00 - 9:00</LessonProgressText>
                        <LessonProgress value={30} variant="determinate" color="secondary" />
                    </div>
                }
            </CardContainerText>
                {md && !lg && <ChevronRightIcon style={{color: 'var(--color-primary)'}}/>}
        </CardLessonContainer>
        
        </Link>
    )
}

export default CardLesson