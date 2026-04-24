
(function () {
  'use strict';
  const urlInput   = document.getElementById('urlInput');
  const url= urlInput.value.trim();
  const API_BASE = `https://cleanuri.com/api/v1/shorten?url=${encodeURIComponent(url)}`;

  console.log('API Base URL:', API_BASE);

  
  const form  = document.getElementById('shortenerForm');
  
  const errorMsg   = document.getElementById('errorMsg');
  const resultsList = document.getElementById('resultsList');
  const shortenBtn = form.querySelector('.btn-shorten');

  
  let isLoading = false;

  
})();