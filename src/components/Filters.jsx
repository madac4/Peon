import React from 'react'
import NoUiSlider from './NoUiSlider'

function Filters() {
    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <aside className='filter'>
            <div className="filter__group filter-group">
                <div className="filter-group__options">
                    <h5>Brand</h5>
                    <div className="filter-group__option">
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => {
                                    setIsChecked(!isChecked);
                                }}
                            />
                            <span
                                className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                                aria-hidden="true"
                            />
                            Apple
                            <span className="items">52</span>
                        </label>
                    </div>
                    <div className="filter-group__option">
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => {
                                    setIsChecked(!isChecked);
                                }}
                            />
                            <span
                                className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                                aria-hidden="true"
                            />
                            Xiaomi
                            <span className="items">52</span>
                        </label>
                    </div>
                    <div className="filter-group__option">
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => {
                                    setIsChecked(!isChecked);
                                }}
                            />
                            <span
                                className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                                aria-hidden="true"
                            />
                            Meizu
                            <span className="items">52</span>
                        </label>
                    </div>

                    <button className="filter-group__more big">Show All (24)</button>
                </div>

                <div className="filter-group__options">
                    <h5>Cost</h5>
                    <NoUiSlider></NoUiSlider>
                </div>

                <div className="filter-group__options">
                    <h5>Color</h5>
                    <div className="filter-group__option">
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => {
                                    setIsChecked(!isChecked);
                                }}
                            />
                            <span
                                className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                                aria-hidden="true"
                            />
                            <span className="color" style={{ backgroundColor: '#F7F8FC' }}></span>
                            White
                            <span className="items">52</span>
                        </label>
                    </div>
                    <div className="filter-group__option">
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => {
                                    setIsChecked(!isChecked);
                                }}
                            />
                            <span
                                className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                                aria-hidden="true"
                            />
                            <span className="color" style={{ backgroundColor: '#F1C40F' }}></span>
                            Yellow
                            <span className="items">52</span>
                        </label>
                    </div>
                    <div className="filter-group__option">
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => {
                                    setIsChecked(!isChecked);
                                }}
                            />
                            <span
                                className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                                aria-hidden="true"
                            />
                            <span className="color" style={{ backgroundColor: 'red' }}></span>
                            Red
                            <span className="items">52</span>
                        </label>
                    </div>


                    <button className="filter-group__more big">Show All (24)</button>
                </div>
            </div>
        </aside>
    )
}

export default Filters