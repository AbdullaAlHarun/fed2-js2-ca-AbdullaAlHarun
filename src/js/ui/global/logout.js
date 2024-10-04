import {onLogout} from "../auth/logout.js";
/**
 * Attaches a click event listener to the logout button.
 */
export function setLogoutListener() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', onLogout)
    }
}