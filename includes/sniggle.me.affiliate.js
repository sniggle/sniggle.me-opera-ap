// ==UserScript==
// @include http://www.amazon.com/*
// @include http://amazon.com/*
// @include http://www.amazon.co.uk/*
// @include http://amazon.co.uk/*
// @include http://www.amazon.de/*
// @include http://amazon.de/*
// @include http://www.amazon.es/*
// @include http://amazon.es/*
// @include http://www.amazon.fr/*
// @include http://amazon.fr/*
// @include http://www.amazon.it/*
// @include http://amazon.it/*
// ==/UserScript==

var configurations = {
    amazon : {
        rx: /^http.*?\.amazon.com.*?(\/dp\/|obidos.tg.detail|.gp.product)/i,
        params: [
            { param: "tag", paramValue: "sniggleme-20" }
        ]
    },
    amazonuk : {
        rx: /^http.*?\.amazon.co.uk.*?(\/dp\/|obidos.tg.detail|.gp.product)/i,
        params: [
            { param: "tag", paramValue: "sniggleme02-21" }
        ]
    },
    amazonde : {
        rx: /^http.*?\.amazon.de.*?(\/dp\/|obidos.tg.detail|.gp.product)/i,
        params: [
            { param: "tag", paramValue: "sniggleme-21" }
        ]
    },
    amazones : {
        rx: /^http.*?\.amazon.es.*?(\/dp\/|obidos.tg.detail|.gp.product)/i,
        params: [
            { param: "tag", paramValue: "sniggleme01-21" }
        ]
    },
    amazonfr : { 
        rx: /^http.*?\.amazon.fr.*?(\/dp\/|obidos.tg.detail|.gp.product)/i, 
        params: [
            { param: "tag", paramValue: "sniggleme00-21" }
        ]
    },
    amazonit : { 
        rx: /^http.*?\.amazon.it.*?(\/dp\/|obidos.tg.detail|.gp.product)/i, 
        params: [
            { param: "tag", paramValue: "sniggleme0a6-21" }
        ]
    }
  };

var url = window.location.href;
for( var configVariable in configurations ) {
  if( configurations.hasOwnProperty(configVariable) ) {
	//Be grateful and do not steel other affiliate links & further avoid circular redirection
	var config = configurations[configVariable];
	if(url.match(config.rx) && url.indexOf(config.params[0].param) == -1) {
	  if(url.indexOf("?") == -1) {
		url = url + "?" + createTag(config.params);
	  } else {
	    url = url + "&" + createTag(config.params);
	  }
	  window.location.href=url;
	}
  }
}

function createTag( parameters ) {
	var result = "";
	for( var i = 0; i < parameters.length; i++ ) {
		result = result + parameters[i].param + "=" + parameters[i].paramValue;
		if( i >= 0 && i < parameters.length - 1 ) {
			result = result + "&";
		}
	}
	return result;
}