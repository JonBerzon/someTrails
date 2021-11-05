import React from 'react'
import { GoogleMap, Marker, Polyline, useJsApiLoader } from '@react-google-maps/api';


function MyComponent(props) {
   
    const path = [
        { lat: 40.31200, lng: -105.64601 },
        { lat: 40.31195, lng: -105.64647 },
        { lat: 40.31169, lng: -105.64647 },
        { lat: 40.31099, lng: -105.64664 }
    ];

    const options = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        paths: [
            { lat: 40.31200, lng: -105.64601 },
            { lat: 40.31195, lng: -105.64647 },
            { lat: 40.31169, lng: -105.64647 },
            { lat: 40.31099, lng: -105.64664 }
        ],
        zIndex: 1
    };



    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: window.nonDescriptMap
    })

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={props.containerStyle}
            center={props.center}
            zoom={props.zoom}
        >
    
            {/* <Marker
                position={props.center}
                /> */}

            {/* <Polyline
                path={path}
                options={options}

                /> */}
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
        
    ) : null
}

export default React.memo(MyComponent)