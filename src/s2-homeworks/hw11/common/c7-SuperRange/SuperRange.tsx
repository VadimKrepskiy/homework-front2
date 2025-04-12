import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                maxWidth: 147+'px',
                '& .MuiSlider-thumb': {
                    color: '#00CC22',
                    border: '1px solid #00CC22',
                    backgroundColor: 'white',
                    padding: 0,
                    '::after': {
                        position: 'absolute',
                        content: "''",
                        width: '5px',
                        height: '5px',
                        borderRadius: '100%',
                        backgroundColor: '#00CC22',
                    }
                },
                '& .MuiSlider-track': {
                    color: '#00CC22'
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                    opacity: 1
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
