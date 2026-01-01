(function() {
    // Configuración para simular el formato 'M d Y, H:i:s'
    const options = {
        timeZone: 'America/Santiago',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    
    const date = new Date();
    const formattedDate = date.toLocaleString('en-US', options);
    
    // Insertar fecha
    const serverTimeElement = document.getElementById('server-time');
    if (serverTimeElement) {
        serverTimeElement.textContent = 'Page automatically generated on: ' + formattedDate;
    }
    
    // Insertar zona horaria
    const tzElement = document.getElementById('tz');
    if (tzElement) {
        try {
            const tzString = date.toLocaleTimeString('en-US', {timeZoneName: 'short'});
            const parts = tzString.split(' ');
            if (parts.length > 2) {
                tzElement.textContent = parts[2];
            }
        } catch(e) {
            console.log("Error parsing timezone");
        }
    }
})();