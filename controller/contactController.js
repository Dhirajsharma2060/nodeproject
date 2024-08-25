//@desc Get all contact
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get contacts for ${req.params.id}` });
};

//@desc Create contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    res.status(200).json({ message: "Create contact" });
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contacts for ${req.params.id}` });
};

//@desc Delete the contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contacts for ${req.params.id}` });
};

module.exports = { getContacts, createContact, updateContact, getContact, deleteContact };
