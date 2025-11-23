export const locations = [
    {
        id: 1,
        name: "Half Moon Bay: Pillar Point",
        region: "California",
        image: "https://images.unsplash.com/photo-1663517684742-8d2df9993924?auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 850,
        catch: ["Sea Urchin", "Mussels", "Kelp"],
        tidalStatus: "Low Tide",
        toxinLevel: "Safe",
        status: "Open",
        bestSeason: "Winter",
        description: "A premier spot for tide pooling and foraging. Famous for its purple sea urchins and abundant mussel beds accessible during negative tides.",
        coordinates: [37.4957, -122.4996],
        tags: ["Tide Pools", "Shellfish", "Beginner Friendly"]
    },
    {
        id: 2,
        name: "Puget Sound: Hood Canal",
        region: "Washington",
        image: "https://images.unsplash.com/photo-1548565495-a6925f70dd28?auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 1200,
        catch: ["Oysters", "Clams", "Geoduck"],
        tidalStatus: "Rising",
        toxinLevel: "Safe",
        status: "Open",
        bestSeason: "Spring",
        description: "World-renowned for its oysters. The public beaches here offer excellent clamming and oyster picking opportunities.",
        coordinates: [47.6397, -122.9359],
        tags: ["Oysters", "Mud Flats", "Permit Required"]
    },
    {
        id: 3,
        name: "Maine Coast: Acadia",
        region: "Maine",
        image: "https://images.unsplash.com/photo-1505835672097-7143354f6775?auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 940,
        catch: ["Periwinkles", "Irish Moss", "Mussels"],
        tidalStatus: "High Tide",
        toxinLevel: "Caution",
        status: "Open",
        bestSeason: "Summer",
        description: "Rugged coastline offering a variety of seaweeds and small mollusks. Check local red tide warnings frequently.",
        coordinates: [44.3386, -68.2733],
        tags: ["Seaweed", "Rocky", "Scenic"]
    },
    {
        id: 4,
        name: "Oregon Coast: Tillamook Bay",
        region: "Oregon",
        image: "https://images.unsplash.com/photo-1595252387976-20612a32d5e1?auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 1500,
        catch: ["Dungeness Crab", "Cockles", "Butter Clams"],
        tidalStatus: "Low Tide",
        toxinLevel: "Safe",
        status: "Open",
        bestSeason: "Fall",
        description: "A massive bay popular for crabbing and clamming. Great for families and beginners.",
        coordinates: [45.4959, -123.9387],
        tags: ["Crabbing", "Bay", "Easy Access"]
    },
    {
        id: 5,
        name: "Cape Cod: Wellfleet",
        region: "Massachusetts",
        image: "https://images.unsplash.com/photo-1504564396566-1c71546c0c32?auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 2100,
        catch: ["Oysters", "Quahogs", "Razor Clams"],
        tidalStatus: "Low Tide",
        toxinLevel: "Safe",
        status: "Open",
        bestSeason: "Fall",
        description: "Famous for the Wellfleet Oyster. Extensive tidal flats make for productive foraging.",
        coordinates: [41.9301, -70.0311],
        tags: ["Oysters", "Flats", "Iconic"]
    },
    {
        id: 6,
        name: "Bodega Bay",
        region: "California",
        image: "https://images.unsplash.com/photo-1473442240418-4521629be2ce?auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 780,
        catch: ["Red Rock Crab", "Clams", "Sea Lettuce"],
        tidalStatus: "Rising",
        toxinLevel: "Unsafe",
        status: "Closed",
        bestSeason: "Winter",
        description: "A popular spot for crabbing off the jetty and clamming in the mudflats. Currently closed due to domoic acid.",
        coordinates: [38.3333, -123.0481],
        tags: ["Crabbing", "Jetty", "Closed"]
    },
    {
        id: 7,
        name: "Gulf Coast: Galveston",
        region: "Texas",
        image: "https://images.unsplash.com/photo-1621523520170-634aa54bd37d?auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviews: 1100,
        catch: ["Blue Crab", "Oysters"],
        tidalStatus: "High Tide",
        toxinLevel: "Safe",
        status: "Open",
        bestSeason: "Spring",
        description: "Warm waters rich in Blue Crab. Accessible from piers and marshes.",
        coordinates: [29.3013, -94.7977],
        tags: ["Blue Crab", "Warm Water", "Pier"]
    },
    {
        id: 8,
        name: "Alaska: Kachemak Bay",
        region: "Alaska",
        image: "https://images.unsplash.com/photo-1551720956-4134f9512641?auto=format&fit=crop&w=800&q=80",
        rating: 5.0,
        reviews: 450,
        catch: ["Razor Clams", "Halibut", "Salmon"],
        tidalStatus: "Low Tide",
        toxinLevel: "Safe",
        status: "Open",
        bestSeason: "Summer",
        description: "A pristine wilderness offering some of the best cold-water foraging in the world.",
        coordinates: [59.6126, -151.4256],
        tags: ["Wilderness", "Cold Water", "Abundant"]
    }
];

export const species = [
    {
        id: 1,
        name: "Purple Sea Urchin",
        scientificName: "Strongylocentrotus purpuratus",
        image: "https://images.unsplash.com/photo-1550949006-567565d03d4b?auto=format&fit=crop&w=800&q=80",
        season: "Winter - Spring",
        edibility: "Choice (Uni)",
        description: "Spiny purple echinoderm found in rocky intertidal zones. The gonads (uni) are a delicacy.",
        habitat: "Rocky tide pools, kelp forests."
    },
    {
        id: 2,
        name: "Pacific Razor Clam",
        scientificName: "Siliqua patula",
        image: "https://images.unsplash.com/photo-1620634272982-63c133278822?auto=format&fit=crop&w=800&q=80",
        season: "Fall - Spring",
        edibility: "Choice Edible",
        description: "Large, oblong clam with a brittle shell. Requires fast digging in sandy beaches.",
        habitat: "Sandy surf beaches."
    },
    {
        id: 3,
        name: "Bull Kelp",
        scientificName: "Nereocystis luetkeana",
        image: "https://images.unsplash.com/photo-1559654424-2c559344a735?auto=format&fit=crop&w=800&q=80",
        season: "Summer",
        edibility: "Edible (Pickles)",
        description: "Large brown algae with a floating bulb. Stipes make excellent pickles.",
        habitat: "Subtidal rocky zones."
    },
    {
        id: 4,
        name: "Dungeness Crab",
        scientificName: "Metacarcinus magister",
        image: "https://images.unsplash.com/photo-1562592282-351547471265?auto=format&fit=crop&w=800&q=80",
        season: "Winter",
        edibility: "Choice Edible",
        description: "Prized crab with sweet meat. Requires a trap or hoop net.",
        habitat: "Sandy or muddy bottoms, eelgrass beds."
    }
];

export const guides = [
    {
        id: 1,
        title: "Tide Pooling Etiquette",
        author: "Marine Biologist",
        image: "https://images.unsplash.com/photo-1566550367077-3339a923c459?auto=format&fit=crop&w=800&q=80",
        excerpt: "Walk gently, touch carefully, and put everything back where you found it.",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Identifying Toxic Algae",
        author: "Safety First",
        image: "https://images.unsplash.com/photo-1621961048738-b85c34603b41?auto=format&fit=crop&w=800&q=80",
        excerpt: "How to spot red tides and check the biotoxin hotline before you go.",
        readTime: "8 min read"
    },
    {
        id: 3,
        title: "How to Clean Clams",
        author: "Chef Forager",
        image: "https://images.unsplash.com/photo-1599251412782-833d0492a080?auto=format&fit=crop&w=800&q=80",
        excerpt: "Purging sand and preparing your catch for the pot.",
        readTime: "6 min read"
    }
];
