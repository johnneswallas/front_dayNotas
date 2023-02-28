import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';


function RadioButtons({handleChange, selectChanger}) {

  
    return (
      <>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={e => handleChange(e.target)}
          >
            <FormControlLabel value="true" control={<Radio 
              checked={selectChanger === 'true'}
              sx={{
                color: '#ffd3ca' ,
                  '&.Mui-checked': {
                    color: '#eb8f7a'},
                  '& .MuiSvgIcon-root': {
                    fontSize: 20},
                  }} />} 
              label="Prioridade" />
            
            <FormControlLabel value="false" control={<Radio 
              checked={selectChanger === 'false'}
              sx={{
                  color: '#ffd3ca' ,
                  '&.Mui-checked': {
                    color: '#eb8f7a'},
                  '& .MuiSvgIcon-root': {
                    fontSize: 20},
                  }} />} 
              label="Normal" />
            
            <FormControlLabel value="all" control={<Radio 
              checked={selectChanger === 'all'}
              sx={{
                  color: '#ffd3ca' ,
                  '&.Mui-checked': {
                    color: '#eb8f7a'},
                  '& .MuiSvgIcon-root': {
                    fontSize: 20},
                }} />} 
            label="Todos" />
          </RadioGroup>
        </FormControl>
      </>
    )
}

export default RadioButtons
   



/* <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="row-radio-buttons-group"
              onChange={handleChange} 
            >
            
            <FormControlLabel value="false" control={<Radio
              {...controlProps('Normal')}
              sx={{
                color: '#ffd3ca' ,
                '&.Mui-checked': {
                  color: '#eb8f7a' ,
                },
              }}/>} label="Normal" />
            
            <FormControlLabel value="true" control={<Radio 
              {...controlProps('Prioridade')}
                sx={{
                  color: '#ffd3ca' ,
                  '&.Mui-checked': {
                    color: '#eb8f7a' ,
                  },
              }}/>} label="Prioridade" />
 
            <FormControlLabel value="all"  control={<Radio 
              {...controlProps('Todos')}
              sx={{
                color: '#ffd3ca' ,
                '&.Mui-checked': {
                  color: '#eb8f7a' ,
                },
              }}/>} label="Todos" />
          </RadioGroup>
        </FormControl> */


