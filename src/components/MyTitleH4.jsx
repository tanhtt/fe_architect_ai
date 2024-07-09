import Typography from '@mui/material/Typography'
const MyTitleH4 = ({title}) => {
  return (
    <>
      <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#2B1B12' }}>
        {title}
      </Typography>
    </>
  )
}

export default MyTitleH4