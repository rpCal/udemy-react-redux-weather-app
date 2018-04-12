import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { compose, withProps } from "recompose"

export default compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: '250px', width: '200px' }} />,
    }),
    withScriptjs,
    withGoogleMap,
)((props) => {
    return ( <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }}/>);
})