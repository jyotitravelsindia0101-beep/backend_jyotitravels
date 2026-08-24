"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReviewSchema = void 0;
const express_1 = require("express");
const zod_1 = require("zod");
const reviewsData_1 = require("../data/reviewsData");
const validate_1 = require("../middleware/validate");
const router = (0, express_1.Router)();
// Zod Schema for Review Submission Validation
exports.createReviewSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, 'Name must be at least 2 characters long'),
    location: zod_1.z.string().optional().default('Valued Guest'),
    packageName: zod_1.z.string().min(3, 'Package name is required'),
    rating: zod_1.z.number().min(1, 'Rating must be between 1 and 5').max(5, 'Rating must be between 1 and 5'),
    comment: zod_1.z.string().min(5, 'Comment must be at least 5 characters long')
});
// GET /api/reviews - Get all reviews
router.get('/', (_req, res) => {
    res.json({
        status: 'success',
        count: reviewsData_1.REVIEWS_DATA.length,
        data: reviewsData_1.REVIEWS_DATA
    });
});
// POST /api/reviews - Submit a new review
router.post('/', (0, validate_1.validateRequest)(exports.createReviewSchema), (req, res) => {
    const { name, location, packageName, rating, comment } = req.body;
    const newReview = {
        id: `rev-backend-${Date.now()}`,
        name: name.trim(),
        location: location?.trim() || 'Valued Guest',
        packageName: packageName.trim(),
        rating: Number(rating),
        date: 'Just Now',
        comment: comment.trim(),
        verified: true
    };
    reviewsData_1.REVIEWS_DATA.unshift(newReview);
    res.status(201).json({
        status: 'success',
        message: 'Review submitted successfully!',
        data: newReview
    });
});
exports.default = router;
