// Bundled seed data used as an offline / outage fallback for Supabase.
// Shapes mirror the Supabase tables exactly (snake_case columns) so pages
// can render either source without translation.

export const seedLocations = [
    {
        id: 1,
        name: "Half Moon Bay: Pillar Point",
        region: "California",
        image: "https://images.unsplash.com/photo-1663517684742-8d2df9993924?auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 850,
        catch: ["Sea Urchin", "Mussels", "Kelp"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Winter",
        description: "A premier spot for tide pooling and foraging. Famous for its purple sea urchins and abundant mussel beds accessible during negative tides.",
        coordinates: [37.4957, -122.4996],
        tags: ["Tide Pools", "Shellfish", "Beginner Friendly", "Coastal Foraging"],
        tide_station_id: "9414131",
        access_notes: "Park at the Pillar Point Harbor lot and walk south along the bluff trail. The reef is only accessible at tides below +1 ft.",
        regulations: {
            text: "Partially within Pillar Point SMCA and Montara SMR. No collecting in tide pools (Montara SMR). Limited take in SMCA. Check MPA boundaries carefully.",
            url: "https://wildlife.ca.gov/Conservation/Marine/MPAs",
            permitRequired: true
        }
    },
    {
        id: 2,
        name: "Puget Sound: Hood Canal",
        region: "Washington",
        image: "https://images.unsplash.com/photo-1548565495-a6925f70dd28?auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 1200,
        catch: ["Oysters", "Clams", "Geoduck"],
        tidal_status: "Rising",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Spring",
        description: "World-renowned for its oysters. The public beaches here offer excellent clamming and oyster picking opportunities.",
        coordinates: [47.6397, -122.9359],
        tags: ["Oysters", "Mud Flats", "Permit Required", "Coastal Foraging"],
        regulations: {
            text: "WDFW shellfish license required. Harvest only on public tidelands — check the WDFW beach map. Oysters must be shucked on the beach; shells left behind.",
            url: "https://wdfw.wa.gov/fishing/shellfishing-regulations",
            permitRequired: true
        }
    },
    {
        id: 3,
        name: "Maine Coast: Acadia",
        region: "Maine",
        image: "https://images.unsplash.com/photo-1505835672097-7143354f6775?auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 940,
        catch: ["Periwinkles", "Irish Moss", "Mussels"],
        tidal_status: "High Tide",
        toxin_level: "Caution",
        status: "Open",
        best_season: "Summer",
        description: "Rugged coastline offering a variety of seaweeds and small mollusks. Check local red tide warnings frequently.",
        coordinates: [44.3386, -68.2733],
        tags: ["Seaweed", "Rocky", "Scenic", "Coastal Foraging"],
        regulations: {
            text: "No harvesting inside Acadia National Park boundaries. Adjacent town beaches follow Maine DMR shellfish rules — municipal licenses often required for clams.",
            url: "https://www.maine.gov/dmr/shellfish-sanitation-management",
            permitRequired: true
        }
    },
    {
        id: 4,
        name: "Oregon Coast: Tillamook Bay",
        region: "Oregon",
        image: "https://images.unsplash.com/photo-1595252387976-20612a32d5e1?auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 1500,
        catch: ["Dungeness Crab", "Cockles", "Butter Clams"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Fall",
        description: "A massive bay popular for crabbing and clamming. Great for families and beginners.",
        coordinates: [45.4959, -123.9387],
        tags: ["Crabbing", "Bay", "Easy Access", "Coastal Foraging"],
        regulations: {
            text: "ODFW shellfish license required for ages 12+. Check ODA shellfish safety hotline for biotoxin closures before every trip.",
            url: "https://myodfw.com/crabbing-clamming",
            permitRequired: true
        }
    },
    {
        id: 5,
        name: "Cape Cod: Wellfleet",
        region: "Massachusetts",
        image: "https://images.unsplash.com/photo-1504564396566-1c71546c0c32?auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 2100,
        catch: ["Oysters", "Quahogs", "Razor Clams"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Fall",
        description: "Famous for the Wellfleet Oyster. Extensive tidal flats make for productive foraging.",
        coordinates: [41.9301, -70.0311],
        tags: ["Oysters", "Flats", "Iconic", "Coastal Foraging"],
        regulations: {
            text: "Town of Wellfleet recreational shellfish permit required. Harvest only on designated recreational areas, Sundays and Wednesdays.",
            url: "https://www.wellfleet-ma.gov/shellfish-department",
            permitRequired: true
        }
    },
    {
        id: 6,
        name: "Bodega Bay",
        region: "California",
        image: "https://images.unsplash.com/photo-1473442240418-4521629be2ce?auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 780,
        catch: ["Red Rock Crab", "Clams", "Sea Lettuce"],
        tidal_status: "Rising",
        toxin_level: "Unsafe",
        status: "Closed",
        best_season: "Winter",
        description: "A popular spot for crabbing off the jetty and clamming in the mudflats. Currently closed due to domoic acid.",
        coordinates: [38.3333, -123.0481],
        tags: ["Crabbing", "Jetty", "Closed", "Coastal Foraging"],
        tide_station_id: "9415625",
        regulations: {
            text: "Valid fishing license required. Annual mussel quarantine (May-Oct). Dungeness crab viscera advisory due to domoic acid.",
            url: "https://wildlife.ca.gov/Fishing/Ocean/Regulations/Sport-Fishing",
            permitRequired: true
        }
    },
    {
        id: 7,
        name: "Gulf Coast: Galveston",
        region: "Texas",
        image: "https://images.unsplash.com/photo-1621523520170-634aa54bd37d?auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviews: 1100,
        catch: ["Blue Crab", "Oysters"],
        tidal_status: "High Tide",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Spring",
        description: "Warm waters rich in Blue Crab. Accessible from piers and marshes.",
        coordinates: [29.3013, -94.7977],
        tags: ["Blue Crab", "Warm Water", "Pier", "Coastal Foraging"],
        regulations: {
            text: "Texas fishing license with saltwater endorsement required. Oyster harvest only in approved TDSHS waters, Nov-Apr season.",
            url: "https://tpwd.texas.gov/regulations/outdoor-annual/fishing/",
            permitRequired: true
        }
    },
    {
        id: 8,
        name: "Alaska: Kachemak Bay",
        region: "Alaska",
        image: "https://images.unsplash.com/photo-1551720956-4134f9512641?auto=format&fit=crop&w=800&q=80",
        rating: 5.0,
        reviews: 450,
        catch: ["Razor Clams", "Halibut", "Salmon"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Summer",
        description: "A pristine wilderness offering some of the best cold-water foraging in the world.",
        coordinates: [59.6126, -151.4256],
        tags: ["Wilderness", "Cold Water", "Abundant", "Coastal Foraging"],
        regulations: {
            text: "ADF&G sport fishing license required. PSP is a serious risk in Alaska — only harvest bivalves from beaches tested by the state.",
            url: "https://www.adfg.alaska.gov/index.cfm?adfg=fishingsportfishinginfo.main",
            permitRequired: true
        }
    },
    {
        id: 9,
        name: "Fort Bragg: Noyo Harbor",
        region: "California",
        image: "https://images.unsplash.com/photo-1605218457336-92748b692929?auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 320,
        catch: ["Mushrooms", "Seaweed", "Urchin"],
        tidal_status: "Variable",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Fall",
        description: "Gateway to the Mendocino coast. Famous for mushroom foraging in nearby forests and seaweed harvesting.",
        coordinates: [39.4272, -123.8053],
        tags: ["Mushrooms", "Forest", "Seaweed", "Coastal Foraging", "Land Foraging"],
        tide_station_id: "9417426",
        regulations: {
            text: "Abalone fishery closed until 2026. Mushroom permits required in Jackson State Forest.",
            url: "https://wildlife.ca.gov/Fishing/Ocean/Regulations/Sport-Fishing",
            permitRequired: true
        }
    },
    {
        id: 10,
        name: "Shelter Cove",
        region: "California",
        image: "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 150,
        catch: ["Rockfish", "Seaweed"],
        tidal_status: "Low Tide",
        toxin_level: "Caution",
        status: "Restricted",
        best_season: "Summer",
        description: "Remote 'Lost Coast' location. Rugged beauty and rich marine life.",
        coordinates: [40.0254, -124.0673],
        tags: ["Remote", "Rockfish", "Adventure", "Coastal Foraging"],
        tide_station_id: "9418024",
        regulations: {
            text: "Dungeness crab closed (Nov 2025). Salmon closed. Check local rockfish regulations.",
            url: "https://wildlife.ca.gov/Fishing/Ocean/Regulations/Sport-Fishing",
            permitRequired: true
        }
    },
    {
        id: 11,
        name: "Monterey Harbor",
        region: "California",
        image: "https://images.unsplash.com/photo-1559526324-593bc8142713?auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 2500,
        catch: ["Jade", "Kelp"],
        tidal_status: "Moderate",
        toxin_level: "Safe",
        status: "Restricted",
        best_season: "Year-round",
        description: "Heart of the Marine Sanctuary. Foraging is heavily restricted, but jade collection is allowed in specific zones.",
        coordinates: [36.6022, -121.8894],
        tags: ["Sanctuary", "Jade", "Scenic", "Coastal Foraging"],
        tide_station_id: "9413450",
        regulations: {
            text: "MBNMS protected. Strict 'no take' in many areas. Jade collection allowed in designated zones only.",
            url: "https://montereybay.noaa.gov/",
            permitRequired: false
        }
    },
    {
        id: 12,
        name: "Morro Bay",
        region: "California",
        image: "https://images.unsplash.com/photo-1520483601560-389dff434fdf?auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 600,
        catch: ["Pismo Clams"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Restricted",
        best_season: "Winter",
        description: "Iconic rock and bay. Clamming is prohibited in the reserve but allowed in adjacent areas.",
        coordinates: [35.3658, -120.8499],
        tags: ["Clams", "Bay", "Protected", "Coastal Foraging"],
        tide_station_id: "9412110",
        regulations: {
            text: "Morro Bay SMR/SMRMA prohibits clamming. Pismo clams allowed in adjacent areas with license.",
            url: "https://wildlife.ca.gov/Conservation/Marine/MPAs",
            permitRequired: true
        }
    },
    {
        id: 13,
        name: "Malibu: Point Dume",
        region: "California",
        image: "https://images.unsplash.com/photo-1564686288863-7c87c0628795?auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 1100,
        catch: ["Finfish"],
        tidal_status: "High Tide",
        toxin_level: "Safe",
        status: "Restricted",
        best_season: "Summer",
        description: "Beautiful bluffs and beaches. Part of a State Marine Reserve, so take is very limited.",
        coordinates: [34.0011, -118.8066],
        tags: ["MPA", "Scenic", "Hiking", "Coastal Foraging"],
        tide_station_id: "9410840",
        regulations: {
            text: "Point Dume SMR (No take). SMCA allows limited spearfishing. Check boundaries.",
            url: "https://wildlife.ca.gov/Conservation/Marine/MPAs",
            permitRequired: true
        }
    },
    {
        id: 14,
        name: "La Jolla: Scripps Pier",
        region: "California",
        image: "https://images.unsplash.com/photo-1565896311032-785691497134?auto=format&fit=crop&w=800&q=80",
        rating: 5.0,
        reviews: 3000,
        catch: ["None"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Observation Only",
        best_season: "Winter",
        description: "World-famous tide pools. Strictly a 'look, don't touch' Ecological Reserve.",
        coordinates: [32.8669, -117.2544],
        tags: ["Tide Pools", "Observation", "Reserve", "Coastal Foraging"],
        tide_station_id: "9410230",
        regulations: {
            text: "Ecological Reserve. Strict 'No Take' policy. Do not touch or collect anything.",
            url: "https://wildlife.ca.gov/Lands/Places-to-Visit/La-Jolla-Ecological-Reserve",
            permitRequired: false
        }
    }
];

export const seedSpecies = [
    {
        id: 1,
        name: "Purple Sea Urchin",
        scientific_name: "Strongylocentrotus purpuratus",
        image: "https://images.unsplash.com/photo-1550949006-567565d03d4b?auto=format&fit=crop&w=800&q=80",
        season: "Winter - Spring",
        edibility: "Choice (Uni)",
        description: "Spiny purple echinoderm found in rocky intertidal zones. The gonads (uni) are a delicacy.",
        habitat: "Rocky tide pools, kelp forests."
    },
    {
        id: 2,
        name: "Pacific Razor Clam",
        scientific_name: "Siliqua patula",
        image: "https://images.unsplash.com/photo-1620634272982-63c133278822?auto=format&fit=crop&w=800&q=80",
        season: "Fall - Spring",
        edibility: "Choice Edible",
        description: "Large, oblong clam with a brittle shell. Requires fast digging in sandy beaches.",
        habitat: "Sandy surf beaches."
    },
    {
        id: 3,
        name: "Bull Kelp",
        scientific_name: "Nereocystis luetkeana",
        image: "https://images.unsplash.com/photo-1559654424-2c559344a735?auto=format&fit=crop&w=800&q=80",
        season: "Summer",
        edibility: "Edible (Pickles)",
        description: "Large brown algae with a floating bulb. Stipes make excellent pickles.",
        habitat: "Subtidal rocky zones."
    },
    {
        id: 4,
        name: "Dungeness Crab",
        scientific_name: "Metacarcinus magister",
        image: "https://images.unsplash.com/photo-1562592282-351547471265?auto=format&fit=crop&w=800&q=80",
        season: "Winter",
        edibility: "Choice Edible",
        description: "Prized crab with sweet meat. Requires a trap or hoop net.",
        habitat: "Sandy or muddy bottoms, eelgrass beds."
    },
    {
        id: 5,
        name: "California Mussel",
        scientific_name: "Mytilus californianus",
        image: "https://images.unsplash.com/photo-1571147634306-58e6d0a45efc?auto=format&fit=crop&w=800&q=80",
        season: "Nov - Apr (quarantine May-Oct)",
        edibility: "Choice Edible",
        description: "Abundant on exposed rocky shores. Subject to an annual biotoxin quarantine in California — never harvest May through October.",
        habitat: "Wave-exposed intertidal rocks."
    },
    {
        id: 6,
        name: "Sea Lettuce",
        scientific_name: "Ulva lactuca",
        image: "https://images.unsplash.com/photo-1622143479827-8e9433cb96be?auto=format&fit=crop&w=800&q=80",
        season: "Spring - Summer",
        edibility: "Edible (Salads, Soups)",
        description: "Bright green, translucent sheets of algae. Rinse well and harvest only from clean water away from runoff.",
        habitat: "Mid to low intertidal, calm bays and rocks."
    },
    {
        id: 7,
        name: "Pacific Oyster",
        scientific_name: "Magallana gigas",
        image: "https://images.unsplash.com/photo-1570623710374-b39c1a80f6d4?auto=format&fit=crop&w=800&q=80",
        season: "Fall - Spring",
        edibility: "Choice Edible",
        description: "The classic foraged oyster of the Pacific Northwest. Shuck on the beach and leave the shells where you found them.",
        habitat: "Rocky beaches and tide flats of protected bays."
    },
    {
        id: 8,
        name: "Nori / Laver",
        scientific_name: "Pyropia spp.",
        image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80",
        season: "Spring",
        edibility: "Choice Edible (Dried)",
        description: "Thin, dark ruffled blades found high in the intertidal. Dries into the classic sushi seaweed.",
        habitat: "High intertidal rocks with wave splash."
    }
];

export const seedGuides = [
    {
        id: 1,
        title: "Tide Pooling Etiquette",
        author: "Marine Biologist",
        image: "https://images.unsplash.com/photo-1566550367077-3339a923c459?auto=format&fit=crop&w=800&q=80",
        excerpt: "Walk gently, touch carefully, and put everything back where you found it.",
        read_time: "5 min read",
        content: `
<h2>Respect the Intertidal Zone</h2>
<p>Tide pooling is a magical experience, but it requires responsibility. The creatures you see are in their home, and they are fragile.</p>
<h3>Key Rules</h3>
<ul>
    <li><strong>Walk Gently:</strong> Step on bare rock or sand, not on barnacles, mussels, or anemones.</li>
    <li><strong>Touch Carefully:</strong> Use a wet finger to gently touch. Do not pry animals off rocks.</li>
    <li><strong>Leave No Trace:</strong> Take only photos, leave only footprints.</li>
    <li><strong>Put It Back:</strong> If you pick up a rock to look underneath, put it back exactly as you found it. Animals rely on that specific micro-habitat.</li>
</ul>
<h2>Timing Your Visit</h2>
<p>The best tide pooling happens at negative low tides. Check a tide chart and arrive an hour before the lowest point so the water is still falling while you explore.</p>
<p>By following these simple rules, we ensure that these ecosystems thrive for future generations.</p>
`
    },
    {
        id: 2,
        title: "Identifying Toxic Algae",
        author: "Safety First",
        image: "https://images.unsplash.com/photo-1621961048738-b85c34603b41?auto=format&fit=crop&w=800&q=80",
        excerpt: "How to spot red tides and check the biotoxin hotline before you go.",
        read_time: "8 min read",
        content: `
<h2>Red Tides and Biotoxins</h2>
<p>Harmful Algal Blooms (HABs), often called "red tides", can produce dangerous toxins that accumulate in shellfish.</p>
<h3>What to Look For</h3>
<ul>
    <li><strong>Discolored Water:</strong> Water may look red, brown, or green.</li>
    <li><strong>Dead Fish:</strong> A large number of dead fish or birds can indicate a toxin event.</li>
    <li><strong>Official Warnings:</strong> Always check the state biotoxin hotline before harvesting.</li>
</ul>
<h2>Safety First</h2>
<p>Cooking does <strong>NOT</strong> destroy these toxins. If in doubt, do not harvest. Paralytic Shellfish Poisoning (PSP) can be fatal.</p>
<h3>Biotoxin Hotlines</h3>
<ul>
    <li><strong>California:</strong> (800) 553-4133</li>
    <li><strong>Oregon:</strong> (800) 448-2474</li>
    <li><strong>Washington:</strong> (800) 562-5632</li>
</ul>
`
    },
    {
        id: 3,
        title: "How to Clean Clams",
        author: "Chef Forager",
        image: "https://images.unsplash.com/photo-1599251412782-833d0492a080?auto=format&fit=crop&w=800&q=80",
        excerpt: "Purging sand and preparing your catch for the pot.",
        read_time: "6 min read",
        content: `
<h2>Preparing Your Catch</h2>
<p>Clams often contain sand and grit that can ruin a meal. Purging them properly is essential.</p>
<h3>The Purging Process</h3>
<ol>
    <li>Mix seawater (or 1/3 cup salt per gallon of cold water) in a large container.</li>
    <li>Submerge the clams and refrigerate for 4-12 hours.</li>
    <li>Swap the water once — the clams will spit out their grit.</li>
    <li>Scrub the shells under cold running water before cooking.</li>
</ol>
<h2>Storage</h2>
<p>Keep live clams cold and breathing — in an open bowl under a damp towel, never sealed in plastic or fresh water. Cook within 48 hours and discard any that stay open when tapped.</p>
`
    },
    {
        id: 4,
        title: "Know the Rules: Permits & Regulations",
        author: "Forager Path Team",
        image: "https://images.unsplash.com/photo-1476673160081-cf065607f449?auto=format&fit=crop&w=800&q=80",
        excerpt: "Every coastal spot has its own rules. Here's how to check licenses, limits, and marine protected areas before you go.",
        read_time: "7 min read",
        content: `
<h2>Why Every Spot Is Different</h2>
<p>Coastal foraging is regulated by a patchwork of state fish &amp; wildlife rules, marine protected areas (MPAs), and local town ordinances. A beach that allows clamming may sit next to a reserve where touching anything is illegal.</p>
<h3>Before Every Trip, Check Three Things</h3>
<ul>
    <li><strong>License:</strong> Most states require a fishing or shellfish license for any harvest. In California, a sport fishing license covers most coastal invertebrates and seaweed.</li>
    <li><strong>Closures &amp; Quarantines:</strong> Biotoxin closures change weekly. Call your state's shellfish safety hotline the same day you harvest.</li>
    <li><strong>Boundaries:</strong> MPAs have precise GPS boundaries. Standing 100 yards on the wrong side can mean a serious fine.</li>
</ul>
<h2>Limits and Methods</h2>
<p>Daily bag limits, size minimums, and allowed gear vary by species. Mussels in California are limited to 10 lbs per day; razor clams in Washington are limited to the first 15 dug regardless of size or condition — you must keep every clam you dig.</p>
<h2>Where to Verify</h2>
<p>Every location page on Forager Path links to the official rules for that spot. When in doubt, the state agency website is the source of truth — regulations can change faster than any app.</p>
`
    }
];
