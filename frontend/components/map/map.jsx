import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { key } from '../../../key/key';

function MyComponent(props) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: key
    })

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={props.containerStyle}
            center={props.center}
            zoom={props.zoom}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
        
    ) : null
}

export default React.memo(MyComponent)