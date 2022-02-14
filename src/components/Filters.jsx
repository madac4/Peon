import React from 'react'

function Filters() {
    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <aside className='filter'>
            <div className="filter__group filter-group">
                <h5>Brand</h5>
                <div className="filter-group__options">
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
                            Apple
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