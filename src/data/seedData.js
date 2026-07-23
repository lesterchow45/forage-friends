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
    },
    {
        id: 1001,
        name: "Pescadero State Beach",
        region: "California",
        image: "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviews: 410,
        catch: ["Mussels", "Sea Lettuce", "Monkeyface Eel"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Winter",
        description: "A long, rocky stretch of San Mateo coast with productive mussel beds and easy pullout parking. Poke-poling for monkeyface eels is a local tradition at the rocky points.",
        coordinates: [37.2652, -122.4127],
        tags: ["Mussels", "Rocky", "Beginner Friendly", "Coastal Foraging"],
        access_notes: "Three signed parking lots off Highway 1. The northern rocks near Pescadero Creek mouth are the most productive at low tide.",
        regulations: {
            text: "CA sport fishing license required. Mussels limited to 10 lbs in the shell per day. Annual mussel quarantine May-Oct — check the biotoxin hotline (800) 553-4133.",
            url: "https://wildlife.ca.gov/Fishing/Ocean/Regulations/Sport-Fishing",
            permitRequired: true
        }
    },
    {
        id: 1002,
        name: "Salt Point State Park",
        region: "California",
        image: "https://images.unsplash.com/photo-1663517684742-8d2df9993924?auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 690,
        catch: ["Sea Urchin", "Mussels", "Seaweed"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Winter",
        description: "One of the classic Sonoma coast foraging destinations. Gerstle Cove is a protected reserve (no take), but the coastline north of it is open for urchin, mussels, and seaweed.",
        coordinates: [38.5666, -123.3313],
        tags: ["Urchin", "Rocky", "Iconic", "Coastal Foraging"],
        access_notes: "Enter at the main Salt Point lot. Gerstle Cove SMR is no-take — forage north of the cove boundary markers only.",
        regulations: {
            text: "CA license required. Gerstle Cove SMR is strictly no-take. Purple urchin has no limit in some zones; check current CDFW rules. Abalone remains closed.",
            url: "https://wildlife.ca.gov/Conservation/Marine/MPAs",
            permitRequired: true
        }
    },
    {
        id: 1003,
        name: "Tomales Bay: Lawson's Landing",
        region: "California",
        image: "https://images.unsplash.com/photo-1504564396566-1c71546c0c32?auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 520,
        catch: ["Gaper Clams", "Littlenecks", "Cockles"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Winter",
        description: "The sand flats at the mouth of Tomales Bay are the Bay Area's favorite clamming grounds. Big horseneck (gaper) clams at negative tides, with a friendly campground scene.",
        coordinates: [38.2323, -122.9642],
        tags: ["Clams", "Flats", "Family Friendly", "Coastal Foraging"],
        access_notes: "Private campground at Dillon Beach charges day-use; the clam flats are a short walk south at low tide. Bring a shovel and a bucket.",
        regulations: {
            text: "CA license required. Gaper and Washington clams: 10 in combination per day. No digging within Point Reyes National Seashore boundaries to the south.",
            url: "https://wildlife.ca.gov/Fishing/Ocean/Regulations/Sport-Fishing",
            permitRequired: true
        }
    },
    {
        id: 1004,
        name: "MacKerricher State Park",
        region: "California",
        image: "https://images.unsplash.com/photo-1605218457336-92748b692929?auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 380,
        catch: ["Seaweed", "Mussels", "Surf Fish"],
        tidal_status: "Variable",
        toxin_level: "Safe",
        status: "Restricted",
        best_season: "Spring",
        description: "Miles of rocky shelf and tidepools just north of Fort Bragg. Excellent spring seaweed harvesting — nori, wakame, and sea lettuce — outside the protected zones.",
        coordinates: [39.4874, -123.7995],
        tags: ["Seaweed", "Tide Pools", "Scenic", "Coastal Foraging"],
        access_notes: "Park at Laguna Point. The MacKerricher SMCA covers part of the shoreline — check posted maps for the open sections.",
        regulations: {
            text: "CA license required for all take. Seaweed limited to 10 lbs wet weight per day; no sea palm harvest. Portions fall in MacKerricher SMCA with special rules.",
            url: "https://wildlife.ca.gov/Conservation/Marine/MPAs",
            permitRequired: true
        }
    },
    {
        id: 1005,
        name: "Trinidad State Beach",
        region: "California",
        image: "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 290,
        catch: ["Mussels", "Seaweed", "Surfperch"],
        tidal_status: "Low Tide",
        toxin_level: "Caution",
        status: "Open",
        best_season: "Summer",
        description: "A dramatic Humboldt County cove with sea stacks and rich intertidal life. Reliable mussel beds and good seaweed picking in the lee of Trinidad Head.",
        coordinates: [41.0593, -124.1476],
        tags: ["Mussels", "Remote", "Scenic", "Coastal Foraging"],
        access_notes: "Steep trail from the Stagecoach Road lot. North Coast swells are serious — never turn your back on the ocean here.",
        regulations: {
            text: "CA license required. Check biotoxin status for Humboldt County — PSP events are more common on the North Coast. Mussel quarantine May-Oct.",
            url: "https://wildlife.ca.gov/Fishing/Ocean/Regulations/Sport-Fishing",
            permitRequired: true
        }
    },
    {
        id: 1006,
        name: "Pismo Beach",
        region: "California",
        image: "https://images.unsplash.com/photo-1520483601560-389dff434fdf?auto=format&fit=crop&w=800&q=80",
        rating: 4.4,
        reviews: 860,
        catch: ["Pismo Clams"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Winter",
        description: "Home of the legendary Pismo clam, which has staged a major comeback. Most clams are still under the legal size — bring a caliper and expect to re-bury undersized ones.",
        coordinates: [35.1428, -120.6413],
        tags: ["Clams", "Sandy Beach", "Iconic", "Coastal Foraging"],
        access_notes: "Dig the flats south of the pier at a minus tide. CDFW wardens check licenses and sizes here regularly.",
        regulations: {
            text: "CA license required (visible above the waist while digging). Pismo clams: 10 per day, 4.5 inch minimum — nearly all clams are undersized, measure everything.",
            url: "https://wildlife.ca.gov/Fishing/Ocean/Regulations/Sport-Fishing",
            permitRequired: true
        }
    },
    {
        id: 1007,
        name: "Cannon Beach",
        region: "Oregon",
        image: "https://images.unsplash.com/photo-1595252387976-20612a32d5e1?auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviews: 720,
        catch: ["Razor Clams", "Mussels"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Spring",
        description: "Iconic Haystack Rock scenery with productive razor clam beds on the flat sand north of town. The rock itself is a protected Marine Garden — look, don't touch.",
        coordinates: [45.8918, -123.9615],
        tags: ["Razor Clams", "Sandy Beach", "Scenic", "Coastal Foraging"],
        access_notes: "Dig north of Ecola Creek. Haystack Rock's intertidal zone is a no-collection Marine Garden with tidepool docents in summer.",
        regulations: {
            text: "ODFW shellfish license required. Razor clams: first 15 dug must be kept regardless of size. Check ODA shellfish hotline (800) 448-2474 for domoic acid closures.",
            url: "https://myodfw.com/crabbing-clamming",
            permitRequired: true
        }
    },
    {
        id: 1008,
        name: "Netarts Bay",
        region: "Oregon",
        image: "https://images.unsplash.com/photo-1548565495-a6925f70dd28?auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 340,
        catch: ["Purple Varnish Clams", "Cockles", "Oysters"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Year-round",
        description: "A small, clean bay with easy limits of purple varnish clams — one of the friendliest beginner digs on the Oregon coast. Extensive cockle beds on the sand bars.",
        coordinates: [45.4076, -123.9430],
        tags: ["Clams", "Bay", "Beginner Friendly", "Coastal Foraging"],
        access_notes: "Park at the boat launch on Netarts Bay Road. Varnish clams are shallow — a hand trowel is all you need.",
        regulations: {
            text: "ODFW shellfish license required. Purple varnish clams: 72 per day. Wild oyster harvest is not allowed in Netarts Bay — oyster beds are leased plots.",
            url: "https://myodfw.com/crabbing-clamming",
            permitRequired: true
        }
    },
    {
        id: 1009,
        name: "Coos Bay: Charleston Flats",
        region: "Oregon",
        image: "https://images.unsplash.com/photo-1473442240418-4521629be2ce?auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 450,
        catch: ["Gaper Clams", "Dungeness Crab", "Cockles"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Fall",
        description: "Oregon's south coast workhorse: big gaper clams on the flats, crabbing off the Charleston docks, and a fish market to compare your haul against.",
        coordinates: [43.3452, -124.3287],
        tags: ["Clams", "Crabbing", "Easy Access", "Coastal Foraging"],
        tide_station_id: "9432780",
        access_notes: "Clam the flats east of the Charleston bridge at low tide; crab from the public docks any tide. Rentals available in town.",
        regulations: {
            text: "ODFW shellfish license required. Bay clams: 20 per day (only 12 may be gapers). Dungeness: 12 males, 5.75 inch minimum, Dec-Oct in bays.",
            url: "https://myodfw.com/crabbing-clamming",
            permitRequired: true
        }
    },
    {
        id: 1010,
        name: "Long Beach Peninsula",
        region: "Washington",
        image: "https://images.unsplash.com/photo-1595252387976-20612a32d5e1?auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 980,
        catch: ["Razor Clams"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Restricted",
        best_season: "Winter",
        description: "Twenty-eight miles of razor clam beach — the epicenter of Washington's beloved dig. Open only on WDFW-announced dig dates, which draw thousands of headlamps at dawn.",
        coordinates: [46.3620, -124.0554],
        tags: ["Razor Clams", "Sandy Beach", "Seasonal", "Coastal Foraging"],
        access_notes: "Drive-on beach access at multiple approaches. Digs are announced by WDFW after marine toxin testing — never dig outside announced dates.",
        regulations: {
            text: "WDFW razor clam license required. 15 clams per day, first 15 dug regardless of condition. Open only on scheduled digs after toxin tests — check WDFW before every trip.",
            url: "https://wdfw.wa.gov/fishing/shellfishing-regulations/razor-clams",
            permitRequired: true
        }
    },
    {
        id: 1011,
        name: "Dungeness Spit",
        region: "Washington",
        image: "https://images.unsplash.com/photo-1473442240418-4521629be2ce?auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviews: 410,
        catch: ["Dungeness Crab", "Littlenecks", "Butter Clams"],
        tidal_status: "Rising",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Summer",
        description: "The crab's namesake water. Five miles of sand spit shelter productive crabbing grounds and clam beds inside Dungeness Bay, with the Olympics as a backdrop.",
        coordinates: [48.1517, -123.1350],
        tags: ["Crabbing", "Clams", "Scenic", "Coastal Foraging"],
        access_notes: "Launch small boats from Cline Spit for crabbing. Parts of the spit are a National Wildlife Refuge with seasonal closures for birds.",
        regulations: {
            text: "WDFW license with crab endorsement required. Summer crab seasons set annually; record your catch on the catch card. Refuge areas prohibit harvest.",
            url: "https://wdfw.wa.gov/fishing/shellfishing-regulations",
            permitRequired: true
        }
    },
    {
        id: 1012,
        name: "Hood Canal: Dosewallips Flats",
        region: "Washington",
        image: "https://images.unsplash.com/photo-1548565495-a6925f70dd28?auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 530,
        catch: ["Oysters", "Littlenecks", "Manila Clams"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Spring",
        description: "Public tidelands at the Dosewallips river delta with abundant Manila clams and picking-size oysters. One of the most reliable public harvest beaches on Hood Canal.",
        coordinates: [47.6874, -122.8955],
        tags: ["Oysters", "Clams", "Family Friendly", "Coastal Foraging"],
        access_notes: "Access through Dosewallips State Park (Discover Pass). Shuck oysters on the beach and leave shells — it's the law and reseeds the beds.",
        regulations: {
            text: "WDFW shellfish license required. Oysters: 18 per day, shucked on the beach. Manila clams: 40 or 10 lbs. Beach-specific seasons — verify on the WDFW beach page.",
            url: "https://wdfw.wa.gov/places-to-go/shellfish-beaches",
            permitRequired: true
        }
    },
    {
        id: 1013,
        name: "Ipswich: Crane Beach Flats",
        region: "Massachusetts",
        image: "https://images.unsplash.com/photo-1504564396566-1c71546c0c32?auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviews: 260,
        catch: ["Softshell Clams", "Razor Clams"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Fall",
        description: "The famous 'Ipswich clam' — sweet softshells from the Essex River estuary flats. A working clamming town where recreational diggers share the flats with pros.",
        coordinates: [42.6837, -70.7644],
        tags: ["Clams", "Flats", "Iconic", "Coastal Foraging"],
        access_notes: "Town of Ipswich recreational permit from the shellfish constable; open flats posted weekly at the town landing.",
        regulations: {
            text: "Town recreational shellfish permit required (residents and non-residents). One peck per week limit. Flats close after heavy rain — check the constable's postings.",
            url: "https://www.ipswichma.gov/430/Shellfish",
            permitRequired: true
        }
    },
    {
        id: 1014,
        name: "Chincoteague Bay",
        region: "Virginia",
        image: "https://images.unsplash.com/photo-1621523520170-634aa54bd37d?auto=format&fit=crop&w=800&q=80",
        rating: 4.4,
        reviews: 310,
        catch: ["Hard Clams", "Oysters", "Blue Crab"],
        tidal_status: "Variable",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Summer",
        description: "Shallow, warm seaside bay behind Assateague Island. Signing clams with your toes, chicken-necking for blue crabs, and wild oyster rocks at low water.",
        coordinates: [37.9335, -75.3785],
        tags: ["Clams", "Blue Crab", "Warm Water", "Coastal Foraging"],
        access_notes: "Kayak access from Curtis Merritt Harbor opens up the best flats. National Wildlife Refuge sections are closed to harvest.",
        regulations: {
            text: "Virginia saltwater license required for most harvest. Clams: 250 per day recreational. Oyster season and sanctuary rules set by VMRC — many rocks are closed.",
            url: "https://mrc.virginia.gov/regulations.shtm",
            permitRequired: true
        }
    },
    {
        id: 1015,
        name: "Ocracoke Island Flats",
        region: "North Carolina",
        image: "https://images.unsplash.com/photo-1504564396566-1c71546c0c32?auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 190,
        catch: ["Hard Clams", "Oysters", "Blue Crab"],
        tidal_status: "Low Tide",
        toxin_level: "Safe",
        status: "Open",
        best_season: "Fall",
        description: "Remote Outer Banks clamming on the Pamlico Sound side — rake the grass-edge sloughs for chowder clams, with oyster rocks a short paddle away.",
        coordinates: [35.1146, -75.9776],
        tags: ["Clams", "Remote", "Adventure", "Coastal Foraging"],
        access_notes: "Sound-side pulloffs along Highway 12. A clam rake and floating basket make the grass flats easy work.",
        regulations: {
            text: "No license needed for recreational clamming under 100 clams/day in NC. Oysters: seasonal (Oct 15-Mar 31), 1 bushel per day. Check NCDMF proclamations for closures.",
            url: "https://www.deq.nc.gov/about/divisions/marine-fisheries",
            permitRequired: false
        }
    },
    {
        id: 1016,
        name: "Kodiak: Buskin River Beaches",
        region: "Alaska",
        image: "https://images.unsplash.com/photo-1551720956-4134f9512641?auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviews: 120,
        catch: ["Butter Clams", "Cockles", "Seaweed"],
        tidal_status: "Low Tide",
        toxin_level: "Caution",
        status: "Open",
        best_season: "Summer",
        description: "Huge tidal swings expose rich clam beaches minutes from town. Kodiak's cold, clear water grows serious shellfish — and serious PSP risk, so test-listed beaches only.",
        coordinates: [57.7568, -152.4877],
        tags: ["Clams", "Wilderness", "Cold Water", "Coastal Foraging"],
        access_notes: "Road-system beaches near the Buskin River mouth. Watch the tide book — 20-foot exchanges move fast here.",
        regulations: {
            text: "ADF&G sport license required. PSP is a life-threatening risk in Alaska — the state only tests select beaches; untested beaches are harvest-at-your-own-risk.",
            url: "https://www.adfg.alaska.gov/index.cfm?adfg=fishingsportfishinginfo.main",
            permitRequired: true
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
        id: 1001,
        name: "California Mussel",
        scientific_name: "Mytilus californianus",
        image: "https://images.unsplash.com/photo-1505835672097-7143354f6775?auto=format&fit=crop&w=800&q=80",
        season: "Nov - Apr (quarantine May-Oct)",
        edibility: "Choice Edible",
        description: "Abundant on exposed rocky shores. Subject to an annual biotoxin quarantine in California — never harvest May through October.",
        habitat: "Wave-exposed intertidal rocks."
    },
    {
        id: 1002,
        name: "Sea Lettuce",
        scientific_name: "Ulva lactuca",
        image: "https://images.unsplash.com/photo-1559654424-2c559344a735?auto=format&fit=crop&w=800&q=80",
        season: "Spring - Summer",
        edibility: "Edible (Salads, Soups)",
        description: "Bright green, translucent sheets of algae. Rinse well and harvest only from clean water away from runoff.",
        habitat: "Mid to low intertidal, calm bays and rocks."
    },
    {
        id: 1003,
        name: "Pacific Oyster",
        scientific_name: "Magallana gigas",
        image: "https://images.unsplash.com/photo-1548565495-a6925f70dd28?auto=format&fit=crop&w=800&q=80",
        season: "Fall - Spring",
        edibility: "Choice Edible",
        description: "The classic foraged oyster of the Pacific Northwest. Shuck on the beach and leave the shells where you found them.",
        habitat: "Rocky beaches and tide flats of protected bays."
    },
    {
        id: 1004,
        name: "Nori / Laver",
        scientific_name: "Pyropia spp.",
        image: "https://images.unsplash.com/photo-1605218457336-92748b692929?auto=format&fit=crop&w=800&q=80",
        season: "Spring",
        edibility: "Choice Edible (Dried)",
        description: "Thin, dark ruffled blades found high in the intertidal. Dries into the classic sushi seaweed.",
        habitat: "High intertidal rocks with wave splash."
    },
    {
        id: 1005,
        name: "Gooseneck Barnacle",
        scientific_name: "Pollicipes polymerus",
        image: "https://images.unsplash.com/photo-1550949006-567565d03d4b?auto=format&fit=crop&w=800&q=80",
        season: "Year-round",
        edibility: "Choice Edible",
        description: "A delicacy in Spain (percebes), abundant on wave-battered Pacific rocks. Harvesting is dangerous — only take from spots you can safely reach at low tide.",
        habitat: "Exposed, high-energy rocky intertidal."
    },
    {
        id: 1006,
        name: "Pacific Littleneck Clam",
        scientific_name: "Leukoma staminea",
        image: "https://images.unsplash.com/photo-1620634272982-63c133278822?auto=format&fit=crop&w=800&q=80",
        season: "Year-round",
        edibility: "Choice Edible",
        description: "The classic steamer clam of the West Coast. Found just a few inches deep in gravel-mud beaches — look for tiny paired siphon holes.",
        habitat: "Gravel and mud beaches, mid to low intertidal."
    },
    {
        id: 1007,
        name: "Geoduck",
        scientific_name: "Panopea generosa",
        image: "https://images.unsplash.com/photo-1620634272982-63c133278822?auto=format&fit=crop&w=800&q=80",
        season: "Spring - Summer (extreme low tides)",
        edibility: "Choice Edible",
        description: "The world's largest burrowing clam, buried up to three feet deep. Digging one out is a full-body commitment — bring a tube and a friend.",
        habitat: "Low intertidal to subtidal sand and mud, Puget Sound."
    },
    {
        id: 1008,
        name: "Heart Cockle",
        scientific_name: "Clinocardium nuttallii",
        image: "https://images.unsplash.com/photo-1620634272982-63c133278822?auto=format&fit=crop&w=800&q=80",
        season: "Year-round",
        edibility: "Good Edible",
        description: "Ridged, heart-shaped shells that sit just under the surface — often visible on top of the sand. The easiest clam for beginners to find.",
        habitat: "Sand and eelgrass flats in protected bays."
    },
    {
        id: 1009,
        name: "Blue Mussel",
        scientific_name: "Mytilus edulis",
        image: "https://images.unsplash.com/photo-1505835672097-7143354f6775?auto=format&fit=crop&w=800&q=80",
        season: "Fall - Spring (cold months)",
        edibility: "Choice Edible",
        description: "The Atlantic counterpart to the California mussel, forming dense beds on rocks and pilings. Harvest only from clean, certified-open waters.",
        habitat: "Rocky shores, jetties, and pilings, Atlantic coast."
    },
    {
        id: 1010,
        name: "Softshell Clam",
        scientific_name: "Mya arenaria",
        image: "https://images.unsplash.com/photo-1504564396566-1c71546c0c32?auto=format&fit=crop&w=800&q=80",
        season: "Year-round",
        edibility: "Choice Edible (Steamers)",
        description: "The 'Ipswich' or steamer clam of New England fame. Brittle-shelled and deep in the mud — dig carefully beside the hole, not on top of it.",
        habitat: "Mud flats and estuaries, Atlantic and Pacific."
    },
    {
        id: 1011,
        name: "Dulse",
        scientific_name: "Palmaria palmata",
        image: "https://images.unsplash.com/photo-1559654424-2c559344a735?auto=format&fit=crop&w=800&q=80",
        season: "Spring - Summer",
        edibility: "Choice Edible (Dried)",
        description: "Reddish-purple fronds with a savory, almost bacon-like flavor when pan-crisped. A North Atlantic staple that also grows on the Pacific coast.",
        habitat: "Mid to low intertidal rocks, often on mussel beds."
    },
    {
        id: 1012,
        name: "Red Rock Crab",
        scientific_name: "Cancer productus",
        image: "https://images.unsplash.com/photo-1562592282-351547471265?auto=format&fit=crop&w=800&q=80",
        season: "Year-round",
        edibility: "Good Edible",
        description: "Feisty, hard-shelled crab that shares water with Dungeness but usually has no season closure. Less meat, but sweet — and often overlooked.",
        habitat: "Rocky bottoms, jetties, and pilings."
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
        id: 1001,
        title: "Know the Rules: Permits & Regulations",
        author: "Forager Path Team",
        image: "https://images.unsplash.com/photo-1505835672097-7143354f6775?auto=format&fit=crop&w=800&q=80",
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
    },
    {
        id: 1002,
        title: "Reading Tide Charts Like a Forager",
        author: "Forager Path Team",
        image: "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?auto=format&fit=crop&w=800&q=80",
        excerpt: "Negative tides are your golden ticket. Here's how to find them, plan around them, and stay safe when the water comes back.",
        read_time: "6 min read",
        content: `
<h2>Why Tides Rule Everything</h2>
<p>Almost everything worth foraging on the coast lives in the intertidal zone — the strip of shore that's underwater most of the time. The lower the tide, the more of that zone you can reach. A day that looks unremarkable on the calendar can be a once-a-month opportunity if it carries a big minus tide.</p>
<h3>Understanding the Numbers</h3>
<p>Tide heights are measured against a zero point called <strong>MLLW</strong> (Mean Lower Low Water — the average of the lower of each day's two low tides). A "-1.4 ft" tide is 1.4 feet <em>below</em> that average. On the Pacific coast:</p>
<ul>
    <li><strong>+1.0 ft and below:</strong> good tidepooling begins</li>
    <li><strong>0.0 ft:</strong> mussel beds and most clam flats open up</li>
    <li><strong>-1.0 ft and lower:</strong> the good stuff — urchin, deep clam beds, the lowest kelp</li>
</ul>
<h2>Planning Your Window</h2>
<p>Arrive <strong>one to two hours before</strong> the listed low. You'll follow the water out, work the lowest zone at slack, and let the incoming tide push you back. The lowest tides of the year cluster around the full and new moons of summer and winter — mark them in advance.</p>
<h3>The Safety Rules</h3>
<ul>
    <li>Know when the tide turns, and set an alarm on your phone.</li>
    <li>Never let the incoming tide get between you and your exit — points and coves cut off fast.</li>
    <li>Watch the ocean, not just your feet. Sneaker waves kill foragers every year on the Pacific coast.</li>
    <li>Tell someone where you're going, and forage with a partner on remote shores.</li>
</ul>
<p>Every spot on Forager Path with a NOAA station shows its next high and low tide right on the page — check it before you drive.</p>
`
    },
    {
        id: 1003,
        title: "Clamming 101: Tools & Technique",
        author: "Chef Forager",
        image: "https://images.unsplash.com/photo-1504564396566-1c71546c0c32?auto=format&fit=crop&w=800&q=80",
        excerpt: "Reading the flats, digging without breaking shells, and the etiquette that keeps clam beds healthy.",
        read_time: "8 min read",
        content: `
<h2>Reading the Flats</h2>
<p>Clams advertise themselves if you know what to look for. Walk the flats at low tide and watch for <strong>"shows"</strong> — small holes or dimples where a clam's siphon reaches the surface. Stomp your foot nearby: a squirt of water is a clam ringing the dinner bell.</p>
<h3>What the Show Tells You</h3>
<ul>
    <li><strong>Tiny paired holes:</strong> littlenecks or Manila clams, just a few inches down</li>
    <li><strong>A single large dimple:</strong> gaper or horseneck clam, possibly a foot or more deep</li>
    <li><strong>Keyhole-shaped show in surf sand:</strong> razor clam — dig fast, they do</li>
</ul>
<h2>The Dig</h2>
<p>Dig <em>beside</em> the show, not on top of it, and angle in — digging straight down is how shells get crushed. For razor clams, a purpose-made <strong>clam gun</strong> (a tube with a vent hole) or narrow clam shovel is worth every penny. For bay clams, a garden fork or trowel does fine.</p>
<h3>Flat Etiquette</h3>
<ul>
    <li><strong>Fill your holes.</strong> Open pits smother juvenile clams and are the fastest way to get flats closed to the public.</li>
    <li><strong>Keep what you dig</strong> where the law requires it (razor clams in OR and WA — no high-grading).</li>
    <li><strong>Measure everything</strong> and re-bury undersized clams siphon-up, immediately.</li>
</ul>
<h2>After the Dig</h2>
<p>Keep clams cool and damp in a breathable container — never sealed in fresh water. Purge sandy species overnight in clean seawater, scrub the shells, and cook within two days. Discard any clam that won't close when tapped.</p>
`
    },
    {
        id: 1004,
        title: "Sustainable Seaweed Harvesting",
        author: "Marine Biologist",
        image: "https://images.unsplash.com/photo-1559654424-2c559344a735?auto=format&fit=crop&w=800&q=80",
        excerpt: "Seaweed is the gateway coastal forage — abundant, nutritious, and nearly impossible to misidentify. Cut, don't rip.",
        read_time: "7 min read",
        content: `
<h2>Why Start with Seaweed</h2>
<p>There are no deadly seaweeds on North American coasts — a rare thing in foraging. Nearly every conspicuous species is edible (a few are just unpalatable), which makes seaweed the safest possible entry into eating from the shore. It's also packed with minerals, iodine, and umami.</p>
<h3>The One Rule That Matters</h3>
<p><strong>Cut, don't rip.</strong> Use scissors or a knife to trim the upper portion of the blade and leave the holdfast and lower growth attached to the rock. A cut plant regrows; a ripped one is gone, along with the habitat it sheltered.</p>
<h2>The Beginner's Big Four</h2>
<ul>
    <li><strong>Sea lettuce:</strong> bright green sheets. Rinse well; use fresh in salads or dry into flakes.</li>
    <li><strong>Nori/laver:</strong> dark ruffled blades high on the rocks in spring. Dry-toast for the classic flavor.</li>
    <li><strong>Kombu/kelp:</strong> thick blades for broth and pickles. Take a partial blade only.</li>
    <li><strong>Dulse:</strong> purple-red fronds; pan-fry until crisp for the famous "sea bacon."</li>
</ul>
<h2>Where and When</h2>
<p>Harvest from clean, open-coast water on an outgoing tide — never near marinas, river mouths after rain, or outfalls. Spring is peak season: new growth is tender and the blades haven't been grazed or sun-bleached.</p>
<h3>Rules to Know</h3>
<ul>
    <li>California: sport fishing license required; 10 lbs wet per day; <strong>no sea palm</strong>, and no harvest in SMRs.</li>
    <li>Washington: seaweed license required; 10 lbs wet per day; some state parks closed to harvest.</li>
    <li>Oregon: no license for personal seaweed harvest (1 gallon/day), but closures apply in marine reserves.</li>
</ul>
`
    },
    {
        id: 1005,
        title: "Crabbing from Piers & Jetties",
        author: "Forager Path Team",
        image: "https://images.unsplash.com/photo-1595252387976-20612a32d5e1?auto=format&fit=crop&w=800&q=80",
        excerpt: "No boat required: snares, rings, and the public-pier rules that make crabbing the most accessible coastal harvest.",
        read_time: "6 min read",
        content: `
<h2>The Most Accessible Harvest</h2>
<p>Crabbing needs no digging, no negative tide, and often no boat. A public pier, a crab snare or ring net, and a chicken leg will put dinner on the table — and in California, <strong>no fishing license is required on public piers</strong> (though all other rules still apply).</p>
<h3>Gear: Rings vs. Snares</h3>
<ul>
    <li><strong>Ring nets:</strong> drop flat, soak 10-20 minutes, pull fast and smooth. Best from docks and jetties over soft bottom.</li>
    <li><strong>Crab snares:</strong> a bait cage ringed with loops, cast from shore with a heavy rod. The active, sporty option — and deadly effective for Dungeness off surf beaches.</li>
</ul>
<h2>Measure, Sex, Count</h2>
<p>Every state regulates crab by <strong>size, sex, and season</strong>. Carry a crab caliper and learn to flip a crab safely: males have a narrow abdomen flap, females a broad one. Typical rules (verify current regs for your spot):</p>
<ul>
    <li><strong>California:</strong> Dungeness 5.75 in minimum, rock crab 4 in. Seasonal Dungeness closures for whale entanglement and domoic acid are common.</li>
    <li><strong>Oregon:</strong> 12 male Dungeness, 5.75 in; bays open most of the year.</li>
    <li><strong>Washington:</strong> endorsement plus catch card; summer openings set annually.</li>
</ul>
<h2>Don't Skip the Advisory Check</h2>
<p>Domoic acid concentrates in crab viscera ("crab butter"). During advisories you may be told to clean crab before cooking and discard the guts — check your state's shellfish safety page the day you go.</p>
`
    }
];
