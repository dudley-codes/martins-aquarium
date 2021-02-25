/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
const allTheFish = useFish ()

import { useFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"



export const FishList = () => {
    const fishes = useFish()

    const DOMLocation = document.querySelector(".fishList")
    
    // Generate all of the HTML for all of the fish

    let fishHTMLRepresentations = "";

    for (const oneFish of fishes) {
        fishHTMLRepresentations += Fish(oneFish);
    }
console.log("fishHTMLRep", fishHTMLRepresentations);
    
DOMLocation.innerHTML = fishHTMLRepresentations;
}