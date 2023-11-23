const arrContact = [];
function addContact() {
  let nameContact = document.getElementById("nameContact").value;
  let phoneContact = document.getElementById("phoneContact").value;
  arrContact.push({ name: nameContact, phone: phoneContact });

  console.log("arr1: ", arrContact);
  listNameContact();
  nameContact.innerHTML = "";
  phoneContact.innerHTML = "";
}
function listNameContact() {
  const print = document.getElementById("contactList");
  print.innerHTML = "";

  arrContact.forEach((item) => {
    print.innerHTML += item.name + "--" + item.phone + "<br>";
  });
}
