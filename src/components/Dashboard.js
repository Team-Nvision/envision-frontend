import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import RenderCard from './RenderCard';
import { Container, Grid } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [text, setText] = useState({ entry: '' });

  const [paragraph, setParagraph] = useState([])

  const [result, setResult] = useState([])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setParagraph(e.target.value);
  }
  // const onTextChange = e => {
  //   setText({...text, [e.target.name]: e.target.value})
  // }


  const handleSpeech = (e) => {
    e.preventDefault();
    const msg = new SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();
    // const { entry } = text;
    msg.voice = voices[0];
    msg.volume = 1
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  function handleText(e) {
    e.preventDefault();

    const str = text;
    setResult(str.match(/[^.?!]+[.!?]+[\])'"`??????]*/g))
    console.log(result);
    
    // console.log(result);
    // { <div>Test</div> }
    
  }


  return (
    <Box sx={{ 
      display: 'flex',
      mx: 'auto',
      p: 3,
      width:'65%'
      }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}
      sx={{
        backgroundColor: '#88CFEB'
      }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Envision
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Paragraph Break-Down', 'Text-to-Speech'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['place-holder'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    <Grid container
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
    >
      <Main open={open}
        sx={{
          mx:'auto',
        }}
      >
        <DrawerHeader />
          <FormGroup onSubmit={handleSpeech}
          >
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '100ch',
                mx: 'auto',
              },
              }}
              noValidate
              autoComplete="off"
            >
              <Button
                variant="contained"
                type='submit'
                sx={{
                  backgroundColor: '#88CFEB',
                  p: 1,
                  m: 1,
                }}
              >
                Speak
              </Button>
              <Button
                variant="contained"
                type='submit'
                onClick={handleText}
                sx={{
                  backgroundColor: '#88CFEB',
                  p: 1,
                  m: 1,
                }}
              >
                Break Down
              </Button>
              <TextField
                id="outlined-multiline-static"
                // label="Enter the paragraph here!"
                multiline
                rows={12}
                placeholder="Enter here!"
                value={text.entry}
                onChange={e => setText(e.target.value)}
                sx={{
                  mx: 'auto',
                }}
              />
              </Box>
              </FormGroup>
            <RenderCard result={result} setResult={setResult}
              />
      </Main>
      </Grid>
    </Box>
  );
}
