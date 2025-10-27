import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function SpinnerCentered() {
   return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',  // horizontally center
        alignItems: 'center'     // vertically center
        //minHeight: '100vh',        // full viewport height to allow vertical centering
      }}
    >
      <CircularProgress />
    </Box>
  );
}