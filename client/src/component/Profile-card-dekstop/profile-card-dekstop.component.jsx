import { Typography } from '@material-ui/core'
import React,{useContext} from 'react'
import { AuthContext } from '../../context/auth'
import { NameText, Paragraph, TextPrimary } from '../../Global-Style/Typography'
import {Card,CardContent,ProfileImage,CardItem,CardItemText,CardInfoContainer,CardInfoBody,CardFooterBody} from './profile-card.styles'
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuBookIcon from '@material-ui/icons/MenuBook'
function ProfileCardDekstop({data,loading}) {
    const {user} = useContext(AuthContext)
    return (
        <Card>
            <CardContent>
                <CardItem>
                    <ProfileImage src="https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg" />
                    <CardItemText>
                        <TextPrimary size="1.3rem">{user.name}</TextPrimary>
                        <Paragraph size="1.5rem">Pelajar</Paragraph>
                    </CardItemText>
                </CardItem>
                <CardItem>
                        <CardInfoContainer>
                            <CardInfoBody>
                                <MenuBookIcon fontSize="large" color="primary"/>
                                <TextPrimary size="3.5rem" style={{marginLeft: '1rem'}}></TextPrimary>

                            </CardInfoBody>
                            <CardFooterBody>
                                <Paragraph>Kelas Hari ini</Paragraph>
                            </CardFooterBody>
                        
                        </CardInfoContainer>
                </CardItem>
                <CardItem>
                        <CardInfoContainer>
                        <CardInfoBody>
                            <AssignmentIcon fontSize="large" color="primary"/>
                            <TextPrimary size="3.5rem" style={{marginLeft: '1rem'}}>0</TextPrimary>

                        </CardInfoBody>
                        <CardFooterBody>
                            <Paragraph>Tugas Hari ini</Paragraph>
                        </CardFooterBody>
                    
                    </CardInfoContainer>
                </CardItem>
            </CardContent>
        </Card>
    )
}

export default ProfileCardDekstop
