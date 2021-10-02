import React from 'react'
import Bocrangsu from '../layout/services/Bocrangsu'
import Nhorang from '../layout/services/Nhorang'
import Tramrang from '../layout/services/Tramrang'
import Caovoirang from '../layout/services/Caovoirang'
import Niengrang from '../layout/services/Niengrang'
import Taytrangrang from '../layout/services/Taytrangrang'
const Cservice = ({authRoute}) => {
    return (
        <>
        {
            authRoute === 'bocrangsu' && <Bocrangsu />
        }
        {
            authRoute === 'nhorang' && <Nhorang />
        }
        {
            authRoute === 'tramrang' && <Tramrang />
        }
        {
            authRoute === 'caovoirang' && <Caovoirang />
        }
        {
            authRoute === 'niengrang' && <Niengrang />
        }
        {
            authRoute === 'taytrangrang' && <Taytrangrang />
        }
        </>
    )
}
export default Cservice
