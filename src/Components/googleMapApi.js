import React from "react";
import Iframe from "react-iframe";

function GoogleMapApi() {
  return (
    <div class="googleMapMainContainer">
      <div className="googleMapMain">
        <Iframe
          url="https://storage.googleapis.com/maps-solutions-a8g8sk4uwg/locator-plus/nwd3/locator-plus.html"
          width="91%"
          height="100%"
          frameBorder="0"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default GoogleMapApi;
