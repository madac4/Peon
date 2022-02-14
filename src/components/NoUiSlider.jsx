import React from 'react'
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

function NoUiSlider() {
    const [value, setValue] = React.useState({
        leftHandle: 0,
        rightHandle: 1000
    })
    const handleSlider = sliderVal => {
        setValue({
            leftHandle: sliderVal[0],
            rightHandle: sliderVal[1]
        });
    };

    const handleChange = e => {
        setValue({ [e.target.name]: e.target.value });
    };
    return (
        <div className="filter-group__option">
            <div className="input-group">
                <input
                    type="number"
                    name='leftHandle'
                    placeholder='De la'
                    value={Math.floor(value.leftHandle)}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name='rightHandle'
                    placeholder='Pana la'
                    value={Math.floor(value.rightHandle)}
                    onChange={handleChange}
                />
            </div>

            <Nouislider
                start={[value.leftHandle, value.rightHandle]}
                onChange={handleSlider}
                range={{ min: 0, max: 1000 }}
                connect
            />
        </div>
    )
}

export default NoUiSlider




