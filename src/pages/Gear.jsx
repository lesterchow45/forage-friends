import React from 'react';
import { Link } from 'react-router-dom';

const GEAR_SECTIONS = [
    {
        title: "Harvest Tools",
        blurb: "The right tool keeps shells intact, holes filled, and limits legal.",
        items: [
            {
                icon: "🔫",
                name: "Clam Gun or Clam Shovel",
                note: "The razor clammer's essential. A 4\" aluminum tube with a vent hole pulls a clean core; a narrow-bladed clam shovel is the traditional (and lighter) alternative."
            },
            {
                icon: "🧺",
                name: "Mesh Bag or Basket",
                note: "Lets sand and seawater drain while you work, and keeps your catch breathing. A floating basket is a game-changer on clam flats and while crabbing."
            },
            {
                icon: "🔪",
                name: "Blunt Knife or Scraper",
                note: "For cutting seaweed cleanly (never rip), shucking oysters beach-side where required, and prying mussels. A dedicated oyster knife saves your hands."
            },
            {
                icon: "🥅",
                name: "Crab Snare or Ring Net",
                note: "Shore crabbing needs no boat: snares cast from a heavy surf rod, rings drop from piers and jetties. Check your state's gear rules first."
            },
            {
                icon: "🪝",
                name: "Garden Fork / Hand Trowel",
                note: "All you need for bay clams like littlenecks and cockles, which sit just inches deep in gravel and mud."
            },
            {
                icon: "📏",
                name: "Caliper / Crab Gauge",
                note: "Size limits are strictly enforced. A $5 caliper measures Pismo clams and crab carapaces in one motion — undersized catch goes back immediately."
            }
        ]
    },
    {
        title: "Safety & Comfort",
        blurb: "The intertidal zone is slippery, cold, and on a timer. Dress for it.",
        items: [
            {
                icon: "🥾",
                name: "Grippy Boots or Waders",
                note: "Felt-free rubber boots with aggressive tread for rock; chest waders for winter clam flats. Neoprene booties work for warm-water wading."
            },
            {
                icon: "🧤",
                name: "Puncture-Resistant Gloves",
                note: "Barnacles, urchin spines, and oyster shells all draw blood. Nitrile-coated work gloves are cheap insurance."
            },
            {
                icon: "🔦",
                name: "Headlamp",
                note: "The best minus tides often land before dawn or after dusk — razor clam digs are famously a headlamp parade."
            },
            {
                icon: "🌊",
                name: "Tide Chart or App",
                note: "Print the day's NOAA tide table or screenshot it — cell service dies at the best spots. Set an alarm for the tide turn."
            },
            {
                icon: "🧊",
                name: "Cooler with Seawater Ice",
                note: "Shellfish must stay cold and alive from beach to kitchen. A small cooler with ice packs (catch out of direct contact) keeps everything safe."
            },
            {
                icon: "🩹",
                name: "First-Aid Basics",
                note: "Antiseptic wipes and waterproof bandages for shell cuts, tweezers for spines. Rinse urchin punctures in the hottest water you can tolerate."
            }
        ]
    },
    {
        title: "Know-Before-You-Go",
        blurb: "The two things wardens will actually ask to see.",
        items: [
            {
                icon: "🪪",
                name: "Your License",
                note: "Buy your state's fishing/shellfish license online the night before and keep it visible or on your phone as allowed. Public piers in California are the famous exception."
            },
            {
                icon: "📖",
                name: "A Regional Field Guide",
                note: "A waterproof intertidal field guide beats any app when your hands are wet. Cross-check every new species against two sources before eating it."
            },
            {
                icon: "📞",
                name: "The Biotoxin Hotline",
                note: "Save it in your contacts: CA (800) 553-4133 · OR (800) 448-2474 · WA (800) 562-5632. One call before harvesting shellfish, every single trip."
            }
        ]
    }
];

const Gear = () => {
    return (
        <div className="gear-page container section">
            <div className="text-center mb-16">
                <h1>Foraging Gear Guide</h1>
                <p className="subtitle">Everything you need for the intertidal zone — and nothing you don't.</p>
            </div>

            {GEAR_SECTIONS.map(section => (
                <section key={section.title} className="gear-section">
                    <div className="gear-section-header">
                        <h2>{section.title}</h2>
                        <p>{section.blurb}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-md">
                        {section.items.map(item => (
                            <div key={item.name} className="gear-card">
                                <span className="gear-icon">{item.icon}</span>
                                <h3>{item.name}</h3>
                                <p>{item.note}</p>
                            </div>
                        ))}
                    </div>
                </section>
            ))}

            <div className="gear-cta">
                <h3>New to all this?</h3>
                <p>Start with the basics — ethics, safety, and identification — before buying anything.</p>
                <Link to="/foraging-101" className="btn btn-primary">Read Foraging 101</Link>
            </div>

            <style>{`
        .gear-page {
          padding-top: 40px;
          padding-bottom: 80px;
        }
        .subtitle {
          color: var(--color-text-light);
          font-size: 1.2rem;
          margin-top: 8px;
        }
        .mb-16 { margin-bottom: 64px; }
        .text-center { text-align: center; }

        .gear-section {
          margin-bottom: 64px;
        }
        .gear-section-header {
          margin-bottom: 24px;
        }
        .gear-section-header h2 {
          margin-bottom: 4px;
        }
        .gear-section-header p {
          color: var(--color-text-light);
        }

        .gear-card {
          background: white;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 24px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .gear-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }
        .gear-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 12px;
        }
        .gear-card h3 {
          font-size: 1.1rem;
          margin-bottom: 8px;
          color: var(--color-text);
        }
        .gear-card p {
          color: var(--color-text-light);
          font-size: 0.92rem;
          line-height: 1.55;
        }

        .gear-cta {
          text-align: center;
          background: var(--color-primary-light);
          border-radius: 24px;
          padding: 48px 24px;
        }
        .gear-cta h3 {
          margin-bottom: 8px;
        }
        .gear-cta p {
          color: var(--color-text-light);
          margin-bottom: 24px;
        }
      `}</style>
        </div>
    );
};

export default Gear;
