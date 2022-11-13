$(document).ready(function () {
    $(".skill-link").addClass("color-item")
    $(".skills-experience-education").hide();
    $(".skill-info").show();

    $(".skill-item").click(function () {
        $(".skills-experience-education").hide();
        $(".skill-info").show();
        $(".about-item").removeClass("color-item")
        $(".skill-link").addClass("color-item")
    });
  
    $(".education-item").click(function () {
        $(".skills-experience-education").hide();
        $(".education-info").show();
        $(".about-item").removeClass("color-item");
        $(".education-link").addClass("color-item")
    });
  
    $(".experience-item").click(function () {
        $(".skills-experience-education").hide();
        $(".experience-info").show();
        $(".about-item").removeClass("color-item");
        $(".experience-link").addClass("color-item")
    });
});