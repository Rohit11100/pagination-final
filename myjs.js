document.addEventListener("click",function(b){function n(a,e){a.className=a.className.replace(u,"")+e}function p(a){return a.getAttribute("data-sort")||a.innerText}var u=/ dir-(u|d) /,c=/\bsortable\b/;b=b.target;if("TH"===b.nodeName)try{var q=b.parentNode,f=q.parentNode.parentNode;if(c.test(f.className)){var g,d=q.cells;for(c=0;c<d.length;c++)d[c]===b?g=c:n(d[c],"");d=" dir-d ";-1!==b.className.indexOf(" dir-d ")&&(d=" dir-u ");n(b,d);var h=f.tBodies[0],k=[].slice.call(h.rows,0),r=" dir-u "===d;k.sort(function(a,
e){var l=p((r?a:e).cells[g]),m=p((r?e:a).cells[g]);return isNaN(l-m)?l.localeCompare(m):l-m});for(var t=h.cloneNode();k.length;)t.appendChild(k.splice(0,1)[0]);f.replaceChild(t,h)}}catch(a){}});






















