(function(){"use strict";var t={4102:function(t,e,r){var i=r(9242),o=r(3396);const n={class:"wrapper"};function s(t,e,r,i,s,a){const c=(0,o.up)("v-add-product"),d=(0,o.up)("v-sorting"),u=(0,o.up)("v-catalog");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(c),(0,o.Wm)(d),(0,o.Wm)(u)])}var a=r(7139);const c=t=>((0,o.dD)("data-v-95b58996"),t=t(),(0,o.Cn)(),t),d={class:"add-product"},u=c((()=>(0,o._)("h1",{class:"title"},"Добавление товара",-1))),l={class:"form__field"},p=c((()=>(0,o._)("label",{for:"name"},[(0,o._)("span",null,"Наименование товара")],-1))),m={key:0,class:"form__valid"},_={class:"form__field"},g=c((()=>(0,o._)("label",{for:"description"},"Описание товара",-1))),v={class:"form__field"},f=c((()=>(0,o._)("label",{for:"src"},[(0,o._)("span",null,"Ссылка на изображения товара")],-1))),O={key:0,class:"form__valid"},h={class:"form__field"},T=c((()=>(0,o._)("label",{for:"price"},[(0,o._)("span",null,"Цена товара")],-1))),D={key:0,class:"form__valid"},R=["disabled"];function S(t,e,r,n,s,c){return(0,o.wg)(),(0,o.iD)("div",d,[u,(0,o._)("form",{class:"form",action:"",onSubmit:e[8]||(e[8]=(0,i.iM)(((...t)=>c.submitForm&&c.submitForm(...t)),["prevent"]))},[(0,o._)("div",l,[p,(0,o.wy)((0,o._)("input",{onFocus:e[0]||(e[0]=(...t)=>c.onFocus&&c.onFocus(...t)),type:"text",placeholder:"Введите наименование товара","onUpdate:modelValue":e[1]||(e[1]=t=>s.name=t),class:(0,a.C_)({error:!c.nameIsValid})},null,34),[[i.nr,s.name]]),c.nameIsValid?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",m," Поле является обязательным! "))]),(0,o._)("div",_,[g,(0,o.wy)((0,o._)("textarea",{onFocus:e[2]||(e[2]=(...t)=>c.onFocus&&c.onFocus(...t)),rows:"4",name:"",placeholder:"Введите описание товара","onUpdate:modelValue":e[3]||(e[3]=t=>s.description=t)},"\r\n        ",544),[[i.nr,s.description]])]),(0,o._)("div",v,[f,(0,o.wy)((0,o._)("input",{onFocus:e[4]||(e[4]=(...t)=>c.onFocus&&c.onFocus(...t)),type:"text",placeholder:"Введите ссылку","onUpdate:modelValue":e[5]||(e[5]=t=>s.image=t),class:(0,a.C_)({error:!c.imageIsValid})},null,34),[[i.nr,s.image]]),c.imageIsValid?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",O," Поле является обязательным! "))]),(0,o._)("div",h,[T,(0,o.wy)((0,o._)("input",{onFocus:e[6]||(e[6]=(...t)=>c.onFocus&&c.onFocus(...t)),type:"number",placeholder:"Введите цену","onUpdate:modelValue":e[7]||(e[7]=t=>s.price=t),class:(0,a.C_)({error:!c.priceIsValid})},null,34),[[i.nr,s.price]]),c.priceIsValid?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("p",D," Поле является обязательным! "))]),(0,o._)("button",{disabled:!c.formIsValid||!this.isFocused,class:"button"}," Добавить товар ",8,R)],32)])}var y=r(65),C={data(){return{image:"",name:"",description:"",price:"",isFocused:!1}},methods:{...(0,y.nv)(["ADD_PRODUCT"]),submitForm(){this.formIsValid&&(this.ADD_PRODUCT({image:this.image,name:this.name,description:this.description,price:this.price}),this.name="",this.description="",this.image="",this.price="",this.isFocused=!1)},onFocus(){this.isFocused=!0}},computed:{nameIsValid(){return!!this.name||!this.isFocused},imageIsValid(){return!!this.image||!this.isFocused},priceIsValid(){return"number"===typeof this.price||!this.isFocused},formIsValid(){return this.nameIsValid&&this.priceIsValid&&this.imageIsValid}}},E=r(89);const I=(0,E.Z)(C,[["render",S],["__scopeId","data-v-95b58996"]]);var w=I;const b={class:"product-list"},P={class:"products"};function F(t,e,r,n,s,a){const c=(0,o.up)("v-catalog-item");return(0,o.wg)(),(0,o.iD)("div",b,[(0,o._)("div",P,[(0,o.Wm)(i.W3,{name:"list"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.sortedProducts,(t=>((0,o.wg)(),(0,o.j4)(c,{key:t.id,product_data:t},null,8,["product_data"])))),128))])),_:1})])])}var L=r.p+"img/delete.698fe546.svg";const V=t=>((0,o.dD)("data-v-534de2a2"),t=t(),(0,o.Cn)(),t),U={class:"product"},A=V((()=>(0,o._)("img",{src:L,alt:""},null,-1))),k=[A],G=["src"],N={class:"product__information information"},j={class:"information__name"},M={class:"information__description"},x={class:"information__price"};function W(t,e,r,i,n,s){return(0,o.wg)(),(0,o.iD)("div",U,[(0,o._)("div",{class:"product__delete",onClick:e[0]||(e[0]=(...t)=>s.deleteProduct&&s.deleteProduct(...t))},k),(0,o._)("img",{class:"product__image",src:r.product_data.image,alt:""},null,8,G),(0,o._)("div",N,[(0,o._)("div",j,(0,a.zw)(r.product_data.name),1),(0,o._)("div",M,(0,a.zw)(r.product_data.description),1),(0,o._)("div",x,(0,a.zw)(s.priceMask)+" руб.",1)])])}var Y={name:"v-catalog-item",props:{product_data:{type:Object,default(){return{}}}},methods:{...(0,y.nv)(["REMOVE_PRODUCT"]),deleteProduct(){this.REMOVE_PRODUCT(this.product_data.id)}},computed:{priceMask(){return this.product_data.price.toString().replaceAll(" ","").split("").map(((t,e,r)=>(r.length-1-e)%3===0&&e!==r.length-1?t+" ":t)).join("")}}};const Z=(0,E.Z)(Y,[["render",W],["__scopeId","data-v-534de2a2"]]);var q=Z,z={name:"v-catalog",components:{vCatalogItem:q},computed:{...(0,y.rn)({productList:t=>t.productList,sortingType:t=>t.sortingType,sortingOrder:t=>t.sortingOrder}),sortedProducts(){return[...this.productList].sort(((t,e)=>"ascending"===this.sortingOrder?"title"===this.sortingType?t.name.localeCompare(e.name):t.price===e.price?0:t.price<e.price?-1:1:"title"===this.sortingType?e.name.localeCompare(t.name):e.price===t.price?0:e.price<t.price?-1:1))}},methods:{...(0,y.nv)(["LOAD_FROM_LOCAL_STORAGE"])},created(){this.LOAD_FROM_LOCAL_STORAGE()}};const H=(0,E.Z)(z,[["render",F],["__scopeId","data-v-e296393a"]]);var J=H;const K={class:"v-sorting"};function B(t,e,r,i,n,s){const a=(0,o.up)("v-select");return(0,o.wg)(),(0,o.iD)("div",K,[(0,o.Wm)(a,{options:n.optionSortingType,onChange:s.setSortingType},null,8,["options","onChange"]),(0,o.Wm)(a,{options:n.optionSortingOrder,onChange:s.setSortingOrder},null,8,["options","onChange"])])}const Q=["value"];function X(t,e,r,i,n,s){return(0,o.wg)(),(0,o.iD)("select",{onChange:e[0]||(e[0]=(...e)=>t.onChange&&t.onChange(...e))},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.options,(t=>((0,o.wg)(),(0,o.iD)("option",{key:t.value,value:t.value},(0,a.zw)(t.title),9,Q)))),128))],32)}var $={name:"v-select",props:{options:{type:Array,required:!0}}};const tt=(0,E.Z)($,[["render",X],["__scopeId","data-v-2ed39b16"]]);var et=tt,rt={name:"v-sorting",components:{vSelect:et},data(){return{optionSortingType:[{title:"По цене",value:"price"},{title:"По названию",value:"title"}],optionSortingOrder:[{title:"По возрастанию",value:"ascending"},{title:"По убыванию",value:"descending"}]}},methods:{...(0,y.nv)(["SET_SORTING_TYPE","SET_SORTING_ORDER"]),setSortingType(t){this.SET_SORTING_TYPE(t.target.value)},setSortingOrder(t){this.SET_SORTING_ORDER(t.target.value)}},computed:{...(0,y.rn)({sortingType:t=>t.sortingType,sortingOrder:t=>t.sortingOrder})}};const it=(0,E.Z)(rt,[["render",B],["__scopeId","data-v-ea6703c8"]]);var ot=it,nt={components:{vAddProduct:w,vCatalog:J,vSorting:ot}};const st=(0,E.Z)(nt,[["render",s]]);var at=st,ct=(0,y.MT)({state:{productList:[{id:1,image:r(1601),name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:1e4}],sortingType:"price",sortingOrder:"ascending"},mutations:{PUSH_PRODUCT(t,e){const r=t.productList.length>0?Math.max(...t.productList.map((t=>t.id)))+1:1;e["id"]=r,t.productList.unshift(e),localStorage.setItem("UserProducts",JSON.stringify(t.productList))},DELETE_PRODUCT(t,e){t.productList=t.productList.filter((t=>t.id!=e)),localStorage.setItem("UserProducts",JSON.stringify(t.productList))},SORTING_TYPE(t,e){t.sortingType=e},SORTING_ORDER(t,e){t.sortingOrder=e},GET_LOCAL_PRODUCTS:t=>{const e=localStorage.getItem("UserProducts");t.productList=null!==e?JSON.parse(e):[{id:1,image:r(1601),name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:1e4}]}},actions:{ADD_PRODUCT({commit:t},e){t("PUSH_PRODUCT",e)},REMOVE_PRODUCT({commit:t},e){t("DELETE_PRODUCT",e)},SET_SORTING_TYPE({commit:t},e){t("SORTING_TYPE",e)},SET_SORTING_ORDER({commit:t},e){t("SORTING_ORDER",e)},LOAD_FROM_LOCAL_STORAGE({commit:t}){t("GET_LOCAL_PRODUCTS")}},getters:{}});const dt=(0,i.ri)(at);dt.use(ct),dt.mount("#app")},1601:function(t,e,r){t.exports=r.p+"img/product.0c04daf6.png"}},e={};function r(i){var o=e[i];if(void 0!==o)return o.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,i,o,n){if(!i){var s=1/0;for(u=0;u<t.length;u++){i=t[u][0],o=t[u][1],n=t[u][2];for(var a=!0,c=0;c<i.length;c++)(!1&n||s>=n)&&Object.keys(r.O).every((function(t){return r.O[t](i[c])}))?i.splice(c--,1):(a=!1,n<s&&(s=n));if(a){t.splice(u--,1);var d=o();void 0!==d&&(e=d)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,o,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.p="/test-idaproject/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,n,s=i[0],a=i[1],c=i[2],d=0;if(s.some((function(e){return 0!==t[e]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var u=c(r)}for(e&&e(i);d<s.length;d++)n=s[d],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(u)},i=self["webpackChunkidaproject_test"]=self["webpackChunkidaproject_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(4102)}));i=r.O(i)})();
//# sourceMappingURL=app.fc8442ea.js.map