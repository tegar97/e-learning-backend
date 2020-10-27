import { Typography } from '@material-ui/core'
import React from 'react'

import {CardDropdownContainer,CardDropdownContent,CardDropdownTitle,CardDropdownLink} from './card-dropdown.styles'
const CardDropdown = ({component,content}) => {
  
    return (
        <CardDropdownContainer variant={component}>
        {
            component  === 'notify' ? 
            <div style={{display: 'flex'}}>
                <CardDropdownTitle >NOTIFICATIONS </CardDropdownTitle>
                <CardDropdownLink>See More</CardDropdownLink>
            </div>  

            : ''
        }
            <CardDropdownContent variant={component}>
                 {content}
            
            </CardDropdownContent>
        </CardDropdownContainer>
    )
}

export default CardDropdown