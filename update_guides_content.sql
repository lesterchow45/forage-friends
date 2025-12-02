-- Add content column to guides table
ALTER TABLE guides ADD COLUMN IF NOT EXISTS content text;

-- Update existing guides with content
UPDATE guides
SET content = '
<h2>Respect the Intertidal Zone</h2>
<p>Tide pooling is a magical experience, but it requires responsibility. The creatures you see are in their home, and they are fragile.</p>
<h3>Key Rules:</h3>
<ul>
    <li><strong>Walk Gently:</strong> Step on bare rock or sand, not on barnacles, mussels, or anemones.</li>
    <li><strong>Touch Carefully:</strong> Use a wet finger to gently touch. Do not pry animals off rocks.</li>
    <li><strong>Leave No Trace:</strong> Take only photos, leave only footprints.</li>
    <li><strong>Put It Back:</strong> If you pick up a rock to look underneath, put it back exactly as you found it. Animals rely on that specific micro-habitat.</li>
</ul>
<p>By following these simple rules, we ensure that these ecosystems thrive for future generations.</p>
'
WHERE title = 'Tide Pooling Etiquette';

UPDATE guides
SET content = '
<h2>Red Tides and Biotoxins</h2>
<p>Harmful Algal Blooms (HABs), often called "red tides", can produce dangerous toxins that accumulate in shellfish.</p>
<h3>What to Look For:</h3>
<ul>
    <li><strong>Discolored Water:</strong> Water may look red, brown, or green.</li>
    <li><strong>Dead Fish:</strong> A large number of dead fish or birds can indicate a toxin event.</li>
    <li><strong>Official Warnings:</strong> Always check the state biotoxin hotline before harvesting.</li>
</ul>
<h3>Safety First:</h3>
<p>Cooking does <strong>NOT</strong> destroy these toxins. If in doubt, do not harvest. Paralytic Shellfish Poisoning (PSP) can be fatal.</p>
'
WHERE title = 'Identifying Toxic Algae';

UPDATE guides
SET content = '
<h2>Preparing Your Catch</h2>
<p>Clams often contain sand and grit that can ruin a meal. Purging them properly is essential.</p>
<h3>The Purging Process:</h3>
<ol>
    <li><strong>Rinse:</strong> Scrub the clams under cold running water to remove exterior mud.</li>
    <li><strong>Soak:</strong> Place clams in a bowl of cold saltwater (approx. 1/3 cup salt per gallon). Let them sit for 30-60 minutes.</li>
    <li><strong>Repeat:</strong> Change the water and repeat if the water is very dirty.</li>
    <li><strong>Check:</strong> Discard any clams that are open and do not close when tapped, or any with broken shells.</li>
</ol>
<p>Now your clams are ready to steam, chowder, or fry!</p>
'
WHERE title = 'How to Clean Clams';
