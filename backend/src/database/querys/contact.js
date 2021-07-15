const contactQuerys = {
  select: {
    byId: `SELECT id,name,phone,photo FROM contacts WHERE id=?;
        `,
    all: `SELECT id,name,phone,photo FROM contacts;
        `,
  },
  insert: `INSERT INTO contacts (name,phone,photo) VALUES (?, ?, ?);`,
  update: `UPDATE contacts SET name = ?, phone= ?, photo = ? WHERE id=?;`,
  delete: `DELETE FROM contacts WHERE id=?`,
};

module.exports = contactQuerys;
