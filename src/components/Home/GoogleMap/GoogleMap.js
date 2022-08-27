import React from "react";
import Mylocation from "./Mylocation";

const GoogleMap = () => {
  return (
    <div className=" mt-20 mb-60">
      <h1 className="font-bold p-10 text-3xl">Google Map</h1>
      <div class="mapouter mb-20">
        <div class="gmap_canvas">
          <iframe
            width="1263"
            height="749"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=%20Panthopath,%20Dhaka%20-,%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
      <Mylocation></Mylocation>
    </div>
  );
};

export default GoogleMap;
