const FB_REDIRECT_URL = 'https://www.facebook.com/l.php?u='

const articleUrl = window.location.href
const shouldRedirect = document.getElementsByClassName('wsj-snippet-login').length > 0

if (shouldRedirect) {
  window.location.href = FB_REDIRECT_URL + articleUrl
}
