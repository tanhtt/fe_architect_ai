import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Avatar from '@mui/material/Avatar'
import StarRateIcon from '@mui/icons-material/StarRate'

export default function MyCard ({ item }) {
  return (
    <Card sx={{ width: 'calc(33.33% - 64px)',
      flexShrink: 0,
      margin: '0 32px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.img}
        title="green iguana"
      />
      <CardContent sx={{ bgcolor: '#DDC7BB', height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Avatar alt="Remy Sharp" src={item.avatar} />
            <Box sx={{ marginLeft: '10px' }}>
              <Typography variant='h6' sx={{ color: '#2B1B12', fontWeight: 'bold' }}>{item.name}</Typography>
              <Typography variant='body1' sx={{ color: '#2B1B12', fontWeight: 'bold' }}>{item.place}</Typography>
            </Box>
          </Box>
          <Box sx={{ bgcolor: 'white', display: 'flex', alignItems: 'center', height: '20px', padding: '4px', borderRadius: '5px' }}>
            <StarRateIcon sx={{ color: '#ffc400', fontSize: '1rem' }}/>
            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>{item.star}</Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
          {item.desc}
        </Typography>
      </CardContent>
    </Card>
  )
}