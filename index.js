document.addEventListener('DOMContentLoaded', function() {
    var copyButton = document.getElementById('copy-button');
    var textToCopy = document.getElementById('text');

    copyButton.addEventListener('click', function() {
        var text = textToCopy.textContent.trim();
        if (text.startsWith('CA: ')) {
            text = text.substring(4);
        }

        navigator.clipboard.writeText(text)
            .then(function() {
                console.log('Text copied to clipboard:', text);
                copyButton.textContent = 'Copied!';
                setTimeout(function() {
                    copyButton.textContent = 'Copy CA';
                }, 2000);
            })
            .catch(function(err) {
                console.error('Unable to copy:', err);
            });
    });
});
