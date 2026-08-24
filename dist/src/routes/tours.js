"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const toursData_1 = require("../data/toursData");
const router = (0, express_1.Router)();
const findTourByQuery = (query) => {
    if (!query)
        return undefined;
    const q = query.toLowerCase().trim();
    // 1. Exact ID or slug match
    let found = toursData_1.TOURS_DATA.find(t => t.id.toLowerCase() === q || t.slug.toLowerCase() === q);
    if (found)
        return found;
    // 2. Contains slug or query contains slug
    found = toursData_1.TOURS_DATA.find(t => t.slug.toLowerCase().includes(q) || q.includes(t.slug.toLowerCase()));
    if (found)
        return found;
    // 3. Keyword matching (e.g. "kashmir", "kedarnath", "spiti", "himachal", "mussoorie", "shimla", "manali")
    const ignoreWords = new Set(['tour', 'package', 'nights', 'days', 'trip', 'yatra', 'circuit']);
    const words = q.split(/[-_\s]+/).filter(w => w.length > 2 && !ignoreWords.has(w));
    if (words.length > 0) {
        found = toursData_1.TOURS_DATA.find(t => {
            const titleLower = t.title.toLowerCase();
            const slugLower = t.slug.toLowerCase();
            return words.some(w => titleLower.includes(w) || slugLower.includes(w));
        });
    }
    return found;
};
// GET /api/tours - List all tour packages
router.get('/', (_req, res) => {
    res.json({
        status: 'success',
        count: toursData_1.TOURS_DATA.length,
        data: toursData_1.TOURS_DATA
    });
});
// GET /api/tours/:id - Get tour package by ID or Slug
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const tour = findTourByQuery(id);
    if (!tour) {
        res.status(404).json({
            status: 'fail',
            message: `Tour package with ID or slug '${id}' not found.`
        });
        return;
    }
    res.json({
        status: 'success',
        data: tour
    });
});
exports.default = router;
