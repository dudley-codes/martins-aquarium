const allTips = useTips ()

import { useTips } from "./TipDataProvider.js"
import { Tips } from "./Tips.js"



export const TipList = () => {
    const tips = useTips()

    const TipsLocation = document.querySelector(".tipList")
    
    // Generate all of the HTML for all of the fish

    let tipsHTMLRepresentations = "";

    for (const oneTip of tips) {
        tipsHTMLRepresentations += Tips(oneTip);
    }
console.log("tipsHTML Rep", tipsHTMLRepresentations);
    
TipsLocation.innerHTML = tipsHTMLRepresentations;
}