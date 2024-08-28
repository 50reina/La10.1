let contacts = [
  { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" },
  { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" },
  { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" },
];

const displayContacts = (callback) => {
  let table = "<table><tr><th>Name</th><th>Phone</th><th>Email</th></tr>";
  contacts.forEach((contact) => {
    table += callback(contact);
  });
  table += "</table>";
  document.getElementById("contactList").innerHTML = table;
};

const contactRow = (contact) => {
  return `<tr><td>${contact.name}</td><td>${contact.phone}</td><td>${contact.email}</td></tr>`;
};

const updateDisplay = () => {
  setTimeout(() => {
    displayContacts(contactRow);
  }, 1000);
};

const addContact = () => {
  do {
    const name = prompt("Enter contact name:");
    const phone = prompt("Enter contact phone:");
    const email = prompt("Enter contact email:");

    if (name && phone && email) {
      contacts.push({ name, phone, email });
      updateDisplay();
    } else {
      alert("All fields are required!");
    }
  } while (confirm("Add another contact?"));
};

const findContact = () => {
  const searchName = prompt("Enter the name to search:");
  const foundContact = searchContactRecursive(searchName, 0);
  if (foundContact) {
    alert(
      `Found: ${foundContact.name}, ${foundContact.phone}, ${foundContact.email}`
    );
  } else {
    alert("Contact not found");
  }
};

const searchContactRecursive = (name, index) => {
  if (index >= contacts.length) return null;
  if (contacts[index].name.toLowerCase() === name.toLowerCase())
    return contacts[index];
  return searchContactRecursive(name, index + 1);
};

const logContactCount = () => {
  console.log(`Number of contacts: ${contacts.length}`);
};

setInterval(logContactCount, 5000);

const changeBackgroundColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
};

setInterval(changeBackgroundColor, 5000);

updateDisplay();
