import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Seed = ({seed, handleSeedChange, handleRandomSeed}) => {

  return (
    <>
    <h3 className='me-3'>Seed: </h3>
        <TextField id="seed" onChange={handleSeedChange}
            value={seed}
            className='me-3'/>
        <Button variant="outlined" onClick={handleRandomSeed}>Random</Button>
    </>
  )
}

export default Seed
