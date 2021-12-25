import React, { ReactElement } from 'react'

export default function Footer(): ReactElement {
    return (
        <footer>
            <ul className="social-links"></ul>

            <ul className="other-links">
                <li>Contacts</li>
                <li>Services</li>
                <li>Jobs</li>
                <li>More cool apps</li>
                <li>Pretty things</li>
            </ul>

            <div className="copyright">
                <p>Copyright Vimus ©{new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}