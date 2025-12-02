-- Insert new guides
INSERT INTO guides (title, author, image, excerpt, read_time, content)
VALUES
  (
    'Mushrooms of the Pacific Northwest',
    'Mycologist Mike',
    'https://images.unsplash.com/photo-1598535378779-e8529568e5c4?auto=format&fit=crop&w=800&q=80',
    'A beginner''s guide to finding Chanterelles, Morels, and Porcini in the PNW forests.',
    '10 min read',
    '
    <h2>The Fungal Kingdom Awaits</h2>
    <p>The Pacific Northwest is a mushroom hunter''s paradise. The damp, temperate climate creates the perfect conditions for some of the world''s most prized edible fungi.</p>
    <img src="https://images.unsplash.com/photo-1604848698030-c434ba08ece1?auto=format&fit=crop&w=800&q=80" alt="Mushroom Forest" />
    
    <h3>1. Golden Chanterelle (Cantharellus formosus)</h3>
    <p><strong>Season:</strong> Fall to Winter</p>
    <p><strong>Habitat:</strong> Coniferous forests, often under Douglas Fir and Hemlock.</p>
    <p><strong>ID Tips:</strong> Look for false gills (ridges) that run down the stem. They smell faintly of apricots.</p>
    <img src="https://images.unsplash.com/photo-1598535378779-e8529568e5c4?auto=format&fit=crop&w=800&q=80" alt="Chanterelles" />
    
    <h3>2. Morel (Morchella)</h3>
    <p><strong>Season:</strong> Spring</p>
    <p><strong>Habitat:</strong> Burn sites, old orchards, and mixed forests.</p>
    <p><strong>ID Tips:</strong> The cap looks like a honeycomb. It is hollow when sliced open.</p>
    
    <h3>3. King Bolete / Porcini (Boletus edulis)</h3>
    <p><strong>Season:</strong> Fall</p>
    <p><strong>Habitat:</strong> Spruce and Pine forests.</p>
    <p><strong>ID Tips:</strong> Has a sponge-like pore surface underneath instead of gills. The stem is thick and bulbous.</p>
    
    <div class="alert alert-warning">
      <strong>Warning:</strong> Always cook wild mushrooms thoroughly. Never eat them raw.
    </div>
    '
  ),
  (
    'Coastal Foraging for Beginners',
    'Sarah Seaweed',
    'https://images.unsplash.com/photo-1615169019860-25d2b7812a64?auto=format&fit=crop&w=800&q=80',
    'Discover the bounty of the intertidal zone: Mussels, Clams, and Seaweed.',
    '8 min read',
    '
    <h2>The Table is Set by the Tide</h2>
    <p>Coastal foraging is accessible and rewarding. Unlike mushroom hunting, your prey doesn''t hide!</p>
    <img src="https://images.unsplash.com/photo-1469307562386-3548972f9693?auto=format&fit=crop&w=800&q=80" alt="Coastal Tide Pool" />
    
    <h3>California Mussels</h3>
    <p>Abundant on rocky shores. Harvest only during months with an "R"? Not necessarily, but always check the <strong>Biotoxin Hotline</strong> (1-800-553-4133 in CA) before you go. Quarantine is usually May 1 to Oct 31.</p>
    
    <h3>Seaweed Superfoods</h3>
    <p>Most seaweed is edible, though not all is palatable. Try:</p>
    <ul>
      <li><strong>Nori (Pyropia):</strong> Thin, purple-black sheets on rocks.</li>
      <li><strong>Sea Lettuce (Ulva):</strong> Bright green sheets. Great dried or in soups.</li>
      <li><strong>Kombu (Laminaria):</strong> Thick brown kelp. Use for dashi stock.</li>
    </ul>
    <img src="https://images.unsplash.com/photo-1615169019860-25d2b7812a64?auto=format&fit=crop&w=800&q=80" alt="Seaweed" />
    
    <h3>Tools You Need</h3>
    <ul>
      <li><strong>Tide Book:</strong> Go at low tide (negative tides are best).</li>
      <li><strong>Scissors:</strong> For cutting seaweed (leave the holdfast!).</li>
      <li><strong>Gloves:</strong> Barnacles are sharp.</li>
    </ul>
    '
  ),
  (
    'The Forager''s Calendar',
    'Seasonal Scout',
    'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
    'What to look for in every season. A year-round guide to wild food.',
    '5 min read',
    '
    <h2>Nature''s Schedule</h2>
    <p>Foraging connects you to the rhythm of the seasons. Here is a general guide for North America.</p>
    
    <h3>Spring: The Awakening</h3>
    <p>Greens and shoots are the stars. Look for Stinging Nettles, Fiddleheads, Wild Garlic, and Dandelion greens. Morels appear in the woods.</p>
    <img src="https://images.unsplash.com/photo-1587393855524-087f83d95bc9?auto=format&fit=crop&w=800&q=80" alt="Spring Foraging" />
    
    <h3>Summer: The Sweetness</h3>
    <p>Berries take over. Blackberries, Raspberries, and Huckleberries. Elderflowers bloom, perfect for cordial. Coastal foraging is often closed due to red tides.</p>
    
    <h3>Fall: The Harvest</h3>
    <p>The golden age of mushrooms. Chanterelles, Porcini, and Matsutake. Nuts like Acorns and Walnuts drop. Rosehips ripen.</p>
    <img src="https://images.unsplash.com/photo-1504194921103-f8b80c338d4d?auto=format&fit=crop&w=800&q=80" alt="Fall Harvest" />
    
    <h3>Winter: The Quiet</h3>
    <p>In mild climates (like California), winter is prime mushroom season. On the coast, negative tides return in the afternoon/evening, making for great tide pooling.</p>
    '
  );
