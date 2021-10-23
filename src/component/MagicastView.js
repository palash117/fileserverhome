import React from 'react'
import QRCode from "react-qr-code";

const MagicastView = () => {
    // console.log("magicast ip is", process.env.MAGICAST_IP)
    return (
        <div style={{
            width: "100%",
            height:"100%",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
        }}>
        <QRCode value={`http://192.168.1.22`} />

           {/* <QRCode value={`http://${process.env.MAGICAST_IP}`} /> */}
        </div>
    )
}

export default MagicastView

