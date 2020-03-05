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

  $(".sold-itens-mobile").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });

  $.getJSON(
    "https://www.clickqi.com.br/api/dataentities/CG/search?_fields=productName,productRating,productListPrice,productBestPrice,productInstallments,productInstallmentsValue,productImage&_sort=productName%20DESC",
    function(data) {
      $.each(data, function(key, item) {
        var elemento =
          "<div class='sold-itens__card' id='sold-itens__card" + key + "'>";
        if (item.productRating > 30) {
          elemento += "<div class='sold-itens__card--off'><p>OFF</p></div>";
        }
        elemento += "<img src='" + item.productImage + "' alt='' width='100%'>";
        elemento += "<p>" + item.productName + "</p>";
        elemento += "<div class='sold-itens__card--rating'>";

        var rating = item.productRating / 10;

        for (var i = 0; i < rating; i++) {
          elemento +=
            "<div><svg height='10pt' fill='#ff0000' viewBox='0 -10 511.99143 511' width='10pt' xmlns='http://www.w3.org/2000/svg'><path d='m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657'/></svg></div>";
        }

        var rest = 5 - rating;
        for (var i = 0; i < rest; i++) {
          elemento +=
            "<div><svg height='10pt' fill='#ff0000' viewBox='0 -10 511.98685 511' width='10pt' xmlns='http://www.w3.org/2000/svg'><path d='m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0'/></svg></div>";
        }

        elemento += "</div>";

        var price = item.productBestPrice.toString();
        price =
          price.substring(0, price.length - 2) +
          "," +
          price.substring(price.length - 2);

        var share = null;
        if (item.productInstallmentsValue > 0) {
          var share = item.productInstallmentsValue.toString();
          share =
            share.substring(0, share.length - 2) +
            "," +
            share.substring(share.length - 2);
        }

        elemento += "<h3><b>por R$ " + price + "</b></h3>";

        if (share) {
          elemento +=
            "<span>ou por " +
            item.productInstallments +
            "x de R$ " +
            share +
            "</span>";
        }

        elemento += "<a href='#'>Comprar</a>";

        $(".sold-itens").slick("slickAdd", elemento);
      });
    }
  );

  $.getJSON(
    "https://www.clickqi.com.br/api/dataentities/CG/search?_fields=productName,productRating,productListPrice,productBestPrice,productInstallments,productInstallmentsValue,productImage&_sort=productName%20DESC",
    function(data) {
      $.each(data, function(key, item) {
        var elemento =
          "<div class='sold-itens__card' id='sold-itens__card" + key + "'>";
        elemento += "<img src='" + item.productImage + "' alt='' width='100%'>";
        elemento += "<p>" + item.productName + "</p>";
        elemento += "<div class='sold-itens__card--rating'>";

        var rating = item.productRating / 10;

        for (var i = 0; i < rating; i++) {
          elemento +=
            "<div><svg height='10pt' fill='#ff0000' viewBox='0 -10 511.99143 511' width='10pt' xmlns='http://www.w3.org/2000/svg'><path d='m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657'/></svg></div>";
        }

        var rest = 5 - rating;
        for (var i = 0; i < rest; i++) {
          elemento +=
            "<div><svg height='10pt' fill='#ff0000' viewBox='0 -10 511.98685 511' width='10pt' xmlns='http://www.w3.org/2000/svg'><path d='m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0'/></svg></div>";
        }

        elemento += "</div>";

        var price = item.productBestPrice.toString();
        price =
          price.substring(0, price.length - 2) +
          "," +
          price.substring(price.length - 2);
        console.log(price);

        var share = null;
        if (item.productInstallmentsValue > 0) {
          var share = item.productInstallmentsValue.toString();
          share =
            share.substring(0, share.length - 2) +
            "," +
            share.substring(share.length - 2);
        }

        elemento += "<h3><b>por R$ " + price + "</b></h3>";
        if (share) {
          elemento +=
            "<span>ou por " +
            item.productInstallments +
            "x de R$ " +
            share +
            "</span>";
        }

        elemento += "<a href='#'>Comprar</a>";

        $(".sold-itens-mobile").slick("slickAdd", elemento);
      });
    }
  );
});

function openNav() {
  document.getElementById("sidenav-mobile").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidenav-mobile").style.width = "0";
}
