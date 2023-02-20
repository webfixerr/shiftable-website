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
    clinic: {
      address: document.querySelector('input[name="clinicAddress"]').value,
      name: document.querySelector('input[name="clinicName"]').value,
      pincode: document.querySelector('input[name="clinicPincode"]').value,
      phone: document.querySelector('input[name="clinicPhone"]').value,
      email: document.querySelector('input[name="clinicEmail"]').value,
      website: document.querySelector('input[name="clinicWebsite"]').value,
    },
    avgRecall: document.querySelector('select[name="recall"]').value,
    softwareUse: document.querySelector('select[name="software"]').value,
    radiography: document.querySelector('select[name="radiography"]').value,
    ultrasonic: document.querySelector('select[name="ultrasonic"]').value,
    charting: document.querySelector('select[name="charting"]').value,
    lunchtime: document.querySelector('select[name="lunchTime"]').value,
    parkingAvailability: document.querySelector('select[name="parking"]').value,
    clinicProvides: [
      ...document.querySelectorAll('input[type="checkbox"]:checked'),
    ].map((item) => item.value),
  };

  fetch("https://admin.shiftable.ca/api/register/practitioner", {
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
