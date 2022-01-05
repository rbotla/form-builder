const data = `
---
app:
  model:
    users:
      fields:
        - {name: firstName, label: First Name, type: varchar, size: 40}
        - {name: lastName, label: Last Name, type: varchar, size: 40}
        - {name: email, label: Email, type: varchar, size: 80}
        - {name: phone, label: Phone, type: varchar, size: 10}
    accounts:
      fields:
        - {name: firstName, label: First Name, type: varchar, size: 40}
        - {name: lastName, label: Last Name, type: varchar, size: 40}
        - {name: email, label: Email, type: varchar, size: 80}
form:
  fields:
    - {name: firstName, label: First Name, size: 40}
    - {name: lastName, label: Last Name, type: varchar, size: 40}
    - {name: email, label: Email, type: email, size: 80}
    - {name: phone, label: Phone, type: phone, size: 10}  
  layout:
    - basic:

  validations:
    - firstNames
  actions:
    - Save
    - Cancel
`;

export default data;
