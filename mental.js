var d = document
var css = '@keyframes spinner {0% {transform: rotate(0deg) scale(0.8);background-color: yellow;}50% {transform: rotate(180deg) scale(1.5);background-color: purple;}100% {transform: rotate(360deg) scale(0.8);background-color: yellow;}} body{animation:spinner 2s infinite linear; transform-origin: center center}',
head = d.head || d.getElementsByTagName('head')[0],
style = d.createElement('style');
style.type = 'text/css';
if (style.styleSheet){
style.styleSheet.cssText = css;
} else {
style.appendChild(d.createTextNode(css));
}
head.appendChild(style);