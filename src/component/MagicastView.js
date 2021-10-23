import React from 'react'
import QRCode from "react-qr-code";

const MagicastView = () => {
    return (
        <div style={{
            width: "100%",
            height:"100%",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
        }}>
           <QRCode value={`http://${process.env.REACT_APP_FILESERVER_IP}`} />
        </div>
    )
}

export default MagicastView

