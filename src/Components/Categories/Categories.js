import React from 'react'
import './Categories.css'

const Categories = ({ data }) => (
    <div className="col-12 row m-4">
        <div>
            {data.map((cat, i) => {
                return (
                    <div className="card text-dark d-inline p-1 m-2">
                        {cat.title}
                    </div>
                )
            })}
        </div>
    </div>
)

export default Categories