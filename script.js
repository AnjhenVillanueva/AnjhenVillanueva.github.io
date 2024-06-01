
    function showIframe() {
        document.getElementById('iframeContainer').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }

    function closeIframe() {
        document.getElementById('iframeContainer').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }

    function closeIframe() {
    var iframe = document.querySelector('#iframeContainer iframe');
    var iframeSrc = iframe.src;
    iframe.src = '';  
    iframe.src = iframeSrc; 
    document.getElementById('iframeContainer').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}


