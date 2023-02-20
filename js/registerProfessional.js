var form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  console.log("submitted");
  event.preventDefault();

  Swal.fire({
    title: "Submitting data, please wait",
  });
  Swal.showLoading();

  var submitData = {
    name: document.querySelector('input[name="name"]').value,
    email: document.querySelector('input[name="email"]').value,
    phone: document.querySelector('input[name="phone"]').value,
    pin: document.querySelector('input[name="pincode"]').value,
    gender: document.querySelector('select[name="gender"]').value,
    dob: document.querySelector('input[name="dob"]').value,
    education: document.querySelector('select[name="education"]').value,
    yearOfGraduation: document.querySelector('select[name="graduationYear"]')
      .value,
    travelDistance: document.querySelector('input[name="radius"]').value,
  };

  fetch("https://admin.shiftable.ca/api/register/job-seeker", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submitData),
  })
    .then((raw) => raw.json())
    .then((data) => {
      Swal.close();
      if (data)
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "You data has been successfully submitted. We will inform you once the app is live.",
        });
      else
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Our system is facing some problems right now. Please try again later.",
        });
    });
});
