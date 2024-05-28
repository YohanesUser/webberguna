// digital-clocks.js

function updateClocks() {
    const now = new Date();
    
    // WIB: UTC+7
    const wibTime = new Date(now.getTime() + (7 * 60 * 60 * 1000));
    const wibHours = String(wibTime.getUTCHours()).padStart(2, '0');
    const wibMinutes = String(wibTime.getUTCMinutes()).padStart(2, '0');
    const wibSeconds = String(wibTime.getUTCSeconds()).padStart(2, '0');
    document.getElementById('wib-clock').textContent = `${wibHours}:${wibMinutes}:${wibSeconds}`;

    // WITA: UTC+8
    const witaTime = new Date(now.getTime() + (8 * 60 * 60 * 1000));
    const witaHours = String(witaTime.getUTCHours()).padStart(2, '0');
    const witaMinutes = String(witaTime.getUTCMinutes()).padStart(2, '0');
    const witaSeconds = String(witaTime.getUTCSeconds()).padStart(2, '0');
    document.getElementById('wita-clock').textContent = `${witaHours}:${witaMinutes}:${witaSeconds}`;

    // WIT: UTC+9
    const witTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
    const witHours = String(witTime.getUTCHours()).padStart(2, '0');
    const witMinutes = String(witTime.getUTCMinutes()).padStart(2, '0');
    const witSeconds = String(witTime.getUTCSeconds()).padStart(2, '0');
    document.getElementById('wit-clock').textContent = `${witHours}:${witMinutes}:${witSeconds}`;
}

// Update clocks every second
setInterval(updateClocks, 1000);
updateClocks(); // Initial call
