import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from '../components/Title'

// Get all unique values
const getUnique = (item, value) => {
    return [...new Set(item.map(item => item[value]))]
}

export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext)
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context
    // Get unique types
    let types = getUnique(rooms, 'type')
    // Add all
    types = ['All',...types]
    // Map to JSX
    types = types.map((item, index) => {
        return (
        <option value={ item } key={ index }>{ item }</option>
        )
    })
    // For guests
    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => {
        return (
        <option key={ index } value={ item }>{ item }</option>
        )})

    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                {/* Select Type for Room Type Filter */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={ type } className="form-control" onChange={ handleChange }>{ types }</select>
                </div>
                {/* End Select Type for Room Type Filter */}

                {/* Select Guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={ capacity } className="form-control" onChange={ handleChange }>{ people }</select>
                </div>
                {/* End Select Guests */}

                {/* Select Room Price */}
                <div className="form-group">
                    <label htmlFor="price">
                        Room Price ${ price }
                    </label>
                    <input type="range" name="price" min={ minPrice } max={ maxPrice } id="price" value={ price } onChange={ handleChange } className="form-control" />
                </div>
                {/* End of Select Room Price */}

                {/* Select Room Size */}
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={ minSize } onChange={ handleChange } className="size-input" />
                        <input type="number" name="maxSize" id="size" value={ maxSize } onChange={ handleChange } className="size-input" />
                    </div>
                </div>
                {/* End of Select Room Size */}

                {/* Select Breakfast and Pets */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={ breakfast } onChange= { handleChange } />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={ pets } onChange= { handleChange } />
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
                {/* End of Select Breakfast and Pets */}
            </form>
        </section>
    )
}
