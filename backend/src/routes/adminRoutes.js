/**
 * Admin Routes
 * Defines routes for admin-specific operations
 * All routes are protected and require admin role
 */

const express = require('express');
const {
  getAllUsers,
  blockUser,
  promoteUser,
  deleteUser
} = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

const router = express.Router();

// Apply authentication and admin authorization to all routes
router.use(protect);
router.use(authorize('admin'));

// @route   GET /api/admin/users
// @desc    Get all users
// @access  Admin only
router.get('/users', getAllUsers);

// @route   PUT /api/admin/block/:id
// @desc    Block or unblock a user
// @access  Admin only
router.put('/block/:id', blockUser);

// @route   PUT /api/admin/promote/:id
// @desc    Promote user to admin
// @access  Admin only
router.put('/promote/:id', promoteUser);

// @route   DELETE /api/admin/delete/:id
// @desc    Delete a user
// @access  Admin only
router.delete('/delete/:id', deleteUser);

module.exports = router;