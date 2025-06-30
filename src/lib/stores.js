import { writable } from "svelte/store";
import { browser } from "$app/environment";

const defaultConfig = {
    userId: 0,
}

/**
 * @param {string} name
 * @param {any} value
 * @param {number} days
 */
function setCookie(name, value, days) {
    if (!browser) return; // Nur im Browser ausführen
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    // Setzt das Cookie für die aktuelle Domain.
    // 'path=/' stellt sicher, dass das Cookie für die gesamte Domain verfügbar ist.
    // 'SameSite=Lax' ist eine gute Standardeinstellung für Sicherheit.
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
}

/**
 * @param {string} name
 */
function getCookie(name) {
    if (!browser) return null; // Nur im Browser ausführen
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Laden der Konfiguration aus dem Session Storage
function loadConfig() {
    if (browser) {
        const storedConfig = sessionStorage.getItem('userConfig')
        if (storedConfig) {
            try {
                const parsedConfig = JSON.parse(storedConfig);
                return {
                    ...defaultConfig,
                    ...parsedConfig,
                    userId: parsedConfig.userId !== undefined ? parsedConfig.userId : (parseInt(getCookie('userId') || '0', 10) || defaultConfig.userId)
                }
            } catch (e) {
                console.error("Fehler beim Parsen der gespeicherten Konfiguration:", e)
            }
        }
    }
    // Wenn kein SessionStorage oder Fehler, versuch aus Cookie zu laden
    const cookieUserId = parseInt(getCookie('userId') || '0', 10);
    return {
        ...defaultConfig,
        userId: cookieUserId !== 0 ? cookieUserId : defaultConfig.userId // Falls Cookie 0 ist, nimm Default (auch 0)
    };
}

export const userConfig = writable(loadConfig())

userConfig.subscribe(value => {
    if (browser) {
        sessionStorage.setItem('userConfig', JSON.stringify(value))
        setCookie('userId', value.userId, 7)
    }
})

