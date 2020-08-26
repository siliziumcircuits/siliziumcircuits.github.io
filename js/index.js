$(document).ready(() => {
  initializeNavLinks();
  initializeFormValidation();
  initExpToggles();
});

function initializeFormValidation() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName("needs-validation");
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
}

function initializeNavLinks() {
  $("[data-scroll-to-href]").on("click", (e) => {
    $(".nav-link.active").removeClass("active");

    let headerHeight = $("nav.navbar").height();
    let currentTarget = e.currentTarget;
    $(currentTarget).addClass("active");
    let moveTo = $(currentTarget).attr("data-scroll-to-href");
    let target = $(moveTo);
    $("html,body").animate(
      {
        scrollTop: target.offset().top - headerHeight,
      },
      1000
    );
  });
}

function initExpToggles() {
  $("[data-toggle-exps-href]").on("click", (e) => {
    $(".exp-desc.show").slideUp().removeClass("show");
    let currentTarget = e.currentTarget;
    if ($(currentTarget).hasClass("active")) {
      $(".exp-toggler.active").removeClass("active");
    } else {
      $(".exp-toggler.active").removeClass("active");
      $(currentTarget).addClass("active");
      let show = $(currentTarget).attr("data-toggle-exps-href");
      $(show).slideDown().addClass("show");
    }
  });
}
