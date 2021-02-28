import { getTips } from "./TipDataProvider.js";
import { Tips } from "./Tips.js";

// const allTips = getTips(); <--- Alternate method

export const TipList = () => {
    const tips = getTips()

    const TipsLocation = document.querySelector(".tipList")
    
    // Generate all of the HTML for all of the tips

    let tipsHTMLReps = "";

    for (const oneTip of tips) {
        tipsHTMLReps += Tips(oneTip);
    }
// console.log("tipsHTML Rep", tipsHTMLReps);
    
TipsLocation.innerHTML = tipsHTMLReps;
}
