import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import architectAI from '~/assets/imgs/architectai.png'
import { Link } from 'react-router-dom'
import '../../../styles/AppHeader.css'
import { Link as LinkInside } from 'react-scroll'

function AppHeader() {
  return (
    <>
      <Box px={2} sx={{
        width: '100%',
        height: (theme) => theme.architect_ai.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            component="img"
            sx={{ width: '250px', cursor: 'pointer' }}
            src={architectAI}
          ></Box>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button size='large' sx={{ color: '#000' }}><Link className='custom-link' to="/">Home</Link></Button>
            <Button size='large' sx={{ color: '#000' }}><Link className='custom-link' to="/generation">Service</Link></Button>
            <Button size='large' sx={{ color: '#000' }}><LinkInside to="about-section" smooth={true} duration={500}>About</LinkInside></Button>
            <Button size='large' sx={{ color: '#000' }}><LinkInside to="contact-section" smooth={true} duration={500}>Contact</LinkInside></Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

          <Tooltip title="Search" sx={{ cursor: 'pointer' }}>
            <SearchIcon sx={{ }} />
          </Tooltip>

          <Tooltip title="User" sx={{ cursor: 'pointer' }}>
            <PersonOutlineIcon sx={{ }}/>
          </Tooltip>

          <Link className='custom-link' to="/signin">
          <Button size='large' sx={{ bgcolor: '#000', color: '#fff', '&:hover': {
            bgcolor: '#333',
            color: '#fff'
          } }}>Sign up</Button>
          </Link>
          <Button size='large' variant="text" sx={{ color: '#FFA403' }}><Link className='custom-link' to="/pricing">Free Trial</Link></Button>
        </Box>
      </Box>
    </>
  )
}

export default AppHeader
