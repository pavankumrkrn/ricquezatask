import React from 'react'
import { LoggedInNavbar } from '../Ui Components/LoggedInNavbar'
import { AAccount } from './Account'
import { AdminHome } from './AdminHome'
export const AHome = () => {
    const [active, setActive] = React.useState('home')
    return (
        <>
            <LoggedInNavbar setActive={setActive} />
            {(active === 'home') ? <AAccount /> : <AdminHome />}
        </>
    )
}