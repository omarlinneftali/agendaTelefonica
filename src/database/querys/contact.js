const contactQuerys = {
  select: {
    byId: `SELECT id,name,phone FROM contacts WHERE id=?;
        `,
    all: `SELECT id,name,phone FROM contacts;
        `,
  },
  insert: `INSERT INTO contacts (name,phone) VALUES (?, ?);`,
  update: `UPDATE contacts SET name = ?, phone= ? WHERE id=?;`,
  delete: `DELETE FROM contacts WHERE id=?`,
};

module.exports = contactQuerys;
