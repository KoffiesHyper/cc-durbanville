import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export default function GoogleMap({ google }) {
    return (
        <div>
            {/* <Map
                google={google}
                initialCenter={{
                    lat: -33.834011,
                    lng: 18.635809
                }}
                containerStyle={{
                    width: '400px',
                    height: '300px',
                    position: 'static',
                    paddingTop: '100px'
                }}
                zoom={18}
            >
                <Marker
                    onClick={() => window.location.href = 'https://www.google.com/maps/place/Calvary+Chapel+Durbanville/@-33.8339831,18.6357675,20.79z/data=!4m5!3m4!1s0x1dcc57da659e049b:0x19751cd9ed9c613!8m2!3d-33.8339665!4d18.6359169'}
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{ lat: -33.834025, lng: 18.63592 }}>
                </Marker>
            </Map> */}
        </div>
    );
}

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyAmx0ZZ7u6HyN56saHaBIrA3kGZvDeSoPg'
// })(GoogleMap)