import React from 'react'
import Banggia from '../site/banggia'
import Dichvu from '../site/dichvu'
import Lienhe from '../site/lienhe'
import Trangchu from '../site/trangchu'
import Facecontact from '../site/Facecontact'
const Cview = ({ authRoute }) => {
    return (
        <>
            {
                authRoute === 'trangchu' && <Trangchu />
            }
            {
                authRoute === 'banggia' && <Banggia />
            }
            {
                authRoute === 'dichvu' && <Dichvu />
            }
            {
                authRoute === 'lienhe' && <Lienhe />
            }
            {
                authRoute === 'F_contact' && <Facecontact />
            }
        </>
    )
}
export default Cview
