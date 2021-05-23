import map from "../assets/map.png"
  
  export const LocationMap: view = ({
    trip = prop.trip,
  }) => {
    return (
        <img src={trip.mapsImageUrl} />
    )
  };
  