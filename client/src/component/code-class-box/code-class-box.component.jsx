import { Typography } from '@material-ui/core'
import React from 'react'
import { Paragraph } from '../../Global-Style/Typography'
import {CodeClassBoxContainer,CodeClassHeader,CodeClassContent} from './code-class-box.styles'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
function CodeClassBox({classDetail,loading}) {
    const [copySuccess,setCopySuccess] = React.useState('')
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    const copyToClipboard = (e) => {
        const copyText = document.getElementById('code')
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        document.execCommand('copy');
        setOpen(true);
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        setCopySuccess('success')
      };
    
    return (
        <CodeClassBoxContainer>
            <CodeClassHeader>
                <Paragraph>Kode Kelas</Paragraph>
            </CodeClassHeader>  
            <CodeClassContent>
            {
                loading ? 'loading ' :
                <input   id="code" value={classDetail.getDetailRoom.code_class} style={{width:'20%',marginRight: 'auto',backgroundColor: 'transparent',border: 'none'}}/>
            }
                <Typography onClick={copyToClipboard} style={{cursor: 'pointer'}}>Copy Kode</Typography>
            </CodeClassContent>

            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                <Paragraph>Kode Telat Berhasil Di Copy</Paragraph>
                </Alert>
            </Snackbar>
            
        </CodeClassBoxContainer>

        
    )
}

export default CodeClassBox
