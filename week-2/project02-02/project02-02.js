/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Daniel Topete
      Date:8/17/2026

      Filename: project02-02.js
 */
// Checks that the name, email, and phone fields are all filled in,
// then alerts the user whether the form is complete
function verifyForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  name && phone && email ? window.alert("Thank you!") : window.alert("Please fill in all fields");
}

document.getElementById("submit").addEventListener("click", verifyForm);
