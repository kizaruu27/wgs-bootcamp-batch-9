-- Show all data sort by id
SELECT * FROM contacts ORDER BY id;

-- Show data detail by id
SELECT * FROM contacts WHERE id = $1;

-- Add new contact
INSERT INTO contacts (nama, email, nohp) 
VALUES ($1, $2, $3) RETURNING *;

-- Delete contact
DELETE FROM contacts
WHERE id = $1;

-- Edit Contact
UPDATE contacts
SET nama = $1, email = $2, nohp = $3
WHERE id = $4;