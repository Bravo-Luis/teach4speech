const Map = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
        margin: "16px 0",
      }}
    >
      <div
        className="map-container"
        style={{
          position: "relative",
          width: "95%",
          paddingTop: "calc(95% * 1 / 2)",
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1-x8jHH_RQ_k2IFWN7SiU2t6PtYfQiBY&ehbc=2E312F&noprof=1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "60px",
            backgroundColor: "white",
            zIndex: 1,
          }}
        ></div>
      </div>
      <style>
        {`
          .map-container {
            max-width: 100%;
          }
          @media (min-width: 1600px) {
            .map-container {
              width: 70% !important;
              padding-top: calc(70% * 1 / 2) !important;
            }
          }
          @media (max-width: 1200px) {
            .map-container {
              width: 80% !important;
              padding-top: calc(80% * 1 / 2) !important;
            }
          }
          @media (max-width: 992px) {
            .map-container {
              width: 90% !important;
              padding-top: calc(90% * 1 / 2) !important;
            }
          }
          @media (max-width: 768px) {
            .map-container {
              width: 100% !important;
              padding-top: calc(100% * 5 / 9) !important;
            }
          }
          @media (max-width: 600px) {
            .map-container {
              width: 100% !important;
              padding-top: calc(100% * 2 / 3) !important;
            }
          }
          @media (max-width: 480px) {
            .map-container {
              width: 100% !important;
              padding-top: calc(100% * 3 / 4) !important;
            }
          }
          `}
      </style>
    </div>
  );
};

export default Map;
