// data.js
const PROCUREMENT_DB = {
    // TABLE 1: REQUISITIONS (The Internal Ask)
    // You will build the interface for this later, but here is the data structure.
    requisitions: [
        {
            reqId: "REQ-2025-001",
            hull: "LCS-38", // Specific ship/project
            requestor: "J. Rush",
            dateCreated: "2025-01-15",
            status: "Quoting", // Open, Quoting, Approved, Ordered
            lineItems: ["VAL-992-X", "PUMP-500-A"] // These link to the parts below
        },
        {
            reqId: "REQ-2025-002",
            hull: "EPF-16",
            requestor: "Engineering",
            dateCreated: "2025-01-16",
            status: "New",
            lineItems: [] 
        }
    ],

    // TABLE 2: PARTS & QUOTES (The Market Data)
    // This is what your current HTML page reads.
    parts: [
        {
            partNo: "VAL-992-X",
            desc: "Ball Valve, 2 Inch, Brass",
            nsn: "4820-01-123-4567",
            mfg: "BV-200-BR",
            spmig: "00921",
            uom: "EA",
            // This field links back to the Requisition
            associatedReq: "REQ-2025-001", 
            quotes: [
                { rank: 1, supplier: "Acme Marine", date: "2023-10-24", qty: 10, price: 125.00, lead: "14 Days", notes: "Best delivery", valid: "30 Days", cog: "7H", sos: "S92" },
                { rank: 2, supplier: "Global Parts", date: "2023-10-25", qty: 10, price: 115.50, lead: "45 Days", notes: "Long lead time", valid: "60 Days", cog: "7H", sos: "S92" }
            ]
        },
        {
            partNo: "PUMP-500-A",
            desc: "Centrifugal Pump, 5HP",
            nsn: "4320-00-999-8888",
            mfg: "CP-500-X",
            spmig: "00455",
            uom: "EA",
            associatedReq: "REQ-2025-001",
            quotes: [
                { rank: 1, supplier: "Industrial Pumps Co", date: "2023-11-01", qty: 2, price: 1200.00, lead: "21 Days", notes: "Heavy Item", valid: "45 Days", cog: "2C", sos: "S92" }
            ]
        }
    ]
};