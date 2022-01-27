import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'

export default function Movie(): ReactElement {
    const params = useParams();

    return (
        <div>
            Movie #{params.movieId}
        </div>
    )
}
