contactForm.onsubmit = (e) => {
    e.preventDefault();

    let yourName = document.querySelector("#yourName").value;
    let yourEmail = document.querySelector("#yourEmail").value;
    let yourFeedback = document.querySelector("#yourFeedback").value;

    if (yourName === "" || setTimeRadio.value === null) {
      alert("Please Submit a valid form");
    } else {
      alert("Woof! We have received your feedback.");
    }
  };
