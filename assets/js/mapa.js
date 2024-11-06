var mapaURL = "<iframe src="https:www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.0376829759184!2d-47.942527823860566!3d-19.75355353284017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bad0366fe6356d%3A0x276cdea5243d32d5!2sR.%20Trist%C3%A3o%20de%20Castro%2C%20Uberaba%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1730848660820!5m2!1spt-BR!2sbr";

var iframe = document.createElement('iframe');
iframe.src = mapaURL;
iframe.allowFullscreen = true;
iframe.style.width = "100%";
iframe.style.height = "480px";
iframe.style.border = "0";

document.getElementById('mapa').appendChild(iframe);