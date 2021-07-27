(this["webpackJsonp12-react-redux"]=this["webpackJsonp12-react-redux"]||[]).push([[0],{30:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),o=n(13),r=n.n(o),a=(n(30),n(15)),s=n(9),l="GET_MOVIES",u="GET_MOVIE_DETAIL",d="ADD_MOVIE_FAVORITE",m="REMOVE_MOVIE_FAVORITE",j=function(e){return function(t){return fetch("http://www.omdbapi.com/?apikey=20dac387&s="+e).then((function(e){return e.json()})).then((function(e){void 0!==e.Search?t({type:l,payload:e}):alert("Movie not found.")}))}},v=function(e){var t=e.title,n=e.id,i=e.poster;return{type:d,payload:{title:t,id:n,poster:i}}},h=(n(34),n(1));var f=Object(s.b)((function(e){return{movies:e.moviesLoaded}}),(function(e){return{addMovieFavorite:function(t){return e(v(t))},getMovies:function(t){return e(j(t))}}}))((function(e){var t=e.getMovies,n=Object(i.useState)(""),c=Object(a.a)(n,2),o=c[0],r=c[1];return Object(i.useEffect)((function(){var e=document.querySelector(".landingStructure"),t=document.querySelector(".landingContainer");t.addEventListener("mousemove",(function(t){var n=(window.innerWidth/2-t.pageX)/20,i=(window.innerHeight/2-t.pageY)/20;e.style.transform="rotateY(".concat(n,"deg) rotateX(").concat(-1*i,"deg)")})),t.addEventListener("mouseenter",(function(t){e.style.transition="0.1s "})),t.addEventListener("mouseleave",(function(t){e.style.transition="0.5s",e.style.transform="rotateY(0deg) rotateX(0deg)"}))})),Object(h.jsx)("div",{className:"landingPage",children:Object(h.jsx)("div",{className:"landingContainer",children:Object(h.jsxs)("div",{className:"landingStructure",children:[Object(h.jsx)("h1",{children:"Welcome to my movie index!"}),Object(h.jsxs)("form",{className:"landingForm",onSubmit:function(n){return function(n){n.preventDefault(),t(o),e.history.push("/movie")}(n)},children:[Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:"landingInput",type:"text",id:"title",autoComplete:"off",placeholder:". . .",value:o,onChange:function(e){return function(e){r(e.target.value)}(e)}})}),Object(h.jsx)("button",{className:"landingButton",type:"submit",children:"Search"})]})]})})})})),b=n(8);n(36);var p=Object(s.b)((function(e){return{movies:e.moviesFavourites}}),{removeMovieFavorite:function(e){return{type:m,payload:e}}})((function(e){var t=e.movies,n=e.removeMovieFavorite;return Object(i.useEffect)((function(){var e=!1,t=document.querySelector(".structurer"),n=document.querySelectorAll(".favPoster"),i=document.querySelector(".favList"),c=document.querySelectorAll(".listOrder"),o=document.querySelector(".structure"),r=document.querySelectorAll(".favTitle"),a=document.querySelectorAll(".mark"),s=document.querySelectorAll(".delFav");if(null===i)return t.style.display="none","nothing";t.addEventListener("click",(function(){switch(e){case!1:e=!0,t.textContent="Cards",o.style.width="1000px",n.forEach((function(e){return e.style.display="block"})),i.style.flexDirection="row",r.forEach((function(e){return e.style.display="none"})),a.forEach((function(e){return e.style.display="none"})),c.forEach((function(e){return e.style.flexDirection="column"})),s.forEach((function(e){return e.style.marginLeft="0px"}));break;case!0:e=!1,t.textContent="List",o.style.width="400px",n.forEach((function(e){return e.style.display="none"})),i.style.flexDirection="column",r.forEach((function(e){return e.style.display="inline"})),a.forEach((function(e){return e.style.display="inline"})),s.forEach((function(e){return e.style.marginLeft="30px"})),c.forEach((function(e){return e.style.flexDirection="row"}));break;default:return"error"}}))})),Object(h.jsx)("div",{className:"allFav",children:Object(h.jsxs)("div",{className:"structure",children:[Object(h.jsx)("div",{className:"emptyness"}),Object(h.jsx)("h2",{children:"Favourite movies:"}),Object(h.jsx)("button",{className:"structurer",children:"List"}),0===t.length?Object(h.jsx)("span",{children:'To add any movie to the list, click the "Fav" button on their card! Dont worry if you click on the same movie twice, it will be filtered out.'}):Object(h.jsx)("ul",{className:"favList",children:t.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("li",{className:"listOrder",children:[Object(h.jsx)("img",{className:"favPoster",src:e.poster,alt:"Movie Poster"}),Object(h.jsxs)("span",{className:"mark",children:[" \u25cf ",Object(h.jsx)(b.b,{to:"/movie/ID".concat(e.id),className:"favTitle",children:e.title},e.id)]}),Object(h.jsx)("button",{className:"delFav",onClick:function(){n(e.id)},children:"delete"})]})})}))})]})})}));n(39);var O=Object(s.b)((function(e){return{movies:e.moviesLoaded}}),(function(e){return{addMovieFavorite:function(t){return e(v(t))},getMovies:function(t){return e(j(t))}}}))((function(e){var t=e.movies,n=e.getMovies,c=e.addMovieFavorite,o=Object(i.useState)(""),r=Object(a.a)(o,2),s=r[0],l=r[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"emptyness"}),Object(h.jsx)("div",{className:"Searcher",children:Object(h.jsxs)("form",{className:"form-container",onSubmit:function(e){return function(e){e.preventDefault(),n(s),l("")}(e)},children:[Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:"inputStyle",type:"text",id:"title",autoComplete:"off",placeholder:". . .",value:s,onChange:function(e){return function(e){l(e.target.value)}(e)}})}),Object(h.jsx)("button",{type:"submit",children:"Search"})]})}),Object(h.jsx)("div",{className:"positioner",children:t.map((function(e){return Object(h.jsxs)("div",{className:"movies",children:["N/A"===e.Poster?Object(h.jsx)("img",{className:"mainPoster",alt:"img not found",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png"}):Object(h.jsx)("img",{className:"mainPoster",alt:"Movie Poster",src:e.Poster}),Object(h.jsx)("button",{className:"favButton",onClick:function(){return c({title:e.Title,id:e.imdbID,poster:e.Poster})},children:"Fav"}),Object(h.jsx)("div",{className:"titleContainer",children:Object(h.jsx)(b.b,{to:"/movie/ID".concat(e.imdbID),className:"movieTitle",children:e.Title})})]},e.imdbID)}))})]})})),x=n(3);n(40);function y(){return Object(h.jsxs)("header",{className:"navbar",children:[Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{className:"list",children:Object(h.jsxs)("li",{className:"list-item",children:[Object(h.jsx)(b.c,{exact:!0,to:"/",children:"Home"}),Object(h.jsx)(b.c,{exact:!0,to:"/movie",children:"Movies"}),Object(h.jsx)(b.c,{to:"/movie/favs",children:"Favourites"})]})})}),Object(h.jsx)(x.a,{exact:!0,path:"/movie",children:Object(h.jsx)("span",{className:"buscPlaceholder",children:"Search..."})})]})}var g=n(21),N=n(22),E=n(25),w=n(24);n(41);var S=function(e){Object(E.a)(n,e);var t=Object(w.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.props.getMovieDetail(this.props.match.params.id)}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"emptyness"}),Object(h.jsx)("div",{className:"detailPage",children:Object(h.jsxs)("div",{className:"movieCard",children:[Object(h.jsx)("img",{className:"poster",alt:"Movie Poster",src:this.props.movie.Poster}),Object(h.jsxs)("div",{className:"movieInfo",children:[Object(h.jsxs)("h2",{className:"movieInfoTitle",children:[this.props.movie.Title," (",this.props.movie.Year,")"]}),Object(h.jsxs)("div",{className:"quickFacts",children:[Object(h.jsxs)("span",{className:"fact topFact",children:["Genre: ",this.props.movie.Genre]}),Object(h.jsxs)("span",{className:"fact",children:["Runtime: ",this.props.movie.Runtime]}),Object(h.jsxs)("span",{className:"fact",children:["Cast: ",this.props.movie.Actors,", and others."]}),Object(h.jsxs)("span",{className:"fact btmFact",children:["Director: ",this.props.movie.Director]})]}),Object(h.jsx)("span",{children:this.props.movie.Plot})]})]})})]})}}]),n}(c.a.Component),D=Object(s.b)((function(e){return{movie:e.movieDetail}}),{getMovieDetail:function(e){return function(t){return fetch("http://www.omdbapi.com/?apikey=20dac387&i="+e).then((function(e){return e.json()})).then((function(e){t({type:u,payload:e})}))}}})(S);var F=function(){return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)(x.a,{path:"/movie",component:y}),Object(h.jsx)(x.a,{exact:!0,path:"/",component:f}),Object(h.jsx)(x.a,{exact:!0,path:"/movie",component:O}),Object(h.jsx)(x.a,{path:"/movie/favs",component:p}),Object(h.jsx)(x.a,{path:"/movie/ID:id",component:D})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=n(16),k=n(10),I={moviesFavourites:[],moviesLoaded:[],movieDetail:{}};var P=n(23),C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.b,L=Object(M.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,n=function(){return e.moviesFavourites.filter((function(e){return e.title===t.payload.title})).length>0?Object(k.a)({},e):Object(k.a)(Object(k.a)({},e),{},{moviesFavourites:e.moviesFavourites.concat(t.payload)})};switch(t.type){case d:return n();case l:return Object(k.a)(Object(k.a)({},e),{},{moviesLoaded:t.payload.Search});case u:return Object(k.a)(Object(k.a)({},e),{},{movieDetail:t.payload});case m:return Object(k.a)(Object(k.a)({},e),{},{moviesFavourites:e.moviesFavourites.filter((function(e){return e.id!==t.payload}))});default:return e}}),C(Object(M.a)(P.a)));r.a.render(Object(h.jsx)(s.a,{store:L,children:Object(h.jsx)(b.a,{children:Object(h.jsx)(F,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.52735385.chunk.js.map