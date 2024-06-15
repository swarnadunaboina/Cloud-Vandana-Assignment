function submitForm() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let dob = document.getElementById('dob').value;
    let country = document.getElementById('country').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let profession = document.getElementById('profession').value;
    let email = document.getElementById('email').value;
    let mobileNumber = document.getElementById('mobileNumber').value;
    if (!firstName || !lastName || !dob || !country || !profession || !gender || !email || !mobileNumber) {
        alert(" all fields are mandatory!");
        return;
    }
    if (!emailCheck(email)) {
        alert("Please give valid email address");
        return;
    }
    if(!numberCheck(mobileNumber))
    {
        alert("Please provide valid 10 digit number")
        return
    }
    if(!nameCheck(firstName) || !nameCheck(lastName)){
        alert("Please enter valid Name")
        return
    }
    if(spellCheck(firstName) || spellCheck(lastName) || spellCheck(profession)){
        alert("Please enter valid Name")
        return 
    }
    let date1 = new Date().getTime();
    let valid=compareDates(date1, dob);
    if(!valid){
        alert("pleas enter valid correct date of birth")
        return
    }
let submittedDataDiv = document.getElementById('submittedData');
submittedDataDiv.innerHTML = `
    <strong>First Name:</strong> ${firstName}<br>
    <strong>Last Name:</strong> ${lastName}<br>
    <strong>Date of Birth:</strong> ${dob}<br>
    <strong>Country:</strong> ${country}<br>
    <strong>Gender:</strong> ${gender.value}<br>
    <strong>Profession:</strong> ${profession}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Mobile Number:</strong> ${mobileNumber}
`;
document.getElementById('popup').style.display = 'flex';
}
const compareDates = (d1, d2) => {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();
    if (date1 < date2) {
        return false;
        
    } else return true;
  };
function numberCheck(input){
    let numberReg = /[1-9]{1}[0-9]{9}/;
    let valid = numberReg.test(input)       
    return valid
  }
function nameCheck(input){
    let nameReg = /[A-Za-z]/;
    let valid = nameReg.test(input)       
    return valid
  }  
  function spellCheck(input){
    let nameReg = /[0-9._%+-]/;
    let valid = nameReg.test(input)       
    return valid
    } 
function emailCheck(input){
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let valid = emailReg.test(input)       
        return valid
      }
function resetForm() {
    document.getElementById('surveyForm').reset();
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    resetForm();
}
