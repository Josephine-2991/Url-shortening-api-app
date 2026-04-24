  const urlInput   = document.getElementById('urlInput');
  const form  = document.getElementById('shortenerForm');
  const errorMsg   = document.getElementById('errorMsg');
  const resultsList = document.getElementById('resultsList');
  const shortenBtn = form.querySelector('.btn-shorten');

  
  let isLoading = false;

  function isValidUrl(str) {
    try {
      const url = new URL(str);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  }

  
  function showError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.add('visible');
    urlInput.classList.add('is-error');
    urlInput.setAttribute('aria-invalid', 'true');
  }

  function clearError() {
    errorMsg.textContent = '';
    errorMsg.classList.remove('visible');
    urlInput.classList.remove('is-error');
    urlInput.removeAttribute('aria-invalid');
  }

  function setLoading(state) {
    isLoading = state;
    if (state) {
      shortenBtn.classList.add('loading');
      shortenBtn.disabled = true;
      urlInput.disabled = true;
    } else {
      shortenBtn.classList.remove('loading');
      shortenBtn.disabled = false;
      urlInput.disabled = false;
    }
  }

  
  function createResultItem(original, shortened) {
    const li = document.createElement('li');
    li.className = 'result-item';

    const originalSpan = document.createElement('span');
    originalSpan.className = 'result-original';
    originalSpan.textContent = original;
    originalSpan.title = original;

    const rightDiv = document.createElement('div');
    rightDiv.className = 'result-right';

    const shortLink = document.createElement('a');
    shortLink.className = 'result-short';
    shortLink.href = shortened;
    shortLink.target = '_blank';
    shortLink.rel = 'noopener noreferrer';
    shortLink.textContent = shortened;

    const copyBtn = document.createElement('button');
    copyBtn.className = 'btn-copy';
    copyBtn.textContent = 'Copy';
    copyBtn.setAttribute('aria-label', `Copy shortened URL: ${shortened}`);
    copyBtn.addEventListener('click', () => handleCopy(shortened, copyBtn));

    rightDiv.appendChild(shortLink);
    rightDiv.appendChild(copyBtn);

    li.appendChild(originalSpan);
    li.appendChild(rightDiv);

    return li;
  }

  
  function handleCopy(text, btn) {
    // Reset all other copy buttons first
    document.querySelectorAll('.btn-copy.copied').forEach(b => {
      if (b !== btn) {
        b.textContent = 'Copy';
        b.classList.remove('copied');
      }
    });

    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
    }).catch(() => {
      
      const temp = document.createElement('textarea');
      temp.value = text;
      temp.style.position = 'absolute';
      temp.style.left = '-9999px';
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
    });
  }

 
  async function shortenUrl(url) {
    const response = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
    );
  
  
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
  
    const shortUrl = await response.text();
  
    if (!shortUrl || !shortUrl.startsWith('http')) {
      throw new Error('Failed to shorten URL');
    }
  
    return shortUrl;
  }

 
  async function handleSubmit(event) {
    event.preventDefault();

    if (isLoading) return;

    const raw = urlInput.value.trim();

    
    if (!raw) {
      showError('Please add a link');
      urlInput.focus();
      return;
    }

    
    if (!isValidUrl(raw)) {
      showError('Please enter a valid URL (include http:// or https://)');
      urlInput.focus();
      return;
    }

    clearError();
    setLoading(true);

    try {
      const shortened = await shortenUrl(raw);

      const item = createResultItem(raw, shortened);
      resultsList.insertBefore(item, resultsList.firstChild);

      urlInput.value = '';
      urlInput.focus();

    } catch (err) {
      showError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

 
  urlInput.addEventListener('input', function () {
    if (this.classList.contains('is-error') && this.value.trim()) {
      clearError();
    }
  });

  
  form.addEventListener('submit', handleSubmit);






  
