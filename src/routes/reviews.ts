import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { REVIEWS_DATA, ReviewItem } from '../data/reviewsData';
import { validateRequest } from '../middleware/validate';

const router = Router();

// Zod Schema for Review Submission Validation
export const createReviewSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  location: z.string().optional().default('Valued Guest'),
  packageName: z.string().min(3, 'Package name is required'),
  rating: z.number().min(1, 'Rating must be between 1 and 5').max(5, 'Rating must be between 1 and 5'),
  comment: z.string().min(5, 'Comment must be at least 5 characters long')
});

// GET /api/reviews - Get all reviews
router.get('/', (_req: Request, res: Response) => {
  res.json({
    status: 'success',
    count: REVIEWS_DATA.length,
    data: REVIEWS_DATA
  });
});

// POST /api/reviews - Submit a new review
router.post('/', validateRequest(createReviewSchema), (req: Request, res: Response) => {
  const { name, location, packageName, rating, comment } = req.body;

  const newReview: ReviewItem = {
    id: `rev-backend-${Date.now()}`,
    name: name.trim(),
    location: location?.trim() || 'Valued Guest',
    packageName: packageName.trim(),
    rating: Number(rating),
    date: 'Just Now',
    comment: comment.trim(),
    verified: true
  };

  REVIEWS_DATA.unshift(newReview);

  res.status(201).json({
    status: 'success',
    message: 'Review submitted successfully!',
    data: newReview
  });
});

export default router;
