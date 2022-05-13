let imgModal = document.getElementById("imgModal")

window.addEventListener('keydown', function (event) {
    if (imgModal.classList.contains("hidden")) {
        return
    }

    switch (event.key) {
        case "ArrowLeft":
            prevSlide();
            break;
        case "ArrowRight":
            nextSlide();
            break;
        case "Escape":
            closeModal();
            break;
    }
})

function openModal(pageIdx, imgIdx) {
    imgModal.classList.remove("hidden");
    showSlide(pageIdx, imgIdx)
}

function closeModal() {
    imgModal.classList.add("hidden");
}

function nextSlide() {
    let slides = document.getElementsByClassName("modal-img-wrapper");
    var showNext = false
    for (var i = 0; i < slides.length; i++) {
        var slide = slides[i];
        if (slide.classList.contains("active")) {
            slide.classList.add("hidden");
            slide.classList.remove("active");

            if (i == slides.length - 1) {
                showSlide(0, 0);
                break;
            }
            showNext = true;
            continue;
        }

        if (showNext) {
            slide.classList.remove("hidden");
            slide.classList.add("active");
            showNext = false;
            break;
        }
    }
}

function prevSlide() {
    let slides = document.getElementsByClassName("modal-img-wrapper");
    var slideToShow
    for (var i = 0; i < slides.length; i++) {
        var slide = slides[i];
        if (slide.classList.contains("active")) {
            slide.classList.add("hidden");
            slide.classList.remove("active");

            if (i == 0) {
                slideToShow = slides[slides.length - 1]
            } else {
                slideToShow = slides[i - 1]
            }
            slideToShow.classList.remove("hidden");
            slideToShow.classList.add("active");
            break;
        }
    }
}

function showSlide(pageIdx, imgIdx) {
    let slides = document.getElementsByClassName("modal-img-wrapper");

    for (let slide of slides) {
        slide.classList.add("hidden")
        slide.classList.remove("active")

        if (slide.dataset.pageIdx == pageIdx && slide.dataset.imgIdx == imgIdx) {
            slide.classList.remove("hidden")
            slide.classList.add("active")
        }
    }

    // var trueIdx = idx

    // if (idx >= slides.length) {
    //     trueIdx = 0
    // }

    // if (idx < 0) {
    //     trueIdx = slides.length - 1
    // }

    // slides[trueIdx].classList.remove("hidden")
    // slides[trueIdx].classList.add("active")
}

function toggleDropdown(dropdownId) {
    let dd = document.getElementById(dropdownId + "Dropdown")
    dd.classList.toggle("dropdown-show")
    dd.classList.toggle("opacity-0")
    dd.classList.toggle("scale-50")
    dd.classList.toggle("opacity-100")
    dd.classList.toggle("scale-100")
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn') && !event.target.matches('.dropdown-content')) {
      var dropdowns = document.getElementsByClassName("dropdown-show");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.classList.toggle("dropdown-show")
        openDropdown.classList.toggle("opacity-0")
        openDropdown.classList.toggle("scale-50")
        openDropdown.classList.toggle("opacity-100")
        openDropdown.classList.toggle("scale-100")
      }
    }
  }