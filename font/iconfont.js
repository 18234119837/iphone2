(function(window){var svgSprite='<svg><symbol id="icon-caidan" viewBox="0 0 1024 1024"><path d="M127.56992 275.68128c-11.18208 0-20.76672-9.58464-20.76672-20.7872 0-11.96032 9.58464-21.54496 20.76672-21.54496l776.84736 0c11.1616 0 20.74624 9.58464 20.74624 21.54496 0 11.20256-9.58464 20.7872-20.74624 20.7872L127.56992 275.68128z"  ></path><path d="M127.56992 532.76672c-11.18208 0-20.76672-8.78592-20.76672-20.76672s9.58464-20.76672 20.76672-20.76672l776.84736 0c11.1616 0 20.74624 8.78592 20.74624 20.76672s-9.58464 20.76672-20.74624 20.76672L127.56992 532.76672z"  ></path><path d="M120.38144 790.6304c-11.96032 0-21.54496-9.58464-21.54496-21.56544 0-11.20256 9.58464-20.7872 21.54496-20.7872l776.06912 0c11.96032 0 20.74624 9.58464 20.74624 20.7872 0 11.9808-8.78592 21.56544-20.74624 21.56544L120.38144 790.6304z"  ></path></symbol><symbol id="icon-gouwu2" viewBox="0 0 1024 1024"><path d="M897.601 855.234l-51.807-689.437c-0.765-10.156-9.229-18.429-19.412-18.429h-628.163c-10.185 0-18.649 8.273-19.412 18.429l-51.915 690.673c-0.405 5.403 1.456 10.421 5.14 14.394 3.684 3.971 8.855 5.921 14.272 5.921h732.045c10.752 0 19.468-8.305 19.468-19.056-0.001-0.989-0.074-1.548-0.217-2.495zM167.289 838.262l48.987-652.374h592.047l48.987 652.374h-690.020zM684.267 249.46c0 11.198-5.834 21.045-14.608 26.709-12.751 75.347-78.438 132.927-157.358 132.927s-144.606-57.581-157.358-132.927c-8.774-5.665-14.608-15.511-14.608-26.709 0-17.533 14.265-31.797 31.797-31.797s31.797 14.265 31.797 31.797c0 9.133-3.891 17.354-10.077 23.158 10.834 55.51 59.815 97.542 118.448 97.542 58.634 0 107.613-42.033 118.448-97.542-6.185-5.805-10.077-14.028-10.077-23.158 0-17.533 14.265-31.797 31.797-31.797s31.797 14.262 31.797 31.797z" fill="#272636" ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M727.934 694.684c60.047-67.008 96.572-155.563 96.572-252.643 0-209.08-169.492-378.596-378.596-378.596-209.102 0-378.598 169.516-378.598 378.596 0 209.129 169.495 378.643 378.598 378.643 95.079 0 181.977-35.056 248.505-92.963l230.23 230.251 33.288-33.286-229.999-230.002z m-282.023 79.174c-182.943 0-331.772-148.873-331.772-331.817 0-182.897 148.828-331.815 331.772-331.815 182.942 0 331.77 148.918 331.77 331.815 0 182.943-148.828 331.817-331.77 331.817z" fill="" ></path></symbol><symbol id="icon-pingguo" viewBox="0 0 1024 1024"><path d="M703.4 64c-2.1 143.8-72.7 208.2-197.9 217.4C495.8 150.7 561 80.7 703.4 64z"  ></path><path d="M517.7 309.6c149.9-61.7 275-63 350.8 55-157.5 124.9-99.6 289.3 21.9 336.2C871.2 804 811.2 881 730.7 944.9 660.1 977.4 595 906 517.2 920.2c-163.6 62.4-181.5 68-304-105.5-70.6-112-104.7-237.9-58.7-394.3 57.8-125.8 162.1-186.8 363.2-110.8z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)