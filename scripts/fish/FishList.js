/**
 *  FishList which renders individual fish objects as HTML
 */
import { getMostHolyFish, getUnworthyFish, getSoldierFish} from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

const unworthyFish = getUnworthyFish();
const holyFish = getMostHolyFish();
const soldierFish = getSoldierFish();

const concatFish = holyFish.concat(soldierFish, unworthyFish);


export const FishList = () => {
    const fishes = concatFish;

    const DOMLocation = document.querySelector(".fishList")
    
    // Generate all of the HTML for all of the fish

    let fishHTMLRepresentations = "";

    for (const oneFish of fishes) {
        fishHTMLRepresentations += Fish(oneFish);
    }
console.log("fishHTMLRep", fishHTMLRepresentations);
    
DOMLocation.innerHTML = fishHTMLRepresentations;
}