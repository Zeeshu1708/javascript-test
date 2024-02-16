// var outsideClick = function (e) {
//    var container = $(".customDrp")
//    if (!container.is(e.target) && container.has(e.target).length === 0 && container.is(':visible')) {
//       container.removeClass("active");
//       $(document).unbind("click", outsideClick);
//    }
// };



var outsideClick = function (e) {
    var container = document.querySelector(".customDrp")
    if (!container.contains(e.target) && container.has(e.target).length === 0 && container.contains(':visible')) {
        container.removeClass("active");
        document.removeEventListener("click", outsideClick());
    }
};


$(document).ready(function () {

    var custmonDropDwon = document.querySelector(".custmonDropDwon");
    custmonDropDwon.addEventListener("click", function (e) {
        if (e.target.classList.contains("crossString") || e.target.classList.contains("bowiro")) {
            return false;
        }

        if (e.target.tagName = "a") {
            return true;
        }

        e.preventDefault();

        console.log(e.target);

        if (e.target.classList.contains("language") || e.target.classList.contains("language")) {
            languageFunc();

        }

        if (window.matchMedia('(max-width: 1170px)').matches) {
            document.body.style.overflow = 'hidden';
        }

        if (e.target.classList.contains("searchCoinDrp")) {
            document.getElementById('tokensearch1').focus();
        }
        
        nextCustomDrp = this.nextElementSibling;
        if (nextCustomDrp.classList.container("customDrp")) {
            nextCustomDrp.classList.add("active");
            // $(this).next(".customDrp").addClass("active");
        } else {
           this.querySelectorAll(".customDrp").classList.add("active");
        }

        e.stopPropagation();
        document.addEventListener("click", outsideClick());
    });

    let basic_banner_read_btn = false;
    document.querySelector(".basic_banner_read_btn").addEventListener("click", function () {
        if (basic_banner_read_btn == false) {
            this.innerText = ("Read Less");
            document.querySelector(".basic_banner_text").slideToggle(500);
            basic_banner_read_btn = true;
        } else {
            document.querySelector(".basic_banner_text").slideToggle(500);
            this.innerText = ("Read More");
            basic_banner_read_btn = false;
        }
    });

    document.querySelector(".filterToggelBtn").addEventListener("click", function () {
        document.querySelector(".filterToggel").slideToggle("active");
    });

    document.querySelector(".hideCustomDrp").addEventListener("click", function () {
        document.querySelector(".customDrp").classList.remove("active");
    });

    document.querySelector(".closeIcon").addEventListener("click", function () {
        document.querySelector(".customPopup").classList.remove("active");
        document.querySelector(".commonPopup").classList.remove("active");

        if (!document.querySelector(".headerMain").classList.contains("active")) {
            document.body.style.overflow = 'auto';
        }
    });

    document.querySelector(".mainTable").addEventListener("scroll", function (e) {
        let isScroll = e.currentTarget.scrollLeft;
        let childItem = document.querySelectorAll(".ListingTable th:nth-child(3), td:nth-child(3)");
        if (isScroll) {
            childItem.forEach((element) => {
                element.classList.add("before")
            });
        } else {
            childItem.forEach((element) => {
                element.classList.remove("before")
            });
        }
    });
});



// $(document).ready(function () {
//    $(".custmonDropDwon").click(function (e) {
//       if ($(e.target).hasClass("crossString") || $(e.target).hasClass("bowiro")) {
//          return false;
//       }

//       if ($(e.target).is("a")) {
//          return true;
//       }

//       e.preventDefault();

//       console.log(e.target);

//       if ($(e.target).hasClass("language") || $(e.target).parent().hasClass("language")) {
//          languageFunc();

//       }

//       if (window.matchMedia('(max-width: 1170px)').matches) {
//          document.body.style.overflow = 'hidden';
//       }

//       if ($(e.target).hasClass("searchCoinDrp")) {
//          document.getElementById('tokensearch1').focus();
//       }

//       if ($(this).next(".customDrp").length) {
//          $(this).next(".customDrp").addClass("active");
//       } else {
//          $(this).children(".customDrp").addClass("active");
//       }

//       e.stopPropagation();
//       $(document).bind("click", outsideClick);
//    });

//    let basic_banner_read_btn = false;
//    $(".basic_banner_read_btn").click(function () {
//       if (basic_banner_read_btn == false) {
//          $(this).text("Read Less");
//          $(".basic_banner_text").slideToggle(500);
//          basic_banner_read_btn = true;
//       } else {
//          $(".basic_banner_text").slideToggle(500);
//          $(this).text("Read More");
//          basic_banner_read_btn = false;
//       }
//    });

//    $(".filterToggelBtn").click(function () {
//       $(".filterToggel").slideToggle("active");
//    });

//    $(".hideCustomDrp").on("click", function () {
//       $(".customDrp").removeClass("active");
//    });

//    $(".closeIcon").click(function () {
//       $(".customPopup").removeClass("active");
//       $(".commonPopup").removeClass("active");

//       if (!document.querySelector(".headerMain").classList.contains("active")) {
//          document.body.style.overflow = 'auto';
//       }
//    });

//    $(".mainTable").on("scroll", function (e) {
//       let isScroll = e.currentTarget.scrollLeft;
//       if (isScroll) {
//          $(".ListingTable th:nth-child(3), td:nth-child(3)").addClass("before");
//       } else {
//          $(".ListingTable th:nth-child(3), td:nth-child(3)").removeClass("before");
//       }
//    });
// });

