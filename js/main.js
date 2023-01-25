function main() {
  activeTabs();
  openTab();
}

// ==================== T A B S    F U N C T I O N A L I T Y =====================

// function that open the content for a specific tab
function openTab(num) {
  if (num) {
    $("#tab-slider>div").each(function (index) {
      if ($(this).attr("tab") == num) {
        $(this).removeClass("tab-slide").addClass("active-content");
      } else {
        $(this).removeClass("active-content").addClass("tab-slide");
      }
    });
  } else {
    // highlighting the active tab with underground green line
    $(".tab-btn").click(function (e) {
      // console.log($(e.target).siblings());
      $(e.target).siblings().removeClass("active-tab");
      $(e.target).addClass("active-tab");
    });
  }
}

function activeTabs() {
  $("#tabs .tab-btn").click((e) => {
    openTab($(e.target).attr("tab"));
  });
}
