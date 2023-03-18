import React from 'react';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function SimpleSnackbar(props) {
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
  
    const action = (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  
    return (
      <div>
        <Button sx={{borderRadius:'30px', border:'0px', backgroundColor:'#FFD8D8', color:'#DF3434'}}
          onClick={handleClick}>
            {props.testId}
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Copied!"
          action={action}
        />
      </div>
    );
  }

const TestsSection = () => {
  return (
    <>
        <Stack sx={{ width: '100%' }} spacing={2}>
            {
                ['Physcometric test', 'Aptitude test', 'Literature test', 'Mental ability'].map(ele=>{
                    return(
                        <Box sx={{border:'1px solid #C9C9C9', padding:'0.8rem', display:'flex', justifyContent:'space-between'}}>
                            <Typography variant="h6">
                                {ele}
                            </Typography>
                            <SimpleSnackbar testId="ajhvscljhasasc" />
                        </Box>
                    )
                })
            }
        </Stack>
    </>
  )
}

export default TestsSection
