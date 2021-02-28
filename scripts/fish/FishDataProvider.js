

const fishCollection = [
	{
		saltWater: "yes",
		harvestLocation: "Pacific Ocean",
		diet: "algae",
		name: "Malcolm",
		species: "Blue Tang",
		inches: 13,
		image: "fish1.jpeg"
	},
	{
		saltWater: "yes",
		harvestLocation: "Bali",
		diet: "really small fish",
		name: "Bob",
		species: "Guppy",
		inches: 3,
		image: "fish2.jpeg"
	},
	{ 
		saltWater: "yes", 
		harvestLocation: "Atlantic Ocean", 
		diet: "squid", 
		name: "BigBoss", 
		species: "Amber Jack", 
		inches: 60, 
		image: "fish9.jpeg" },
	{
		saltWater: "yes",
		harvestLocation: "Pacific Ocean",
		diet: "shellfish",
		name: "Jerry",
		species: "swordfish",
		inches: 80,
		image: "fish3.jpeg"
	},
	{
		saltWater: "yes",
		harvestLocation: "Gulf of Mexico",
		diet: "tiny fish",
		name: "Predator",
		species: "catfish",
		inches: 20,
		image: "fish4.jpeg"
	},
	{
		saltWater: "yes",
		harvestLocation: "Atlantic Ocean",
		diet: "Herring",
		name: "Sabre",
		species: "Swordfish",
		inches: 117.6,
		image: "fish5.jpeg"
	},
	{
		saltWater: "no",
		harvestLocation: "Amazon Basin",
		diet: "brine shrimp",
		name: "Myrti",
		image: "fish6.jpeg",
		inches: 12,
		species: "angel fish"
	},
	{
		saltWater: "yes",
		harvestLocation: "Atlantic Ocean",
		diet: "Plankton",
		name: "Nemo",
		species: "Clownfish",
		inches: 4,
		image: "fish7.jpeg"
	},
	{
		saltWater: "no",
		harvestLocation: "Mississippi River",
		diet: "Everything",
		name: "Vacuum",
		species: "Catfish",
		inches: 24,
		image: "fish8.jpeg"
	},
	{
		saltWater: "no",
		harvestLocation: "Bobbies Fish Emporium",
		diet: "minnows",
		name: "Ralph",
		species: "Smallmouth Bass",
		inches: 14,
		image: "fish9.jpeg"
	},
	{
		saltWater: "no",
		harvestLocation: "Cumberland River",
		diet: "anything",
		name: "Whiskers",
		species: "Ictalurus furcatus",
		inches: 39,
		image: "fish1.jpeg"
	},
	{ 
		saltWater: "yes", 
		harvestLocation: "South Pacific", 
		diet: "shrimp", 
		inches: 64, 
		species: "Tuna", 
		name: "Bruno", 
		image: "fish2.jpeg" },

	{ saltWater: "no", 
        harvestLocation: "Petsmart", 
        diet: "algae", 
        name: "Dorothy", 
        species: "goldfish", 
        inches: 3, 
        image: "fish2.jpeg" },
	{
		saltWater: "no",
		harvestLocation: "Lake Tahoe",
		diet: "insects",
		name: "Trent",
		species: "Rainbow Trout",
		inches: 21,
		image: "fish2.jpeg"
	},
	{
		saltWater: "yes",
		harvestLocation: "Carribean Sea",
		diet: "shrimp",
		name: "Stephen",
		species: "Angler",
		inches: 23,
		image: "fish2.jpeg"
	},
	{
		saltWater: "yes",
		harvestLocation: "Barbados",
		diet: "anchoves",
		name: "Pizza",
		species: "Tuna",
		inches: 40,
		image: "fish6.jpeg"
	},
	{
		saltWater: "no",
		harvestLocation: "TN River",
		diet: "Bacon",
		name: "Finn",
		species: "Bass",
		inches: 20,
		image: "fish9.jpeg",
	},
	{
		saltWater: "yes",
		diet: "mollusks",
		name: "Simba",
		species: "lionfish",
		harvestLocation: "Red Sea",
		inches: 10,
		image: "fish3.jpeg"
	},
	{
		saltWater: "yes",
		harvestLocation: "New Zealand",
		diet: "Lost Sailors",
		name: "Tiki",
		species: "Parrot Fish",
		inches: 36,
		image: "fish4.jpeg"
	},
	{
		saltWater: "yes",
		harvestLocation: "Red Sea",
		diet: "algae",
		name: "Bobo",
		species: "Clown Fish",
		inches: 5,
		image: "fish5.jpeg"
	},
	{
		saltWater: "yes",
		harvestLocation: "Atlantic Sea",
		name: "flipper",
		inches: 12,
		image: "fish2.jpeg",
		diet: "worms",
		species: "garibaldi"
	},
	{
		saltWater: "yes",
		harvestLocation: "Bikini Bottom",
		diet: "Big Ole Fish",
		name: "Pearl",
		species: "Whale",
		inches: 1000,
		image: "fish6.jpeg"
	},
	{
		saltWater: "no",
		harvestLocation: "Port Innsmouth",
		diet: "Primeval Shadows",
		name: "Cthulhu",
		species: "Old One",
		inches: 999,
		image: "fish2.jpeg"
	},
	{ 
		saltWater: "no", 
		harvestLocation: "Amazon River", 
		diet: "smaller fish", 
		name: "Bitey", 
		species: "Pirhana", 
		inches: 7.5, 
		image: "fish2.jpeg" },
	{
		saltwater: "yes",
		harvestLocation: "St.Croix",
		diet: "squid",
		name: "Crush",
		species: "blue ting",
		inches: 7,
		image: "fish7.jpeg"
	},
	{
		saltWater: "no",
		harvestLocation: "Minnesota",
		diet: "Cherry Tomatoes",
		name: "Frank",
		species: "Piranha",
		inches: 7,
		image: "fish8.jpeg"
	},
	{ saltWater: "yes", 
		harvestLocation: "Pacific Ocean", 
		diet: "smaller fish", name: "bluefin tuna", 
		species: "Thunnus thynnus", 
		inches: 84, 
		image: "fish6.jpeg" },
	{
		saltWater: "yes",
		harvestLocation: "Baltic Sea",
		diet: "smaller fish",
		name: "Fil",
		species: "goldFish",
		inches: 40,
		image: "fish9.jpeg"
	}
];

export const useFish = () => fishCollection.slice();


export const getMostHolyFish = () => {
	const holyFishArray = []

	for (const fishObj of fishCollection) {
		if(fishObj.inches % 3 === 0){
			holyFishArray.push(fishObj); 

		};
	};
	return holyFishArray;

};

export const getSoldierFish = () => {
	const soldierFishARray = []

	for (const fishObj of fishCollection) {
		if(fishObj.inches % 5 === 0 && fishObj.inches % 3 !== 0){
			soldierFishARray.push(fishObj);

			};
		};
	return soldierFishARray;

};

export const getUnworthyFish = () => {
	const unworthyFishArray = []

	for (const fishObj of fishCollection) {
		if(fishObj.inches % 5 !== 0 && fishObj.inches % 3 !== 0){
			unworthyFishArray.push(fishObj);
		};
	};
	return unworthyFishArray;

};

// console.log("Fish collection size", fishCollection.length)