"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8479],{8479:(Ae,S,a)=>{a.r(S),a.d(S,{BuscarPageModule:()=>Fe});var g=a(6814),C=a(6223),o=a(5879),u=a(3680),T=a(799),b=a(9594);a(5375),a(2495),a(2831),a(6825),a(7394),a(8645),a(4911),a(3019),a(2096),a(2438),a(6028),a(1770),a(7921),a(4664),a(8180),a(2181),a(7398),a(9397),a(6321),a(5211),a(9360),a(8251),a(2420),a(975),a(1631),a(4829),a(4825),a(9388);const he={provide:new o.OlP("mat-autocomplete-scroll-strategy"),deps:[b.aV],useFactory:function pe(i){return()=>i.scrollStrategies.reposition()}};let ge=(()=>{var i;class n{}return(i=n).\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({providers:[he],imports:[b.U8,u.Ng,u.BQ,g.ez,T.ZD,u.Ng,u.BQ]}),n})();var p=a(9843),P=a(3403),be=a(9862);let ve=(()=>{var i;class n{constructor(e){this.http=e,this.API_KEY="8e668317eec307aac24f91f21341bbf7",this.LANGUAGE="es-ES"}getMovieImages(){return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&language=${this.LANGUAGE}`).toPromise().then(t=>t&&t.results?(console.log(t),t.results.slice(10,19).map(d=>`https://image.tmdb.org/t/p/w500/${d.poster_path}`)):[])}}return(i=n).\u0275fac=function(e){return new(e||i)(o.LFG(be.eN))},i.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),n})();function ye(i,n){if(1&i&&(o.TgZ(0,"ion-card",4),o._UZ(1,"img",5),o.qZA()),2&i){const l=n.$implicit;o.xp6(1),o.Q6J("src",l,o.LSH)}}const we=[{path:"",component:(()=>{var i;class n{constructor(e){this.imageListService=e,this.images=[]}ngOnInit(){this.imageListService.getMovieImages().then(e=>{this.images=e})}}return(i=n).\u0275fac=function(e){return new(e||i)(o.Y36(ve))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-buscar"]],decls:6,vars:1,consts:[[1,"fondo"],["placeholder","Buscar",2,"margin-top","5%"],[1,"grid-container"],["class","grid-item",4,"ngFor","ngForOf"],[1,"grid-item"],["alt","estreno",3,"src"]],template:function(e,t){1&e&&(o.TgZ(0,"ion-header")(1,"ion-toolbar",0),o._UZ(2,"ion-searchbar",1),o.qZA()(),o.TgZ(3,"ion-content",0)(4,"div",2),o.YNc(5,ye,2,1,"ion-card",3),o.qZA()()),2&e&&(o.xp6(5),o.Q6J("ngForOf",t.images))},dependencies:[g.sg,p.PM,p.W2,p.Gu,p.VI,p.sr,p.j9],styles:['@charset "UTF-8";.fondo[_ngcontent-%COMP%]{--background: none;background:url(/assets/icon/fondoprueba.png);background-size:cover;background-repeat:no-repeat;background-position:center center}ion-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:120px;height:auto;display:block;margin:0 auto}swiper-container[_ngcontent-%COMP%]{margin-top:10px;width:100%;height:60%}.swiper-wrapper[_ngcontent-%COMP%]{width:50%}swiper-slide[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:8px;display:block;width:90%;height:100%;object-fit:inherit}ion-footer[_ngcontent-%COMP%]{--background: none;color:#fff;background-color:#f4f6f7}ion-buttons[_ngcontent-%COMP%]{justify-content:space-between}.scroll-container[_ngcontent-%COMP%]{display:flex;overflow-x:auto;white-space:nowrap}.list-inline-item[_ngcontent-%COMP%]{flex:0 0 auto;width:120px;height:190px}ion-header[_ngcontent-%COMP%]{background-color:transparent}ion-card[_ngcontent-%COMP%]{margin:0;height:97%}.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:8px;padding:8px}']}),n})()}];let Oe=(()=>{var i;class n{}return(i=n).\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[P.Bz.forChild(we),P.Bz]}),n})(),Fe=(()=>{var i;class n{}return(i=n).\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[g.ez,C.u5,p.Pc,Oe,ge]}),n})()}}]);