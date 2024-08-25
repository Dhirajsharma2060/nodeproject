const express = require("express");
const router = express.Router();
const { 
    getContacts, 
    updateContact, 
    deleteContact, 
    getContact, 
    createContact 
} = require("../controller/contactController");

// Define routes for /api/contacts
router.route('/')
    .get(getContacts)   // GET /api/contacts
    .post(createContact); // POST /api/contacts

// Define routes for /api/contacts/:id
router.route('/:id')
    .get(getContact)     // GET /api/contacts/:id
    .put(updateContact)  // PUT /api/contacts/:id
    .delete(deleteContact); // DELETE /api/contacts/:id

module.exports = router;
