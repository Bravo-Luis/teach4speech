import map from '../../../assets/map.png';

function Map() {
    return (
        <img style={{
            maxWidth: "95%",
            height: "auto",
            borderRadius: "32px",
            padding: "16px",
        }} src={map} alt="Map of schools" />
    );
}

export default Map;