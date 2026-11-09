/**
 * @license
 * Raffa Rizqi Ramdani Creative Portfolio Engine v2.0
 * Protected by Mandatory Author Attribution & Integrity Guard
 * (c) 2026 Raffa Rizqi Ramdani. All rights reserved.
 * Official: https://itsraffa.biz.id | GitHub: https://github.com/RaffaRizqi
 */
!(function(w, d) {
    'use strict';
    var _k = 0x52;
    var _p = 'KXAzcGhycAAzNDQzcgA7KCM7cgAzPzYzPDtwfnJwJ3BocnA6JiYiIWh9fTsmISAzNDQzfDA7KHw7NnB+cnA1cGhycDomJiIhaH19NTsmOicwfDE9P30AMzQ0MwA7KCM7fQI9ICY9ND0+Oz1wfnJwJXBocnA6JiYiIWh9fSUzfD83fWRgamNhamdmYWdkY2BwfnJwPnBocnARPSIrIDs1OiZyejF7cmBiYGRyADM0NDNyADsoIztyADM/NjM8O3xyEz4+ciA7NTomIXIgNyE3ICQ3NnxyHzM8NjMmPSArchMnJjo9IHITJiYgOzAnJjs9PHxwLw==';

    function _d(b) {
        try {
            var raw = atob(b);
            var res = '';
            for (var i = 0; i < raw.length; i++) {
                res += String.fromCharCode(raw.charCodeAt(i) ^ _k);
            }
            return JSON.parse(res);
        } catch (e) {
            return null;
        }
    }

    var info = _d(_p);
    if (!info) return;

    // 1. DevTools Console Watermark
    try {
        var styleTitle = 'background: #eb4604; color: #ffffff; font-weight: bold; font-size: 13px; padding: 4px 10px; border-radius: 4px 0 0 4px;';
        var styleLink = 'background: #18181b; color: #a1a1aa; font-size: 13px; padding: 4px 10px; border-radius: 0 4px 4px 0; border: 1px solid #eb4604;';
        console.log('%c RAFFA RIZQI RAMDANI %c ' + info.u + ' ', styleTitle, styleLink);
        console.log('%c GitHub Repository %c ' + info.g + ' ', 'background: #27272a; color: #ffffff; padding: 2px 8px; font-size: 11px;', 'color: #eb4604; font-size: 11px; padding: 2px 8px;');
        console.log('%c Verified Author %c ' + info.a + ' · Licensed Portfolio Architecture', 'color: #71717a; font-size: 10px;', 'color: #a1a1aa; font-size: 10px;');
    } catch (e) {}

    // 2. Immutable Window Object
    try {
        Object.defineProperty(w, '__RAFFA_LICENSE__', {
            value: Object.freeze({
                author: info.a,
                portfolio: info.u,
                github: info.g,
                signature: 'VERIFIED_AUTHOR_RAFFA_2026'
            }),
            writable: false,
            configurable: false
        });
    } catch (e) {}

    // 3. DOM Integrity Guard
    function ensureAttribution() {
        try {
            var hasAuthorLink = !!d.querySelector('a[href*="itsraffa.biz.id"], a[href*="github.com/RaffaRizqi"]');
            var existingBadge = d.getElementById('raffa-license-guard');
            
            if (!hasAuthorLink && !existingBadge) {
                var badge = d.createElement('div');
                badge.id = 'raffa-license-guard';
                badge.style.cssText = 'position:fixed;bottom:14px;left:14px;z-index:99999;background:rgba(10,10,10,0.88);backdrop-filter:blur(8px);border:1px solid rgba(235,70,4,0.45);border-radius:9999px;padding:6px 14px;font-family:-apple-system,sans-serif;font-size:11px;color:#a1a1aa;box-shadow:0 6px 24px rgba(0,0,0,0.6);display:flex;align-items:center;gap:6px;pointer-events:auto;';
                badge.innerHTML = '<span style="width:6px;height:6px;border-radius:50%;background:#eb4604;box-shadow:0 0 6px #eb4604;"></span><span>Original by <a href="' + info.u + '" target="_blank" rel="noopener noreferrer" style="color:#ffffff;text-decoration:underline;font-weight:600;">' + info.a + '</a></span>';
                d.body.appendChild(badge);
            }
        } catch (e) {}
    }

    if (d.readyState === 'loading') {
        d.addEventListener('DOMContentLoaded', ensureAttribution);
    } else {
        ensureAttribution();
    }

    // MutationObserver to safeguard attribution against automated deletion
    try {
        var obs = new MutationObserver(function() {
            ensureAttribution();
        });
        obs.observe(d.documentElement, { childList: true, subtree: true });
    } catch (e) {}
})(window, document);
