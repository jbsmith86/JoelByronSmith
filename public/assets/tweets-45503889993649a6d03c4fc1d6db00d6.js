var twitterFetcher=function(){function e(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(e,t){return t}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function t(e,t){for(var n=[],s=RegExp("(^| )"+t+"( |$)"),a=e.getElementsByTagName("*"),i=0,l=a.length;l>i;i++)s.test(a[i].className)&&n.push(a[i]);return n}var n="",s=20,a=!0,i=[],l=!1,r=!0,c=!0,o=null,p=!0,d=!0,u=null,h=!0;return{fetch:function(e,t,p,m,w,g,f,v,y,b){void 0===p&&(p=20),void 0===m&&(a=!0),void 0===w&&(w=!0),void 0===g&&(g=!0),void 0===f&&(f="default"),void 0===v&&(v=!0),void 0===y&&(y=null),void 0===b&&(b=!0),l?i.push({id:e,domId:t,maxTweets:p,enableLinks:m,showUser:w,showTime:g,dateFunction:f,showRt:v,customCallback:y,showInteraction:b}):(l=!0,n=t,s=p,a=m,c=w,r=g,d=v,o=f,u=y,h=b,t=document.createElement("script"),t.type="text/javascript",t.src="//cdn.syndication.twimg.com/widgets/timelines/"+e+"?&lang=en&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),document.getElementsByTagName("head")[0].appendChild(t))},callback:function(m){var w=document.createElement("div");w.innerHTML=m.body,"undefined"==typeof w.getElementsByClassName&&(p=!1),m=[];var g=[],f=[],v=[],y=[],b=0;if(p)for(w=w.getElementsByClassName("tweet");b<w.length;)0<w[b].getElementsByClassName("retweet-credit").length?v.push(!0):v.push(!1),(!v[b]||v[b]&&d)&&(m.push(w[b].getElementsByClassName("e-entry-title")[0]),y.push(w[b].getAttribute("data-tweet-id")),g.push(w[b].getElementsByClassName("p-author")[0]),f.push(w[b].getElementsByClassName("dt-updated")[0])),b++;else for(w=t(w,"tweet");b<w.length;)m.push(t(w[b],"e-entry-title")[0]),y.push(w[b].getAttribute("data-tweet-id")),g.push(t(w[b],"p-author")[0]),f.push(t(w[b],"dt-updated")[0]),0<t(w[b],"retweet-credit").length?v.push(!0):v.push(!1),b++;for(m.length>s&&(m.splice(s,m.length-s),g.splice(s,g.length-s),f.splice(s,f.length-s),v.splice(s,v.length-s)),w=[],b=m.length,v=0;b>v;){if("string"!=typeof o){var T=new Date(f[v].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),T=o(T);if(f[v].setAttribute("aria-label",T),m[v].innerText)if(p)f[v].innerText=T;else{var x=document.createElement("p"),C=document.createTextNode(T);x.appendChild(C),x.setAttribute("aria-label",T),f[v]=x}else f[v].textContent=T}T="",a?(c&&(T+='<div class="user">'+e(g[v].innerHTML)+"</div>"),T+='<p class="tweet">'+e(m[v].innerHTML)+"</p>",r&&(T+='<p class="timePosted">'+f[v].getAttribute("aria-label")+"</p>")):m[v].innerText?(c&&(T+='<p class="user">'+g[v].innerText+"</p>"),T+='<p class="tweet">'+m[v].innerText+"</p>",r&&(T+='<p class="timePosted">'+f[v].innerText+"</p>")):(c&&(T+='<p class="user">'+g[v].textContent+"</p>"),T+='<p class="tweet">'+m[v].textContent+"</p>",r&&(T+='<p class="timePosted">'+f[v].textContent+"</p>")),h&&(T+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+y[v]+'" class="twitter_reply_icon">Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+y[v]+'" class="twitter_retweet_icon">Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+y[v]+'" class="twitter_fav_icon">Favorite</a></p>'),w.push(T),v++}if(null==u){for(m=w.length,g=0,f=document.getElementById(n),y="<ul>";m>g;)y+="<li>"+w[g]+"</li>",g++;f.innerHTML=y+"</ul>"}else u(w);l=!1,0<i.length&&(twitterFetcher.fetch(i[0].id,i[0].domId,i[0].maxTweets,i[0].enableLinks,i[0].showUser,i[0].showTime,i[0].dateFunction,i[0].showRt,i[0].customCallback,i[0].showInteraction),i.splice(0,1))}}}();