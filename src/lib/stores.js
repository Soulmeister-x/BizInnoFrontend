import { writable } from "svelte/store";
import { browser } from "$app/environment";

const defaultConfig = {
    userId: 0,
}


// Laden der Konfiguration aus dem Session Storage
function loadConfigFromSessionStorage() {
    if (browser) {
        const storedConfig = sessionStorage.getItem('userConfig')
        if (storedConfig) {
            try {
                return JSON.parse(storedConfig)
            } catch (e) {
                console.error("Fehler beim Parsen der gespeicherten Konfiguration:", e)
                return defaultConfig
            }
        }
    }
    return defaultConfig
}

export const userConfig = writable(loadConfigFromSessionStorage())

userConfig.subscribe(value => {
    if (browser) {
        sessionStorage.setItem('userConfig', JSON.stringify(value))
    }
})

