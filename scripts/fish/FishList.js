/**
 *  FishList which renders individual fish objects as HTML
 */

const allTheFish = useFish ()

import { useFish, getMostHolyFish} from "./FishDataProvider.js"
import { Fish } from "./Fish.js"



export const FishList = () => {
    const fishes = getMostHolyFish()

    const DOMLocation = document.querySelector(".fishList")
    
    // Generate all of the HTML for all of the fish

    let fishHTMLRepresentations = "";

    for (const oneFish of fishes) {
        fishHTMLRepresentations += Fish(oneFish);
    }
console.log("fishHTMLRep", fishHTMLRepresentations);
    
DOMLocation.innerHTML = fishHTMLRepresentations;
}