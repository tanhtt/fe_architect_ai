import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import architectAI from '~/assets/imgs/architectai.png'

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
            <Button size='large' sx={{ color: '#000' }}>Home</Button>
            <Button size='large' sx={{ color: '#000' }}>Service</Button>
            <Button size='large' sx={{ color: '#000' }}>About</Button>
            <Button size='large' sx={{ color: '#000' }}>Contact</Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

          <Tooltip title="Search" sx={{ cursor: 'pointer' }}>
            <SearchIcon sx={{ }} />
          </Tooltip>

          <Tooltip title="User" sx={{ cursor: 'pointer' }}>
            <PersonOutlineIcon sx={{ }}/>
          </Tooltip>

          <Button size='large' sx={{ bgcolor: '#000', color: '#fff', '&:hover': {
            bgcolor: '#333',
            color: '#fff'
          } }}>Sign up</Button>
          <Button size='large' variant="text" sx={{ color: '#FFA403' }}>Free Trial</Button>
        </Box>
      </Box>
    </>
  )
}

export default AppHeader