import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

const SelectRegion = ({region, handleRegionChange}) => {

  return (
    <Box sx={{ minWidth: 120, display:'flex' }}>
      <h3>Select region:</h3>
      <FormControl fullWidth sx={{ width: '50%', marginLeft:'1rem', maxWidth:'17rem' }}>
        <InputLabel id="demo-simple-select-label">Region: </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={region}
          label="Region"
          onChange={handleRegionChange}
        >
          <MenuItem value="France">France</MenuItem>
          <MenuItem value="Poland">Poland</MenuItem>
          <MenuItem value="Russia">Russia</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectRegion
