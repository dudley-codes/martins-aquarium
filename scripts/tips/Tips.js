export const Tips = (tips) => {
    return (
      `  <section class="fish-card">
            <div><img  class="fish__image image--card" src="images/${tips.image}" /></div>
            <div class="fish__name">Name: ${tips.name}</div>
            <div class="fish__species">Species: ${tips.species}</div>
            <div class="fish__length">Length: ${tips.inches} inches</div>
            <div class="fish__location">Harvested from: ${tips.harvestLocation}</div>
            <div class="fish__diet">Diet: ${tips.diet}</div>
        </section>
    `
    )
}