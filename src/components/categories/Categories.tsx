import React, { ReactElement } from 'react'

export default function Categories(): ReactElement {
    return (
        <ul className='flex justify-between flex-wrap px-4'>
            <li>Action</li>
            <li>Horror</li>
            <li>Adventure</li>
            <li>Musicals</li>
            <li>Comedy</li>
            <li>Black Comedy</li>
            <li>Science Fiction Films</li>
        </ul>
    )
}
