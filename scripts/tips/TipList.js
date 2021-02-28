const allTips = getTips ()

import { getTips } from "./TipDataProvider.js"
import { Tips } from "./Tips.js"



export const TipList = () => {
    const tips = getTips()

    const TipsLocation = document.querySelector(".tipList")
    
    // Generate all of the HTML for all of the fish

    let tipsHTMLRepresentations = "";

    for (const oneTip of tips) {
        tipsHTMLRepresentations += Tips(oneTip);
    }
console.log("tipsHTML Rep", tipsHTMLRepresentations);
    
TipsLocation.innerHTML = tipsHTMLRepresentations;
}