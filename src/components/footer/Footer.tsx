import React, { ReactElement } from 'react'

export default function Footer(): ReactElement {
    return (
        <footer>
            <ul className="social-links"></ul>

            <ul className="other-links">
                <li>Contacts</li>
                <li>Services</li>
                <li>Jobs</li>
                <li>Other apps</li>
                <li>Box office</li>
                <li>Leases</li>
                <li>Previews</li>
                <li>Studios</li>
                <li>About Us</li>
                <li>Resources</li>
                <li>Props</li>
            </ul>

            <div className="copyright">
                <p>Copyright Vimus ©{new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}