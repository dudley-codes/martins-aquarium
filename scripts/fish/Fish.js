/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fish) => {
    return (
      `  <section class="fish-card">
            <div><img  class="fish__image image--card" src="images/${fish.image}" alt="a photo of the fish ${fish.name}"/></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__name">Requires Salt Water?: ${fish.saltWater}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.inches} inches</div>
            <div class="fish__location">Harvested from: ${fish.harvestLocation}</div>
            <div class="fish__diet">Diet: ${fish.diet}</div>
        </section>
    `
    )
}