import TextField from '@mui/material/TextField';

const ErrorCount = ({errorCount, handleSliderChange}) => {

  return (
    <>
     <h3 className='me-3'>Error Count: </h3>
        <input
          id="errorCount"
          type="range"
          min="0"
          max="10"
          value={errorCount}
          onChange={handleSliderChange}
          className='me-2 mw-50'
        />
        <TextField 
          inputProps={{ inputMode: 'numeric', min:"0", max:"1000", pattern: '[0-9]*' }} 
          onChange={handleSliderChange}
          value={errorCount}/>
    </>
  )
}

export default ErrorCount
