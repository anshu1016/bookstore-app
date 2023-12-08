// loadScript.js
const loadScript = (src, callback) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.onload = callback;
  
    document.head.appendChild(script);
  };
  
  export { loadScript };
  