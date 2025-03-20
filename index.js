const axios = require("axios");

module.exports = async (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ error: "Query parameter required" });
  }

  try {
    const ebayResponse = await axios.get(
      `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${encodeURIComponent(query)}&limit=5`,
      {
        headers: {
          "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
          "Authorization": `Bearer v^1.1#i^1#f^0#r^0#I^3#p^1#t^H4sIAAAAAAAA/+VYe2wURRjv9QFUrBjkpSA5ViQi3t7s7l3vbsMdOdoCh6UPr5S2QMjc7my7dm932ZmldwWT2ioG/5FEowWkaVQQJJFIJGokGDVpoiFGfNHgH/5hNI0GNCREFHzM7ZVyrQQKvcQm7j+bmfm+b77v971mBnRNKX1455qdv5W5phb2d4GuQpeLmw5Kp5Qsu6uo8L6SApBD4OrvWtxV3F00tBzDpGaKjyFsGjpG7lRS07HoTIYZ29JFA2IVizpMIiwSSYxH11WLPAtE0zKIIRka445VhhkJIORXyqHMKYkQUAJ0Vr8qs8EIMwHg5xHvFzgZwgQfKKfrGNsopmMCdRJmeMD7PUDw8KCB84ucIAKB5QOBFsbdiCysGjolYQETcdQVHV4rR9cbqwoxRhahQphILLoqXhuNVVbVNCz35siKDOMQJ5DYePSowpCRuxFqNrrxNtihFuO2JCGMGW8ku8NooWL0qjK3ob4DddAX8iuKnwuCEPJLUjAvUK4yrCQkN9YjM6PKHsUhFZFOVJK+GaIUjcTjSCLDoxoqIlbpzvzqbaipioqsMFO1MtocratjIjWq1F6JLMtTAS25zlIlT3xlkwcmAOfjOMnvgUoIBWSgDG+UlTYM85idKgxdVjOgYXeNQVYiqjUaiw3IwYYS1eq1VlQhGY1y6QJXMSznWjJOzXrRJm16xq8oSYFwO8Obe2CEmxBLTdgEjUgYu+BAFGagaaoyM3bRicXh8EnhMNNGiCl6vR0dHWyHwBpWq5cHgPM2rauOS20oCRlKm8n1LL16cwaP6pgiIcqJVZGkTapLisYqVUBvZSI+H+cLhYZxH61WZOzsvyZybPaOzoi8ZUgggTiFB3JQUaAvIOQjQyLDQerN6IESMO1JQqsdEVODEvJINM7sJLJUWRT8Ci8EFeSRy0OKxxdSFE/CL5d7OAUhWiQTCSkU/D8lynhDPY4kC5G8xHre4jyJhNCGOPV5SiEpe1mK9zVhVfK1aJ3x1dHqug1qvFni1JCxNeELjzcbrmt8haZSZBro/vkAIJPr+QNhjYEJkidkXlwyTFRnaKqUnlwOFmj2QIukV9ppOo4jTaO/CZkaNc1Yfip23oy8xWJxe3bnr1P9R13qulbhTOBOLqsy/JgKgKbK0j6UyfU0KxlJrwHpISQzvcXR2j2G8LpE3oSdZltthAnVRKbnwHEzqbSYs7SlyeNnyTZMasT4WeglQ7YlclsbOZ2ZpWiqrW0E39KeqYmAkrC19vGzyAhqEwpRlV41JlWAUkuzJqty9o7AOnazeJvEWggbtkWvR2xt5sjcYLQjnR5AiGVoGrIauQmX3mTSJjChoclWg/NQi1Sa665Lk+yExAV8vC8o+IPChGyTnPPPlsnWQfLdOW/hJuQd/S4TKXA+rtv1Keh2DRS6XKASeLhlYOmUovXFRXcymNYeFkNdThgpVoUKS8ueDoltIbYdpU2oWoX3FHz10+548+lH333xZOfWJ9kVAwWlOc9D/ZvBvJEHotIibnrOaxFYcG2lhJsxt4z3A4EHnJ8TgNACHri2WszNKZ5V8/al+tPl75VtV1xDscbLf10Uql2gbITI5SopoLFc0H53c9L7zPHYhz2rWvav3fXRt+ePfTd73tzF4ZnTIsz8ivpXuzcuql3yQ9mC5iN3bPjzR3jhpd93vWlfObB2YOGzK2bt2/vzmsiJQ5cPlgw9f3LPE31HX3+6v3bgyMLN3+8+PLDjCH75IDcj/PEj9bN/eaPkzOIVX3dKfc98eXRquvhwX9X9n/DW3/xqZGn75x9q0XuLz/QcY8Gg+U1zkRkf2Fpf+P5nr2wffOfCwr3d9aEGPLUwWPDUgPDgIn/Nc64DNVWdZ+Y91NM5eG7TqfVnF4k9pxrAtuCV2te8VZ9vnHa294++8qale3rvHTrxhTbz1/NzuIunPnjh4rnBipnc8eb+Wb09azftGFzC7nsr69N/AAdvqlO4EwAA`
        }
      }
    );
    res.status(200).json(ebayResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data", details: error.message });
  }
};
