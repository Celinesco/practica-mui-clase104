import './App.scss';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import { deepPurple } from '@mui/material/colors';






const App = () => {
  const colorPurple = deepPurple[700];
  return (
    <div className='main-container'>
      <h2>TARJETA 1</h2>
      <Box sx={{ width: 350, height: 300 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="span">
              be•nev•o•lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <div></div>
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>


      <h2>TARJETA 2</h2>
      <Box sx={{ width: 350, height: 450 }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h6" component="span">
              Our Changing Planet
            </Typography>
            <Typography sx={{ mb: 2, fontSize: 12 }} gutterBottom color="text.secondary">
              by Kurt Wagner
            </Typography>
            <Typography sx={{ fontSize: 12, width: 250 }} variant="body2" color="text.secondary">
              Visit ten places on our planet that are undergoing the biggest changes today.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'space-around' }}>
            <Button size="small">READ</Button>
            <Button size="small">BOOKMARK</Button>
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="like">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </Stack>
          </CardActions>
        </Card>
      </Box>

      <h2>TARJETA 3</h2>
      <Box sx={{ width: 350, height: 300 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent sx={{ display: 'flex' }} >
            <CardMedia
              component="img"
              height="250"
              image="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="galaxy"
            />
            <CardActions sx={{alignItems: 'flex-start', pt:0}}>
              <Stack direction="column" spacing={1}>
                <IconButton aria-label="like">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="bookmark">
                  <BookmarkIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </Stack>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
      <h2>TARJETA 4</h2>
      <Box sx={{ width: 350, height: 450 }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
            alt="green iguana"
          />
          <CardContent sx={{pb:0}}>
            <Typography variant="h5" component="div">
              Cafe Badilico
            </Typography>
            <Box sx={{display: 'flex', alignItems: 'flex-end', mb:2}}>
              <Stack spacing={1}>
              <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size="small" readOnly />
              </Stack>
              <Typography sx={{fontSize: 11, ml:1 }} color="text.secondary">
                4.5 (413)
              </Typography>
            </Box>
            
            <Typography sx={{fontSize: 14, mb:1}}variant="h5" component="div">
              $ • Italian, Cafe
            </Typography>
            
            <Typography sx={{ fontSize: 12, letterSpacing: 1 }} variant="body2" color="text.secondary">
              Small plates, salads & sandwiches an intimate setting with 12 indoor seats plus patio seating.
            </Typography>
            <Divider sx={{ p: 1, m: 0 }} variant="middle" />
            <Typography sx={{ fontSize: 15, pt: 2}} variant="h5" component="p">
              Tonight's availability
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center'}}>
            <Button sx={{pr:1, pl:1,width:75, fontSize:13, borderRadius: 5, bgcolor:'#e0e0e0', color:'text.secondary', fontWeight:400}} color="secondary" variant="contained" disableElevation>
              5:30PM
            </Button>
            <Button sx={{pr:1, pl:1,width:75, fontSize:13, borderRadius: 5, bgcolor:'#6200ea', fontWeight:600}}variant="contained" color="secondary" disableElevation>
              7:30PM
            </Button>
            <Button sx={{pr:1, pl:1,width:75, fontSize:13, borderRadius: 5, bgcolor:'#e0e0e0', color:'text.secondary', fontWeight:400}}  color="secondary" variant="contained"  disableElevation>
              8:00PM
            </Button>
            <Button sx={{pr:1, pl:1,width:75, fontSize:13, borderRadius: 5, bgcolor:'#e0e0e0', color:'text.secondary', fontWeight:400}} color="secondary" variant="contained" disableElevation>
              9:00PM
            </Button>
          </CardActions>
          <CardActions>
            <Button sx={{color:'#6200ea'}}size="small">RESERVE</Button>
          </CardActions>
          
        </Card>
      </Box>

    </div>
  )
}

export default App;
