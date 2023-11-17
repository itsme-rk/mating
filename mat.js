function toggleDropdown() {
    var dropdown = document.getElementById("dropdownContent");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  }
  
  
  window.onclick = function (event) {
    if (!event.target.closest(".profile-pic")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  };

  document.getElementById("petSwitch").addEventListener("change", function() {
    // Get the checkbox
    var checkBox = document.getElementById("petSwitch");

    // If the checkbox is checked, redirect to the dog page; otherwise, redirect to the cat page
    if (checkBox.checked == true) {
      window.location.href = "index.html"; // Replace with the actual URL of your dog page
    } else {
      window.location.href = "cat.html"; // Replace with the actual URL of your cat page
    }
  });


  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  window.onscroll = function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };