"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var count = function count() {
    fetch('/.netlify/functions/count').then(function (response) {
      return response.text();
    }).then(function (data) {
      data = JSON.parse(data);

      if (!data.success) {
        count();
      }
    });
  };

  count();
});