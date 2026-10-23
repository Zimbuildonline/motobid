/* =====================================================================
   MOTOBID SETTINGS
   To change the exchange rate: edit the two lines just below, then tap
   "Commit changes". The site updates in about a minute.
   Only change the numbers or words between quotes. Keep the commas.
   ===================================================================== */
const CONFIG = {
  fx: 16.20,                   // EXCHANGE RATE: rand per US$1. You set this yourself.
  fxUpdated: "23 Oct 2026",   // the date you last changed the rate

  whatsapp: "263775914241",   // WhatsApp number, country code first, no + or spaces
  ecocash: { number: "077 591 4241", name: "Manuel Dube" }, // EcoCash for deposits

  depositUSD: 500,            // refundable deposit before bidding
  sourcingPct: 5,             // your sourcing fee: % of the SA auction total (bid + fees + VAT), shown as its own line

  auction: {                  // SA auction invoice fees
    docFeeZAR: 3050,          // handling fee
    adminFeeZAR: 310,         // admin fee
    premiumPct: 5,            // buyer's premium, % of the bid
    vatPct: 15,               // SA VAT on bid + fees
    loadingPct: 20            // your logistics loading added to the three fees above
  },

  baseCities: ["johannesburg", "jhb", "joburg"], // cars here need no transport to Jhb
  transportZAR: 9500,         // Jhb to Beitbridge, small cars
  dutyPct: 40,                // customs duty estimate (customer pays)
  agentUSD: 150,              // clearing agent estimate (customer pays)
  towns: ["Collect at Beitbridge", "Bulawayo", "Gwanda", "Masvingo", "Gweru", "Kwekwe", "Kadoma", "Harare",
          "Chinhoyi", "Marondera", "Mutare", "Chiredzi", "Hwange", "Victoria Falls", "Other town"] // delivery is quoted per car
};
