

import { getLocations } from "./LocationDataProvider.js"
import { location } from "./Locations.js"


export const LocationsList = () => {
    const locations = getLocations();

    const locationDOMLocation = document.querySelector("ul#horizontal-list")

    let locationHTMLRepresentations = "";

    for (const oneLocation of locations) {

        locationHTMLRepresentations += location(oneLocation);
    }

    console.log("locationHTMLRep", locationHTMLRepresentations);

    locationDOMLocation.innerHTML = locationHTMLRepresentations;


}