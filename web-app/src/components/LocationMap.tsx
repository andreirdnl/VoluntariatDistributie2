import map from "../assets/map.png"
  
  export const LocationMap: view = ({
    trip = prop.trip,
  }) => {
    console.log('da',trip)
    return (
        <img src={trip.mapsImageUrl} />
    )
  };
  