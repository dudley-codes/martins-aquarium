export const Tips = (tips) => {
    return (
      `  <section class="tip-card">
            <div class="tip__name">${tips.tipTitle}</div> <br>
            <div class="tips__leTip">${tips.tipPara1}</div> <br>
            <div class="tips__leTip">${tips.tipPara2}</div> <br>
    `
    )
}