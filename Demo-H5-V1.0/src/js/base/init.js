/**
 * @file
 * @auth tangting
 * @date 2017/11/14
 */

// alert & confirm & toast
import '../../components/Toast/Toast';

let lang = window.sessionStorage.getItem('LANG')? window.sessionStorage.getItem('LANG') : 'en';   // en / cn

// 初始html fontSize
const initFontSize = function (maxWidth = 750) {
    let _viewportWidth
    let _htmlNode = document.getElementsByTagName('html')[0]
    let _scrollWidth = window.innerWidth || screen.availWidth || document.documentElement.scrollWidth
    let _scrollHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ? screen.height : window.innerHeight : window.innerHeight

    _viewportWidth = _scrollHeight > _scrollWidth ? _scrollWidth : _scrollHeight
    if (_viewportWidth < 150 || _viewportWidth > 640) {
        _htmlNode.style.fontSize = '100px';
    } else {
        _htmlNode.style.fontSize = _viewportWidth / maxWidth * 100 + 'px'
    }
}
initFontSize();

if (lang !== 'en' && lang !== 'cn') {
    lang = 'en';     // 默认使用en
}

let app = {
    DEBUG: false,
    LANG: lang,
};

if (window.location.href.indexOf('localhost') >= 0) {
    app.DEBUG = true;
}

window.app = app;
