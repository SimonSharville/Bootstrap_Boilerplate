function toggleIcon(o){$(o.target).prev("").find(".more-less").toggleClass("glyphicon-plus glyphicon-minus")}$(".accordion").on("hidden.bs.collapse",toggleIcon),$(".accordion").on("shown.bs.collapse",toggleIcon);