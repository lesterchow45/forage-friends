/**
 * Static data for recreational fishing/shellfish permits.
 * Prices are approximate for 2025.
 */
const PERMIT_DATA = {
    CA: {
        state: "California",
        agency: "California Department of Fish and Wildlife",
        url: "https://wildlife.ca.gov/Licensing/Fishing",
        licenses: [
            { type: "Annual Sport Fishing (Resident)", cost: "$61.82", note: "Required for all fishing" },
            { type: "Annual Sport Fishing (Non-Resident)", cost: "$166.89", note: "Required for all fishing" },
            { type: "1-Day Sport Fishing", cost: "$20.26", note: "Short term option" },
            { type: "2-Day Sport Fishing", cost: "$31.06", note: "Short term option" },
            { type: "Ocean Enhancement Validation", cost: "$7.05", note: "Required south of Point Arguello" },
            { type: "Spiny Lobster Report Card", cost: "$12.16", note: "Required for lobster" }
        ]
    },
    OR: {
        state: "Oregon",
        agency: "Oregon Department of Fish and Wildlife",
        url: "https://myodfw.com/articles/how-buy-oregon-fishing-license",
        licenses: [
            { type: "Annual Shellfish (Resident)", cost: "$10.00", note: "Clams, crabs, mussels" },
            { type: "Annual Shellfish (Non-Resident)", cost: "$28.00", note: "Clams, crabs, mussels" },
            { type: "3-Day Shellfish (Non-Resident)", cost: "$19.00", note: "Short term option" },
            { type: "Daily Angling & Shellfish", cost: "$32.50", note: "Includes fishing" }
        ]
    },
    WA: {
        state: "Washington",
        agency: "Washington Department of Fish and Wildlife",
        url: "https://wdfw.wa.gov/licenses/fishing",
        licenses: [
            { type: "Annual Shellfish/Seaweed (Resident)", cost: "$21.58", note: "Clams, oysters, mussels, seaweed" },
            { type: "Annual Shellfish/Seaweed (Non-Resident)", cost: "$47.39", note: "Clams, oysters, mussels, seaweed" },
            { type: "Razor Clam (Resident)", cost: "$17.44", note: "Specific to Razor Clams" },
            { type: "Razor Clam (Non-Resident)", cost: "$28.07", note: "Specific to Razor Clams" }
        ]
    }
};

/**
 * Get permit information for a specific state.
 * @param {string} stateCode - Two-letter state code (e.g., 'CA', 'OR', 'WA')
 */
export const getPermitInfo = (stateCode) => {
    const code = stateCode.toUpperCase();
    return PERMIT_DATA[code] || null;
};

/**
 * Get all permit data.
 */
export const getAllPermits = () => {
    return PERMIT_DATA;
};
