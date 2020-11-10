import React from 'react'
import { Paragraph } from '../../Global-Style/Typography'
import {Card,CardIcon} from './all-class-card.styles'
import ClassIcon from '@material-ui/icons/Class';

function AllCardComponent() {
    return (
        <Card>
            <Paragraph>Matematika</Paragraph>
            <CardIcon>
                <ClassIcon style={{fontSize: "3rem",color: '#Ffff'}}/>
            </CardIcon>
            <p>Tes</p>
        </Card>
    )
}

export default AllCardComponent
