// ==UserScript==
// @name         Invidious Preferences
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Redirect Invidious Videos with URL Parameters
// @author       MintMain21
// @match        *://inv.odyssey346.dev/watch?*
// @match        *://invidious.baczek.me/watch?*
// @match        *://iteroni.com/watch?*
// @match        *://invidious.namazso.eu/watch?*
// @match        *://iv.ggtyler.dev/watch?*
// @match        *://yewtu.be/watch?*
// @match        *://vid.puffyan.us/watch?*
// @match        *://inv.riverside.rocks/watch?*
// @match        *://watch.thekitty.zone/watch?*
// @match        *://y.com.sb/watch?*
// @match        *://invidious.nerdvpn.de/watch?*
// @match        *://invidious.tiekoetter.com/watch?*
// @match        *://yt.artemislena.eu/watch?*
// @match        *://invidious.flokinet.to/watch?*
// @match        *://inv.bp.projectsegfau.lt/watch?*
// @match        *://inv.vern.cc/watch?*
// @match        *://invidious.sethforprivacy.com/watch?*
// @match        *://invidious.projectsegfau.lt/watch?*
// @match        *://yt.funami.tech/watch?*
// @match        *://invidious.lunar.icu/watch?*
// @match        *://invidious.privacydev.net/watch?*
// @match        *://invidious.slipfox.xyz/watch?*
// @match        *://invidious.esmailelbob.xyz/watch?*
// @match        *://iv.melmac.space/watch?*
// @match        *://invidious.snopyta.org/watch?*
// @match        *://invidious.weblibre.org/watch?*
// @match        *://invidious.kavin.rocks/watch?*
// @match        *://yt.oelrichsgarcia.de/watch?*
// @match        *://invidious.privacydev.net/watch?*
// @match        *://invidious.vpsburti.com/*
// @match        *://c7hqkpkpemu6e7emz5b4vyz7idjgdvgaaa3dyimmeojqbgpea3xqjoid.onion/watch?*
// @match        *://w6ijuptxiku4xpnnaetxvnkc5vqcdu7mgns2u77qefoixi63vbvnpnqd.onion/watch?*
// @match        *://kbjggqkzv65ivcqj6bumvp337z6264huv5kpkwuv6gu5yjiskvan7fad.onion/watch?*
// @match        *://grwp24hodrefzvjjuccrkw3mjq4tzhaaq32amf33dzpmuxe7ilepcmad.onion/watch?*
// @match        *://osbivz6guyeahrwp2lnwyjk2xos342h4ocsxyqrlaopqjuhwn2djiiyd.onion/watch?*
// @match        *://u2cvlit75owumwpy4dj2hsmvkq7nvrclkpht7xgyye2pyoxhpmclkrad.onion/watch?*
// @match        *://euxxcnhsynwmfidvhjf6uzptsmh4dipkmgdmcmxxuo7tunp3ad2jrwyd.onion/watch?*
// @match        *://invidious.esmail5pdn24shtvieloeedh7ehz3nrwcdivnfhfcedl7gf4kwddhkqd.onion/watch?*
// @match        *://inv.vernccvbvyi5qhfzyqengccj7lkove6bjot2xhh5kajhwvidqafczrad.onion/watch?*
// @match        *://am74vkcrjp2d5v36lcdqgsj2m6x36tbrkhsruoegwfcizzabnfgf5zyd.onion/watch?*
// @match        *://ng27owmagn5amdm7l5s3rsqxwscl5ynppnis5dqcasogkyxcfqn7psid.onion/watch?*
// @match        *://iv.odysfvr23q5wgt7i456o5t3trw2cw5dgn56vbjfbq2m7xsc5vqbqpcyd.onion/watch?*
// @match        *://invidious.g4c3eya4clenolymqbpgwz3q3tawoxw56yhzk4vugqrl6dtu3ejvhjid.onion/watch?*
// @match        *://verni6dr4qxjgjumnvesxerh5rvhv6oy5ddeibaqy5d7tgbiiyfa.b32.i2p/watch?*
// @grant        none
// @license      MIT
// @homepage     https://github.com/MintMain21/Invidious-URL-Parameters-Userscript
// ==/UserScript==
/** This userscript is based on https://greasyfork.org/en/scripts/450983-genius-back-to-the-original-page-layout but rewritten to enforce video playback preferences as video quality, visibility of comments, etc, through URL parameters and without using browser cookies.
For more information about Invidious URL parameters and the various options, see https://docs.invidious.io/url-parameters/
To edit the enforced URL parameters, change the setting strings below. Keep options in their appropriate catagories (URL Parameters affecting video playback should only be in videosettings, etc). You can keep a setting option blank if you would rather not append any URL parameters.

*/
let appearencesettings = "dark_mode=auto&hl=en-US"
let searchsettings = "region=JP"
let videosettings = "related_videos=false&comments=false&player_style=youtube&extend_desc=true"
let trendingsettings = "type=Music"
/**
Anytime you load a video URL on your desired Invidious instance, this script will check the URL for the desired parameters, and apply them if not found.
To edit the Invidious instances this script applies to, edit the domains above.
It is recommended that you use this script in combination with https://github.com/dybdeskarphet/privacy-redirector and https://codeberg.org/mthsk/userscripts/src/branch/master/simple-sponsor-skipper


 */

function getCurrentURL () {
  return window.location.href;
}

// Example
const url = getCurrentURL();

(function() {
    'use strict';

    if (!url.includes("?") && !url.includes(appearencesettings)) {
        window.location.replace(url + ("?" + appearencesettings));

    }

    if (url.includes("?") && !url.includes(appearencesettings)) {
        window.location.replace(url + ("&" + appearencesettings));

    }

    if (url.includes("q=") && !url.includes(searchsettings)) {
        window.location.replace(url + ("&" + searchsettings));
    }

    if (url.includes("feed/trending") && !url.includes(trendingsettings)) {
        window.location.replace(url + ("?" + trendingsettings));
    }
    if (url.includes("v=") && !url.includes(videosettings)) {
        window.location.replace(url + ("&" + videosettings));
    }

})();
