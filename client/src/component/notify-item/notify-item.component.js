import React from 'react'
import {NotifyItemContainer,NotifyItemTextContainer,NotifyItemTextTitle,NotifyItemTextDue,NotifyItemTextScore,NotifyItemRemoveContainer,NotifyItemPhoto} from './notify-item.styles'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const NotifyItem = ({assigmentCommentary,announcement,assigment,notifyData}) => {
  
    return (
        <NotifyItemContainer>
            {
                notifyData.type === 'assigment' ? 
                <LibraryBooksIcon style={{fontSize: '2rem',color: 'var(--color-primary)'}}/>
                :
                <NotifyItemPhoto src={notifyData.photo} />
            }
            <NotifyItemTextContainer>
                    <NotifyItemTextTitle>{notifyData.title}</NotifyItemTextTitle>
                {
                    notifyData.type ===  'assigment' ? 
                    <NotifyItemTextScore>
                    {notifyData.score}
                    </NotifyItemTextScore>
                    :
                    <NotifyItemTextScore>
                    {notifyData.commentary}
                    </NotifyItemTextScore>

                }
               
                <NotifyItemTextDue>{notifyData.due}</NotifyItemTextDue>
            </NotifyItemTextContainer>
            <NotifyItemRemoveContainer>
             &#10005;
            </NotifyItemRemoveContainer>
        </NotifyItemContainer>
    )
}

export default NotifyItem