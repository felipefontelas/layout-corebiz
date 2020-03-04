$(document).ready(function() {
  $(".banners").slick({
    dots: true,
    arrows: false
  });

  $(".sold-itens").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='./../public/img/back.png'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='./../public/img/next.png'>"
  });

  $.getJSON(
    "https://www.clickqi.com.br/api/dataentities/CG/search?_fields=productName,productRating,productListPrice,productBestPrice,productInstallments,productInstallmentsValue,productImage&_sort=productName%20DESC",
    function(data) {
      console.log(data);
    }
  );
});
