function SpreadsheetApi(){var Pb='',Qb=0,Rb='gwt.codesvr=',Sb='gwt.hosted=',Tb='gwt.hybrid',Ub='SpreadsheetApi',Vb='#',Wb='?',Xb='/',Yb=1,Zb='img',$b='clear.cache.gif',_b='baseUrl',ac='script',bc='SpreadsheetApi.nocache.js',cc='base',dc='//',ec='meta',fc='name',gc='gwt:property',hc='content',ic='=',jc='gwt:onPropertyErrorFn',kc='Bad handler "',lc='" for "gwt:onPropertyErrorFn"',mc='gwt:onLoadErrorFn',nc='" for "gwt:onLoadErrorFn"',oc='modernie',pc='MSIE',qc='Trident',rc='yes',sc='none',tc='user.agent',uc='webkit',vc='safari',wc='msie',xc=10,yc=11,zc='ie10',Ac=9,Bc='ie9',Cc=8,Dc='ie8',Ec='gecko',Fc='gecko1_8',Gc=2,Hc=3,Ic=4,Jc='Single-script hosted mode not yet implemented. See issue ',Kc='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',Lc='4D69F5E38BE481B69475926DD4E688E6',Mc=':1',Nc=':2',Oc=':',Pc='DOMContentLoaded',Qc=50;var l=Pb,m=Qb,n=Rb,o=Sb,p=Tb,q=Ub,r=Vb,s=Wb,t=Xb,u=Yb,v=Zb,w=$b,A=_b,B=ac,C=bc,D=cc,F=dc,G=ec,H=fc,I=gc,J=hc,K=ic,L=jc,M=kc,N=lc,O=mc,P=nc,Q=oc,R=pc,S=qc,T=rc,U=sc,V=tc,W=uc,X=vc,Y=wc,Z=xc,$=yc,_=zc,ab=Ac,bb=Bc,cb=Cc,db=Dc,eb=Ec,fb=Fc,gb=Gc,hb=Hc,ib=Ic,jb=Jc,kb=Kc,lb=Lc,mb=Mc,nb=Nc,ob=Oc,pb=Pc,qb=Qc;var rb=window,sb=document,tb,ub,vb=l,wb={},xb=[],yb=[],zb=[],Ab=m,Bb,Cb;if(!rb.__gwt_stylesLoaded){rb.__gwt_stylesLoaded={}}if(!rb.__gwt_scriptsLoaded){rb.__gwt_scriptsLoaded={}}function Db(){var b=false;try{var c=rb.location.search;return (c.indexOf(n)!=-1||(c.indexOf(o)!=-1||rb.external&&rb.external.gwtOnLoad))&&c.indexOf(p)==-1}catch(a){}Db=function(){return b};return b}
function Eb(){if(tb&&ub){tb(Bb,q,vb,Ab)}}
function Fb(){function e(a){var b=a.lastIndexOf(r);if(b==-1){b=a.length}var c=a.indexOf(s);if(c==-1){c=a.length}var d=a.lastIndexOf(t,Math.min(c,b));return d>=m?a.substring(m,d+u):l}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=sb.createElement(v);b.src=a+w;a=e(b.src)}return a}
function g(){var a=Ib(A);if(a!=null){return a}return l}
function h(){var a=sb.getElementsByTagName(B);for(var b=m;b<a.length;++b){if(a[b].src.indexOf(C)!=-1){return e(a[b].src)}}return l}
function i(){var a=sb.getElementsByTagName(D);if(a.length>m){return a[a.length-u].href}return l}
function j(){var a=sb.location;return a.href==a.protocol+F+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==l){k=h()}if(k==l){k=i()}if(k==l&&j()){k=e(sb.location.href)}k=f(k);return k}
function Gb(){var b=document.getElementsByTagName(G);for(var c=m,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(H),g;if(f){if(f==I){g=e.getAttribute(J);if(g){var h,i=g.indexOf(K);if(i>=m){f=g.substring(m,i);h=g.substring(i+u)}else{f=g;h=l}wb[f]=h}}else if(f==L){g=e.getAttribute(J);if(g){try{Cb=eval(g)}catch(a){alert(M+g+N)}}}else if(f==O){g=e.getAttribute(J);if(g){try{Bb=eval(g)}catch(a){alert(M+g+P)}}}}}}
var Hb=function(a,b){return b in xb[a]};var Ib=function(a){var b=wb[a];return b==null?null:b};function Jb(a,b){var c=zb;for(var d=m,e=a.length-u;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function Kb(a){var b=yb[a](),c=xb[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(Cb){Cb(a,d,b)}throw null}
yb[Q]=function(){{var a=rb.navigator.userAgent;if(a.indexOf(R)==-1&&a.indexOf(S)!=-1){return T}return U}};xb[Q]={'none':m,'yes':u};yb[V]=function(){var a=navigator.userAgent.toLowerCase();var b=sb.documentMode;if(function(){return a.indexOf(W)!=-1}())return X;if(function(){return a.indexOf(Y)!=-1&&(b>=Z&&b<$)}())return _;if(function(){return a.indexOf(Y)!=-1&&(b>=ab&&b<$)}())return bb;if(function(){return a.indexOf(Y)!=-1&&(b>=cb&&b<$)}())return db;if(function(){return a.indexOf(eb)!=-1||b>=$}())return fb;return X};xb[V]={'gecko1_8':m,'ie10':u,'ie8':gb,'ie9':hb,'safari':ib};SpreadsheetApi.onScriptLoad=function(a){SpreadsheetApi=null;tb=a;Eb()};if(Db()){alert(jb+kb);return}Fb();Gb();try{var Lb;Jb([U,fb],lb);Jb([T,fb],lb+mb);Jb([U,X],lb+nb);Lb=zb[Kb(Q)][Kb(V)];var Mb=Lb.indexOf(ob);if(Mb!=-1){Ab=Number(Lb.substring(Mb+u))}}catch(a){return}var Nb;function Ob(){if(!ub){ub=true;Eb();if(sb.removeEventListener){sb.removeEventListener(pb,Ob,false)}if(Nb){clearInterval(Nb)}}}
if(sb.addEventListener){sb.addEventListener(pb,function(){Ob()},false)}var Nb=setInterval(function(){if(/loaded|complete/.test(sb.readyState)){Ob()}},qb)}
SpreadsheetApi();(function () {var $gwt_version = "2.9.0";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = '4D69F5E38BE481B69475926DD4E688E6';function P(){}
function qH(){}
function mH(){}
function uh(){}
function Bh(){}
function jb(){}
function wb(){}
function Tf(){}
function Tn(){}
function Fn(){}
function Mn(){}
function eo(){}
function lo(){}
function so(){}
function zo(){}
function Go(){}
function No(){}
function Uo(){}
function _o(){}
function gp(){}
function rp(){}
function zp(){}
function Gp(){}
function Sp(){}
function Yp(){}
function cq(){}
function GH(){}
function jI(){}
function lI(){}
function ZI(){}
function xK(){}
function zK(){}
function TK(){}
function VK(){}
function $K(){}
function rN(){}
function VN(){}
function XN(){}
function VO(){}
function fP(){}
function dR(){}
function US(){}
function YS(){}
function oW(){}
function sW(){}
function HW(){}
function c0(){}
function P0(){}
function Q3(){}
function S6(){}
function kpb(){}
function nvb(){}
function wvb(){}
function Evb(){}
function Mvb(){}
function zAb(){}
function $Bb(){}
function aCb(){}
function cCb(){}
function OCb(){}
function fab(){}
function uab(){}
function Bab(){}
function Qab(){}
function bbb(){}
function dbb(){}
function fbb(){}
function ibb(){}
function kbb(){}
function mbb(){}
function obb(){}
function qbb(){}
function sbb(){}
function tbb(){}
function vbb(){}
function xbb(){}
function ybb(){}
function Abb(){}
function Bbb(){}
function Dbb(){}
function Fbb(){}
function Gbb(){}
function Ibb(){}
function Jbb(){}
function Lbb(){}
function Nbb(){}
function Pbb(){}
function Rbb(){}
function Tbb(){}
function Vbb(){}
function bfb(){}
function hfb(){}
function Agb(){}
function Cgb(){}
function Egb(){}
function Ggb(){}
function Igb(){}
function Kgb(){}
function Mgb(){}
function Ogb(){}
function Qgb(){}
function Rgb(){}
function Sgb(){}
function Ugb(){}
function Wgb(){}
function Ygb(){}
function $gb(){}
function ahb(){}
function ehb(){}
function ghb(){}
function ihb(){}
function khb(){}
function alb(){}
function wmb(){}
function Fmb(){}
function Gmb(){}
function Mmb(){}
function Nmb(){}
function txb(){}
function Bzb(){}
function Fzb(){}
function Hzb(){}
function PAb(){}
function SAb(){}
function VAb(){}
function YAb(){}
function _Ab(){}
function cBb(){}
function fBb(){}
function iBb(){}
function lBb(){}
function lab(a){}
function JH(a){}
function Zi(){mi()}
function rj(){mi()}
function FJ(){EJ()}
function tK(){ZJ()}
function qK(){oK()}
function _O(){TO()}
function cP(){TO()}
function mP(){lP()}
function t4(){s4()}
function z4(){y4()}
function e5(){Y5()}
function aK(a){FI(a)}
function ulb(){jlb()}
function cnb(){cnb=mH}
function zn(a,b){a.b=b}
function un(a,b){a.f=b}
function yn(a,b){a.a=b}
function jc(a,b){a.a=b}
function tH(a,b){a.a=b}
function uH(a,b){a.b=b}
function pU(a,b){a.b=b}
function ZU(a,b){a.b=b}
function hU(a,b){a.c=b}
function iU(a,b){a.e=b}
function Tq(a,b){a.e=b}
function Z_(a,b){a.e=b}
function $_(a,b){a.f=b}
function YI(a,b){a.d=b}
function YU(a,b){a.a=b}
function QL(a,b){a.a=b}
function mQ(a,b){a.w=b}
function XQ(a,b){a.o=b}
function tU(a,b){a.i=b}
function w2(a,b){a.i=b}
function v2(a,b){a.g=b}
function x2(a,b){a.j=b}
function z2(a,b){a.n=b}
function C2(a,b){a.r=b}
function D2(a,b){a.s=b}
function J2(a,b){a.B=b}
function V2(a,b){a.M=b}
function VZ(a,b){a.H=b}
function UZ(a,b){a.G=b}
function Z2(a,b){a.N=b}
function _2(a,b){a.P=b}
function _6(a,b){a.k=b}
function G6(a,b){a.b=b}
function H6(a,b){a.c=b}
function I6(a,b){a.e=b}
function $6(a,b){a.a=b}
function a3(a,b){a.S=b}
function e3(a,b){a.X=b}
function f3(a,b){a.$=b}
function g3(a,b){a._=b}
function E5(a,b){a.o=b}
function a7(a,b){a.n=b}
function c7(a,b){a.p=b}
function d7(a,b){a.q=b}
function R8(a,b){a.N=b}
function NCb(a,b){a.a=b}
function We(a,b){a.Vc=b}
function ci(b,a){b.id=a}
function p6(a){this.b=a}
function gb(a){this.a=a}
function nb(a){this.a=a}
function Lb(a){this.a=a}
function Rb(a){this.a=a}
function ih(a){this.a=a}
function kh(a){this.a=a}
function Mp(a){this.a=a}
function Cq(a){this.a=a}
function Yq(a){this.a=a}
function br(a){this.a=a}
function CH(a){this.a=a}
function IH(a){this.a=a}
function LL(a){this.a=a}
function OL(a){this.a=a}
function FM(a){this.a=a}
function HM(a){this.a=a}
function tN(a){this.a=a}
function vN(a){this.a=a}
function vS(a){this.a=a}
function tS(a){this.a=a}
function zS(a){this.a=a}
function BS(a){this.a=a}
function DS(a){this.a=a}
function FS(a){this.a=a}
function HS(a){this.a=a}
function LS(a){this.a=a}
function NS(a){this.a=a}
function _S(a){this.a=a}
function sP(a){this.a=a}
function wR(a){this.a=a}
function ER(a){this.a=a}
function AU(a){this.a=a}
function CU(a){this.a=a}
function FV(a){this.a=a}
function HV(a){this.a=a}
function JV(a){this.a=a}
function hW(a){this.a=a}
function hX(a){this.a=a}
function dX(a){this.a=a}
function fX(a){this.a=a}
function i_(a){this.a=a}
function u_(a){this.a=a}
function A_(a){this.a=a}
function C_(a){this.a=a}
function K_(a){this.a=a}
function M_(a){this.a=a}
function R_(a){this.a=a}
function T_(a){this.a=a}
function G0(a){this.a=a}
function J0(a){this.a=a}
function K0(a){this.a=a}
function O0(a){this.a=a}
function V0(a){this.a=a}
function D3(a){this.a=a}
function H3(a){this.b=a}
function LO(a){this.c=a}
function m4(a){this.a=a}
function d6(a){this.a=a}
function g6(a){this.a=a}
function T6(a){this.a=a}
function v7(a){this.a=a}
function A7(a){this.b=a}
function B8(a){this.b=a}
function J8(a){this.a=a}
function L8(a){this.a=a}
function a9(a){this.a=a}
function M9(a){this.a=a}
function U9(a){this.a=a}
function np(){this.a={}}
function d5(){this.a={}}
function d$(a,b){a.cc=b}
function e$(a,b){a.dc=b}
function c$(a,b){a.mb=b}
function TZ(a,b){a.lb=b}
function jkb(a,b){a.b=b}
function ikb(a,b){a.a=b}
function Aab(a,b){a.a=b}
function kkb(a,b){a.c=b}
function lkb(a,b){a.e=b}
function mkb(a,b){a.f=b}
function nkb(a,b){a.g=b}
function okb(a,b){a.i=b}
function qkb(a,b){a.j=b}
function rkb(a,b){a.k=b}
function skb(a,b){a.n=b}
function tkb(a,b){a.o=b}
function ukb(a,b){a.p=b}
function vkb(a,b){a.q=b}
function wkb(a,b){a.r=b}
function xkb(a,b){a.s=b}
function ykb(a,b){a.t=b}
function Akb(a,b){a.u=b}
function Bkb(a,b){a.v=b}
function Ckb(a,b){a.w=b}
function Dkb(a,b){a.A=b}
function Ekb(a,b){a.d=b}
function Fkb(a,b){a.B=b}
function Gkb(a,b){a.C=b}
function Hkb(a,b){a.D=b}
function Ikb(a,b){a.F=b}
function Jkb(a,b){a.G=b}
function Kkb(a,b){a.H=b}
function Lkb(a,b){a.I=b}
function Mkb(a,b){a.J=b}
function Nkb(a,b){a.K=b}
function Okb(a,b){a.L=b}
function Pkb(a,b){a.M=b}
function Qkb(a,b){a.N=b}
function Rkb(a,b){a.O=b}
function Skb(a,b){a.P=b}
function Tkb(a,b){a.Q=b}
function Ukb(a,b){a.R=b}
function Vkb(a,b){a.S=b}
function Wkb(a,b){a.T=b}
function klb(a,b){a.a=b}
function llb(a,b){a.b=b}
function mlb(a,b){a.c=b}
function nlb(a,b){a.d=b}
function olb(a,b){a.e=b}
function plb(a,b){a.f=b}
function qlb(a,b){a.g=b}
function rlb(a,b){a.i=b}
function slb(a,b){a.j=b}
function tlb(a,b){a.k=b}
function tBb(a,b){a.b=b}
function ttb(a){this.a=a}
function ztb(a){this.a=a}
function Etb(a){this.a=a}
function Jtb(a){this.a=a}
function bob(a){this.a=a}
function RCb(a){this.a=a}
function dab(a){this.a=a}
function hab(a){this.a=a}
function Eab(a){this.a=a}
function Rab(a){this.a=a}
function Tab(a){this.a=a}
function Ycb(a){this.a=a}
function bdb(a){this.a=a}
function cdb(a){this.a=a}
function gdb(a){this.a=a}
function _db(a){this.a=a}
function feb(a){this.a=a}
function heb(a){this.a=a}
function jeb(a){this.a=a}
function Seb(a){this.a=a}
function Teb(a){this.a=a}
function nfb(a){this.a=a}
function lgb(a){this.a=a}
function chb(a){this.a=a}
function zjb(a){this.a=a}
function Bjb(a){this.a=a}
function Fjb(a){this.a=a}
function flb(a){this.a=a}
function hlb(a){this.a=a}
function Ymb(a){this.a=a}
function Rnb(a){this.a=a}
function Csb(a){this.a=a}
function dtb(a){this.d=a}
function Nub(a){this.c=a}
function Dwb(a){this.c=a}
function ewb(a){this.b=a}
function Qvb(a){this.b=a}
function exb(a){this.a=a}
function ixb(a){this.a=a}
function $yb(a){this.a=a}
function Ozb(a){this.a=a}
function Qzb(a){this.a=a}
function Szb(a){this.a=a}
function Uzb(a){this.a=a}
function jCb(a){this.a=a}
function oCb(a){this.a=a}
function BCb(a){this.a=a}
function GCb(a){this.a=a}
function $j(b,a){b.src=a}
function BK(a,b){wf(b,a)}
function ZBb(a,b){a.add(b)}
function Yf(a){Xf=a;Pg()}
function QO(){QO=mH;PO()}
function HN(){HN=mH;LN()}
function Wf(){this.b=Dg()}
function _n(){this.c=++Yn}
function Kxb(){osb(this)}
function oub(){dub(this)}
function Jmb(){Imb(this)}
function _j(b,a){b.value=a}
function pn(b,a){b.value=a}
function dS(a,b){hO(a.j,b)}
function fS(a,b){Jf(a.j,b)}
function fU(a,b){ei(a.a,b)}
function qU(a,b){gU(a.e,b)}
function c1(a,b){mX(a.W,b)}
function g1(a,b){vX(a.W,b)}
function K1(a,b){dS(a.v,b)}
function l2(a,b){uZ(a.W,b)}
function s2(a,b){TZ(a.W,b)}
function t2(a,b){UZ(a.W,b)}
function u2(a,b){VZ(a.W,b)}
function E2(a,b){WZ(a.W,b)}
function F2(a,b){XZ(a.W,b)}
function K2(a,b){ZZ(a.W,b)}
function L2(a,b){SZ(a.W,b)}
function M2(a,b){eZ(a.W,b)}
function O2(a,b){_Z(a.W,b)}
function P2(a,b){a$(a.W,b)}
function W2(a,b){c$(a.W,b)}
function X2(a,b){d$(a.W,b)}
function Y2(a,b){e$(a.W,b)}
function h3(a,b){i$(a.W,b)}
function l3(a,b){A$(a.W,b)}
function m3(a,b){B$(a.W,b)}
function b3(a,b){YZ(a.W,b)}
function s3(a,b){b_(a.W,b)}
function t3(a,b){c_(a.W,b)}
function j3(a,b){XW(a.V,b)}
function N2(a,b){WW(a.V,b)}
function U2(a,b){gS(a.v,b)}
function OV(a,b){Dh(b,a.k)}
function bW(a,b){Dh(b,a.B)}
function aS(a){hO(a.j,a.c)}
function MU(a){a.a=0;a.b=0}
function eQ(a){a.A=new oub}
function Dq(){this.a=new yq}
function PL(){PL=mH;new Kxb}
function PM(){PM=mH;OM=FG()}
function mi(){mi=mH;li=BG()}
function wI(){wI=mH;uI=CG()}
function uJ(){uJ=mH;qJ=DG()}
function lP(){lP=mH;kP=qP()}
function mU(){lU.call(this)}
function nL(){oL.call(this)}
function XT(){VT.call(this)}
function c8(a,b){a.push(b)}
function n5(b,a){b.push(a)}
function Bg(b,a){b.length=a}
function mp(a,b,c){a.a[b]=c}
function $1(a,b){akb(a.X,b)}
function D1(a,b){Xkb(a.X,b)}
function N1(a,b){$jb(a.X,b)}
function g2(a,b){_jb(a.X,b)}
function r2(a,b){pkb(a.X,b)}
function h$(a,b){qV(a.wc,b)}
function Ipb(a){Bpb(this,a)}
function kc(a){jc(this,a.id)}
function oh(a){nh();mh.Ld(a)}
function eh(a){return a.Jd()}
function R3(){lU.call(this)}
function _mb(){qg.call(this)}
function Xnb(){qg.call(this)}
function Znb(){qg.call(this)}
function oob(){qg.call(this)}
function mpb(){qg.call(this)}
function Kzb(){qg.call(this)}
function lfb(){new nfb(this)}
function yxb(){qg.call(this)}
function jlb(){jlb=mH;zlb()}
function vg(){vg=mH;ug=new P}
function Wg(){Wg=mH;Vg=new S6}
function RH(){this.a=new cpb}
function T9(){this.e=new wab}
function AH(){AH=mH;zH=new GH}
function EJ(){EJ=mH;DJ=new _n}
function c5(a,b){return null}
function DO(a,b){FO(a,b,a.c)}
function $L(a,b){eM(a,b,b,-1)}
function vR(a,b){g2(a.a.a,b)}
function Ye(a,b){bi(a.md(),b)}
function $e(a,b){jf(a.md(),b)}
function ui(a,b,c){a.add(b,c)}
function T8(a,b){a.v=b;qQ(a)}
function a$(a,b){a.ub=b;z$(a)}
function tcb(a,b){a.c[mJb]=b}
function hi(b,a){b.tabIndex=a}
function Yab(a){Zab(a);$ab(a)}
function rg(a){pg.call(this,a)}
function Sb(a){Rb.call(this,a)}
function Vc(a){Rb.call(this,a)}
function Vf(b,a){b.fillStyle=a}
function Ag(b,a){b[b.length]=a}
function Cg(b,a){b[b.length]=a}
function gi(b,a){b.scrollTop=a}
function Hi(a){mi();return a|0}
function kk(a){(mi(),li).Vd(a)}
function lO(){lO=mH;If();tO()}
function o4(){o4=mH;n4=new _n}
function s4(){s4=mH;r4=new _n}
function y4(){y4=mH;x4=new _n}
function b5(){b5=mH;a5=new _n}
function Y5(){Y5=mH;X5=new a6}
function Hmb(){this.a=new oub}
function Rxb(){this.a=new Kxb}
function rBb(){this.a=new Kxb}
function Bq(a){zq.call(this,a)}
function Hq(a){Fq.call(this,a)}
function $q(a){pg.call(this,a)}
function KH(a){JH.call(this,a)}
function RK(a){Hq.call(this,a)}
function _M(a,b){rL(a,b);WM(a)}
function B2(a,b){a.q=b;UU(a.R)}
function B0(a,b){l3(wT(a.a),b)}
function C0(a,b){m3(wT(a.a),b)}
function E0(a,b){s3(wT(a.a),b)}
function F0(a,b){t3(wT(a.a),b)}
function w0(a,b){g1(wT(a.a),b)}
function lp(a,b){return a.a[b]}
function VR(a){return a.g&&a.f}
function u3(a){cZ(a.W);_W(a.V)}
function p2(a,b,c){RZ(a.W,b,c)}
function n1(a,b,c){RX(a.W,b,c)}
function q3(a,b,c){U$(a.W,b,c)}
function qob(a){rg.call(this,a)}
function anb(a){rg.call(this,a)}
function Ynb(a){rg.call(this,a)}
function $nb(a){rg.call(this,a)}
function npb(a){rg.call(this,a)}
function pob(a){tg.call(this,a)}
function Nb(){Lb.call(this,oEb)}
function Ob(){Lb.call(this,pEb)}
function Wb(){Lb.call(this,qEb)}
function Yb(){Lb.call(this,rEb)}
function $b(){Lb.call(this,sEb)}
function _b(){Lb.call(this,tEb)}
function ac(){Lb.call(this,uEb)}
function nc(){Lb.call(this,vEb)}
function Pc(){Lb.call(this,wEb)}
function Qc(){Lb.call(this,xEb)}
function Rc(){Lb.call(this,yEb)}
function Tc(){Lb.call(this,zEb)}
function Uc(){Lb.call(this,AEb)}
function Xc(){Lb.call(this,BEb)}
function cd(){Lb.call(this,CEb)}
function De(){Lb.call(this,EEb)}
function k8(){this.d=(G8(),D8)}
function Jg(){Jg=mH;!!(nh(),mh)}
function K5(){K5=mH;J5=new Kxb}
function $9(){$9=mH;Z9=new fab}
function gH(){eH==null&&(eH=[])}
function Pe(a){return wI(),a.Vc}
function Re(a){return wI(),a.Vc}
function YL(a){return wI(),a.Vc}
function cM(a){return wI(),a.Vc}
function MY(a,b){return b<=a.ob}
function Ve(a,b){We(a,(wI(),b))}
function YK(a,b){ZK((wI(),a),b)}
function X1(a,b,c){Zjb(a.X,c,b)}
function z1(a,b,c){Yjb(a.X,b,c)}
function h2(a,b,c){Zkb(a.X,b,c)}
function h4(a,b,c){lsb(a.i,b,c)}
function EL(a,b){jL(a.a,b,true)}
function TJ(a,b){a.__listener=b}
function H2(a,b){a.w=new qub(b)}
function I2(a,b){a.A=new qub(b)}
function mr(a,b){return ynb(a,b)}
function rfb(a,b){return a.b[b]}
function sfb(a,b){return a.c[b]}
function mAb(a,b,c){b.gg(a.a[c])}
function ICb(a,b,c){b.gg(jpb(c))}
function Imb(a){a.a=(tmb(),rmb)}
function Wmb(a){rg.call(this,a)}
function $mb(a){rg.call(this,a)}
function bcb(a){pg.call(this,a)}
function bnb(a){anb.call(this,a)}
function fpb(a){anb.call(this,a)}
function _ub(a){eDb(a);this.a=a}
function ki(a){a=Rob(a);return a}
function $Cb(a,b){return sr(a,b)}
function SCb(a,b){xCb(a.b,a.a,b)}
function JI(a,b){wI();uI.Le(a,b)}
function KI(a,b){wI();uI.Me(a,b)}
function UI(a,b){wI();uI.Me(a,b)}
function lQ(a,b){YM(a,b);jQ(a,1)}
function oQ(a,b){aN(a,b);jQ(a,1)}
function QP(a,b){a.j=b;Dh(a.d,b)}
function BL(a,b){jL(a.a,b,false)}
function tL(a){We(this,(wI(),a))}
function Mf(a){We(this,(wI(),a))}
function Rf(a){We(this,(wI(),a))}
function zR(a){!a.b&&(a.b=OI(a))}
function o1(a){return a.T[a.a-1]}
function Umb(a){return Object(a)}
function sob(a){Ynb.call(this,a)}
function Xob(){Ymb.call(this,'')}
function cpb(){Ymb.call(this,'')}
function dpb(){Ymb.call(this,'')}
function OJ(){lq.call(this,null)}
function JQ(){PM();EQ.call(this)}
function Wwb(a){Qvb.call(this,a)}
function $wb(a){Wwb.call(this,a)}
function pxb(a){iwb.call(this,a)}
function wab(){yJ(new Eab(this))}
function kab(){kab=mH;jab=new _n}
function myb(){myb=mH;lyb=oyb()}
function T3(){T3=mH;S3=Y3();Z3()}
function uvb(){uvb=mH;tvb=new wvb}
function vvb(){throw HG(new Kzb)}
function dwb(){throw HG(new mpb)}
function Cwb(){throw HG(new mpb)}
function wp(){this.a=BFb in $wnd}
function onb(a){nnb(a);return a.k}
function pnb(a){nnb(a);return a.i}
function PG(a,b){return KG(a,b)>0}
function RG(a,b){return KG(a,b)<0}
function Nzb(a,b){while(a.Gg(b));}
function ZCb(a,b,c){a.splice(b,c)}
function Ze(a,b,c){gf(a.md(),b,c)}
function g$(a,b,c){a.qc=c;a.pc=b}
function Hb(a,b){ai(b,'role',a.a)}
function kq(a,b){return xq(a.a,b)}
function Fe(){Lb.call(this,'tab')}
function we(){Lb.call(this,'row')}
function Hc(){Lb.call(this,'log')}
function mc(){Lb.call(this,'img')}
function Fk(){Ak.call(this,iFb,3)}
function Vl(){Sl.call(this,iFb,1)}
function _m(){Xm.call(this,iFb,1)}
function yq(){zq.call(this,false)}
function AM(){BM.call(this,false)}
function kJ(){this.a=new lq(null)}
function HK(){this.o=new IO(this)}
function tk(a){(mi(),a).opacity=0}
function Ur(a){return a.l|a.m<<22}
function aY(a,b){return r1(a.a,b)}
function h0(a,b){return f4(a.D,b)}
function i4(a,b){return l4(a.o,b)}
function PH(b,a){return b.test(a)}
function _Y(a,b){a.Gb=b;oeb(a.Hb)}
function Wob(a,b){a.a+=b;return a}
function Zob(a,b){a.a+=b;return a}
function Wzb(a,b){while(a.Jg(b));}
function dT(a,b){!!a.F&&jq(a.F,b)}
function NG(a,b){return KG(a,b)==0}
function SG(a,b){return KG(a,b)<=0}
function sc(a,b){this.b=a;this.c=b}
function Fb(a,b){this.b=a;this.a=b}
function Z8(){this.a=new $8(this)}
function H7(){H7=mH;wI();wj($doc)}
function II(a){wI();vI=a;uI.Ke(a)}
function SI(a){wI();vI=a;uI.Ke(a)}
function Kb(a,b){Qb((ad(),_c),a,b)}
function Ec(a,b){sc.call(this,a,b)}
function kd(a,b){sc.call(this,a,b)}
function Ic(){Lb.call(this,'main')}
function Kc(){Lb.call(this,'math')}
function Lc(){Lb.call(this,'menu')}
function ec(){Lb.call(this,'form')}
function Sc(){Lb.call(this,'note')}
function fc(){Lb.call(this,'grid')}
function oc(){Lb.call(this,'list')}
function Me(){Lb.call(this,'tree')}
function _e(a,b){kf((wI(),a.Vc),b)}
function bf(a,b){JI((wI(),a.Vc),b)}
function Lf(a,b){hi((wI(),a.Vc),b)}
function Nh(a,b){(mi(),li).Pd(a,b)}
function ei(a,b){(mi(),li).de(a,b)}
function fi(a,b){(mi(),li).ee(a,b)}
function Ak(a,b){sc.call(this,a,b)}
function _k(a,b){sc.call(this,a,b)}
function Sl(a,b){sc.call(this,a,b)}
function bm(a,b){sc.call(this,a,b)}
function mm(a,b){sc.call(this,a,b)}
function vm(a,b){sc.call(this,a,b)}
function Jm(a,b){sc.call(this,a,b)}
function Lm(){Jm.call(this,'PX',0)}
function Om(){Jm.call(this,'EX',3)}
function Nm(){Jm.call(this,'EM',2)}
function Pm(){Jm.call(this,'PT',4)}
function Qm(){Jm.call(this,'PC',5)}
function Rm(){Jm.call(this,'IN',6)}
function Sm(){Jm.call(this,'CM',7)}
function Tm(){Jm.call(this,'MM',8)}
function Xm(a,b){sc.call(this,a,b)}
function hn(a,b){sc.call(this,a,b)}
function Wq(a,b){this.b=a;this.a=b}
function kr(a,b){sc.call(this,a,b)}
function xq(a,b){return fsb(a.d,b)}
function Eh(a){return pi((mi(),a))}
function Uh(a){return oi((mi(),a))}
function QI(a){return QJ((wI(),a))}
function $g(a){return !!a.b||!!a.g}
function BP(a){Aq(a.a,a.d,a.c,a.b)}
function PQ(a){hQ(a,false);Kh(a.i)}
function uO(a,b){sc.call(this,a,b)}
function nR(a,b){lR.call(this,a,b)}
function bR(a,b){this.a=a;this.b=b}
function CR(a,b){this.a=a;this.b=b}
function WL(a,b){this.a=a;this.b=b}
function PS(a,b){this.a=a;this.b=b}
function dU(a,b){this.b=a;this.a=b}
function o_(a,b){this.a=a;this.b=b}
function q_(a,b){this.a=a;this.b=b}
function s_(a,b){this.a=a;this.b=b}
function w_(a,b){this.a=a;this.b=b}
function y_(a,b){this.a=a;this.b=b}
function V_(a,b){this.a=a;this.b=b}
function $U(a,b){this.c=b;this.d=a}
function I0(a,b){this.a=a;this.b=b}
function R0(a,b){this.a=a;this.b=b}
function K3(a,b){this.a=a;this.b=b}
function EU(a,b){lR.call(this,a,b)}
function T5(a,b){this.b=a;this.a=b}
function k6(a){this.d=' ';this.a=a}
function w8(a,b){this.b=a;this.a=b}
function H8(a,b){sc.call(this,a,b)}
function i$(a,b){a.Qc=b;pV(a.wc,b)}
function gM(a,b){ok((wI(),a.Vc),b)}
function x0(a,b,c){n1(wT(a.a),b,c)}
function Ybb(a,b,c){Ccb(a).Zf(b,c)}
function _nb(a,b){sg.call(this,a,b)}
function Utb(a,b){this.d=a;this.e=b}
function WBb(a,b){sc.call(this,a,b)}
function LCb(a,b){this.a=a;this.b=b}
function TCb(a,b){this.b=a;this.a=b}
function rgb(a,b){b<0&&(b=0);a.a=b}
function sgb(a,b){b<0&&(b=0);a.d=b}
function Ug(){Eg!=0&&(Eg=0);Ig=-1}
function rxb(){rxb=mH;qxb=new txb}
function psb(a){return a.d.c+a.e.c}
function f4(a,b){return isb(a.i,b)}
function qf(a,b){!!a.Tc&&jq(a.Tc,b)}
function XCb(a,b,c){a.splice(b,0,c)}
function ok(b,a){b.selectedIndex=a}
function di(b,a){b.innerHTML=a||''}
function bi(b,a){b.className=a||''}
function yb(a){$wnd.clearTimeout(a)}
function Tg(a){$wnd.clearTimeout(a)}
function hc(){Lb.call(this,'group')}
function Mb(){Lb.call(this,'alert')}
function Je(){Lb.call(this,'timer')}
function bd(){Lb.call(this,'radio')}
function Mm(){Jm.call(this,'PCT',1)}
function mn(){hn.call(this,'PRE',2)}
function gJ(a){fJ();return jJ(dJ,a)}
function iO(a){If();Mf.call(this,a)}
function rH(){LI();AH();BH();new c4}
function zJ(){if(!oJ){vK();oJ=true}}
function AJ(){if(!tJ){wK();tJ=true}}
function CX(a){HX(a);DX(a);a.v=true}
function jk(a){return (mi(),a).type}
function pk(a){return (mi(),a)[eFb]}
function rk(a){return (mi(),a)[fFb]}
function sk(a){return (mi(),a)[gFb]}
function qk(a){return (mi(),a)[HEb]}
function oK(){oK=mH;ZJ();WJ[WFb]=bK}
function W1(a,b){QY(a.W)||N$(a.W,b)}
function Scb(a,b){sc.call(this,a,b)}
function hcb(a,b){this.a=a;this.b=b}
function abb(a,b){this.a=a;this.b=b}
function edb(a,b){this.a=a;this.b=b}
function udb(a,b){this.a=a;this.b=b}
function ngb(a,b){this.a=a;this.b=b}
function pgb(a,b){this.a=a;this.b=b}
function Djb(a,b){this.a=a;this.b=b}
function Zbb(a,b){this.b=a;this.a=b}
function peb(a,b){this.b=a;this.a=b}
function pmb(a,b){sc.call(this,a,b)}
function hmb(a,b){sc.call(this,a,b)}
function umb(a,b){sc.call(this,a,b)}
function Alb(a,b){sc.call(this,a,b)}
function Ylb(a,b){sc.call(this,a,b)}
function Pxb(a,b){return fsb(a.a,b)}
function syb(a,b){return a.a.get(b)}
function O(a,b){return ls(a)===ls(b)}
function gs(a){return typeof a===BDb}
function hs(a){return typeof a===CDb}
function ks(a){return typeof a===DDb}
function QG(a){return typeof a===CDb}
function ls(a){return a==null?null:a}
function Nob(a,b){return a.substr(b)}
function yP(c,a,b){c.open(a,b,true)}
function Qb(a,b,c){ai(b,a.a,Pb(a,c))}
function blb(a,b,c){a[b.a]=Umb(c.a)}
function clb(a,b,c){a[b.a]=Umb(c.a)}
function n3(a,b,c,d){_kb(a.X,b,c,d)}
function gAb(a,b){Yzb.call(this,a,b)}
function Vb(){Lb.call(this,'banner')}
function Ce(){Lb.call(this,'slider')}
function Ae(){Lb.call(this,'search')}
function Ee(){Lb.call(this,'status')}
function bc(){Lb.call(this,'dialog')}
function dd(){Lb.call(this,'region')}
function Ck(){Ak.call(this,'NONE',0)}
function bl(){_k.call(this,'NONE',0)}
function Xl(){Sl.call(this,'AUTO',3)}
function qm(){mm.call(this,'LEFT',2)}
function xm(){vm.call(this,'CLIP',0)}
function lq(a){mq.call(this,a,false)}
function LM(a,b){MM.call(this,a.a,b)}
function BN(a){$.call(this);this.a=a}
function yO(){uO.call(this,'LEFT',2)}
function qyb(){myb();return new lyb}
function Axb(){this.a=new $wnd.Date}
function xb(a){$wnd.clearInterval(a)}
function cK(a){(mi(),li).Vd(a);dK(a)}
function Jf(a,b){(wI(),a.Vc)[PEb]=!b}
function TI(a,b){wI();a.__listener=b}
function qdb(a,b){wI();a.Vc['src']=b}
function Jcb(a,b,c,d){a[b][c].type=d}
function $0(a,b,c,d){a.a=b;Z0(a,c,d)}
function U$(a,b,c){MW(isb(a.zc,b),c)}
function KK(a,b){EK(a,b,(wI(),a.Vc))}
function lL(a,b){EK(a,b,(wI(),a.Vc))}
function aAb(a,b){Yzb.call(this,a,b)}
function dAb(a,b){Yzb.call(this,a,b)}
function Cob(a,b){return a.indexOf(b)}
function Mzb(a){return a!=null?V(a):0}
function Urb(a){return !a?null:a.Bg()}
function Fh(a){return !!pi((mi(),a))}
function Xbb(a){return a.b.a+'.'+a.a}
function enb(a){cnb();return eDb(a),a}
function wCb(a,b,c){ZBb(b,c);return b}
function $ob(a,b){a.a+=''+b;return a}
function _ob(a,b){a.a+=''+b;return a}
function apb(a,b){a.a+=''+b;return a}
function Z4(a){this.a=$4(a);this.b=a}
function Db(a){this.a=a;wb.call(this)}
function Y0(a){beb(a.e);wM(a.e,null)}
function Nc(){Lb.call(this,'menubar')}
function Ke(){Lb.call(this,'toolbar')}
function Le(){Lb.call(this,'tooltip')}
function Ge(){Lb.call(this,'tablist')}
function Ie(){Lb.call(this,'textbox')}
function pc(){Lb.call(this,'listbox')}
function ic(){Lb.call(this,'heading')}
function Jc(){Lb.call(this,'marquee')}
function Ub(){Lb.call(this,'article')}
function Ph(a){return (mi(),li).Wd(a)}
function Rh(a){return (mi(),li).Xd(a)}
function Vh(a){return (mi(),li)._d(a)}
function Yh(a){return (mi(),li).ae(a)}
function Zh(a){return (mi(),li).fe(a)}
function Qj(a){return (mi(),li).Yd(a)}
function Rj(a){return (mi(),li).Zd(a)}
function ak(a){return (mi(),li).Qd(a)}
function ck(a){return (mi(),li).Rd(a)}
function dk(a){return (mi(),li).Sd(a)}
function ek(a){return (mi(),li).Ud(a)}
function gk(a){return (mi(),li).Td(a)}
function Wj(a){return qi((mi(),li),a)}
function Xj(a){return ri((mi(),li),a)}
function sn(a){return (mi(),a).target}
function vr(a){return wr(a.l,a.m,a.h)}
function zI(a){wI();return uI.Fe(a,0)}
function zL(){zL=mH;yL=(TO(),TO(),RO)}
function If(){If=mH;Hf=(TO(),TO(),SO)}
function dO(a){return uP((wI(),a.Vc))}
function eO(a){return vP((wI(),a.Vc))}
function UO(a){return (mi(),li).be(a)}
function zO(){uO.call(this,'RIGHT',3)}
function rm(){mm.call(this,'RIGHT',3)}
function gm(){bm.call(this,'FIXED',3)}
function Gk(){Ak.call(this,'SOLID',4)}
function tl(){_k.call(this,'FLEX',17)}
function xl(){_k.call(this,'BLOCK',1)}
function Jl(){_k.call(this,'TABLE',7)}
function JS(a){this.a=a;wb.call(this)}
function xS(a){this.a=a;wb.call(this)}
function Mq(a){this.a=a;wb.call(this)}
function FN(a){this.a=a;wb.call(this)}
function DV(a){this.a=a;wb.call(this)}
function E_(a){this.a=a;wb.call(this)}
function I_(a){this.a=a;wb.call(this)}
function E3(a){this.a=a;wb.call(this)}
function M3(a){this.a=a;wb.call(this)}
function H5(a){this.a=a;wb.call(this)}
function L6(a){this.a=a;wb.call(this)}
function N6(a){this.a=a;wb.call(this)}
function P6(a){this.a=a;wb.call(this)}
function k7(a){this.a=a;wb.call(this)}
function m7(a){this.a=a;wb.call(this)}
function o7(a){this.a=a;wb.call(this)}
function P8(a){this.a=a;wb.call(this)}
function $8(a){this.a=a;wb.call(this)}
function q9(a){this.a=a;wb.call(this)}
function J9(a){this.a=a;wb.call(this)}
function ugb(a){this.a=a;$.call(this)}
function dyb(a){this.a=qyb();this.b=a}
function vyb(a){this.a=qyb();this.b=a}
function S1(a){f1(a,a.b,true);TX(a.W)}
function PY(a){return EY(a,a.pc,a.qc)}
function s1(a,b,c){return B3(a.J,b,c)}
function t1(a,b,c){return C3(a.J,b,c)}
function O1(a,b,c){!!a.S&&M0(a.S,b,c)}
function _1(a,b,c){!!a.S&&N0(a.S,b,c)}
function MP(a,b){a.o=b;TP(a);a.g=true}
function Q4(a){return a.a.j&&a.a.b==9}
function Zf(a){a.i=or(qE,zDb,81,0,0,1)}
function dub(a){a.a=or(oE,zDb,1,0,5,1)}
function Xb(){Lb.call(this,'checkbox')}
function Zb(){Lb.call(this,'combobox')}
function dc(){Lb.call(this,'document')}
function gc(){Lb.call(this,'gridcell')}
function qc(){Lb.call(this,'listitem')}
function Oc(){Lb.call(this,'menuitem')}
function Oe(){Lb.call(this,'treeitem')}
function Ne(){Lb.call(this,'treegrid')}
function xe(){Lb.call(this,'rowgroup')}
function He(){Lb.call(this,'tabpanel')}
function Hl(){_k.call(this,'RUN_IN',6)}
function zl(){_k.call(this,'INLINE',2)}
function Ek(){Ak.call(this,'DASHED',2)}
function Dk(){Ak.call(this,'DOTTED',1)}
function om(){mm.call(this,'CENTER',0)}
function dm(){bm.call(this,'STATIC',0)}
function Wl(){Sl.call(this,'SCROLL',2)}
function kn(){hn.call(this,'NORMAL',0)}
function ln(){hn.call(this,'NOWRAP',1)}
function wO(){uO.call(this,'CENTER',0)}
function dh(a,b){a.d=fh(a.d,[b,false])}
function IQ(a,b){PM();ve();Ib(HQ(a),b)}
function ai(c,a,b){c.setAttribute(a,b)}
function RS(a,b,c){VP.call(this,a,b,c)}
function XK(a,b){(wI(),a)['align']=b.a}
function nk(a){return (mi(),a).options}
function ik(a){return (mi(),a).touches}
function RJ(a){if(!PJ){a.He();PJ=true}}
function j2(a){lZ(a.W);nZ(a.W);oZ(a.W)}
function mZ(a){AX(a);F$(a);I$(a);SX(a)}
function JR(a){R6((Wg(),Vg),new NS(a))}
function MR(a){R6((Wg(),Vg),new FS(a))}
function qS(a){R6((Wg(),Vg),new zS(a))}
function RW(a){R6((Wg(),Vg),new hX(a))}
function TX(a){R6((Wg(),Vg),new u_(a))}
function g8(a){R6((Wg(),Vg),new L8(a))}
function C6(a,b){$7((wI(),a.Vc),SIb,b)}
function D0(a,b,c,d){o3(wT(a.a),b,c,d)}
function wqb(a){$pb();xqb.call(this,a)}
function $cb(a){this.a=a;wb.call(this)}
function qeb(a){this.a=a;wb.call(this)}
function Oeb(a){this.a=a;wb.call(this)}
function Qeb(a){this.a=a;wb.call(this)}
function _eb(a){this.a=a;wb.call(this)}
function ggb(a){this.a=a;wb.call(this)}
function zq(a){this.d=new Kxb;this.c=a}
function P4(a){return a.a.j&&a.a.b==10}
function Kub(a){return a.a<a.c.a.length}
function iCb(a,b){return a[a.length]=b}
function nCb(a,b){return a[a.length]=b}
function cob(a,b){return a<b?-1:a>b?1:0}
function QCb(a,b,c){return wCb(a.a,b,c)}
function xCb(a,b,c){NCb(a,QCb(b,a.a,c))}
function KBb(a,b){if(xBb){return}a.b=b}
function teb(){teb=mH;PM();seb=new oub}
function um(){um=mH;sm=new xm;tm=new ym}
function Wm(){Wm=mH;Vm=new Zm;Um=new _m}
function pm(){mm.call(this,'JUSTIFY',1)}
function Zm(){Xm.call(this,'VISIBLE',0)}
function Ul(){Sl.call(this,'VISIBLE',0)}
function cc(){Lb.call(this,'directory')}
function Be(){Lb.call(this,'separator')}
function ye(){Lb.call(this,'rowheader')}
function ze(){Lb.call(this,'scrollbar')}
function xO(){uO.call(this,'JUSTIFY',1)}
function Fxb(a){return a<10?'0'+a:''+a}
function pY(a){return CGb+a.pc+DGb+a.qc}
function HG(a){return a.backingJsObject}
function v1(a,b){return Pxb(a.H,kob(b))}
function y1(a,b){return Pxb(a.I,kob(b))}
function fs(a,b){return a!=null&&ds(a,b)}
function Dh(b,a){return b.appendChild(a)}
function Jh(b,a){return b.removeChild(a)}
function Wh(b,a){return parseInt(b[a])|0}
function wr(a,b,c){return {l:a,m:b,h:c}}
function AI(a){wI();return oi((mi(),a))}
function BI(a){wI();return pi((mi(),a))}
function fk(a){return (mi(),a).keyCode|0}
function yob(a){return Vob(a,0,a.length)}
function jpb(a){return a.backingJsObject}
function SP(a){JP(a);LP(a);KP(a);a.jf()}
function j6(){k6.call(this,(gmb(),emb))}
function rl(){_k.call(this,'INITIAL',16)}
function em(){bm.call(this,'RELATIVE',1)}
function fm(){bm.call(this,'ABSOLUTE',2)}
function ym(){vm.call(this,'ELLIPSIS',1)}
function nn(){hn.call(this,'PRE_LINE',3)}
function on(){hn.call(this,'PRE_WRAP',4)}
function NR(a){hO(a.j,'');hS(a,'');PR(a)}
function _R(a){hO(a.a,a.b);Kf(a.a,false)}
function JP(a){if(a.a){Kh(a.a);a.a=null}}
function KP(a){if(a.e){Kh(a.e);a.e=null}}
function LP(a){if(a.j){Kh(a.j);a.j=null}}
function VV(a){Kh(a.B);UI(a.B,-15736909)}
function hS(a,b){a.b=b;hO(a.a,b);nS(a,b)}
function lS(a){a.v=false;a.u=false;kS(a)}
function SW(a){return TW(a,a.u.length-1)}
function d9(a){return cJb in a?a[cJb]:-1}
function U0(a,b){return jsb(gT(a.a).c,b)}
function OH(c,a,b){return a.replace(c,b)}
function d1(a){return (!a.U||!a.F)&&!a.$}
function e1(a){return (!a.U||!a.G)&&!a.$}
function $lb(a){return !!a&&!a.isEmpty()}
function Gpb(a){xpb();Hpb.call(this,a,0)}
function hnb(a){cnb();return a?true:false}
function MBb(a){if(xBb){return}a.e=false}
function Dob(a,b,c){return a.indexOf(b,c)}
function Fob(a,b){return a.lastIndexOf(b)}
function Eob(a){return Aob(DDb,typeof(a))}
function Pnb(a){return Aob(CDb,typeof(a))}
function Kyb(a,b){if(a.a){Wyb(b);Vyb(b)}}
function YBb(a,b){this.a=a;jvb();this.b=b}
function qg(){Zf(this);_f(this);this.Hd()}
function O8(){this.b=new U8;new P8(this)}
function QK(){QK=mH;OK=new TK;PK=new VK}
function rDb(){rDb=mH;oDb=new P;qDb=new P}
function cDb(a){if(!a){throw HG(new Kzb)}}
function iDb(a){if(!a){throw HG(new Znb)}}
function _Cb(a){if(!a){throw HG(new Xnb)}}
function lk(a){(mi(),a).stopPropagation()}
function mk(a){(mi(),a).options.length=0}
function Xe(a,b){(wI(),a.Vc).style[HEb]=b}
function af(a,b){(wI(),a.Vc).style[IEb]=b}
function CI(a,b,c){wI();uI.Ie(a,HI(b),c)}
function f$(a,b,c){fi(a.xc,b);gi(a.xc,c)}
function Hh(a,b){return (mi(),li).ce(a,b)}
function hk(a){return !!(mi(),a).shiftKey}
function Qe(a){return Wh((wI(),a.Vc),FEb)}
function SM(a){return Wh((wI(),a.Vc),oGb)}
function TM(a){return Wh((wI(),a.Vc),FEb)}
function nDb(a){return a.$H||(a.$H=++mDb)}
function Fr(a){return a.l+a.m*HDb+a.h*GDb}
function fM(a){(wI(),a.Vc).multiple=false}
function NQ(a){(wI(),a.Vc).style[gFb]='1'}
function RQ(a){(wI(),a.Vc).style[gFb]='0'}
function QV(a){(wI(),a.Vc).style[gFb]='2'}
function eW(a){(wI(),a.Vc).style[gFb]='2'}
function _N(a){this.c=a;this.a=!!this.c.T}
function Fl(){_k.call(this,'LIST_ITEM',5)}
function ecb(a,b){dcb.call(this,null,a,b)}
function hdb(a){kab();nab.call(this,a,{})}
function nO(){lO();oO.call(this,Nj($doc))}
function epb(a){Ymb.call(this,(eDb(a),a))}
function iwb(a){Qvb.call(this,a);this.a=a}
function wwb(a){ewb.call(this,a);this.a=a}
function wxb(a,b){b.$modCount=a.$modCount}
function Qxb(a,b){return msb(a.a,b)!=null}
function ycb(a,b,c){a.j[(new mcb(b)).a]=c}
function Oob(a,b,c){return a.substr(b,c-b)}
function rh(a){nh();return parseInt(a)||-1}
function rc(a){return a.b!=null?a.b:''+a.c}
function qM(a){if(vM(a)){return}a.i&&xM(a)}
function A2(a,b){osb(a.o);!!b&&Nrb(a.o,b)}
function AP(c,a,b){c.setRequestHeader(a,b)}
function LR(a,b){R6((Wg(),Vg),new PS(a,b))}
function nU(a,b){b?Mh(a.g,hHb):_h(a.g,hHb)}
function mq(a,b){this.a=new Bq(b);this.b=a}
function Sn(){Sn=mH;Rn=new ao(xFb,new Tn)}
function Fo(){Fo=mH;Eo=new ao(dFb,new Go)}
function $o(){$o=mH;Zo=new ao(yFb,new _o)}
function fp(){fp=mH;ep=new ao(zFb,new gp)}
function Fp(){Fp=mH;Ep=new ao(CFb,new Gp)}
function b4(){b4=mH;$3=new nzb;a4=new oub}
function c4(){b4();new Kxb;new Kxb;new Kxb}
function Lab(a){Mab(a)||Nab(a,kJb,new Qab)}
function xZ(a){b2(a.a,a.db,a.zb,a.bb,a.xb)}
function xR(a){if(a.b){BP(a.b.a);a.b=null}}
function Xyb(a){Yyb.call(this,a,null,null)}
function vCb(a,b){fCb.call(this,a);this.a=b}
function ab(a){this.j=new gb(this);this.s=a}
function aob(a,b){return fs(b,94)&&b.a==a.a}
function KY(a,b,c){return b<=a.ob&&c<=a.Qc}
function t5(a,b){return a.vMeasuredSize||b}
function Oj(b,a){return b.createTextNode(a)}
function Uj(b,a){return b.getElementById(a)}
function IN(b,a){HN();b.__gwt_resolve=JN(a)}
function nnb(a){if(a.k!=null){return}Cnb(a)}
function sM(a){if(vM(a)){return}!a.i&&xM(a)}
function TR(a){return !a.v||a.v&&!a.u&&!a.f}
function j5(b,a){return b.hasOwnProperty(a)}
function d3(a,b){zW(a.W.Cc);!!b&&oX(a.W,b)}
function d2(a,b,c){gkb(a.X,c,b);ub(a.t,200)}
function k2(a){a.d?(a.d=false):pZ(a.W,true)}
function QH(a){apb(a.a,cI('Fill'));return a}
function Bxb(a){this.a=new $wnd.Date(aH(a))}
function L9(){this.b=[];this.c={};this.a={}}
function hCb(a,b){fCb.call(this,a);this.a=b}
function mCb(a,b){fCb.call(this,a);this.a=b}
function LQ(){PM();FQ.call(this,true,false)}
function pl(){_k.call(this,'TABLE_ROW',15)}
function ll(){_k.call(this,'TABLE_CELL',13)}
function sL(){tL.call(this,(wI(),wj($doc)))}
function p3(a,b){R6((Wg(),Vg),new K3(a,b))}
function yCb(a,b){return a.a.Gg(new BCb(b))}
function DCb(a,b){return a.a.Gg(new GCb(b))}
function yfb(a,b){return b==0?a.If():a.Hf()}
function zfb(a,b){return b==1?a.Jf():a.Kf()}
function n6(a){return es(a)?a.Oe():new p6(a)}
function Cb(a,b){return $wnd.setTimeout(a,b)}
function js(a,b){return a&&b&&a instanceof b}
function Kg(a,b,c){return a.apply(b,c);var d}
function fnb(a,b){cnb();return a==b?0:a?1:-1}
function DBb(a,b){if(xBb){return}fub(a.a,b)}
function eg(a,b){a.backingJsObject=b;bg(a,b)}
function bh(a,b){a.b=fh(a.b,[b,false]);_g(a)}
function iM(a,b){return oM(a,b,a.b.a.length)}
function NI(a){return wI(),QJ((mi(),a).type)}
function ZN(){QN.call(this,(PN(),$doc.body))}
function vl(){_k.call(this,'INLINE_FLEX',18)}
function Bl(){_k.call(this,'INLINE_BLOCK',3)}
function Dl(){_k.call(this,'INLINE_TABLE',4)}
function AW(a){return String.fromCharCode(a)}
function dZ(a){return Aob(a,zGb)||Aob(a,AGb)}
function sV(a){if(!a.N){a.N=true;vb(a.M,50)}}
function uV(a){a.k=0;a.n=0;tb(a.M);a.N=false}
function gT(a){!a.L&&(a.L=a.uf());return a.L}
function wT(a){!a.C&&(a.C=a.Bf());return a.C}
function Ntb(a,b){var c;c=a.e;a.e=b;return c}
function jyb(a,b){var c;c=a[jLb];c.call(a,b)}
function kyb(a,b){var c;c=a[jLb];c.call(a,b)}
function Kcb(a,b,c,d,e){a[b][c].setter(d,e)}
function Gob(a,b,c){return a.lastIndexOf(b,c)}
function Bb(a,b){return $wnd.setInterval(a,b)}
function Gh(c,a,b){return c.insertBefore(a,b)}
function Dtb(a,b){return a.a.containsValue(b)}
function Onb(a,b){return eDb(a),ls(a)===ls(b)}
function Aob(a,b){return eDb(a),ls(a)===ls(b)}
function Wfb(a){return !a.C&&(a.C=vT(a)),a.C}
function ni(a,b){return a.getAttribute(b)||''}
function qn(a){return Hi((mi(),a).clientX||0)}
function rn(a){return Hi((mi(),a).clientY||0)}
function bk(a){return (mi(),a).changedTouches}
function Hyb(a){osb(a.c);a.b.b=a.b;a.b.a=a.b}
function cab(){$9();this.c=new Myb;this.a=Z9}
function fJ(){fJ=mH;new mJ;dJ=new kJ;eJ=hJ()}
function En(){En=mH;Dn=new ao('blur',new Fn)}
function Ln(){Ln=mH;Kn=new ao('click',new Mn)}
function co(){co=mH;bo=new ao('focus',new eo)}
function yo(){yo=mH;xo=new ao('keyup',new zo)}
function iq(a,b,c){return new Cq(pq(a.a,b,c))}
function $p(a){var b;if(Xp){b=new Yp;jq(a,b)}}
function Up(a){var b;if(Rp){b=new Sp;a.td(b)}}
function A$(a,b){D$(a,a.db,a.zb,1,a.ob,a.d,b)}
function sU(a,b){b!=null?oQ(a.d,b):oQ(a.d,'')}
function rU(a,b){b!=null?lQ(a.d,b):lQ(a.d,'')}
function Wdb(a,b){Mh(b,lKb);a.b&&Oxb(a.a.p,b)}
function nab(a,b){lab(this);this.d=a;this.a=b}
function O_(a,b,c){this.a=a;this.b=b;this.c=c}
function I3(a,b,c){this.a=a;this.b=b;this.c=c}
function O3(a,b,c){this.a=a;this.c=b;this.b=c}
function Klb(a,b){a.b=b;a.c=0;a.d=a.b+'.'+a.c}
function pQ(a,b){(wI(),a.Vc).style[gFb]=b+''}
function ZK(a,b){a.style['verticalAlign']=b.a}
function DI(a,b){wI();return (mi(),li).ce(a,b)}
function LBb(a,b){if(xBb){return}!!b&&(a.d=b)}
function aDb(a,b){if(!a){throw HG(new Ynb(b))}}
function hO(a,b){(wI(),a.Vc)[JFb]=b!=null?b:''}
function MV(a,b,c,d,e){a.i=b;a.f=c;a.g=d;a.e=e}
function $V(a,b,c,d,e){a.t=b;a.r=c;a.s=d;a.q=e}
function u$(a){a.X=0;a.Y=0;tb(a.kc);a.lc=false}
function Gfb(a){return !a.e&&l5(a.c)&&l5(a.d)}
function kb(a){$wnd.cancelAnimationFrame(a.id)}
function eN(a){dN.call(this);this.C=a;this.D=a}
function q4(){Wf.call(this);this.a=Dg()-this.b}
function GL(a){FL.call(this);jL(this.a,a,true)}
function oL(){HK.call(this);Ve(this,xj($doc))}
function nl(){_k.call(this,'TABLE_COLUMN',14)}
function Ll(){_k.call(this,'TABLE_CAPTION',8)}
function Cmb(a,b,c){sc.call(this,a,b);this.a=c}
function Cyb(a,b,c){this.a=a;this.b=b;this.c=c}
function Hjb(a,b,c){this.a=a;this.b=b;this.c=c}
function tzb(a,b,c){this.d=a;this.b=c;this.a=b}
function rAb(a){this.b=(eDb(a),a);this.a=16464}
function beb(a){(TO(),TO(),RO).cf((wI(),a.Vc))}
function c_(a,b){D$(a,1,a.Qc,a.bb,a.xb,a.Oc,b)}
function XG(a,b){return LG(Pr(QG(a)?_G(a):a,b))}
function YG(a,b){return LG(Qr(QG(a)?_G(a):a,b))}
function ZG(a,b){return LG(Rr(QG(a)?_G(a):a,b))}
function YX(a,b,c){return isb(a.e,CGb+b+DGb+c)}
function Ecb(a,b,c,d){return a[b][c].getter(d)}
function qq(a,b,c,d){var e;e=tq(a,b,c);e.add(d)}
function YCb(a,b,c){WCb(c,0,a,b,c.length,false)}
function fub(a,b){a.a[a.a.length]=b;return true}
function kfb(a){!a.a&&(a.a=new hfb);return a.a}
function oq(a,b){!a.a&&(a.a=new oub);fub(a.a,b)}
function eq(a){var b;if(bq){b=new cq;jq(a.a,b)}}
function q$(a){if(!a.lc){a.lc=true;vb(a.kc,50)}}
function Rmb(a){if(a==null){return 0}return +a}
function dnb(a){cnb();return Aob(BDb,typeof(a))}
function bH(a){if(QG(a)){return a|0}return Ur(a)}
function $Y(a){!a.o&&a.k!=-1&&a.n!=-1&&oeb(a.p)}
function g4(a){return null.Ng()+'themes/'+a.n.a}
function zb(a,b){return vDb(function(){a.gd(b)})}
function Jpb(a,b){this.e=b;Dpb(this,(eDb(a),a))}
function ncb(a,b){this.a=a;this.b=ocb(this.a,b)}
function Yyb(a,b,c){this.c=a;Utb.call(this,b,c)}
function wcb(a,b,c,d){Jcb(a.e,(nnb(b),b.k),c,d)}
function mob(){mob=mH;lob=or(jE,zDb,94,256,0,1)}
function Ezb(){Ezb=mH;Czb=new Fzb;Dzb=new Hzb}
function ko(){ko=mH;jo=new ao('keydown',new lo)}
function ro(){ro=mH;qo=new ao('keypress',new so)}
function qp(){qp=mH;pp=new ao('touchend',new rp)}
function rb(){this.a=new oub;this.b=new Db(this)}
function xP(a){a.onreadystatechange=function(){}}
function uX(a,b){return !!a.tb&&a.tb.contains(b)}
function R5(a,b){return a[0]!==b[0]||a[2]!==b[2]}
function S5(a,b){return a[1]!==b[1]||a[3]!==b[3]}
function j1(a,b){MU(a.R);NR(a.v);i1(a);zX(a.W,b)}
function bZ(a){oeb(a.jc);WY(a);S$(a);lZ(a);oZ(a)}
function PR(a){a.k=-1;a.n=-1;a.o=-1;a.p=-1;OR(a)}
function NZ(a){JZ(a,a.wc.e,a.wc.f,a.wc.K,a.wc.L)}
function J4(a){if(!a.a.j){return -1}return a.a.b}
function K4(a){if(!a.a.o){return -1}return a.a.b}
function M4(a){if(!a.a.s){return -1}return a.a.a}
function izb(a,b){jzb(a,b,a.c.b,a.c);return true}
function Wyb(a){a.a.b=a.b;a.b.a=a.a;a.a=a.b=null}
function mcb(a){ncb.call(this,(nnb(a),a.k),null)}
function jl(){_k.call(this,'TABLE_ROW_GROUP',12)}
function _lb(a){return a.jb!=null&&zob(a.jb,'%')}
function amb(a){return a.nb!=null&&zob(a.nb,'%')}
function wfb(a){return pnb(T(a))+' ('+a.vf()+')'}
function uj(a){return (mi(),a).createElement('a')}
function Aj(a){return (mi(),a).createElement(vEb)}
function Cj(a){return (mi(),a).createElement(zEb)}
function qr(a){return Array.isArray(a)&&a.Mg===qH}
function Th(b,a){return b.getElementsByTagName(a)}
function cH(a){if(QG(a)){return ''+a}return Vr(a)}
function iub(a,b){dDb(b,a.a.length);return a.a[b]}
function Xub(a,b){bDb(b,a.length);Vub(a,0,b,null)}
function ueb(a,b){!a.d&&(a.d=new oub);fub(a.d,b)}
function yeb(a,b){V3(b).indexOf(FGb)!=-1&&web(a)}
function Uq(a,b){Pq();Vq.call(this,!a?null:a.a,b)}
function IR(a){var b;a.c=(b=fO(a.j),b==null?'':b)}
function uZ(a,b){var c;c=nsb(a.zc,b);!!c&&qZ(a,c)}
function vnb(a,b){var c;c=snb(a,b);c.f=2;return c}
function B$(a,b){D$(a,a.db,a.zb,a.bb,a.xb,a.ic,b)}
function tX(a,b){return !!a.r&&a.r.containsKey(b)}
function yab(a,b){this.a=a;this.b=b;wb.call(this)}
function Qlb(a,b){this.a=a;this.b=b;this.c='poll'}
function lU(){this.qb=new Kxb;this.gb=(gmb(),emb)}
function Mo(){Mo=mH;Lo=new ao('mousedown',new No)}
function To(){To=mH;So=new ao('mousemove',new Uo)}
function yp(){yp=mH;xp=new ao('touchmove',new zp)}
function mL(a){try{FK(a)}finally{Ih((wI(),a.Vc))}}
function RN(a){PN();try{a.xd()}finally{Qxb(ON,a)}}
function N8(a){S8(a.b);T8(a.b,a.a);null.Ng().Ng()}
function pBb(a,b){lsb(a.a,(ABb(),xBb)?null:b.c,b)}
function sxb(a,b){return eDb(a),gnb(a,(eDb(b),b))}
function bmb(a){return a.jb==null||a.jb.length==0}
function cmb(a){return a.nb==null||a.nb.length==0}
function es(a){return !Array.isArray(a)&&a.Mg===qH}
function Jj(a){return (mi(),a).createElement('td')}
function Kj(a){return (mi(),a).createElement('tr')}
function KM(a){Ze(a,df((wI(),a.Vc))+'-'+lGb,false)}
function uT(a){Y7(Pe(a.Ef()),true);!!a.q&&tb(a.q)}
function Efb(a){if(!l5(a.c)){return}Ofb(a);Jfb(a)}
function sH(a){if(a.b){return a.b}return KAb(),BAb}
function Pg(){Jg();if(Fg){return}Fg=true;Qg(false)}
function SL(a){PL();RL.call(this,(hI(),new dI(a)))}
function MH(a){KH.call(this,new JH(null));this.a=a}
function dl(){_k.call(this,'TABLE_COLUMN_GROUP',9)}
function IO(a){this.b=a;this.a=or(Jx,zDb,13,4,0,1)}
function n2(a,b,c,d,e,f,g,h){WU(a.R,b,c,d,e,f,g,h)}
function vU(a,b,c){a.j=c;a.c=b;mQ(a.d,b);iU(a.e,b)}
function eub(a,b,c){gDb(b,a.a.length);XCb(a.a,b,c)}
function u1(a,b){return a.N.length>=b?a.N[b-1]:a.s}
function HY(a,b,c){return c>a.Qc&&c<=a.zb&&b<=a.ob}
function LY(a,b,c){return b>a.ob&&b<=a.xb&&c<=a.Qc}
function msb(a,b){return ks(b)?nsb(a,b):cyb(a.d,b)}
function ryb(a,b){return !(a.a.get(b)===undefined)}
function NY(a){return !Aob(($k(),GEb),pk(a.style))}
function oeb(a){!a.c&&(a.c=new qeb(a));ub(a.c,a.b)}
function fh(a,b){!a&&(a=[]);a[a.length]=b;return a}
function FG(){if(AG==2){return new fP}return new mP}
function EG(){if(AG==2){return new cP}return new _O}
function DG(){if(AG==2){return new xK}return new zK}
function CG(){if(AG==2){return new tK}return new qK}
function BG(){if(AG==2){return new rj}return new Zi}
function U4(){F4();return $wnd.navigator.userAgent}
function Dj(a){return (mi(),a).createElement('pre')}
function wj(a){return (mi(),a).createElement('div')}
function xj(a){return (mi(),a).createElement('div')}
function zj(a){return (mi(),a).createElement('img')}
function Ir(a,b){return wr(a.l&b.l,a.m&b.m,a.h&b.h)}
function Or(a,b){return wr(a.l|b.l,a.m|b.m,a.h|b.h)}
function Wr(a,b){return wr(a.l^b.l,a.m^b.m,a.h^b.h)}
function DH(a){a.a=QBb('');MBb(a.a);FH(a.a);EH(a.a)}
function pg(a){Zf(this);this.f=a;_f(this);this.Hd()}
function qub(a){dub(this);YCb(this.a,0,a.toArray())}
function Yzb(a,b){this.d=a;this.c=(b&64)!=0?b|PDb:b}
function fDb(a,b){if(a==null){throw HG(new qob(b))}}
function uM(a){if(vM(a)){return}a.i?undefined:yM(a)}
function rM(a){if(vM(a)){return}a.i?yM(a):undefined}
function GI(a){wI();!!vI&&a==vI&&(vI=null);uI.Je(a)}
function RI(a){wI();!!vI&&a==vI&&(vI=null);uI.Je(a)}
function nZ(a){a.k!=-1&&a.n!=-1&&a.j!=null&&SQ(a.q)}
function Hab(a){var b;a.d=2;return b=a.a,a.a=null,b}
function W4(a,b){var c,d;d=Y4(a,b);c=_4(d);return c}
function b2(a,b,c,d,e){bkb(a.X,b,d,c,e);ub(a.t,200)}
function Jjb(a,b){Mjb(a.a,rr(mr(oE,1),zDb,1,5,[b]))}
function Kjb(a,b){Mjb(a.b,rr(mr(oE,1),zDb,1,5,[b]))}
function Ljb(a,b){Mjb(a.c,rr(mr(oE,1),zDb,1,5,[b]))}
function _jb(a,b){Mjb(a.B,rr(mr(oE,1),zDb,1,5,[b]))}
function Xkb(a,b){Mjb(a.P,rr(mr(oE,1),zDb,1,5,[b]))}
function pb(a,b){mub(a.a,b);a.a.a.length==0&&tb(a.b)}
function Mub(a){iDb(a.b!=-1);lub(a.c,a.a=a.b);a.b=-1}
function Zub(a){return new vCb(null,Yub(a,a.length))}
function Xh(b,a){return b[a]==null?null:String(b[a])}
function Gj(a){return (mi(),a).createElement('span')}
function Sh(a){return (mi(),a).getAttribute(SEb)||''}
function Se(a){return (wI(),a.Vc).style.display!=GEb}
function Nr(a){return wr(~a.l&MFb,~a.m&MFb,~a.h&IDb)}
function nob(a,b){return KG(a,b)<0?-1:KG(a,b)>0?1:0}
function cS(a,b){b.length==0?hO(a.j,b):hO(a.j,'='+b)}
function YM(a,b){a.F=b;WM(a);b.length==0&&(a.F=null)}
function aN(a,b){a.G=b;WM(a);b.length==0&&(a.G=null)}
function LW(a,b){(wI(),a.Vc).style[IEb]=b+(Im(),qGb)}
function lT(a,b){if(a.H==b){return}a.H=b;jvb();uvb()}
function yJ(a){uJ();zJ();return wJ((EJ(),EJ(),DJ),a)}
function b1(a,b,c,d){var e;e=new NW(c,d);nX(a.W,b,e)}
function hpb(){hpb=mH;gpb=new KH(null);new KH(null)}
function PN(){PN=mH;MN=new VN;NN=new Kxb;ON=new Rxb}
function TO(){TO=mH;RO=EG();SO=fs(RO,158)?new VO:RO}
function X9(){X9=mH;W9=QBb('spreadsheet RpcProxy')}
function _9(a){a.a=Z9;if(!a.b){return}null.Ng().Ng()}
function jdb(a,b){U5(b,Pe(Wfb(a.c)));fT(a.a,MD).Ng()}
function F5(a,b){if(!z5(a,b)){Qxb(a.f,b);D5(b,null)}}
function w1(a,b){return !!a.w&&jub(a.w,kob(b),0)!=-1}
function x1(a,b){return !!a.A&&jub(a.A,kob(b),0)!=-1}
function fsb(a,b){return ks(b)?jsb(a,b):!!ayb(a.d,b)}
function Yub(a,b){return Xzb(b,a.length),new nAb(a,b)}
function VCb(a,b){var c;c=a.slice(0,b);return sr(c,a)}
function Sxb(a){this.a=new Lxb(a.size());urb(this,a)}
function osb(a){a.d=new dyb(a);a.e=new vyb(a);xxb(a)}
function xeb(a){if(!a.a){a.a=new Oeb(a);ub(a.a,a.b)}}
function N4(a){return a.a.t==5&&(a.a.u==3||a.a.u==4)}
function wJ(a,b){return iq((!pJ&&(pJ=new OJ),pJ),a,b)}
function Bj(a){return (mi(),li).Od(a,dFb,false,false)}
function Lj(a){return (mi(),a).createElement('table')}
function Hj(a){return (mi(),a).createElement('style')}
function Ij(a){return (mi(),a).createElement('tbody')}
function VM(a){return !Aob(sFb,rk((wI(),a.Vc).style))}
function W0(a){!Aob(sFb,rk((wI(),a.Vc).style))&&qQ(a)}
function IW(a,b){(wI(),a.Vc).style[HEb]=b+(Im(),'pt')}
function m$(a,b,c){var d,e;d=b+10;e=c-25;nQ(a.Vb,d,e)}
function Oxb(a,b){var c;c=ksb(a.a,b,a);return c==null}
function snb(a,b){var c;c=new qnb;c.g=a;c.d=b;return c}
function tnb(a,b,c){var d;d=snb(a,b);Gnb(c,d);return d}
function elb(a){var b;b=[];Jzb(a,new flb(b));return b}
function eDb(a){if(a==null){throw HG(new oob)}return a}
function cL(a){if(a.bb){return a.bb.ud()}return false}
function Rg(a){$wnd.setTimeout(function(){throw a},0)}
function yj(a){return (mi(),a).createElement('iframe')}
function Ej(a){return (mi(),a).createElement('script')}
function Fj(a){return (mi(),a).createElement('select')}
function vj(a){return (mi(),a).createElement('canvas')}
function A1(a){a.D?j1(a,false):(a.D=true);C1(a,a.a-1)}
function kS(a){a.f=false;a.e=null;a.q=-1;a.s=-1;PR(a)}
function wX(a){var b;b=qX(a);LX(a,new oub,a.bb,a.xb,b)}
function Qdb(a,b){a.a.e=a.c+(a.b-a.c)*b;Kdb(a.a,a.a.e)}
function Yob(a,b){a.a+=String.fromCharCode(b);return a}
function tqb(a,b,c){$pb();this.e=a;this.d=b;this.a=c}
function EQ(){PM();dN.call(this);eQ(this);pQ(this,aQ)}
function fl(){_k.call(this,'TABLE_HEADER_GROUP',10)}
function hl(){_k.call(this,'TABLE_FOOTER_GROUP',11)}
function aM(a,b){_L(a,b);return bM(nk((wI(),a.Vc))[b])}
function vJ(a){uJ();zJ();return wJ(Rp?Rp:(Rp=new _n),a)}
function jJ(a,b){return iq(a.a,(!bq&&(bq=new _n),bq),b)}
function A6(a,b){return +(Math.round(a+'e+'+b)+'e-'+b)}
function Lzb(a,b){return ls(a)===ls(b)||a!=null&&R(a,b)}
function q1(a,b){return b>0&&a.g.length>=b?a.g[b-1]:a.r}
function QY(a){return !!a.T&&jsb(a.T,CGb+a.pc+DGb+a.qc)}
function f5(b,a){return Object.hasOwnProperty.call(b,a)}
function dCb(a){if(!a.b){eCb(a);a.c=true}else{dCb(a.b)}}
function iT(a){if(!a.yf().ob){return false}return true}
function QN(a){HK.call(this);We(this,(wI(),a));rf(this)}
function AL(a){We(this,(wI(),a));this.a=new kL(this.Vc)}
function nzb(){this.a=new Bzb;this.c=new Bzb;mzb(this)}
function ezb(a){this.c=a;this.b=a.a.b.a;wxb(a.a.c,this)}
function hAb(a,b){eDb(b);while(a.c<a.d){mAb(a,b,a.c++)}}
function hsb(a,b){return ks(b)?isb(a,b):Urb(ayb(a.d,b))}
function Sob(a){return String.fromCharCode.apply(null,a)}
function Mj(a){return (mi(),a).createElement('textarea')}
function Kf(a,b){b?Hf.cf((wI(),a.Vc)):Hf.af((wI(),a.Vc))}
function wnb(a,b){var c;c=snb('',a);c.j=b;c.f=1;return c}
function xob(a,b){lDb(b,a.length);return a.charCodeAt(b)}
function UM(a){if(!a.R){return}AN(a.Q,false,false);Up(a)}
function wm(){um();return rr(mr(Yu,1),zDb,101,0,[sm,tm])}
function Ym(){Wm();return rr(mr(jv,1),zDb,102,0,[Vm,Um])}
function A0(a,b,c,d,e,f,g,h){n2(wT(a.a),b,c,d,e,f,g,h)}
function o2(a,b,c,d,e,f,g,h,i){XU(a.R,b,c,d,e,f,g,h,i)}
function vcb(a,b,c,d){a.d[Xbb(new Zbb(new mcb(b),c))]=d}
function xcb(a,b,c,d){a.i[Xbb(new Zbb(new mcb(b),c))]=d}
function FP(a,b,c,d){this.a=a;this.d=b;this.c=c;this.b=d}
function ZP(a,b,c,d){this.d=a;this.a=b;this.c=c;this.b=d}
function l6(a,b,c,d){this.d=a;this.a=b;this.c=c;this.b=d}
function k_(a,b,c,d){this.a=a;this.d=b;this.b=c;this.c=d}
function m_(a,b,c,d){this.a=a;this.d=b;this.b=c;this.c=d}
function Kmb(a,b,c){Imb(this);this.c=a;this.b=b;this.a=c}
function Wab(a){this.a=new oub;this.c='__eager';this.b=a}
function vH(){tH(this,new IH(true));uH(this,(KAb(),BAb))}
function E6(){nL.call(this);(wI(),this.Vc).className=SIb}
function nAb(a,b){this.c=0;this.d=b;this.b=17488;this.a=a}
function fCb(a){if(!a){this.b=null;new oub}else{this.b=a}}
function rCb(a,b){eCb(a);return new vCb(a,new JCb(b,a.a))}
function sCb(a,b){eCb(a);return new hCb(a,new zCb(b,a.a))}
function tCb(a,b){eCb(a);return new mCb(a,new ECb(b,a.a))}
function Ujb(a,b){Mjb(a.p,rr(mr(oE,1),zDb,1,5,[kob(b)]))}
function $jb(a,b){Mjb(a.A,rr(mr(oE,1),zDb,1,5,[kob(b)]))}
function akb(a,b){Mjb(a.D,rr(mr(oE,1),zDb,1,5,[kob(b)]))}
function dkb(a,b){Mjb(a.J,rr(mr(oE,1),zDb,1,5,[kob(b)]))}
function pkb(a,b){Mjb(a.O,rr(mr(oE,1),zDb,1,5,[elb(b)]))}
function Ib(a,b){Qb((ad(),Zc),a,rr(mr(uE,1),RDb,2,6,[b]))}
function ksb(a,b,c){return ks(b)?lsb(a,b,c):byb(a.d,b,c)}
function SY(a,b){return b==a.c||b==a.Lc||b==a.Nc||b==a.xc}
function kqb(a){var b;b=a.a[0];return a.e>0||b==ODb?b:-b}
function kdb(a){if(a.a==null){return null}return Iob(a.a)}
function T0(a,b){isb(gT(a.a).c,b);jvb();uvb();return null}
function CP(a,b,c){this.a=a;this.d=b;this.c=null;this.b=c}
function DP(a,b,c){this.a=a;this.d=b;this.c=null;this.b=c}
function igb(a,b,c,d){this.a=a;this.b=b;this.c=c;this.d=d}
function tob(a,b,c){this.a=ADb;this.d=a;this.b=b;this.c=c}
function nsb(a,b){return b==null?cyb(a.d,null):uyb(a.e,b)}
function nJ(a){return $wnd.decodeURI(a.replace('%23','#'))}
function xH(){tH(this,new IH(false));uH(this,(KAb(),BAb))}
function EH(a){var b,c;b=new vH;DBb(a,b);c=new xH;DBb(a,c)}
function eK(a){var b;b=(mi(),li).Sd(a);b[eGb]=a.type;dK(a)}
function Kh(a){var b;b=pi((mi(),a));!!b&&b.removeChild(a)}
function L7(a){H7();var b,c;b=U7(a);c=V7(a);return K7(b,c)}
function nh(){nh=mH;var a,b;b=!th();a=new Bh;mh=b?new uh:a}
function jvb(){jvb=mH;gvb=new nvb;hvb=new Evb;ivb=new Mvb}
function uDb(){if(pDb==256){oDb=qDb;qDb=new P;pDb=0}++pDb}
function Zdb(){this.b=S4((F4(),!E4&&(E4=new T4),F4(),E4))}
function Kq(a){if(!a.d){return}Iq(a);a.a.ze(a,new ar(a.b))}
function O4(a){if(a.a.b==8){return a.a.c>=0}return a.a.b>8}
function Qmb(a,b){if(a==null){return b==null}return R(a,b)}
function phb(a,b,c){h4(a.e.D,c,ni((mi(),b),'resource-'+c))}
function Jb(a,b){Qb((ad(),$c),a,rr(mr(at,1),zDb,100,0,[b]))}
function Mc(a,b){Qb((ad(),Yc),a,rr(mr(Ws,1),zDb,190,0,[b]))}
function Gc(){Dc();return rr(mr(at,1),zDb,100,0,[Bc,Cc,Ac])}
function JG(a,b){return LG(Ir(QG(a)?_G(a):a,QG(b)?_G(b):b))}
function WG(a,b){return LG(Or(QG(a)?_G(a):a,QG(b)?_G(b):b))}
function dH(a,b){return LG(Wr(QG(a)?_G(a):a,QG(b)?_G(b):b))}
function lr(){jr();return rr(mr(iw,1),zDb,117,0,[ir,hr,gr])}
function KQ(){PM();eN.call(this,true);eQ(this);pQ(this,aQ)}
function iJ(){fJ();var a;a=hJ();if(!Aob(a,eJ)){eJ=a;eq(dJ)}}
function SN(){PN();try{SK(ON,MN)}finally{osb(ON.a);osb(NN)}}
function kR(a,b){if(a.b){a.sf(0);a.f||a.qf(b)}else{a.sf(b)}}
function DQ(a){if(a.w){t6(a.w);return a.v}else{return null}}
function V4(a,b){var c,d;d=Y4(a,b);c=parseFloat(d);return c}
function h5(c,a){for(var b=0;b<a.length;b++){c[a[b]]=true}}
function mzb(a){a.a.a=a.c;a.c.b=a.a;a.a.b=a.c.a=null;a.b=0}
function _ab(a){Xab(a);Pab((!Iab&&(Iab=new Vab),Iab),a.a.c)}
function Gab(a,b,c){a.d=1;!!b&&fub(a.a,b);_ab(new abb(a,c))}
function ucb(a,b,c){a.d[Xbb(new Zbb(new mcb(b),'!new'))]=c}
function Ndb(a,b){ydb();var c;c=new Zdb;Xdb(c,a,b);return c}
function qAb(a){if(!a.d){a.d=new Nub(a.b);a.c=a.b.a.length}}
function EBb(a,b){if(!vBb){return}JBb(a,(KAb(),DAb),b,null)}
function HBb(a,b){if(!wBb){return}JBb(a,(KAb(),GAb),b,null)}
function NBb(a,b){if(!yBb){return}JBb(a,(KAb(),IAb),b,null)}
function OBb(a,b){if(!zBb){return}JBb(a,(KAb(),JAb),b,null)}
function jsb(a,b){return b==null?!!ayb(a.d,null):ryb(a.e,b)}
function mvb(a){jvb();return fs(a,198)?new pxb(a):new iwb(a)}
function Qh(a){return (mi(),li).Wd(a)+((a.offsetWidth||0)|0)}
function y0(a,b,c,d,e,f,g,h,i){o2(wT(a.a),b,c,d,e,f,g,h,i)}
function Aq(a,b,c,d){a.b>0?oq(a,new FP(a,b,c,d)):sq(a,b,c,d)}
function wP(b,c,d){try{b.setSelectionRange(c,c+d)}catch(a){}}
function Rdb(a,b,c){this.a=a;this.c=b;this.b=c;$.call(this)}
function iS(b,c,d){try{b.setSelectionRange(c,c+d)}catch(a){}}
function JY(a,b,c){return b>=a.bb&&b<=a.xb&&c>=a.db&&c<=a.zb}
function _Z(a,b){y$(a,VX(a),b);P$(a,b);a.tb=fZ(b,a.tb);z$(a)}
function LK(a,b){var c;c=GK(a,b);c&&MK((wI(),b.Vc));return c}
function wgb(a,b){var c;c=a.eg();Object.assign(c,b);return c}
function fg(a,b){var c;c=onb(a.Kg);return b==null?c:c+': '+b}
function xxb(a){var b,c;c=a;b=c.$modCount|0;c.$modCount=b+1}
function Zwb(a,b){var c;for(c=0;c<b;++c){a[c]=new ixb(a[c])}}
function Zkb(a,b,c){Mjb(a.R,rr(mr(oE,1),zDb,1,5,[kob(b),c]))}
function uR(a){a.a.C&&Mjb(a.a.a.X.n,rr(mr(oE,1),zDb,1,5,[]))}
function vmb(){tmb();return rr(mr(JD,1),zDb,153,0,[rmb,smb])}
function ayb(a,b){return $xb(a,b,_xb(a,b==null?0:a.b.sg(b)))}
function Orb(a,b){return b===a?'(this Map)':b==null?NDb:pH(b)}
function ms(a){return Math.max(Math.min(a,EDb),-2147483648)|0}
function md(){jd();return rr(mr(tt,1),zDb,89,0,[ed,gd,hd,fd])}
function pf(a,b,c){return iq(!a.Tc?(a.Tc=new lq(a)):a.Tc,c,b)}
function dcb(a,b,c){this.b=b;this.c=mvb(new _ub(c));this.a=a}
function l8(a){$wnd.vaadinPush.atmosphere.unsubscribeUrl(a)}
function Ih(a){while(a.lastChild){a.removeChild(a.lastChild)}}
function Anb(a){if(a.ng()){return null}var b=a.j;return jH[b]}
function nH(a){function b(){}
;b.prototype=a||{};return new b}
function lm(){lm=mH;hm=new om;im=new pm;jm=new qm;km=new rm}
function am(){am=mH;_l=new dm;$l=new em;Yl=new fm;Zl=new gm}
function Rl(){Rl=mH;Ql=new Ul;Ol=new Vl;Pl=new Wl;Nl=new Xl}
function tO(){tO=mH;pO=new wO;qO=new xO;rO=new yO;sO=new zO}
function vO(){tO();return rr(mr(Ex,1),zDb,71,0,[pO,qO,rO,sO])}
function nm(){lm();return rr(mr(Vu,1),zDb,70,0,[hm,im,jm,km])}
function cm(){am();return rr(mr(Qu,1),zDb,69,0,[_l,$l,Yl,Zl])}
function Tl(){Rl();return rr(mr(Lu,1),zDb,68,0,[Ql,Ol,Pl,Nl])}
function ZW(a,b){if(!a)return;(mi(),li).de(a,b);a.title=b||''}
function Oh(a){return (mi(),li).Xd(a)+((a.offsetHeight||0)|0)}
function uP(b){try{return b.selectionStart}catch(a){return 0}}
function d4(a){if(!a.c){a.c=new _0;mQ(a.c,wT(a.n))}return a.c}
function Bsb(a,b){if(fs(b,85)){return Lrb(a.a,b)}return false}
function Zyb(a,b){if(fs(b,85)){return Lrb(a.a,b)}return false}
function w6(a){if(!a){return NDb}return x6(a)+' ('+a.vf()+')'}
function iL(a){var b;b=a.c?Uh(a.a):a.a;return (mi(),li)._d(b)}
function Vyb(a){var b;b=a.c.b.b;a.b=b;a.a=a.c.b;b.a=a.c.b.b=a}
function Op(a,b){var c;if(Lp){c=new Mp(b);!!a.Tc&&jq(a.Tc,c)}}
function qCb(a,b){var c;return uCb(a,new oub,(c=new RCb(b),c))}
function Xzb(a,b){if(0>a||a>b){throw HG(new bnb($Db+a+_Db+b))}}
function gDb(a,b){if(a<0||a>b){throw HG(new anb(aEb+a+bEb+b))}}
function D5(a,b){b?(a.vMeasuredSize=b):delete a.vMeasuredSize}
function HI(a){wI();return a.__gwt_resolve?a.__gwt_resolve():a}
function Hob(a){return (new RegExp('^([^A-z0-9:!])$')).test(a)}
function bS(a){a.t.$?ub(new JS(a),100):R6((Wg(),Vg),new LS(a))}
function n$(a,b,c,d){a.Xb=false;R6((Wg(),Vg),new m_(a,b,c,d))}
function p$(a,b,c,d){a.Xb=false;R6((Wg(),Vg),new k_(a,b,c,d))}
function q2(a,b){if(!a.f){a.f=b}else{osb(a.f);!!b&&Nrb(a.f,b)}}
function y2(a,b){if(!a.k){a.k=b}else{osb(a.k);!!b&&Nrb(a.k,b)}}
function $2(a,b){if(!a.O){a.O=b}else{osb(a.O);!!b&&Nrb(a.O,b)}}
function eT(a,b){if(!a.J){return jvb(),jvb(),gvb}return a.J[b]}
function sg(a,b){Zf(this);this.e=b;this.f=a;_f(this);this.Hd()}
function FQ(a,b){eN.call(this,a);this.N=b;eQ(this);pQ(this,aQ)}
function oab(a,b,c){kab();lab(this);this.d=a;this.c=b;this.b=c}
function EK(a,b,c){uf(b);DO(a.o,b);wI();Dh(c,HI(b.Vc));wf(b,a)}
function uq(a,b,c){var d;d=vq(a,b,null);return d.getAtIndex(c)}
function ynb(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.ig(b))}
function dDb(a,b){if(a<0||a>=b){throw HG(new anb(aEb+a+bEb+b))}}
function lDb(a,b){if(a<0||a>=b){throw HG(new fpb(aEb+a+bEb+b))}}
function Aeb(a,b){if(b<0){a.c=true;a.b=0}else{a.c=false;a.b=b}}
function AX(a){zW(a.Bc);if(a.pb){zW(a.pb);Kh(a.pb);a.pb=null}}
function Gyb(a,b){eDb(b);while(a.a<a.c.a.length){SCb(b,Lub(a))}}
function isb(a,b){return b==null?Urb(ayb(a.d,null)):syb(a.e,b)}
function XBb(){VBb();return rr(mr(fG,1),zDb,92,0,[SBb,TBb,UBb])}
function I8(){G8();return rr(mr(BA,1),zDb,105,0,[D8,C8,F8,E8])}
function ydb(){ydb=mH;wdb=N4((F4(),!E4&&(E4=new T4),F4(),E4))}
function hI(){hI=mH;new RegExp('%5B','g');new RegExp('%5D','g')}
function e0(){e0=mH;d0=QBb('spreadsheet SpreadsheetConnector')}
function k9(){this.g=new Rxb;this.e=new oub;this.b=new q9(this)}
function kL(a){this.a=a;this.c=false;this.b=er(a);this.d=this.b}
function tgb(a,b,c,d){this.b=a;this.c=b;sgb(this,c);rgb(this,d)}
function lsb(a,b,c){return b==null?byb(a.d,null,c):tyb(a.e,b,c)}
function bpb(a,b,c){a.a=Oob(a.a,0,b)+(''+c)+Nob(a.a,b);return a}
function NP(a,b,c,d){if(!Aob(a.b,c)){a.b=c;a.jf()}a.f=d;MP(a,b)}
function p5(a){if(!ufb(a.a)){return true}null.Ng();return false}
function ji(a){if(Lh(a)){return !!a&&a.nodeType==1}return false}
function xJ(a){uJ();zJ();AJ();return wJ((!Xp&&(Xp=new _n),Xp),a)}
function _xb(a,b){var c;c=a.a.get(b);return c==null?new Array:c}
function SJ(a){var b=a.__listener;return !is(b)&&fs(b,10)?b:null}
function xg(a){vg();tg.call(this,a);this.a='';this.b=a;this.a=''}
function MK(a){a.style[gGb]='';a.style[hGb]='';a.style[$Eb]=''}
function k1(a,b){var c,d;c=a>0?p1(a):'';d=b>0?''+b:'';return c+d}
function gZ(a,b){if(b){b.clear();!!a&&Nrb(b,a)}else{b=a}return b}
function O5(a,b){if(a.c!=b){a.c=b;return true}else{return false}}
function P5(a,b){if(a.f!=b){a.f=b;return true}else{return false}}
function S2(a,b){if(!a.H){a.H=b}else{osb(a.H.a);!!b&&urb(a.H,b)}}
function T2(a,b){if(!a.I){a.I=b}else{osb(a.I.a);!!b&&urb(a.I,b)}}
function uK(a,b){for(var c in a){a.hasOwnProperty(c)&&b(c,a[c])}}
function Dcb(a,b){var c=[];for(var d in a[b]){c.push(d)}return c}
function qI(){var a;if(!nI||sI()){a=new Kxb;rI(a);nI=a}return nI}
function f7(a){if(i6(a.e)){nQ(a,0,0);b7(a,new v7(a))}else{X6(a)}}
function aH(a){var b;if(QG(a)){b=a;return b==-0.?0:b}return Tr(a)}
function Lub(a){cDb(a.a<a.c.a.length);a.b=a.a++;return a.c.a[a.b]}
function mY(a,b){return x1(a.a,b)?0:b>=a.W.length?cY(a):a.W[b-1]}
function z8(a,b,c){return Oob(a.b,b,$wnd.Math.min(a.b.length,c))}
function m8(){return $wnd.vaadinPush&&$wnd.vaadinPush.atmosphere}
function Uf(a,b){return !!a&&!!a.equals?a.equals(b):ls(a)===ls(b)}
function bN(a){if(a.R){return}else a.Rc&&uf(a);AN(a.Q,true,false)}
function Bk(){zk();return rr(mr(mu,1),zDb,60,0,[xk,vk,uk,wk,yk])}
function jn(){gn();return rr(mr(pv,1),zDb,61,0,[bn,cn,dn,en,fn])}
function imb(){gmb();return rr(mr(GD,1),zDb,119,0,[fmb,emb,dmb])}
function Blb(){zlb();return rr(mr(xD,1),zDb,129,0,[wlb,ylb,xlb])}
function Zlb(){Xlb();return rr(mr(CD,1),zDb,121,0,[Vlb,Wlb,Ulb])}
function Njb(a,b,c){Mjb(a.e,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c)]))}
function Tjb(a,b,c){Mjb(a.o,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c)]))}
function Wjb(a,b,c){Mjb(a.r,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c)]))}
function Xjb(a,b,c){Mjb(a.s,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c)]))}
function Zjb(a,b,c){Mjb(a.w,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c)]))}
function ckb(a,b,c){Mjb(a.I,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c)]))}
function ekb(a,b,c){Mjb(a.K,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c)]))}
function gkb(a,b,c){Mjb(a.M,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c)]))}
function Ykb(a,b,c){Mjb(a.Q,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c)]))}
function T1(a,b){a.u&&(a.c=false,R6((Wg(),Vg),new O3(a,b,false)))}
function mS(a){var b;D1(a.t,Kob((b=fO(a.a),b==null?'':b),' ',''))}
function GX(a){var b;b=XX(a,a.pc,a.qc);a.nb=null;!!b&&_h(b.d,FHb)}
function RY(a){var b;b=YX(a,a.pc,a.qc);return !!b&&b.isPercentage}
function Vq(a,b){cr('httpMethod',a);cr('url',b);this.c=a;this.g=b}
function zCb(a,b){aAb.call(this,b.Eg(),b.Dg()&-6);eDb(a);this.a=b}
function ECb(a,b){dAb.call(this,b.Eg(),b.Dg()&-6);eDb(a);this.a=b}
function uBb(a,b){this.a=a;this.d=b;this.c=(hpb(),OG(Date.now()))}
function ntb(a,b,c){hDb(b,c,a.size());this.c=a;this.a=b;this.b=c-b}
function M0(a,b,c){if(gT(a.a).u){a.a.g=b;a.a.f=null;Ujb(a.a.i,c)}}
function N0(a,b,c){if(gT(a.a).u){a.a.g=b;a.a.f=null;dkb(a.a.i,c)}}
function i1(a){if(a.K){while(0<a.K.a.length){tZ(a.W,lub(a.K,0))}}}
function vxb(a,b){if(b.$modCount!=a.$modCount){throw HG(new yxb)}}
function jDb(a){if(!a){throw HG(new $nb("Can't overwrite cause"))}}
function hg(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function Lh(b){try{return !!b&&!!b.nodeType}catch(a){return false}}
function unb(a,b,c,d){var e;e=snb(a,b);Gnb(c,e);e.f=d?8:0;return e}
function Kob(a,b,c){c=Uob(c);return a.replace(new RegExp(b,'g'),c)}
function XW(a,b){a.j=b;a.a.style[eFb]=(b?($k(),Pk):($k(),Lk)).he()}
function YV(a,b){a.k.style[HEb]=b+(Im(),qGb);a.u.style[HEb]=b+qGb}
function Jdb(a,b){a.a=b;if(wdb){b+=a.n;Kdb(a,-b)}else{Kdb(a,-a.a)}}
function R6(a,b){++a.a;a.b=fh(a.b,[b,false]);_g(a);bh(a,new T6(a))}
function WZ(a,b){b?_h(a.Dc,'nogrid'):Mh(a.Dc,'nogrid');a.Db&&_$(a)}
function ctb(a){iDb(a.c!=-1);a.d.removeAtIndex(a.c);a.b=a.c;a.c=-1}
function bqb(a){while(a.d>0&&a.a[--a.d]==0);a.a[a.d++]==0&&(a.e=0)}
function OP(a){if(!a.a){a.a=wj($doc);a.a.className=zGb;Dh(a.d,a.a)}}
function PP(a){if(!a.e){a.e=wj($doc);a.e.className=AGb;Dh(a.d,a.e)}}
function ndb(){We(this,(wI(),Gj($doc)));this.Vc.className='v-icon'}
function rdb(){We(this,(wI(),zj($doc)));this.Vc.className='v-icon'}
function Qfb(a,b,c){this.g=a;this.d={};this.c={};this.a=b;this.b=c}
function K6(){new L6(this);this.d=new N6(this);this.f=new P6(this)}
function a0(a,b,c,d,e){this.g=a;this.b=b;this.c=d;this.d=e;this.a=c}
function IX(a,b,c,d){var e;e=CGb+c+DGb+d;a.r.put(e,b);n3(a.a,b,c,d)}
function $h(a,b){var c;b=ki(b);c=ii(a.className||'',b);return c!=-1}
function Olb(a,b){var c;c=b;c.length==0&&(c='set'+Pmb(a));return c}
function Hdb(a,b){var c;if(!xdb&&ik(b.a).length==1){c=b.a;Cdb(a,c)}}
function qi(a,b){var c;return Yh((c=a.$d(b),c?c:b.documentElement))}
function UX(a,b){b?R6((Wg(),Vg),new u_(a)):(a.xc.focus(),undefined)}
function W7(a){H7();a?($wnd.location=a):$wnd.location.reload(false)}
function H9(a,b,c,d,e){this.b=a;this.c=b;this.d=c;this.f=d;this.e=e}
function fyb(a){this.e=a;this.b=this.e.a.entries();this.a=new Array}
function htb(a,b){this.a=a;dtb.call(this,a);gDb(b,a.size());this.b=b}
function fb(a,b){Z(a.a,b)?(a.a.q=a.a.s.ed(a.a.j,a.a.n)):(a.a.q=null)}
function XY(a,b){!!a.gb&&RQ(a.gb);(wI(),b.Vc).style[gFb]='1';a.gb=b}
function fZ(a,b){if(b){b.clear();!!a&&b.addAll(a)}else{b=a}return b}
function dr(a,b){if(null==b){throw HG(new qob(a+' cannot be null'))}}
function dI(a){if(a==null){throw HG(new qob('uri is null'))}this.a=a}
function qQ(a){bQ=a;iQ(a);a.K?Y(new ugb(a),200,Dg()):jQ(a,1);bQ=null}
function Og(a){a&&Yg((Wg(),Vg));--Eg;if(a){if(Ig!=-1){Tg(Ig);Ig=-1}}}
function jS(a){a.v=true;LR(a,a.w);pS(a,true);R6((Wg(),Vg),new FS(a))}
function RZ(a,b,c){W$(a,VX(a),b);O$(a,b);a.r=gZ(b,a.r);a.i=gZ(c,a.i)}
function sY(a){return rr(mr(qs,1),OHb,18,15,[a.db,a.bb,a.zb,a.xb])}
function Tcb(){Rcb();return rr(mr(OB,1),zDb,98,0,[Ncb,Ocb,Pcb,Qcb])}
function b7(a,b){a.Rc?u7(b,Wh((wI(),a.Vc),FEb),Wh(a.Vc,oGb)):$M(a,b)}
function HO(a,b){var c;c=EO(a,b);if(c==-1){throw HG(new Kzb)}GO(a,c)}
function $X(a,b,c){var d;d=isb(a.e,CGb+b+DGb+c);return !d?'':d.value}
function gcb(a,b,c){Kcb((!Iab&&(Iab=new Vab),Iab).c.e,a.a.a,a.b,b,c)}
function Fcb(a){return (!Iab&&(Iab=new Vab),Iab).c.g[(new mcb(a)).b]}
function Zj(a){return Aob(a.compatMode,UEb)?a.documentElement:a.body}
function R4(a){return (M4(a)>0||K4(a)>=11||J4(a)>=10||a.a.g)&&N7()>0}
function V6(a){X6(a);aN(a,'');jQ(a,1);a.c=false;ub(a.j,a.q);a.i=true}
function tb(a){if(!a.e){return}++a.c;a.d?xb(a.e.a):yb(a.e.a);a.e=null}
function szb(a){cDb(a.b!=a.d.c);a.c=a.b;a.b=a.b.a;++a.a;return a.c.c}
function JN(a){return function(){this.__gwt_resolve=KN;return a.nd()}}
function KN(){throw 'A PotentialElement cannot be resolved twice.'}
function NL(){NL=mH;new OL('bottom');new OL('middle');ML=new OL(hGb)}
function zk(){zk=mH;xk=new Ck;vk=new Dk;uk=new Ek;wk=new Fk;yk=new Gk}
function gn(){gn=mH;bn=new kn;cn=new ln;dn=new mn;en=new nn;fn=new on}
function tmb(){tmb=mH;rmb=new umb('ALERT',0);smb=new umb('STATUS',1)}
function Dmb(){Bmb();return rr(mr(LD,1),zDb,107,0,[zmb,Amb,ymb,xmb])}
function Rjb(a,b,c,d){Mjb(a.j,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c),d]))}
function _kb(a,b,c,d){Mjb(a.T,rr(mr(oE,1),zDb,1,5,[b,kob(c),kob(d)]))}
function L0(a,b,c,d){if(gT(a.a).u){a.a.f=b;a.a.g=null;Xjb(a.a.i,d,c)}}
function YZ(a,b){b?gf((wI(),a.Vc),ZHb,false):gf((wI(),a.Vc),ZHb,true)}
function gU(a,b){(wI(),a.Vc).style[eFb]=(b?($k(),Pk):($k(),Hk)).he()}
function CW(a,b){return a.sheet.insertRule(b,a.sheet.cssRules.length)}
function h6(a,b){return !!b&&Qmb(b.d,a.d)&&Qmb(b.c,a.c)&&Qmb(b.b,a.b)}
function _L(a,b){if(b<0||b>=nk((wI(),a.Vc)).length){throw HG(new _mb)}}
function oO(a){mO.call(this,a);(wI(),this.Vc).className='gwt-TextBox'}
function X8(a){EBb(QBb((nnb(KA),KA.k)),'Disabling heartbeat');tb(a.a)}
function qY(a){var b;b=isb(a.e,CGb+a.pc+DGb+a.qc);return !b?'':b.value}
function _4(a){var b=parseInt(a,10);if(isNaN(b))return 0;else return b}
function Pj(a){!a.gwt_uid&&(a.gwt_uid=1);return 'gwt-uid-'+a.gwt_uid++}
function FK(a){!a.p&&(a.p=new $K);try{SK(a,a.p)}finally{a.o=new IO(a)}}
function BH(){var a;DH(zH);if(!Xf){a=QBb((nnb(nw),nw.k));Yf(new CH(a))}}
function DL(a){var b;AL.call(this,(b=a,Bob('span',(mi(),a).tagName),b))}
function zob(a,b){var c;c=b.length;return Aob(a.substr(a.length-c,c),b)}
function zP(c,a){var b=c;c.onreadystatechange=vDb(function(){a.ye(b)})}
function I4(){var a=$wnd.document.documentMode;if(!a)return -1;return a}
function QBb(a){ABb();if(xBb){return new PBb(null)}return qBb(sBb(),a)}
function ABb(){ABb=mH;xBb=false;vBb=true;wBb=true;zBb=true;yBb=true}
function XI(a){a.e=false;a.f=null;a.a=false;a.b=false;a.c=true;a.d=null}
function HP(a){!!a.a&&Dh(a.d,a.a);!!a.e&&Dh(a.d,a.e);!!a.j&&Dh(a.d,a.j)}
function B1(a){!QY(a.W)&&!a.e&&!!a.q&&U0(a.q,pY(a.W))&&T0(a.q,pY(a.W))}
function fcb(a,b){return Ecb((!Iab&&(Iab=new Vab),Iab).c.e,a.a.a,a.b,b)}
function V5(a,b){return a-(mi(),li).Wd(b)+li.ae(b)+Wj(b.ownerDocument)}
function qmb(){omb();return rr(mr(HD,1),zDb,84,0,[lmb,nmb,kmb,jmb,mmb])}
function Zfb(){VT.call(this);this.a=null;new fgb(this,this);this.b=null}
function fgb(a,b){this.a=a;this.f=new Ycb(this);this.c=b;this.b='click'}
function xyb(a){this.d=a;this.b=this.d.a.entries();this.a=this.b.next()}
function VP(a,b,c){this.n=a;this.c=b;this.k=c;this.d=wj($doc);SP(this)}
function jzb(a,b,c,d){var e;e=new Bzb;e.c=b;e.b=c;e.a=d;d.b=c.a=e;++a.b}
function Lob(a,b,c){var d;c=Uob(c);d=new RegExp(b);return a.replace(d,c)}
function kub(a,b,c){for(;c>=0;--c){if(Lzb(b,a.a[c])){return c}}return -1}
function fqb(a,b){var c;for(c=a.d-1;c>=0&&a.a[c]===b[c];c--);return c<0}
function rX(a){var b,c;c=0;for(b=1;b<a.db-a.Qc;b++){c+=a.W[b-1]}return c}
function pi(a){var b=a.parentNode;(!b||b.nodeType!=1)&&(b=null);return b}
function _f(a){if(a.k){a.backingJsObject!==JDb&&a.Hd();a.i=null}return a}
function SH(a){if(a==null){throw HG(new qob('html is null'))}this.a=a}
function Dg(){if(Date.now){return Date.now()}return (new Date).getTime()}
function Mg(b){Jg();return function(){return Ng(b,this,arguments);var a}}
function n9(b){try{return JSON.parse(b)}catch(a){return eval('('+b+')')}}
function Lyb(a,b){var c;c=msb(a.c,b);if(c){Wyb(c);return c.e}return null}
function zcb(a,b,c){var d;d=!c?null:(nnb(c),c.k);Mcb(a.e,(nnb(b),b.k),d)}
function Ldb(a,b,c,d){if(b>0){a.r=true;a.i=new Rdb(a,c,d);Y(a.i,b,Dg())}}
function G1(a,b){a.C&&!a.v.f&&(a.c=false,R6((Wg(),Vg),new O3(a,b,true)))}
function vV(a){a.N&&uV(a);Q1(a.Q.a,a.Q.pc,a.U,a.Q.qc,a.V);a.o=false;rV(a)}
function L1(a,b,c,d){if(a.S){(c!=a.W.pc||d!=a.W.qc)&&m1(a);L0(a.S,b,c,d)}}
function ur(a){var b,c,d;b=a&MFb;c=a>>22&MFb;d=a<0?IDb:0;return wr(b,c,d)}
function TY(a){var b;b=new oub;fub(b,a.sb);gub(b,bY(a));return new Nub(b)}
function qX(a){var b,c;c=0;for(b=1;b<a.bb-a.ob;b++){c+=q1(a.a,b)}return c}
function X7(a){H7();var b,c;c=a.style;b=(mi(),c)[eFb];c[eFb]=GEb;c[eFb]=b}
function PBb(a){ABb();if(xBb){return}this.c=a;this.e=true;this.a=new oub}
function xAb(a,b){this.b=', ';this.d=a;this.e=b;this.c=this.d+(''+this.e)}
function JCb(a,b){gAb.call(this,b.Eg(),b.Dg()&-6);eDb(a);this.a=a;this.b=b}
function CL(){AL.call(this,wj($doc));(wI(),this.Vc).className='gwt-Label'}
function FL(){DL.call(this,wj($doc));(wI(),this.Vc).className='gwt-HTML'}
function Te(a,b){Ze(a,df((PM(),OM).ff((wI(),wI(),Uh(a.Vc))))+'-'+b,false)}
function mJ(){var a;a=vDb(iJ);$wnd.addEventListener('hashchange',a,false)}
function Nj(a){var b;return b=(mi(),a).createElement('INPUT'),b.type=DEb,b}
function Y1(a){var b,c;b=Yh(a.W.xc);c=(a.W.xc.scrollTop||0)|0;Ykb(a.X,b,c)}
function m2(a){g$(a.W,1,1);c2(a,a.i,a.P);Q1(a,1,a.i,1,a.P);r3(a,1,1,null)}
function wAb(a,b){!a.a?(a.a=new epb(a.d)):apb(a.a,a.b);$ob(a.a,b);return a}
function lub(a,b){var c;c=(dDb(b,a.a.length),a.a[b]);ZCb(a.a,b,1);return c}
function frb(a,b,c,d){var e;e=or(qs,OHb,18,b,15,1);grb(e,a,b,c,d);return e}
function $kb(a,b,c,d){Mjb(a.S,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c),kob(d)]))}
function RBb(a,b,c,d){eDb(a);eDb(b);eDb(c);eDb(d);return new YBb(b,new zAb)}
function Iyb(a,b){var c;c=hsb(a.c,b);if(c){Kyb(a,c);return c.e}return null}
function oqb(a,b){if(b==0||a.e==0){return a}return b>0?Iqb(a,b):Lqb(a,-b)}
function pqb(a,b){if(b==0||a.e==0){return a}return b>0?Lqb(a,b):Iqb(a,-b)}
function kDb(a,b,c){if(a<0||b>c||b<a){throw HG(new fpb(cEb+a+dEb+b+_Db+c))}}
function Lnb(a){return Aob(CDb,typeof(a))||js(a,$wnd.java.lang.Number$impl)}
function i6(a){return a.d!=null&&a.d.length!=0||a.c!=null&&a.c.length!=0}
function WM(a){var b;b=a.T;if(b){a.F!=null&&b.od(a.F);a.G!=null&&b.qd(a.G)}}
function dK(a){var b;b=hK(a);if(!b){return}yI(a,b.nodeType!=1?null:b,SJ(b))}
function Iq(a){var b;if(!a.d){return}tb(a.c);b=a.d;a.d=null;xP(b);b.abort()}
function ZX(a,b,c){var d;d=isb(a.e,CGb+b+DGb+c);return !d?'':d.formulaValue}
function y5(a,b,c){var d;d=N5(c,b,a.o);(d.a||d.b)&&A5(a,b,d.b,d.a);return d}
function or(a,b,c,d,e,f){var g;g=pr(e,d);e!=10&&rr(mr(a,f),b,c,e,g);return g}
function EO(a,b){var c;for(c=0;c<a.c;++c){if(a.a[c]==b){return c}}return -1}
function iAb(a,b){eDb(b);if(a.c<a.d){mAb(a,b,a.c++);return true}return false}
function pub(a){dub(this);aDb(a>=0,'Initial capacity must not be negative')}
function ar(a){$q.call(this,'A request timeout has expired after '+a+' ms')}
function RL(a){QL(this,new ZL(this,a));(wI(),this.Vc).className='gwt-Image'}
function QQ(a){iL(a.a).length==0?kf((wI(),a.Vc),false):kf((wI(),a.Vc),true)}
function xf(a,b){a.Sc==-1?KI((wI(),a.Vc),b|(a.Vc.__eventBits||0)):(a.Sc|=b)}
function Rq(a,b,c){cr('header',b);cr(JFb,c);!a.b&&(a.b=new Kxb);lsb(a.b,b,c)}
function sX(a,b,c){var d,e,f;f=0;for(e=b;e<=c;e++){d=q1(a.a,e);f+=d}return f}
function hY(a,b,c){var d;d=isb(a.e,CGb+b+DGb+c);return !d?'':d.originalValue}
function R1(a,b){Rjb(a.X,a.W.qc,a.W.pc,b);f1(a,b,true);TX(a.W);QU(a.R,false)}
function xY(a){EY(a,a.pc,a.qc)||MZ(a,a.pc,a.qc);R6((Wg(),Vg),new q_(a,true))}
function F4(){F4=mH;var a;a=H4((!E4&&(E4=new T4),E4));PN();Ze(TN(),a,true)}
function mO(a){var b;iO.call(this,(b=a,!kI&&(kI=new lI),!iI&&(iI=new jI),b))}
function VG(a){var b;if(QG(a)){b=0-a;if(!isNaN(b)){return b}}return LG(Mr(a))}
function sI(){var a=$doc.cookie;if(a!=oI){oI=a;return true}else{return false}}
function EI(b){wI();try{return !!b&&!!b.__gwt_resolve}catch(a){return false}}
function vP(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function I7(){H7();$wnd.getSelection&&$wnd.getSelection().removeAllRanges()}
function NJ(a){var b;MJ();b=KJ.get(a);return !b?null:b.getAtIndex(b.size()-1)}
function BM(a){var b;this.b=new oub;this.f=new oub;nM(this,(b=a,JM(),QO(),b))}
function sqb(a,b){$pb();this.e=a;this.d=1;this.a=rr(mr(qs,1),OHb,18,15,[b])}
function Vub(a,b,c,d){var e;d=(rxb(),!d?qxb:d);e=a.slice(b,c);Wub(e,a,b,c,-b)}
function arb(a,b,c,d){var e;e=or(qs,OHb,18,b+1,15,1);brb(e,a,b,c,d);return e}
function xI(a,b){wI();var c;c=SJ(b);if(!c){return false}yI(a,b,c);return true}
function sr(a,b){nr(b)!=10&&rr(T(b),b.Lg,b.__elementTypeId$,nr(b),a);return a}
function s5(a){var b;b=a.vMeasuredSize||null;if(!b){b=new Q5;D5(a,b)}return b}
function wV(a){var b;b=eV(a);a.v=(mi(),li).Wd(b);a.w=li.Xd(b);a.O=a.e;a.P=a.K}
function nhb(a){var b;b=Kob((nnb(tz),tz.k),QDb,'.');return n6(eT(a.e,b)).$e()}
function hT(a,b){var c;c=(!a.L&&(a.L=bT(a)),a.L).pb;return !!c&&c.contains(b)}
function Mfb(a,b){var c;c=b.vf();if(j5(a.c,c)){delete a.c[c];l5(a.c)&&Hfb(a)}}
function BBb(a,b,c,d){var e;e=new uBb(b,c);e.e=d;tBb(e,xBb?null:a.c);CBb(a,e)}
function R2(a,b){a.G=b;a.G?gf((wI(),a.Vc),sIb,true):gf((wI(),a.Vc),sIb,false)}
function KW(a,b,c){(wI(),a.Vc).style[yHb]=b+(Im(),qGb);a.Vc.style[zHb]=c+'pt'}
function $N(a){if(!a.a||!a.c.T){throw HG(new Kzb)}a.a=false;return a.b=a.c.T}
function aL(a){if(!a.bb){throw HG(new $nb('initWidget() is not called yet'))}}
function KO(a){if(a.b>=a.c.c){throw HG(new Kzb)}a.a=a.c.a[a.b];++a.b;return a.a}
function e8(a){switch(a.d.c){case 0:case 1:return true;default:return false;}}
function G4(){try{document.createEvent(AFb);return true}catch(a){return false}}
function BJ(){uJ();var a;if(oJ){a=new FJ;!!pJ&&jq(pJ,a);return null}return null}
function iqb(a){var b;if(a.e==0){return -1}b=hqb(a);return (b<<5)+iob(a.a[b])}
function U1(a){a.u=true;a.c=true;a.C?(a.C=false):QY(a.W)?(a.b=''):(a.b=qY(a.W))}
function pS(a,b){if(b){R6((Wg(),Vg),new vS(a))}else if(a.f){a.q=dO(a.e);KR(a)}}
function D6(a,b){mL(a);b==null||b.length==0?lL(a,new GL(' ')):lL(a,new GL(b))}
function MW(a,b){JW(a,b.col,b.row);IW(a,b.height);LW(a,b.width);KW(a,b.dx,b.dy)}
function X6(a){D6(a.g,'');C6(a.g,null);EL(a.f,'');a.t=UIb;a.u=UIb;nQ(a,a.t,a.u)}
function Byb(a){if(a.a.d!=a.c){return syb(a.a,a.b.value[0])}return a.b.value[1]}
function jub(a,b,c){for(;c<a.a.length;++c){if(Lzb(b,a.a[c])){return c}}return -1}
function uCb(a,b,c){var d;dCb(a);d=new OCb;d.a=b;a.a.Fg(new TCb(d,c));return d.a}
function k5(c){var a=[];for(var b in c){c.hasOwnProperty(b)&&a.push(b)}return a}
function i5(c,a){for(var b in a){Object.hasOwnProperty.call(a,b)&&(c[b]=true)}}
function m5(c,a){for(var b in a){Object.hasOwnProperty.call(a,b)&&delete c[b]}}
function l5(b){for(var a in b){if(b.hasOwnProperty(a)){return false}}return true}
function Jsb(a){var b;vxb(a.e,a);cDb(a.b);a.c=a.a;b=a.a.$e();a.b=Isb(a);return b}
function gCb(a){var b;dCb(a);b=or(os,zDb,18,0,15,1);Wzb(a.a,new jCb(b));return b}
function lCb(a){var b;dCb(a);b=or(qs,OHb,18,0,15,1);Wzb(a.a,new oCb(b));return b}
function Yjb(a,b,c){Mjb(a.v,rr(mr(oE,1),zDb,1,5,[(cnb(),b?true:false),kob(c)]))}
function Km(){Im();return rr(mr(gv,1),zDb,37,0,[Hm,Fm,Am,Bm,Gm,Em,Cm,zm,Dm])}
function ri(a,b){var c;return ((c=a.$d(b),c?c:b.documentElement).scrollTop||0)|0}
function hK(a){var b;b=(mi(),li).Sd(a);while(!!b&&!SJ(b)){b=b.parentNode}return b}
function QW(a){var b;b=wj($doc);ZW(b,a);b.className='sheet-tabsheet-tab';return b}
function oi(a){var b=a.firstChild;while(b&&b.nodeType!=1)b=b.nextSibling;return b}
function h9(a){var b;b=a['meta'];if(!b||!('async' in b)){return true}return false}
function b$(a,b,c,d,e){var f;f=gY(a,b);if(f){NP(f,c,d,e);return true}return false}
function o3(a,b,c,d){if(a.W.pc==c&&a.W.qc==d){r3(a,c,d,null);b!=null&&hS(a.v,b)}}
function mdb(a,b){a.a!=null&&Ze(a,kdb(a),false);a.a=b;b!=null&&Ze(a,kdb(a),true)}
function Y(a,b,c){X(a);a.o=true;a.p=false;a.k=b;a.t=c;a.n=null;++a.r;fb(a.j,Dg())}
function V1(a,b,c){Rjb(a.X,a.W.qc,a.W.pc,b);f1(a,b,c);if(c){TX(a.W);SU(a.R,false)}}
function Hpb(a,b){this.e=b;this.a=Lpb(a);this.a<54?(this.f=aH(a)):(this.c=Fqb(a))}
function Afb(a,b){var c,d;c=b.vf();if(!j5(a.c,c)){d=l5(a.c);a.c[c]=true;d&&Kfb(a)}}
function z5(a,b){null.Ng().Ng();if(fsb(a.b,b)){return true}return !l5(t5(b,a.k).b)}
function Tr(a){if(Jr(a,(_r(),$r))<0){return -Fr(Mr(a))}return a.l+a.m*HDb+a.h*GDb}
function W5(a,b){return a-(mi(),li).Xd(b)+((b.scrollTop||0)|0)+Xj(b.ownerDocument)}
function Pob(a,b){return b==(Ezb(),Ezb(),Dzb)?a.toLocaleLowerCase():a.toLowerCase()}
function Qob(a,b){return b==(Ezb(),Ezb(),Dzb)?a.toLocaleUpperCase():a.toUpperCase()}
function ufb(a){return Gfb(qfb(a,null.Ng(),null,0))&&Gfb(qfb(a,null.Ng(),null,1))}
function qhb(a,b,c){var d;d=Kob((nnb(tz),tz.k),QDb,'.');x0(n6(eT(a.e,d)).$e(),b,c)}
function Pab(a,b){var c,d;d=Hab(a.a[b]);for(c=new Nub(d);c.a<c.c.a.length;){Lub(c)}}
function Xg(a){var b,c;if(a.c){c=null;do{b=a.c;a.c=null;c=gh(b,c)}while(a.c);a.c=c}}
function Yg(a){var b,c;if(a.d){c=null;do{b=a.d;a.d=null;c=gh(b,c)}while(a.d);a.d=c}}
function nr(a){return a.__elementTypeCategory$==null?10:a.__elementTypeCategory$}
function is(a){return a!=null&&(typeof a===wDb||typeof a==='function')&&!(a.Mg===qH)}
function Tj(a){return (Aob(a.compatMode,UEb)?a.documentElement:a.body).clientWidth|0}
function hM(){If();Mf.call(this,Fj($doc));(wI(),this.Vc).className='gwt-ListBox'}
function _r(){_r=mH;Xr=wr(MFb,MFb,524287);Yr=wr(0,0,NFb);Zr=ur(1);ur(2);$r=ur(0)}
function jr(){jr=mH;ir=new kr('RTL',0);hr=new kr('LTR',1);gr=new kr('DEFAULT',2)}
function lqb(a,b){if(b.e==0){return Zpb}if(a.e==0){return Zpb}return krb(),lrb(a,b)}
function Deb(a,b,c,d){DQ(a);ve();Hb(nd,(wI(),a.Vc));_M(a,new GL(''+b+''));Ceb(a,c,d)}
function Pjb(a,b,c,d,e){Mjb(a.g,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c),kob(d),kob(e)]))}
function Sjb(a,b,c,d,e){Mjb(a.k,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c),kob(d),kob(e)]))}
function bkb(a,b,c,d,e){Mjb(a.F,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c),kob(d),kob(e)]))}
function hkb(a,b,c,d,e){Mjb(a.N,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c),kob(d),kob(e)]))}
function jL(a,b,c){a.c=false;c?di(a.a,b):ei(a.a,b);if(a.d!=a.b){a.d=a.b;fr(a.a,a.b)}}
function $M(a,b){a.lf(false);a.mf();b.Ye(Wh((wI(),a.Vc),FEb),Wh(a.Vc,oGb));a.lf(true)}
function ag(a,b){jDb(!a.e);aDb(true,'Self-causation not permitted');a.e=b;return a}
function tfb(a,b){var c;c=qfb(a,b.vf(),null,0);if(!c.f){c.a.wf();c.f=true}return null}
function Jq(a,b){var c,d;if(!a.d){return}tb(a.c);d=a.d;a.d=null;c=new br(d);b.Ae(a,c)}
function Ue(a,b){var c=a.parentNode;if(!c){return}c.insertBefore(b,a);c.removeChild(a)}
function hub(a,b){var c,d,e,f;eDb(b);for(d=a.a,e=0,f=d.length;e<f;++e){c=d[e];b.gg(c)}}
function fH(){gH();var a=eH;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function Jlb(a,b,c){b<0&&(b=0);(c<0||c>a.length)&&(c=a.length);return a.substr(b,c-b)}
function pM(a,b,c){if(!!b&&!b.b){return}wM(a,b);c&&a.e&&a.Te();!!b&&a.c&&lM(a,b,false)}
function zT(a,b){Y7(Pe(a.Ef()),true);!!a.q&&tb(a.q);if(a.r){!!b.a&&kk(b.a);a.r=false}}
function MJ(){var a;a=(uJ(),$wnd.location.search);if(!KJ||!Aob(JJ,a)){KJ=LJ(a);JJ=a}}
function x6(a){var b;if(!a){return '(null)'}b=onb(T(a));return Nob(b,Fob(b,Tob(46))+1)}
function Gnb(a,b){var c;if(!a){return}b.j=a;var d=Anb(b);if(!d){jH[a]=[b];return}d.Kg=b}
function lzb(a,b){var c;c=b.c;b.a.b=b.b;b.b.a=b.a;b.a=b.b=null;b.c=null;--a.b;return c}
function fT(a,b){var c;c=(nnb(b),b.k);f5(a.K,c)||(a.K[c]=Y9(b),undefined);return a.K[c]}
function Cfb(a){var b;b=[];zfb(a.a,a.b)||Cg(b,a.a.vf());yfb(a.a,a.b)||a.a.wf();return b}
function FY(a,b,c){var d;d=isb(a.e,CGb+b+DGb+c);return !d?v1(a.a,b)&&y1(a.a,c):d.locked}
function v5(a,b){var c,d,e;c=Pe(b.Ef());e=s5(c);d=y5(a,c,e);(d.a||d.b)&&B5(a,b,d.b,d.a)}
function RM(a,b){var c;c=(mi(),li).Ud(b);if(ji(c)){return Hh((wI(),a.Vc),c)}return false}
function UW(a,b){var c,d,e;e=a.u[b];d=R7(e);c=new Z4(e);d+=X4(c)[1];d+=X4(c)[3];return d}
function EY(a,b,c){return (b<=a.ob||b>=fY(a)&&b<=kY(a))&&(c<=a.Qc||c<=tY(a)&&c>=WX(a))}
function r1(a,b){return !!a.w&&jub(a.w,kob(b),0)!=-1?0:b>0&&a.g.length>=b?a.g[b-1]:a.r}
function GZ(a,b){var c;zW(a);for(c=0;c<b.a.length;c++){CW(a,(dDb(c,b.a.length),b.a[c]))}}
function veb(a){var b,c;if(a.d){for(c=new Nub(a.d);c.a<c.c.a.length;){b=Lub(c);W7(b.a)}}}
function iob(a){var b,c;if(a==0){return 32}else{c=0;for(b=1;(b&a)==0;b<<=1){++c}return c}}
function Epb(a){if(a.a<54){return a.f<0?-1:a.f>0?1:0}return (!a.c&&(a.c=Eqb(a.f)),a.c).e}
function Zg(a){var b;if(a.b){b=a.b;a.b=null;!a.g&&(a.g=[]);gh(b,a.g)}!!a.g&&(a.g=ah(a.g))}
function O9(a){a.c=null;null.Og!=(Xlb(),Vlb)&&S9(a,true);null.Ng().Og&&null.Ng().Ng()}
function Sj(a){return (Aob(a.compatMode,UEb)?a.documentElement:a.body).clientHeight|0}
function Yj(a){return ((Aob(a.compatMode,UEb)?a.documentElement:a.body).scrollWidth||0)|0}
function ij(a){return a.ownerDocument.defaultView.getComputedStyle(a,'').direction=='rtl'}
function cr(a,b){dr(a,b);if(0==Rob(b).length){throw HG(new Ynb(a+' cannot be empty'))}}
function Nrb(a,b){var c,d;eDb(b);for(d=n6(b.qg());d.Ze();){c=d.$e();a.put(c.Ag(),c.Bg())}}
function wZ(a,b,c,d,e){var f,g;HX(a);for(g=b;g<=c;g++){PZ(a,g)}for(f=d;f<=e;f++){OZ(a,f)}}
function JZ(a,b,c,d,e){var f;f=KZ(a,b,c,true);LZ(a,d,e,true)&&(f=true);if(f){aZ(a);WY(a)}}
function Qjb(a,b,c,d){Mjb(a.i,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c),(cnb(),d?true:false)]))}
function jR(a,b){a.f=b;b?gf((wI(),a.Vc),'inversed',true):gf((wI(),a.Vc),'inversed',false)}
function LV(a,b){a.k.style[HEb]=b+(Im(),qGb);a.d.style[HEb]=b+qGb;a.j.style[HEb]=b+qGb}
function iH(a,b){typeof window===wDb&&typeof window['$gwt']===wDb&&(window['$gwt'][a]=b)}
function Dc(){Dc=mH;Bc=new Ec('OFF',0);Cc=new Ec('POLITE',1);Ac=new Ec('ASSERTIVE',2)}
function zlb(){zlb=mH;wlb=new Alb('LEFT',0);ylb=new Alb('RIGHT',1);xlb=new Alb('MIDDLE',2)}
function aqb(a){var b;b=or(qs,OHb,18,a.d,15,1);ipb(a.a,0,b,0,a.d);return new tqb(a.e,a.d,b)}
function oY(a){var b;b=CGb+a.pc+DGb+a.qc;if(OY(a,b)){return gY(a,b)}return XX(a,a.pc,a.qc)}
function gfb(a){var b,c;c=NI(a.d);if(c==128){b=fk(a.d);if(b==27){return true}}return false}
function fO(a){var b,c;c=Xh((wI(),a.Vc),JFb);b=(eDb(c),c);if(Aob('',c)){return null}return b}
function VL(a,b){var c;c=Xh((wI(),b.Vc),eGb);Aob(dFb,c)&&(a.a=new WL(a,b),R6((Wg(),Vg),a.a))}
function FH(a){var b,c;c=NJ('logLevel');b=c==null?null:NAb(c);b?KBb(a,b):KBb(a,(KAb(),GAb))}
function g5(c){var a=[];for(var b in c){Object.hasOwnProperty.call(c,b)&&a.push(b)}return a}
function qh(a){var b=/function(?:\s+([\w$]+))?\s*\(/;var c=b.exec(a);return c&&c[1]||xDb}
function wK(){var b=$wnd.onresize;$wnd.onresize=vDb(function(a){try{CJ()}finally{b&&b(a)}})}
function C5(a,b,c){var d;d=hsb(a.b,b);if(d){d.remove(c);if(d.isEmpty()){msb(a.b,b);F5(a,b)}}}
function JW(a,b,c){var d;a.a=b;a.b=c;(wI(),a.Vc).className=xHb;d=CGb+b+DGb+c;gf(a.Vc,d,true)}
function kf(a,b){a.style.display=b?'':GEb;b?a.removeAttribute(LEb):a.setAttribute(LEb,'true')}
function tg(a){Zf(this);_f(this);this.backingJsObject=a;bg(this,a);this.f=a==null?NDb:pH(a)}
function Myb(){osb(this);this.b=new Xyb(this);this.c=new Kxb;this.b.b=this.b;this.b.a=this.b}
function VT(){this.K={};this.s=[];iq((!this.F&&(this.F=new lq(this)),this.F),(b5(),a5),this)}
function FI(a){wI();var b;b=_I(MI,a);if(!b&&!!a){(mi(),a).stopPropagation();li.Vd(a)}return b}
function yI(a,b,c){wI();var d;d=tI;tI=a;b==vI&&QJ((mi(),a).type)==8192&&(vI=null);c.wd(a);tI=d}
function Kqb(a,b,c){var d,e,f;d=0;for(e=0;e<c;e++){f=b[e];a[e]=f<<1|d;d=f>>>31}d!=0&&(a[c]=d)}
function urb(a,b){var c,d,e;eDb(b);c=false;for(e=n6(b);e.Ze();){d=e.$e();c=c|a.add(d)}return c}
function F7(d){var a=new Array;var b=d;for(var c in b){b.hasOwnProperty(c)&&a.push(c)}return a}
function G9(){var a,b;null.Ng();b=null.Ng();for(a=0;a<b;a++){null.Ng();null.Ng();null.Ng()}}
function hJ(){var a;a=(uJ(),qJ).Ne();if(a==null||a.length==0){return ''}return nJ(a.substr(1))}
function dM(a){var b;b=(wI(),a.Vc).selectedIndex;return b==-1?null:(_L(a,b),nk(a.Vc)[b].value)}
function H1(a,b,c){Rjb(a.X,a.W.qc,a.W.pc,b);f1(a,b,true);TX(a.W);c?TU(a.R,false):QU(a.R,false)}
function J1(a,b,c){Rjb(a.X,a.W.qc,a.W.pc,b);f1(a,b,true);TX(a.W);c?RU(a.R,false):SU(a.R,false)}
function zkb(a,b,c,d){Mjb(a.u,rr(mr(oE,1),zDb,1,5,[(cnb(),b?true:false),kob(c),d?true:false]))}
function fkb(a,b,c,d,e,f){Mjb(a.L,rr(mr(oE,1),zDb,1,5,[elb(b),kob(c),kob(d),kob(e),kob(f)]))}
function Vj(a){return ((Aob(a.compatMode,UEb)?a.documentElement:a.body).scrollHeight||0)|0}
function G3(a,b){if(b.a){f$(a.b.W,a.a,a.c)}else{a.a=Yh(a.b.W.xc);a.c=(a.b.W.xc.scrollTop||0)|0}}
function ET(a){if(a.w){BP(a.w.a);a.w=null}if(a.v){BP(a.v.a);a.v=null}if(a.u){BP(a.u.a);a.u=null}}
function v8(a){if(m8()){HBb(QBb((nnb(EA),EA.k)),a.b+' loaded');g8(a.a.a)}else{null.Ng().Ng()}}
function P9(a){HBb(QBb((nnb(SA),SA.k)),'Resynchronize from server requested');a.d=true;R9(a)}
function r5(a){var b,c;null.Ng();null.Ng();c=null.Ng();for(b=0;b<c;b++){null.Ng()}a.c=true;u5(a)}
function hqb(a){var b;if(a.b==-2){if(a.e==0){b=-1}else{for(b=0;a.a[b]==0;b++);}a.b=b}return a.b}
function iY(a,b,c){if(b<=a.ob){return c<=a.Qc?a.Lc:a.c}else if(c<=a.Qc){return a.Nc}return a.xc}
function OG(a){if(FDb<a&&a<GDb){return a<0?$wnd.Math.ceil(a):$wnd.Math.floor(a)}return LG(Kr(a))}
function Spb(a){if(a==0){return opb[0]}if(a>=0&&a<vpb.length){return vpb[a]}return new Hpb(0,a)}
function LG(a){var b;b=a.h;if(b==0){return a.l+a.m*HDb}if(b==IDb){return a.l+a.m*HDb-GDb}return a}
function df(a){var b,c;b=a.className||'';c=Cob(b,Tob(32));if(c>=0){return b.substr(0,c)}return b}
function sBb(){var a;if(!oBb){oBb=new rBb;a=new PBb('');KBb(a,(KAb(),GAb));pBb(oBb,a)}return oBb}
function p4(a,b){var c,d;c=Dg()-a.b;d=c-a.a;d>=10&&HBb(QBb((nnb(Wz),Wz.k)),b+': '+d+' ms');a.a=c}
function xT(a,b){var c;U5(b.a,Pe(a.Ef()));!!b.a&&kk(b.a);lk(b.a);(c=a,ek(b.a),c).xf(wD).Ng();I7()}
function M5(a,b){yrb(new _ub(rr(mr(qs,2),zDb,25,0,[a])));yrb(new _ub(rr(mr(qs,2),zDb,25,0,[b])))}
function Jzb(a,b){var c,d;eDb(b);for(d=new Ksb((new Csb(a)).a);d.b;){c=Jsb(d);b.hg(c.Ag(),c.Bg())}}
function _G(a){var b,c,d,e;e=a;d=0;if(e<0){e+=GDb;d=IDb}c=ms(e/HDb);b=ms(e-c*HDb);return wr(b,c,d)}
function EX(a){var b,c;for(c=new Nub(a);c.a<c.c.a.length;){b=Lub(c);Kh(b.d)}a.a=or(oE,zDb,1,0,5,1)}
function S8(a){var b;gf(OM.ff((wI(),wI(),Uh(a.Vc))),hHb,true);b=$doc.body;Mh(b,'v-reconnecting')}
function Z6(a){return a.R&&!Aob(sFb,rk((wI(),a.Vc).style))&&Ph((wI(),a.Vc))>0&&Rh((wI(),a.Vc))>0}
function _g(a){if(!a.j){a.j=true;!a.f&&(a.f=new ih(a));hh(a.f,1);!a.i&&(a.i=new kh(a));hh(a.i,50)}}
function aab(a){if(Z9!=a.a||psb(a.c.c)==0){return}a.b=true;a.a=new dab(a);dh((Wg(),Vg),new hab(a))}
function xqb(a){eDb(a);if(a.length==0){throw HG(new sob('Zero length BigInteger'))}Cqb(this,a)}
function gmb(){gmb=mH;fmb=new hmb('TEXT',0);emb=new hmb('PREFORMATTED',1);dmb=new hmb('HTML',2)}
function Xlb(){Xlb=mH;Vlb=new Ylb('DISABLED',0);Wlb=new Ylb('MANUAL',1);Ulb=new Ylb('AUTOMATIC',2)}
function Pq(){Pq=mH;new Yq('DELETE');new Yq('GET');new Yq('HEAD');Oq=new Yq('POST');new Yq('PUT')}
function Sf(){If();var a;!Qf&&(Qf=new Tf);a=vj($doc);if(!a.getContext){return null}return new Rf(a)}
function Yi(a){var b=a.ownerDocument.defaultView.getComputedStyle(a,null);return b.direction=='rtl'}
function M7(){H7();if($wnd.document.activeElement){return $wnd.document.activeElement}return null}
function hh(b,c){Wg();function d(){var a=vDb(eh)(b);a&&$wnd.setTimeout(d,c)}
$wnd.setTimeout(d,c)}
function U7(a){H7();return (mi(),a).type.indexOf(lHb)!=-1?qn(a.changedTouches[0]):Hi(a.clientX||0)}
function V7(a){H7();return (mi(),a).type.indexOf(lHb)!=-1?rn(a.changedTouches[0]):Hi(a.clientY||0)}
function GBb(a){if(xBb){return or(TF,kLb,116,0,0,1)}return nub(a.a,or(TF,kLb,116,a.a.a.length,0,1))}
function Tpb(a){if(a==ms(a)){return Spb(ms(a))}if(a>=0){return new Hpb(0,EDb)}return new Hpb(0,ODb)}
function GG(a){var b;if(fs(a,11)){return a}b=a&&a.__java$exception;if(!b){b=new xg(a);oh(b)}return b}
function p1(a){var b;b='';while(a>0){b=String.fromCharCode(65+(a-1)%26&TDb)+b;a=(a-1)/26|0}return b}
function Osb(a,b){var c,d;for(c=0,d=a.size();c<d;++c){if(Lzb(b,a.getAtIndex(c))){return c}}return -1}
function Ddb(a){if(wdb){if(a.q[kKb]||null){return Wh(a.q,kKb)}return 0}return (a.q.scrollTop||0)|0}
function X(a){if(!a.o){return}a.u=a.p;a.n=null;a.o=false;a.p=false;if(a.q){a.q.fd();a.q=null}a._c()}
function g9(a,b){if(b==-1){return true}if(b==a.d+1){return true}if(a.d==-1){return true}return false}
function Inb(a){if(a==null){return false}return a.$implements__java_lang_Cloneable||Array.isArray(a)}
function pL(a,b){if(a.T){throw HG(new $nb('SimplePanel can only contain one child widget'))}a.Se(b)}
function Lxb(a){aDb(a>=0,'Negative initial capacity');aDb(true,'Non-positive load factor');osb(this)}
function Smb(c){return $wnd.JSON.stringify(c,function(a,b){if(a=='$H'){return undefined}return b},0)}
function gV(a){return (wI(),a.Vc).style.display!=GEb||!!a.a&&Se(a.a)||!!a.X&&Se(a.X)||!!a.W&&Se(a.W)}
function oU(a){var b;b=Eh(a.g);b?$M(a.d,a.a):R6((Wg(),Vg),new CU(a));!!a.c&&fU(a.e,$X(a.c,a.b,a.i))}
function XZ(a,b){a.Z=b;b?_h(a.Dc,'noheaders'):Mh(a.Dc,'noheaders');if(a.Db){WY(a);_$(a);H$(a);X$(a)}}
function g7(a,b,c){a.t=c?UIb:(wI(),Hi((mi(),b).clientX||0));a.u=c?UIb:(wI(),Hi((mi(),b).clientY||0))}
function IY(a,b,c){return c<=a.Qc&&(b>=a.bb&&b<=a.xb||b<=a.ob)||b<=a.ob&&(c>=a.db&&c<=a.zb||c<=a.Qc)}
function $$(a,b,c,d,e){var f;if(OY(a,CGb+c+DGb+e)){f=t1(a.a,c,e);c=f.col2;e=f.row2}nV(a.wc,b,c,d,e)}
function Hr(a,b){var c,d,e;c=a.l+b.l;d=a.m+b.m+(c>>22);e=a.h+b.h+(d>>22);return wr(c&MFb,d&MFb,e&IDb)}
function Sr(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(c>>22);e=a.h-b.h+(d>>22);return wr(c&MFb,d&MFb,e&IDb)}
function uyb(a,b){var c;c=a.a.get(b);if(c===undefined){++a.d}else{kyb(a.a,b);--a.c;xxb(a.b)}return c}
function Vfb(a,b){var c;c=i4(a.D,'vaadin://themes/'+b+'/styles'+'.css');c+=(Nlb(),'?v='+Mlb);return c}
function dV(a,b,c){var d,e;if(a==null||a.length<c-1){return 0}e=0;for(d=b;d<c;d++){e+=a[d-1]}return e}
function mub(a,b){var c;c=jub(a,b,0);if(c==-1){return false}dDb(c,a.a.length);ZCb(a.a,c,1);return true}
function Isb(a){if(a.a.Ze()){return true}if(a.a!=a.d){return false}a.a=new fyb(a.e.d);return a.a.Ze()}
function OI(a){wI();RJ(uI);!VI&&(VI=new _n);if(!MI){MI=new mq(null,true);WI=new ZI}return iq(MI,VI,a)}
function o0(){e0();VT.call(this);this.a=new G0(this);this.e=new J0(this);this.j=new oub;this.c=new Rxb}
function Lmb(){this.b=(Xlb(),Vlb);this.c=new Kxb;this.c.put(YIb,(Bmb(),zmb).a);this.c.put(ZIb,xmb.a)}
function ceb(a){this.a=a;BM.call(this,true);of(this,this,(Fo(),Fo(),Eo));of(this,this,(yo(),yo(),xo))}
function Ojb(a,b,c,d,e,f,g){Mjb(a.f,rr(mr(oE,1),zDb,1,5,[kob(b),kob(c),kob(d),kob(e),kob(f),kob(g)]))}
function OW(a,b){var c,d,e,f,g;for(e=b,f=0,g=e.length;f<g;++f){d=e[f];c=QW(d);Dh(a.c,c);Ag(a.u,c)}_W(a)}
function Jab(a,b){var c,d,e,f,g,h;h=b.c;a.a[h]=b;g=b.b;for(d=g,e=0,f=d.length;e<f;++e){c=d[e];a.d[c]=h}}
function Z7(a){H7();var b,c;c=a.getElementsByTagName('img');for(b=0;b<c.length;b++){KI(c[b],VFb)}}
function kvb(a){jvb();var b,c,d;d=0;for(c=a.Oe();c.Ze();){b=c.$e();d=d+(b!=null?V(b):0);d=d|0}return d}
function gsb(a,b,c){var d,e;for(e=n6(c);e.Ze();){d=e.$e();if(a.rg(b,d.Bg())){return true}}return false}
function rr(a,b,c,d,e){e.Kg=a;e.Lg=b;e.Mg=qH;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function bM(a){var b;b=a.text;(mi(),a).hasAttribute(kGb)&&b.length>1&&(b=Oob(b,1,b.length-1));return b}
function Mr(a){var b,c,d;b=~a.l+1&MFb;c=~a.m+(b==0?1:0)&MFb;d=~a.h+(b==0&&c==0?1:0)&IDb;return wr(b,c,d)}
function bK(a){ZJ();var b;b=!FI(a);if(b||!VJ){return}xI(a,VJ)&&((mi(),a).stopPropagation(),undefined)}
function inb(a){if(Aob(typeof(a),DDb)){return true}return a!=null&&a.$implements__java_lang_CharSequence}
function qnb(){++mnb;this.k=null;this.i=null;this.g=null;this.d=null;this.b=null;this.j=null;this.a=null}
function Acb(){this.c={};this.j={};this.b={};this.g={};this.f={};this.i={};this.d={};this.a={};this.e={}}
function Mdb(a){ydb();this.s=or(qs,OHb,18,3,15,1);this.b=or(os,zDb,18,3,15,1);this.p=new Sxb(new _ub(a))}
function jf(a,b){if(!a){throw HG(new rg(JEb))}b=Rob(b);if(b.length==0){throw HG(new Ynb(KEb))}nf(a,b)}
function Ofb(a){throw HG(new $nb('Only managed layouts can need layout, layout attempted for '+w6(a.a)))}
function _q(a){$q.call(this,'The URL '+a+' is invalid or violates the same-origin security restriction')}
function B6(a){if(a.Yf(PIb)){return true}if(a.Yf(QIb)){return true}if(a.Yf(RIb)){return true}return false}
function gub(a,b){var c,d;c=b.toArray();d=c.length;if(d==0){return false}YCb(a.a,a.a.length,c);return true}
function Dr(a){var b,c;c=hob(a.h);if(c==32){b=hob(a.m);return b==32?hob(a.l)+32:b+20-10}else{return c-12}}
function lvb(a){jvb();var b,c,d;d=1;for(c=a.Oe();c.Ze();){b=c.$e();d=31*d+(b!=null?V(b):0);d=d|0}return d}
function Cr(a){var b,c,d;b=~a.l+1&MFb;c=~a.m+(b==0?1:0)&MFb;d=~a.h+(b==0&&c==0?1:0)&IDb;a.l=b;a.m=c;a.h=d}
function wrb(a,b){var c,d;eDb(b);for(d=n6(b);d.Ze();){c=d.$e();if(!a.contains(c)){return false}}return true}
function zr(a,b,c,d,e){var f;f=Qr(a,b);c&&Cr(f);if(e){a=Br(a,b);d?(tr=Mr(a)):(tr=wr(a.l,a.m,a.h))}return f}
function crb(a,b,c){var d;for(d=c-1;d>=0&&a[d]===b[d];d--);return d<0?0:RG(JG(a[d],eLb),JG(b[d],eLb))?-1:1}
function Mcb(a,b,c){var d=a[c];if(d!==undefined){var e=function(){};e.prototype=d;a[b]=new e}else{a[b]={}}}
function PV(a,b){kf((wI(),a.Vc),b);b?(a.Vc.style[sGb]='',undefined):(a.Vc.style[sGb]=(Rl(),sFb),undefined)}
function XV(a,b){a.i.style[eFb]=(b?($k(),Pk):($k(),Hk)).he();a.g.style[eFb]=(b?($k(),Pk):($k(),Hk)).he()}
function rQ(a,b){a.style[gGb]=b.b+(Im(),qGb);a.style[hGb]=b.c+qGb;a.style[IEb]=b.d+qGb;a.style[HEb]=b.a+qGb}
function S9(a,b){null.Ng().Ng();if(b&&!a.c){a.c=new k8;d8(a.c)}else !b&&!!a.c&&e8(a.c)&&a8(a.c,new U9(a))}
function VY(a,b,c){var d;Dh(a.xc,a.hb);bi(a.hb,'cell '+b);ei(a.hb,c);d=a.hb.clientWidth|0;Kh(a.hb);return d}
function Dfb(a){var b,c;c=[];zfb(a.a,a.b)&&Cg(c,a.a.vf());if(fs(a.a,163)){b=a.a;b.Mf();jvb();uvb()}return c}
function Hfb(a){var b,c,d,e,f;e=Dfb(a);d=e.length;for(b=0;b<d;b++){f=e[b];c=qfb(a.g,f,null,a.b);Nfb(c,a.a)}}
function Kfb(a){var b,c,d,e,f;e=Dfb(a);d=e.length;for(b=0;b<d;b++){f=e[b];c=qfb(a.g,f,null,a.b);Bfb(c,a.a)}}
function Lfb(a){var b,c,d,e,f;e=Cfb(a);d=e.length;for(b=0;b<d;b++){f=e[b];c=qfb(a.g,f,null,a.b);Afb(c,a.a)}}
function Ifb(a){var b,c,d,e,f;f=Cfb(a);d=f.length;for(b=0;b<d;b++){e=f[b];c=qfb(a.g,e,null,a.b);Mfb(c,a.a)}}
function Mab(a){var b;b=a.a[kJb];if(!b){throw HG(new Ynb('Bundle __deferred not recognized'))}return b.d==2}
function wq(a){var b,c;if(a.a){try{for(c=new Nub(a.a);c.a<c.c.a.length;){b=Lub(c);b.Kd()}}finally{a.a=null}}}
function qL(a,b){if(a.T!=b){return false}try{wf(b,null)}finally{Jh(a.Re(),(wI(),b.Vc));a.T=null}return true}
function UU(a){if(a.d.p){a.d.p=false;rZ(a.c)}!QY(a.c)&&!a.d.e&&!!a.d.q&&U0(a.d.q,pY(a.c))&&T0(a.d.q,pY(a.c))}
function y7(a,b){var c;if(!b){Y6(a.b)}else{c=a.b.w;!!c&&!Hh((wI(),c.Vc),b)&&(u6((DQ(a.b),b)),true)&&Y6(a.b)}}
function KG(a,b){var c;if(QG(a)&&QG(b)){c=a-b;if(!isNaN(c)){return c}}return Jr(QG(a)?_G(a):a,QG(b)?_G(b):b)}
function kQ(a,b){var c,d;UM(a);for(d=new Nub(a.A);d.a<d.c.a.length;){c=Lub(d);c.Kd()}a.A.a=or(oE,zDb,1,0,5,1)}
function OX(a){var b,c,d;for(d=1;d<=a.Qc;d++){for(c=1;c<=a.ob;c++){b=new VP(a,c,d);Dh(a.Lc,b.d);fub(a.Kc,b)}}}
function Icb(a,b){var c;c=(!Iab&&(Iab=new Vab),Iab).c.f[a.b.a+'.'+a.a];return !!c&&j5(c,b.b!=null?b.b:''+b.c)}
function Ksb(a){this.e=a;this.d=new xyb(this.e.e);this.a=this.d;this.b=Isb(this);this.$modCount=a.$modCount}
function Q5(){this.e=or(qs,OHb,18,4,15,1);this.a=or(qs,OHb,18,4,15,1);this.d=or(qs,OHb,18,4,15,1);this.b={}}
function al(){$k();return rr(mr(Gu,1),zDb,26,0,[Pk,Hk,Kk,Lk,Nk,Ok,Qk,Rk,Sk,Vk,Xk,Wk,Zk,Tk,Uk,Yk,Jk,Ik,Mk])}
function jd(){jd=mH;ed=new kd('ADDITIONS',0);gd=new kd('REMOVALS',1);hd=new kd('TEXT',2);fd=new kd('ALL',3)}
function VBb(){VBb=mH;SBb=new WBb('CONCURRENT',0);TBb=new WBb('IDENTITY_FINISH',1);UBb=new WBb('UNORDERED',2)}
function KL(){KL=mH;new LL((lm(),'center'));new LL('justify');IL=new LL(gGb);new LL('right');JL=IL;HL=JL}
function Im(){Im=mH;Hm=new Lm;Fm=new Mm;Am=new Nm;Bm=new Om;Gm=new Pm;Em=new Qm;Cm=new Rm;zm=new Sm;Dm=new Tm}
function $O(){return function(a){var b=this.parentNode;b.onfocus&&$wnd.setTimeout(function(){b.focus()},0)}}
function mb(b,c){var d=vDb(function(){var a=Dg();b.dd(a)});var e=$wnd.requestAnimationFrame(d,c);return {id:e}}
function hq(b,c){var d;try{rq(b.a,c)}catch(a){a=GG(a);if(fs(a,88)){d=a;throw HG(new Hq(d.a))}else throw HG(a)}}
function CJ(){uJ();var a,b;if(tJ){b=Tj($doc);a=Sj($doc);if(sJ!=b||rJ!=a){sJ=b;rJ=a;$p((!pJ&&(pJ=new OJ),pJ))}}}
function F6(a){if(!a.a){a.a=(wI(),wj($doc));a.a.style[$Eb]=(am(),aFb);null.Ng().Ng().Ng().Ng()}return wI(),a.a}
function vf(a,b){a.Rc&&(wI(),a.Vc.__listener=null,undefined);!!a.Vc&&Ue(a.Vc,b);a.Vc=b;a.Rc&&(wI(),TJ(a.Vc,a))}
function vb(a,b){if(b<=0){throw HG(new Ynb('must be positive'))}!!a.e&&tb(a);a.d=true;a.e=kob(Bb(zb(a,a.c),b))}
function Xdb(a,b,c){if(a.b){a.a=new Mdb(rr(mr(Tt,1),zDb,0,2,[]));of(b,a,(Fp(),Fp(),Ep))}else{a.a=null}Ydb(a,c)}
function rL(a,b){if(b==a.T){return}!!b&&uf(b);!!a.T&&qL(a,a.T);a.T=b;if(b){wI();Dh(a.Re(),HI(Pe(a.T)));wf(b,a)}}
function WV(a,b){a.b=b;a.a.style[fFb]=(b?(Wm(),Um):(Wm(),Vm)).he();a.d.style[fFb]=(b?(Wm(),Um):(Wm(),Vm)).he()}
function ZV(a,b){a.n=b;a.k.style[fFb]=(b?(Wm(),Um):(Wm(),Vm)).he();a.p.style[fFb]=(b?(Wm(),Um):(Wm(),Vm)).he()}
function aW(a,b){a.v=b;a.u.style[fFb]=(b?(Wm(),Um):(Wm(),Vm)).he();a.A.style[fFb]=(b?(Wm(),Um):(Wm(),Vm)).he()}
function dW(a,b){a.H=b;a.G.style[fFb]=(b?(Wm(),Um):(Wm(),Vm)).he();a.J.style[fFb]=(b?(Wm(),Um):(Wm(),Vm)).he()}
function N$(a,b){if(a.R);else{hO(a.sb,b);a._&&(EY(a,a.pc,a.qc)||MZ(a,a.pc,a.qc),R6((Wg(),Vg),new q_(a,false)))}}
function i2(a,b){var c,d;if(a.v.f){lS(a.v);s$(a.W,false)}c=Yh(a.W.xc);d=(a.W.xc.scrollTop||0)|0;$kb(a.X,b,c,d)}
function S$(a){var b,c;for(c=new Ksb((new Csb(a.Jb)).a);c.b;){b=Jsb(c);jZ(a,b.Ag(),b.Bg());kZ(a,b.Ag(),b.Bg())}}
function nS(a,b){var c,d;d=nk(cM(a.B)).length;for(c=0;c<d;c++){if(Aob(aM(a.B,c),b)){gM(a.B,c);return}}gM(a.B,0)}
function GO(a,b){var c;if(b<0||b>=a.c){throw HG(new _mb)}--a.c;for(c=b;c<a.c;++c){a.a[c]=a.a[c+1]}a.a[a.c]=null}
function pX(a,b,c){var d,e,f,g;g=0;for(d=b;d<=c;d++){e=u1(a.a,d);f=Cpb(Rpb(e*a.Kb/72));g+=f;a.W[d-1]=f}return g}
function jM(a,b,c){var d;if(a.i){d=(wI(),Kj($doc));CI(a.d,d,b);Dh(d,HI(c))}else{d=zI(a.d);wI();uI.Ie(d,HI(c),b)}}
function Lpb(a){var b;KG(a,0)<0&&(a=LG(Nr(QG(a)?_G(a):a)));return b=bH(YG(a,32)),64-(b!=0?hob(b):hob(bH(a))+32)}
function ng(a){var b;if(a!=null){b=a.__java$exception;if(b){return b}}return js(a,TypeError)?new pob(a):new tg(a)}
function Apb(a){var b,c;b=Epb(a);c=a.a-a.e/dLb;c<-149||b==0?(b*=0):c>129?(b*=Infinity):(b=Mnb(Fpb(a)));return b}
function Vmb(c){var a=[];for(var b in c){Object.prototype.hasOwnProperty.call(c,b)&&b!='$H'&&a.push(b)}return a}
function K7(a,b){H7();var c=$wnd.document.elementFromPoint(a,b);c!=null&&c.nodeType==3&&(c=c.parentNode);return c}
function $xb(a,b,c){var d,e,f,g;for(e=c,f=0,g=e.length;f<g;++f){d=e[f];if(a.b.rg(b,d.Ag())){return d}}return null}
function Z5(a,b){var c,d,e,f;f=b.a;e=nsb(a.b,f);if(!!e&&!e.isEmpty()){for(d=n6(e);d.Ze();){c=d.$e();!!c&&c.Of(b)}}}
function IG(a,b){var c;if(QG(a)&&QG(b)){c=a+b;if(FDb<c&&c<GDb){return c}}return LG(Hr(QG(a)?_G(a):a,QG(b)?_G(b):b))}
function UG(a,b){var c;if(QG(a)&&QG(b)){c=a*b;if(FDb<c&&c<GDb){return c}}return LG(Lr(QG(a)?_G(a):a,QG(b)?_G(b):b))}
function $G(a,b){var c;if(QG(a)&&QG(b)){c=a-b;if(FDb<c&&c<GDb){return c}}return LG(Sr(QG(a)?_G(a):a,QG(b)?_G(b):b))}
function gf(a,b,c){if(!a){throw HG(new rg(JEb))}b=Rob(b);if(b.length==0){throw HG(new Ynb(KEb))}c?Mh(a,b):_h(a,b)}
function bDb(a,b){if(0>a){throw HG(new Ynb('fromIndex: 0 > toIndex: '+a))}if(a>b){throw HG(new bnb($Db+a+_Db+b))}}
function ub(a,b){if(b<0){throw HG(new Ynb('must be non-negative'))}!!a.e&&tb(a);a.d=false;a.e=kob(Cb(zb(a,a.c),b))}
function cN(a){if(a.O){BP(a.O.a);a.O=null}if(a.J){BP(a.J.a);a.J=null}if(a.R){a.O=OI(new tN(a));a.J=gJ(new vN(a))}}
function T(a){return ks(a)?uE:hs(a)?cE:gs(a)?aE:es(a)?a.Kg:qr(a)?a.Kg:a.Kg||Array.isArray(a)&&mr(Tt,1)||Tt}
function R(a,b){return ks(a)?Aob(a,b):hs(a)?Onb(a,b):gs(a)?(eDb(a),ls(a)===ls(b)):es(a)?a.Wc(b):qr(a)?O(a,b):Uf(a,b)}
function mM(a,b){var c,d;for(d=new Nub(a.f);d.a<d.c.a.length;){c=Lub(d);if(Hh((wI(),c.Vc),b)){return c}}return null}
function jqb(a){var b;if(a.c!=0){return a.c}for(b=0;b<a.a.length;b++){a.c=a.c*33+(a.a[b]&-1)}a.c=a.c*a.e;return a.c}
function Odb(a){var b,c,d,e;b=a.childNodes;e=new oub;for(c=0;c<b.length;c++){d=b[c];d.nodeType==1&&fub(e,d)}return e}
function Ffb(a){var b,c,d,e,f;f=Cfb(a);e=f.length;for(c=0;c<e;c++){b=f[c];d=qfb(a.g,b,null,a.b);Jfb(d)}tfb(a.g,a.a)}
function Uub(a,b,c,d,e,f,g){var h;h=c;while(f<g){h>=d||b<c&&sxb(a[b],a[h])<=0?(e[f++]=a[b++]):(e[f++]=a[h++])}}
function Tub(a,b,c){var d,e,f;for(d=b+1;d<c;++d){for(e=d;e>b&&sxb(a[e-1],a[e])>0;--e){f=a[e];a[e]=a[e-1];a[e-1]=f}}}
function tq(a,b,c){var d,e;e=hsb(a.d,b);if(!e){e=new Kxb;ksb(a.d,b,e)}d=e.get(c);if(!d){d=new oub;e.put(c,d)}return d}
function bY(a){var b;b=new oub;gub(b,new Etb(a.zc));!!a.T&&gub(b,new Etb(a.T));!!a.Ac&&gub(b,new Etb(a.Ac));return b}
function er(a){var b;b=Xh(a,'dir');if(Bob('rtl',b)){return jr(),ir}else if(Bob('ltr',b)){return jr(),hr}return jr(),gr}
function Q7(a){H7();var b,c;c=O7(a);if((F4(),!E4&&(E4=new T4),F4(),E4).a.j){b=P7(a);if(b>c&&b<=c+1){return b}}return c}
function T7(a){H7();var b,c;c=R7(a);if((F4(),!E4&&(E4=new T4),F4(),E4).a.j){b=S7(a);if(b>c&&b<=c+1){return b}}return c}
function AO(a,b){var c,d,e;d=(wI(),Kj($doc));c=(e=Jj($doc),XK(e,a.a),YK(e,a.b),e);Dh(d,HI(c));Dh(a.c,HI(d));EK(a,b,c)}
function l0(a,b){var c,d;for(d=a.c.Oe();d.Ze();){c=d.$e();b.contains(c)||l2((!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C),c)}}
function Pb(a,b){var c,d,e,f,g;c=new cpb;for(e=b,f=0,g=e.length;f<g;++f){d=e[f];apb(apb(c,a.kd(d)),' ')}return Rob(c.a)}
function kob(a){var b,c;if(a>-129&&a<128){b=a+128;c=(mob(),lob)[b];!c&&(c=lob[b]=new bob(a));return c}return new bob(a)}
function Rpb(a){xpb();if(!isNaN(a)&&!isFinite(a)||isNaN(a)){throw HG(new sob('Infinite or NaN'))}return new Ipb(''+a)}
function Eqb(a){$pb();if(a<0){if(a!=-1){return new rqb(-1,-a)}return Upb}else return a<=10?Wpb[ms(a)]:new rqb(1,a)}
function vq(a,b,c){var d,e;e=hsb(a.d,b);if(!e){return jvb(),jvb(),gvb}d=e.get(c);if(!d){return jvb(),jvb(),gvb}return d}
function Vjb(a,b,c,d,e,f){var g;Mjb(a.q,rr(mr(oE,1),zDb,1,5,[(g=[],Jzb(b,new hlb(g)),g),kob(c),kob(d),kob(e),kob(f)]))}
function mrb(a,b,c,d,e){if(b==0||d==0){return}b==1?(e[d]=orb(e,c,d,a[0])):d==1?(e[b]=orb(e,a,b,c[0])):nrb(a,c,e,b,d)}
function w3(a){var b;b=Wj($doc);return H7(),(mi(),a).type.indexOf(lHb)!=-1?qn(a.changedTouches[0])+b:Hi(a.clientX||0)+b}
function x3(a){var b;b=Xj($doc);return H7(),(mi(),a).type.indexOf(lHb)!=-1?rn(a.changedTouches[0])+b:Hi(a.clientY||0)+b}
function Q2(a,b){a.F=b;a.F?((wI(),a.Vc).className||'').indexOf(rIb)!=-1||gf(a.Vc,rIb,true):gf((wI(),a.Vc),rIb,false)}
function G2(a,b){b!=null&&b.length!=0?((wI(),a.Vc).style[HEb]=b,undefined):((wI(),a.Vc).style[HEb]='400.0px',undefined)}
function i3(a,b){b!=null&&b.length!=0?((wI(),a.Vc).style[IEb]=b,undefined):((wI(),a.Vc).style[IEb]='500.0px',undefined)}
function ZM(a,b,c){var d;a.M=b;a.S=c;b-=Qj($doc);c-=Rj($doc);d=(wI(),a.Vc);d.style[gGb]=b+(Im(),qGb);d.style[hGb]=c+qGb}
function Vab(){this.a={};this.d={};this.c=new Acb;this.b=new oub;Jab(this,new Wab(rr(mr(uE,1),RDb,2,6,[mJb])))}
function ZS(a){lO();nO.call(this);this.a=a;this.Sc==-1?KI((wI(),this.Vc),NFb|(this.Vc.__eventBits||0)):(this.Sc|=NFb)}
function $(){ab.call(this,(!ib&&(ib=!!$wnd.requestAnimationFrame&&!!$wnd.cancelAnimationFrame?new jb:new rb),ib))}
function eCb(a){if(a.b){eCb(a.b)}else if(a.c){throw HG(new $nb("Stream already terminated, can't be modified or used"))}}
function Ppb(a){if(a<ODb){throw HG(new $mb('Overflow'))}else if(a>EDb){throw HG(new $mb('Underflow'))}else{return ms(a)}}
function Qnb(a,b){if(a<b){return -1}if(a>b){return 1}if(a==b){return a==0?Qnb(1/a,1/b):0}return isNaN(a)?isNaN(b)?0:1:-1}
function eqb(a,b){var c;if(ls(a)===ls(b)){return true}if(fs(b,15)){c=b;return a.e==c.e&&a.d==c.d&&fqb(a,c.a)}return false}
function efb(a,b){switch(NI(b.d)){case 16:case 32:return true;case 64:case ZFb:jfb(a);kk(b.d);return true;}return false}
function sf(a,b){var c;switch(wI(),QJ((mi(),b).type)){case 16:case 32:c=li.Td(b);if(!!c&&Hh(a.Vc,c)){return}}An(b,a,a.Vc)}
function pH(a){var b;if(Array.isArray(a)&&a.Mg===qH){return onb(T(a))+'@'+(b=V(a)>>>0,b.toString(16))}return a.toString()}
function m6(c,a){var b=typeof c[a+2];if(b==wDb){if(typeof b.length==CDb){return 1}return 2}if(b==DDb){return 0}return -1}
function FW(a){var b=a.length;var c=0;var d=0;var e=0;while(c<b){d=a.charCodeAt(c);d>47&&d<58&&(e=e*10+d-48);c++}return e}
function tyb(a,b,c){var d;d=a.a.get(b);a.a.set(b,c===undefined?null:c);if(d===undefined){++a.c;xxb(a.b)}else{++a.d}return d}
function kT(a,b,c){var d;d=Kob((nnb(b),b.k),QDb,'.');!a.J&&(a.J={});null==a.J[d]&&(a.J[d]=new oub,undefined);a.J[d].add(c)}
function e2(a,b,c,d,e){var f;f=VS(a.J,d,e,b,c);if(f.col1==b&&f.col2==c&&f.row1==d&&f.row2==e){hkb(a.X,d,b,e,c);ub(a.t,200)}}
function TN(){PN();var a;a=hsb(NN,null);if(a){return a}psb(NN)==0&&vJ(new XN);a=new ZN;ksb(NN,null,a);Oxb(ON,a);return a}
function lcb(a){var b,c;b=Bcb(a);c=b.Zf(null,rr(mr(oE,1),zDb,1,5,[]));fs(c,108)&&Kab((!Iab&&(Iab=new Vab),Iab),a.a);return c}
function drb(a,b,c){var d,e;d=JG(c,eLb);for(e=0;KG(d,0)!=0&&e<b;e++){d=IG(d,JG(a[e],eLb));a[e]=bH(d);d=YG(d,32)}return bH(d)}
function $qb(a,b,c){var d,e,f,g;f=0;for(d=b-1;d>=0;d--){g=IG(XG(f,32),JG(a[d],eLb));e=Wqb(g,c);f=bH(YG(e,32))}return bH(f)}
function G_(a,b,c,d,e){var f,g,h;for(g=b;g<=c;g++){for(h=d;h<=e;h++){f=XX(a.a,h,g);!!f&&f.o!=null&&f.o.length!=0&&f.g&&IP(f)}}}
function H_(a,b,c,d,e){var f,g,h;for(g=b;g<=c;g++){for(h=d;h<=e;h++){f=XX(a.a,h,g);!!f&&f.o!=null&&f.o.length!=0&&f.g&&UP(f)}}}
function Kdb(a,b){var c,d,e;for(d=new Nub(a.g);d.a<d.c.a.length;){c=Lub(d);e=c.style;e[PGb]='translate3d(0px,'+b+'px,0px)'}}
function vM(a){var b,c;if(!a.g){for(c=new Nub(a.f);c.a<c.c.a.length;){b=Lub(c);if(b.b){wM(a,b);break}}return true}return false}
function Gcb(a){var b,c,d;c=Dcb((!Iab&&(Iab=new Vab),Iab).c.e,a.a);d=[];for(b=0;b<c.length;b++){n5(d,new hcb(a,c[b]))}return d}
function xfb(a){var b;return a==null||a.length==0?'undefined':(b='%'.length,Aob(a.substr(a.length-b,b),'%')?'relative':_Eb)}
function Dpb(a,b){var c;a.c=b;a.a=Gqb(b);a.a<54&&(a.f=(c=b.d>1?WG(XG(b.a[1],32),JG(b.a[0],eLb)):JG(b.a[0],eLb),aH(UG(b.e,c))))}
function TG(a,b){var c;if(QG(a)&&QG(b)){c=a%b;if(FDb<c&&c<GDb){return c}}return LG((xr(QG(a)?_G(a):a,QG(b)?_G(b):b,true),tr))}
function yr(a,b){if(a.h==NFb&&a.m==0&&a.l==0){b&&(tr=wr(0,0,0));return vr((_r(),Zr))}b&&(tr=wr(a.l,a.m,a.h));return wr(0,0,0)}
function ao(a,b){var c;_n.call(this);this.a=b;!xn&&(xn=new np);c=lp(xn,a);if(!c){c=new oub;mp(xn,a,c)}c.add(this);this.b=a}
function ocb(a,b){var c,d;d=a;if(b!=null&&b.length!=0){d+='<';for(c=0;c<b.length;c++){c!=0&&(d+=',');d+=''+b[c]}d+='>'}return d}
function $5(a,b){var c,d,e,f;f=b.a;e=nsb(a.b,f);Oxb(a.c,f);if(!!e&&!e.isEmpty()){for(d=n6(e);d.Ze();){c=d.$e();!!c&&c.Pf(b)}}}
function vrb(a,b,c){var d,e;for(e=a.Oe();e.Ze();){d=e.$e();if(ls(b)===ls(d)||b!=null&&R(b,d)){c&&e._e();return true}}return false}
function FBb(a){var b,c;if(a.b){return a.b}c=xBb?null:a.d;while(c){b=xBb?null:c.b;if(b){return b}c=xBb?null:c.d}return KAb(),GAb}
function h1(a){var b,c;if(a.e){if(!a.L){return}c=new M3(a);ub(c,YEb);a.L=false;t6(a);b=Y9(Fz);Mjb(b.H,rr(mr(oE,1),zDb,1,5,[]))}}
function sZ(a){var b,c,d;for(c=new Nub(a);c.a<c.c.a.length;){b=Lub(c);d=pi((mi(),b));!!d&&d.removeChild(b)}a.a=or(oE,zDb,1,0,5,1)}
function RP(a,b,c,d){a.c=b;a.k=c;a.b=!d?'cs0':d.cellStyle;a.o=!d?null:d.value;a.f=!!d&&d.needsMeasure;TP(a);SP(a);a.g=true}
function LU(a,b,c){var d;d=s1(a.d,b,c);if(d){a.a=b;a.b=c;b=d.col1;c=d.row1}else{a.a=0;a.b=0}MZ(a.c,b,c);VU(a,b,c,($X(a.c,b,c),d))}
function I1(a){var b;if(!a.C&&!a.v.f){a.C=true;a.c=true;if(a.u){a.u=false}else{o$(a.W,false,(b=fO(a.v.j),b==null?'':b));jS(a.v)}}}
function lM(a,b,c){var d;if(!b.b){return}wM(a,b);if(c&&!!b.a){wM(a,null);(zL(),yL).af((wI(),a.Vc));d=b.a;dh((Wg(),Vg),new FM(d))}}
function s$(a,b){a._=false;a.ab=false;GW(a.$,MHb,0);hO(a.sb,'');af(a.sb,'0');Xe(a.sb,'');Ye(a.sb,'');b&&R6((Wg(),Vg),new u_(a))}
function vfb(){this.a=rr(mr(Tt,1),zDb,0,2,[{},{}]);this.c=rr(mr(Tt,1),zDb,0,2,[{},{}]);this.b=rr(mr(Tt,1),zDb,0,2,[{},{}])}
function hDb(a,b,c){if(a<0||b>c){throw HG(new anb(cEb+a+dEb+b+', size: '+c))}if(a>b){throw HG(new Ynb(cEb+a+' > toIndex: '+b))}}
function lW(a,b){switch(wI(),QJ((mi(),b).type)){case HDb:case $Fb:ZY(a.c,b);case 8:case 8192:v$(a.c,b);break;case 64:YY(a.c,b);}}
function R7(a){H7();if(a.getBoundingClientRect){var b=a.getBoundingClientRect();return b.right-b.left}else{return a.offsetWidth}}
function xab(b){var c=b.d;if(c==null){return false}if(c.readyState!=1){return false}try{c.send();return true}catch(a){return false}}
function Gqb(a){var b,c,d;if(a.e==0){return 0}b=a.d<<5;c=a.a[a.d-1];if(a.e<0){d=hqb(a);if(d==a.d-1){--c;c=c|0}}b-=hob(c);return b}
function Sub(a){var b,c,d,e,f;if(a==null){return 0}f=1;for(c=a,d=0,e=c.length;d<e;++d){b=c[d];f=31*f+(b!=null?V(b):0);f=f|0}return f}
function Aqb(a){var b,c,d;if(a<Ypb.length){return Ypb[a]}c=a>>5;b=a&31;d=or(qs,OHb,18,c+1,15,1);d[c]=1<<b;return new tqb(1,c+1,d)}
function fW(a){var b,c;c=r1(a.F.q,a.e);for(b=a.e+1;b<=a.f;b++){c+=r1(a.F.q,b)}a.G.style[IEb]=c+1+(Im(),qGb);a.a.style[IEb]=c+1+qGb}
function xN(a){if(!a.i){wN(a);a.c||LK((PN(),TN()),a.a)}(PM(),OM).gf(Pe(a.a),'rect(auto, auto, auto, auto)');Pe(a.a).style[sGb]=rFb}
function JM(){JM=mH;hI();new dI('data:image/gif;base64,R0lGODlhBQAJAIAAAAAAAAAAACH5BAEAAAEALAAAAAAFAAkAAAIMRB5gp9v2YlJsJRQKADs=')}
function KAb(){KAb=mH;BAb=new PAb;CAb=new SAb;DAb=new VAb;EAb=new YAb;FAb=new _Ab;GAb=new cBb;HAb=new fBb;IAb=new iBb;JAb=new lBb}
function G5(){this.f=new Rxb;this.k=new Q5;this.g={};this.j={};this.i={};this.n={};this.b=new Kxb;this.e=new Rxb;this.d=new H5(this)}
function leb(){FL.call(this);(wI(),this.Vc).className='v-label';this.Sc==-1?KI(this.Vc,241|(this.Vc.__eventBits||0)):(this.Sc|=241)}
function GY(a,b,c){return b>=a.bb&&b<=a.xb&&c>=a.db&&c<=a.zb||b<=a.ob&&c<=a.Qc||b>a.ob&&b<=a.xb&&c<=a.Qc||c>a.Qc&&c<=a.zb&&b<=a.ob}
function cY(a){if(a.V==-1){if(a.Kb==0){Fh(a.Lb)&&(a.Kb=(a.Lb.offsetWidth||0)|0);a.Kb==0&&(a.Kb=96)}a.V=ms(a.a.s*a.Kb/72)}return a.V}
function bab(a,b){var c,d,e,f;d=(f=(new Etb(a.c)).a.qg().Oe(),new Jtb(f));while(d.a.Ze()){e=(c=d.a.$e(),c.Bg());Plb(e,b)&&d.a._e()}}
function T$(a,b){var c,d;if(b){UY(a.ic);UY(a.Oc);UY(a.d);for(d=new Nub(a.Kc);d.a<d.c.a.length;){c=Lub(d);!!c&&(c.g=true)}}ub(a.Ib,20)}
function C3(a,b,c){var d,e;if(a.a.K){for(e=new Nub(a.a.K);e.a<e.c.a.length;){d=Lub(e);if(d.col1==b&&d.row1==c){return d}}}return null}
function Jyb(a,b,c){var d,e,f;e=hsb(a.c,b);if(!e){d=new Yyb(a,b,c);ksb(a.c,b,d);Vyb(d);return null}else{f=Ntb(e,c);Kyb(a,e);return f}}
function sq(a,b,c,d){var e,f,g;e=vq(a,b,c);f=e.remove(d);f&&e.isEmpty()&&(g=hsb(a.d,b),g.remove(c),g.isEmpty()&&msb(a.d,b),undefined)}
function l1(a,b,c,d){var e;e=new Xob;Wob(e,$wnd.Math.abs(d-c)+1);e.a+='R';e.a+=' x ';Wob(e,$wnd.Math.abs(b-a)+1);e.a+='C';return e.a}
function ti(a){var b=0;var c=a;while(c.offsetParent){b-=c.scrollTop;c=c.parentNode}while(a){b+=a.offsetTop;a=a.offsetParent}return b}
function si(a){var b=0;var c=a;while(c.offsetParent){b-=c.scrollLeft;c=c.parentNode}while(a){b+=a.offsetLeft;a=a.offsetParent}return b}
function O7(a){var b;if(a.getBoundingClientRect!=null){var c=a.getBoundingClientRect();b=c.bottom-c.top}else{b=a.offsetHeight}return b}
function GK(a,b){var c;if(b.Uc!=a){return false}try{wf(b,null)}finally{c=(wI(),b.Vc);Jh((null,pi((mi(),c))),c);HO(a.o,b)}return true}
function Lg(){var a;if(Eg!=0){a=Dg();if(a-Hg>2000){Hg=a;Ig=$wnd.setTimeout(Ug,10)}}if(Eg++==0){Xg((Wg(),Vg));return true}return false}
function Vob(a,b,c){var d,e,f,g;f=b+c;kDb(b,f,a.length);g='';for(e=b;e<f;){d=$wnd.Math.min(e+10000,f);g+=Sob(a.slice(e,d));e=d}return g}
function Iqb(a,b){var c,d,e,f;c=b>>5;b&=31;e=a.d+c+(b==0?0:1);d=or(qs,OHb,18,e,15,1);Jqb(d,a.a,c,b);f=new tqb(a.e,e,d);bqb(f);return f}
function Fnb(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function u6(a){var b;b=(H7(),J7(a,null));while(!!b&&(wI(),b.Vc).tkPid==null){b=b.Uc}return !b?null:(null.Ng((wI(),b.Vc).tkPid),null)}
function th(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function _pb(a,b){if(a.e>b.e){return 1}if(a.e<b.e){return -1}if(a.d>b.d){return a.e}if(a.d<b.d){return -b.e}return a.e*crb(a.a,b.a,a.d)}
function eV(a){if(LY(a.Q,a.e,a.K)){return Pe(a.X)}if(HY(a.Q,a.e,a.K)){return Pe(a.a)}if(KY(a.Q,a.e,a.K)){return Pe(a.W)}return Pe(a.b)}
function UY(a){var b,c,d,e;for(e=new Nub(a);e.a<e.c.a.length;){d=Lub(e);for(c=new Nub(d);c.a<c.c.a.length;){b=Lub(c);!!b&&(b.g=true)}}}
function FX(a){var b,c,d,e;zW(a.Fb);for(d=(e=(new Etb(a.Eb)).a.qg().Oe(),new Jtb(e));d.a.Ze();){c=(b=d.a.$e(),b.Bg());Kh(c.d)}osb(a.Eb)}
function Vnb(a){var b;b=Mnb(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}
function WX(a){var b,c,d;d=a.zb;b=Oh(a.xc);for(c=a.ic.a.length-1;c>0;c--){if(Oh(iub(iub(a.ic,c),0).d)<=b){return d}else{--d}}return a.zb}
function dY(a,b){var c,d;d=0;for(c=new Nub(b);c.a<c.c.a.length;){Lub(c);if(!w1(a.a,d+1)){return dDb(d,b.a.length),b.a[d]}++d}return null}
function nub(a,b){var c,d;d=a.a.length;b.length<d&&(b=$Cb(new Array(d),b));for(c=0;c<d;++c){b[c]=a.a[c]}b.length>d&&(b[d]=null);return b}
function X4(a){var b;b=rr(mr(qs,1),OHb,18,15,[0,0,0,0]);b[0]=W4(a,IGb);b[1]=W4(a,AHb);b[2]=W4(a,'marginBottom');b[3]=W4(a,HGb);return b}
function $ub(a,b){var c,d;d=a.a.length;b.length<d&&(b=$Cb(new Array(d),b));for(c=0;c<d;++c){b[c]=a.a[c]}b.length>d&&(b[d]=null);return b}
function JBb(a,b,c,d){(vBb?b.og()>=FBb(a).og():wBb?b.og()>=(KAb(),800):zBb?b.og()>=(KAb(),900):yBb&&b.og()>=(KAb(),YEb))&&BBb(a,b,c,d)}
function IBb(a,b,c){(vBb?b.og()>=FBb(a).og():wBb?b.og()>=(KAb(),800):zBb?b.og()>=(KAb(),900):yBb&&b.og()>=(KAb(),YEb))&&BBb(a,b,c,null)}
function dg(a,b,c){var d,e,f,g,h;for(e=(a.i==null&&(a.i=(nh(),h=mh.Md(a),ph(h))),a.i),f=0,g=e.length;f<g;++f){d=e[f];b.Ce(c+'\tat '+d)}}
function mI(a,b){var c,d,e,f,g,h;if(a){for(f=b,g=0,h=f.length;g<h;++g){e=f[g];c=vq(a.a,e,null).size();for(d=c-1;d>=0;d--){uq(a.a,e,d)}}}}
function fV(a,b,c){var d,e,f,g;g=K7(b,c);if(g){d=(mi(),g).getAttribute(SEb)||'';EW(a.Q.wb,d);e=a.Q.wb.a;f=a.Q.wb.b;e!=0&&f!=0&&yV(a,e,f)}}
function omb(){omb=mH;lmb=new pmb('INFO',0);nmb=new pmb(_Kb,1);kmb=new pmb('ERROR',2);jmb=new pmb('CRITICAL',3);mmb=new pmb('SYSTEM',4)}
function Rcb(){Rcb=mH;Ncb=new Scb('DELAYED',0);Ocb=new Scb('LAST_ONLY',1);Pcb=new Scb('NO_LAYOUT',2);Qcb=new Scb('NO_LOADING_INDICATOR',3)}
function G8(){G8=mH;D8=new H8('CONNECT_PENDING',0);C8=new H8('CONNECTED',1);F8=new H8('DISCONNECT_PENDING',2);E8=new H8('DISCONNECTED',3)}
function Fqb(a){$pb();if(KG(a,0)<0){if(KG(a,-1)!=0){return new uqb(-1,VG(a))}return Upb}else return KG(a,10)<=0?Wpb[bH(a)]:new uqb(1,a)}
function Pmb(a){if(a==null){return null}if(a.length<=1){return Qob(a,(Ezb(),Czb))}return Qob(a.substr(0,1),(Ezb(),Czb))+(''+a.substr(1))}
function f8(a){if(a.e==null){return false}if(!Aob(a.e,VIb)){return false}if(null.Ng().Ng().Og.Og){return false}a.d==(G8(),D8);return true}
function Bob(a,b){eDb(a);if(b==null){return false}if(Aob(a,b)){return true}return a.length==b.length&&Aob(a.toLowerCase(),b.toLowerCase())}
function Jnb(a){var b;b=typeof(a);if(Aob(b,BDb)||Aob(b,CDb)||Aob(b,DDb)){return true}return a!=null&&a.$implements__java_lang_Comparable}
function Nfb(a,b){var c,d;d=b.vf();c=!j5(a.d,d);if(c){return}delete a.d[d];l5(a.d)&&(a.e?(sfb(a.g,a.b)[a.a.vf()]=true,undefined):Ifb(a))}
function C1(a,b){var c,d;a.B.length>b?(c=a.B[b]):(c=0);a._.length>b?(d=a._[b]):(d=0);AZ(a.W,c,d);(c!=0||d!=0)&&R6((Wg(),Vg),new I3(a,c,d))}
function uU(a,b,c){var d;d=a.d.w;!!d&&fs(d,175)&&V$(d,a,a.i,a.b,b,c);_h((wI(),a.Vc),'c'+a.b+'r'+a.i);a.b=c;a.i=b;Mh(a.Vc,'c'+a.b+'r'+a.i)}
function orb(a,b,c,d){krb();var e,f;e=0;for(f=0;f<c;f++){e=IG(UG(JG(b[f],eLb),JG(d,eLb)),JG(bH(e),eLb));a[f]=bH(e);e=ZG(e,32)}return bH(e)}
function lV(a,b,c,d,e){a.G=b;a.I=d;a.H=c;a.J=e;NV(a.B,b,c,d,e);a.ab>0&a.r>0&&NV(a.D,b,c,d,e);a.ab>0&&NV(a.F,b,c,d,e);a.r>0&&NV(a.A,b,c,d,e)}
function nW(a,b,c,d,e){wI();uI.Me(b,wHb);b.__listener=a;uI.Me(c,wHb);c.__listener=a;uI.Me(d,wHb);d.__listener=a;uI.Me(e,wHb);e.__listener=a}
function Q_(a,b){var c;c=pi((mi(),b))?DW(Sh(pi(b))):0;if(a.a._b||c==1){return e1(a.a.a)}else if(a.a.$b||c==2){return d1(a.a.a)}return false}
function kzb(a,b){var c,d;gDb(b,a.b);if(b>=a.b>>1){d=a.c;for(c=a.b;c>b;--c){d=d.b}}else{d=a.a.a;for(c=0;c<b;++c){d=d.a}}return new tzb(a,b,d)}
function Tmb(b){var c;try{return c=$wnd.JSON.parse(b),c}catch(a){a=GG(a);if(fs(a,17)){throw HG(new Wmb("Can't parse "+b))}else throw HG(a)}}
function Ytb(b,c){var d;d=kzb(b,c);try{return szb(d)}catch(a){a=GG(a);if(fs(a,73)){throw HG(new anb("Can't get element "+c))}else throw HG(a)}}
function vqb(a){$pb();if(a.length==0){this.e=0;this.d=1;this.a=rr(mr(qs,1),OHb,18,15,[0])}else{this.e=1;this.d=a.length;this.a=a;bqb(this)}}
function J6(a){var b,c;F6(a).className=TIb;Mh(F6(a),'first');F6(a).style[eFb]=($k(),kFb);b=a.c-a.b;b>=0&&ub(a.d,b);c=a.e-a.b;c>=0&&ub(a.f,c)}
function l9(){if($wnd.performance&&$wnd.performance.timing){return (new Date).getTime()-$wnd.performance.timing.responseStart}else{return -1}}
function Bfb(a,b){var c,d,e;d=b.vf();c=j5(a.d,d);if(c){return}e=l5(a.d);a.d[d]=true;e&&(a.e?(delete sfb(a.g,a.b)[a.a.vf()],undefined):Lfb(a))}
function DX(a){var b,c,d,e;for(c=(e=(new ttb(a.t.a)).a.qg().Oe(),new ztb(e));c.a.Ze();){b=(d=c.a.$e(),d.Ag());_h(b.d,EHb)}osb(a.t.a);osb(a.u.a)}
function e4(a,b){var c;if(b==null){return null}else b!=null&&Aob(b.substr(0,11),'fonticon://')?(c=new ndb):(c=new rdb);c.bg(l4(a.o,b));return c}
function fr(a,b){switch(b.c){case 0:{a['dir']='rtl';break}case 1:{a['dir']='ltr';break}case 2:{er(a)!=(jr(),gr)&&(a['dir']='',undefined);break}}}
function wN(a){if(a.i){if(a.a.L){Dh($doc.body,a.a.H);a.f=xJ(a.a.I);qN();a.b=true}}else if(a.b){Jh($doc.body,a.a.H);BP(a.f.a);a.f=null;a.b=false}}
function PO(){var a,b;PO=mH;hI();new dI((Jg(),a='__gwtDevModeHook:'+$moduleName+':moduleBase',b=$wnd||self,b[a]||$moduleBase)+'clear.cache.gif')}
function ZR(a,b){var c,d,e,f,g;g=new oub;for(d=Mob(b,'[^A-z0-9:!]+',0),e=0,f=d.length;e<f;++e){c=d[e];UR(a,c)&&(g.a[g.a.length]=c,true)}return g}
function Y_(a){var b,c;c=new cpb;c.a+='<div>';b=e4(a.g.a.a.D,a.f);if(b){b.ag('icon');apb(c,Zh((wI(),b.Vc)))}apb(c,a.e);c.a+='<\/div>';return c.a}
function rqb(a,b){this.e=a;if(b<gLb){this.d=1;this.a=rr(mr(qs,1),OHb,18,15,[b|0])}else{this.d=2;this.a=rr(mr(qs,1),OHb,18,15,[b%gLb|0,b/gLb|0])}}
function V(a){return ks(a)?tDb(a):hs(a)?ms((eDb(a),a)):gs(a)?(eDb(a),a)?1231:1237:es(a)?a.Yc():qr(a)?nDb(a):!!a&&!!a.hashCode?a.hashCode():nDb(a)}
function ds(a,b){if(ks(a)){return !!cs[b]}else if(a.Lg){return !!a.Lg[b]}else if(hs(a)){return !!bs[b]}else if(gs(a)){return !!as[b]}return false}
function bT(b){var c,d,e;try{e=rT(b);d=lcb(e);return d}catch(a){a=GG(a);if(fs(a,72)){c=a;throw HG(new _nb(cHb+pnb(b.Kg)+dHb,c))}else throw HG(a)}}
function nY(a){var b=a.sheet.cssRules?a.sheet.cssRules:a.sheet.rules;var c=[];for(var d=0;d<b.length;d++){c.push(b[d].cssText)}return c.join(' ')}
function ZZ(a,b){a.ob=b;kV(a.wc,b);b>0?GW(a.$,'.'+a.yc+' .top-left-pane .cell.col'+b+', .'+a.yc+' .bottom-left-pane .cell.col'+b,1):GW(a.$,MHb,1)}
function E$(a,b,c,d,e){var f,g,h;if(b==16){BL(a.rb,e);g=CGb+c+DGb+d;h=gY(a,g);h?(f=h.d):(f=XX(a,c,d).d);$M(a.qb,new o_(a,f))}else{hQ(a.qb,false)}}
function k3(a,b,c,d){if(a.D){if(a.a!=c){$W(a.V,b,d);YW(a.V,c)}else (a.T==null||!Rub(a.T,b))&&$W(a.V,b,false)}else{OW(a.V,b);YW(a.V,c)}a.T=b;a.a=c}
function y$(a,b,c){var d,e,f;for(e=new Nub(b);e.a<e.c.a.length;){d=Lub(e);f=CGb+d.c+DGb+d.k;!!c&&jsb(c.a,f)?PP(d):!!a.tb&&a.tb.contains(f)&&KP(d)}}
function W$(a,b,c){var d,e,f;for(e=new Nub(b);e.a<e.c.a.length;){d=Lub(e);f=CGb+d.c+DGb+d.k;!!c&&ryb(c.e,f)?OP(d):!!a.r&&a.r.containsKey(f)&&JP(d)}}
function Ccb(a){var b;b=(!Iab&&(Iab=new Vab),Iab).c.d[a.b.a+'.'+a.a];if(!b){throw HG(new bcb('There is no invoker for '+(a.b.b+'.'+a.a)))}return b}
function Bcb(a){var b;b=(!Iab&&(Iab=new Vab),Iab).c.d[Xbb(new Zbb(a,'!new'))];if(!b){throw HG(new bcb('There is no constructor for '+a.b))}return b}
function Nlb(){Nlb=mH;var b;Mlb='8.15.1';b=Mob(Mlb,'[-.]',4);Nnb(b[0],10);Nnb(b[1],10);try{Nnb(b[2],10)}catch(a){a=GG(a);if(!fs(a,48))throw HG(a)}}
function tDb(a){rDb();var b,c,d;c=':'+a;d=qDb[c];if(d!=null){return ms((eDb(d),d))}d=oDb[c];b=d==null?sDb(a):ms((eDb(d),d));uDb();qDb[c]=b;return b}
function Fq(a){var b,c,d;sg.call(this,Gq(a),a.isEmpty()?null:n6(a).$e());this.a=a;d=0;for(c=n6(a);c.Ze();){b=c.$e();if(d++==0){continue}$f(this,b)}}
function AZ(a,b,c){a.Db=false;osb(a.e);osb(a.oc);Fh(a.Lb)&&(a.Kb=(a.Lb.offsetWidth||0)|0);rZ(a);nV(a.wc,1,1,1,1);a.V=-1;R6((Wg(),Vg),new O_(a,b,c))}
function Sg(a,b){Jg();var c;c=Xf;if(c){if(c==Gg){return}JBb(c.a,(KAb(),IAb),a.Gd(),a);return}if(b){Rg(fs(a,66)?a.Id():a)}else{hpb();cg(a,gpb,'','')}}
function z0(a,b){var c,d;if(a.a.f){c=w3(a.a.f);d=x3(a.a.f)}else{c=w3(a.a.g);d=x3(a.a.g)}d+=(uJ(),Xj($doc));c+=Wj($doc);$0(d4(a.a.D),new I0(a,b),c,d)}
function g0(a,b,c){switch(c.type){case 'IMAGE':b1((!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C),b,new SL(f4(a.D,b)),c);break;case 'COMPONENT':{jvb();uvb()}}}
function Geb(a,b){teb();var c;c=new Feb;ve();Hb(nd,(wI(),c.Vc));Aeb(c,a);!c.c&&(F4(),!E4&&(E4=new T4),F4(),E4).b&&ub(new Qeb(c),a+YEb);c.w=b;return c}
function xgb(a,b){var c,d,e,f;d=new oub;if(a==null||a.length==0||Aob(NDb,a)){return d}e=Tmb(a);for(c=0;c<e.length;c++){f=e[c];fub(d,b.fg(f))}return d}
function xrb(a,b){var c,d,e,f;f=a.size();b.length<f&&(b=$Cb(new Array(f),b));e=b;d=a.Oe();for(c=0;c<f;++c){e[c]=d.$e()}b.length>f&&(b[f]=null);return b}
function Iob(a){var b,c,d,e;b=(c=32>>>0,c.toString(16));d='\\u'+Nob('0000',b.length)+b;e=String.fromCharCode(45);return a.replace(new RegExp(d,'g'),e)}
function zW(a){var b=a.sheet.cssRules?a.sheet.cssRules:a.sheet.rules;while(b.length>0){a.sheet.deleteRule?a.sheet.deleteRule(0):a.sheet.removeRule(0)}}
function NW(a,b){sL.call(this);(wI(),a.Vc).style[IEb]='100%';a.Vc.style[HEb]='100%';this.Vc.style[BGb]=GEb;a.Vc.style[BGb]='all';pL(this,a);MW(this,b)}
function JX(a){var b,c,d,e;for(e=a.Qc>0?a.Qc+1:1;e<=a.zb;e++){d=new oub;for(c=1;c<=a.ob;c++){b=new VP(a,c,e);Dh(a.c,b.d);d.a[d.a.length]=b}fub(a.d,d)}}
function PX(a){var b,c,d,e;for(e=1;e<=a.Qc;e++){d=new oub;for(c=a.ob>0?a.ob+1:1;c<=a.xb;c++){b=new VP(a,c,e);Dh(a.Nc,b.d);d.a[d.a.length]=b}fub(a.Oc,d)}}
function B5(a,b,c,d){var e,f;R4((F4(),!E4&&(E4=new T4),F4(),E4))&&tfb(a.a,b);d&&(f=qfb(a.a,b.vf(),null,1),Ffb(f));c&&(e=qfb(a.a,b.vf(),null,0),Ffb(e))}
function Hcb(a){var b;b=(!Iab&&(Iab=new Vab),Iab).c.i[a.b.a+'.'+a.a];if(!b){throw HG(new bcb('There is no return type for '+(a.b.b+'.'+a.a)))}return b}
function nQ(a,b,c){var d;d=(wI(),a.Vc).style;d[HGb]=(cQ==-1&&(cQ=sQ(gGb)),-cQ+(Im(),qGb));d[IGb]=(dQ==-1&&(dQ=sQ(hGb)),-dQ+qGb);ZM(a,b,c);jQ(a,a.K?0:1)}
function zY(a,b,c){var d,e,f,g;g=K7(b,c);if(g){d=(mi(),g).getAttribute(SEb)||'';EW(a.wb,d);e=a.wb.a;f=a.wb.b;if(e!=0&&f!=0){c2(a.a,e,f);a.Hc=e;a.Ic=f}}}
function of(a,b,c){var d;d=QI(c.b);d==-1?bf(a,c.b):a.Sc==-1?KI((wI(),a.Vc),d|(a.Vc.__eventBits||0)):(a.Sc|=d);return iq(!a.Tc?(a.Tc=new lq(a)):a.Tc,c,b)}
function Br(a,b){var c,d,e;if(b<=22){c=a.l&(1<<b)-1;d=e=0}else if(b<=44){c=a.l;d=a.m&(1<<b-22)-1;e=0}else{c=a.l;d=a.m;e=a.h&(1<<b-44)-1}return wr(c,d,e)}
function f0(a,b){var c,d;for(d=b.keySet().Oe();d.Ze();){c=d.$e();a.c.contains(c)?q3((!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C),c,b.get(c)):g0(a,c,b.get(c))}}
function f1(a,b,c){a.C=false;lS(a.v);a.u=false;if(!QY(a.W)){b==null&&(b='');a.Q=Aob(b.substr(0,1),'=')||Aob(b.substr(0,1),'+');s$(a.W,c);a.Q||Z$(a.W,b)}}
function m9(){if($wnd.performance&&$wnd.performance.timing&&$wnd.performance.timing.fetchStart){return $wnd.performance.timing.fetchStart}else{return 0}}
function RV(a){var b,c;c=r1(a.p.q,a.b);for(b=a.b+1;b<=a.c;b++){c+=r1(a.p.q,b)}a.k.style[IEb]=c+1+(Im(),qGb);a.q.style[IEb]=c+1+qGb;a.a.style[IEb]=c+1+qGb}
function Pfb(a,b){if(b&&!a.e){a.e=b;if(l5(a.d)){sfb(a.g,a.b)[a.a.vf()]=true;Lfb(a)}}else if(!b&&a.e&&l5(a.d)){a.e=b;delete sfb(a.g,a.b)[a.a.vf()];Ifb(a)}}
function pr(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function Job(a,b,c){var d,e;d=Kob(b,'([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])','\\\\$1');e=Kob(Kob(c,'\\\\','\\\\\\\\'),QDb,'\\\\$');return Kob(a,d,e)}
function M$(a){var b,c;c=BI(Pe(a.sb));a.qc<=a.Qc?a.pc<=a.ob?(b=a.Lc):(b=a.Nc):a.pc<=a.ob?(b=a.c):(b=a.xc);if(c!=b){Jh(c,Pe(a.sb));wI();Dh(b,HI(Pe(a.sb)))}}
function o5(a,b){var c;c=a[null.Ng()];!c?(c=kob(0)):(c=kob(c.a+1));a[null.Ng()]=c;c.a>2&&NBb(QBb((nnb(bA),bA.k)),w6(b)+' has been layouted '+c.a+' times')}
function t6(a){var b,c,d,e;e=(b4(),b4(),a4);for(c=new Nub(e);c.a<c.c.a.length;){b=Lub(c);d=b.b;!a?null:(c5(d,(wI(),a.Vc).tkPid),null);continue}return null}
function tY(a){var b,c,d,e,f;d=a.db;b=Rh(a.xc);for(f=new Nub(a.ic);f.a<f.c.a.length;){e=Lub(f);c=dY(a,e);if(!!c&&Rh(c.d)>=b){return d}else{++d}}return a.db}
function B3(a,b,c){var d,e;if(a.a.K){for(e=new Nub(a.a.K);e.a<e.c.a.length;){d=Lub(e);if(d.col1<=b&&d.row1<=c&&d.col2>=b&&d.row2>=c){return d}}}return null}
function Xmb(a){var b;if(a==null){return false}b=typeof(a);return Aob(b,BDb)||Aob(b,CDb)||Aob(b,DDb)||a.$implements__java_io_Serializable||Array.isArray(a)}
function yN(a){wN(a);if(a.i){Pe(a.a).style[$Eb]=aFb;a.a.S!=-1&&a.a.Xe(a.a.M,a.a.S);KK((PN(),TN()),a.a)}else{a.c||LK((PN(),TN()),a.a)}Pe(a.a).style[sGb]=rFb}
function Veb(){sL.call(this);this.a=new peb(200,new bfb);(wI(),this.Vc).tabIndex=-1;!this.c&&(this.c=Ndb(this,rr(mr(Tt,1),zDb,0,2,[])));Wdb(this.c,this.Vc)}
function Dlb(a,b){var c,d;if(b.indexOf('android')==-1){return}c=Jlb(b,b.indexOf('android ')+8,b.length);c=Jlb(c,0,c.indexOf(';'));d=Mob(c,'\\.',0);Hlb(a,d)}
function RX(a,b,c){var d;++b;++c;d=CGb+b+DGb+c;if(jsb(a.b,d)){a.o=true;a.Q=isb(a.b,d);VQ(a.Q,true)}else{a.o=true;a.k=b;a.n=c;j$(a,b,c);a.Q=a.q;VQ(a.q,true)}}
function oZ(a){var b,c,d,e;if(a.Ac){for(e=(c=(new Etb(a.Ac)).a.qg().Oe(),new Jtb(c));e.a.Ze();){d=(b=e.a.$e(),b.Bg());d.d.R&&!!d.c&&GY(d.c,d.b,d.i)&&oU(d)}}}
function gY(a,b){var c,d,e,f;for(d=(f=(new Etb(a.Eb)).a.qg().Oe(),new Jtb(f));d.a.Ze();){c=(e=d.a.$e(),e.Bg());if(Aob(b,CGb+c.c+DGb+c.k)){return c}}return null}
function ygb(a){var b,c,d;b=gCb(sCb(new vCb(null,new rAb(xgb(a,new Wgb))),new Rgb));d=or(ps,zDb,18,b.length,15,1);for(c=0;c<b.length;c++){d[c]=b[c]}return d}
function Gr(a,b){var c,d,e;e=a.h-b.h;if(e<0){return false}c=a.l-b.l;d=a.m-b.m+(c>>22);e+=d>>22;if(e<0){return false}a.l=c&MFb;a.m=d&MFb;a.h=e&IDb;return true}
function DW(b){try{var c=b.charAt(0);if(c==='r'){c=b.charAt(1);if(c==='h'){return 1}}else if(c==='c'){c=b.charAt(1);if(c==='h'){return 2}}}catch(a){}return 0}
function GW(a,b,c){var d=a.sheet.cssRules[c].selectorText;var e=a.sheet.cssRules[c].cssText.replace(d,b);a.sheet.deleteRule(c);return a.sheet.insertRule(e,c)}
function UN(a){PN();var b;b=hsb(NN,a);if(b){if(!a||(wI(),b.Vc==a)){return b}}psb(NN)==0&&vJ(new XN);!a?(b=new ZN):(b=new QN(a));ksb(NN,a,b);Oxb(ON,b);return b}
function mV(a,b){if(b==(Se(a.B)||!!a.A&&Se(a.A)||!!a.F&&Se(a.F)||!!a.D&&Se(a.D))){return}PV(a.B,b);!!a.D&&PV(a.D,b);!!a.F&&PV(a.F,b);!!a.A&&PV(a.A,b);oV(a,!b)}
function Lq(a,b,c){this.c=new Mq(this);if(!a){throw HG(new oob)}if(!c){throw HG(new oob)}if(b<0){throw HG(new Xnb)}this.a=c;this.b=b;this.d=a;b>0&&ub(this.c,b)}
function qW(a,b){var c,d;c=fk(b.a);if(a.b._){if(c==13){H1(a.b.a,(d=fO(a.b.sb),d==null?'':d),hk(b.a))}else{xY(a.b);pS(a.a,true);jS(a.a);qS(a.a);MR(a.a)}}lk(b.a)}
function WW(a,b){if(b==null){a.f.style[eFb]=($k(),GEb);a.c.style[AHb]=(Im(),nGb)}else{a.c.style[AHb]=(Im(),'206.0px');a.f.style[eFb]=($k(),'inline');ei(a.f,b)}}
function Z$(a,b){var c,d,e;e=oY(a);(JY(a,a.pc,a.qc)||IY(a,a.pc,a.qc))&&!!e&&MP(e,b);d=a.Qc>0?0:a.bb;for(;d<a.pc;d++){c=XX(a,d,a.qc);!!c&&(c.g=true)}T$(a,false)}
function S4(a){if(!a.b){return false}if(a.a.t==5&&a.a.s&&M4(a)>=534){return false}if(a.a.t==4&&a.a.s&&a.a.u>=6){return false}if(a.a.j){return false}return true}
function tab(a,b){var c=a.split('.');while(typeof b==wDb){var d=c.shift();if(!(d in b)){return false}else if(c.length==0){return true}else{b=b[d]}}return false}
function MG(a,b){var c;if(QG(a)&&QG(b)){c=a/b;if(FDb<c&&c<GDb){return c<0?$wnd.Math.ceil(c):$wnd.Math.floor(c)}}return LG(xr(QG(a)?_G(a):a,QG(b)?_G(b):b,false))}
function rZ(a){var b,c;if(a.R){a.R=false;null.Ng().Ng();null.Ng();null.Ng();if(a.Db){c=oY(a);if(c){b=isb(a.e,CGb+a.pc+DGb+a.qc);MP(c,!b?null:b.value)}}a.S=null}}
function B9(a,b){var c,d,e,f,g,h,i,j;h={};i5(h,b);j=a.length;for(g=0;g<j;g++){e=a[g];if(B6(e)){c=e.d;h[c.G]=true}}d=k5(h);i=d.length;for(f=0;f<i;f++){null.Ng()}}
function Glb(a,b){var c,d;if(b.indexOf('os ')==-1||b.indexOf(' like mac')==-1){return}c=Jlb(b,b.indexOf('os ')+3,b.indexOf(' like mac'));d=Mob(c,'_',0);Hlb(a,d)}
function WP(a,b,c,d){this.n=a;this.c=b;this.k=c;this.d=wj($doc);if(!d){this.o=null}else{this.f=d.needsMeasure;this.o=d.value;this.b=d.cellStyle}SP(this);TP(this)}
function rT(b){var c;try{return Hcb(new Zbb(new mcb(b.Kg),'getState'))}catch(a){a=GG(a);if(fs(a,72)){c=a;throw HG(new _nb(cHb+pnb(b.Kg)+dHb,c))}else throw HG(a)}}
function dfb(a){var b,c,d,e,f;b=a.d;H7();if((mi(),b).type.indexOf(lHb)!=-1){e=U7(b);f=V7(b);c=K7(e,f)}else{d=li.Ud(b);!!d&&d.nodeType==1?(c=d):(c=pi(d))}return c}
function gnb(a,b){var c,d;cnb();return ks(a)?(c=(eDb(a),a),d=(eDb(b),b),c==d?0:c<d?-1:1):hs(a)?Qnb((eDb(a),a),(eDb(b),b)):gs(a)?fnb((eDb(a),a),(eDb(b),b)):a.ld(b)}
function DZ(a){var b,c,d;d=new oub;MX(a,a.w,d);c=rX(a);NX(a,d,a.db,a.zb,c);b=qX(a);LX(a,d,a.bb,a.xb,b);a.ob>0&&LX(a,d,1,a.ob,0);a.Qc>0&&NX(a,d,1,a.Qc,0);GZ(a.w,d)}
function Lrb(a,b){var c,d,e;c=b.Ag();e=b.Bg();d=a.get(c);if(!(ls(e)===ls(d)||e!=null&&R(e,d))){return false}if(d==null&&!a.containsKey(c)){return false}return true}
function Jr(a,b){var c,d,e,f,g,h,i,j;i=a.h>>19;j=b.h>>19;if(i!=j){return j-i}e=a.h;h=b.h;if(e!=h){return e-h}d=a.m;g=b.m;if(d!=g){return d-g}c=a.l;f=b.l;return c-f}
function OY(a,b){var c,d,e,f;for(d=(f=(new Etb(a.Eb)).a.qg().Oe(),new Jtb(f));d.a.Ze();){c=(e=d.a.$e(),e.Bg());if(Aob(b,CGb+c.c+DGb+c.k)){return true}}return false}
function l$(a,b,c,d,e,f){var g,h,i,j,k;for(k=e;k<=f;k++){for(g=c;g<=d;g++){j=CGb+g+DGb+k;if(ryb(b.e,j)){OY(a,j)?(h=gY(a,j)):(h=XX(a,g,k));i=syb(b.e,j);kX(a,h,i)}}}}
function _7(a){var b,c;b=null.Ng();c='v-uiId='+null.Ng().Ng();null.Ng().Ng();a.f=Omb(b,c);HBb(QBb((nnb(EA),EA.k)),'Establishing push connection');a.c=b8(a,a.f,a.a)}
function R9(a){if(!null.Ng()){OBb(QBb((nnb(SA),SA.k)),'Trying to send RPC from not yet started or stopped application');return}if(a.b||!!a.c&&!e8(a.c));else{N9(a)}}
function ZL(a,b){vf(a,zj($doc));UI((wI(),a.Vc),VFb);a.Sc==-1?KI(a.Vc,133398655|(a.Vc.__eventBits||0)):(a.Sc|=133398655);!!a.a&&(a.Vc[eGb]='',undefined);$j(a.Vc,b.a)}
function nX(a,b,c){var d,e;e=a.Qc>=c.b;d=a.ob>=c.a;e&&d?Dh(a.Lc,(wI(),c.Vc)):e?Dh(a.Nc,(wI(),c.Vc)):d?Dh(a.c,(wI(),c.Vc)):Dh(a.xc,(wI(),c.Vc));wf(c,a);lsb(a.zc,b,c)}
function uf(a){if(!a.Uc){PN();Pxb(ON,a)&&RN(a)}else if(fs(a.Uc,34)){a.Uc.Pe(a)}else if(a.Uc){throw HG(new $nb("This widget's parent does not implement HasWidgets"))}}
function zM(a,b){var c,d,e,f;if(!a.i){return}d=jub(a.b,b,0);if(d==-1){return}c=a.i?a.d:zI(a.d);f=(wI(),uI.Fe(c,d));e=uI.Ge(f);e==2&&Jh(f,uI.Fe(f,1));b.Vc['colSpan']=2}
function W6(a,b){of(b,a.s,($o(),$o(),Zo));of(b,a.s,(To(),To(),So));of(b,a.s,(Mo(),Mo(),Lo));of(b,a.s,(ko(),ko(),jo));of(b,a.s,(co(),co(),bo));of(b,a.s,(En(),En(),Dn))}
function A8(a){var b,c,d;if(a.a==0){c=''+a.b.length+'|';b=4095-c.length;d=c+Oob(a.b,0,$wnd.Math.min(a.b.length,b));a.a+=b}else{d=z8(a,a.a,a.a+4095);a.a+=4095}return d}
function Ucb(a,b){var c;if(NI(b.d)==8){BP(a.e.a);c=L7(b.d);!!a.d&&c==a.d?(a.g=true):HBb(QBb((nnb(SB),SB.k)),'Ignoring mouseup from '+c+' when mousedown was on '+a.d)}}
function An(a,b,c){var d,e,f,g,h;if(xn){h=lp(xn,(mi(),a).type);if(h){for(g=n6(h);g.Ze();){f=g.$e();d=f.a.a;e=f.a.b;yn(f.a,a);zn(f.a,c);qf(b,f.a);yn(f.a,d);zn(f.a,e)}}}}
function b6(a,b,c){var d;d=a==null?Urb(ayb(c.d,null)):syb(c.e,a);if(!d){d=new oub;d.add(b);a==null?byb(c.d,null,d):tyb(c.e,a,d);return true}else{d.add(b);return false}}
function Tfb(a){if(a.b){tb(a.b);a.b=null}if((!a.L&&(a.L=bT(a)),a.L).g>=0){a.b=new ggb(a);vb(a.b,(!a.L&&(a.L=bT(a)),a.L).g)}else{bab(a.D.j,new Qlb(a.G,(nnb(MD),MD.k)))}}
function uqb(a,b){this.e=a;if(NG(JG(b,-4294967296),0)){this.d=1;this.a=rr(mr(qs,1),OHb,18,15,[bH(b)])}else{this.d=2;this.a=rr(mr(qs,1),OHb,18,15,[bH(b),bH(YG(b,32))])}}
function Qqb(a){var b,c,d;if(KG(a,0)>=0){c=MG(a,OFb);d=TG(a,OFb)}else{b=ZG(a,1);c=MG(b,500000000);d=TG(b,500000000);d=IG(XG(d,1),JG(a,1))}return WG(XG(d,32),JG(c,eLb))}
function hH(b,c,d,e){gH();var f=eH;$moduleName=c;$moduleBase=d;AG=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{vDb(g)()}catch(a){b(c,a)}}else{vDb(g)()}}
function ph(a){var b,c,d,e;b='oh';c='mg';e=$wnd.Math.min(a.length,5);for(d=e-1;d>=0;d--){if(Aob(a[d].d,b)||Aob(a[d].d,c)){a.length>=d+1&&a.splice(0,d+1);break}}return a}
function j9(a,b){Qxb(a.g,b);if(psb(a.g.a)==0){tb(a.b);if(a.e.a.length!=0){HBb(QBb((nnb(QA),QA.k)),'No more response handling locks, handling pending requests.');f9(a)}}}
function p9(a){var b;if(a==null){return null}if(!Aob(a.substr(0,9),'for(;;);[')||(b=']'.length,!Aob(a.substr(a.length-b,b),']'))){return null}return Oob(a,9,a.length-1)}
function Mrb(a,b,c){var d,e,f;for(e=a.qg().Oe();e.Ze();){d=e.$e();f=d.Ag();if(ls(b)===ls(f)||b!=null&&R(b,f)){if(c){d=new Utb(d.Ag(),d.Bg());e._e()}return d}}return null}
function _W(a){var b;if(a.s==0){Mh(a.p,sFb);Mh(a.n,sFb)}else{_h(a.p,sFb);_h(a.n,sFb)}b=TW(a,a.u.length-1);if(a.s<b){_h(a.q,sFb);_h(a.o,sFb)}else{Mh(a.q,sFb);Mh(a.o,sFb)}}
function kX(a,b,c){var d;if(!b||!c){return}MP(b,null);d=c.Uc;if(d){if(a==d){Dh(b.d,(wI(),c.Vc))}else{uf(c);Dh(b.d,(wI(),c.Vc));wf(c,a)}}else{Dh(b.d,(wI(),c.Vc));wf(c,a)}}
function i9(a){var b,c,d;b=new Nub(a.e);while(b.a<b.c.a.length){c=Lub(b);d=d9(c.a);if(d!=-1&&d<a.d+1){HBb(QBb((nnb(QA),QA.k)),'Removing old message with id '+d);Mub(b)}}}
function zdb(a,b,c){var d,e,f;$wnd.Math.abs(b-c);e=350;e<=0&&(e=1);HBb(QBb((nnb(jC),jC.k)),'Animate '+e+' '+c+' '+b);f=-b+a.n;d=-c+a.n;if(wdb){d-=a.n;f-=a.n}Ldb(a,e,d,f)}
function sh(a){nh();var b=a.backingJsObject;if(b&&b.stack){var c=b.stack;var d=b+'\n';c.substring(0,d.length)==d&&(c=c.substring(d.length));return c.split('\n')}return []}
function rhb(a){this.c=new Kxb;this.a=new Kxb;this.b=new Kxb;this.d=or(uE,RDb,2,0,6,1);!!a&&(this.e=new o0,cT(this.e,new j4),this.f=wT(this.e),KK(UN(a),this.f),undefined)}
function grb(a,b,c,d,e){var f,g;f=0;for(g=0;g<e;g++){f=IG(f,$G(JG(b[g],eLb),JG(d[g],eLb)));a[g]=bH(f);f=YG(f,32)}for(;g<c;g++){f=IG(f,JG(b[g],eLb));a[g]=bH(f);f=YG(f,32)}}
function bI(){bI=mH;new SH('');YH=new RegExp('[&<>\'"]');WH=new RegExp('&','g');XH=new RegExp('>','g');ZH=new RegExp('<','g');aI=new RegExp("'",'g');_H=new RegExp('"','g')}
function m1(a){var b,c;if(a.v.f);else if(a.C||a.u){a.c=true;b=(c=fO(a.v.j),c==null?'':c);Rjb(a.X,a.W.qc,a.W.pc,b);f1(a,b,true)}else if(a.p){a.p=false;rZ(a.W);fS(a.v,true)}}
function lnb(a,b){if(b<2||b>36){return -1}if(a>=48&&a<48+$wnd.Math.min(b,10)){return a-48}if(a>=97&&a<b+97-10){return a-97+10}if(a>=65&&a<b+65-10){return a-65+10}return -1}
function ipb(a,b,c,d,e){hpb();var f,g;fDb(a,'src');fDb(c,'dest');T(a);T(c);g=a.length;f=c.length;if(b<0||d<0||e<0||b+e>g||d+e>f){throw HG(new _mb)}e>0&&WCb(a,b,c,d,e,true)}
function Mh(a,b){var c,d;b=ki(b);d=a.className||'';c=ii(d,b);if(c==-1){d.length>0?(a.className=d+' '+b||'',undefined):(a.className=b||'',undefined);return true}return false}
function xM(a){var b,c,d;if(!a.g){return}c=jub(a.f,a.g,0);b=c;while(true){c=c+1;c==a.f.a.length&&(c=0);if(c==b){d=iub(a.f,b);break}else{d=iub(a.f,c);if(d.b){break}}}wM(a,d)}
function yM(a){var b,c,d;if(!a.g){return}c=jub(a.f,a.g,0);b=c;while(true){c=c-1;c<0&&(c=a.f.a.length-1);if(c==b){d=iub(a.f,b);break}else{d=iub(a.f,c);if(d.b){break}}}wM(a,d)}
function Bmb(){Bmb=mH;zmb=new Cmb('WEBSOCKET',0,VIb);Amb=new Cmb('WEBSOCKET_XHR',1,'websocket-xhr');ymb=new Cmb('STREAMING',2,'streaming');xmb=new Cmb('LONG_POLLING',3,WIb)}
function Uob(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){lDb(b+1,a.length);a.charCodeAt(b+1)==36?(a=a.substr(0,b)+'$'+Nob(a,++b)):(a=a.substr(0,b)+(''+Nob(a,++b)))}return a}
function _I(a,b){var c,d,e,f,g;if(!!VI&&!!a&&kq(a,VI)){c=WI.a;d=WI.b;e=WI.c;f=WI.d;XI(WI);YI(WI,b);jq(a,WI);g=!(WI.a&&!WI.b);WI.a=c;WI.b=d;WI.c=e;WI.d=f;return g}return true}
function KU(a,b,c){var d;d=s1(a.d,b,c);if(d){a.a=b;a.b=c;b=d.col1;c=d.row1}else{a.a=0;a.b=0}x$(a.c,b,c);MZ(a.c,b,c);r3(a.d,b,c,null);UU(a);Qjb(a.d.X,c,b,false);ub(a.d.t,200)}
function qV(a,b){if(b==((wI(),a.Vc).style.display!=GEb||!!a.a&&Se(a.a)||!!a.X&&Se(a.X)||!!a.W&&Se(a.W))){return}kf(a.Vc,b);!!a.W&&_e(a.W,b);!!a.X&&_e(a.X,b);!!a.a&&_e(a.a,b)}
function Y6(a){if(a.o){tb(a.r);a.o=false}if(!a.Rc){return}if(a.c){return}if(a.R&&!Aob(sFb,rk((wI(),a.Vc).style))&&Ph((wI(),a.Vc))>0&&Rh((wI(),a.Vc))>0){ub(a.b,a.a);a.c=true}}
function Ufb(a){var b,c,d;d=Th($doc.getElementsByTagName(NIb)[0],vEb);for(b=0;b<d.length;b++){c=d[b];if(Aob(OIb,c.rel)&&Aob(VHb,c.type)&&Aob(a,c.href)){return c}}return null}
function QX(a,b){var c,d;a.R=true;GW(a.$,MHb,0);a.S=b;d=oY(a);if(!d){return}MP(d,null);c=d.d;Mh(c,'custom-editor-cell');Dh(c,(wI(),null.Og));null.Ng();R6((Wg(),Vg),new u_(a))}
function Flb(b,c){b.u=-1;b.v=-1;if(c.length>2){try{b.u=Nnb(c[1],10)}catch(a){a=GG(a);if(!fs(a,17))throw HG(a)}try{b.v=Nnb(c[0],10)}catch(a){a=GG(a);if(!fs(a,17))throw HG(a)}}}
function ZQ(a,b,c,d){a.c=b;a.d=c;a.b=d;(wI(),a.Vc).style[fFb]=sFb;!!a.B&&(a.B.style[fFb]=sFb,undefined);a.i.style[fFb]=(Wm(),sFb);qQ(a);a.k=Wh(a.Vc,oGb);a.n=Wh(a.Vc,FEb);SQ(a)}
function ldb(a,b){ei((wI(),a.Vc),yob((_Cb(b>=0&&b<=1114111),b>=SDb?rr(mr(ns,1),zDb,18,15,[55296+(b-SDb>>10&1023)&TDb,56320+(b-SDb&1023)&TDb]):rr(mr(ns,1),zDb,18,15,[b&TDb]))))}
function kY(a){var b,c,d,e;if(a.ic.a.length==0){return a.xb}d=a.xb;b=iub(a.ic,0);e=b.size();for(c=e-1;c>0;c--){if(Qh(b.getAtIndex(c).d)<Qh(a.xc)){return d}else{--d}}return a.xb}
function A9(a){var b,c;b=k5(a);for(c=0;c<b.length;c++){null.Ng(b[c]);null.Ng()}b4();false&&NJ(_Hb)!=null&&G9();HBb(QBb((nnb(QA),QA.k)),'* Unregistered '+b.length+' connectors')}
function adb(a,b){var c,d,e,f;if(!a.a.q){return false}f=bk(b.a)[0];d=Hi((mi(),f).clientX||0)-a.a.A;e=Hi(f.clientY||0)-a.a.B;c=d*d+e*e;if(c>a.a.k*a.a.k){return true}return false}
function Edb(a){var b,c,d;if(wdb){a.q[kKb]=a.c}else{for(c=new Nub(a.g);c.a<c.c.a.length;){b=Lub(c);d=b.style;d[PGb]='translate3d(0,0,0)'}gi(a.q,a.c)}xdb=null;BP(a.d.a);a.d=null}
function pfb(a){var b,c,d;b=new epb('[');c=k5(a);for(d=0;d<c.length;d++){null.Ng(c[d]);b.a.length!=1&&(b.a+=', ',b);apb(b,null.Ng().Ng()+' ('+null.Ng()+')')}b.a+=']';return b.a}
function yrb(a){var b,c,d;d=new xAb('[',']');for(c=a.Oe();c.Ze();){b=c.$e();wAb(d,b===a?'(this Collection)':b==null?NDb:pH(b))}return !d.a?d.c:d.e.length==0?d.a.a:d.a.a+(''+d.e)}
function IP(a){var b;if(a.i){TP(a);!!a.j&&Dh(a.d,a.j)}b=hsb(a.n.oc,new ZP(a.o,a.b,a.k,a.c));if(!b){b=kob((a.d.scrollWidth||0)|0);ksb(a.n.oc,new ZP(a.o,a.b,a.k,a.c),b)}return b.a}
function cZ(a){var b,c;if(a.Db){b=(a.xc.offsetHeight||0)|0;c=(a.xc.offsetWidth||0)|0;if(b>a.mc||c>a.nc){a.mc=b;a.nc=c;a.Nb=-a.a.j;a.Ob=-a.a.M;oeb(a.jc)}else{a.mc=b;a.nc=c}lZ(a)}}
function $J(){XJ=vDb(dK);YJ=vDb(eK);var c=uK;var d=UJ;c(d,function(a,b){d[a]=vDb(b)});var e=WJ;c(e,function(a,b){e[a]=vDb(b)});c(e,function(a,b){$wnd.addEventListener(a,b,true)})}
function MM(a,b){We(this,(wI(),Jj($doc)));Ze(this,df(this.Vc)+'-'+lGb,false);di(this.Vc,a);this.Vc.className='gwt-MenuItem';ai(this.Vc,'id',Pj($doc));ve();Hb(Sd,this.Vc);this.a=b}
function Eeb(a,b){var c;c=(wI(),a.Vc);c.style[hGb]='';c.style[gGb]='';switch(b){case 3:case 5:fQ(a);c.style[gGb]='';break;case 1:case 7:fQ(a);c.style[hGb]='';break;case 4:fQ(a);}}
function mfb(a,b,c){H7();if(jk(c.d).indexOf(lHb)!=-1){if(!b){c.a=true;lk(c.d);return true}else if(efb((kfb(a.a),b),c)){return true}else{null.Ng();return false}}else{return false}}
function OZ(a,b){var c,d,e;if(!!a.ib&&a.ib.a.length>b-1){Oxb(a.sc,kob(b));d=iub(a.ib,b-1);Mh(d,HHb)}else{Oxb(a.rc,kob(b));e=b-a.bb;if(e>=0&&a.K.a.length>e){c=iub(a.K,e);Mh(c,HHb)}}}
function PZ(a,b){var c,d;if(!!a.jb&&a.jb.a.length>b-1){Oxb(a.tc,kob(b));c=iub(a.jb,b-1);Mh(c,GHb)}else{Oxb(a.uc,kob(b));d=b-a.db;if(d>=0&&a.gc.a.length>d){c=iub(a.gc,d);Mh(c,GHb)}}}
function rrb(a,b){krb();var c,d;d=($pb(),Vpb);c=a;for(;b>1;b>>=1){(b&1)!=0&&(d=lqb(d,c));c.d==1?(c=lqb(c,c)):(c=new vqb(trb(c.a,c.d,or(qs,OHb,18,c.d<<1,15,1))))}d=lqb(d,c);return d}
function oyb(){function b(){try{return (new Map).entries().next().done}catch(a){return false}}
if(typeof Map==='function'&&Map.prototype.entries&&b()){return Map}else{return pyb()}}
function VW(a,b){if(a.s<b){do{a.t-=UW(a,a.s);++a.s}while(a.s<b);a.c.style[HGb]=a.t+(Im(),qGb)}else if(a.s>b){do{--a.s;a.t+=UW(a,a.s)}while(a.s>b);a.c.style[HGb]=a.t+(Im(),qGb)}_W(a)}
function Y9(a){X9();HBb(W9,(nnb(a),'asking for '+a.k));if(Fz==a){HBb(W9,(nnb(tD),'Returning '+tD.k+' from fake RpcProxy'));return new alb}throw HG(new $nb(''+a+' is not supported'))}
function Jfb(a){var b,c,d,e,f,g;f=Dfb(a);e=f.length;for(c=0;c<e;c++){g=f[c];d=qfb(a.g,g,null,a.b);Pfb(d,true)}if(a.b==0&&!a.a.Kf()&&a.a.Jf()){b=qfb(a.g,a.a.vf(),null,1);Pfb(b,true)}}
function gh(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].Jd()&&(c=fh(c,g)):g[0].Kd()}catch(a){a=GG(a);if(fs(a,11)){d=a;Jg();Sg(d,true)}else throw HG(a)}}return c}
function rV(a){var b;if(a._){!!a.$&&hQ(a.$,false);a.$=new KQ;mQ(a.$,a.Q.a);Ze(a.$,pHb,true);b=new AM;iM(b,new LM(new SH(QH(new RH).a.a),new FV(a)));pL(a.$,b);R6((Wg(),Vg),new HV(a))}}
function Hqb(a,b){var c,d,e;e=a.e;if(b==0||a.e==0){return}d=b>>5;a.d-=d;if(!Mqb(a.a,a.d,a.a,d,b&31)&&e<0){for(c=0;c<a.d&&a.a[c]==-1;c++){a.a[c]=0}c==a.d&&++a.d;++a.a[c]}bqb(a);a.b=-2}
function Jqb(a,b,c,d){var e,f,g;if(d==0){ipb(b,0,a,c,a.length-c)}else{g=32-d;a[a.length-1]=0;for(f=a.length-1;f>c;f--){a[f]|=b[f-c-1]>>>g;a[f-1]=b[f-c-1]<<d}}for(e=0;e<c;e++){a[e]=0}}
function $f(a,b){fDb(b,'Cannot suppress a null exception.');aDb(b!=a,'Exception can not suppress itself.');if(a.g){return}a.j==null?(a.j=rr(mr(wE,1),zDb,11,0,[b])):(a.j[a.j.length]=b)}
function Ng(b,c,d){var e,f;e=Lg();try{if(Xf){try{return Kg(b,c,d)}catch(a){a=GG(a);if(fs(a,11)){f=a;Sg(f,true);return undefined}else throw HG(a)}}else{return Kg(b,c,d)}}finally{Og(e)}}
function YW(a,b){var c,d;a.r!=-1&&_h(a.u[a.r],BHb);a.r=b-1;c=a.u[a.r];Mh(c,BHb);if(a.s>a.r){VW(a,a.r)}else if(Qh(a.k)<(mi(),li).Wd(c)+((c.offsetWidth||0)|0)&&!a.d){d=TW(a,a.r);VW(a,d)}}
function Omb(a,b){var c,d;if(b.length==0){return a}c=null;d=Cob(a,Tob(35));if(d!=-1){c=a.substr(d);a=a.substr(0,d)}a.indexOf('?')!=-1?(a+='&'):(a+='?');a+=b;c!=null&&(a+=''+c);return a}
function jq(b,c){var d,e;!c.e||c.le();e=c.f;un(c,b.b);try{rq(b.a,c)}catch(a){a=GG(a);if(fs(a,88)){d=a;throw HG(new Hq(d.a))}else throw HG(a)}finally{e==null?(c.e=true,c.f=null):(c.f=e)}}
function sQ(b){try{var c=$wnd.document.body;var d=c.currentStyle?c.currentStyle:getComputedStyle(c);if(d&&d.position=='relative'){return c.getBoundingClientRect()[b]}}catch(a){}return 0}
function P$(a,b){var c,d,e,f,g;for(f=(g=(new Etb(a.Eb)).a.qg().Oe(),new Jtb(g));f.a.Ze();){e=(c=f.a.$e(),c.Bg());d=CGb+e.c+DGb+e.k;!!b&&jsb(b.a,d)?PP(e):!!a.tb&&a.tb.contains(d)&&KP(e)}}
function O$(a,b){var c,d,e,f,g;for(f=(g=(new Etb(a.Eb)).a.qg().Oe(),new Jtb(g));f.a.Ze();){e=(c=f.a.$e(),c.Bg());d=CGb+e.c+DGb+e.k;!!b&&ryb(b.e,d)?OP(e):!!a.r&&a.r.containsKey(d)&&JP(e)}}
function Z3(){var a=document.createElement(zIb);var b=['animation','oAnimation','mozAnimation','webkitAnimation'];for(var c=0;c<b.length;c++){if(a.style[b[c]]!==undefined){return b[c]}}}
function Tob(a){var b,c;if(a>=SDb){b=55296+(a-SDb>>10&1023)&TDb;c=56320+(a-SDb&1023)&TDb;return String.fromCharCode(b)+(''+String.fromCharCode(c))}else{return String.fromCharCode(a&TDb)}}
function k0(a){BT(a);j1((!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C),true);C5(a.D.e,Pe((!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C)),a.e);!!a.c&&a.c.clear();a.j.a=or(oE,zDb,1,0,5,1);!!a.b&&BP(a.b.a)}
function Kab(a,b){var c,d,e;if(a.b.a.length!=0){for(d=new Nub(a.b);d.a<d.c.a.length;){c=Lub(d);e=null.Ng();if(Aob(b.substr(0,e.length),e)){Oab(a,null.Og+' '+null.Og);mub(a.b,c);return}}}}
function qBb(a,b){var c,d,e,f;c=isb(a.a,b);if(!c){d=new PBb(b);e=(ABb(),xBb)?null:d.c;f=Oob(e,0,$wnd.Math.max(0,Fob(e,Tob(46))));LBb(d,qBb(a,f));lsb(a.a,xBb?null:d.c,d);return d}return c}
function R$(a,b){var c,d,e,f;e=CGb+b.col1+DGb+b.row1;f=hsb(a.Eb,kob(b.id));msb(a.Jb,b);Q$(a,b,f);d=f.d;if(jsb(a.b,e)){c=isb(a.b,e);Aob(pk(d.style),($k(),GEb))?(hQ(c,false),Kh(c.i)):SQ(c)}}
function L5(){var b;K5();var a;for(null.Ng();null.Ng();){a=null.Ng();b=null.Og;jsb(J5,b)&&nsb(J5,b);EBb(QBb((nnb(cA),cA.k)),'Received locale data for '+b);lsb(J5,b,a);psb(J5)==1&&undefined}}
function $7(a,b,c){var d,e,f,g,h;for(f=(omb(),rr(mr(HD,1),zDb,84,0,[lmb,nmb,kmb,jmb,mmb])),g=0,h=f.length;g<h;++g){e=f[g];d=b+'-'+Pob(e.b!=null?e.b:''+e.c,(Ezb(),Czb));c==e?Mh(a,d):_h(a,d)}}
function Nab(a,b,c){var d;d=a.a[b];switch(d.d){case 0:Gab(d,c,a.c);break;case 1:!!c&&fub(d.a,c);break;case 3:!!c&&JBb(QBb((nnb(IB),IB.k)),(KAb(),IAb),'Error loading deferred bundle',null);}}
function Jxb(){Jxb=mH;Hxb=rr(mr(uE,1),RDb,2,6,['Sun','Mon','Tue','Wed','Thu','Fri','Sat']);Ixb=rr(mr(uE,1),RDb,2,6,['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])}
function kH(){jH={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'});function b(){return (new Date).getTime()}
!Date.now&&(Date.now=b)}
function Rob(a){var b,c,d;c=a.length;d=0;while(d<c&&(lDb(d,a.length),a.charCodeAt(d)<=32)){++d}b=c;while(b>d&&(lDb(b-1,a.length),a.charCodeAt(b-1)<=32)){--b}return d>0||b<c?a.substr(d,b-d):a}
function SK(b,c){QK();var d,e,f,g;d=null;for(g=n6(b);g.Ze();){f=g.$e();try{c.Qe(f)}catch(a){a=GG(a);if(fs(a,11)){e=a;!d&&(d=new Rxb);ksb(d.a,e,d)}else throw HG(a)}}if(d){throw HG(new RK(d))}}
function BO(){HK.call(this);this.d=(wI(),Lj($doc));this.c=Ij($doc);Dh(this.d,HI(this.c));Ve(this,this.d);this.a=(KL(),HL);this.b=(NL(),ML);this.d['cellSpacing']='0';this.d['cellPadding']='0'}
function T4(){F4();var a;this.a=new Llb(U4());if(this.a.j){a=I4();a!=-1&&Klb(this.a,a)}this.a.e?(this.b=BFb in window):this.a.j?(this.b=!!navigator.msMaxTouchPoints):(this.b=!this.a.p&&G4())}
function _X(a){var b,c;if(a.K.a.length==0){return 0}b=0;while(w1(a.a,b+1)){++b}c=new Q5;!!a.ib&&a.ib.a.length>0&&b<=a.ib.a.length?N5(c,iub(a.ib,b),false):N5(c,iub(a.K,b),false);return ms(c.c)}
function lY(a){var b,c;if(a.gc.a.length==0){return 0}b=0;while(x1(a.a,b+1)){++b}c=new Q5;!!a.jb&&a.jb.a.length>0&&b<=a.jb.a.length?N5(c,iub(a.jb,b),false):N5(c,iub(a.gc,b),false);return ms(c.f)}
function $ab(c){var d={setter:function(a,b){a.n=enb(b)},getter:function(a){return hnb(a.n)}};c._f(OD,hKb,d);var d={setter:function(a,b){a.nb=b},getter:function(a){return a.nb}};c._f(uD,IEb,d)}
function Adb(a){var b,c,d,e,f;if(a.k<3){HBb(QBb((nnb(jC),jC.k)),'Not enough data for speed calculation');return 0}d=a.k%3;b=a.s[d];c=a.b[d];d+=3;--d;d=d%3;e=a.s[d];f=a.b[d];return (b-e)/(f-c)}
function Plb(a,b){var c;if(!fs(b,193)){return false}c=b;if(!Qmb(a.a,c.a)){return false}if(!Qmb(a.b,c.b)){return false}if(!Qmb(a.c,c.c)){return false}if(!Qmb(a.d,c.d)){return false}return true}
function TP(a){a.d.style[sGb]=(Rl(),sFb);if(a.o==null||a.o.length==0){ei(a.d,'');a.d.style[gFb]=''}else{a.d.style[gFb]='1';a.f&&a.hf()>0&&VY(a.n,a.b,a.o)>a.hf()?ei(a.d,'###'):ei(a.d,a.o)}HP(a)}
function DT(a,b,c,d){var e,f;Aob(c.substr(0,1),'-')?(f='-'.length,Aob(b.substr(b.length-f,f),'-')&&Lob(c,'-','')):(e='-'.length,Aob(b.substr(b.length-e,e),'-')||(b+='-'));a.Ef().pd(b+(''+c),d)}
function v6(a,b,c){var d,e,f,g;d=c;g=(wI(),b.Vc);while(!!d&&d!=g){c5(a.b,d.tkPid);f=d.vOwnerPid;f!=null&&c5(a.b,f);d=pi((mi(),d))}e=(H7(),J7(c,yC));return !!e&&!!e.w?v6(a,wT(a.n),Pe(e.w)):null}
function Mnb(a){Knb==null&&(Knb=new RegExp('^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$'));if(!Knb.test(a)){throw HG(new sob(MDb+a+'"'))}return parseFloat(a)}
function Pr(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|a.l>>22-b;e=a.h<<b|a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return wr(c&MFb,d&MFb,e&IDb)}
function EW(h,a){var b=a.length;var c=0;var d=0;var e=0;var f=0;var g=0;while(c<b){d=a.charCodeAt(c);d===32?(e=e+1):d>47&&d<58&&(e===0?(g=g*10+d-48):(f=f*10+d-48));if(e===2){break}c++}h.b=f;h.a=g}
function wf(a,b){var c;c=a.Uc;if(!b){try{!!c&&c.ud()&&a.xd()}finally{a.Uc=null}}else{if(c){throw HG(new $nb('Cannot set a new parent without first clearing the old parent'))}a.Uc=b;b.ud()&&a.vd()}}
function eM(a,b,c,d){var e,f,g,h;h=(wI(),a.Vc);g=Cj($doc);g.text=b;g.removeAttribute(kGb);g.value=c;f=(mi(),h).options.length;(d<0||d>f)&&(d=f);if(d==f){ui(h,g,null)}else{e=h.options[d];ui(h,g,e)}}
function iR(a,b){if(a.b==b){return}if(b){a.a.innerHTML='+';gf((wI(),a.Vc),'minus',false);gf(a.Vc,'plus',true)}else{a.a.innerHTML='&#x2212;';gf((wI(),a.Vc),'plus',false);gf(a.Vc,'minus',true)}a.b=b}
function ffb(a,b){var c;switch(NI(b.d)){case 16:jfb(a);break;case 32:c=gk(b.d);jfb(c);break;case 64:case ZFb:kk(b.d);break;case HDb:kk(b.d);RI((PN(),$doc.body));break;case 8:RI((PN(),$doc.body));}}
function TW(a,b){var c;c=((a.k.offsetWidth||0)|0)-((a.i.offsetWidth||0)|0);Aob(pk(a.f.style),GEb)||(c-=(a.f.offsetWidth||0)|0);c=ms(c-UW(a,b));while(b>0&&c-UW(a,b-1)>0){--b;c=ms(c-UW(a,b))}return b}
function scb(a,b,c){var d,e,f,g;d=(!Iab&&(Iab=new Vab),Iab).c.g[(new mcb(b)).b];if(!d){d={};a.g[(new mcb(b)).b]=d}for(f=new ewb(n6(c.c.b));f.b.Ze();){e=f.b.$e();g=d[e];if(!g){g=[];d[e]=g}g.push(c)}}
function zgb(a,b,c){var d,e,f,g,h,i,j;if(a==null||a.length==0||Aob(NDb,a)){return null}f=Tmb(a);d=new Kxb;for(e=0;e<(i=Vmb(f),i).length;e++){g=(h=Vmb(f),h)[e];j=f[g];ksb(d,b.fg(g),c.fg(j))}return d}
function OR(a){var b,c,d,e;for(c=(e=(new ttb(a.F.a)).a.qg().Oe(),new ztb(e));c.a.Ze();){b=(d=c.a.$e(),d.Ag());b.d.style[UGb]='';b.d.style[VGb]=''}osb(a.F.a);a.i.a=or(oE,zDb,1,0,5,1);osb(a.D);Ih(a.r)}
function f9(a){var b,c,d;if(a.e.a.length==0){return false}d=null;for(c=new Nub(a.e);c.a<c.c.a.length;){b=Lub(c);if(g9(a,d9(b.a))){d=b;break}}if(d){mub(a.e,d);e9(a,d.a);return true}else{return false}}
function Wub(a,b,c,d,e){var f,g,h,i;f=d-c;if(f<7){Tub(b,c,d);return}h=c+e;g=d+e;i=h+(g-h>>1);Wub(b,a,h,i,-e);Wub(b,a,i,g,-e);if(sxb(a[i-1],a[i])<=0){while(c<d){b[c++]=a[h++]}return}Uub(a,h,i,g,b,c,d)}
function wg(a){var b;if(a.c==null){b=ls(a.b)===ls(ug)?null:a.b;a.d=b==null?NDb:is(b)?b==null?null:b.name:ks(b)?'String':onb(T(b));a.a=a.a+': '+(is(b)?b==null?null:b.message:b+'');a.c='('+a.d+') '+a.a}}
function Mqb(a,b,c,d,e){var f,g,h;f=true;for(g=0;g<d;g++){f=f&c[g]==0}if(e==0){ipb(c,d,a,0,b);g=b}else{h=32-e;f=f&c[g]<<h==0;for(g=0;g<b-1;g++){a[g]=c[g+d]>>>e|c[g+d+1]<<h}a[g]=c[g+d]>>>e;++g}return f}
function cg(a,b,c,d){var e,f,g,h,i;b.Ce(d+c+a);dg(a,b,d);for(f=(a.j==null&&(a.j=or(wE,zDb,11,0,0,1)),a.j),g=0,h=f.length;g<h;++g){e=f[g];cg(e,b,'Suppressed: ','\t'+d)}i=a.e;!!i&&cg(i,b,'Caused by: ',d)}
function Rr(a,b){var c,d,e,f;b&=63;c=a.h&IDb;if(b<22){f=c>>>b;e=a.m>>b|c<<22-b;d=a.l>>b|a.m<<22-b}else if(b<44){f=0;e=c>>>b-22;d=a.m>>b-22|a.h<<44-b}else{f=0;e=0;d=c>>>b-44}return wr(d&MFb,e&MFb,f&IDb)}
function zN(a,b){var c,d,e,f,g,h;a.i||(b=1-b);g=0;e=0;f=0;c=0;d=ms(b*a.d);h=ms(b*a.e);switch(0){case 0:g=a.d-d>>1;e=a.e-h>>1;f=e+h;c=g+d;}(PM(),OM).gf(Pe(a.a),'rect('+g+'px, '+f+'px, '+c+'px, '+e+'px)')}
function cV(a,b,c,d){var e,f;f=0;e=0;if(c<0){if(b>1){while(b>1&&e>c){--b;e-=a[b-1]}d&&e<c&&++b;f=b}else{f=1}}else{if(b<a.length){while(b<=a.length&&e<c){e+=a[b-1];++b}f=b}else{f=a.length}}return d?f:f-1}
function L4(a){if(a.a.t==5){return 'v-android'}else if(a.a.t==4){return 'v-ios v-ios'+a.a.u}else if(a.a.t==1){return 'v-win'}else if(a.a.t==3){return 'v-lin'}else if(a.a.t==2){return 'v-mac'}return null}
function Y7(a,b){H7();if(!b){a.ondrag=function(){return false};a.onselectstart=function(){return false};a.style.webkitUserSelect=GEb}else{a.ondrag=null;a.onselectstart=null;a.style.webkitUserSelect=DEb}}
function jfb(b){var c,d;try{d=(H7(),J7(b,null));if(!d){return null}while(true){d=d.Uc;if(!d){break}}if(!d){return null}else{c=d.Ng();return c}}catch(a){a=GG(a);if(fs(a,17)){return null}else throw HG(a)}}
function BX(a){var b,c,d,e;PQ(a.q);for(c=(e=(new Etb(a.b)).a.qg().Oe(),new Jtb(e));c.a.Ze();){b=(d=c.a.$e(),d.Bg());hQ(b,false);Kh(b.i)}osb(a.b);!!a.r&&a.r.clear();!!a.i&&a.i.clear();!!a.tb&&a.tb.clear()}
function jT(a,b){var c,d,e,f,g,h,i,j,k;a.Af(iT(a));c=Fcb(a.Kg);if(c){e=new Rxb;k=g5(c);for(d=0;d<k.length;d++){j=k[d];if(b.Yf(j)){i=c[j];for(f=0;f<i.length;f++){g=i[f];h=ksb(e.a,g,e);h==null&&ccb(g,b)}}}}}
function rW(a,b,c){var d;a.b=b;a.a=c;d=b.sb;of(d,a,(co(),co(),bo));of(d,a,(En(),En(),Dn));of(d,a,(ro(),ro(),qo));of(d,a,(ko(),ko(),jo));of(d,a,(Ln(),Ln(),Kn));of(d,a,(Mo(),Mo(),Lo));of(d,a,(fp(),fp(),ep))}
function oM(a,b,c){var d,e;if(c<0||c>a.b.a.length){throw HG(new _mb)}eub(a.b,c,b);e=0;for(d=0;d<c;d++){fs(iub(a.b,d),106)&&++e}eub(a.f,e,b);jM(a,c,(wI(),b.Vc));Ze(b,df(b.Vc)+'-'+lGb,false);zM(a,b);return b}
function WY(a){var b,c;b=-Yh(a.xc);c=-((a.xc.scrollTop||0)|0);a.Nc.style[HGb]=b+(Im(),qGb);a.I.style[HGb]=b+qGb;a.c.style[IGb]=c+qGb;a.ec.style[IGb]=c+qGb;a.D.style[HGb]=b-a.g+qGb;a.ac.style[IGb]=c-a.f+qGb}
function z$(a){var b,c,d,e,f;if(!a.tb){return}if(a.b){for(d=new Ksb((new Csb(a.b)).a);d.b;){c=Jsb(d);f=c.Ag();b=c.Bg();e=a.tb.contains(f)?a.ub:null;WQ(b,e)}}if(a.q){e=a.tb.contains(a.j)?a.ub:null;WQ(a.q,e)}}
function Mjb(b,c){if(!b){return}var d=[];for(var e=0;e<c.length;e++){var f=c[e];var g=Object.getOwnPropertyNames(f).find(function(a){return /^(a|value_0|value.*g\$)$/.test(a)});var h=g?f[g]:f;d.push(h)}b(d)}
function kZ(a,b,c){var d,e,f;if(b.col1<=a.ob&&b.col2>a.ob){d=a.a.g;f=dV(d,b.col1,a.ob+1);e=dV(d,a.ob+1,b.col2+1)-Yh(a.xc)+1;if(e>0){f+=e;c.d.style[YGb]=''}else{c.d.style[YGb]='0'}c.d.style[IEb]=f+(Im(),qGb)}}
function Heb(a){var b,c,d;c=Geb(-1,null.Ng());d=(PM(),OM).ff((wI(),wI(),Uh(c.Vc))).className||'';Ze(c,df(OM.ff((null,Uh(c.Vc))))+'-'+a,true);b=OM.ff((null,Uh(c.Vc))).className||'';return Rob(Nob(b,d.length))}
function kM(a){var b,c,d;wM(a,null);b=a.i?a.d:zI(a.d);while(wI(),uI.Ge(b)>0){Jh(b,uI.Fe(b,0))}for(d=new Nub(a.b);d.a<d.c.a.length;){c=Lub(d);c.Vc['colSpan']=1}a.f.a=or(oE,zDb,1,0,5,1);a.b.a=or(oE,zDb,1,0,5,1)}
function $k(){$k=mH;Pk=new bl;Hk=new xl;Kk=new zl;Lk=new Bl;Nk=new Dl;Ok=new Fl;Qk=new Hl;Rk=new Jl;Sk=new Ll;Vk=new dl;Xk=new fl;Wk=new hl;Zk=new jl;Tk=new ll;Uk=new nl;Yk=new pl;Jk=new rl;Ik=new tl;Mk=new vl}
function Gq(a){var b,c,d,e,f;c=a.size();if(c==0){return null}b=new epb(c==1?'Exception caught: ':c+' exceptions caught: ');d=true;for(f=n6(a);f.Ze();){e=f.$e();d?(d=false):(b.a+='; ',b);apb(b,e.Gd())}return b.a}
function FO(a,b,c){var d,e,f;if(c<0||c>a.c){throw HG(new _mb)}if(a.c==a.a.length){f=or(Jx,zDb,13,a.a.length*2,0,1);for(e=0;e<a.a.length;++e){f[e]=a.a[e]}a.a=f}++a.c;for(d=a.c-1;d>c;--d){a.a[d]=a.a[d-1]}a.a[c]=b}
function X3(a,b){T3();if(a._vaadin_animationend_callbacks){var c=a._vaadin_animationend_callbacks;for(var d=0;d<c.length;d++){if(c[d].listener==b){a.removeEventListener(S3,c[d],false);return true}}return false}}
function qb(a){var b,c,d,e,f,g;b=or(ws,{833:1,3:1},195,a.a.a.length,0,1);b=nub(a.a,b);c=new Wf;for(e=b,f=0,g=e.length;f<g;++f){d=e[f];mub(a.a,d);fb(d.a,c.b)}a.a.a.length>0&&ub(a.b,$wnd.Math.max(5,16-(Dg()-c.b)))}
function AR(a,b){lO();mO.call(this,Mj($doc));(wI(),this.Vc).className='gwt-TextArea';this.c=a;this.a=b;this.Vc.style[$Eb]=(am(),aFb);this.Vc.style[gFb]='1';this.Vc.style[gGb]=(Im(),'-1000.0px');tk(this.Vc.style)}
function fY(a){var b,c,d,e,f,g;g=a.bb;b=Ph(a.xc);e=new oub;f=0;for(f=0;f<a.ic.a.length;f++){x1(a.a,f+1)||(e=iub(a.ic,f))}for(d=new Nub(e);d.a<d.c.a.length;){c=Lub(d);if(Ph(c.d)>=b){return g}else{++g}}return a.bb}
function byb(a,b,c){var d,e,f,g;g=b==null?0:a.b.sg(b);e=(d=a.a.get(g),d==null?new Array:d);if(e.length==0){a.a.set(g,e)}else{f=$xb(a,b,e);if(f){return f.Cg(c)}}e[e.length]=new Utb(b,c);++a.c;xxb(a.b);return null}
function CBb(a,b){var c,d,e,f,g,h,i,j;for(e=GBb(a),g=0,i=e.length;g<i;++g){c=e[g];c.Be(b)}j=!xBb&&a.e?xBb?null:a.d:null;while(j){for(d=GBb(j),f=0,h=d.length;f<h;++f){c=d[f];c.Be(b)}j=!xBb&&j.e?xBb?null:j.d:null}}
function TQ(a,b){BL(a.a,b);QQ(a.a);Se(a.f)&&(Se(a.a)||Se(a.g)||Aob(($k(),kFb),pk(a.e.style)))?(Re(a.f).className||'').indexOf(QGb)!=-1||Ze(a.f,QGb,true):(Re(a.f).className||'').indexOf(QGb)!=-1&&Ze(a.f,QGb,false)}
function UQ(a,b){BL(a.g,b);QQ(a.g);Se(a.f)&&(Se(a.a)||Se(a.g)||Aob(($k(),kFb),pk(a.e.style)))?(Re(a.f).className||'').indexOf(QGb)!=-1||Ze(a.f,QGb,true):(Re(a.f).className||'').indexOf(QGb)!=-1&&Ze(a.f,QGb,false)}
function WQ(a,b){BL(a.f,b);QQ(a.f);Se(a.f)&&(Se(a.a)||Se(a.g)||Aob(($k(),kFb),pk(a.e.style)))?(Re(a.f).className||'').indexOf(QGb)!=-1||Ze(a.f,QGb,true):(Re(a.f).className||'').indexOf(QGb)!=-1&&Ze(a.f,QGb,false)}
function vZ(a,b,c,d,e){var f,g,h,i;DX(a);for(i=d;i<=e;i++){for(f=b;f<=c;f++){if(a.pc!=f||a.qc!=i){g=XX(a,f,i);Oxb(a.u,new V_(f,i));if(g){Oxb(a.t,g);Mh(g.d,EHb)}h=gY(a,CGb+f+DGb+i);if(h){Oxb(a.t,h);Mh(h.d,EHb)}}}}}
function Z0(a,b,c){var d,e,f,g,h;h=H0(a.a);if(h==null||h.length==0){return}a.d=b;a.f=c;kM(a.e);for(e=h,f=0,g=e.length;f<g;++f){d=e[f];iM(a.e,new MM(Y_(d),d))}Z7(Pe(a.e));a.c=M7();YM(a,'');jQ(a,1);$M(a,new heb(a))}
function _h(a,b){var c,d,e,f,g;b=ki(b);g=a.className||'';e=ii(g,b);if(e!=-1){c=Rob(g.substr(0,e));d=Rob(Nob(g,e+b.length));c.length==0?(f=d):d.length==0?(f=c):(f=c+' '+d);a.className=f||'';return true}return false}
function CT(a,b){a.Ef().pd('v-disabled',!b);fs(a.Ef(),80)&&a.Ef().Ad(b);!fs(a,148)&&NBb(QBb((nnb(YB),YB.k)),'Parent of connector '+w6(a)+' is null. This is typically an indication of a broken component hierarchy')}
function x5(a){var b,c,d,e;for(c=(e=(new ttb(a.f.a)).a.qg().Oe(),new ztb(e));c.a.Ze();){b=(d=c.a.$e(),d.Ag());y5(a,b,b.vMeasuredSize||null)}HBb(QBb((nnb(bA),bA.k)),'Measured '+psb(a.f.a)+' non connector elements')}
function x7(a,b){var c,d,e;c=DQ(a.b);d=v6(c,(PN(),TN()),b);e=null;while(d){e=d.Df(b);if(!!e&&(e.d!=null&&e.d.length!=0||e.c!=null&&e.c.length!=0)){break}d.wf();d=null;e=null;break}if(!!d&&!!e){return e}return null}
function Ilb(b,c){var d,e;d=Cob(c,Tob(46));d<0&&(d=c.length);b.b=Nnb(Jlb(c,0,d),10);e=Dob(c,Tob(46),d+1);e<0&&(e=c.length);try{b.c=Nnb(Kob(Jlb(c,d+1,e),'[^0-9].*',''),10)}catch(a){a=GG(a);if(!fs(a,48))throw HG(a)}}
function PW(a){var b,c,d;a.d=false;Kh(a.g);c=a.u[a.r];c.style[IEb]='';d=a.g.value;if(bX(d)&&!Aob(a.b,d)){for(b=0;b<a.u.length;b++){if(Aob(d,Vh(a.u[b]))){ZW(c,a.b);return}}h2(a.e,a.r,d);ZW(c,d);_W(a)}else{ZW(c,a.b)}}
function r$(a,b){var c,d;RI((wI(),a.Vc));a.Sb.className=THb;_h(a.Tb,CGb+a.Yb);Pe(a.wc).style[HGb]='';if(a.Xb){c=new Kxb;d=b-a.Qb;d<0&&(d=0);d!=r1(a.a,a.Yb)&&ksb(c,kob(a.Yb),kob(d));c.d.c+c.e.c==0||P1(a.a,c)}a.Yb=-1}
function v$(a,b){u$(a);RI(a.xc);(a.pc!=a.Hc||a.qc!=a.Ic)&&a.Hc!=-1&&a.Ic!=-1?Q1(a.a,a.pc,a.Hc,a.qc,a.Ic):E1(a.a,a.Hc,a.Ic,(Vh((mi(),li).Ud(b)),!!b.shiftKey),!!b.metaKey||!!b.ctrlKey,true);a.vc=false;a.Hc=-1;a.Ic=-1}
function mab(a,b){if(a.b){return true}else if(a.c){return tab(b,a.c)}else{if(a.a){return j5(a.a,b)}else{throw HG(new $nb('StateChangeEvent should have either stateJson, changedProperties or changePropertiesSet'))}}}
function HH(a,b){var c,d,e;c=new cpb;apb(c,(d=new Bxb(b.c),e=new cpb,apb(e,zxb(d)),e.a+=' ',apb(e,b.b),e.a+='\n',apb(e,b.a.kg()),e.a+=': ',e.a));apb(c,b.d);if(a.a&&!!b.e){c.a+='\n';cg(b.e,new MH(c),'','')}return c.a}
function j8(a){var b,c;if(m8()){g8(a.a)}else{b=(b4(),false?(c='vaadinPush.debug.js'):(c='vaadinPush.js'),c+=(Nlb(),'?v='+Mlb),c);HBb(QBb((nnb(EA),EA.k)),'Loading '+b);_5((Y5(),Y5(),X5),null.Ng().Ng()+b,new w8(b,a))}}
function qfb(a,b,c,d){var e,f;e=a.a[d];f=e[b];if(!f){if(!c){c=null.Ng();if(!c){OBb(QBb((nnb(HC),HC.k)),'No connector found for id '+b+' while creating LayoutDependency');return null}}f=new Qfb(a,c,d);e[b]=f}return f}
function WCb(a,b,c,d,e,f){var g,h,i,j,k;if(ls(a)===ls(c)){a=a.slice(b,b+e);b=0}i=c;for(h=b,j=b+e;h<j;){g=$wnd.Math.min(h+10000,j);e=g-h;k=a.slice(h,g);k.splice(0,0,d,f?e:0);Array.prototype.splice.apply(i,k);h=g;d+=e}}
function tf(a){if(!a.ud()){throw HG(new $nb("Should only call onDetach when the widget is attached to the browser's document"))}try{a.zd();Op(a,false)}finally{try{a.sd()}finally{wI();a.Vc.__listener=null;a.Rc=false}}}
function BZ(a){var b,c;if(a.ob<a.ib.a.length){while(a.ib.a.length>a.ob){Kh(lub(a.ib,a.ib.a.length-1))}}else{for(c=a.ib.a.length+1;c<=a.ob;c++){b=wj($doc);di(b,p1(c)+XHb);b.className=WHb+c||'';fub(a.ib,b);Dh(a.Lc,b)}}}
function $4(a){if(a.nodeType!=1){return {}}if($wnd.document.defaultView&&$wnd.document.defaultView.getComputedStyle){return $wnd.document.defaultView.getComputedStyle(a,null)}if(a.currentStyle){return a.currentStyle}}
function pq(a,b,c){var d;if(!b){throw HG(new qob('Cannot add a handler with a null type'))}if(!c){throw HG(new qob('Cannot add a null handler'))}a.b>0?oq(a,new DP(a,b,c)):(d=tq(a,b,null),d.add(c));return new CP(a,b,c)}
function r3(a,b,c,d){var e;if(!a.W._){e=ZX(a.W,b,c);if(e!=null&&e.length!=0){cS(a.v,e);N$(a.W,'='+e)}else{dS(a.v,hY(a.W,b,c))}}a.e=FY(a.W,b,c);a.p?QX(a.W,T0(a.q,pY(a.W))):fS(a.v,!a.e);d!=null?hS(a.v,d):hS(a.v,k1(b,c))}
function V3(a){T3();if(a.webkitAnimationName)return a.webkitAnimationName;if(a.animationName)return a.animationName;if(a.mozAnimationName)return a.mozAnimationName;if(a.oAnimationName)return a.oAnimationName;return ''}
function ii(a,b){var c,d,e;c=a.indexOf(b);while(c!=-1){if(c==0||(lDb(c-1,a.length),a.charCodeAt(c-1)==32)){d=c+b.length;e=a.length;if(d==e||d<e&&(lDb(d,a.length),a.charCodeAt(d)==32)){break}}c=a.indexOf(b,c+1)}return c}
function gQ(a){var b;if(!a.B&&(b=(F4(),!E4&&(E4=new T4),F4(),E4),b.a.j&&O4(b))){a.B=yj($doc);a.B.style[$Eb]=(am(),aFb);a.B.style['borderStyle']=(zk(),GEb);a.B.tabIndex=-1;a.B.frameBorder=0;a.B.marginHeight=0}return a.B}
function gS(a,b){var c,d,e;mk(Pe(a.B));$L(a.B,'');if(!!b&&b.a.length!=0){_e(a.B,true);_e(a.C,true);for(d=new Nub(b);d.a<d.c.a.length;){c=Lub(d);$L(a.B,c)}nS(a,(e=fO(a.a),e==null?'':e))}else{_e(a.B,false);_e(a.C,false)}}
function Kpb(a){var b,c;if(a>-140737488355328&&a<140737488355328){if(a==0){return 0}b=a<0;b&&(a=-a);c=ms($wnd.Math.floor($wnd.Math.log(a)/0.6931471805599453));(!b||a!=$wnd.Math.pow(2,c))&&++c;return c}return Lpb(OG(a))}
function c3(a,b){if(a.U!=b){a.U=b;b?gf((wI(),a.Vc),'protected',true):gf((wI(),a.Vc),'protected',false);if(a.D){if(b){if(a.p){a.p=false;rZ(a.W)}}else{a.e=false;UU(a.R);if(a.p){Qjb(a.X,a.W.qc,a.W.pc,false);ub(a.t,200)}}}}}
function Ydb(a,b){var c,d,e,f,g,h,i;if(a.b){for(f=(i=(new ttb(a.a.p.a)).a.qg().Oe(),new ztb(i));f.a.Ze();){c=(h=f.a.$e(),h.Ag());_h(c,lKb)}osb(a.a.p.a)}for(d=b,e=0,g=d.length;e<g;++e){c=d[e];Mh(c,lKb);a.b&&Oxb(a.a.p,c)}}
function Xi(a,b){if(Element.prototype.getBoundingClientRect){return b.getBoundingClientRect().top+a.scrollTop|0}else{var c=b.ownerDocument;return c.getBoxObjectFor(b).screenY-c.getBoxObjectFor(c.documentElement).screenY}}
function Wi(a,b){if(Element.prototype.getBoundingClientRect){return b.getBoundingClientRect().left+a.scrollLeft|0}else{var c=b.ownerDocument;return c.getBoxObjectFor(b).screenX-c.getBoxObjectFor(c.documentElement).screenX}}
function MX(a,b,c){var d,e,f,g,h,i,j;h=new Rxb;for(e=new Ksb((new Csb(a.zc)).a);e.b;){d=Jsb(e);g=d.Bg();Oxb(h,''+g.b)}j=or(uE,RDb,2,psb(h.a),6,1);xrb(h,j);i=BW(b,j);for(f=0;f<i.length;f++){jub(c,i[f],0)!=-1||fub(c,i[f])}}
function U3(b,c){T3();var d=vDb(function(a){c.Nf(a)});d.listener=c;b.addEventListener(S3,d,false);!b._vaadin_animationend_callbacks&&(b._vaadin_animationend_callbacks=[]);b._vaadin_animationend_callbacks.push(d);return d}
function UV(a,b){switch(wI(),QJ((mi(),b).type)){case YFb:if(b.touches.length>1){return}case 4:_U(a.F,b);break;case 8:case HDb:case $Fb:GI(a.Vc);case 8192:tV(a.F);break;case 64:hV(a.F,b);break;case ZFb:hV(a.F,b);li.Vd(b);}}
function Rub(a,b){var c,d,e;if(ls(a)===ls(b)){return true}if(a==null||b==null){return false}if(a.length!=b.length){return false}for(c=0;c<a.length;++c){d=a[c];e=b[c];if(!(d==e||d!=null&&Aob(d,e))){return false}}return true}
function HQ(a){PM();var b,c,d;c=null.Ng();c+='-overlays';b=(wI(),Uj($doc,c));if(!b){b=wj($doc);b.id=c;d=wT(a.n).Uc.md().className||'';d!=null&&d.length!=0&&Mh(b,d);Mh(b,'v-overlay-container');Dh(Pe((PN(),TN())),b)}return b}
function cW(a,b,c,d,e){a.J.style[fFb]=(b&&!a.H?(Wm(),Vm):(Wm(),Um)).he();a.p.style[fFb]=(e&&!a.n?(Wm(),Vm):(Wm(),Um)).he();a.A.style[fFb]=(c&&!a.v?(Wm(),Vm):(Wm(),Um)).he();a.d.style[fFb]=(d&&!a.b?(Wm(),Vm):(Wm(),Um)).he()}
function VX(a){var b,c,d,e,f;b=new qub(a.Kc);for(e=new Nub(a.Oc);e.a<e.c.a.length;){c=Lub(e);gub(b,c)}for(f=new Nub(a.d);f.a<f.c.a.length;){c=Lub(f);gub(b,c)}for(d=new Nub(a.ic);d.a<d.c.a.length;){c=Lub(d);gub(b,c)}return b}
function Y3(){var a=document.createElement(zIb);var b={'animationName':AIb,'OAnimationName':'oAnimationEnd','MozAnimation':AIb,'WebkitAnimation':'webkitAnimationEnd'};for(var c in b){if(a.style[c]!==undefined){return b[c]}}}
function q7(a,b){var c,d,e,f,g,h;h=0;g=10+b;d=a.a.d?Ph(a.a.d):UIb;f=(uJ(),Zj($doc).clientWidth|0);e=f-d;e>g?(h=d):(h=d-b);h+b-Wj($doc)>f&&(h=f-b+Wj($doc));if(d!=UIb){c=$wnd.Math.max(1,Wj($doc));h=$wnd.Math.max(h,c)}return h}
function dj(){var a=/rv:([0-9]+)\.([0-9]+)(\.([0-9]+))?.*?/.exec(navigator.userAgent.toLowerCase());if(a&&a.length>=3){var b=parseInt(a[1])*XEb+parseInt(a[2])*YEb+parseInt(a.length>=5&&!isNaN(a[4])?a[4]:0);return b}return -1}
function jZ(a,b,c){var d,e,f;if(b.row1<=a.Qc&&b.row2>a.Qc){f=a.a.W.W;e=dV(f,b.row1,a.Qc+1);d=dV(f,a.Qc+1,b.row2+1)+1-((a.xc.scrollTop||0)|0);if(d>0){e+=d;c.d.style[ZGb]=''}else{c.d.style[ZGb]='0'}c.d.style[HEb]=e+(Im(),qGb)}}
function J7(a,b){H7();var c,d,e;if(a){c=null;while(!c&&!!a){c=(wI(),SJ(a));if(!c||!fs(c,13)){a=pi((mi(),a));c=null}}if(fs(c,13)){d=c;if(!b&&!!d){return d}while(d){e=d.Kg;while(e){if(e==b){return d}e=null}d=d.Uc}}}return null}
function qP(){function b(a){return parseInt(a[1])*YEb+parseInt(a[2])}
var c=navigator.userAgent;if(c.indexOf('Macintosh')!=-1){var d=/rv:([0-9]+)\.([0-9]+)/.exec(c);if(d&&d.length==3){if(b(d)<=1008){return true}}}return false}
function CZ(a){var b,c;if(a.Qc<a.jb.a.length){while(a.jb.a.length>a.Qc){Kh(lub(a.jb,a.jb.a.length-1))}}else{for(b=a.jb.a.length+1;b<=a.Qc;b++){c=wj($doc);c.innerHTML=''+b+XHb||'';c.className=YHb+b||'';fub(a.jb,c);Dh(a.Lc,c)}}}
function j$(a,b,c){var d,e,f,g;d=CGb+b+DGb+c;if(jsb(a.b,d)){return}g=gY(a,d);if(g){e=g.d}else{e=XX(a,b,c).d;XQ(a.q,pi((mi(),e)))}TQ(a.q,a.i.get(d));UQ(a.q,a.r.get(d));f=a.tb.contains(d)?a.ub:null;WQ(a.q,f);YQ(a.q,e,c,b);a.j=d}
function BW(a,b){var c=[];var d=a.sheet.cssRules?a.sheet.cssRules:a.sheet.rules;for(var e=0;e<d.length;e++){var f=d[e];for(var g=0;g<b.length;g++){f['selectorText'].indexOf('.row'+b[g]+',')!==-1&&c.push(f['cssText'])}}return c}
function Idb(a){if(a.c<0){zdb(a,0,a.c);a.c=0}else if(a.c>((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)){zdb(a,((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0),a.c);a.c=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)}else{Edb(a)}}
function Feb(){EQ.call(this);this.c=false;this.b=0;this.f=-1;this.g=-1;(PM(),OM).ff((wI(),wI(),Uh(this.Vc))).className='v-Notification';this.Sc==-1?KI(this.Vc,1|(this.Vc.__eventBits||0)):(this.Sc|=1);this.Vc.style[gFb]='20000'}
function Cpb(a){return a.e<=-32||a.e>(a.d>0?a.d:$wnd.Math.floor((a.a-1)*dLb)+1)?0:kqb(a.e==0||a.a==0&&a.f!=-1?(!a.c&&(a.c=Eqb(a.f)),a.c):a.e<0?lqb((!a.c&&(a.c=Eqb(a.f)),a.c),srb(-a.e)):cqb((!a.c&&(a.c=Eqb(a.f)),a.c),srb(a.e)))}
function nrb(a,b,c,d,e){var f,g,h,i;if(ls(a)===ls(b)&&d==e){trb(a,d,c);return}for(h=0;h<d;h++){g=0;f=a[h];for(i=0;i<e;i++){g=IG(IG(UG(JG(f,eLb),JG(b[i],eLb)),JG(c[h+i],eLb)),JG(bH(g),eLb));c[h+i]=bH(g);g=ZG(g,32)}c[h+e]=bH(g)}}
function Z(a,b){var c,d,e;c=a.r;d=b>=a.t+a.k;if(a.p&&!d){e=(b-a.t)/a.k;a.cd(a.$c(e));return a.o&&a.r==c}if(!a.p&&b>=a.t){a.p=true;a.bd();if(!(a.o&&a.r==c)){return false}}if(d){a.o=false;a.p=false;a.ad();return false}return true}
function AY(a,b){var c,d,e,f;e=a.a.M;f=b-e;c=b+a.mc+e;f<0&&(f=0);d=a.a.P;while(a.Ab<c&&a.zb<d){if(a.eb+mY(a,a.db)<f){a.eb+=mY(a,a.db);++a.db}++a.zb;a.Ab+=mY(a,a.zb)}while(f>a.eb+mY(a,a.db)&&a.db<d){a.eb+=mY(a,a.db);++a.db}EZ(a)}
function a8(a,b){switch(a.d.c){case 0:a.d=(G8(),F8);a.b=b;break;case 1:HBb(QBb((nnb(EA),EA.k)),'Closing push connection');l8(a.f);a.d=(G8(),E8);b.Kd();break;case 2:case 3:throw HG(new $nb('Can not disconnect more than once'));}}
function ohb(a,b){var c,d;c=b.row+'_'+b.col;if(!jsb(a.c,c)){lsb(a.c,c,d=new wU);lsb(a.a,c,new XT);lsb(a.b,c,b);pU(d,b.col);tU(d,b.row);qU(d,b.headerHidden);vU(d,a.f.W,Pe(a.f.W));sU(d,b.popupWidth);rU(d,b.popupHeight);c1(a.f,d)}}
function oH(a,b){var c=$wnd;if(a===''){return c}var d=a.split('.');!(d[0] in c)&&c.execScript&&c.execScript('var '+d[0]);if(b){var e=b.prototype.Kg;e.e=b}for(var f;d.length&&(f=d.shift());){c=c[f]=c[f]||!d.length&&b||{}}return c}
function o6(a){var b,c,d;c=a.b.length-2;if(c>a.a+1){d=m6(a.b,++a.a);switch(d){case 1:b=a.b[a.a+2];return b;case 2:case 0:return a.b[a.a+2];default:throw HG(new $nb('Illegal child  in tag '+a.b[0]+' at index '+a.a));}}return null}
function bL(a,b){var c;if(a.bb){throw HG(new $nb('Composite.initWidget() may only be called once.'))}if(!b){throw HG(new qob('widget cannot be null'))}fs(b,197)&&b;uf(b);c=(wI(),b.Vc);We(a,c);(HN(),EI(c))&&IN(c,a);a.bb=b;wf(b,a)}
function hob(a){var b,c,d;if(a<0){return 0}else if(a==0){return 32}else{d=-(a>>16);b=d>>16&16;c=16-b;a=a>>b;d=a-256;b=d>>16&8;c+=b;a<<=b;d=a-4096;b=d>>16&4;c+=b;a<<=b;d=a-PDb;b=d>>16&2;c+=b;a<<=b;d=a>>14;b=d&~(d>>1);return c+2-b}}
function mqb(a,b){var c;if(b<0){throw HG(new $mb('Negative exponent'))}if(b==0){return Vpb}else if(b==1||eqb(a,Vpb)||eqb(a,Zpb)){return a}if(!qqb(a,0)){c=1;while(!qqb(a,c)){++c}return lqb(Aqb(c*b),mqb(pqb(a,c),b))}return rrb(a,b)}
function dN(){sL.call(this);this.I=new rN;this.K=false;this.M=-1;this.Q=new BN(this);this.S=-1;Dh((wI(),this.Vc),OM.df());this.Xe(0,0);OM.ff((null,Uh(this.Vc))).className='gwt-PopupPanel';OM.ef(AI(this.Vc)).className='popupContent'}
function yT(a,b,c){var d;if(!!a.q&&!!a.q.e){return}Y7((wI(),b.Vc),false);if((F4(),!E4&&(E4=new T4),F4(),E4).a.t==5){return}U5(c.a,b.Vc);ek(c.a);a.q=new $cb(a);d=bk(c.a)[0];a.A=Hi((mi(),d).clientX||0);a.B=Hi(d.clientY||0);ub(a.q,500)}
function Elb(a,b){var c,d,e,f,g;g=b.indexOf('; cros ');if(g==-1){return}d=Dob(b,Tob(41),g);if(d==-1){return}c=d;while(c>=g&&(lDb(c,b.length),b.charCodeAt(c)!=32)){--c}if(c==g){return}e=b.substr(c+1,d-(c+1));f=Mob(e,'\\.',0);Flb(a,f)}
function F1(a,b,c,d){var e,f;if(a.W.qc!=c&&a.W.pc!=b){E1(a,b,c,false,false,true)}else{e=XX(a.W,b,c);d=e.o;a.b=d;IR(a.v);d=(f=fO(a.v.j),f==null?'':f)}a.u=false;h1(a);if(!a.e){if(!a.C&&!a.p){a.C=true;o$(a.W,true,d);a.v.u=true;jS(a.v)}}}
function web(a){!!a.a&&tb(a.a);if(jub(seb,a,0)!=-1){wI();mI(MI,rr(mr(Tv,1),zDb,41,0,[(!VI&&(VI=new _n),VI)]));if(((PM(),OM).ff((null,Uh(a.Vc))).className||'').indexOf(FGb)!=-1){U3(a.Vc,new Teb(a))}else{hQ(a,false);veb(a);mub(seb,a)}}}
function VU(a,b,c,d){m1(a.d);a.c.C||(a.c.C=true,undefined);if(!gV(a.c.wc)){h$(a.c,true);GX(a.c)}g$(a.c,b,c);$$(a.c,b,b,c,c);d?Y$(a.c,b,d.col2,c,d.row2,true):Y$(a.c,b,b,c,c,true);UU(a);r3(a.d,b,c,null);Qjb(a.d.X,c,b,true);ub(a.d.t,200)}
function U8(){PM();var a,b;FQ.call(this,false,true);gf(OM.ff((wI(),wI(),Uh(this.Vc))),'v-reconnect-dialog',true);a=new oL;b=new FL;gf(b.Vc,'spinner',true);this.a=new CL;Ze(this.a,DEb,true);EK(a,b,a.Vc);lL(a,this.a);rL(this,a);WM(this)}
function Sfb(a,b){var c;if(a.a!=null){(!a.C&&(a.C=vT(a)),a.C).Uc.pd(a.a,false);_h(HQ(a.D),a.a)}a.a=b;if(b!=null){(!a.C&&(a.C=vT(a)),a.C).Uc.pd(b,true);Mh(HQ(a.D),a.a);Yfb(b)}P9(a.D.g);c=new hdb(a);!!a.F&&jq(a.F,c);jvb();uvb();r5(a.D.e)}
function lH(a,b,c){var d=jH,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=jH[b]),nH(h));_.Lg=c;!b&&(_.Mg=qH);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_.Kg=f)}
function Bdb(a,b){var c,d,e,f,g;g=(mi(),b).target;for(d=(f=(new ttb(a.p.a)).a.qg().Oe(),new ztb(f));d.a.Ze();){c=(e=d.a.$e(),e.Ag());if(li.ce(c,g)&&((c.scrollHeight||0)|0)>(c.clientHeight|0)){a.q=c;a.g=Odb(a.q);return true}}return false}
function wY(a,b){var c,d,e,f;c=a.a.j;d=b-c;f=b+a.nc+c;d<0&&(d=0);e=a.a.i;while(a.yb<f&&a.xb<e){if(a.cb+r1(a.a,a.bb)<d){a.cb+=r1(a.a,a.bb);++a.bb}++a.xb;a.yb+=r1(a.a,a.xb)}while(d>a.cb+r1(a.a,a.bb)&&a.bb<e){a.cb+=r1(a.a,a.bb);++a.bb}zZ(a)}
function nf(a,b){var c=(a.className||'').split(/\s+/);if(!c){return}var d=c[0];var e=d.length;c[0]=b;for(var f=1,g=c.length;f<g;f++){var h=c[f];h.length>e&&h.charAt(e)=='-'&&h.indexOf(d)==0&&(c[f]=b+h.substring(e))}a.className=c.join(' ')}
function AV(a,b){var c;this.M=new DV(this);this.q=a;this.Q=b;this._=b.Pc;this.b=new gW(this);bL(this,this.b);eW(this.b);Ze(this.b,qHb,true);qV(this,false);this.B=new SV(this);Ze(this.B,qHb,true);QV(this.B);c=b.xc;bW(this.b,c);OV(this.B,c)}
function kV(a,b){a.r=b;if(b>0&&!a.a){a.a=new gW(a);bW(a.a,a.Q.c);_e(a.a,false);eW(a.a);Ze(a.a,nHb,true);a.A=new SV(a);OV(a.A,a.Q.c);PV(a.A,false);QV(a.A);Ze(a.A,nHb,true)}else if(b==0&&!!a.a){VV(a.a);a.a=null;Kh(a.A.k);a.A=null}zV(a);xV(a)}
function zV(a){if(a.ab>0&&a.r>0&&!a.W){a.W=new gW(a);bW(a.W,a.Q.Lc);_e(a.W,false);eW(a.W);Ze(a.W,oHb,true);a.D=new SV(a);OV(a.D,a.Q.Lc);PV(a.D,false);QV(a.D);Ze(a.D,oHb,true)}else if(!!a.W&&(a.ab==0||a.r==0)){VV(a.W);a.W=null;Kh(a.D.k);a.D=null}}
function qqb(a,b){var c,d,e;if(b==0){return (a.a[0]&1)!=0}if(b<0){throw HG(new $mb('Negative bit address'))}e=b>>5;if(e>=a.d){return a.e<0}c=a.a[e];b=1<<(b&31);if(a.e<0){d=hqb(a);if(e<d){return false}else d==e?(c=-c):(c=~c)}return (c&b)!=0}
function h8(a,b){a.e=b[YIb];switch(a.d.c){case 0:a.d=(G8(),C8);null.Ng().Ng();break;case 2:a.d=(G8(),C8);a8(a,a.b);break;case 1:break;default:throw HG(new $nb('Got onOpen event when conncetion state is '+a.d+'. This should never happen.'));}}
function cyb(a,b){var c,d,e,f,g;f=b==null?0:a.b.sg(b);d=(c=a.a.get(f),c==null?new Array:c);for(g=0;g<d.length;g++){e=d[g];if(a.b.rg(b,e.Ag())){if(d.length==1){d.length=0;jyb(a.a,f)}else{d.splice(g,1)}--a.c;xxb(a.b);return e.Bg()}}return null}
function Qr(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&NFb)!=0;d&&(c|=-1048576);if(b<22){g=c>>b;f=a.m>>b|c<<22-b;e=a.l>>b|a.m<<22-b}else if(b<44){g=d?IDb:0;f=c>>b-22;e=a.m>>b-22|c<<44-b}else{g=d?IDb:0;f=d?MFb:0;e=c>>b-44}return wr(e&MFb,f&MFb,g&IDb)}
function ccb(b,c){var d,e,f,g;d=c.f;e=b.a;!e&&(e=T(d));f=new mcb(e);try{Ybb(new Zbb(f,b.b),d,rr(mr(oE,1),zDb,1,5,[]))}catch(a){a=GG(a);if(fs(a,72)){g=a;throw HG(new sg("Couldn't invoke @OnStateChange method "+f.b+'.'+b.b,g))}else throw HG(a)}}
function j4(){this.i=new Kxb;this.d=new Dq;new Z8;this.o=new m4(this);this.b=new d5;new e5;Nab((!Iab&&(Iab=new Vab),Iab),'__eager',null);this.n=new Zfb;this.e=new G5;this.k=new h7;this.f=new K6;this.j=new cab;this.a=new O8;new k9;this.g=new T9}
function t$(a,b){var c,d,e;RI((wI(),a.Vc));a.Sb.className=THb;Pe(a.wc).style[IGb]='';_h(a.Tb,'row'+a.Zb);if(a.Xb){c=new Kxb;e=b-a.Qb;d=Apb(Rpb(e/a.Kb*72));d<0&&(d=0);d!=u1(a.a,a.Zb)&&ksb(c,kob(a.Zb),new Rnb(d));c.d.c+c.e.c==0||a2(a.a,c)}a.Zb=-1}
function qN(){var a,b,c,d;null.Ng();d=(uJ(),Zj($doc).clientWidth|0);c=Zj($doc).clientHeight|0;null.Ng(($k(),GEb));null.Ng((Im(),nGb));null.Ng(nGb);b=Yj($doc);a=Vj($doc);null.Ng($wnd.Math.max(b,d)+qGb);null.Ng($wnd.Math.max(a,c)+qGb);null.Ng(kFb)}
function H0(a){var b,c,d,e,f,g;d=new oub;g=wT(a.a.a);e=a.a.a.i;for(c=new Nub(a.b);c.a<c.c.a.length;){b=Lub(c);f=new a0(a,e,b.key,b.type,g);Z_(f,b.caption);$_(f,h0(a.a.a,b.key));d.a[d.a.length]=f}return nub(d,or(bC,{816:1,3:1},135,d.a.length,0,1))}
function Zqb(a,b,c,d,e){var f,g,h;f=0;g=0;for(h=0;h<d;h++){f=(krb(),IG(UG(JG(c[h],eLb),JG(e,eLb)),JG(bH(f),eLb)));g=IG($G(JG(a[b+h],eLb),JG(f,eLb)),g);a[b+h]=bH(g);g=YG(g,32);f=ZG(f,32)}g=IG($G(JG(a[b+d],eLb),f),g);a[b+d]=bH(g);return bH(YG(g,32))}
function u7(a,b,c){var d,e;if(b>a.a.k){oQ(a.a,a.a.k+qGb);b=TM(a.a);c=SM(a.a)}d=0;e=0;if((F4(),!E4&&(E4=new T4),F4(),E4).b){_6(a.a,(uJ(),Zj($doc).clientWidth|0));b=TM(a.a);c=SM(a.a);d=q7(a,b);e=r7(a,c)}else{d=s7(a,b);e=t7(a,c)}nQ(a.a,d,e);xf(a.a,48)}
function pV(a,b){a.ab=b;if(b>0&&!a.X){a.X=new gW(a);bW(a.X,a.Q.Nc);_e(a.X,false);eW(a.X);Ze(a.X,'top-right',true);a.F=new SV(a);OV(a.F,a.Q.Nc);PV(a.F,false);QV(a.F);Ze(a.F,oHb,true)}else if(b==0&&!!a.X){VV(a.X);a.X=null;Kh(a.F.k);a.F=null}zV(a);xV(a)}
function $W(a,b,c){var d,e,f,g,h;if(c){a.c.style[HGb]='';a.s=0;a.t=0}for(e=b.length;e<a.u.length;e++){Kh(a.u[e])}Bg(a.u,b.length);for(d=0;d<b.length;d++){f=a.u[d];if(f){h=f;ZW(h,b[d])}else{g=QW(b[d]);Dh(a.c,g);a.u[d]=g}}a.r>=a.u.length&&(a.r=-1);_W(a)}
function _0(){PM();FQ.call(this,true,false);this.e=new ceb(this);this.b=new peb(100,new feb(this));_M(this,this.e);OM.ff((wI(),wI(),Uh(this.Vc))).className=pHb;ci(this.Vc,Pj($doc));pf(this,new _db(this),Rp?Rp:(Rp=new _n));this.Vc['id']='PID_VAADIN_CM'}
function A5(a,b,c,d){var e,f,g,h,i,j;i=t5(b,a.k);g=k5(i.b);for(h=0;h<g.length;h++){j=g[h];if(j!=null){d&&(f=qfb(a.a,j,null,1),f?Ofb(f):OBb(QBb((nnb(HC),HC.k)),EIb));c&&(e=qfb(a.a,j,null,0),e?Ofb(e):OBb(QBb((nnb(HC),HC.k)),DIb))}}fsb(a.b,b)&&Oxb(a.e,b)}
function Cnb(a){if(a.mg()){var b=a.c;b.ng()?(a.k='['+b.j):!b.mg()?(a.k='[L'+b.kg()+';'):(a.k='['+b.kg());a.b=b.jg()+'[]';a.i=b.lg()+'[]';return}var c=a.g;var d=a.d;d=d.split('/');a.k=Fnb('.',[c,Fnb('$',d)]);a.b=Fnb('.',[c,Fnb('.',d)]);a.i=d[d.length-1]}
function YQ(a,b,c,d){a.c=b;a.d=c;a.b=d;(wI(),a.Vc).style[fFb]=sFb;!!a.B&&(a.B.style[fFb]=sFb,undefined);a.i.style[fFb]=(Wm(),sFb);qQ(a);a.k=Wh(a.Vc,oGb);a.n=Wh(a.Vc,FEb);OQ(a);a.Vc.style[fFb]=rFb;!!a.B&&(a.B.style[fFb]=rFb,undefined);a.i.style[fFb]=rFb}
function XU(a,b,c,d,e,f,g,h,i){var j,k;r3(a.d,c,d,b);a.c.C||(a.c.C=true,undefined);if(!gV(a.c.wc)){h$(a.c,true);GX(a.c)}j=a.c.pc;k=a.c.qc;if(j!=c||k!=d){g$(a.c,c,d);UU(a)}$$(a.c,e,f,g,h);Y$(a.c,e,f,g,h,true);i&&!DY(a.c,e,f,g,h)&&JZ(a.c,e,f,g,h);TX(a.c)}
function Sq(b,c){var d,e,f;if(!!b.b&&psb(b.b)>0){for(f=new Ksb((new Csb(b.b)).a);f.b;){e=Jsb(f);try{AP(c,e.Ag(),e.Bg())}catch(a){a=GG(a);if(fs(a,66)){d=a;throw HG(new $q(d.Gd()))}else throw HG(a)}}}else{c.setRequestHeader(KFb,'text/plain; charset=utf-8')}}
function cI(a){bI();if(!PH(YH,a)){return a}a.indexOf('&')!=-1&&(a=OH(WH,a,'&amp;'));a.indexOf('<')!=-1&&(a=OH(ZH,a,'&lt;'));a.indexOf('>')!=-1&&(a=OH(XH,a,'&gt;'));a.indexOf('"')!=-1&&(a=OH(_H,a,'&quot;'));a.indexOf("'")!=-1&&(a=OH(aI,a,'&#39;'));return a}
function rf(a){var b;if(a.ud()){throw HG(new $nb("Should only call onAttach when the widget is detached from the browser's document"))}a.Rc=true;wI();TJ(a.Vc,a);b=a.Sc;a.Sc=-1;b>0&&(a.Sc==-1?KI(a.Vc,b|(a.Vc.__eventBits||0)):(a.Sc|=b));a.rd();a.yd();Op(a,true)}
function N7(){H7();var a;if(G7<0){a=(wI(),wj($doc));a.style[IEb]='50px';a.style[HEb]='50px';a.style[sGb]='scroll';a.style[$Eb]=aFb;a.style[HGb]='-5000px';Dh((PN(),$doc.body),a);G7=((a.offsetWidth||0)|0)-(parseInt(a['clientWidth'])|0);Jh($doc.body,a)}return G7}
function FT(a,b,c){var d,e,f;e='%'.length;Aob(b.substr(b.length-e,e),'%')!=zob(a.p,'%');d='%'.length;Aob(c.substr(c.length-d,d),'%')!=zob(a.o,'%');a.p=b;a.o=c;f=a.Ef();f.pd('v-has-width',!cmb(a.Cf()));f.pd('v-has-height',!bmb(a.Cf()));a.Ef().qd(b);a.Ef().od(c)}
function tV(a){var b,c,d,e;a.C=false;mV(a,false);a.N&&uV(a);if(a.j){d2(a.q,a.G,a.I)}else if(a.s){b=$wnd.Math.min(a.e,a.G);c=$wnd.Math.max(a.f,a.H);d=$wnd.Math.min(a.K,a.I);e=$wnd.Math.max(a.L,a.J);b<=c&&d<=e&&e2(a.q,b,c,d,e)}_h(Pe(a.Q),'selecting');oV(a,false)}
function o9(b){var c,d;if(b==null){return null}d=null.Ng();try{c=n9(b);HBb(QBb((nnb(QA),QA.k)),'JSON parsing took '+A6(null.Ng()-d,3)+'ms');return c}catch(a){a=GG(a);if(fs(a,17)){NBb(QBb((nnb(QA),QA.k)),'Unable to parse JSON: '+b);return null}else throw HG(a)}}
function nqb(a,b){var c,d,e,f,g,h;if(b.e==0){throw HG(new $mb(fLb))}h=a.d;c=b.d;if((h!=c?h>c?1:-1:crb(a.a,b.a,h))==-1){return a}f=c;e=or(qs,OHb,18,f,15,1);if(f==1){e[0]=$qb(a.a,h,b.a[0])}else{d=h-c+1;e=Tqb(null,d,a.a,h,b.a,c)}g=new tqb(a.e,f,e);bqb(g);return g}
function QZ(a,b,c){var d,e,f,g,h,i,j;if(b){EW(a.wb,c);j=a.wb.b;i=a.wb.a;h=gY(a,c);d=h?h:XX(a,i,j);e=new $Q(a,Eh(d.d));TQ(e,a.i.get(c));UQ(e,a.r.get(c));g=a.tb.contains(c)?a.ub:null;WQ(e,g);ZQ(e,d.d,j,i);lsb(a.b,c,e)}else{f=nsb(a.b,c);!!f&&(hQ(f,false),Kh(f.i))}}
function z9(b){var c,d,e,f;HBb(QBb((nnb(QA),QA.k)),' * Sending state change events');f=b.length;for(d=0;d<f;d++){e=b[d];try{dT(e.d,e)}catch(a){a=GG(a);if(fs(a,11)){c=a;JBb(QBb((nnb(QA),QA.k)),(KAb(),IAb),'Error sending state change events',c)}else throw HG(a)}}}
function BY(a,b){var c,d,e,f;e=a.a.M;f=b-e;c=b+a.mc+e;f<0&&(f=0);d=a.Qc+1;while(a.eb>f&&a.db>d){if(a.Ab-mY(a,a.zb)>c){a.Ab-=mY(a,a.zb);--a.zb}--a.db;a.eb-=mY(a,a.db)}if(a.eb<=0||a.db<=1){a.eb=0;a.db=d}while(c<a.Ab-mY(a,a.zb)&&a.zb>1){a.Ab-=mY(a,a.zb);--a.zb}EZ(a)}
function m0(a){if(!(!a.L&&(a.L=new R3),a.L).c){B2((!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C),null)}else if(!(!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C).q){!a.d&&(a.d=new V0(a));B2((!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C),a.d)}else{B1((!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C))}}
function Qg(g){Jg();function h(a,b,c,d,e){if(!e){e=a+' ('+b+':'+c;d&&(e+=':'+d);e+=')'}var f=ng(e);Sg(f,false)}
;function i(a){var b=a.onerror;if(b&&!g){return}a.onerror=function(){h.apply(this,arguments);b&&b.apply(this,arguments);return false}}
i($wnd);i(window)}
function Cdb(a,b){var c;a.r&&X(a.i);c=(mi(),b).touches[0];if(Bdb(a,c)){HBb(QBb((nnb(jC),jC.k)),'TouchDelegate takes over');b.stopPropagation();a.d=OI(a);xdb=a;a.o=Hi(c.clientY||0);a.s[0]=a.o;a.b[0]=Dg();a.k=1;a.n=Ddb(a);HBb(QBb((nnb(jC),jC.k)),'ST'+a.n);a.j=false}}
function S7(a){var b=a.ownerDocument.defaultView.getComputedStyle(a);var c=b.width;if(c==yGb){return R7(a)}var d=parseFloat(c);var e=parseFloat(b.borderLeftWidth)+parseFloat(b.borderRightWidth);var f=parseFloat(b.paddingLeft)+parseFloat(b.paddingRight);return d+e+f}
function P7(a){var b=a.ownerDocument.defaultView.getComputedStyle(a);var c=b.height;if(c==yGb){return O7(a)}var d=parseFloat(c);var e=parseFloat(b.borderTopWidth)+parseFloat(b.borderBottomWidth);var f=parseFloat(b.paddingTop)+parseFloat(b.paddingBottom);return d+e+f}
function hZ(a){var b,c,d,e,f,g,h;g=new ttb(a.a.f);b=new Kxb;Dh(a.xc,a.hb);ei(a.hb,UHb);for(f=(h=g.a.qg().Oe(),new ztb(h));f.a.Ze();){e=(d=f.a.$e(),d.Ag());bi(a.hb,'cell cs'+e);c=a.hb.clientWidth|0;ksb(b,e,new Rnb(Apb(zpb(new Gpb(c),new Gpb(10)))))}Kh(a.hb);r2(a.a,b)}
function Er(a){var b,c,d;c=a.l;if((c&c-1)!=0){return -1}d=a.m;if((d&d-1)!=0){return -1}b=a.h;if((b&b-1)!=0){return -1}if(b==0&&d==0&&c==0){return -1}if(b==0&&d==0&&c!=0){return iob(c)}if(b==0&&d!=0&&c==0){return iob(d)+22}if(b!=0&&d==0&&c==0){return iob(b)+44}return -1}
function XX(a,b,c){var d,e,f,g;if(c<=a.Qc&&(b>=a.bb&&b<=a.xb||b<=a.ob)||b<=a.ob&&(c>=a.db&&c<=a.zb||c<=a.Qc)){return eY(a,b,c)}else{e=b-a.bb;f=c-a.db;if(e<0||f<0){return null}g=a.ic.a.length>f;if(g){d=iub(a.ic,f).a.length>e;if(d){return iub(iub(a.ic,f),e)}}}return null}
function wM(a,b){var c,d;if(b==a.g){return}if(a.g){KM(a.g);if(a.i){d=BI(Pe(a.g));wI();if(uI.Ge(d)==2){c=uI.Fe(d,1);gf(c,mGb,false)}}}if(b){Ze(b,df((wI(),b.Vc))+'-'+lGb,true);if(a.i){d=BI(b.Vc);if(uI.Ge(d)==2){c=uI.Fe(d,1);gf(c,mGb,true)}}ve();Mc(a.Vc,new kc(b.Vc))}a.g=b}
function gO(a,b,c){if(!a.Rc){return}if(c<0){throw HG(new anb('Length must be a positive integer. Length: '+c))}if(b<0||c+b>Xh((wI(),a.Vc),JFb).length){throw HG(new anb('From Index: '+b+'  To Index: '+(b+c)+'  Text Length: '+Xh((wI(),a.Vc),JFb).length))}wP((wI(),a.Vc),b,c)}
function _5(a,b,c){var d,e,f,g;f=(H7(),g=uj($doc),g.href=b,undefined,g.href);d=new g6(f);if(Pxb(a.c,f)){v8(c);return}if(b6(f,c,a.b)){HBb(QBb((nnb(hA),hA.k)),'Loading script from '+f);e=Ej($doc);e.src=f;e.type='text/javascript';e['async']=false;c6(e,new d6(a),d);Dh(a.a,e)}}
function tR(a){var b,c,d,e,f,g,h,i,j;if(a.a.C){g=a.a.wc.f;h=a.a.wc.e;j=a.a.wc.K;i=a.a.wc.L;f=new cpb;for(e=j;e<=i;e++){for(c=h;c<=g;c++){b=$X(a.a,c,e);b!=null&&(f.a+=''+b,f);c!=g&&(f.a+='\t',f)}e!=i&&(f.a+='\n',f)}d=f.a;return d}return "non-continous selection, can't copy"}
function UR(a,b){var c,d,e,f,g,h,i;c=a.d;if(!c){i='';for(f=a.t.T,g=0,h=f.length;g<h;++g){e=f[g];i+=e+'|'}i=Oob(i,0,i.length-1);d='^(('+i+')!){0,1}';d+='([A-Za-z]{1,3}[0-9]{1,7})';d+='(:([A-Za-z]{1,3}[0-9]{1,7})){0,1}';a.d=c=new RegExp(d);ub(new xS(a),2000)}return c.test(b)}
function vY(a,b){var c,d,e,f;c=a.a.j;d=b-c;f=b+a.nc+c;d<0&&(d=0);e=a.ob+1;while(a.cb>d&&a.bb>e){if(a.yb-r1(a.a,a.xb)>f){a.yb-=r1(a.a,a.xb);--a.xb}--a.bb;a.cb-=r1(a.a,a.bb)}if(a.cb<=0||a.bb<=1){a.cb=0;a.bb=e}while(f<a.yb-r1(a.a,a.xb)&&a.xb>1){a.yb-=r1(a.a,a.xb);--a.xb}zZ(a)}
function AN(a,b,c){var d;a.c=c;X(a);if(a.g){tb(a.g);a.g=null;xN(a)}a.a.R=b;cN(a.a);d=!c&&a.a.K;a.i=b;if(d){if(b){wN(a);Pe(a.a).style[$Eb]=aFb;a.a.S!=-1&&a.a.Xe(a.a.M,a.a.S);(PM(),OM).gf(Pe(a.a),pGb);KK((PN(),TN()),a.a);a.g=new FN(a);ub(a.g,1)}else{Y(a,200,Dg())}}else{yN(a)}}
function s7(a,b){var c,d,e,f,g;g=0;f=14+b;d=a.a.t;e=(uJ(),(Zj($doc).clientWidth|0)-d);e>f?(g=a.a.t+10+Wj($doc)):(g=a.a.t+Wj($doc)-10-b);g+b+4-Wj($doc)>(Zj($doc).clientWidth|0)&&(g=(Zj($doc).clientWidth|0)-b-4+Wj($doc));if(a.a.t!=UIb){c=Wj($doc)+4;g=$wnd.Math.max(g,c)}return g}
function y9(b){var c,d,e;d=b.length;if(d==0){return}HBb(QBb((nnb(QA),QA.k)),' * Sending hierarchy change events');for(e=0;e<d;e++){try{null.Ng()}catch(a){a=GG(a);if(fs(a,11)){c=a;JBb(QBb((nnb(QA),QA.k)),(KAb(),IAb),'Error sending hierarchy change events',c)}else throw HG(a)}}}
function Kr(a){var b,c,d,e,f;if(isNaN(a)){return _r(),$r}if(a<-9223372036854775808){return _r(),Yr}if(a>=9223372036854775807){return _r(),Xr}e=false;if(a<0){e=true;a=-a}d=0;if(a>=GDb){d=ms(a/GDb);a-=d*GDb}c=0;if(a>=HDb){c=ms(a/HDb);a-=c*HDb}b=ms(a);f=wr(b,c,d);e&&Cr(f);return f}
function u5(a){if(a.a){throw HG(new $nb("Can't start a new layout phase before the previous layout phase ends."))}if(null.Ng().Ng()){OBb(QBb((nnb(bA),bA.k)),'Cannot run layout while processing state change from the server.');return}tb(a.d);try{a.a=new vfb;q5(a)}finally{a.a=null}}
function WR(a,b,c,d,e){var f;if(!a.f){return}if(a.k==-1){a.k=a.I.pc;a.n=a.I.qc}c?--a.n:d?++a.k:e?++a.n:--a.k;a.n==0&&(a.n=1);a.k==0&&(a.k=1);f=sY(a.I);a.n>f[2]-1&&(a.n=f[2]-1);a.k>f[3]-1&&(a.k=f[3]-1);if(b&&a.o!=-1);else{a.o=a.k;a.p=a.n}eS(a,a.o,a.p,a.k,a.n,false);MZ(a.I,a.k,a.n)}
function k$(a,b){var c,d,e,f;if(a.T){for(f=(d=(new Etb(a.T)).a.qg().Oe(),new Jtb(d));f.a.Ze();){e=(c=f.a.$e(),c.Bg());Dtb(new Etb(b),e)||uf(e)}}a.Qc>0&&a.ob>0&&l$(a,b,1,a.Qc,1,a.ob);a.Qc>0&&l$(a,b,1,a.Qc,a.bb,a.xb);a.ob>0&&l$(a,b,1,a.db,a.zb,a.ob);l$(a,b,a.bb,a.xb,a.db,a.zb);a.T=b}
function b_(a,b){var c,d,e;if(a.Kc.a.length!=0){d=new Nub(b);while(d.a<d.c.a.length){c=Lub(d);NP(iub(a.Kc,(c.row-1)*a.ob+c.col-1),c.value,c.cellStyle,c.needsMeasure);e=CGb+c.col+DGb+c.row;b$(a,e,c.value,c.cellStyle,c.needsMeasure);c.value==null?nsb(a.e,e):lsb(a.e,e,c)}}T$(a,false)}
function u9(b,c,d){var e,f,g,h,i;g=new mcb(b.Kg);try{i=Hcb(new Zbb(g,fHb));h=b.Ef();f=fcb(c,b.Cf());Ybb(new Zbb(i,d),h,rr(mr(oE,1),zDb,1,5,[f]))}catch(a){a=GG(a);if(fs(a,72)){e=a;throw HG(new sg('Missing data needed to invoke @DelegateToWidget for '+pnb(b.Kg),e))}else throw HG(a)}}
function lrb(a,b){krb();var c,d,e,f,g,h,i,j,k;if(b.d>a.d){h=a;a=b;b=h}if(b.d<63){return qrb(a,b)}g=(a.d&-2)<<4;j=pqb(a,g);k=pqb(b,g);d=erb(a,oqb(j,g));e=erb(b,oqb(k,g));i=lrb(j,k);c=lrb(d,e);f=lrb(erb(j,d),erb(e,k));f=_qb(_qb(f,i),c);f=oqb(f,g);i=oqb(i,g<<1);return _qb(_qb(i,f),c)}
function jV(a,b){a.p=b;if(b){Ze(a.b,mHb,true);XV(a.b,b);if(a.W){XV(a.W,b);Ze(a.W,mHb,true)}if(a.X){XV(a.X,b);Ze(a.X,mHb,true)}if(a.a){XV(a.a,b);Ze(a.a,mHb,true)}oV(a,true)}else{Ze(a.b,mHb,false);!!a.W&&Ze(a.W,mHb,false);!!a.X&&Ze(a.X,mHb,false);!!a.a&&Ze(a.a,mHb,false);oV(a,false)}}
function lZ(a){var b,c,d,e,f,g;for(c=(f=(new Etb(a.b)).a.qg().Oe(),new Jtb(f));c.a.Ze();){b=(e=c.a.$e(),e.Bg());g=b.d;d=b.b;w1(a.a,d)||x1(a.a,g)||!(d>=a.bb&&d<=a.xb&&g>=a.db&&g<=a.zb||d<=a.ob&&g<=a.Qc||d>a.ob&&d<=a.xb&&g<=a.Qc||g>a.Qc&&g<=a.zb&&d<=a.ob)?(hQ(b,false),Kh(b.i)):SQ(b)}}
function t7(a,b){var c,d,e,f,g;g=0;c=10+b;e=a.a.u;f=(uJ(),(Zj($doc).clientHeight|0)-e);f>c?(g=a.a.u+10+Xj($doc)):(g=a.a.u+Xj($doc)-10-b);if(g+b+4-Xj($doc)>(Zj($doc).clientHeight|0)){g=a.a.u-5-b+Xj($doc);g-Xj($doc)<0&&(g=Xj($doc))}if(a.a.u!=UIb){d=Xj($doc)+4;g=$wnd.Math.max(g,d)}return g}
function sDb(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=(lDb(c+3,a.length),a.charCodeAt(c+3)+(lDb(c+2,a.length),31*(a.charCodeAt(c+2)+(lDb(c+1,a.length),31*(a.charCodeAt(c+1)+(lDb(c,a.length),31*(a.charCodeAt(c)+31*b)))))));b=b|0;c+=4}while(c<d){b=b*31+xob(a,c++)}b=b|0;return b}
function Clb(a,b){var c,d,e;d=b;e=a.length;while(d<e){c=(lDb(d,a.length),a.charCodeAt(d));knb==null&&(knb=new RegExp('[A-Z]','i'));if(!(knb.test(String.fromCharCode(c))||(jnb==null&&(jnb=new RegExp('\\d')),jnb.test(String.fromCharCode(c)))||c==95||c==46)){break}++d}return a.substr(b,d-b)}
function zxb(a){var b,c,d;d=-a.a.getTimezoneOffset();b=(d>=0?'+':'')+(d/60|0);c=Fxb($wnd.Math.abs(d)%60);return (Jxb(),Hxb)[a.a.getDay()]+' '+Ixb[a.a.getMonth()]+' '+Fxb(a.a.getDate())+' '+Fxb(a.a.getHours())+':'+Fxb(a.a.getMinutes())+':'+Fxb(a.a.getSeconds())+' GMT'+b+c+' '+a.a.getFullYear()}
function QR(a){var b,c,d,e,f,g,h,i;if(a.A!=null){g=$R(a,a.A);if(!g){return}e=$wnd.Math.min(g.col1,g.col2);d=$wnd.Math.max(g.col1,g.col2);i=$wnd.Math.min(g.row1,g.row2);h=$wnd.Math.max(g.row1,g.row2);for(b=e;b<=d;b++){for(f=i;f<=h;f++){c=XX(a.I,b,f);!!c&&(c.d.style[VGb]='',undefined)}}}a.A=null}
function X0(a,b,c){var d,e;b=Qe(a.e);d=a.d;e=a.f;if(b+d>(uJ(),Zj($doc).clientWidth|0)){d=d-b;d<0&&(d=0)}c+e>(Zj($doc).clientHeight|0)&&(e=$wnd.Math.max(0,(Zj($doc).clientHeight|0)-c));e==0&&lQ(a,(Zj($doc).clientHeight|0)+qGb);nQ(a,d,e);(wI(),a.Vc).style[$Eb]=(am(),_Eb);R6((Wg(),Vg),new jeb(a))}
function qrb(a,b){var c,d,e,f,g,h,i,j,k,l,m;d=a.d;f=b.d;h=d+f;i=a.e!=b.e?-1:1;if(h==2){k=UG(JG(a.a[0],eLb),JG(b.a[0],eLb));m=bH(k);l=bH(ZG(k,32));return l==0?new sqb(i,m):new tqb(i,2,rr(mr(qs,1),OHb,18,15,[m,l]))}c=a.a;e=b.a;g=or(qs,OHb,18,h,15,1);mrb(c,d,e,f,g);j=new tqb(i,h,g);bqb(j);return j}
function prb(a,b){krb();var c,d,e,f,g,h,i,j,k;j=a.e;if(j==0){return $pb(),Zpb}d=a.d;c=a.a;if(d==1){e=UG(JG(c[0],eLb),JG(b,eLb));i=bH(e);g=bH(ZG(e,32));return g==0?new sqb(j,i):new tqb(j,2,rr(mr(qs,1),OHb,18,15,[i,g]))}h=d+1;f=or(qs,OHb,18,h,15,1);f[d]=orb(f,c,d,b);k=new tqb(j,h,f);bqb(k);return k}
function rI(b){var c=$doc.cookie;if(c&&c!=''){var d=c.split('; ');for(var e=d.length-1;e>=0;--e){var f,g;var h=d[e].indexOf('=');if(h==-1){f=d[e];g=''}else{f=d[e].substring(0,h);g=d[e].substring(h+1)}if(pI){try{f=decodeURIComponent(f)}catch(a){}try{g=decodeURIComponent(g)}catch(a){}}b.put(f,g)}}}
function SX(a){var b,c,d,e,f,g;for(d=(g=(new ttb(a.u.a)).a.qg().Oe(),new ztb(g));d.a.Ze();){c=(e=d.a.$e(),e.Ag());if(c.a!=a.pc||c.b!=a.qc){b=XX(a,c.a,c.b);if(b){Mh(b.d,EHb);Oxb(a.t,b)}f=gY(a,CGb+c.a+DGb+c.b);if(f){Oxb(a.t,f);Mh(f.d,EHb)}}}if(a.nb){b=XX(a,a.nb.a,a.nb.b);!!b&&Mh(b.d,FHb)}RR(a.a.v)}
function bg(d,b){if(b instanceof Object){try{b.__java$exception=d;if(navigator.userAgent.toLowerCase().indexOf('msie')!=-1&&$doc.documentMode<9){return}var c=d;Object.defineProperties(b,{cause:{get:function(){var a=c.Fd();return a&&a.Dd()}},suppressed:{get:function(){return c.Ed()}}})}catch(a){}}}
function ZJ(){ZJ=mH;UJ={_default_:dK,dragenter:cK,dragover:cK};WJ={click:bK,dblclick:bK,mousedown:bK,mouseup:bK,mousemove:bK,mouseover:bK,mouseout:bK,mousewheel:bK,keydown:aK,keyup:aK,keypress:aK,touchstart:bK,touchend:bK,touchmove:bK,touchcancel:bK,gesturestart:bK,gestureend:bK,gesturechange:bK}}
function WU(a,b,c,d,e,f,g,h){if(a.d.p){a.d.p=false;rZ(a.c)}a.d.e=g;g$(a.c,c,d);UU(a);a.c.C||(a.c.C=true,undefined);if(!gV(a.c.wc)){h$(a.c,true);GX(a.c)}$$(a.c,c,c,d,d);Y$(a.c,c,c,d,d,true);f?cS(a.d.v,e):dS(a.d.v,e);fS(a.d.v,!g);b!=null?hS(a.d.v,b):hS(a.d.v,k1(c,d));PY(a.c)||MZ(a.c,c,d);h||TX(a.c)}
function Lqb(a,b){var c,d,e,f,g;d=b>>5;b&=31;if(d>=a.d){return a.e<0?($pb(),Upb):($pb(),Zpb)}f=a.d-d;e=or(qs,OHb,18,f+1,15,1);Mqb(e,f,a.a,d,b);if(a.e<0){for(c=0;c<d&&a.a[c]==0;c++);if(c<d||b>0&&a.a[c]<<32-b!=0){for(c=0;c<f&&e[c]==-1;c++){e[c]=0}c==f&&++f;++e[c]}}g=new tqb(a.e,f,e);bqb(g);return g}
function z6(a,b){var c,d,e,f;null.Ng();OBb(QBb((nnb(kA),kA.k)),'\t'+b+': Warning: no corresponding connector for id '+b);for(d=new Nub(a);d.a<d.c.a.length;){c=Lub(d);HBb(QBb((nnb(kA),kA.k)),'\t\t'+(e=c.d,f=null,Aob('v',c.c)&&e.length==2&&(f=e[0]+' : '+NDb),null==f&&(f=null),c.b+'.'+c.c+'('+f+')'))}}
function Wqb(a,b){var c,d,e,f,g;d=JG(b,eLb);if(KG(a,0)>=0){f=MG(a,d);g=TG(a,d)}else{c=ZG(a,1);e=b>>>1;f=MG(c,e);g=TG(c,e);g=IG(XG(g,1),JG(a,1));if((b&1)!=0){if(KG(f,g)<=0){g=$G(g,f)}else{if(SG($G(f,g),d)){g=IG(g,$G(d,f));f=$G(f,1)}else{g=IG(g,$G(XG(d,1),f));f=$G(f,2)}}}}return WG(XG(g,32),JG(f,eLb))}
function lR(a,b){nL.call(this);this.a=wj($doc);this.b=false;this.f=false;this.k=-1;this.g=-1;this.i=-1;this.j=-1;this.n=-1;this.d=-1;this.e=a;this.c=b;(wI(),this.Vc).className='grouping';gf(this.Vc,'minus',true);this.a.innerHTML='&#x2212;';this.a.className='expand';Dh(this.Vc,this.a);UI(this.Vc,262145)}
function Y8(b){var c,d,e,f;tb(b.a);e=new Uq((Pq(),Oq),b.b);f=(d=qI(),d.e.a.get(_Ib));f!=null&&f.length!=0&&Rq(e,aJb,f);c=new a9(b);dr(bJb,c);e.a=c;try{EBb(QBb((nnb(KA),KA.k)),'Sending heartbeat request...');dr(bJb,e.a);Qq(e,e.e,e.a)}catch(a){a=GG(a);if(fs(a,74)){null.Ng().Ng();X8(c.a)}else throw HG(a)}}
function bP(a){var b=$doc.createElement('div');b.tabIndex=0;var c=$doc.createElement('input');c.type=DEb;c.tabIndex=-1;c.setAttribute(LEb,'true');var d=c.style;d.opacity=0;d.height='1px';d.width='1px';d.zIndex=-1;d.overflow=sFb;d.position=aFb;c.addEventListener('focus',a,false);b.appendChild(c);return b}
function BT(a){!a.C&&(a.C=(HBb((e0(),d0),eHb),new v3));if(!!a.C&&cL((!a.C&&(a.C=(HBb((e0(),d0),eHb),new v3)),a.C))){uf((!a.C&&(a.C=(HBb((e0(),d0),eHb),new v3)),a.C));NBb(QBb((nnb(YB),YB.k)),'Widget is still attached to the DOM after the connector ('+w6(a)+') has been unregistered. Widget was removed.')}}
function n0(a){var b,c,d,e,f;e=(!a.L&&(a.L=new R3),a.L).ab;f=(!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C);for(d=new Nub(a.j);d.a<d.c.a.length;){b=Lub(d);jub(e,b,0)!=-1||QZ(f.W,false,b)}if(e){for(c=new Nub(e);c.a<c.c.a.length;){b=Lub(c);jub(a.j,b,0)!=-1||QZ(f.W,true,b)}}a.j.a=or(oE,zDb,1,0,5,1);!!e&&gub(a.j,e)}
function W3(a){T3();var b=a.a;if(!b.getPropertyValue)return '';if(b.getPropertyValue(vIb))return b.getPropertyValue(vIb);if(b.getPropertyValue(wIb))return b.getPropertyValue(wIb);if(b.getPropertyValue(xIb))return b.getPropertyValue(xIb);if(b.getPropertyValue(yIb))return b.getPropertyValue(yIb);return ''}
function jU(){this.d=wj($doc);this.b=wj($doc);this.a=wj($doc);this.d.className='v-spreadsheet-popupbutton-overlay-header';this.b.className='v-window-closebox';this.b.setAttribute('role',qEb);this.a.className='header-caption';Dh(this.d,this.b);Dh(this.d,this.a);UI(this.b,1);TI(this.b,this);Ve(this,this.d)}
function nV(a,b,c,d,e){var f;a.e=b;a.K=d;a.f=c;a.L=e;a.Y=dV(a.q.W.W,d,e+1);a.Z=dV(a.q.g,b,c+1);f=a.Z==0||a.Y==0;_V(a.b,b,c,d,e);f&&XV(a.b,true);if(a.ab>0&a.r>0){_V(a.W,b,c,d,e);f&&XV(a.W,true)}if(a.ab>0){_V(a.X,b,c,d,e);f&&XV(a.X,true)}if(a.r>0){_V(a.a,b,c,d,e);f&&XV(a.a,true)}a.p&&jV(a,false);a.o||rV(a)}
function ah(a){var b,c,d,e,f,g,h;f=a.length;if(f==0){return null}b=false;c=new Wf;while(Dg()-c.b<16){d=false;for(e=0;e<f;e++){h=a[e];if(!h){continue}d=true;if(!h[0].Jd()){a[e]=null;b=true}}if(!d){break}}if(b){g=[];for(e=0;e<f;e++){!!a[e]&&(g[g.length]=a[e],undefined)}return g.length==0?null:g}else{return a}}
function x$(a,b,c){var d,e,f,g;e=XX(a,b,c);d=gY(a,CGb+b+DGb+c);g=XX(a,a.pc,a.qc);f=gY(a,CGb+a.pc+DGb+a.qc);Oxb(a.u,new V_(a.pc,a.qc));if(g){Oxb(a.t,g);_h(g.d,FHb);Mh(g.d,EHb)}if(f){Oxb(a.t,f);_h(f.d,FHb);Mh(f.d,EHb)}Qxb(a.u,new V_(b,c));if(e){Qxb(a.t,e);_h(e.d,EHb)}if(d){Qxb(a.t,d);_h(d.d,EHb)}a.qc=c;a.pc=b}
function oX(b,c){var d,e,f,g;if(c.a.length>0){e=new epb(nY(b.Cc));for(g=new Nub(c);g.a<g.c.a.length;){f=Lub(g);try{apb(e,Job(f,CHb,DHb+b.yc+' .cell.col'))}catch(a){a=GG(a);if(fs(a,17)){d=a;IBb(b.U,(KAb(),IAb),'Invalid custom cell border style: '+f+', '+d.Gd())}else throw HG(a)}}Ih(b.Cc);Dh(b.Cc,Oj($doc,e.a))}}
function iQ(a){var b,c,d;d=a.Rc&&a.R;bN(a);if(d){return false}else{a.lf(false);Ze(a,df(OM.ff((wI(),wI(),Uh(a.Vc))))+'-'+FGb,true);c=new Z4(a.Vc);b=W3(c);b==null&&(b='');a.lf(true);if(b.indexOf(FGb)!=-1){a.K=false;U3(a.Vc,new lgb(a));return true}else{Ze(a,df(OM.ff((null,Uh(a.Vc))))+'-'+FGb,false);return false}}}
function $R(a,b){var c,d,e,f,g,h;f=new US;if(b.indexOf('!')!=-1){h=Mob(b,'!',0)[0];return Aob(o1(a.t),h)?$R(a,Mob(b,'!',0)[1]):null}else if(b.indexOf(':')!=-1){g=Mob(b,':',0);c=sS(g[0]);f.col1=c.a;f.row1=c.b;d=sS(g[1]);f.col2=d.a;f.row2=d.b}else{e=sS(b);f.col1=e.a;f.row1=e.b;f.col2=f.col1;f.row2=f.row1}return f}
function c6(a,b,c){Y5();a.onload=vDb(function(){a.onload=null;a.onerror=null;a.onreadystatechange=null;b.Pf(c)});a.onerror=vDb(function(){a.onload=null;a.onerror=null;a.onreadystatechange=null;b.Of(c)});a.onreadystatechange=function(){('loaded'===a.readyState||'complete'===a.readyState)&&a.onload(arguments[0])}}
function $pb(){$pb=mH;var a;Vpb=new sqb(1,1);Xpb=new sqb(1,10);Zpb=new sqb(0,0);Upb=new sqb(-1,1);Wpb=rr(mr(zE,1),zDb,15,0,[Zpb,Vpb,new sqb(1,2),new sqb(1,3),new sqb(1,4),new sqb(1,5),new sqb(1,6),new sqb(1,7),new sqb(1,8),new sqb(1,9),Xpb]);Ypb=or(zE,zDb,15,32,0,1);for(a=0;a<Ypb.length;a++){Ypb[a]=Fqb(XG(1,a))}}
function LN(){var c=function(){};c.prototype={className:'',clientHeight:0,clientWidth:0,dir:'',getAttribute:function(a,b){return this[a]},href:'',id:'',lang:'',nodeType:1,removeAttribute:function(a,b){this[a]=undefined},setAttribute:function(a,b){this[a]=b},src:'',style:{},title:''};$wnd.GwtPotentialElementShim=c}
function Q1(a,b,c,d,e){var f,g,h,i;if(b==0||c==0||d==0||e==0||b==c&&d==e&&b==a.W.pc&&d==a.W.qc){return}f=c;g=e;if(b>c){i=b;b=c;c=i}if(d>e){i=d;d=e;e=i}if(a.v.f){eS(a.v,a.Y,a.Z,f,g,false);PR(a.v)}else{h=VS(a.J,d,e,b,c);Ojb(a.X,a.W.qc,a.W.pc,h.row1,h.col1,h.row2,h.col2);hS(a.v,k1(a.W.pc,a.W.qc));UU(a.R);ub(a.t,200)}}
function xV(a){$V(a.b,a.ab==0?0:a.ab+1,0,a.r==0?0:a.r+1,0);!!a.a&&$V(a.a,a.ab==0?0:a.ab+1,0,0,a.r);!!a.X&&$V(a.X,0,a.ab,a.r==0?0:a.r+1,0);!!a.W&&$V(a.W,0,a.ab,0,a.r);MV(a.B,a.ab==0?0:a.ab+1,0,a.r==0?0:a.r+1,0);!!a.A&&MV(a.A,a.ab==0?0:a.ab+1,0,0,a.r);!!a.F&&MV(a.F,0,a.ab,a.r==0?0:a.r+1,0);!!a.D&&MV(a.D,0,a.ab,0,a.r)}
function gW(a){this.F=a;this.B=wj($doc);this.G=wj($doc);this.k=wj($doc);this.u=wj($doc);this.a=wj($doc);this.g=wj($doc);this.i=wj($doc);this.I=wj($doc);this.o=wj($doc);this.w=wj($doc);this.c=wj($doc);this.J=wj($doc);this.p=wj($doc);this.A=wj($doc);this.d=wj($doc);TV(this);UI(this.B,15736908);TI(this.B,new hW(this))}
function v3(){this.o=new Kxb;this.J=new D3(this);this.t=new E3(this);f3(this,(!op&&(op=new wp),op.a));this.W=new d_(this,this.$);this.v=new rS(this,this.W);this.V=new cX(this);this.R=new $U(this,this.W);Dh(Pe(this.W),Pe(this.v));Dh(Pe(this.W),Pe(this.V));bL(this,this.W);pf(this.W,new H3(this),(!Lp&&(Lp=new _n),Lp))}
function Hlb(b,c){b.u=-1;b.v=-1;if(c.length>=1){try{b.u=Nnb(c[0],10)}catch(a){a=GG(a);if(!fs(a,17))throw HG(a)}}if(c.length>=2){try{b.v=Nnb(c[1],10)}catch(a){a=GG(a);if(!fs(a,17))throw HG(a)}if(b.v==-1&&c[1].indexOf('-')!=-1){try{b.v=Nnb(Oob(c[1],0,Cob(c[1],Tob(45))),10)}catch(a){a=GG(a);if(!fs(a,17))throw HG(a)}}}}
function NAb(a){KAb();var b;b=Qob(a,(Ezb(),Czb));switch(b){case 'ALL':return BAb;case 'CONFIG':return CAb;case 'FINE':return DAb;case 'FINER':return EAb;case 'FINEST':return FAb;case 'INFO':return GAb;case 'OFF':return HAb;case 'SEVERE':return IAb;case _Kb:return JAb;default:throw HG(new Ynb('Invalid level "'+a+'"'));}}
function Vr(a){var b,c,d,e,f;if(a.l==0&&a.m==0&&a.h==0){return '0'}if(a.h==NFb&&a.m==0&&a.l==0){return '-9223372036854775808'}if(a.h>>19!=0){return '-'+Vr(Mr(a))}c=a;d='';while(!(c.l==0&&c.m==0&&c.h==0)){e=ur(OFb);c=xr(c,e,true);b=''+Ur(tr);if(!(c.l==0&&c.m==0&&c.h==0)){f=9-b.length;for(;f>0;f--){b='0'+b}}d=b+d}return d}
function r7(a,b){var c,d,e,f,g;g=0;c=10+b;e=a.a.d?Rh(a.a.d)+((a.a.d.offsetHeight||0)|0):UIb;f=(uJ(),(Zj($doc).clientHeight|0)-e);f>c?(g=e):(g=e-b-(a.a.d?(a.a.d.offsetHeight||0)|0:0));if(g+b-Xj($doc)>(Zj($doc).clientHeight|0)){g=e-5-b+Xj($doc);g-Xj($doc)<0&&(g=Xj($doc))}if(e!=UIb){d=Xj($doc);g=$wnd.Math.max(g,d)}return g}
function nyb(){if(!Object.create||!Object.getOwnPropertyNames){return false}var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}if(Object.getOwnPropertyNames(b).length==0){return false}return true}
function RR(a){var b,c,d,e,f,g,h;for(c=(h=(new ttb(a.F.a)).a.qg().Oe(),new ztb(h));c.a.Ze();){b=(g=c.a.$e(),g.Ag());d=new V_(b.c,b.k);if(!fsb(a.D,d)){b.d.style[UGb]='';b.d.style[VGb]=''}}osb(a.F.a);a.f&&KR(a);for(f=new Ksb((new Csb(a.D)).a);f.b;){e=Jsb(f);b=XX(a.I,e.Ag().a,e.Ag().b);if(b){b.d.style[UGb]=e.Bg();Oxb(a.F,b)}}}
function Yfb(a){var b,c,d,e,f;e=$doc.querySelectorAll('link[rel~="icon"]');for(c=0;c<e.length;c++){d=e[c];b=(mi(),d).getAttribute('href')||'';if(b!=null&&b.indexOf('VAADIN/themes')!=-1&&(f=xKb.length,Aob(b.substr(b.length-f,f),xKb))){b=Lob(b,'VAADIN/themes/.+?/favicon.ico','VAADIN/themes/'+a+xKb);d.setAttribute('href',b)}}}
function U5(a,b){var c;c=new ulb;tlb(c,QI((mi(),a).type));mlb(c,(H7(),U7(a)));nlb(c,V7(a));li.Qd(a)==1?llb(c,(zlb(),wlb)):li.Qd(a)==2?llb(c,(zlb(),ylb)):li.Qd(a)==4?llb(c,(zlb(),xlb)):llb(c,(zlb(),wlb));klb(c,!!a.altKey);olb(c,!!a.ctrlKey);plb(c,!!a.metaKey);slb(c,!!a.shiftKey);if(b){qlb(c,V5(c.c,b));rlb(c,W5(c.d,b))}return c}
function hQ(a,b){var c,d;if((OM.ff((wI(),wI(),Uh(a.Vc))).className||'').indexOf(FGb)!=-1){U3(a.Vc,new ngb(a,b))}else{Ze(a,df(OM.ff((null,Uh(a.Vc))))+'-'+GGb,true);d=new Z4(a.Vc);c=W3(d);c==null&&(c='');if(c.indexOf(GGb)!=-1){a.K=false;U3(a.Vc,new pgb(a,b));a.P=false}else{Ze(a,df(OM.ff((null,Uh(a.Vc))))+'-'+GGb,false);kQ(a,b)}}}
function HX(a){var b,c,d,e,f,g;for(g=new Nub(a.gc);g.a<g.c.a.length;){e=Lub(g);_h(e,GHb)}for(d=new Nub(a.K);d.a<d.c.a.length;){b=Lub(d);_h(b,HHb)}if(a.jb){for(f=new Nub(a.jb);f.a<f.c.a.length;){e=Lub(f);_h(e,GHb)}}if(a.ib){for(c=new Nub(a.ib);c.a<c.c.a.length;){b=Lub(c);_h(b,HHb)}}osb(a.uc.a);osb(a.rc.a);osb(a.tc.a);osb(a.sc.a)}
function wU(){If();this.g=wj($doc);this.a=new AU(this);new oub;this.g.className=kHb;this.g.setAttribute('role',qEb);this.d=new LQ;Ye(this.d,'v-spreadsheet-popupbutton-overlay');this.f=new BO;$e(this.f,'overlay-layout');this.e=new jU;hU(this.e,this.d);AO(this.f,this.e);pL(this.d,this.f);Ve(this,this.g);of(this,this,(Ln(),Ln(),Kn))}
function P1(a,b){var c,d,e,f,g,h,i;for(d=new Ksb((new Csb(b)).a);d.b;){c=Jsb(d);e=c.Ag().a;h=c.Bg().a;if(h==0){if(!a.w){a.w=new oub;fub(a.w,kob(e))}else jub(a.w,kob(e),0)!=-1||fub(a.w,kob(e))}a.g[e-1]=h}pZ(a.W,false);if(a.K){for(g=new Nub(a.K);g.a<g.c.a.length;){f=Lub(g);R$(a.W,f)}}a.d=true;i=sY(a.W);Vjb(a.X,b,i[0],i[1],i[2],i[3])}
function a2(a,b){var c,d,e,f,g,h,i;for(d=new Ksb((new Csb(b)).a);d.b;){c=Jsb(d);e=c.Ag().a;h=c.Bg().a;if(h==0){if(!a.A){a.A=new oub;fub(a.A,kob(e))}else jub(a.A,kob(e),0)!=-1||fub(a.A,kob(e))}a.N[e-1]=h}pZ(a.W,false);if(a.K){for(g=new Nub(a.K);g.a<g.c.a.length;){f=Lub(g);R$(a.W,f)}}a.d=true;i=sY(a.W);fkb(a.X,b,i[0],i[1],i[2],i[3])}
function krb(){krb=mH;var a,b;hrb=or(zE,zDb,15,32,0,1);irb=or(zE,zDb,15,32,0,1);jrb=rr(mr(qs,1),OHb,18,15,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,bLb,cLb]);a=1;for(b=0;b<=18;b++){hrb[b]=Fqb(a);irb[b]=Fqb(XG(a,b));a=UG(a,5)}for(;b<irb.length;b++){hrb[b]=lqb(hrb[b-1],hrb[1]);irb[b]=lqb(irb[b-1],($pb(),Xpb))}}
function XR(a,b,c){var d,e,f,g,h,i,j,k;g=$wnd.Math.min(b.col1,b.col2);f=$wnd.Math.max(b.col1,b.col2);k=$wnd.Math.min(b.row1,b.row2);j=$wnd.Math.max(b.row1,b.row2);if(f>20000){EBb(QBb((nnb(sy),sy.i)),WGb);return}for(d=g;d<=f;d++){for(i=k;i<=j;i++){e=XX(a.I,d,i);if(e){h=e.d;h.style[UGb]=c;Oxb(a.F,e);ksb(a.D,new V_(d,i),c)}}}fub(a.i,b)}
function aX(a){var b,c,d,e,f,g;e=a.g.value;if(e.length>31){e=e.substr(0,31);_j(a.g,e)}ei(a.v,e);f=(a.v.offsetWidth||0)|0;f<50&&(f=50);c=a.u[a.r];b=Qh(a.k);d=(mi(),li).Wd(c)+((c.offsetWidth||0)|0)+10;while(d>b&&a.s<a.u.length-1){g=UW(a,a.s);d=ms(d-g);a.t-=g;++a.s}a.c.style[HGb]=a.t+(Im(),qGb);a.g.style[IEb]=f+5+qGb;c.style[IEb]=f+qGb}
function sS(a){var b,c,d,e,f,g,h,i,j;b='';g='';if(a!=null){j=Mob(a.toUpperCase(),'[0-9]',0);i=Mob(a,'[A-z]',0);j.length>0&&(b=j[0]);i.length>0&&(g=i[i.length-1])}h=g.length>0?kob(Nnb(g,10)).a:0;d=0;for(f=0;f<b.length;f++){e=(lDb(f,b.length),b.charCodeAt(f));c=0;e>=65&&e<=90?(c=e-64):e>=97&&e<=122&&(c=e-96);d=d*26+c}return new V_(d,h)}
function GT(a){var b,c,d,e,f,g;g=a.Cf();f=df(a.Ef().md());a.Ef().pd('v-widget',true);DT(a,f,'-error',null!=g.ib);for(b=0;b<a.s.length;b++){e=a.s[b];a.Ef().pd(e,false);DT(a,f+'-',e,false)}a.s.length=0;if($lb(g.mb)){for(d=n6(g.mb);d.Ze();){c=d.$e();a.Ef().pd(c,true);DT(a,f+'-',c,true);Cg(a.s,c)}}g.lb!=null&&!Aob(g.lb,f)&&$e(a.Ef(),g.lb)}
function y6(){var b,c,d,e,f;try{HBb(QBb((nnb(kA),kA.k)),'RPC invocations to be sent to the server:');b=null;e=new oub;for(null.Ng();null.Ng();){f=null.Ng();d=null.Og;b=d;e.a[e.a.length]=f}e.a.length==0||z6(e,b)}catch(a){a=GG(a);if(fs(a,17)){c=a;JBb(QBb((nnb(kA),kA.k)),(KAb(),IAb),'Error logging method invocations',c)}else throw HG(a)}}
function Y$(a,b,c,d,e,f){var g,h,i,j,k,l;a.v=false;if(f){DX(a);HX(a);i=XX(a,a.pc,a.qc);a.nb=null;!!i&&_h(i.d,FHb)}for(l=d;l<=e;l++){for(h=b;h<=c;h++){if(h!=a.pc||l!=a.qc){i=XX(a,h,l);Oxb(a.u,new V_(h,l));if(i){Oxb(a.t,i);Mh(i.d,EHb)}j=gY(a,CGb+h+DGb+l);if(j){Oxb(a.t,j);Mh(j.d,EHb)}}}}for(k=d;k<=e;k++){PZ(a,k)}for(g=b;g<=c;g++){OZ(a,g)}}
function pK(){$wnd.addEventListener(yFb,vDb(function(a){var b=(ZJ(),VJ);if(b&&!a.relatedTarget){if('html'==a.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent(zFb,true,true,$wnd,0,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,null);b.dispatchEvent(c)}}}),true)}
function SV(a){this.p=a;this.k=wj($doc);this.q=wj($doc);this.d=wj($doc);this.j=wj($doc);this.a=wj($doc);this.k.className=rHb;Mh(this.k,'paintmode');this.q.className='s-top';this.d.className='s-left';this.j.className='s-right';this.a.className='s-bottom';Dh(this.q,this.d);Dh(this.q,this.j);Dh(this.d,this.a);Dh(this.k,this.q);Ve(this,this.k)}
function rY(a,b,c,d){var e,f,g,h;h=new epb(DHb);_ob(apb(apb(h,a.yc),' .sheet .cell.cs'),b);for(g=new Ksb((new Csb(c)).a);g.b;){e=Jsb(g);aob(e.Bg(),b)&&apb(_ob(apb(apb((h.a+=NHb,h),a.yc),LHb),e.Ag()),'.cell.cs0')}for(f=new Ksb((new Csb(d)).a);f.b;){e=Jsb(f);aob(e.Bg(),b)&&apb(_ob(apb(apb((h.a+=NHb,h),a.yc),JHb),e.Ag()),'.cell.cs0')}return h.a}
function X$(a){var b,c,d,e,f,g;L$(a,a.ec,a.bc,a.mb,a.jb,false,a.dc);g=a.Z?a.dc+1:a.dc;if(a.fc.childNodes.length==g){return}Ih(a.fc);for(e=1;e<=g;e++){c=wj($doc);Dh(a.fc,c);(mi(),li).de(c,''+e);c.className=bIb;f=e;wI();uI.Me(c,1);TI(c,new y_(a,f))}Ih(a.ac);for(d=1;d<=g-1;d++){b=wj($doc);Dh(a.ac,b);b.className=VGb;b.style[HGb]=15*d+(Im(),qGb)}}
function AT(a,b){b.Yf('id')&&(a.Cf().kb!=null?ci(Pe(a.Ef()),a.Cf().kb):b.b||(Pe(a.Ef()).removeAttribute('id'),undefined));fs(a.Cf(),137)?fs(a.Ef(),65)&&a.Ef().Bd((a.Cf(),0)):fs(a.Cf(),185)&&fs(a.Ef(),65)&&a.Ef().Bd(a.Cf().k);jT(a,b);GT(a);FT(a,a.Cf().nb==null?'':a.Cf().nb,a.Cf().jb==null?'':a.Cf().jb);if(!a.t&&a.Gf()){a.t=true;W6(a.D.k,a.Ef())}}
function oV(a,b){var c,d,e,f;if(a._){c=!(!!a.a&&a.a.K>a.b.K)&&b;e=!(!!a.X&&a.X.j>a.b.j)&&b;cW(a.b,c,e,c,e);if(a.a){c=!(!!a.b&&a.b.K>=a.a.K)&&b;d=!(!!a.W&&a.W.j>a.a.j)&&b;cW(a.a,c,d,c,d)}if(a.X){f=!(!!a.W&&a.W.K>a.X.K)&&b;e=!(!!a.b&&a.b.j>=a.X.j)&&b;cW(a.X,f,e,f,e)}if(a.W){f=!(!!a.X&&a.X.K>=a.W.K)&&b;d=!(!!a.a&&a.a.j>=a.W.j)&&b;cW(a.W,f,d,f,d)}}}
function bX(a){var b,c,d;if(a==null){return false}d=a.length;if(d<1||d>31){return false}for(c=0;c<d;c++){b=(lDb(c,a.length),a.charCodeAt(c));switch(b){case 47:case 92:case 63:case 42:case 93:case 91:case 58:return false;default:continue;}}lDb(0,a.length);if(a.charCodeAt(0)==39||(lDb(d-1,a.length),a.charCodeAt(d-1)==39)){return false}return true}
function vK(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var b,c;try{b=vDb(BJ)()}finally{c=d&&d(a)}if(b!=null){return b}if(c!=null){return c}};$wnd.onunload=vDb(function(a){try{uJ();oJ&&Up((!pJ&&(pJ=new OJ),pJ))}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}})}
function rq(b,c){var d,e,f,g,h,i;if(!c){throw HG(new qob('Cannot fire null event'))}try{++b.b;h=(e=vq(b,c.ke(),null),e);d=null;i=b.c?h.ug(h.size()):h.tg();while(b.c?i.xg():i.Ze()){g=b.c?i.yg():i.$e();try{c.ie(g)}catch(a){a=GG(a);if(fs(a,11)){f=a;!d&&(d=new Rxb);ksb(d.a,f,d)}else throw HG(a)}}if(d){throw HG(new Fq(d))}}finally{--b.b;b.b==0&&wq(b)}}
function $Z(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;k=(d.offsetWidth||0)|0;j=b-k;i=(mi(),li).Wd(d);if(j>0){o=(uJ(),(Zj($doc).clientWidth|0)+Wj($doc));n=Wj($doc);h=o-i;e=i-n;h<b&&e>=j&&(i-=j)}l=li.Xd(d);p=(uJ(),Xj($doc));m=Xj($doc)+(Zj($doc).clientHeight|0);f=l-p;g=m-(l+((d.offsetHeight||0)|0));g<c&&f>=c?(l-=c):(l+=(d.offsetHeight||0)|0);nQ(a.qb,i,l)}
function Ceb(a,b,c){if(a.e!=null){Ze(a,a.e,false);Te(a,a.e);a.e=null}if(c!=null&&c.length!=0){a.e=c;gf((PM(),OM).ff((wI(),wI(),Uh(a.Vc))),c,true);Ze(a,df(OM.ff((null,Uh(a.Vc))))+'-'+c,true)}Beb(a,b);qQ(a);Eeb(a,b);fub(seb,a);jQ(a,1);((F4(),!E4&&(E4=new T4),F4(),E4).a.t==5||(!E4&&(E4=new T4),E4).a.e&&(!E4&&(E4=new T4),E4).a.b>=41)&&X7((wI(),a.Vc))}
function Cqb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;n=b.length;i=n;lDb(0,b.length);if(b.charCodeAt(0)==45){l=-1;m=1;--n}else{l=1;m=0}f=(Pqb(),Oqb)[10];e=n/f|0;q=n%f;q!=0&&++e;h=or(qs,OHb,18,e,15,1);c=Nqb[8];g=0;o=m+(q==0?f:q);for(p=m;p<i;p=o,o=p+f){d=Nnb(b.substr(p,o-p),10);j=(krb(),orb(h,h,g,c));j+=drb(h,g,d);h[g++]=j}k=g;a.e=l;a.d=k;a.a=h;bqb(a)}
function x9(b,c){var d,e,f,g,h,i,j,k;c[null.Ng()]=true;nnb(NA);try{k=rT(b);d=lcb(k);j=null.Ng();g=Gcb(k);i=g.length;for(f=0;f<i;f++){h=g[f];gcb(h,j,Ecb((!Iab&&(Iab=new Vab),Iab).c.e,h.a.a,h.b,d))}}catch(a){a=GG(a);if(fs(a,72)){e=a;throw HG(new sg("Can't reset state for "+w6(b),e))}else throw HG(a)}null.Ng();jvb();uvb();null.Ng((null,gvb));null.Ng()}
function Qq(b,c,d){var e,f,g,h;h=new $wnd.XMLHttpRequest;try{yP(h,b.c,b.g)}catch(a){a=GG(a);if(fs(a,66)){e=a;g=new _q(b.g);ag(g,new $q(e.Gd()));throw HG(g)}else throw HG(a)}Sq(b,h);b.d&&(h.withCredentials=true,undefined);f=new Lq(h,b.f,d);zP(h,new Wq(f,d));try{h.send(c)}catch(a){a=GG(a);if(fs(a,66)){e=a;throw HG(new $q(e.Gd()))}else throw HG(a)}return f}
function hR(a,b){var c;b.b=a.b;b.e=a.e;b.f=a.f;ei(b.a,Vh(a.a));c=(wI(),b.Vc).style;Ye(b,a.Vc.className||'');a.i>-1&&(c[HGb]=a.i+(Im(),qGb),undefined);a.j>-1&&(c[IGb]=a.j+(Im(),qGb),undefined);a.d>-1&&(c[HEb]=a.d+(Im(),qGb),undefined);a.n>-1&&(c[IEb]=a.n+(Im(),qGb),undefined);a.k>-1&&(c[hGb]=a.k+(Im(),qGb),undefined);a.g>-1&&(c[gGb]=a.g+(Im(),qGb),undefined)}
function Xqb(a,b){var c,d,e,f,g,h;f=(d=bH(a),d!=0?iob(d):iob(bH(YG(a,32)))+32);g=(e=bH(b),e!=0?iob(e):iob(bH(YG(b,32)))+32);h=$wnd.Math.min(f,g);f!=0&&(a=ZG(a,f));g!=0&&(b=ZG(b,g));do{if(KG(a,b)>=0){a=$G(a,b);a=ZG(a,(c=bH(a),c!=0?iob(c):iob(bH(YG(a,32)))+32))}else{b=$G(b,a);b=ZG(b,(c=bH(b),c!=0?iob(c):iob(bH(YG(b,32)))+32))}}while(KG(a,0)!=0);return XG(b,h)}
function Q$(a,b,c){var d,e,f;f=0;e=0;d=c.d;if(a.ob>=b.col1&&b.col2>a.ob){kZ(a,b,c);ksb(a.Jb,b,c);f=1}else{f=dV(a.a.g,b.col1,b.col2+1);d.style[IEb]=f+(Im(),qGb)}if(a.Qc>=b.row1&&b.row2>a.Qc){jZ(a,b,c);ksb(a.Jb,b,c);e=1}else{e=dV(a.a.W.W,b.row1,b.row2+1);d.style[HEb]=e+(Im(),qGb)}f==0||e==0?(c.d.style[eFb]=($k(),GEb),undefined):(c.d.style[eFb]='flex',undefined)}
function Uqb(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;n=a.a;o=a.d;p=a.e;if(o==1){d=JG(n[0],eLb);e=JG(b,eLb);f=MG(d,e);j=TG(d,e);p!=c&&(f=VG(f));p<0&&(j=VG(j));return rr(mr(zE,1),zDb,15,0,[Fqb(f),Fqb(j)])}h=o;i=p==c?1:-1;g=or(qs,OHb,18,h,15,1);k=rr(mr(qs,1),OHb,18,15,[Vqb(g,n,o,b)]);l=new tqb(i,h,g);m=new tqb(p,1,k);bqb(l);bqb(m);return rr(mr(zE,1),zDb,15,0,[l,m])}
function H$(a){var b,c,d,e,f,g,h;L$(a,a.I,a.F,a.lb,a.ib,true,a.H);g=a.Z?a.H+1:a.H;if(a.J.childNodes.length==g){return}Ih(a.J);for(e=1;e<=g;e++){h=Gj($doc);c=wj($doc);Dh(a.J,c);c.appendChild(h);(mi(),li).de(h,''+e);c.className=bIb;f=e;wI();uI.Me(c,1);TI(c,new w_(a,f))}Ih(a.D);for(d=1;d<=g-1;d++){b=wj($doc);Dh(a.D,b);b.className=VGb;b.style[IGb]=18*d+(Im(),qGb)}}
function Vqb(a,b,c,d){var e,f,g,h,i,j,k;j=0;f=JG(d,eLb);for(h=c-1;h>=0;h--){k=WG(XG(j,32),JG(b[h],eLb));if(KG(k,0)>=0){i=MG(k,f);j=TG(k,f)}else{e=ZG(k,1);g=d>>>1;i=MG(e,g);j=TG(e,g);j=IG(XG(j,1),JG(k,1));if((d&1)!=0){if(KG(i,j)<=0){j=$G(j,i)}else{if(SG($G(i,j),f)){j=IG(j,$G(f,i));i=$G(i,1)}else{j=IG(j,$G(XG(f,1),i));i=$G(i,2)}}}}a[h]=bH(JG(i,eLb))}return bH(j)}
function aV(a,b){var c,d;a.S=KY(a.Q,a.f,a.L);a.T=LY(a.Q,a.f,a.L);a.R=HY(a.Q,a.f,a.L);a.g=!a.S&&!a.T;a.i=!a.S&&!a.R;a.t=Yh(a.Q.xc);a.u=(a.Q.xc.scrollTop||0)|0;a.c=(c=Wj($doc),H7(),(mi(),b).type.indexOf(lHb)!=-1?qn(b.changedTouches[0])+c:Hi(b.clientX||0)+c);a.d=(d=Xj($doc),b.type.indexOf(lHb)!=-1?rn(b.changedTouches[0])+d:Hi(b.clientY||0)+d);a.U=a.f;a.V=a.L;wV(a)}
function vT(b){var c,d,e,f;e=new mcb(b.Kg);try{f=Hcb(new Zbb(e,fHb));d=lcb(f);return d}catch(a){a=GG(a);if(fs(a,72)){c=a;throw HG(new _nb('Default implementation of createWidget() does not work for '+pnb(b.Kg)+'. This might be caused by explicitely using '+'super.createWidget() or some unspecified '+'problem with the widgetset compilation.',c))}else throw HG(a)}}
function trb(a,b,c){var d,e,f,g,h;for(f=0;f<b;f++){d=0;for(h=f+1;h<b;h++){d=IG(IG(UG(JG(a[f],eLb),JG(a[h],eLb)),JG(c[f+h],eLb)),JG(bH(d),eLb));c[f+h]=bH(d);d=ZG(d,32)}c[f+b]=bH(d)}Kqb(c,c,b<<1);d=0;for(e=0,g=0;e<b;++e,g++){d=IG(IG(UG(JG(a[e],eLb),JG(a[e],eLb)),JG(c[g],eLb)),JG(bH(d),eLb));c[g]=bH(d);d=ZG(d,32);++g;d=IG(d,JG(c[g],eLb));c[g]=bH(d);d=ZG(d,32)}return c}
function dqb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;f=b.e;if(f==0){throw HG(new $mb(fLb))}e=b.d;d=b.a;if(e==1){return Uqb(a,d[0],f)}n=a.a;o=a.d;c=o!=e?o>e?1:-1:crb(n,d,o);if(c<0){return rr(mr(zE,1),zDb,15,0,[Zpb,a])}p=a.e;h=o-e+1;k=e;i=p==f?1:-1;g=or(qs,OHb,18,h,15,1);j=Tqb(g,h,n,o,d,e);l=new tqb(i,h,g);m=new tqb(p,k,j);bqb(l);bqb(m);return rr(mr(zE,1),zDb,15,0,[l,m])}
function gqb(a,b){var c,d,e,f;c=a.e<0?new tqb(1,a.d,a.a):a;d=b.e<0?new tqb(1,b.d,b.a):b;if(c.e==0){return d}else if(d.e==0){return c}if((c.d==1||c.d==2&&c.a[1]>0)&&(d.d==1||d.d==2&&d.a[1]>0)){return Fqb(Xqb((f=c.d>1?WG(XG(c.a[1],32),JG(c.a[0],eLb)):JG(c.a[0],eLb),UG(c.e,f)),(e=d.d>1?WG(XG(d.a[1],32),JG(d.a[0],eLb)):JG(d.a[0],eLb),UG(d.e,e))))}return Yqb(aqb(c),aqb(d))}
function VQ(a,b){if(b){pn(a.e,iL(a.g.a));_e(a.g,false);a.e.style[eFb]=($k(),kFb);a.e.focus();a.e.select()}else{BL(a.g,a.e.value);_e(a.g,true);a.e.style[eFb]=($k(),GEb);IX(a.w,iL(a.g.a),a.b,a.d)}Se(a.f)&&(Se(a.a)||Se(a.g)||Aob(($k(),kFb),pk(a.e.style)))?(Re(a.f).className||'').indexOf(QGb)!=-1||Ze(a.f,QGb,true):(Re(a.f).className||'').indexOf(QGb)!=-1&&Ze(a.f,QGb,false)}
function mW(a,b){var c,d,e,f,g;f=(mi(),li).Ud(b);g=f.getAttribute(SEb)||'';if((Q4((F4(),!E4&&(E4=new T4),F4(),E4))||P4((!E4&&(E4=new T4),E4)))&&(g==null||g.length==0)){e=pi(f);d=e.getAttribute(SEb)||'';if(d.indexOf(uHb)!=-1){f=e;g=d}}if(Sh(pi(f)).indexOf(vHb)!=-1&&g!=null&&g.indexOf(uHb)!=-1){c=a.c.wb;if(DW(g)==0){EW(c,g);F1(a.c.a,c.a,c.b,li._d(f))}b.stopPropagation()}}
function o$(a,b,c){var d,e;a._=true;GW(a.$,'.'+a.yc+' .sheet div'+(CHb+a.pc+'.row'+a.qc),0);Ye(a.sb,CGb+a.pc+DGb+a.qc+' cell'+' '+(e=YX(a,a.pc,a.qc),!e?'cs0':e.cellStyle));if(OY(a,CGb+a.pc+DGb+a.qc)){a.ab=true;d=gY(a,CGb+a.pc+DGb+a.qc);!!d&&Xe(a.sb,qk(d.d.style))}M$(a);b&&(EY(a,a.pc,a.qc)||MZ(a,a.pc,a.qc),R6((Wg(),Vg),new q_(a,false)));R6((Wg(),Vg),new s_(a,c));hO(a.sb,c)}
function e7(a,b){var c;if(b.c!=null&&b.c.length!=0){_e(a.g,true);D6(a.g,b.c);C6(a.g,b.b)}else{_e(a.g,false)}if(b.d!=null&&b.d.length!=0){switch(b.a.c){case 2:EL(a.f,b.d);break;case 0:BL(a.f,b.d);break;case 1:c=Dj($doc);Mh(c,'v-tooltip-pre');ei(c,b.d);EL(a.f,'');Dh(Pe(a.f),c);}Pe(a.f.Uc).style[IEb]='';Pe(a.f).style[eFb]=''}else{EL(a.f,'');Pe(a.f).style[eFb]=($k(),GEb)}a.e=b}
function Q9(a,b,c){var d,e,f,g,h,i,j,k;a.b&&NBb(QBb((nnb(SA),SA.k)),'Trying to start a new request while another is active');a.b=true;null.Ng(new t4);i={};d=null.Ng().Og;null.Ng()||(i['csrfToken']=d,undefined);i['rpc']=b;i[cJb]=Umb(null.Ng().Og);i['clientId']=Umb(a.a++);if(c){for(f=(j=Vmb(c),j),g=0,h=f.length;g<h;++g){e=f[g];k=c[e];i[e]=k}}!!a.c&&f8(a.c)?i8(a.c,i):vab(a.e,i)}
function c2(a,b,c){var d,e,f,g,h,i,j;b==0?(b=1):b<0&&(b=kY(a.W)+1);b>a.i&&(b=a.i);c==0?(c=1):c<0&&(c=WX(a.W)+1);c>a.P&&(c=a.P);h=a.W.pc;i=a.W.qc;if(b<=h){d=b;e=h}else{d=h;e=b}if(c<=i){f=c;g=i}else{f=i;g=c}if(a.v.f){eS(a.v,a.Y,a.Z,b,c,false)}else{j=VS(a.J,f,g,d,e);$$(a.W,j.col1,j.col2,j.row1,j.row2);Y$(a.W,j.col1,j.col2,j.row1,j.row2,true);hS(a.v,l1(j.col1,j.col2,j.row1,j.row2))}}
function Ar(a,b,c,d,e,f){var g,h,i,j,k,l,m;j=Dr(b)-Dr(a);g=Pr(b,j);i=wr(0,0,0);while(j>=0){h=Gr(a,g);if(h){j<22?(i.l|=1<<j,undefined):j<44?(i.m|=1<<j-22,undefined):(i.h|=1<<j-44,undefined);if(a.l==0&&a.m==0&&a.h==0){break}}k=g.m;l=g.h;m=g.l;g.h=l>>>1;g.m=k>>>1|(l&1)<<21;g.l=m>>>1|(k&1)<<21;--j}c&&Cr(i);if(f){if(d){tr=Mr(a);e&&(tr=Sr(tr,(_r(),Zr)))}else{tr=wr(a.l,a.m,a.h)}}return i}
function Mob(a,b,c){var d,e,f,g,h,i,j,k;d=new RegExp(b,'g');j=or(uE,RDb,2,0,6,1);e=0;k=a;g=null;while(true){i=d.exec(k);if(i==null||k==''||e==c-1&&c>0){j[e]=k;break}else{h=i.index;j[e]=k.substr(0,h);k=Oob(k,h+i[0].length,k.length);d.lastIndex=0;if(g==k){j[e]=k.substr(0,1);k=k.substr(1)}g=k;++e}}if(c==0&&a.length>0){f=j.length;while(f>0&&j[f-1]==''){--f}f<j.length&&(j.length=f)}return j}
function z7(a,b,c){var d,e,f,g,h;e=b.a;d=(mi(),li).Ud(e);if(a.b.d==d&&a.a){return}if(!!a.b.d&&Z6(a.b)){g=x7(a,d);if(!!a.b.e&&h6(a.b.e,g)){return}}f=x7(a,d);if(!f){Y6(a.b)}else{if(a.b.c){tb(a.b.b);a.b.c=false}Z6(a.b)&&V6(a.b);e7(a.b,f);g7(a.b,e,c);(F4(),!E4&&(E4=new T4),F4(),E4).a.t==4&&(d.focus(),undefined);h=a.b.i?a.b.p:a.b.n;if(h==0){f7(a.b)}else{ub(a.b.r,h);a.b.o=true}}a.a=c;a.b.d=d}
function yR(a,b){var c,d,e,f;e=!a.c.vb&&!!(mi(),b).ctrlKey||!!(mi(),b).metaKey;c=(mi(),li).Ud(b);f=SY(a.c,c);if(!e||!f){return}if((b.keyCode|0)==67||(b.keyCode|0)==88){(If(),Hf).cf((wI(),a.Vc));hO(a,tR(a.a));d=Xh(a.Vc,JFb).length;d>0&&gO(a,0,d);a.Vc.style[gGb]=(Im(),'100.0px');hh((Wg(),new CR(a,b)),100)}if((b.keyCode|0)==86){(wI(),a.Vc)[JFb]='';(If(),Hf).cf(a.Vc);hh((Wg(),new ER(a)),100)}}
function w9(b,c){var d,e,f,g,h;if('rpc' in c){HBb(QBb((nnb(QA),QA.k)),' * Performing server to client RPC calls');f=c['rpc'];g=f.length;for(e=0;e<g;e++){try{null.Ng().Ng();b.a&&!Icb((h=new ncb(null.Og,null),new Zbb(h,null.Og)),(Rcb(),Pcb))&&(b.a=false)}catch(a){a=GG(a);if(fs(a,11)){d=a;JBb(QBb((nnb(QA),QA.k)),(KAb(),IAb),'Error performing server to client RPC calls',d)}else throw HG(a)}}}}
function fQ(a){var b,c,d,e,f;QM(a);b=(F4(),!E4&&(E4=new T4),F4(),E4);if(b.a.t==5||b.a.t==4){d=(f=ms($wnd.innerWidth!==undefined?$wnd.innerWidth:-1),(f<0?(uJ(),Zj($doc).clientWidth|0):f)-Wh((wI(),a.Vc),FEb)>>1);e=(c=ms($wnd.innerHeight!==undefined?$wnd.innerHeight:-1),(c<0?(uJ(),Zj($doc).clientHeight|0):c)-Wh(a.Vc,oGb)>>1);nQ(a,$wnd.Math.max((uJ(),Wj($doc)+d),0),$wnd.Math.max(Xj($doc)+e,0))}}
function kW(a,b){var c,d;if(!a.c._){if(!a.b){return}d=(mi(),b).keyCode|0;c=li.Rd(b);if((c==122||c==121)&&(!!b.ctrlKey||!!b.metaKey)){li.Vd(b);b.stopPropagation();return}if(c==0){switch(d){case 38:case 40:case 37:case 39:case 9:case 8:case 46:case 32:li.Vd(b);b.stopPropagation();break;case 13:f2(a.c.a,b,String.fromCharCode(c));}}else !b.ctrlKey&&!b.metaKey&&f2(a.c.a,b,String.fromCharCode(c))}}
function brb(a,b,c,d,e){var f,g;f=IG(JG(b[0],eLb),JG(d[0],eLb));a[0]=bH(f);f=YG(f,32);if(c>=e){for(g=1;g<e;g++){f=IG(f,IG(JG(b[g],eLb),JG(d[g],eLb)));a[g]=bH(f);f=YG(f,32)}for(;g<c;g++){f=IG(f,JG(b[g],eLb));a[g]=bH(f);f=YG(f,32)}}else{for(g=1;g<c;g++){f=IG(f,IG(JG(b[g],eLb),JG(d[g],eLb)));a[g]=bH(f);f=YG(f,32)}for(;g<e;g++){f=IG(f,JG(d[g],eLb));a[g]=bH(f);f=YG(f,32)}}KG(f,0)!=0&&(a[g]=bH(f))}
function eY(a,b,c){var d,e,f,g,h,i,j,k,l;f=b-1;j=c-1;if(j<0||f<0){return null}if(a.Qc<c){l=c>=a.db;k=a.d.a.length>c-a.db;if(l&&k){g=iub(a.d,c-a.db).a.length>f;if(g){return iub(iub(a.d,c-a.db),f)}}}else if(a.ob<b){h=b-a.bb;k=a.Oc.a.length>j;if(k){i=b>=a.bb;g=iub(a.Oc,j).a.length>h;if(i&&g){return iub(iub(a.Oc,j),h)}}}else{e=j*a.ob+f;d=a.Kc.a.length>e;if(e>=0&&d){return iub(a.Kc,e)}}return null}
function iV(a,b){var c,d,e,f,g,h,i,j;a.o=true;c=(g=Wj($doc),H7(),(mi(),b).type.indexOf(lHb)!=-1?qn(b.changedTouches[0])+g:Hi(b.clientX||0)+g);d=(h=Xj($doc),b.type.indexOf(lHb)!=-1?rn(b.changedTouches[0])+h:Hi(b.clientY||0)+h);if(bV(a,d,c)){return}i=c-a.v+Yh(a.Q.xc)-a.t;j=d-a.w+((a.Q.xc.scrollTop||0)|0)-a.u;i-=70;j-=20;e=a.q.g;f=a.q.W.W;a.U=cV(e,a.O,i,true);a.V=cV(f,a.P,j,true);c2(a.Q.a,a.U,a.V)}
function hV(a,b){var c,d,e,f,g,h,i,j,k,l;a.j=false;a.s=false;c=(i=Wj($doc),H7(),(mi(),b).type.indexOf(lHb)!=-1?qn(b.changedTouches[0])+i:Hi(b.clientX||0)+i);d=(j=Xj($doc),b.type.indexOf(lHb)!=-1?rn(b.changedTouches[0])+j:Hi(b.clientY||0)+j);if(bV(a,d,c)){return}k=c-a.v+Yh(a.Q.xc)-a.t;l=d-a.w+((a.Q.xc.scrollTop||0)|0)-a.u;f=a.q.g;h=a.q.W.W;e=cV(f,a.e,k,false);g=cV(h,a.K,l,false);e>=0&&g>=0&&yV(a,e,g)}
function I$(b){var c,d,e,f,g,h,i,j;i=b.a.o;try{f=new qub(new ttb(i));jvb();Xub(f.a,f.a.length);g=f.a.length;h=new epb(nY(b.Bc));for(d=0;d<g;d++){e=(dDb(d,f.a.length),f.a[d]);j=Urb(ayb(i.d,e));apb(h,DHb+b.yc+' .sheet .cell.cf'+e+' {'+j+'}')}Ih(b.Bc);Dh(b.Bc,Oj($doc,h.a))}catch(a){a=GG(a);if(fs(a,17)){c=a;NBb(b.U,'SheetWidget:updateConditionalFormattingStyles: '+fg(c,c.Gd())+aIb)}else throw HG(a)}}
function b8(f,c,d){var e=f;d.url=c;d.onOpen=vDb(function(a){e.Uf(a)});d.onReopen=vDb(function(a){e.Wf(a)});d.onMessage=vDb(function(a){e.Tf(a)});d.onError=vDb(function(a){e.Sf(a)});d.onTransportFailure=vDb(function(a,b){e.Xf(a)});d.onClose=vDb(function(a){e.Rf(a)});d.onReconnect=vDb(function(a,b){e.Vf(a,b)});d.onClientTimeout=vDb(function(a){e.Qf(a)});return $wnd.vaadinPush.atmosphere.subscribe(d)}
function Beb(a,b){var c;c=(wI(),a.Vc);_h(c,oKb);_h(c,pKb);_h(c,qKb);_h(c,rKb);_h(c,sKb);_h(c,tKb);_h(c,uKb);switch(b){case 0:Mh(c,oKb);Mh(c,rKb);break;case 2:Mh(c,oKb);Mh(c,pKb);break;case 3:Mh(c,sKb);Mh(c,rKb);break;case 5:Mh(c,sKb);Mh(c,pKb);break;case 8:Mh(c,qKb);Mh(c,pKb);break;case 6:Mh(c,qKb);Mh(c,rKb);break;case 1:Mh(c,oKb);Mh(c,tKb);break;case 7:Mh(c,qKb);Mh(c,tKb);break;case 9:Mh(c,uKb);}}
function Xfb(a,b,c,d,e){var f,g;f=null;if(b!=null){f=Ufb(d);!f&&OBb(QBb((nnb(LC),LC.k)),'Did not find the link tag for the old theme ('+d+'), adding a new stylesheet for the new theme ('+e+')')}if(c!=null){g=Aj($doc);g.rel=OIb;g.type=VHb;g.href=e;c6(g,new igb(a,c,e,f),null);f?Gh($doc.getElementsByTagName(NIb)[0],g,f):Dh($doc.getElementsByTagName(NIb)[0],g)}else{!!f&&Jh(pi((mi(),f)),f);Sfb(a,null)}}
function a6(){var a,b,c,d,e,f,g,h,i,j;this.c=new Rxb;this.b=new Kxb;a=$doc;this.a=a.getElementsByTagName(NIb)[0];i=a.getElementsByTagName('script');for(e=0;e<i.length;e++){b=i[e];j=b.src;j!=null&&j.length!=0&&Oxb(this.c,j)}g=a.getElementsByTagName(vEb);for(d=0;d<g.length;d++){f=g[d];h=f.rel;c=f.href;Bob(OIb,h)&&c!=null&&c.length!=0&&Oxb(this.c,c);Bob('import',h)&&c!=null&&c.length!=0&&Oxb(this.c,c)}}
function Neb(a,b,c,d){teb();var e,f;e=new cpb;if(a!=null){e.a+="<h1 class='";apb(e,Heb(PIb));e.a+="'>";e.a+=''+a;e.a+='<\/h1>'}if(b!=null){e.a+=vKb;apb(e,Heb(vJb));e.a+="'>";e.a+=''+b;e.a+='<\/p>'}if(e.a.length!=0){if(c!=null){e.a+=vKb;apb(e,Heb('details'));e.a+="'>";e.a+='<i style="font-size:0.7em">';e.a+=''+c;e.a+='<\/i><\/p>'}f=Geb(2700000,null.Ng());ueb(f,new Seb(d));Deb(f,e.a,1,nKb)}else{W7(d)}}
function ypb(a,b){var c,d,e,f,g,h;e=Epb(a);h=Epb(b);if(e==h){if(a.e==b.e&&a.a<54&&b.a<54){return a.f<b.f?-1:a.f>b.f?1:0}d=a.e-b.e;c=(a.d>0?a.d:$wnd.Math.floor((a.a-1)*dLb)+1)-(b.d>0?b.d:$wnd.Math.floor((b.a-1)*dLb)+1);if(c>d+1){return e}else if(c<d-1){return -e}else{f=(!a.c&&(a.c=Eqb(a.f)),a.c);g=(!b.c&&(b.c=Eqb(b.f)),b.c);d<0?(f=lqb(f,srb(-d))):d>0&&(g=lqb(g,srb(d)));return _pb(f,g)}}else return e<h?-1:1}
function E9(b,c){var d,e,f,g,h,i,j,k,l,m,n;h=[];HBb(QBb((nnb(QA),QA.k)),' * Updating connector states');if(!(iJb in b)){return h}m={};h5(m,c);n=b[iJb];k=F7(n);for(j=0;j<k.length;j++){try{null.Ng()}catch(a){a=GG(a);if(fs(a,11)){f=a;JBb(QBb((nnb(QA),QA.k)),(KAb(),IAb),'Error updating connector states',f)}else throw HG(a)}}e=k5(m);l=e.length;for(i=0;i<l;i++){d=null.Ng();g=new oab(d,{},true);h.push(g)}return h}
function yX(a){var b,c,d,e,f,g,h,i;Kh(a.fb);for(f=new Nub(a.K);f.a<f.c.a.length;){d=Lub(f);g=pi((mi(),d));!!g&&g.removeChild(d)}a.K.a=or(oE,zDb,1,0,5,1);for(e=new Nub(a.gc);e.a<e.c.a.length;){d=Lub(e);g=pi((mi(),d));!!g&&g.removeChild(d)}a.gc.a=or(oE,zDb,1,0,5,1);for(i=new Nub(a.ic);i.a<i.c.a.length;){h=Lub(i);for(c=new Nub(h);c.a<c.c.a.length;){b=Lub(c);Kh(b.d)}h.a=or(oE,zDb,1,0,5,1)}a.ic.a=or(oE,zDb,1,0,5,1)}
function mX(a,b){var c,d,e,f,g;!a.Ac&&(a.Ac=new Kxb);d=b.b;g=b.i;e=CGb+d+DGb+g;if(d!=0&&g!=0){lsb(a.Ac,e,b);if(d>=a.bb&&d<=a.xb&&g>=a.db&&g<=a.zb||d<=a.ob&&g<=a.Qc||d>a.ob&&d<=a.xb&&g<=a.Qc||g>a.Qc&&g<=a.zb&&d<=a.ob){c=XX(a,d,g);f=b.Uc;if(f){if(a==f){QP(c,(wI(),b.Vc))}else{uf(b);QP(c,(wI(),b.Vc));wf(b,a)}}else{QP(c,(wI(),b.Vc));wf(b,a)}}}else{while(jsb(a.Ac,e)){pU(b,--d);e=CGb+d+DGb+g}lsb(a.Ac,e,b)}vU(b,a,a.xc)}
function zX(a,b){var c,d,e,f,g,h;a.Db=false;for(e=new Nub(bY(a));e.a<e.c.a.length;){d=Lub(e);qZ(a,d)}a.S=null;for(h=(f=(new Etb(a.zc)).a.qg().Oe(),new Jtb(f));h.a.Ze();){g=(c=h.a.$e(),c.Bg());qZ(a,g)}osb(a.zc);if(a.T){osb(a.T);a.T=null}yX(a);osb(a.e);osb(a.oc);zW(a.w);CX(a);GX(a);AX(a);FX(a);BX(a);if(b){zW(a.Cc);Kh(a.w);Kh(a.Bc);Kh(a.Cc);Kh(a.$);Kh(a.Ub);Kh(a.Fb);!!a.pb&&Kh(a.pb);if(a.Mb){BP(a.Mb.a);a.Mb=null}}}
function DY(a,b,c,d,e){return (b<=a.ob||b>=fY(a)&&b<=kY(a))&&(d<=a.Qc||d<=tY(a)&&d>=WX(a))&&(b>=a.bb&&b<=a.xb&&e>=a.db&&e<=a.zb||b<=a.ob&&e<=a.Qc||b>a.ob&&b<=a.xb&&e<=a.Qc||e>a.Qc&&e<=a.zb&&b<=a.ob)&&(c>=a.bb&&c<=a.xb&&d>=a.db&&d<=a.zb||c<=a.ob&&d<=a.Qc||c>a.ob&&c<=a.xb&&d<=a.Qc||d>a.Qc&&d<=a.zb&&c<=a.ob)&&(c>=a.bb&&c<=a.xb&&e>=a.db&&e<=a.zb||c<=a.ob&&e<=a.Qc||c>a.ob&&c<=a.xb&&e<=a.Qc||e>a.Qc&&e<=a.zb&&c<=a.ob)}
function eS(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(b==d&&c==e){g=k1(b,c)}else{if(b>d){o=b;b=d;d=o}if(c>e){o=c;c=e;e=o}g=k1(b,c)+':'+k1(d,e)}if(f&&a.s>=0){g=','+g;++a.q}k=eO(a.e);i=k>0;if(i){l=dO(a.e);h=l+k;a.s=l;a.q=h}else if(f||a.s<0){l=a.q;h=a.q;a.s=a.q}else{l=a.s;h=a.q}p=(j=fO(a.e),j==null?'':j);m=p.substr(0,l);n=Oob(p,h,p.length);p=m+g+n;a.q=(m+g).length;hO(a.e,p);a.e==a.w&&hO(a.j,p);R6((Wg(),Vg),new HS(a))}
function C9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;n=new L9;HBb(QBb((nnb(QA),QA.k)),' * Updating connector hierarchy');k={};f={};if('hierarchy' in b){g=b['hierarchy'];h=F7(g);for(j=0;j<h.length;j++){d=h[j];c=g[d];f[d]=true;D9(d,c,k)}}if(iJb in b){o=F7(b[iJb]);e=[];for(j=0;j<o.length;j++){d=o[j];f.hasOwnProperty(d)||D9(d,e,k)}}l=k5(k);for(i=0;i<l.length;i++){m=null.Ng(l[i]);x9(m,n.a)}n.b.length!=0&&(a.a=false);return n}
function nM(a,b){var c,d,e;d=(wI(),Lj($doc));a.d=Ij($doc);Dh(d,HI(a.d));if(!b){e=Kj($doc);Dh(a.d,HI(e))}a.i=b;c=(zL(),yL).bf();Dh(c,HI(d));We(a,c);ve();Hb(Rd,a.Vc);a.Sc==-1?KI(a.Vc,2225|(a.Vc.__eventBits||0)):(a.Sc|=2225);a.Vc.className='gwt-MenuBar';b?Ze(a,df(a.Vc)+'-'+'vertical',true):Ze(a,df(a.Vc)+'-'+'horizontal',true);a.Vc.style['outline']='0px';a.Vc.setAttribute('hideFocus','true');of(a,new HM(a),(En(),En(),Dn))}
function SQ(a){var b,c;if(a.c){b=Qh(a.c);c=Rh(a.c);if(b>=Ph(a.o)&&b<Qh(a.o)&&c>=Rh(a.o)&&c<=Oh(a.o)){OQ(a);(wI(),a.Vc).style[fFb]=rFb;!!a.B&&(a.B.style[fFb]=rFb,undefined);a.i.style[fFb]=(Wm(),rFb);a.R||qQ(a)}else{(wI(),a.Vc).style[fFb]=sFb;!!a.B&&(a.B.style[fFb]=sFb,undefined);a.i.style[fFb]=(Wm(),sFb)}}else{(wI(),a.Vc).style[fFb]=sFb;!!a.B&&(a.B.style[fFb]=sFb,undefined);a.i.style[fFb]=(Wm(),sFb);hQ(a,false);Kh(a.i)}}
function s9(b,c){var d,e,f,g,h,i;HBb(QBb((nnb(QA),QA.k)),' * Creating connectors (if needed)');e=[];if(!('types' in c)){return e}i=c['types'];h=F7(i);for(g=0;g<h.length;g++){try{d=h[g];null.Ng();b.a=false;Nnb(i[d],10);null.Ng().Ng();null.Ng().Ng();null.Ng(null.Ng());null.Ng().Ng();e[e.length]=d}catch(a){a=GG(a);if(fs(a,11)){f=a;JBb(QBb((nnb(QA),QA.k)),(KAb(),IAb),'Error handling type data',f)}else throw HG(a)}}return e}
function YR(a,b){var c,d,e,f,g,h,i,j,k,l;OR(a);k=ZR(a,b);osb(a.G);e=0;d=0;for(j=new Nub(k);j.a<j.c.a.length;){i=Lub(j);h=$R(a,i);if(!h){continue}if(jsb(a.G,i)){c=isb(a.G,i)}else{d=d%GR.a.length;c=iub(GR,d);lsb(a.G,i,c);++d}c=Job(c,'%s','0.25');XR(a,h,c);g=b.indexOf(i,e);f=(wI(),Gj($doc));l=b.substr(e,g-e);l=Kob(l,' ','&nbsp;');f.innerHTML=l||'';Dh(a.r,f);e=g+i.length;f=Gj($doc);(mi(),li).de(f,i);f.style[UGb]=c;Dh(a.r,f)}}
function qZ(b,c){var d,e,f,g,h;try{d=(wI(),c.Vc);g=pi((mi(),d));h=c.Uc;e=Uf(b.xc,g)||Uf(b.Lc,g)||Uf(b.Nc,g)||Uf(b.c,g);if(e||R(c,b.S)||!!g&&!!g.parentNode&&Hh(b.xc,g.parentNode)){wf(c,null);f=pi(d);!!f&&f.removeChild(d);return true}else if(R(b,h)){wf(c,null);return true}else{return false}}catch(a){a=GG(a);if(fs(a,17)){IBb(b.U,(KAb(),JAb),'Exception while removing child widget from SheetWidget')}else throw HG(a)}return false}
function i8(a,b){var c;if(!f8(a)){throw HG(new $nb('This server to client push connection should not be used to send client to server messages'))}if(a.d==(G8(),C8)){HBb(QBb((nnb(EA),EA.k)),'Sending push ('+a.e+') message to server: '+Smb(b));if(Aob(a.e,VIb)){c=new B8(Smb(b));while(c.a<c.b.length){c8(a.c,A8(c))}}else{c8(a.c,Smb(b))}return}if(a.d==D8){null.Ng().Ng();return}throw HG(new $nb('Can not push after disconnecting'))}
function t9(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;HBb(QBb((nnb(QA),QA.k)),' * Running @DelegateToWidget');j={};n=a.length;for(f=0;f<n;f++){m=a[f];d=m.d;if(d){b=onb(d.Kg);if(j.hasOwnProperty(b)){continue}c=d;o=rT(c);e=(!Iab&&(Iab=new Vab),Iab).c.b[o.a];if(!e){j[b]=true;continue}h=e.length;for(g=0;g<h;g++){l=e[g];if(m.Yf(l)){k=new hcb(o,l);i=(p=(!Iab&&(Iab=new Vab),Iab).c.a[k.a.a+'.'+k.b],p==null?null:Olb(k.b,p));u9(c,k,i)}}}}}
function vX(a,b){var c,d,e,f,g,h;for(e=new Nub(b);e.a<e.c.a.length;){d=Lub(e);h=CGb+d.col+DGb+d.row;d.value==null?nsb(a.e,h):lsb(a.e,h,d);if(!b$(a,h,d.value,d.cellStyle,d.needsMeasure)){f=null;JY(a,d.col,d.row)?(f=iub(iub(a.ic,d.row-a.db),d.col-a.bb)):IY(a,d.col,d.row)&&(f=eY(a,d.col,d.row));if(f){NP(f,d.value,d.cellStyle,d.needsMeasure);f.g=true}g=a.Qc>0?0:a.bb;for(;g<d.col;g++){c=XX(a,g,d.row);!!c&&(c.g=true)}}}T$(a,false)}
function F9(b,c){var d,e,f,g,h,i,j;e=c['changes'];i=e.length;i!=0&&(b.a=false);HBb(QBb((nnb(QA),QA.k)),' * Passing UIDL to Vaadin 6 style connectors');for(h=0;h<i;h++){try{d=e[h];j=d[2];f=j[1]['id'];null.Ng();NBb(QBb((nnb(QA),QA.k)),'Received update for '+j[0]+', but there is no such paintable ('+f+') rendered.')}catch(a){a=GG(a);if(fs(a,11)){g=a;JBb(QBb((nnb(QA),QA.k)),(KAb(),IAb),'Error handling UIDL',g)}else throw HG(a)}}}
function aZ(b){var c,d,e,f,g;e=b.Jc+((b.xc.scrollTop||0)|0);d=Yh(b.xc);g=e-b.Ob;c=d-b.Nb;if($wnd.Math.abs(g)<(b.a.M/2|0)&&$wnd.Math.abs(c)<(b.a.j/2|0)){return}try{if($wnd.Math.abs(c)>(b.a.j/2|0)){b.Nb=d;c>0?wY(b,d):c<0&&vY(b,d)}if($wnd.Math.abs(g)>(b.a.M/2|0)){b.Ob=e;g>0?AY(b,e):g<0&&BY(b,e)}oeb(b.Pb)}catch(a){a=GG(a);if(fs(a,11)){f=a;NBb(b.U,'SheetWidget:updateSheetDisplay: '+fg(f,f.Gd()))}else throw HG(a)}DZ(b);G$(b,g,c);SX(b)}
function Emb(){lU.call(this);this.p=new Nmb;this.b=new Fmb;this.d=new Kxb;this.d.put('error',new Kmb('Error: ',' - close with ESC-key',(tmb(),rmb)));this.d.put('warning',new Kmb('Warning: ',null,rmb));this.d.put('humanized',new Kmb('Info: ',null,rmb));this.d.put('tray',new Kmb('Status: ',null,rmb));this.d.put('assistive',new Kmb('Note: ',null,rmb));this.f=new wmb;this.c=new Hmb;this.i=new Lmb;this.j=new Mmb;this.lb='v-ui';this.k=1}
function SZ(a,b){var c,d,e,f,g;if(!a.s){a.s=b}else{osb(a.s);!!b&&Nrb(a.s,b)}if(!!b&&b.d.c+b.e.c!=0){g=new cpb;for(e=(f=(new ttb(b)).a.qg().Oe(),new ztb(f));e.a.Ze();){c=Job(Job((d=e.a.$e(),d.Ag()),CGb,CHb),' r','.r');g.a+=''+c;e.a.Ze()&&(g.a+=',',g)}if(!a.pb){a.pb=Hj($doc);a.pb.type=VHb;ci(a.pb,a.yc+'-hyperlinkstyle');Dh(Eh(a.w),a.pb);g.a+='{ cursor: pointer !important; }';CW(a.pb,g.a)}else{GW(a.pb,g.a,0)}}else{!!a.pb&&GW(a.pb,MHb,0)}}
function erb(a,b){var c,d,e,f,g,h,i,j,k,l;g=a.e;i=b.e;if(i==0){return a}if(g==0){return b.e==0?b:new tqb(-b.e,b.d,b.a)}f=a.d;h=b.d;if(f+h==2){c=JG(a.a[0],eLb);d=JG(b.a[0],eLb);g<0&&(c=VG(c));i<0&&(d=VG(d));return Fqb($G(c,d))}e=f!=h?f>h?1:-1:crb(a.a,b.a,f);if(e==-1){l=-i;k=g==i?frb(b.a,h,a.a,f):arb(b.a,h,a.a,f)}else{l=g;if(g==i){if(e==0){return $pb(),Zpb}k=frb(a.a,f,b.a,h)}else{k=arb(a.a,f,b.a,h)}}j=new tqb(l,k.length,k);bqb(j);return j}
function Nnb(a,b){var c,d,e,f,g;if(a==null){throw HG(new sob(NDb))}if(b<2||b>36){throw HG(new sob('radix '+b+' out of range'))}e=a.length;f=e>0&&(lDb(0,a.length),a.charCodeAt(0)==45||(lDb(0,a.length),a.charCodeAt(0)==43))?1:0;for(c=f;c<e;c++){if(lnb((lDb(c,a.length),a.charCodeAt(c)),b)==-1){throw HG(new sob(MDb+a+'"'))}}g=parseInt(a,b);d=g<ODb;if(isNaN(g)){throw HG(new sob(MDb+a+'"'))}else if(d||g>EDb){throw HG(new sob(MDb+a+'"'))}return g}
function G$(a,b,c){var d,e,f,g,h,i,j;e=iub(iub(a.ic,0),0);j=iub(a.ic,a.ic.a.length-1);h=iub(j,j.a.length-1);f=e.k;i=h.k;d=e.c;g=h.c;rZ(a);if(f>a.zb||i<a.db||d>a.xb||g<a.bb){HZ(a,a.db,a.zb,a.bb,a.xb,a.ic,a.xc);b!=0&&a.ob>0&&HZ(a,a.db,a.zb,1,a.ob,a.d,a.c);c!=0&&a.Qc>0&&HZ(a,1,a.Qc,a.bb,a.xb,a.Oc,a.Nc)}else{IZ(a,b,c,a.db,a.zb,a.bb,a.xb,a.ic,a.xc);b!=0&&a.ob>0&&IZ(a,b,0,a.db,a.zb,1,a.ob,a.d,a.c);c!=0&&a.Qc>0&&IZ(a,0,c,1,a.Qc,a.bb,a.xb,a.Oc,a.Nc)}}
function cqb(a,b){var c,d,e,f,g,h,i,j,k,l;if(b.e==0){throw HG(new $mb(fLb))}e=b.e;if(b.d==1&&b.a[0]==1){return b.e>0?a:a.e==0?a:new tqb(-a.e,a.d,a.a)}k=a.e;j=a.d;d=b.d;if(j+d==2){l=MG(JG(a.a[0],eLb),JG(b.a[0],eLb));k!=e&&(l=VG(l));return Fqb(l)}c=j!=d?j>d?1:-1:crb(a.a,b.a,j);if(c==0){return k==e?Vpb:Upb}if(c==-1){return Zpb}g=j-d+1;f=or(qs,OHb,18,g,15,1);h=k==e?1:-1;d==1?Vqb(f,a.a,j,b.a[0]):Tqb(f,g,a.a,j,b.a,d);i=new tqb(h,g,f);bqb(i);return i}
function srb(a){krb();var b,c,d,e;b=ms(a);if(a<irb.length){return irb[b]}else if(a<=50){return mqb(($pb(),Xpb),b)}else if(a<=YEb){return oqb(mqb(hrb[1],b),b)}if(a>XEb){throw HG(new $mb('power of ten too big'))}if(a<=EDb){return oqb(mqb(hrb[1],b),b)}d=mqb(hrb[1],EDb);e=d;c=OG(a-EDb);b=ms(a%EDb);while(KG(c,EDb)>0){e=lqb(e,d);c=$G(c,EDb)}e=lqb(e,mqb(hrb[1],b));e=oqb(e,EDb);c=OG(a-EDb);while(KG(c,EDb)>0){e=oqb(e,EDb);c=$G(c,EDb)}e=oqb(e,b);return e}
function V$(a,b,c,d,e,f){var g,h;nsb(a.Ac,CGb+d+DGb+c);lsb(a.Ac,CGb+f+DGb+e,b);h=b.Uc;if(f>=a.bb&&f<=a.xb&&e>=a.db&&e<=a.zb||f<=a.ob&&e<=a.Qc||f>a.ob&&f<=a.xb&&e<=a.Qc||e>a.Qc&&e<=a.zb&&f<=a.ob){g=XX(a,f,e);if(h){if(R(a,h)){(d>=a.bb&&d<=a.xb&&c>=a.db&&c<=a.zb||d<=a.ob&&c<=a.Qc||d>a.ob&&d<=a.xb&&c<=a.Qc||c>a.Qc&&c<=a.zb&&d<=a.ob)&&LP(XX(a,d,c));QP(g,(wI(),b.Vc))}else{uf(b);QP(g,(wI(),b.Vc));wf(b,a)}}else{QP(g,(wI(),b.Vc));wf(b,a)}}else !!h&&uf(b)}
function cT(a,b){a.D=b;a.G='1';!!a&&(Pe((!a.C&&(a.C=(HBb((e0(),d0),eHb),new v3)),a.C)).tkPid='1',undefined);iq((!a.F&&(a.F=new lq(a)),a.F),(kab(),jab),a);M2((!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C),a.G);kT(a,tz,a.a);z2((!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C),new K0(a));a.i=new alb;e3((!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C),a.i);a3((!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C),new O0(a));a.b=of(d4(a.D),new P0,(Sn(),Sn(),Rn));Mjb(a.i.d,rr(mr(oE,1),zDb,1,5,[]))}
function _U(a,b){var c,d;a.S=KY(a.Q,a.f,a.L);a.T=LY(a.Q,a.f,a.L);a.R=HY(a.Q,a.f,a.L);a.g=!a.S&&!a.T;a.i=!a.S&&!a.R;a.t=Yh(a.Q.xc);a.u=(a.Q.xc.scrollTop||0)|0;a.c=(c=Wj($doc),H7(),(mi(),b).type.indexOf(lHb)!=-1?qn(b.changedTouches[0])+c:Hi(b.clientX||0)+c);a.d=(d=Xj($doc),b.type.indexOf(lHb)!=-1?rn(b.changedTouches[0])+d:Hi(b.clientY||0)+d);a.U=a.f;a.V=a.L;a.C=true;a.j=false;a.s=false;wV(a);II((wI(),a.Vc));li.Vd(b);Mh(Pe(a.Q),'selecting');oV(a,true)}
function vab(b,c){var d,e,f,g,h;e=new Uq((Pq(),Oq),(i=null.Ng(),Omb(i,'v-uiId='+null.Ng().Ng())));h=(d=qI(),d.e.a.get(_Ib));h!=null&&h.length!=0&&Rq(e,aJb,h);Rq(e,KFb,XIb);Tq(e,Smb(c));g=new Bab;Aab(g,null.Ng());dr(bJb,g);e.a=g;HBb(QBb((nnb(aB),aB.k)),'Sending xhr message to server: '+Smb(c));try{f=(dr(bJb,e.a),Qq(e,e.e,e.a));b.a&&(F4(),!E4&&(E4=new T4),F4(),E4).a.s&&ub(new yab(b,f),250)}catch(a){a=GG(a);if(fs(a,74)){null.Ng().Ng()}else throw HG(a)}}
function N9(a){var b,c,d;null.Ng();if(null.Ng()==0&&!a.d){return}b4();false&&NJ(_Hb)!=null&&(null.Ng(),y6());d=null.Ng();c=null.Ng();null.Ng();if(null.Ng()==0&&!a.d){OBb(QBb((nnb(SA),SA.k)),'All RPCs filtered out, not sending anything to the server');return}b={};if(!null.Ng().Ng()){b['wsver']=(Nlb(),Nlb(),Mlb);null.Ng().Ng()}if(a.d){HBb(QBb((nnb(SA),SA.k)),'Resynchronizing from server');null.Ng();b[dJb]=Object(true);a.d=false}d&&null.Ng().Ng();Q9(a,c,b)}
function nj(a){if(a.offsetTop==null){return 0}var b=0;var c=a.ownerDocument;var d=a.parentNode;if(d){while(d.offsetParent){b-=d.scrollTop;d=d.parentNode}}while(a){b+=a.offsetTop;if(c.defaultView.getComputedStyle(a,'')[$Eb]==_Eb){b+=c.body.scrollTop;return b}var e=a.offsetParent;e&&$wnd.devicePixelRatio&&(b+=parseInt(c.defaultView.getComputedStyle(e,'').getPropertyValue('border-top-width')));if(e&&e.tagName=='BODY'&&a.style.position==aFb){break}a=e}return b}
function zeb(a,b){var c;c=(wI(),QJ((mi(),b).type));if(a.c||a.e==nKb){if(c==1||c==HDb){if(DI(a.Vc,li.Ud(b))){web(a);return false}}else if(c==128&&(b.keyCode|0)==27){web(a);return false}return a.e==nKb}switch(c){case 64:if(a.f<0){a.f=Hi(b.clientX||0);a.g=Hi(b.clientY||0)}else ($wnd.Math.abs(Hi(b.clientX||0)-a.f)>7||$wnd.Math.abs(Hi(b.clientY||0)-a.g)>7)&&xeb(a);break;case 4:case XFb:case PDb:xeb(a);break;case 128:{if(b.repeat){return true}}xeb(a);}return true}
function h7(){PM();var a;FQ.call(this,false,false);this.g=new E6;this.f=new FL;this.e=new j6;this.c=false;this.o=false;this.i=false;wI();Pj($doc);this.d=null;this.r=new k7(this);this.b=new m7(this);this.j=new o7(this);this.s=new A7(this);OM.ff((null,Uh(this.Vc))).className=eIb;a=new nL;rL(this,a);WM(this);lL(a,this.g);Ye(this.f,'v-tooltip-text');lL(a,this.f);ve();Hb(re,this.Vc);Jb(this.Vc,(Dc(),Ac));Kb(this.Vc,rr(mr(tt,1),zDb,89,0,[(jd(),ed)]));pQ(this,aQ+1)}
function a_(a){var b,c,d;a.W=or(qs,OHb,18,a.a.P,15,1);a.Jc=0;d=0;if(a.Qc>0){d=pX(a,1,a.Qc);a.Jc=ms(d+1)}b=pX(a,a.Qc+1,a.a.P);a.Bb=0;a.ob>0&&(a.Bb=sX(a,1,a.ob));c=sX(a,a.ob+1,a.a.i);_$(a);d>0&&a.Bb>0?_h(a.Lc,dIb):Mh(a.Lc,dIb);d>0?_h(a.Nc,dIb):Mh(a.Nc,dIb);a.Bb>0?_h(a.c,dIb):Mh(a.c,dIb);a.Nc.style[HGb]=(Im(),nGb);a.c.style[IGb]=nGb;a.I.style[HGb]=nGb;a.ec.style[HGb]=nGb;WY(a);a.fb.style[HEb]=b+qGb;a.fb.style[IEb]=c+qGb;a.c.style[HEb]=b+qGb;a.Nc.style[IEb]=c+qGb}
function LJ(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;k=new Kxb;if(b!=null&&b.length>1){l=b.substr(1);for(h=Mob(l,'&',0),i=0,j=h.length;i<j;++i){g=h[i];f=Mob(g,'=',2);e=f[0];if(e.length==0){continue}m=f.length>1?f[1]:'';try{m=(dr('encodedURLComponent',m),o=/\+/g,decodeURIComponent(m.replace(o,'%20')))}catch(a){a=GG(a);if(!fs(a,66))throw HG(a)}n=k.get(e);if(!n){n=new oub;k.put(e,n)}n.add(m)}}for(d=n6(k.qg());d.Ze();){c=d.$e();c.Cg(mvb(c.Bg()))}k=(jvb(),new Dwb(k));return k}
function zZ(a){var b,c;if(a.ib){if(a.ob>0){BZ(a)}else{sZ(a.ib);a.ib=null}}else if(a.ob>0){a.ib=new oub;BZ(a)}for(c=a.bb;c<=a.xb;c++){if(c>a.ob){if(c-a.bb<a.K.a.length){b=iub(a.K,c-a.bb)}else{b=wj($doc);Dh(a.Nc,b);eub(a.K,c-a.bb,b)}b.className=WHb+c||'';di(b,p1(c)+XHb);Pxb(a.rc,kob(c))&&Mh(b,HHb)}else{NBb(a.U,'Trying to add plain column header (index:'+c+') into frozen pane, horizontalSplitPosition: '+a.ob)}}while(a.K.a.length>a.xb-a.bb+1){Kh(lub(a.K,a.K.a.length-1))}}
function EZ(a){var b,c;if(a.jb){if(a.Qc>0){CZ(a)}else{sZ(a.jb);a.jb=null}}else if(a.Qc>0){a.jb=new oub;CZ(a)}for(b=a.db;b<=a.zb;b++){if(a.Qc<b){if(b-a.db<a.gc.a.length){c=iub(a.gc,b-a.db)}else{c=wj($doc);Dh(a.c,c);eub(a.gc,b-a.db,c)}c.className=YHb+b||'';c.innerHTML=''+b+XHb||'';Pxb(a.uc,kob(b))&&Mh(c,GHb)}else{NBb(a.U,'Trying to add plain row header (index:'+b+') into frozen pane, verticalSplitPosition: '+a.Qc)}}while(a.gc.a.length>a.zb-a.db+1){Kh(lub(a.gc,a.gc.a.length-1))}}
function jY(a,b,c,d){var e,f,g,h,i;f=gY(a,CGb+d.c+DGb+d.k);if(!f){i=d.d;g=d.c;h=d.k;e=false;if(b<(mi(),li).Wd(i)&&d.c>a.bb){--g;while(w1(a.a,g)&&g>a.bb){--g}e=true}else if(b>li.Wd(i)+((i.offsetWidth||0)|0)&&d.c<a.xb){++g;while(w1(a.a,g)&&g<a.xb){++g}e=true}if(c<li.Xd(i)&&d.k>a.db){--h;while(x1(a.a,h)&&h>a.db){--h}e=true}else if(c>li.Xd(i)+((i.offsetHeight||0)|0)&&d.k<a.zb){++h;while(x1(a.a,h)&&h<a.zb){++h}e=true}if(e){return jY(a,b,c,XX(a,g,h))}return d}else{return f}}
function TU(a,b){var c,d,e,f,g,h,i;e=a.c.wc.e;g=a.c.wc.f;i=a.c.wc.K;c=a.c.wc.L;d=a.c.pc;h=a.c.qc;f=s1(a.d,d,h);if(!!f&&a.a!=0){d=a.a;h=f.row1}--h;while(!!a.d.A&&jub(a.d.A,kob(h),0)!=-1&&h>1){--h}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(h<i){h=c;while(!!a.d.A&&jub(a.d.A,kob(h),0)!=-1&&h>i){--h}--d;while(!!a.d.w&&jub(a.d.w,kob(d),0)!=-1&&d>=e){--d}d<e&&(d=g);while(!!a.d.w&&jub(a.d.w,kob(d),0)!=-1&&d>=e){--d}}KU(a,d,h)}else{h>0&&LU(a,d,h)}}
function QU(a,b){var c,d,e,f,g,h,i;e=a.c.wc.e;g=a.c.wc.f;i=a.c.wc.K;c=a.c.wc.L;d=a.c.pc;h=a.c.qc;f=s1(a.d,d,h);if(!!f&&a.a!=0){d=a.a;h=f.row2}++h;while(!!a.d.A&&jub(a.d.A,kob(h),0)!=-1&&h<a.d.P){++h}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(h>c){h=i;while(!!a.d.A&&jub(a.d.A,kob(h),0)!=-1&&h<c){++h}++d;while(!!a.d.w&&jub(a.d.w,kob(d),0)!=-1&&d<=g){++d}d>g&&(d=e);while(!!a.d.w&&jub(a.d.w,kob(d),0)!=-1&&d<=g){++d}}KU(a,d,h)}else{h<=a.d.P&&LU(a,d,h)}}
function SU(a,b){var c,d,e,f,g,h,i;e=a.c.wc.e;g=a.c.wc.f;i=a.c.wc.K;c=a.c.wc.L;d=a.c.pc;h=a.c.qc;f=s1(a.d,d,h);if(!!f&&a.b!=0){d=f.col2;h=a.b}++d;while(!!a.d.w&&jub(a.d.w,kob(d),0)!=-1&&d<a.d.i){++d}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(d>g){d=e;while(!!a.d.w&&jub(a.d.w,new bob(d),0)!=-1&&d<=g){++d}++h;while(!!a.d.A&&jub(a.d.A,kob(h),0)!=-1&&h<=c){++h}h>c&&(h=i);while(!!a.d.A&&jub(a.d.A,kob(h),0)!=-1&&h<=c){++h}}KU(a,d,h)}else{d<=a.d.i&&LU(a,d,h)}}
function RU(a,b){var c,d,e,f,g,h,i;e=a.c.wc.e;g=a.c.wc.f;i=a.c.wc.K;c=a.c.wc.L;d=a.c.pc;h=a.c.qc;f=s1(a.d,d,h);if(!!f&&a.b!=0){d=f.col1;h=a.b}--d;while(!!a.d.w&&jub(a.d.w,kob(d),0)!=-1&&d>0){--d}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(d<e){d=g;while(!!a.d.w&&jub(a.d.w,kob(d),0)!=-1&&d>=e){--d}--h;while(!!a.d.A&&jub(a.d.A,kob(h),0)!=-1&&h>=i){--h}h<i&&(h=c);while(!!a.d.A&&jub(a.d.A,kob(h),0)!=-1&&h>=i){--h}}KU(a,d,h)}else{d>0&&LU(a,d,h)}}
function Yqb(a,b){var c,d,e,f,g,h;c=iqb(a);d=iqb(b);e=$wnd.Math.min(c,d);Hqb(a,c);Hqb(b,d);if(_pb(a,b)==1){f=a;a=b;b=f}do{if(b.d==1||b.d==2&&b.a[1]>0){b=Fqb(Xqb((h=a.d>1?WG(XG(a.a[1],32),JG(a.a[0],eLb)):JG(a.a[0],eLb),UG(a.e,h)),(g=b.d>1?WG(XG(b.a[1],32),JG(b.a[0],eLb)):JG(b.a[0],eLb),UG(b.e,g))));break}if(b.d>a.d*1.2){b=nqb(b,a);b.e!=0&&Hqb(b,iqb(b))}else{do{grb(b.a,b.a,b.d,a.a,a.d);bqb(b);b.b=-2;Hqb(b,iqb(b))}while(_pb(b,a)>=0)}f=b;b=a;a=f}while(a.e!=0);return oqb(b,e)}
function iZ(b,c){var d,e,f,g,h,i;try{g=oY(b);if(!g){NBb(b.U,'Selected cell is null');return}MP(g,c);h=VY(b,g.b,c);d=g.c;if(b.ab){f=t1(b.a,b.pc,b.qc);d=f.col2;i=dV(b.a.g,f.col1,f.col2+1)}else{i=r1(b.a,d)}while(i<h&&d<b.a.i){i+=r1(b.a,++d)}af(b.sb,i+1+qGb)}catch(a){a=GG(a);if(fs(a,17)){e=a;NBb(b.U,'SheetWidget:recalculateInputElementWidth: '+fg(e,e.Gd())+' while calculating input element width');EY(b,b.pc,b.qc)||MZ(b,b.pc,b.qc);R6((Wg(),Vg),new q_(b,false))}else throw HG(a)}}
function Pqb(){Pqb=mH;Nqb=rr(mr(qs,1),OHb,18,15,[ODb,1162261467,hLb,cLb,362797056,1977326743,hLb,387420489,OFb,214358881,429981696,815730721,1475789056,170859375,268435456,410338673,612220032,893871739,1280000000,1801088541,113379904,148035889,191102976,bLb,308915776,387420489,481890304,594823321,729000000,887503681,hLb,1291467969,1544804416,1838265625,60466176]);Oqb=rr(mr(qs,1),OHb,18,15,[-1,-1,31,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5])}
function KR(a){var b,c,d,e,f,g,h,i;i=(f=fO(a.e),f==null?'':f);c=dO(a.e);e=0;while(--c>0){lDb(c,i.length);i.charCodeAt(c)==34&&(c==0||(lDb(c-1,i.length),i.charCodeAt(c-1)!=92))&&++e}if(e%2==1){return}g=-1;d=-1;c=dO(a.e);while(c>0){b=(lDb(c-1,i.length),i.charCodeAt(c-1));if(Hob(String.fromCharCode(b))){g=c;break}--c}c=dO(a.e);while(c<i.length){b=(lDb(c,i.length),i.charCodeAt(c));if(Hob(String.fromCharCode(b))){d=c;break}++c}h=i.substr(g,d-g);QR(a);if(UR(a,h)){a.s=g;a.q=d;oS(a,h)}}
function yZ(a){var b,c,d,e,f,g,h;EX(a.Kc);for(g=new Nub(a.Oc);g.a<g.c.a.length;){e=Lub(g);EX(e)}a.Oc.a=or(oE,zDb,1,0,5,1);for(h=new Nub(a.d);h.a<h.c.a.length;){e=Lub(h);EX(e)}a.d.a=or(oE,zDb,1,0,5,1);for(f=new Nub(a.ic);f.a<f.c.a.length;){e=Lub(f);EX(e)}a.ic.a=or(oE,zDb,1,0,5,1);Dh(a.xc,a.fb);if(a.Qc>0&&a.ob>0){OX(a);PX(a);JX(a)}else a.Qc>0?PX(a):a.ob>0&&JX(a);for(c=a.db;c<=a.zb;c++){e=new pub(a.xb);for(d=a.bb;d<=a.xb;d++){b=new VP(a,d,c);Dh(a.xc,b.d);e.a[e.a.length]=b}fub(a.ic,e)}}
function d8(a){var b,c,d;null.Ng((o4(),n4));a.a={transport:VIb,maxStreamingLength:XEb,fallbackTransport:WIb,contentType:XIb,reconnectInterval:5000,timeout:-1,maxReconnectOnClose:10000000,trackMessageLength:true,enableProtocol:true,handleOnlineOffline:false,messageDelimiter:String.fromCharCode(124)};b=NJ(_Hb);Aob('push',b)&&(a.a['logLevel']=_Hb,undefined);for(null.Ng().Ng();null.Ng();){c=null.Ng();d=null.Ng();null.Ng()||null.Ng()?(a.a[c]=null.Ng(),undefined):(a.a[c]=d,undefined)}j8(new J8(a))}
function KX(a){var b,c,d,e,f;f=wj($doc);Mh(f,'cell-range-bg-color');f.style[IEb]=(Im(),nGb);f.style[HEb]=nGb;Dh(a.xc,f);e=new Z4(f);b=Y4(e,UGb);b=Job(b,'!important','');Jh(a.xc,f);if(b!=null&&Rob(b).length!=0){d=Sf();(wI(),d.Vc).height=1;d.Vc.width=1;Vf(d.Vc.getContext('2d'),b);d.Vc.getContext('2d').fillRect(0,0,1,1);c='url("'+d.Vc.toDataURL()+'")';CW(a.Bc,'.'+a.yc+IHb+'background-image: '+c+' !important;'+'}')}else{CW(a.Bc,'.'+a.yc+IHb+'background-color: rgba(232, 242, 252, 0.8) !important;'+'}')}}
function l4(a,b){var c,d,e,f,g,h,i;if(b==null){return null}if(Aob(b.substr(0,11),'frontend://')){d=(h=null.Ng(),h);b=d+(''+b.substr(11))}if(Aob(b.substr(0,8),'theme://')){g=g4(a.a);b=g+b.substr(7)}Aob(b.substr(0,12),'published://')&&(b='app://APP/PUBLISHED'+b.substr(12));if(Aob(b.substr(0,6),'app://')){e=b.substr(6);f=null.Ng();null.Ng();b=f+(''+e)}if(Aob(b.substr(0,9),'vaadin://')){i=null.Ng();e=b.substr(9);b=i+(''+e)}if(Aob(b.substr(0,10),'context://')){c=null.Ng();e=b.substr(10);b=c+(''+e)}return b}
function HZ(a,b,c,d,e,f,g){var h,i,j,k,l;for(k=b;k<=c;k++){if(f.a.length>k-b){l=(dDb(k-b,f.a.length),f.a[k-b])}else{l=new oub;gDb(k-b,f.a.length);XCb(f.a,k-b,l)}for(h=d;h<=e;h++){if(l.a.length>h-d){i=(dDb(h-d,l.a.length),l.a[h-d]);RP(i,h,k,isb(a.e,CGb+h+DGb+k))}else{i=new WP(a,h,k,isb(a.e,CGb+h+DGb+k));Dh(g,i.d);gDb(h-d,l.a.length);XCb(l.a,h-d,i)}}while(l.a.length>e-d+1){Kh(lub(l,l.a.length-1).d)}}while(f.a.length>c-b+1){for(j=new Nub(lub(f,f.a.length-1));j.a<j.c.a.length;){i=Lub(j);Kh(i.d)}}T$(a,false)}
function _qb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;g=a.e;i=b.e;if(g==0){return b}if(i==0){return a}f=a.d;h=b.d;if(f+h==2){c=JG(a.a[0],eLb);d=JG(b.a[0],eLb);if(g==i){k=IG(c,d);o=bH(k);n=bH(ZG(k,32));return n==0?new sqb(g,o):new tqb(g,2,rr(mr(qs,1),OHb,18,15,[o,n]))}return Fqb(g<0?$G(d,c):$G(c,d))}else if(g==i){m=g;l=f>=h?arb(a.a,f,b.a,h):arb(b.a,h,a.a,f)}else{e=f!=h?f>h?1:-1:crb(a.a,b.a,f);if(e==0){return $pb(),Zpb}if(e==1){m=g;l=frb(a.a,f,b.a,h)}else{m=i;l=frb(b.a,h,a.a,f)}}j=new tqb(m,l.length,l);bqb(j);return j}
function oS(a,b){var c,d,e,f,g,h,i,j,k,l;if(jsb(a.G,b)){j=$R(a,b);if(!j){return}f=$wnd.Math.min(j.col1,j.col2);e=$wnd.Math.max(j.col1,j.col2);l=$wnd.Math.min(j.row1,j.row2);k=$wnd.Math.max(j.row1,j.row2);if(e>20000){EBb(QBb((nnb(sy),sy.i)),WGb);return}for(c=f;c<=e;c++){for(i=l;i<=k;i++){d=XX(a.I,c,i);if(d){h=d.d;g=Job(isb(a.G,b),'%s','0.75');c==f&&(h.style['borderLeft']=XGb+g,undefined);c==e&&(h.style[YGb]=XGb+g,undefined);i==l&&(h.style['borderTop']=XGb+g,undefined);i==k&&(h.style[ZGb]=XGb+g,undefined)}}}a.A=b}}
function QM(a){var b,c,d,e,f;d=a.R;c=a.K;if(!d){(wI(),a.Vc).style[fFb]=sFb;!!a.B&&(a.B.style[fFb]=sFb,undefined);a.K=false;Ceb(a,4,null)}b=(wI(),a.Vc);b.style[gGb]=(Im(),nGb);b.style[hGb]=nGb;e=(uJ(),(Zj($doc).clientWidth|0)-Wh(a.Vc,FEb)>>1);f=(Zj($doc).clientHeight|0)-Wh(a.Vc,oGb)>>1;nQ(a,$wnd.Math.max(Wj($doc)+e,0),$wnd.Math.max(Xj($doc)+f,0));if(!d){a.K=c;if(c){OM.gf(a.Vc,pGb);a.Vc.style[fFb]=rFb;!!a.B&&(a.B.style[fFb]=rFb,undefined);Y(a.Q,200,Dg())}else{a.Vc.style[fFb]=rFb;!!a.B&&(a.B.style[fFb]=rFb,undefined)}}}
function F$(b){var c,d,e,f,g,h,i,j,k,l;h=(b4(),false&&NJ(_Hb)!=null);l=b.a.f;k=0;h&&(k=(hpb(),OG(Date.now())));i=b.a.O;c=b.a.k;if(l){try{j=new epb(nY(b.Bc));for(g=new Ksb((new Csb(l)).a);g.b;){f=Jsb(g);f.Ag().a==0?apb(j,DHb+b.yc+' .sheet .cell {'+f.Bg()+'}'):apb(j,rY(b,f.Ag(),i,c)+' {'+f.Bg()+'}')}Ih(b.Bc);Dh(b.Bc,Oj($doc,j.a))}catch(a){a=GG(a);if(fs(a,17)){d=a;NBb(b.U,'SheetWidget:updateStyles: '+fg(d,d.Gd())+aIb)}else throw HG(a)}}if(h){e=(hpb(),OG(Date.now()));HBb(b.U,'Style update took:'+cH($G(e,k))+'ms')}hZ(b);KX(b)}
function i0(a,b){var c,d,e,f,g;f=(!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C);e=(!a.L&&(a.L=new R3),a.L);if(b.Yf('componentIDtoCellKeysMap')){c=e.o;d=new Kxb;if(!!c&&c.d.c+c.e.c!=0){jvb();uvb()}k$(f.W,d)}b.Yf('cellKeysToEditorIdMap')&&m0(a);(b.Yf('cellComments')||b.Yf('cellCommentAuthors'))&&p2(f,e.b,e.a);b.Yf('visibleCellComments')&&n0(a);b.Yf('invalidFormulaCells')&&O2(f,e.F);b.Yf('overlays')&&(g=!(!a.L&&(a.L=new R3),a.L).N?(jvb(),jvb(),hvb):(!a.L&&(a.L=new R3),a.L).N,l0(a,g.keySet()),f0(a,g),a.c=g.keySet(),undefined);_$(f.W)}
function M1(a,b,c,d){var e,f,g,h,i;m1(a);g=a.W.Qc>0?1:tY(a.W);c||r3(a,b,g,null);if(c){i=a.W.pc;e=i>b?b:i;f=i>b?i:b;h=a.P;if(gV(a.W.wc)){$$(a.W,e,f,1,h);Y$(a.W,e,f,1,h,true)}else{Y$(a.W,e,f,1,h,false)}gV(a.W.wc)?Pjb(a.X,1,e,h,f):Sjb(a.X,1,e,h,f)}else if(d){a.W.C&&(a.W.C=false,undefined);gV(a.W.wc)&&h$(a.W,false);w$(a.W,b,g);UU(a.R);Y$(a.W,b,b,1,a.P,false);Tjb(a.X,g,b)}else{a.W.C||(a.W.C=true,undefined);if(!gV(a.W.wc)){h$(a.W,true);GX(a.W)}g$(a.W,b,g);$$(a.W,b,b,1,a.P);Y$(a.W,b,b,1,a.P,true);UU(a.R);Wjb(a.X,b,g)}ub(a.t,200)}
function Z1(a,b,c,d){var e,f,g,h,i;f=a.W.ob>0?1:fY(a.W);m1(a);c||r3(a,f,b,null);if(c){e=a.i;i=a.W.qc;g=i>b?b:i;h=i>b?i:b;if(gV(a.W.wc)){$$(a.W,1,e,g,h);Y$(a.W,1,e,g,h,true)}else{Y$(a.W,1,e,g,h,false)}gV(a.W.wc)?Pjb(a.X,g,1,h,e):Sjb(a.X,g,1,h,e)}else if(d){a.W.C&&(a.W.C=false,undefined);gV(a.W.wc)&&h$(a.W,false);w$(a.W,f,b);UU(a.R);Y$(a.W,1,a.i,b,b,false);ckb(a.X,b,f)}else{a.W.C||(a.W.C=true,undefined);if(!gV(a.W.wc)){h$(a.W,true);GX(a.W)}g$(a.W,f,b);$$(a.W,1,a.i,b,b);Y$(a.W,1,a.i,b,b,true);UU(a.R);ekb(a.X,b,f)}ub(a.t,200)}
function XM(a,b){var c,d,e,f;if(b.a||!a.P&&b.b){a.N&&(b.a=true);return}a.De(b);if(b.a){return}d=b.d;c=RM(a,d);c&&(b.b=true);a.N&&(b.a=true);f=(wI(),QJ((mi(),d).type));switch(f){case 512:case 256:case 128:{(d.keyCode|0)&TDb;(d.shiftKey?1:0)|(d.metaKey?8:0)|(d.ctrlKey?2:0)|(d.altKey?4:0);return}case 4:case YFb:{if(vI){b.b=true;return}}if(!c&&a.C){a.Ve(true);return}break;case 8:case 64:case 1:case 2:case HDb:{if(vI){b.b=true;return}break}case 2048:{e=li.Ud(d);if(a.N&&!c&&!!e){e.blur&&e!=$doc.body&&e.blur();b.a=true;return}break}}}
function yV(a,b,c){var d,e,f,g,h,i,j;if(b>=a.e&&b<=a.f&&c>=a.K&&c<=a.L){j=$wnd.Math.abs(a.L-c);h=$wnd.Math.abs(a.f-b);if(a._||j==0&&h==0){lV(a,0,0,0,0);mV(a,false);return}mV(a,true);a.j=true;if(j>h){i=$wnd.Math.max(a.K+1,a.L-j+1);lV(a,a.e,a.f,i,a.L)}else{i=$wnd.Math.max(a.e+1,a.f-h+1);lV(a,i,a.f,a.K,a.L)}}else if(c<a.K||c>a.L||b<a.e||b>a.f){mV(a,true);a.s=true;d=c-a.L;g=a.K-c;e=a.e-b;f=b-a.f;$wnd.Math.max(d,g)>$wnd.Math.max(e,f)?d>g?lV(a,a.e,a.f,a.L+1,c):lV(a,a.e,a.f,c+1,a.K-1):f>e?lV(a,a.f+1,b,a.K,a.L):lV(a,b+1,a.e-1,a.K,a.L)}}
function jW(a,b){var c;if(!a.c._){if(!a.b){return}c=(mi(),b).keyCode|0;switch(c){case 8:case 113:case 38:case 40:case 37:case 39:case 9:case 46:case 32:if(li.Rd(b)==0){f2(a.c.a,b,'');li.Vd(b);b.stopPropagation()}break;case 89:if(!a.a&&!!b.ctrlKey||!!b.metaKey){Mjb(a.c.a.X.C,rr(mr(oE,1),zDb,1,5,[]));li.Vd(b);b.stopPropagation()}break;case 90:if(!a.a&&!!b.ctrlKey||!!b.metaKey){Mjb(a.c.a.X.G,rr(mr(oE,1),zDb,1,5,[]));li.Vd(b);b.stopPropagation()}break;case 65:if(!a.a&&!!b.ctrlKey||!!b.metaKey){m2(a.c.a);li.Vd(b);b.stopPropagation()}}}}
function w$(a,b,c){var d,e,f,g,h,i;h=XX(a,a.pc,a.qc);g=gY(a,CGb+a.pc+DGb+a.qc);if(a.v){Oxb(a.u,new V_(a.pc,a.qc));if(h){Oxb(a.t,h);Mh(h.d,EHb)}if(g){Oxb(a.t,g);Mh(g.d,EHb)}a.v=false}else{Oxb(a.u,new V_(a.pc,a.qc));if(h){Oxb(a.t,h);Mh(h.d,EHb)}if(g){Oxb(a.t,g);Mh(g.d,EHb)}i=t1(a.a,b,c);PZ(a,c);if(i){for(d=i.row1+1;d<=i.row2;d++){PZ(a,d)}}OZ(a,b);if(i){for(d=i.col1+1;d<=i.col2;d++){OZ(a,d)}}}if(h){a.nb=null;_h(h.d,FHb)}!!g&&_h(g.d,FHb);f=XX(a,b,c);if(f){a.nb=new V_(f.c,f.k);Mh(f.d,FHb)}e=gY(a,CGb+b+DGb+c);!!e&&Mh(e.d,FHb);a.qc=c;a.pc=b}
function NX(a,b,c,d,e){var f,g,h,i,j,k,l,m;l=e;m=new Kxb;for(h=c;h<=d;h++){k=new cpb;j=a.W[h-1];apb(Zob(apb(Zob(apb(apb(apb(Zob(apb(apb(apb(Zob(apb(apb((k.a+='.',k),a.yc),LHb),h),', .'),a.yc),'>.resize-line.row'),h),' { '),x1(a.a,h)?KHb:'display: flex;'),'height: '),j),'px; top:'),l),'px; }\n');l+=j;ksb(m,kob(h),kob(l));fub(b,k.a)}for(g=new Ksb((new Csb(a.Eb)).a);g.b;){f=Jsb(g);i=f.Bg().k-1;!(i==d&&d==a.Qc)&&fsb(m,kob(i))?(f.Bg().d.style[hGb]=hsb(m,kob(i)).a+(Im(),qGb),undefined):i<c&&d!=a.Qc&&(f.Bg().d.style[hGb]=(Im(),nGb),undefined)}}
function LX(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;l=e;m=new Kxb;for(k=c;k<=d;k++){n=new cpb;h=q1(a.a,k);apb(Zob(apb(Zob(apb(apb(apb(Zob(apb(apb(apb(Zob(apb(apb((n.a+='.',n),a.yc),JHb),k),', .'),a.yc),'>.resize-line.col'),k),' { '),w1(a.a,k)?KHb:''),'width: '),h),'px; left:'),l),'px; }\n');l+=h;ksb(m,kob(k),kob(l));fub(b,n.a)}f=Qh((wI(),a.Vc));for(j=new Ksb((new Csb(a.Eb)).a);j.b;){i=Jsb(j);g=i.Bg().c-1;!(g==d&&d==a.ob)&&fsb(m,kob(g))?(i.Bg().d.style[gGb]=hsb(m,kob(g)).a+(Im(),qGb),undefined):g>d&&d!=a.ob&&(i.Bg().d.style[gGb]=f+(Im(),qGb),undefined)}}
function _V(a,b,c,d,e){var f;_h(a.B,CGb+a.e+DGb+a.C);if(a.s>0&&b<a.s){b=a.s;ZV(a,true)}else{ZV(a,false)}if(a.t>0&&d<a.t){d=a.t;dW(a,true)}else{dW(a,false)}if(a.r>0&&e>a.r){e=a.r;WV(a,true);a.i.style[eFb]=($k(),GEb);a.g.style[eFb]=GEb}else{WV(a,false);a.i.style[eFb]=($k(),kFb);a.g.style[eFb]=kFb}if(a.q>0&&a.q<c){c=a.q;aW(a,true)}else{aW(a,false)}a.e=b;a.C=d;a.f=c;a.D=e;a.K=c-b;a.j=e-d;if(b<=c&&d<=e){Mh(a.B,CGb+a.e+DGb+a.C);kf((wI(),a.Vc),true);fW(a);f=a.F.q.W.W;f!=null&&f.length!=0&&YV(a,dV(a.F.q.W.W,a.C,a.D+1))}else{kf((wI(),a.Vc),false)}}
function Fpb(a){var b,c,d,e,f;if(a.g!=null){return a.g}if(a.a<32){a.g=Rqb(OG(a.f),ms(a.e));return a.g}e=Sqb((!a.c&&(a.c=Eqb(a.f)),a.c),0);if(a.e==0){return e}b=(!a.c&&(a.c=Eqb(a.f)),a.c).e<0?2:1;c=e.length;d=-a.e+c-b;f=new cpb;f.a+=''+e;if(a.e>0&&d>=-6){if(d>=0){bpb(f,c-ms(a.e),String.fromCharCode(46))}else{f.a=Oob(f.a,0,b-1)+'0.'+Nob(f.a,b-1);bpb(f,b+1,Vob(ppb,0,-ms(d)-1))}}else{if(c-b>=1){bpb(f,b,String.fromCharCode(46));++c}bpb(f,c,String.fromCharCode(69));d>0&&bpb(f,++c,String.fromCharCode(43));bpb(f,++c,''+cH(OG(d)))}a.g=f.a;return a.g}
function HR(){HR=mH;GR=new oub;fub(GR,'rgba(48, 144, 240, %s)');fub(GR,'rgba(236, 100, 100, %s)');fub(GR,'rgba(152, 223, 88, %s)');fub(GR,'rgba(249, 221, 81, %s)');fub(GR,'rgba(36, 220, 212, %s)');fub(GR,'rgba(236, 100, 165, %s)');fub(GR,'rgba(104, 92, 176, %s)');fub(GR,'rgba(255, 125, 66, %s)');fub(GR,'rgba(51, 97, 144, %s)');fub(GR,'rgba(170, 81, 77, %s)');fub(GR,'rgba(127, 176, 83, %s)');fub(GR,'rgba(187, 168, 91, %s)');fub(GR,'rgba(36, 121, 129, %s)');fub(GR,'rgba(150, 57, 112, %s)');fub(GR,'rgba(75, 86, 168, %s)');fub(GR,'rgba(154, 89, 61, %s)')}
function KZ(a,b,c,d){var e,f,g,h,i,j;j=false;b<=a.ob&&(b=a.ob+1);f=fY(a);h=kY(a);if(d){if(b<f){i=0;for(e=f-1;e>=b-1&&e>0;e--){i+=r1(a.a,e)}fi(a.xc,Yh(a.xc)-i);(b<=a.bb||i>(a.a.j/2|0))&&(j=true)}else if(b>h){i=0;g=a.a.i;for(e=h+1;e<=b+1&&e<=g;e++){i+=r1(a.a,e)}fi(a.xc,Yh(a.xc)+i);(b>=a.xb||i>(a.a.j/2|0))&&(j=true)}}else{if(c>h){i=0;g=a.a.i;for(e=h+1;e<=c+1&&e<=g;e++){i+=r1(a.a,e)}fi(a.xc,Yh(a.xc)+i);(c>=a.xb||i>(a.a.j/2|0))&&(j=true)}else if(c<f){i=0;for(e=f-1;e>=c-1&&e>0;e--){i+=r1(a.a,e)}fi(a.xc,Yh(a.xc)-i);(c<=a.bb||i>(a.a.j/2|0))&&(j=true)}}return j}
function D$(a,b,c,d,e,f,g){var h,i,j,k,l;if(f.a.length==0){return}i=new Nub(g);k=null;l=-1;while(i.a<i.c.a.length){h=Lub(i);if(h.row>=b&&h.row<=c&&h.col>=d&&h.col<=e){if(l!=h.row){(dDb(0,f.a.length),f.a[0]).a.length>0&&iub((dDb(0,f.a.length),f.a[0]),0).k!=b&&(b=iub((dDb(0,f.a.length),f.a[0]),0).k);k=iub(f,h.row-b);l=h.row;(dDb(0,k.a.length),k.a[0]).c!=d&&(d=(dDb(0,k.a.length),k.a[0]).c)}NP(iub(k,h.col-d),h.value,h.cellStyle,h.needsMeasure)}j=CGb+h.col+DGb+h.row;b$(a,j,h.value,h.cellStyle,h.needsMeasure);h.value==null?nsb(a.e,j):lsb(a.e,j,h)}T$(a,false)}
function TV(a){a.B.className=rHb;a.F._&&Mh(a.B,lHb);a.G.className='s-top';a.k.className='s-left';a.u.className='s-right';a.a.className='s-bottom';a.g.className='s-corner';a.i.className='s-corner-touch';a.I.className=sHb;a.o.className=sHb;a.w.className=sHb;a.c.className=sHb;a.J.className=tHb;a.p.className=tHb;a.A.className=tHb;a.d.className=tHb;if(a.F._){Dh(a.u,a.i);Dh(a.i,a.g)}else{Dh(a.u,a.g)}Dh(a.G,a.k);Dh(a.G,a.u);Dh(a.k,a.a);Dh(a.B,a.G);if(a.F._){Dh(a.G,a.J);Dh(a.k,a.p);Dh(a.u,a.A);Dh(a.a,a.d);Dh(a.J,a.I);Dh(a.p,a.o);Dh(a.A,a.w);Dh(a.d,a.c)}Ve(a,a.B)}
function Lr(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;c=a.l&8191;d=a.l>>13|(a.m&15)<<9;e=a.m>>4&8191;f=a.m>>17|(a.h&255)<<5;g=(a.h&1048320)>>8;h=b.l&8191;i=b.l>>13|(b.m&15)<<9;j=b.m>>4&8191;k=b.m>>17|(b.h&255)<<5;l=(b.h&1048320)>>8;B=c*h;C=d*h;D=e*h;F=f*h;G=g*h;if(i!=0){C+=c*i;D+=d*i;F+=e*i;G+=f*i}if(j!=0){D+=c*j;F+=d*j;G+=e*j}if(k!=0){F+=c*k;G+=d*k}l!=0&&(G+=c*l);n=B&MFb;o=(C&511)<<13;m=n+o;q=B>>22;r=C>>9;s=(D&262143)<<4;t=(F&31)<<17;p=q+r+s+t;v=D>>18;w=F>>5;A=(G&4095)<<8;u=v+w+A;p+=m>>22;m&=MFb;u+=p>>22;p&=MFb;u&=IDb;return wr(m,p,u)}
function xX(a,b,c){var d,e,f,g,h,i,j;i=Rh(a.xc);g=Ph(a.xc);f=Oh(a.xc);h=Qh(a.xc);a.A=c;a.B=b;b<i?(a.O||!a.Gc&&!a.Fc)&&(a.Y=b-i):b>f?(a.Y=b-f):(a.Y=0);c<g?(a.P||!a.Ec&&!a.Fc)&&(a.X=c-g):c>h?(a.X=c-h):(a.X=0);j=false;if(((a.xc.scrollTop||0)|0)!=0){e=b<i;if(!a.O&&(a.Fc||a.Gc)&&IY(a,a.Hc,a.Ic)&&!e){a.xc.scrollTop=0;bZ(a);a.O=true;j=true}}if(Yh(a.xc)!=0){d=c<g;if(!a.P&&(a.Fc||a.Ec)&&IY(a,a.Hc,a.Ic)&&!d){fi(a.xc,0);bZ(a);a.P=true;j=true}}if(a.Y<0&&((a.xc.scrollTop||0)|0)!=0||a.Y>0||a.X<0&&Yh(a.xc)!=0||a.X>0){q$(a);j=true}if(j){return true}else{u$(a);return false}}
function bV(a,b,c){var d,e,f,g,h,i,j;i=Rh(a.Q.xc);g=Ph(a.Q.xc);f=Oh(a.Q.xc);h=Qh(a.Q.xc);a.c=c;a.d=b;b<i?(a.g||!a.T&&!a.S)&&(a.n=b-i):b>f?(a.n=b-f):(a.n=0);c<g?(a.i||!a.R&&!a.S)&&(a.k=c-g):c>h?(a.k=c-h):(a.k=0);j=false;if(((a.Q.xc.scrollTop||0)|0)!=0){e=b<i;if(!a.g&&(a.S||a.T)&&IY(a.Q,a.U,a.V)&&!e){a.Q.xc.scrollTop=0;bZ(a.Q);a.u=0;a.g=true;j=true}}if(Yh(a.Q.xc)!=0){d=c<g;if(!a.i&&(a.S||a.R)&&IY(a.Q,a.U,a.V)&&!d){fi(a.Q.xc,0);bZ(a.Q);a.t=0;a.i=true;j=true}}if(a.n<0&&((a.Q.xc.scrollTop||0)|0)!=0||a.n>0||a.k<0&&Yh(a.Q.xc)!=0||a.k>0){sV(a);j=true}if(j){return true}else{uV(a);return false}}
function K$(a,b){var c,d,e,f;c=0;if(a.H>0){d=a.Z?a.H+1:a.H;c=3+d*18}f=0;if(a.dc>0){e=a.Z?a.dc+1:a.dc;f=1+e*15}if(f==0){a.ec.style[eFb]=($k(),GEb);a.fc.style[eFb]=GEb}else{a.ec.style[eFb]=($k(),kFb);a.fc.style[eFb]=kFb}a.Z||(a.fc.style[eFb]=($k(),GEb),undefined);!!a.jb&&a.dc>0?(a.bc.style[eFb]=($k(),kFb),undefined):(a.bc.style[eFb]=($k(),GEb),undefined);a.ec.style[IEb]=f+(Im(),qGb);a.ec.style[hGb]=b+qGb;a.bc.style[IEb]=f+qGb;a.bc.style[hGb]=b+qGb;a.fc.style[hGb]=b+c+qGb;if(a.Db){a.fc.style[HEb]=_X(a)+qGb;a.fc.style[cIb]=_X(a)+qGb}a.fc.style[IEb]=f+qGb;return f}
function H4(a){var b,c,d,e,f;if(D4==null){c='';d='';e='';b='';if(a.a.g){c='ff';d=c+a.a.b;e=d+a.a.c;b='gecko'}else if(a.a.e){c='sa';d='ch';b=BIb}else if(a.a.q){c='sa';d=c+a.a.b;e=d+a.a.c;b=BIb}else if(a.a.p){c='sa';d=c+a.a.b;e=d+a.a.c;b=BIb}else if(a.a.j){c='ie';d=c+a.a.b;e=d+a.a.c;b='trident'}else if(a.a.f){c='edge';d=c+a.a.b;e=d+a.a.c;b=''}else if(a.a.o){c='op';d=c+a.a.b;e=d+a.a.c;b='presto'}D4='v-'+c;d.length==0||(D4=D4+' '+'v-'+d);e.length==0||(D4=D4+' '+'v-'+e);b.length==0||(D4=D4+' '+'v-'+b);f=L4(a);f!=null&&(D4=D4+' '+f);a.b&&(D4=D4+' '+'v-'+lHb)}return D4}
function lj(a){if(a.offsetLeft==null){return 0}var b=0;var c=a.ownerDocument;var d=a.parentNode;if(d){while(d.offsetParent){b-=d.scrollLeft;c.defaultView.getComputedStyle(d,'').getPropertyValue('direction')=='rtl'&&(b+=d.scrollWidth-d.clientWidth);d=d.parentNode}}while(a){b+=a.offsetLeft;if(c.defaultView.getComputedStyle(a,'')[$Eb]==_Eb){b+=c.body.scrollLeft;return b}var e=a.offsetParent;e&&$wnd.devicePixelRatio&&(b+=parseInt(c.defaultView.getComputedStyle(e,'').getPropertyValue('border-left-width')));if(e&&e.tagName=='BODY'&&a.style.position==aFb){break}a=e}return b}
function lX(a,b){var c,d,e,f,g,h,i,j,k,l;l=new cpb;for(k=b.row1;k<=b.row2;k++){for(c=b.col1;c<=b.col2;c++){l.a+=CHb+c+'.row'+k;(k!=b.row2||c!=b.col2)&&(l.a+=',',l)}}if(l.a.length!=0){l.a+='{ display: none; }';CW(a.Fb,l.a)}i=CGb+b.col1+DGb+b.row1;j=new RS(a,b.col1,b.row1);f='cs0';d=XX(a,b.col1,b.row1);!!d&&(f=d.b);NP(j,$X(a,b.col1,b.row1),f,false);h=j.d;Mh(h,aHb);Q$(a,b,j);Dh(iY(a,b.col1,b.row1),h);ksb(a.Eb,kob(b.id),j);!!a.r&&a.r.containsKey(i)&&OP(j);!!a.tb&&a.tb.contains(i)&&PP(j);if(jsb(a.b,i)){e=isb(a.b,i);ZQ(e,h,b.row1,b.col1)}if(!!a.T&&jsb(a.T,i)){g=isb(a.T,i);kX(a,j,g)}}
function jQ(b,c){var d,e,f,g,h,i,j;if(!b.Rc){return}h=-1;try{h=Nnb(sk((wI(),b.Vc).style),10)}catch(a){a=GG(a);if(fs(a,17)){h=YEb}else throw HG(a)}h==-1&&(h=aQ);if((F4(),!E4&&(E4=new T4),F4(),E4).a.j){Wh((wI(),b.Vc),oGb);Wh(b.Vc,FEb)}f=(!E4&&(E4=new T4),E4);if(f.a.j&&O4(f)){g=new tgb((i=Ph((wI(),b.Vc)),i-=Qj($doc),i-=(cQ==-1&&(cQ=sQ(gGb)),cQ),i),(j=Rh(b.Vc),j-=Rj($doc),j-=(dQ==-1&&(dQ=sQ(hGb)),dQ),j),Wh(b.Vc,FEb),Wh(b.Vc,oGb));g.b+=ms(g.d*(1-c)/2);g.c+=ms(g.a*(1-c)/2);g.d=ms(g.d*c);g.a=ms(g.a*c);d=Eh(b.Vc);e=(!E4&&(E4=new T4),E4);if(e.a.j&&O4(e)){rQ(gQ(b),g);!Eh(b.B)&&Gh(d,b.B,b.Vc)}}}
function xr(a,b,c){var d,e,f,g,h,i;if(b.l==0&&b.m==0&&b.h==0){throw HG(new $mb('divide by zero'))}if(a.l==0&&a.m==0&&a.h==0){c&&(tr=wr(0,0,0));return wr(0,0,0)}if(b.h==NFb&&b.m==0&&b.l==0){return yr(a,c)}i=false;if(b.h>>19!=0){b=Mr(b);i=!i}g=Er(b);f=false;e=false;d=false;if(a.h==NFb&&a.m==0&&a.l==0){e=true;f=true;if(g==-1){a=vr((_r(),Xr));d=true;i=!i}else{h=Qr(a,g);i&&Cr(h);c&&(tr=wr(0,0,0));return h}}else if(a.h>>19!=0){f=true;a=Mr(a);d=true;i=!i}if(g!=-1){return zr(a,g,i,f,c)}if(Jr(a,b)<0){c&&(f?(tr=Mr(a)):(tr=wr(a.l,a.m,a.h)));return wr(0,0,0)}return Ar(d?a:wr(a.l,a.m,a.h),b,i,f,e,c)}
function FZ(a,b,c){var d,e;fi(a.xc,b);gi(a.xc,c);a.mc=(a.xc.offsetHeight||0)|0;a.nc=(a.xc.offsetWidth||0)|0;a.Nb=b;a.Ob=c;a.db=1;a.eb=0;a.Qc>0&&(a.db=a.Qc+1);a.bb=1;a.cb=0;a.ob>0&&(a.bb=a.ob+1);a.xb=0;GX(a);CX(a);d=a.a.j;if(a.cb<b-d){do{a.cb+=r1(a.a,a.bb);++a.bb}while(a.cb<b-d)}a.xb=a.bb;a.yb=a.cb+r1(a.a,a.bb);e=a.a.M;if(a.eb<c-e){do{a.db>=a.a.N.length?(a.eb+=cY(a)):(a.eb+=mY(a,a.db));++a.db}while(a.eb<c-e)}a.zb=a.db;a.Ab=a.eb+mY(a,a.zb);while(a.yb<b+a.nc+d&&a.xb<a.a.i){++a.xb;a.yb+=r1(a.a,a.xb)}while(a.Ab<c+a.mc+e&&a.zb<a.a.P){++a.zb;a.zb>=a.a.N.length?(a.Ab+=cY(a)):(a.Ab+=mY(a,a.zb))}}
function xh(a,b){var c,d,e,f,g,h,i,j,k;j='';if(b.length==0){return a.Nd(ADb,xDb,-1,-1)}k=Rob(b);Aob(k.substr(0,3),'at ')&&(k=k.substr(3));k=k.replace(/\[.*?\]/g,'');g=k.indexOf('(');if(g==-1){g=k.indexOf('@');if(g==-1){j=k;k=''}else{j=Rob(k.substr(g+1));k=Rob(k.substr(0,g))}}else{c=k.indexOf(')',g);j=k.substr(g+1,c-(g+1));k=Rob(k.substr(0,g))}g=Cob(k,Tob(46));g!=-1&&(k=k.substr(g+1));(k.length==0||Aob(k,'Anonymous function'))&&(k=xDb);h=Fob(j,Tob(58));e=Gob(j,Tob(58),h-1);i=-1;d=-1;f=ADb;if(h!=-1&&e!=-1){f=j.substr(0,e);i=rh(j.substr(e+1,h-(e+1)));d=rh(j.substr(h+1))}return a.Nd(f,k,i,d)}
function NV(a,b,c,d,e){var f;_h(a.k,CGb+a.b+DGb+a.n);if(a.g>0&&b<a.g){b=a.g;a.d.style[fFb]=(Wm(),sFb)}else{a.d.style[fFb]=(Wm(),rFb)}if(a.i>0&&d<a.i){d=a.i;a.q.style[fFb]=(Wm(),sFb)}else{a.q.style[fFb]=(Wm(),rFb)}if(a.f>0&&e>a.f){e=a.f;a.a.style[fFb]=(Wm(),sFb)}else{a.a.style[fFb]=(Wm(),rFb)}if(a.e>0&&a.e<c){c=a.e;a.j.style[fFb]=(Wm(),sFb)}else{a.j.style[fFb]=(Wm(),rFb)}a.b=b;a.n=d;a.c=c;a.o=e;if(b<=c&&d<=e){Mh(a.k,CGb+a.b+DGb+a.n);kf((wI(),a.Vc),true);a.Vc.style[sGb]='';RV(a);f=a.p.q.W.W;f!=null&&f.length!=0&&LV(a,dV(a.p.q.W.W,a.n,a.o+1))}else{kf((wI(),a.Vc),false);a.Vc.style[sGb]=(Rl(),sFb)}}
function uY(a,b,c){var d,e,f,g,h,i,j,k;a.Xb=true;d=b-a.Qb;d<0&&(d=0);zW(a.Ub);d>0?BL(a.Wb,'Width: '+d+qGb):BL(a.Wb,PHb);j='.'+a.yc+QHb+a.Yb+'{width:'+d+RHb;CW(a.Ub,j);e=0;k=Qh(a.xc)-b;for(g=a.Yb+1;g<=a.xb&&e<k;g++){e+=r1(a.a,g)}i=b-a.Rb;i<a.Qb-a.Rb&&(i=a.Qb-a.Rb);j='';for(h=a.Yb+1;h<=a.xb;h++){j+='.'+a.yc+QHb+h;a.xb!=h&&(j+=',')}if(!!a.ib&&a.Yb>=a.ib.a.length){for(f=1;f<=a.ib.a.length;f++){i+=r1(a.a,f)}}i=a.Cb+i;(!a.ib||a.Yb>a.ib.a.length)&&(i-=Yh(a.xc));if(j.length!=0){j+='{margin-left:'+i+RHb;CW(a.Ub,j)}j='.'+a.yc+'.col-resizing > div.resize-line.ch {margin-left:'+(i-1)+RHb;CW(a.Ub,j);m$(a,b,c)}
function eZ(a,b){a.yc='spreadsheet-'+b;Mh(a.Dc,a.yc);a.w.type=VHb;ci(a.w,a.yc+'-dynamicStyle');Dh(Eh($doc.body).firstChild,a.w);a.Bc.type=VHb;ci(a.Bc,a.yc+'-sheetStyle');Dh(Eh(a.w),a.Bc);a.Cc.type=VHb;ci(a.Cc,a.yc+'-customCellSizeStyle');Dh(Eh(a.w),a.Cc);a.$.type=VHb;ci(a.$,a.yc+'-editedCellStyle');Dh(Eh(a.w),a.$);CW(a.$,'.notusedselector{ display: inline !important; outline: none !important; width: auto !important; z-index: -10; }');CW(a.$,'.notusedselector{ overflow: hidden; }');a.Fb.type=VHb;ci(a.Fb,a.yc+'-mergedRegionStyle');Dh(Eh(a.w),a.Fb);a.Ub.type=VHb;ci(a.Ub,a.yc+'-resizeStyle');Dh(Eh(a.w),a.Ub)}
function Oab(a,b){var c,d;if(!a.e){a.e=new FL;of(a.e,new Rab(a),(Ln(),Ln(),Kn));of(a.e,new Tab(a),(Fp(),Fp(),Ep))}c=Rob(iL(a.e.a));c+=c.length==0?'Using Evaluation License of: ':', ';BL(a.e,c+b);KK((PN(),TN()),a.e);Pe(a.e).className='';d=Pe(a.e).style;d[$Eb]=(am(),_Eb);d[_Gb]=(lm(),'center');d['right']=(Im(),nGb);d[gGb]=nGb;d['bottom']=nGb;d['padding']='0.5em 1em';d['font-family']='sans-serif';d['fontSize']='12.0px';d[cIb]='1.1em';d['color']='white';d[UGb]='black';(mi(),d).opacity=0.7;d[gFb]='2147483646';d[hGb]=yGb;d[IEb]=yGb;d[eFb]=($k(),kFb);d['whiteSpace']=(gn(),'normal');d[fFb]=(Wm(),rFb);d['margin']=nGb}
function Y4(j,a){var b=j.a;var c=j.b;if(a.indexOf(VGb)>-1&&a.indexOf('Width')>-1){var d=a.substring(0,a.length-5)+'Style';if(b.getPropertyValue)var e=b.getPropertyValue(d);else var e=b[d];if(e==GEb)return '0px'}if(b.getPropertyValue){a=a.replace(/([A-Z])/g,'-$1').toLowerCase('en');var f=b.getPropertyValue(a)}else{var f=b[a];var g=c.style;if(!/^\d+(px)?$/i.test(f)&&/^\d/.test(f)){var h=g.left,i=c.runtimeStyle.left;c.runtimeStyle.left=b.left;g.left=f||0;f=g.pixelLeft+qGb;g.left=h;c.runtimeStyle.left=i}}if(a.indexOf('margin')>-1&&f==yGb){return '0px'}a==IEb&&f==yGb?(f=c.clientWidth+qGb):a==HEb&&f==yGb&&(f=c.clientHeight+qGb);return f}
function Gdb(a,b){var c,d,e,f,g,h,i;if(!a.j){f=Dg()-a.b[0];HBb(QBb((nnb(jC),jC.k)),f+' ms from start to move')}e=(h=(mi(),b).changedTouches[0],a.f=Hi(h.clientY||0),i=a.k++,i=i%3,a.b[i]=Dg(),a.s[i]=a.f,a.j?a.j:$wnd.Math.abs(a.o-a.f)>=3);if(e){c=a.o-a.f;d=a.n+c;if(d>((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)){g=c+a.n-(((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0));g=g/2|0;g>(wdb?0:(a.q.clientHeight|0)/3|0)&&(g=wdb?0:(a.q.clientHeight|0)/3|0);c=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)+g-a.n}else if(d<0){g=d/2|0;-g>(wdb?0:(a.q.clientHeight|0)/3|0)&&(g=-(wdb?0:(a.q.clientHeight|0)/3|0));c=g-a.n}Jdb(a,c);a.j=true;li.Vd(b);b.stopPropagation()}}
function ad(){ad=mH;Yc=new Sb('aria-activedescendant');new Vc('aria-atomic');new Sb('aria-autocomplete');new Sb('aria-controls');new Sb('aria-describedby');new Sb('aria-dropeffect');new Sb('aria-flowto');new Vc('aria-haspopup');Zc=new Vc('aria-label');new Sb('aria-labelledby');new Vc('aria-level');$c=new Sb('aria-live');new Vc('aria-multiline');new Vc('aria-multiselectable');new Sb('aria-orientation');new Sb('aria-owns');new Vc('aria-posinset');new Vc('aria-readonly');_c=new Sb('aria-relevant');new Vc('aria-required');new Vc('aria-setsize');new Sb('aria-sort');new Vc('aria-valuemax');new Vc('aria-valuemin');new Vc('aria-valuenow');new Vc('aria-valuetext')}
function MZ(a,b,c){var d,e,f,g,h,i,j,k,l,m;l=false;f=fY(a);if(b<f&&b>a.ob){k=0;for(e=f-1;e>=b-1&&e>0;e--){k+=r1(a.a,e)}fi(a.xc,Yh(a.xc)-k);(b<=a.bb||k>(a.a.j/2|0))&&(l=true)}else{j=kY(a);if(b>j){k=0;g=a.a.i;for(e=j+1;e<=b+1&&e<=g;e++){k+=r1(a.a,e)}fi(a.xc,Yh(a.xc)+k);(b>=a.xb||k>(a.a.j/2|0))&&(l=true)}}m=tY(a);if(c<m&&c>a.Qc){k=0;for(e=m-1;e>=c-1&&e>0;e--){k+=x1(a.a,e)?0:e>=a.W.length?cY(a):a.W[e-1]}i=((a.xc.scrollTop||0)|0)-k;gi(a.xc,i>0?i:0);(c<=a.db||k>(a.a.M/2|0))&&(l=true)}else{d=WX(a);if(c>d){k=0;h=a.a.P;for(e=d+1;e<=c+1&&e<=h;e++){k+=x1(a.a,e)?0:e>=a.W.length?cY(a):a.W[e-1]}gi(a.xc,((a.xc.scrollTop||0)|0)+k);(c>=a.zb||k>(a.a.M/2|0))&&(l=true)}}if(l){aZ(a);WY(a)}}
function jX(a){a.U=QBb('spreadsheet SheetWidget');a.oc=new Kxb;a.Dc=wj($doc);a.xc=wj($doc);a.N=wj($doc);a.fb=wj($doc);a.Sb=wj($doc);a.Tb=wj($doc);a.gc=new oub;a.jb=new oub;a.K=new oub;a.ib=new oub;a.ic=new oub;a.Kc=new oub;a.Oc=new oub;a.d=new oub;a.w=Hj($doc);a.Bc=Hj($doc);a.Cc=Hj($doc);a.$=Hj($doc);a.Ub=Hj($doc);a.Fb=Hj($doc);a.Lb=wj($doc);a.Lc=wj($doc);a.Nc=wj($doc);a.c=wj($doc);a.I=wj($doc);a.ec=wj($doc);a.F=wj($doc);a.bc=wj($doc);a.kb=wj($doc);a.J=wj($doc);a.fc=wj($doc);a.D=wj($doc);a.ac=wj($doc);a.hb=Gj($doc);a.wb=new HW;a.t=new Rxb;a.u=new Rxb;a.uc=new Rxb;a.rc=new Rxb;a.tc=new Rxb;a.sc=new Rxb;a.p=new peb(300,new i_(a));a.Hb=new peb(100,new C_(a));a.kc=new E_(a);a.Ib=new I_(a)}
function zpb(a,b){var c,d,e,f,g,h,i,j,k,l;j=(!a.c&&(a.c=Eqb(a.f)),a.c);k=(!b.c&&(b.c=Eqb(b.f)),b.c);c=a.e-b.e;g=0;e=1;h=upb.length-1;if(b.a==0&&b.f!=-1){throw HG(new $mb('Division by zero'))}if(j.e==0){return Tpb(c)}d=gqb(j,k);j=cqb(j,d);k=cqb(k,d);f=iqb(k);k=pqb(k,f);do{l=dqb(k,upb[e]);if(l[1].e==0){g+=e;e<h&&++e;k=l[0]}else{if(e==1){break}e=1}}while(true);if(!eqb(k.e<0?new tqb(1,k.d,k.a):k,($pb(),Vpb))){throw HG(new $mb('Non-terminating decimal expansion; no exact representable decimal result'))}k.e<0&&(j=j.e==0?j:new tqb(-j.e,j.d,j.a));i=Ppb(c+$wnd.Math.max(f,g));e=f-g;j=e>0?(krb(),e<jrb.length?prb(j,jrb[e]):e<hrb.length?lqb(j,hrb[e]):lqb(j,mqb(hrb[1],e))):oqb(j,-e);return new Jpb(j,i)}
function J$(a,b){var c,d,e;a.kb.style[hGb]=b+(Im(),qGb);c=0;if(a.H>0){d=a.Z?a.H+1:a.H;c=3+d*18}e=0;a.dc>0&&(e=1+(a.dc+1)*15);if(c==0){a.I.style[eFb]=($k(),GEb);a.J.style[eFb]=GEb}else{a.I.style[eFb]=($k(),kFb);a.J.style[eFb]=kFb}a.Z||(a.J.style[eFb]=($k(),GEb),undefined);!!a.ib&&a.H>0?(a.F.style[eFb]=($k(),kFb),undefined):(a.F.style[eFb]=($k(),GEb),undefined);a.I.style[HEb]=c+qGb;a.I.style[hGb]=b+qGb;a.F.style[HEb]=c+qGb;a.F.style[hGb]=b+qGb;a.J.style[hGb]=b+qGb;a.J.style[HEb]=c+qGb;a.Db&&(a.J.style[IEb]=lY(a)+qGb,undefined);a.J.style[gGb]=e+qGb;a.D.style[hGb]=b+qGb;a.D.style[gGb]=e+qGb;a.D.style[HEb]=c+qGb;a.ac.style[hGb]=b+c+qGb;a.ac.style[gGb]=nGb;a.ac.style[IEb]=e+qGb;a.g=e;a.f=c;return c}
function SR(a,b){var c,d;switch((mi(),b).keyCode|0){case 8:case 46:a.t.$?ub(new JS(a),100):R6((Wg(),Vg),new LS(a));R6((Wg(),Vg),new NS(a));break;case 27:hO(a.j,a.c);S1(a.t);kS(a);b.stopPropagation();li.Vd(b);break;case 13:R1(a.t,(d=fO(a.j),d==null?'':d));kS(a);b.stopPropagation();li.Vd(b);break;case 9:V1(a.t,(c=fO(a.j),c==null?'':c),!b.shiftKey);kS(a);b.stopPropagation();break;case 38:if(a.g){WR(a,!!b.shiftKey,true,false,false);li.Vd(b)}break;case 39:if(a.g){WR(a,!!b.shiftKey,false,true,false);li.Vd(b)}break;case 40:if(a.g){WR(a,!!b.shiftKey,false,false,true);li.Vd(b)}break;case 37:if(a.g){WR(a,!!b.shiftKey,false,false,false);li.Vd(b)}break;default:LR(a,a.j);}if(a.e){pS(a,false);R6((Wg(),Vg),new zS(a))}}
function yY(a,b,c){var d,e,f,g,h,i,j,k;a.Xb=true;d=c-a.Qb;d<0&&(d=0);zW(a.Ub);d>0?BL(a.Wb,'Height: '+d+'px \u2248 '+Apb(Rpb(d/a.Kb*72))+'pt'):BL(a.Wb,'Hide row');j='.'+a.yc+SHb+a.Zb+'{height:'+d+RHb;CW(a.Ub,j);e=0;k=Oh(a.xc)-c;for(g=a.Zb+1;g<=a.zb&&e<k;g++){e+=x1(a.a,g)?0:g>=a.W.length?cY(a):a.W[g-1]}i=c-a.Rb;i<a.Qb-a.Rb&&(i=a.Qb-a.Rb);j='';for(h=a.Zb+1;h<=a.zb;h++){j+='.'+a.yc+SHb+h;a.zb!=h&&(j+=',')}if(!!a.jb&&a.Zb>=a.jb.a.length){for(f=1;f<=a.jb.a.length;f++){i+=x1(a.a,f)?0:f>=a.W.length?cY(a):a.W[f-1]}}i+=a.Mc;(!a.jb||a.Zb>a.jb.a.length)&&(i-=(a.xc.scrollTop||0)|0);if(j.length!=0){j+='{margin-top:'+i+RHb;CW(a.Ub,j)}j='.'+a.yc+'.row-resizing > div.resize-line.rh {margin-top:'+(i-1)+RHb;CW(a.Ub,j);m$(a,b,c)}
function YY(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(!!(mi(),b).changedTouches&&b.changedTouches.length>0){k=b.changedTouches;i=sn(k[k.length-1])}else if(!!b.touches&&b.touches.length>0){k=b.touches;i=sn(k[k.length-1])}else{i=li.Ud(b)}m=(g=Xj($doc),H7(),b.type.indexOf(lHb)!=-1?rn(b.changedTouches[0])+g:Hi(b.clientY||0)+g);l=(f=Wj($doc),b.type.indexOf(lHb)!=-1?qn(b.changedTouches[0])+f:Hi(b.clientX||0)+f);if(xX(a,m,l)){return}d=0;e=0;c=null;if(i){c=i.getAttribute(SEb)||'';EW(a.wb,c);d=a.wb.a;e=a.wb.b}if(e==0||d==0){return}h=aHb.length;if(!Aob(c.substr(c.length-h,h),aHb)){j=jY(a,l,m,XX(a,d,e));d=j.c;e=j.k}if(d!=a.Hc||e!=a.Ic){d==0&&(l>Qh(pi(i))?(d=kY(a)+1):(d=a.Hc));e==0&&(m>Oh(a.xc)?(e=WX(a)+1):(e=a.Ic));c2(a.a,d,e);a.Hc=d;a.Ic=e}}
function QJ(a){switch(a){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case dFb:return VFb;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case yFb:return 32;case 'mouseover':return 16;case zFb:return 8;case 'scroll':return PDb;case 'error':return SDb;case WFb:case 'mousewheel':return XFb;case xFb:return 262144;case 'paste':return NFb;case CFb:return YFb;case 'touchmove':return ZFb;case 'touchend':return HDb;case 'touchcancel':return $Fb;case 'gesturestart':return _Fb;case 'gesturechange':return aGb;case 'gestureend':return bGb;default:return -1;}}
function tZ(b,c){var d,e,f,g,h,i,j;h=CGb+c.col1+DGb+c.row1;b.Fb.sheet.deleteRule(0);i=hsb(b.Eb,kob(c.id));j=XX(b,c.col1,c.row1);!!j&&NP(j,i.o,i.b,false);Kh(msb(b.Eb,kob(c.id)).d);msb(b.Jb,c);c.col1>=b.wc.e&&c.col2<=b.wc.f&&c.row1>=b.wc.K&&c.row2<=b.wc.L&&Y$(b,c.col1,c.col2,c.row1,c.row2,false);f=null;if(!!b.r&&b.r.containsKey(h)){try{d=iub(iub(b.ic,c.row1-b.db),c.col1-b.bb);OP(d);f=d.d}catch(a){a=GG(a);if(!fs(a,17))throw HG(a)}}if(!!b.tb&&b.tb.contains(h)){try{d=iub(iub(b.ic,c.row1-b.db),c.col1-b.bb);PP(d);f=d.d}catch(a){a=GG(a);if(!fs(a,17))throw HG(a)}}if(jsb(b.b,h)&&!!f){e=isb(b.b,h);ZQ(e,f,c.row1,c.col1)}if(!!b.T&&jsb(b.T,h)){try{d=iub(iub(b.ic,c.row1-b.db),c.col1-b.bb);g=isb(b.T,h);kX(b,d,g)}catch(a){a=GG(a);if(!fs(a,17))throw HG(a)}}}
function D9(b,c,d){var e,f,g,h,i,j,k,l;try{l=(null.Ng(),null);f=c.length;i=new oub;j=new oub;for(g=0;g<f;g++){e=c[g];null.Ng();NBb(QBb((nnb(QA),QA.k)),'Hierarchy claims that '+e+' is a child for '+b+' ('+null.Ng().Ng()+') but no connector with id '+e+' has been registered. '+'More information might be available in the server-side log if assertions are enabled');continue}null.Ng();j.a.length==0||NBb(QBb((nnb(QA),QA.k)),'Hierachy claims '+w6(l)+" has component children even though it isn't a HasComponentsConnector");null.Ng();for(null.Ng();null.Ng();){k=null.Ng();null.Ng();jub(i,k,0)!=-1||(d[null.Ng()]=true,undefined)}}catch(a){a=GG(a);if(fs(a,11)){h=a;JBb(QBb((nnb(QA),QA.k)),(KAb(),IAb),'Error updating connector hierarchy',h)}else throw HG(a)}}
function j0(a,b){var c,d,e,f;d=(!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C);c=(!a.L&&(a.L=new R3),a.L);EBb(d0,'onStateChanged reload = '+c.O);if(c.O||b.b){c.O=false;e=(!a.L&&(a.L=new R3),a.L);f=(!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C);m0(a);k3(f,e.X,e.W,b.Yf(lIb));c3(f,e.Y);f.D?j1(f,false):(f.D=true);C1(f,f.a-1);p3(f,e.L);R6((Wg(),Vg),new R0(a,b))}else{(b.Yf('sheetNames')||b.Yf('sheetIndex'))&&k3(d,c.X,c.W,b.Yf(lIb));if(b.Yf(mIb)||b.Yf(nIb)||b.Yf('colW')||b.Yf('rowH')||b.Yf('rows')||b.Yf('cols')||b.Yf(oIb)||b.Yf(pIb)){d.d?(d.d=false):pZ(d.W,true);p3((!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C),(!a.L&&(a.L=new R3),a.L).L)}else b.Yf('mergedRegions')&&p3((!a.C&&(a.C=(HBb(d0,eHb),new v3)),a.C),(!a.L&&(a.L=new R3),a.L).L);b.Yf('sheetProtected')&&c3(d,c.Y);i0(a,b)}}
function UP(a){var b,c,d,e,f,g,h,i,j,k,l,m;k=Sh(a.d).indexOf(' r ')!=-1||zob(Sh(a.d),' r');e=q1(a.n.a,a.c);l=hsb(a.n.oc,new ZP(a.o,a.b,a.k,a.c));!l&&(l=kob(IP(a)));j=l.a-e;if(!k&&j>0){j+=2;c=a.c;m=0;d=a.n.a.g;g=MY(a.n,c);while(c<d.length&&m<j){if(g&&!MY(a.n,c+1)){break}h=XX(a.n,c+1,a.k);if(!!h&&h.o!=null&&h.o.length!=0){break}m+=d[c];++c}m+=e;i=wj($doc);i.style[BGb]=GEb;i.style[IEb]=m+(Im(),qGb);i.style[sGb]=(Rl(),sFb);i.style['textOverflow']=(um(),'ellipsis');b=a.d.childNodes;if(b){for(f=b.length-1;f>=0;f--){i.appendChild(b[f])}}a.d.innerHTML='';Dh(a.d,i);HP(a);a.i=true}else{a.i=false}OY(a.n,CGb+a.c+DGb+a.k)&&!fs(a,192)?(a.d.style[sGb]=(Rl(),sFb),undefined):j>0?(a.d.style[sGb]=(Rl(),rFb),undefined):(a.d.style[sGb]=(Rl(),sFb),undefined);a.g=false}
function _$(a){var b,c,d,e,f,g,h,i;d=a.ob>0?1:0;Sh(a.Dc).indexOf('report')!=-1&&(d=0);i=0;a.gc.a.length==0||(i=lY(a));f=0;a.K.a.length==0||(f=_X(a));e=0;if(a.a.v){g=new Q5;N5(g,Pe(a.a.v),false);e=ms(g.c)}b=J$(a,e);c=K$(a,e);a.kb.style[hGb]=e+(Im(),qGb);c==0||b==0?(a.kb.style[eFb]=($k(),GEb),undefined):(a.kb.style[eFb]=($k(),kFb),undefined);a.kb.style[HEb]=b+qGb;a.kb.style[IEb]=c+qGb;R6((Wg(),Vg),new A_(a));if(!a.Z){i=0;f=0}a.Mc=f+e+b;a.Cb=i+c;h=a.Lc.style;h[IEb]=a.Bb+i+1+qGb;h[HEb]=a.Jc+f+qGb;h[hGb]=e+b+qGb;h[gGb]=c+qGb;h=a.Nc.style;h[gGb]=a.Bb+a.Cb+d+qGb;h[HEb]=a.Jc+f+qGb;h[hGb]=e+b+qGb;h=a.c.style;h[IEb]=a.Bb+i+1+qGb;h[hGb]=a.Jc+a.Mc+qGb;h[gGb]=c+qGb;h=a.xc.style;h[gGb]=a.Bb+a.Cb+d+qGb;h[hGb]=a.Jc+a.Mc+qGb;h=a.N.style;h[hGb]=e+b+qGb;h[gGb]=c+qGb}
function Tqb(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;q=or(qs,OHb,18,d+1,15,1);r=or(qs,OHb,18,f+1,15,1);s=f;i=hob(e[f-1]);if(i!=0){Jqb(r,e,0,i);Jqb(q,c,0,i)}else{ipb(c,0,q,0,d);ipb(e,0,r,0,f)}j=r[s-1];l=b-1;m=d;while(l>=0){k=0;if(q[m]==j){k=-1}else{t=IG(XG(JG(q[m],eLb),32),JG(q[m-1],eLb));w=Wqb(t,j);k=bH(w);v=bH(YG(w,32));if(k!=0){o=0;A=0;u=false;++k;do{--k;if(u){break}o=UG(JG(k,eLb),JG(r[s-2],eLb));A=IG(XG(v,32),JG(q[m-2],eLb));p=IG(JG(v,eLb),JG(j,eLb));hob(bH(ZG(p,32)))<32?(u=true):(v=bH(p))}while(PG(dH(o,iLb),dH(A,iLb)))}}if(k!=0){g=Zqb(q,m-s,r,s,k);if(g!=0){--k;h=0;for(n=0;n<s;n++){h=IG(h,IG(JG(q[m-s+n],eLb),JG(r[n],eLb)));q[m-s+n]=bH(h);h=ZG(h,32)}}}a!=null&&(a[l]=k);--m;--l}if(i!=0){Mqb(r,s,q,0,i);return r}ipb(q,0,r,0,f);return q}
function OQ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;h=Qh(a.c);e=(a.c.offsetLeft||0)|0;g=(a.c.offsetWidth||0)|0;f=(a.c.offsetTop||0)|0;i=Rh(a.c);k=h+15;if(k+a.n>Qh(a.o)){o=Ph(a.c)-15-a.n;Ph(a.o)<o&&(k=o)}l=i-15;m=Oh(a.o);if(l+a.k>m){l-=l+a.k-m+5;n=Rh(a.o);l<n&&(l=n)}else l<Rh(a.o)&&(l+=Rh(a.o)-l);nQ(a,k,l);a.j!=null&&_h(a.i,a.j);a.j=CGb+a.b+DGb+a.d;l+=2;k+=2;c=i-l;if(k>h){b=k-h;if(c>0){j=-($wnd.Math.atan(c/b)*NGb)}else{c=$wnd.Math.abs(c);j=0}}else{k-=2;b=h-(k+a.n);if(c>0){j=-180+$wnd.Math.atan(c/b)*NGb}else{c=$wnd.Math.abs(c);j=-180}}d=$wnd.Math.sqrt(b*b+c*c)+1;a.i.style[IEb]=d+(Im(),qGb);a.i.style[hGb]=f+qGb;a.i.style[gGb]=e+g+qGb;a.i.style['transform']=OGb+j+'deg)';a.i.style['msTransform']=OGb+j+'deg)';a.i.style[PGb]=OGb+j+'deg)';Mh(a.i,a.j);Dh(a.o,a.i)}
function LZ(a,b,c,d){var e,f,g,h,i,j,k;j=false;b<=a.Qc&&(b=a.Qc+1);k=tY(a);e=WX(a);if(d){if(b<k){i=0;for(f=k-1;f>=b-1&&f>0;f--){i+=x1(a.a,f)?0:f>=a.W.length?cY(a):a.W[f-1]}h=((a.xc.scrollTop||0)|0)-i;gi(a.xc,h>0?h:0);(b<=a.db||i>(a.a.M/2|0))&&(j=true)}else if(b>e){i=0;g=a.a.P;for(f=e+1;f<=b+1&&f<=g;f++){i+=x1(a.a,f)?0:f>=a.W.length?cY(a):a.W[f-1]}gi(a.xc,((a.xc.scrollTop||0)|0)+i);(b>=a.zb||i>(a.a.M/2|0))&&(j=true)}}else{if(c>e){i=0;g=a.a.P;for(f=e+1;f<=c+1&&f<=g;f++){i+=x1(a.a,f)?0:f>=a.W.length?cY(a):a.W[f-1]}gi(a.xc,((a.xc.scrollTop||0)|0)+i);(c>=a.zb||i>(a.a.M/2|0))&&(j=true)}else if(c<k){i=0;for(f=k-1;f>=c-1&&f>0;f--){i+=x1(a.a,f)?0:f>=a.W.length?cY(a):a.W[f-1]}h=((a.xc.scrollTop||0)|0)-i;gi(a.xc,h>0?h:0);(c<=a.db||i>(a.a.M/2|0))&&(j=true)}}return j}
function Fdb(a){var b,c,d,e,f,g,h,i,j;if(!a.j){xdb=null;BP(a.d.a);a.d=null;return}b=a.n+a.a;g=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0);c=-1;if(b>g){i=g-b;d=g}else if(b<0){i=-b;d=0}else{h=Adb(a);HBb(QBb((nnb(jC),jC.k)),'pxPerMs'+h);i=ms(0.5*h*h/0.002);h<0&&(i=-i);d=b+i;if(d>g+(wdb?0:(a.q.clientHeight|0)/3|0)){d=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)+(wdb?0:(a.q.clientHeight|0)/3|0);e=d-b;i=e}else if(d<-(wdb?0:(a.q.clientHeight|0)/3|0)){d=-(wdb?0:(a.q.clientHeight|0)/3|0);e=d-b;i=e}else{c=ms($wnd.Math.abs(h/0.002))}}c==-1&&(c=350);if(c>1500){HBb(QBb((nnb(jC),jC.k)),'Max animation time. '+c);c=1500}a.c=d;if($wnd.Math.abs(i)<3||c<20){HBb(QBb((nnb(jC),jC.k)),"Small 'momentum' "+i+' |  '+c+' Skipping animation,');Edb(a);return}j=-d+a.n;f=-b+a.n;if(wdb){f-=a.n;j-=a.n}Ldb(a,c,f,j)}
function rS(a,b){HR();var c,d,e;this.r=(wI(),wj($doc));this.i=new oub;this.F=new Rxb;this.D=new Kxb;this.G=new Kxb;this.t=a;this.I=b;this.w=b.sb;this.H=new sW;rW(this.H,b,this);this.j=new nO;Lf(this.j,2);this.a=new nO;Lf(this.a,1);Ye(this.j,'functionfield');Ye(this.a,'addressfield');this.B=new hM;Ye(this.B,'namedrangebox');fM(this.B);$L(this.B,'');this.C=new GL('\u25BC');Ye(this.C,'arrow');_e(this.B,false);_e(this.C,false);d=new nL;c=new nL;e=new nL;c.Vc.className='fixed-left-panel';e.Vc.className='adjusting-right-panel';lL(c,this.a);lL(c,this.C);lL(c,this.B);lL(e,this.j);EK(d,c,d.Vc);EK(d,e,d.Vc);bL(this,d);this.Vc.className='functionbar';UI(Pe(this.B),1024);TI(Pe(this.B),new tS(this));UI(Pe(this.a),6656);TI(Pe(this.a),new BS(this));UI(Pe(this.j),7048);TI(Pe(this.j),new DS(this));this.r.className='formulaoverlay';Dh(this.Vc,this.r)}
function xpb(){xpb=mH;var a,b,c;new Hpb(1,0);new Hpb(10,0);new Hpb(0,0);opb=or(yE,zDb,39,11,0,1);ppb=or(ns,zDb,18,100,15,1);qpb=rr(mr(os,1),zDb,18,15,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,bLb,cLb,6103515625,30517578125,152587890625,762939453125,3814697265625,19073486328125,95367431640625,476837158203125,2384185791015625]);rpb=or(qs,OHb,18,qpb.length,15,1);spb=rr(mr(os,1),zDb,18,15,[1,10,100,YEb,10000,100000,XEb,10000000,100000000,OFb,10000000000,100000000000,1000000000000,10000000000000,100000000000000,1000000000000000,10000000000000000]);tpb=or(qs,OHb,18,spb.length,15,1);vpb=or(yE,zDb,39,11,0,1);a=0;for(;a<vpb.length;a++){opb[a]=new Hpb(a,0);vpb[a]=new Hpb(0,a);ppb[a]=48}for(;a<ppb.length;a++){ppb[a]=48}for(c=0;c<rpb.length;c++){rpb[c]=Kpb(qpb[c])}for(b=0;b<tpb.length;b++){tpb[b]=Kpb(spb[b])}krb();upb=hrb}
function C$(b,c,d){var e,f,g,h,i,j,k;g=(wI(),QJ((mi(),c).type));j=d.getAttribute(SEb)||'';if(Aob(j,zGb)||Aob(j,AGb)){e=pi(d);f=e.getAttribute(SEb)||'';i=aHb.length;Aob(f.substr(f.length-i,i),aHb)&&(f=Job(f,$Hb,''));if(jsb(b.b,f)){return}if(g==16){if(!(VM(b.q)&&Aob(f,b.j))){EW(b.wb,f);b.k=b.wb.a;b.n=b.wb.b;oeb(b.p)}}else{k=li.Td(c);if(!b.o&&!(!!k&&!!k.equals?k.equals(e):k==e)){PQ(b.q);b.j=null;b.k=-1;b.n=-1}}}else{i=aHb.length;Aob(j.substr(j.length-i,i),aHb)&&(j=Job(j,$Hb,''));if(jsb(b.b,j)){return}if(g==16){if(!(VM(b.q)&&Aob(j,b.j))){SI(b.xc);EW(b.wb,j);b.k=b.wb.a;b.n=b.wb.b;oeb(b.p)}}else if(g==32){k=li.Td(c);if(!b.o&&!!k&&!!pi(k)){try{if(!(dZ(k.getAttribute(SEb)||'')&&Uf(pi(k),d))){PQ(b.q);b.j=null;b.n=-1;b.k=-1}}catch(a){a=GG(a);if(fs(a,47)){h=a;OBb(b.U,'SheetWidget:updateCellCommentDisplay: NPE ONMOUSEOUT, '+h.f)}else throw HG(a)}}}}}
function pyb(){function e(){this.obj=this.createObject()}
;e.prototype.createObject=function(a){return Object.create(null)};e.prototype.get=function(a){return this.obj[a]};e.prototype.set=function(a,b){this.obj[a]=b};e.prototype[jLb]=function(a){delete this.obj[a]};e.prototype.keys=function(){return Object.getOwnPropertyNames(this.obj)};e.prototype.entries=function(){var b=this.keys();var c=this;var d=0;return {next:function(){if(d>=b.length)return {done:true};var a=b[d++];return {value:[a,c.get(a)],done:false}}}};if(!nyb()){e.prototype.createObject=function(){return {}};e.prototype.get=function(a){return this.obj[':'+a]};e.prototype.set=function(a,b){this.obj[':'+a]=b};e.prototype[jLb]=function(a){delete this.obj[':'+a]};e.prototype.keys=function(){var a=[];for(var b in this.obj){b.charCodeAt(0)==58&&a.push(b.substring(1))}return a}}return e}
function d_(a,b){var c,d;jX(this);c=U4().toLowerCase();this.vb=c.indexOf('macintosh')!=-1||c.indexOf('mac osx')!=-1||c.indexOf('mac os x')!=-1;this.a=a;this.Pc=b;this.e=new Kxb;this.b=new Kxb;this.zc=new Kxb;this.Eb=new Kxb;this.Jb=new Kxb;this.rb=new leb;Ye(this.rb,'v-spreadsheet-hyperlink-tooltip-label');this.qb=new JQ;Ye(this.qb,eIb);this.qb.w=this;pL(this.qb,this.rb);this.Wb=new leb;Ye(this.Wb,'v-spreadsheet-resize-tooltip-label');this.Vb=new JQ;Ye(this.Vb,eIb);this.Vb.w=this;pL(this.Vb,this.Wb);this.q=new $Q(this,this.xc);NQ(this.q);CY(this);gf((wI(),this.Vc),ZHb,true);this.wc=new AV(a,this);this.M=new AR(this,new wR(this));Dh(this.Vc,Pe(this.M));d=new oW;d.c=this;d.a=this.vb;nW(d,this.Lc,this.Nc,this.c,this.xc);this.Mb=OI(new R_(this));of(this,new T_(this),(Sn(),Sn(),Rn));this.jc=new peb(20,new K_(this));this.Pb=new peb(100,new M_(this))}
function cX(a){this.k=wj($doc);this.c=wj($doc);this.i=wj($doc);this.n=wj($doc);this.o=wj($doc);this.p=wj($doc);this.q=wj($doc);this.a=wj($doc);this.g=Nj($doc);this.v=wj($doc);this.u=[];this.f=wj($doc);this.e=a;this.n.className='scroll-tabs-beginning';this.o.className='scroll-tabs-end';this.p.className='scroll-tabs-left';this.q.className='scroll-tabs-right';this.a.className='add-new-tab';this.i.className='sheet-tabsheet-options';Dh(this.i,this.n);Dh(this.i,this.p);Dh(this.i,this.q);Dh(this.i,this.o);Dh(this.i,this.a);this.c.className='sheet-tabsheet-container';this.v.className='sheet-tabsheet-temp';Dh(this.k,this.v);this.k.className='sheet-tabsheet';Dh(this.k,this.i);Dh(this.k,this.c);this.f.className='sheet-tabsheet-infolabel';Dh(this.k,this.f);Ve(this,this.k);UI(this.k,3);TI(this.k,new dX(this));UI(this.g,4736);TI(this.g,new fX(this));this.g.maxLength=31}
function $Q(a,b){PM();var c;JQ.call(this);this.e=Mj($doc);this.o=b;this.p=new nL;pL(this,this.p);this.i=wj($doc);this.i.className=RGb;this.a=new leb;_e(this.a,false);Ye(this.a,'comment-overlay-author');this.g=new leb;_e(this.g,false);Ye(this.g,'comment-overlay-label');OM.ff((wI(),wI(),Uh(this.Vc))).className='v-spreadsheet-comment-overlay';gf(OM.ff((null,Uh(this.Vc))),'v-spreadsheet-comment-overlay-shadow',true);this.w=a;this.K=false;this.Vc.style[fFb]=sFb;!!this.B&&(this.B.style[fFb]=sFb,undefined);this.i.style[fFb]=(Wm(),sFb);this.Vc.style[gFb]='0';this.f=new leb;_e(this.f,false);Ye(this.f,'comment-overlay-invalidformula');lL(this.p,this.f);lL(this.p,this.a);lL(this.p,this.g);Mh(this.e,'comment-overlay-input');this.e.style[eFb]=($k(),GEb);Dh(this.Vc,this.e);this.e.rows=4;this.e.style[IEb]=(Im(),'200.0px');c=new bR(this,a);of(this.a,c,(Ln(),Ln(),Kn));of(this.g,c,(null,Kn))}
function Rqb(a,b){Pqb();var c,d,e,f,g,h,i,j,k,l,m,n,o,p;i=KG(a,0)<0;i&&(a=VG(a));if(KG(a,0)==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:n=new cpb;b<0?(n.a+='0E+',n):(n.a+='0E',n);n.a+=b==ODb?'2147483648':''+-b;return n.a;}}k=18;l=or(ns,zDb,18,k+1,15,1);c=k;p=a;do{j=p;p=MG(p,10);l[--c]=bH(IG(48,$G(j,UG(p,10))))&TDb}while(KG(p,0)!=0);e=$G($G($G(k,c),b),1);if(b==0){i&&(l[--c]=45);return Vob(l,c,k-c)}if(b>0&&KG(e,-6)>=0){if(KG(e,0)>=0){f=c+bH(e);for(h=k-1;h>=f;h--){l[h+1]=l[h]}l[++f]=46;i&&(l[--c]=45);return Vob(l,c,k-c+1)}for(g=2;RG(g,IG(VG(e),1));g++){l[--c]=48}l[--c]=46;l[--c]=48;i&&(l[--c]=45);return Vob(l,c,k-c)}o=c+1;d=k;m=new dpb;i&&(m.a+='-',m);if(d-o>=1){Yob(m,l[c]);m.a+='.';m.a+=Vob(l,c+1,k-c-1)}else{m.a+=Vob(l,c,k-c)}m.a+='E';KG(e,0)>0&&(m.a+='+',m);m.a+=''+cH(e);return m.a}
function L$(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;n=TY(a);while(n.a<n.c.a.length){q=Lub(n);fs(q,104)&&wf(q,null)}Ih(b);Ih(c);h=0;f&&!a.G?(h=5):!f&&!a.cc&&(h=2);if(g>0){if(f){s=a.ec.clientWidth|0;a.Z&&(s+=lY(a))}else{s=a.I.clientHeight|0;a.Z&&(s+=_X(a))}s+=h;for(l=new Nub(d);l.a<l.c.a.length;){k=Lub(l);if(f){p=new nR(k.uniqueIndex,a.a);jR(p,a.G)}else{p=new EU(k.uniqueIndex,a.a);jR(p,a.cc)}r=s;for(m=0;m<k.startIndex;m++){f?(r+=r1(a.a,m+1)):(r+=x1(a.a,m+1)?0:m+1>=a.W.length?cY(a):a.W[m+1-1])}p.f&&(f?(r-=aY(a,k.startIndex)/2|0):(r-=mY(a,k.startIndex)/2|0));p.rf(r,k.level-1);iR(p,k.collapsed);Dh(b,(wI(),p.Vc));wf(p,a);o=0;for(j=k.startIndex;j<=k.endIndex;j++){f?(o+=r1(a.a,j+1)):(o+=x1(a.a,j+1)?0:j+1>=a.W.length?cY(a):a.W[j+1-1])}o-=h;p.f?f?(o+=aY(a,k.startIndex)/2):(o+=mY(a,k.startIndex)/2):f?(o+=aY(a,k.endIndex+2)/2):(o+=mY(a,k.endIndex+2)/2);kR(p,o);if(!!e&&e.a.length>k.startIndex){i=p.nf();Dh(c,i.Vc);wf(i,a)}}}}
function LI(){var a,b,c;b=$doc.compatMode;a=rr(mr(uE,1),RDb,2,6,[UEb]);for(c=0;c<a.length;c++){if(Aob(a[c],b)){return}}a.length==1&&Aob(UEb,a[0])&&Aob('BackCompat',b)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\""+b+'"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' "+b+"').<br>Modify your application's host HTML page doctype, or update your custom "+"'document.compatMode' configuration property settings."}
function N5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;if(c&&!Hh($doc.body,b)){return new T5(false,false)}f=false;m=false;e=new Z4(b);j=(n=rr(mr(qs,1),OHb,18,15,[0,0,0,0]),n[0]=W4(e,zHb),n[1]=W4(e,GIb),n[2]=W4(e,HIb),n[3]=W4(e,yHb),n);if(!f&&R5(a.e,j)){M5(a.e,j);f=true}if(!m&&S5(a.e,j)){M5(a.e,j);m=true}a.e=j;g=X4(e);if(!f&&R5(a.d,g)){M5(a.d,g);f=true}if(!m&&S5(a.d,g)){M5(a.d,g);m=true}a.d=g;d=(o=rr(mr(qs,1),OHb,18,15,[0,0,0,0]),o[0]=W4(e,IIb),o[1]=W4(e,JIb),o[2]=W4(e,KIb),o[3]=W4(e,LIb),o);if(!f&&R5(a.a,d)){M5(a.a,d);f=true}if(!m&&S5(a.a,d)){M5(a.a,d);m=true}a.a=d;if(c){k=(p=V4(e,HEb),((F4(),!E4&&(E4=new T4),F4(),E4).a.j||Aob(Y4(e,'boxSizing'),MIb))&&(p+=(q=V4(e,IIb),q+=V4(e,KIb),q)+(r=V4(e,zHb),r+=V4(e,HIb),r)),p);isNaN(k)&&(k=0)}else{k=Q7(b)}h=k+(g[0]+g[2]);O5(a,h)&&(f=true);if(c){l=(s=V4(e,IEb),((F4(),!E4&&(E4=new T4),F4(),E4).a.j||Aob(Y4(e,'boxSizing'),MIb))&&(s+=(t=V4(e,LIb),t+=V4(e,JIb),t)+(u=V4(e,yHb),u+=V4(e,GIb),u)),s);isNaN(l)&&(l=0)}else{l=T7(b)}i=l+(g[1]+g[3]);P5(a,i)&&(m=true);return new T5(m,f)}
function _J(a,b){var c=(a.__eventBits||0)^b;a.__eventBits=b;if(!c)return;c&1&&(a.onclick=b&1?XJ:null);c&2&&(a.ondblclick=b&2?XJ:null);c&4&&(a.onmousedown=b&4?XJ:null);c&8&&(a.onmouseup=b&8?XJ:null);c&16&&(a.onmouseover=b&16?XJ:null);c&32&&(a.onmouseout=b&32?XJ:null);c&64&&(a.onmousemove=b&64?XJ:null);c&128&&(a.onkeydown=b&128?XJ:null);c&256&&(a.onkeypress=b&256?XJ:null);c&512&&(a.onkeyup=b&512?XJ:null);c&1024&&(a.onchange=b&1024?XJ:null);c&2048&&(a.onfocus=b&2048?XJ:null);c&4096&&(a.onblur=b&4096?XJ:null);c&8192&&(a.onlosecapture=b&8192?XJ:null);c&PDb&&(a.onscroll=b&PDb?XJ:null);c&VFb&&(a.onload=b&VFb?YJ:null);c&SDb&&(a.onerror=b&SDb?XJ:null);c&XFb&&(a.onmousewheel=b&XFb?XJ:null);c&262144&&(a.oncontextmenu=b&262144?XJ:null);c&NFb&&(a.onpaste=b&NFb?XJ:null);c&YFb&&(a.ontouchstart=b&YFb?XJ:null);c&ZFb&&(a.ontouchmove=b&ZFb?XJ:null);c&HDb&&(a.ontouchend=b&HDb?XJ:null);c&$Fb&&(a.ontouchcancel=b&$Fb?XJ:null);c&_Fb&&(a.ongesturestart=b&_Fb?XJ:null);c&aGb&&(a.ongesturechange=b&aGb?XJ:null);c&bGb&&(a.ongestureend=b&bGb?XJ:null)}
function VS(a,b,c,d,e){var f,g,h,i,j,k;if(b==c&&d==e){h=B3(a,d,b);if(!h){h=new US;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=C3(a,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}k=false;f=d;while(f<=e){i=B3(a,f,b);if(i){f=i.col2+1;if(d>i.col1){d=i.col1;k=true}if(e<i.col2){e=i.col2;k=true}if(b>i.row1){b=i.row1;k=true}}else{++f}}b>c&&(b=c);f=b;while(f<=c){i=B3(a,e,f);if(i){f=i.row2+1;if(e<i.col2){e=i.col2;k=true}if(b>i.row1){b=i.row1;k=true}if(c<i.row2){c=i.row2;k=true}}else{++f}}e<d&&(e=d);f=d;while(f<=e){i=B3(a,f,c);if(i){f=i.col2+1;if(d>i.col1){d=i.col1;k=true}if(e<i.col2){e=i.col2;k=true}if(c<i.row2){c=i.row2;k=true}}else{++f}}c<b&&(c=b);f=b;while(f<=c){i=B3(a,d,f);if(i){f=i.row2+1;if(d>i.col1){d=i.col1;k=true}if(b>i.row1){b=i.row1;k=true}if(c<i.row2){c=i.row2;k=true}}else{++f}}d>e&&(d=e);if(k){return VS(a,b,c,d,e)}else if(b==c&&d==e){h=B3(a,d,b);if(!h){h=new US;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=C3(a,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}j=new US;j.col1=d;j.col2=e;j.row1=b;j.row2=c;return j}
function E1(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;m1(a);if(b==0||c==0){return}j=false;f||(j=c!=a.W.qc||b!=a.W.pc);if(d){m=a.W.pc;n=a.W.qc;g=m>b?b:m;h=m>b?m:b;k=n>c?c:n;l=n>c?n:c;o=VS(a.J,k,l,g,h);if(a.v.f);else if(gV(a.W.wc)){$$(a.W,o.col1,o.col2,o.row1,o.row2);Y$(a.W,o.col1,o.col2,o.row1,o.row2,true)}else{Y$(a.W,o.col1,o.col2,o.row1,o.row2,false)}if(a.v.f){eS(a.v,a.Y,a.Z,b,c,false)}else if(f){gV(a.W.wc)?Pjb(a.X,o.row1,o.col1,o.row2,o.col2):Sjb(a.X,o.row1,o.col1,o.row2,o.col2);ub(a.t,200)}}else if(e){if(b==a.W.pc&&c==a.W.qc){return}if(a.v.f){eS(a.v,b,c,b,c,true)}else{a.W.C&&(a.W.C=false,undefined);gV(a.W.wc)&&h$(a.W,false);w$(a.W,b,c);UU(a.R);j&&r3(a,b,c,null);if(f){Njb(a.X,c,b);ub(a.t,200)}}}else{i=C3(a.J,b,c);if(a.v.f){a.Y=b;a.Z=c;eS(a.v,b,c,b,c,false)}else{a.W.C||(a.W.C=true,undefined);if(!gV(a.W.wc)){h$(a.W,true);GX(a.W)}g$(a.W,b,c);if(i){$$(a.W,i.col1,i.col2,i.row1,i.row2);Y$(a.W,i.col1,i.col2,i.row1,i.row2,true);YU(a.R,i.col1);ZU(a.R,i.row1)}else{$$(a.W,b,b,c,c);Y$(a.W,b,b,c,c,true)}j&&r3(a,b,c,null);if(f){UU(a.R);Qjb(a.X,c,b,true);ub(a.t,200)}}}}
function w5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H;v=k5(a.n);w=v.length;if(w>0){t=new Kxb;j={};for(n=0;n<w;n++){h=v[n];null.Ng();if(p5(a)){j[h]=true;continue}u=null.Ng().Ng().Ng();D=null.Ng();s=(mi(),D)[sGb];s!=null&&!ayb(t.d,u)&&byb(t.d,u,s);null.Ng((Rl(),sFb))}m5(a.n,j);B=k5(a.n);A=B.length;for(o=0;o<A;o++){null.Ng(B[o]);null.Ng().Ng().Ng().Ng()|0}for(m=0;m<A;m++){e=(null.Ng(),null);u=null.Ng().Ng().Ng();null.Ng().Ng(Urb(ayb(t.d,u)));l=qfb(b,null.Ng(),e,0);Pfb(l,true);k=qfb(b,null.Ng(),e,1);Pfb(k,true)}l5(a.n)||HBb(QBb((nnb(bA),bA.k)),'Did overflow fix for '+A+' elements');a.n=j}q=0;if(c){null.Ng();C=null.Ng();i=[];for(n=0;n<C;n++){d=null.Ng();null.Ng();z5(a,null.Ng().Ng())&&(i.push(d),undefined)}g=i.length;for(o=0;o<g;o++){v5(a,i[o])}for(m=0;m<g;m++){F=qfb(b,i[m].vf(),i[m],0);Pfb(F,false);G=qfb(b,i[m].vf(),i[m],1);Pfb(G,false)}q+=g}while(!l5(b.c[0])||!l5(b.c[1])){r=(H={},i5(H,b.c[0]),i5(H,b.c[1]),k5(H));p=r.length;for(n=0;n<p;n++){f=null.Ng(r[n]);v5(a,f);++q}for(m=0;m<p;m++){f=null.Ng(r[m]);l=qfb(b,null.Ng(),f,0);Pfb(l,false);k=qfb(b,null.Ng(),f,1);Pfb(k,false)}}return q}
function CY(a){Ve(a,a.Dc);Dh(a.Dc,a.xc);Mh(a.Dc,'v-spreadsheet');a.xc.className='bottom-right-pane';Mh(a.xc,vHb);a.xc.tabIndex=3;a.Nc.className='top-right-pane';Mh(a.Nc,vHb);Dh(a.Dc,a.Nc);a.c.className='bottom-left-pane';Mh(a.c,vHb);Dh(a.Dc,a.c);a.Lc.className='top-left-pane';Mh(a.Lc,vHb);Dh(a.Dc,a.Lc);a.I.className='col-group-pane';Dh(a.Dc,a.I);a.ec.className='row-group-pane';Dh(a.Dc,a.ec);a.F.className='col-group-freeze-pane';Dh(a.Dc,a.F);a.bc.className='row-group-freeze-pane';Dh(a.Dc,a.bc);a.fc.className='row-group-summary';Dh(a.Dc,a.fc);a.J.className='col-group-summary';Dh(a.Dc,a.J);a.D.className='col-group-border';Dh(a.Dc,a.D);a.ac.className='row-group-border';Dh(a.Dc,a.ac);a.kb.className='grouping-corner';Dh(a.Dc,a.kb);a.Sb.className=THb;Dh(a.Dc,a.Sb);a.Tb.className=THb;Dh(a.xc,a.Tb);a.N.className='corner';Dh(a.Dc,a.N);a.fb.className='floater';a.sb=new ZS(a);af(a.sb,'0');hO(a.sb,'x');Pe(a.sb).id='cellinput';wI();Dh(a.xc,HI(Pe(a.sb)));BK(a,a.sb);a.Lb.style[IEb]=(Im(),'1.0in');a.Lb.style[$Eb]=(am(),aFb);a.Lb.style[fFb]=(Wm(),sFb);a.Lb.style['padding']=nGb;Dh(a.Dc,a.Lb);a.hb.style[fFb]=sFb;ei(a.hb,UHb)}
function Bpb(a,b){var c,d,e,f,g,h,i,j;c=0;g=0;f=b.length;h=null;j=new dpb;if(g<f&&(lDb(g,b.length),b.charCodeAt(g)==43)){++g;++c;if(g<f&&(lDb(g,b.length),b.charCodeAt(g)==43||(lDb(g,b.length),b.charCodeAt(g)==45))){throw HG(new sob(MDb+b+'"'))}}while(g<f&&(lDb(g,b.length),b.charCodeAt(g)!=46)&&(lDb(g,b.length),b.charCodeAt(g)!=101)&&(lDb(g,b.length),b.charCodeAt(g)!=69)){++g}j.a+=''+b.substr(c,g-c);if(g<f&&(lDb(g,b.length),b.charCodeAt(g)==46)){++g;c=g;while(g<f&&(lDb(g,b.length),b.charCodeAt(g)!=101)&&(lDb(g,b.length),b.charCodeAt(g)!=69)){++g}a.e=g-c;j.a+=''+b.substr(c,g-c)}else{a.e=0}if(g<f&&(lDb(g,b.length),b.charCodeAt(g)==101||(lDb(g,b.length),b.charCodeAt(g)==69))){++g;c=g;if(g<f&&(lDb(g,b.length),b.charCodeAt(g)==43)){++g;g<f&&(lDb(g,b.length),b.charCodeAt(g)!=45)&&++c}h=b.substr(c,f-c);a.e=a.e-Nnb(h,10);if(a.e!=ms(a.e)){throw HG(new sob('Scale out of range.'))}}i=j.a;if(i.length<16){a.f=(wpb==null&&(wpb=new RegExp('^[+-]?\\d*$','i')),wpb.test(i)?parseInt(i,10):NaN);if(isNaN(a.f)){throw HG(new sob(MDb+b+'"'))}a.a=Kpb(a.f)}else{Dpb(a,new wqb(i))}a.d=j.a.length;for(e=0;e<j.a.length;++e){d=xob(j.a,e);if(d!=45&&d!=48){break}--a.d}a.d==0&&(a.d=1)}
function mhb(a,b,c){var d,e,f,g,h,i;for(e=rr(mr(uE,1),RDb,2,6,[AKb,BKb,'rows','cols',CKb,DKb,EKb,FKb,GKb,HKb,'defRowH','defColW','rowH','colW',IKb,JKb,KKb,LKb,MKb,NKb,OKb,mIb,nIb,PKb,QKb,RKb,SKb,TKb,UKb,oIb,pIb,VKb,WKb,XKb,YKb,ZKb,HEb,IEb,vJb,wJb,PIb,cKb,'id',TJb,RIb,sJb,dKb,CJb]),f=0,g=e.length;f<g;++f){d=e[f];if(c.b||mab(c,d)){i=(!b.C&&(b.C=(HBb((e0(),d0),eHb),new v3)),b.C);h=gT(a.e);Aob(AKb,d)&&V2(i,h.P);Aob(BKb,d)&&x2(i,h.k);Aob('rows',d)&&_2(i,h.V);Aob('cols',d)&&w2(i,h.j);Aob(CKb,d)&&s2(i,h.e);Aob(DKb,d)&&W2(i,h.Q);Aob(EKb,d)&&u2(i,h.g);Aob(FKb,d)&&Y2(i,h.S);Aob(GKb,d)&&t2(i,h.f);Aob(HKb,d)&&X2(i,h.R);Aob('defRowH',d)&&D2(i,h.r);Aob('defColW',d)&&C2(i,h.q);Aob('rowH',d)&&Z2(i,h.T);Aob('colW',d)&&v2(i,h.i);Aob(IKb,d)&&q2(i,h.d);Aob(JKb,d)&&$2(i,h.U);Aob(KKb,d)&&y2(i,h.n);Aob(LKb,d)&&S2(i,h.J);Aob(MKb,d)&&T2(i,h.K);Aob(NKb,d)&&d3(i,h.Z);Aob(OKb,d)&&A2(i,h.p);Aob(mIb,d)&&H2(i,h.v);Aob(nIb,d)&&I2(i,h.w);Aob(PKb,d)&&g3(i,h.$);Aob(QKb,d)&&J2(i,h.A);Aob(RKb,d)&&j3(i,h.cb);Aob(SKb,d)&&L2(i,h.C);Aob(TKb,d)&&E2(i,h.s);Aob(UKb,d)&&F2(i,h.t);Aob(oIb,d)&&h3(i,h._);Aob(pIb,d)&&K2(i,h.B);Aob(VKb,d)&&N2(i,h.D);Aob(WKb,d)&&P2(i,h.G);Aob(XKb,d)&&Q2(i,h.H);Aob(YKb,d)&&R2(i,h.I);Aob(ZKb,d)&&U2(i,h.M);Aob(HEb,d)&&G2(i,h.jb);Aob(IEb,d)&&i3(i,h.nb);Aob('id',d)&&M2(i,h.kb)}}}
function Sqb(a,b){Pqb();var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H;B=a.e;o=a.d;e=a.a;if(B==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:w=new cpb;b<0?(w.a+='0E+',w):(w.a+='0E',w);w.a+=-b;return w.a;}}t=o*10+1+7;u=or(ns,zDb,18,t+1,15,1);c=t;if(o==1){h=e[0];if(h<0){H=JG(h,eLb);do{p=H;H=MG(H,10);u[--c]=48+bH($G(p,UG(H,10)))&TDb}while(KG(H,0)!=0)}else{H=h;do{p=H;H=H/10|0;u[--c]=48+(p-H*10)&TDb}while(H!=0)}}else{D=or(qs,OHb,18,o,15,1);G=o;ipb(e,0,D,0,G);I:while(true){A=0;for(j=G-1;j>=0;j--){F=IG(XG(A,32),JG(D[j],eLb));r=Qqb(F);D[j]=bH(r);A=bH(YG(r,32))}s=bH(A);q=c;do{u[--c]=48+s%10&TDb}while((s=s/10|0)!=0&&c!=0);d=9-q+c;for(i=0;i<d&&c>0;i++){u[--c]=48}l=G-1;for(;D[l]==0;l--){if(l==0){break I}}G=l+1}while(u[c]==48){++c}}n=B<0;g=t-c-b-1;if(b==0){n&&(u[--c]=45);return Vob(u,c,t-c)}if(b>0&&g>=-6){if(g>=0){k=c+g;for(m=t-1;m>=k;m--){u[m+1]=u[m]}u[++k]=46;n&&(u[--c]=45);return Vob(u,c,t-c+1)}for(l=2;l<-g+1;l++){u[--c]=48}u[--c]=46;u[--c]=48;n&&(u[--c]=45);return Vob(u,c,t-c)}C=c+1;f=t;v=new dpb;n&&(v.a+='-',v);if(f-C>=1){Yob(v,u[c]);v.a+='.';v.a+=Vob(u,c+1,t-c-1)}else{v.a+=Vob(u,c,t-c)}v.a+='E';g>0&&(v.a+='+',v);v.a+=''+g;return v.a}
function f2(a,b,c){var d,e;if((mi(),li).Rd(b)==0&&(b.keyCode|0)!=32||li.Rd(b)==13){switch(b.keyCode|0){case 8:case 46:h1(a);if(!a.e){Mjb(a.X.t,rr(mr(oE,1),zDb,1,5,[]));dS(a.v,'')}break;case 40:b.shiftKey?PU(a.R,true):QU(a.R,true);break;case 37:b.shiftKey?OU(a.R,false):RU(a.R,true);break;case 9:b.shiftKey?RU(a.R,jub(a.w,kob(a.W.pc),0)!=-1||jub(a.A,kob(a.W.qc),0)!=-1):SU(a.R,jub(a.w,kob(a.W.pc),0)!=-1||jub(a.A,kob(a.W.qc),0)!=-1);break;case 39:b.shiftKey?OU(a.R,true):SU(a.R,true);break;case 38:b.shiftKey?PU(a.R,false):TU(a.R,true);break;case 113:case 13:if(13==(b.keyCode|0)){if(jub(a.w,kob(a.W.pc),0)!=-1||jub(a.A,kob(a.W.qc),0)!=-1){QU(a.R,true);break}else{if(a.W.wc.e!=a.W.wc.f||a.W.wc.K!=a.W.wc.L){b.shiftKey?TU(a.R,false):QU(a.R,false);break}}}h1(a);if(!QY(a.W)&&!a.C&&!a.e&&!a.p){a.b=qY(a.W);IR(a.v);a.u=false;a.C=true;o$(a.W,true,(d=fO(a.v.j),d==null?'':d));a.v.u=true;jS(a.v)}}}else{if(!(jub(a.w,kob(a.W.pc),0)!=-1||jub(a.A,kob(a.W.qc),0)!=-1)){h1(a);if(!QY(a.W)&&!a.C&&!a.e&&!a.p){a.C=true;a.b=qY(a.W);jS(a.v);if(zob(a.b,'%')||RY(a.W)){(e=new Rxb,lsb(e.a,'0',e),lsb(e.a,'1',e),lsb(e.a,'2',e),lsb(e.a,'3',e),lsb(e.a,'4',e),lsb(e.a,'5',e),lsb(e.a,'6',e),lsb(e.a,'7',e),lsb(e.a,'8',e),lsb(e.a,'9',e),lsb(e.a,'-',e),lsb(e.a,'+',e),jsb(e.a,c))&&(c=c+'%');o$(a.W,true,c)}else{o$(a.W,true,c);IR(a.v)}dS(a.v,c)}}}}
function v9(b){var c,d,e,f,g,h,i,j,k,l;p4(b.c,' * Loading widgets completed');h=null;if('meta' in b.d){HBb(QBb((nnb(QA),QA.k)),' * Handling meta information');h=b.d['meta'];'repaintAll' in h&&null.Ng().Og;if(hJb in h){l=h[hJb];!!b.b.f&&tb(b.b.f);b.b.f=new J9(l);b.b.j=l['interval']}}!!b.b.f&&ub(b.b.f,YEb*b.b.j);j=Dg();d=s9(b,b.d);i=E9(b.d,d);HBb(QBb((nnb(QA),QA.k)),' * Handling locales');null.Ng().Ng();L5();c=C9(b,b.d);y9(c.b);B9(i,c.c);t9(i);z9(i);F9(b,b.d);w9(b,b.d);'dd' in b.d&&(!ifb&&(ifb=new lfb),b.d['dd']);A9(c.a);HBb(QBb((nnb(QA),QA.k)),'handleUIDLMessage: '+(Dg()-j)+' ms');try{null.Ng()&&null.Ng()}catch(a){a=GG(a);if(fs(a,11)){e=a;JBb(QBb((nnb(QA),QA.k)),(KAb(),IAb),'Error processing layouts',e)}else throw HG(a)}b4();false&&NJ(_Hb)!=null&&HBb(QBb((nnb(QA),QA.k)),' * Dumping state changes to the console');if(h){if('appError' in h){f=h['appError'];Neb(f[PIb],f['message'],f['details'],f['url']);null.Ng()}}b.b.c=bH($G(OG((new Axb).a.getTime()),OG(b.f.a.getTime())));b.b.k+=b.b.c;if(b.b.a==0){g=m9();if(g!=0){k=ms(Dg()-g);IBb(QBb((nnb(QA),QA.k)),(KAb(),GAb),'First response processed '+k+' ms after fetchStart')}b.b.a=l9()}HBb(QBb((nnb(QA),QA.k)),' Processing time was '+(''+b.b.c)+'ms');HBb(QBb((nnb(QA),QA.k)),'Referenced paintables: '+null.Ng());h9(b.d)&&null.Ng().Ng();j9(b.b,b.e);Lab((!Iab&&(Iab=new Vab),Iab))}
function NU(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(b==c&&d==e){h=s1(a.d,d,b);if(!h){h=new US;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=t1(a.d,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}k=a.c.pc;l=a.c.qc;if(k<d||k>e||l<b||l>c){return s1(a.d,k,a.c.qc)}m=false;f=d;while(f<=e){i=s1(a.d,f,b);if(i){f=i.col2+1;if(b>i.row1){m=true;if(b<c){i.row2>c?(b=i.row2+1):(b=c);f=d}else{if(k<i.col1){e=i.col1-1}else if(k>i.col2){d=i.col2+1}else{d=i.col1;e=i.col2;break}}}}else{++f}}b>c&&(b=c);f=b;while(f<=c){i=s1(a.d,e,f);if(i){f=i.row2+1;if(e<i.col2){m=true;if(e>d){i.col1>d?(e=i.col1-1):(e=d);f=b}else{if(l<i.row1){c=i.row1-1}else if(l>i.row2){b=i.row2+1}else{b=i.row1;c=i.row2;break}}}}else{++f}}e<d&&(e=d);f=d;while(f<=e){i=s1(a.d,f,c);if(i){f=i.col2+1;if(c<i.row2){m=true;if(c>b){b<i.row1?(c=i.row1-1):(c=b);f=d}else{if(k<i.col1){e=i.col1-1}else if(k>i.col2){d=i.col2+1}else{e=i.col1;d=i.col2;break}}}}else{++f}}c<b&&(c=b);f=b;while(f<=c){i=s1(a.d,d,f);if(i){f=i.row2+1;if(d>i.col1){m=true;if(d<e){e>i.col2?(d=i.col2+1):(d=e);f=b}else{if(l<i.row1){c=i.row1-1}else if(l>i.row2){b=i.row2+1}else{b=i.row1;c=i.row2;break}}}}else{++f}}d>e&&(d=e);if(m){return NU(a,b,c,d,e)}else if(b==c&&d==e){h=s1(a.d,d,b);if(!h){h=new US;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=t1(a.d,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}j=new US;j.col1=d;j.col2=e;j.row1=b;j.row2=c;return j}
function pZ(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a_(b);D=b.Jc+((b.xc.scrollTop||0)|0);C=Yh(b.xc);G=D-b.Ob;l=C-b.Nb;try{if(b.zb>b.a.P){b.zb=b.a.P;while(b.zb-b.db+1<b.ic.a.length){A=lub(b.ic,b.ic.a.length-1);for(g=new Nub(A);g.a<g.c.a.length;){f=Lub(g);Kh(f.d)}Kh(lub(b.gc,b.gc.a.length-1))}}if(b.xb>b.a.i){b.xb=b.a.i;for(B=new Nub(b.ic);B.a<B.c.a.length;){A=Lub(B);while(b.xb-b.bb+1<A.a.length){Kh(lub(A,A.a.length-1).d)}}while(b.xb-b.bb+1<b.K.a.length){Kh(lub(b.K,b.K.a.length-1))}}r=1;for(n=1;n<b.db;n++){r+=x1(b.a,n)?0:n>=b.W.length?cY(b):b.W[n-1];n==b.Qc&&(b.Jc=r)}t=r;for(o=b.db;o<=b.zb;o++){t+=x1(b.a,o)?0:o>=b.W.length?cY(b):b.W[o-1]}d=b.Jc+D+b.mc+b.a.M;F=r-b.eb;e=t-b.Ab;b.eb=r;b.Ab=t;q=0;for(p=1;p<b.bb;p++){q+=r1(b.a,p);b.ob==p&&(b.Bb=q)}s=q;for(m=b.bb;m<=b.xb;m++){s+=r1(b.a,m)}v=b.Bb+C+b.nc+b.a.j;w=s-b.yb;b.cb=q;b.yb=s;vY(b,C);G$(b,0,-1);if(w<0||l>0||b.xb<b.a.i&&b.yb<v){wY(b,C);G$(b,0,1)}if(F>0||G<0){BY(b,D);G$(b,-1,0)}if(e!=0||G>0||b.zb<b.a.P&&b.Ab<d){AY(b,D);G$(b,1,0)}DZ(b);b.Nb=C;b.Ob=D;c&&oeb(b.Pb);for(i=(u=(new Etb(b.b)).a.qg().Oe(),new Jtb(u));i.a.Ze();){h=(k=i.a.$e(),k.Bg());w1(b.a,h.b)||x1(b.a,h.d)?(hQ(h,false),Kh(h.i)):SQ(h)}WY(b);$$(b,b.wc.e,b.wc.f,b.wc.K,b.wc.L);H$(b);X$(b);T$(b,true)}catch(a){a=GG(a);if(fs(a,17)){j=a;NBb(b.U,'SheetWidget:relayoutSheet: '+fg(j,j.Gd())+' while relayouting spreadsheet');FZ(b,C,D);DZ(b);b2(b.a,b.db,b.zb,b.bb,b.xb);zZ(b);EZ(b);H$(b);X$(b);yZ(b);lZ(b);S$(b)}else throw HG(a)}}
function PU(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;o=a.c.wc.K;h=o;f=a.c.wc.e;d=a.c.wc.L;g=d;j=a.c.wc.f;m=a.c.qc;l=a.c.pc;i=t1(a.d,l,m);c=false;if(a.c.C){!!i&&(b&&i.row1!=o||!b&&i.row2==d)&&(m=i.row2);n=null;if(m==o){if(b&&d+1<=a.d.P){++d;while(!!a.d.A&&jub(a.d.A,kob(d),0)!=-1&&d<a.d.P){++d}n=VS(a.d.J,o,d,f,j)}else if(!b){if(o!=d){--d;while(!!a.d.A&&jub(a.d.A,kob(d),0)!=-1&&d>o){--d}n=NU(a,o,d,f,j)}else if(o-1>0){c=true;--o;while(!!a.d.A&&jub(a.d.A,kob(o),0)!=-1&&o>1){--o}n=VS(a.d.J,o,d,f,j)}}}else if(m==d){if(b){if(o!=d){c=true;++o;while(!!a.d.A&&jub(a.d.A,kob(o),0)!=-1&&o<d){++o}n=NU(a,o,d,f,j)}else if(d+1<=a.d.P){++d;while(!!a.d.A&&jub(a.d.A,kob(d),0)!=-1&&d<a.d.P){++d}n=VS(a.d.J,o,d,f,j)}}else if(!b&&o-1>0){c=true;--o;while(!!a.d.A&&jub(a.d.A,kob(o),0)!=-1&&o>1){--o}n=VS(a.d.J,o,d,f,j)}}else{if(b){if(d+1<=a.d.P){++d;while(!!a.d.A&&jub(a.d.A,kob(d),0)!=-1&&d<a.d.P){++d}n=VS(a.d.J,o,d,f,j)}}else{c=true;if(o-1>0){--o;while(!!a.d.A&&jub(a.d.A,kob(o),0)!=-1&&o>1){--o}n=VS(a.d.J,o,d,f,j)}}}if(!n){return}$$(a.c,n.col1,n.col2,n.row1,n.row2);vZ(a.c,n.col1,n.col2,n.row1,n.row2);wZ(a.c,n.row1,n.row2,n.col1,n.col2);LZ(a.c,n.row1,n.row2,c)}else{if(i){k=i.row2;e=i.col2}else{k=m;e=l}if(b){++k;while(!!a.d.A&&jub(a.d.A,kob(k),0)!=-1&&k<a.d.P){++k}}else{--m;while(!!a.d.A&&jub(a.d.A,kob(m),0)!=-1&&m>1){--m}}if(m>0&&k<=a.d.P){n=VS(a.d.J,m,k,l,e);if(n){a.c.C=true;h$(a.c,true);GX(a.c);$$(a.c,n.col1,n.col2,n.row1,n.row2);Y$(a.c,n.col1,n.col2,n.row1,n.row2,true)}}NZ(a.c)}if(f!=a.c.wc.e||j!=a.c.wc.f||h!=a.c.wc.K||g!=a.c.wc.L){Pjb(a.d.X,a.c.wc.K,a.c.wc.e,a.c.wc.L,a.c.wc.f);ub(a.d.t,200)}}
function OU(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;o=a.c.wc.K;f=a.c.wc.e;g=f;j=a.c.wc.f;h=j;d=a.c.wc.L;l=a.c.pc;m=a.c.qc;i=C3(a.d.J,l,m);c=false;if(a.c.C){!!i&&(b&&i.col1!=f||!b&&i.col2==j)&&(l=i.col2);n=null;if(l==f){if(b&&j+1<=a.d.i){++j;while(!!a.d.w&&jub(a.d.w,kob(j),0)!=-1&&j<a.d.i){++j}n=VS(a.d.J,o,d,f,j)}else if(!b){if(j!=f){--j;while(!!a.d.w&&jub(a.d.w,kob(j),0)!=-1&&j>f){--j}n=NU(a,o,d,f,j)}else if(f-1>0){c=true;--f;while(!!a.d.w&&jub(a.d.w,kob(f),0)!=-1&&f>1){--f}n=VS(a.d.J,o,d,f,j)}}}else if(l==j){if(b){if(j!=f){c=true;++f;while(!!a.d.w&&jub(a.d.w,kob(f),0)!=-1&&f<j){++f}n=NU(a,o,d,f,j)}else if(j+1<=a.d.i){++j;while(!!a.d.w&&jub(a.d.w,kob(j),0)!=-1&&j<a.d.i){++j}n=VS(a.d.J,o,d,f,j)}}else if(!b&&f-1>0){c=true;--f;while(!!a.d.w&&jub(a.d.w,kob(f),0)!=-1&&f>1){--f}n=VS(a.d.J,o,d,f,j)}}else{if(b){if(j+1<=a.d.i){++j;while(!!a.d.w&&jub(a.d.w,kob(j),0)!=-1&&j<a.d.i){++j}n=VS(a.d.J,o,d,f,j)}}else{c=true;if(f-1>0){--f;while(!!a.d.w&&jub(a.d.w,kob(f),0)!=-1&&f>1){--f}n=VS(a.d.J,o,d,f,j)}}}if(!n){return}$$(a.c,n.col1,n.col2,n.row1,n.row2);vZ(a.c,n.col1,n.col2,n.row1,n.row2);wZ(a.c,n.row1,n.row2,n.col1,n.col2);KZ(a.c,n.col1,n.col2,c)}else{if(i){k=i.row2;e=i.col2}else{k=m;e=l}if(b){++e;while(!!a.d.w&&jub(a.d.w,kob(e),0)!=-1&&e<a.d.i){++e}}else{--l;while(!!a.d.w&&jub(a.d.w,kob(l),0)!=-1&&l>1){--l}}if(l>0&&e<a.d.i){n=VS(a.d.J,m,k,l,e);if(n){a.c.C=true;h$(a.c,true);GX(a.c);$$(a.c,n.col1,n.col2,n.row1,n.row2);Y$(a.c,n.col1,n.col2,n.row1,n.row2,true)}}NZ(a.c)}if(g!=a.c.wc.e||h!=a.c.wc.f||o!=a.c.wc.K||d!=a.c.wc.L){Pjb(a.d.X,a.c.wc.K,a.c.wc.e,a.c.wc.L,a.c.wc.f);ub(a.d.t,200)}}
function e9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;m=cJb in b?b[cJb]:-1;e=dJb in b;if(!e&&a.i){OBb(QBb((nnb(QA),QA.k)),'Dropping the response of a request before a resync request.');return}a.i=false;if(e&&!g9(a,m)){HBb(QBb((nnb(QA),QA.k)),'Received resync message with id '+m+' while waiting for '+(a.d+1));a.d=m-1;i9(a)}k=psb(a.g.a)!=0;if(k||!g9(a,m)){if(k){HBb(QBb((nnb(QA),QA.k)),'Postponing UIDL handling due to lock...')}else{if(m<=a.d){OBb(QBb((nnb(QA),QA.k)),eJb+m+' but have already seen '+a.d+'. Ignoring it');h9(b)&&null.Ng().Ng();return}HBb(QBb((nnb(QA),QA.k)),eJb+m+' but expected '+(a.d+1)+'. Postponing handling until the missing message(s) have been received')}fub(a.e,new M9(b));!!a.b.e||ub(a.b,5000);return}n=new Axb;j=new P;Oxb(a.g,j);HBb(QBb((nnb(QA),QA.k)),'Handling message from server');null.Ng(new z4);'clientId' in b&&null.Ng().Ng();m!=-1&&(a.d=m);if('redirect' in b){o=b['redirect']['url'];HBb(QBb((nnb(QA),QA.k)),'redirecting to '+o);W7(o);return}d=new q4;HBb(QBb((nnb(QA),QA.k)),' * Handling resources from server');if(QIb in b){l=b[QIb];h=F7(l);i=h.length;for(f=0;f<i;f++){g=h[f];null.Ng(''+l[g])}}p4(d,' * Handling resources from server completed');HBb(QBb((nnb(QA),QA.k)),' * Handling type inheritance map from server');fJb in b&&null.Ng().Ng(b[fJb]);p4(d,' * Handling type inheritance map from server completed');HBb(QBb((nnb(QA),QA.k)),'Handling type mappings from server');gJb in b&&null.Ng().Ng(b[gJb],null.Ng());HBb(QBb((nnb(QA),QA.k)),'Handling resource dependencies');null.Ng().Ng();p4(d,' * Handling type mappings from server completed');c=new H9(a,d,b,n,j);b4();_3==0?v9(c):izb($3,c)}
function IZ(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;o=iub((dDb(0,h.a.length),h.a[0]),0).k;s=iub(iub(h,h.a.length-1),0).k;n=iub((dDb(0,h.a.length),h.a[0]),0).c;r=iub((dDb(0,h.a.length),h.a[0]),(dDb(0,h.a.length),h.a[0]).a.length-1).c;A=new oub;for(q=new Nub(h);q.a<q.c.a.length;){u=Lub(q);t=(dDb(0,u.a.length),u.a[0]).k;if(b>0){if(t<d){if(s<e){t=++s;Mub(q);A.a[A.a.length]=u}else{for(l=new Nub(u);l.a<l.c.a.length;){k=Lub(l);Kh(k.d)}Mub(q);continue}}}else if(b<0){if(t>e){if(o>d){t=--o;Mub(q);A.a[A.a.length]=u}else{for(l=new Nub(u);l.a<l.c.a.length;){k=Lub(l);Kh(k.d)}Mub(q);continue}}}n=(dDb(0,u.a.length),u.a[0]).c;r=iub(u,u.a.length-1).c;w=new oub;for(m=new Nub(u);m.a<m.c.a.length;){k=Lub(m);j=k.c;if(c>0){if(j<f){if(r<g){j=++r;Mub(m);w.a[w.a.length]=k}else{Kh(k.d);Mub(m);continue}}}else if(c<0){if(j>g){if(n>f){j=--n;Mub(m);w.a[w.a.length]=k}else{Kh(k.d);Mub(m);continue}}}(j!=k.c||t!=k.k)&&RP(k,j,t,isb(a.e,CGb+j+DGb+t))}if(c>0){for(l=new Nub(w);l.a<l.c.a.length;){k=Lub(l);u.a[u.a.length]=k}while(r<g){++r;k=new WP(a,r,t,isb(a.e,CGb+r+DGb+t));Dh(i,k.d);u.a[u.a.length]=k}}else if(c<0){for(l=new Nub(w);l.a<l.c.a.length;){k=Lub(l);gDb(0,u.a.length);XCb(u.a,0,k)}while(n>f){--n;k=new WP(a,n,t,isb(a.e,CGb+n+DGb+t));Dh(i,k.d);gDb(0,u.a.length);XCb(u.a,0,k)}}}if(b>0){for(v=new Nub(A);v.a<v.c.a.length;){u=Lub(v);h.a[h.a.length]=u}}else{for(v=new Nub(A);v.a<v.c.a.length;){u=Lub(v);gDb(0,h.a.length);XCb(h.a,0,u)}}if(b>0){while(s<e){u=new pub(g-f+1);++s;for(p=f;p<=g;p++){k=new WP(a,p,s,isb(a.e,CGb+p+DGb+s));u.a[u.a.length]=k;Dh(i,k.d)}h.a[h.a.length]=u}}else if(b<0){while(o>d){u=new oub;--o;for(p=f;p<=g;p++){k=new WP(a,p,o,isb(a.e,CGb+p+DGb+o));u.a[u.a.length]=k;Dh(i,k.d)}gDb(0,h.a.length);XCb(h.a,0,u)}}T$(a,false)}
function ZY(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;l=(mi(),li).Ud(c);d=l.getAttribute(SEb)||'';if((Q4((F4(),!E4&&(E4=new T4),F4(),E4))||P4((!E4&&(E4=new T4),E4)))&&(d==null||d.length==0)){g=Sh(pi(l));g.indexOf(uHb)!=-1&&(d=g)}if(b.o&&d.indexOf('comment-overlay')==-1){b.o=false;VQ(b.Q,false);if(R(b.Q,b.q)){PQ(b.q);b.j=null;b.k=-1;b.n=-1}}if(d.indexOf(vHb)!=-1||Aob(l.tagName,'input')||Aob(d,'floater')){return}if(d.indexOf(uHb)!=-1){Aob(d,zGb)?EW(b.wb,Sh(pi(l))):EW(b.wb,d);n=b.wb.a;o=b.wb.b;try{k=aHb.length;if(!Aob(d.substr(d.length-k,k),aHb)){e=(i=Wj($doc),H7(),c.type.indexOf(lHb)!=-1?qn(c.changedTouches[0])+i:Hi(c.clientX||0)+i);f=(j=Xj($doc),c.type.indexOf(lHb)!=-1?rn(c.changedTouches[0])+j:Hi(c.clientY||0)+j);m=jY(b,e,f,XX(b,n,o));l=m.d;n=m.c;o=m.k}}catch(a){a=GG(a);if(fs(a,66)){NBb(b.U,'SheetWidget:onSheetMouseDown - JSE while trying to find real event target, className:'+d)}else if(fs(a,36)){NBb(b.U,'SheetWidget:onSheetMouseDown - IOOBE while trying to find real event target, className:'+d)}else throw HG(a)}c.stopPropagation();li.Vd(c);if(li.Qd(c)==2){RI(b.xc);L1(b.a,c,n,o)}else{b.xc.focus();b._&&!Hh(Pe(b.sb),l)&&G1(b.a,(h=fO(b.sb),h==null?'':h));if(!!c.ctrlKey||!!c.metaKey||!!c.shiftKey){E1(b.a,n,o,(li._d(l),!!c.shiftKey),!!c.metaKey||!!c.ctrlKey,true);b.Hc=-1;b.Ic=-1}else{if(!!b.s&&jsb(b.s,CGb+b.wb.a+DGb+b.wb.b)){X1(b.a,n,o)}else{E1(b.a,n,o,(li._d(l),!!c.shiftKey),!!c.metaKey||!!c.ctrlKey,false);b.vc=true;b.Hc=n;b.Ic=o;b.Fc=n<=b.ob&&o<=b.Qc;b.Gc=n>b.ob&&n<=b.xb&&o<=b.Qc;b.Ec=o>b.Qc&&o<=b.zb&&n<=b.ob;b.O=!b.Fc&&!b.Gc;b.P=!b.Fc&&!b.Ec;b.A=(i=Wj($doc),H7(),c.type.indexOf(lHb)!=-1?qn(c.changedTouches[0])+i:Hi(c.clientX||0)+i);b.B=(j=Xj($doc),c.type.indexOf(lHb)!=-1?rn(c.changedTouches[0])+j:Hi(c.clientY||0)+j);SI(b.xc)}}}}}
function ve(){ve=mH;od=new Nb;nd=new Mb;pd=new Ob;qd=new Ub;rd=new Vb;sd=new Wb;td=new Xb;ud=new Yb;vd=new Zb;wd=new $b;xd=new _b;yd=new ac;zd=new bc;Ad=new cc;Bd=new dc;Cd=new ec;Ed=new gc;Dd=new fc;Fd=new hc;Gd=new ic;Hd=new mc;Id=new nc;Kd=new pc;Ld=new qc;Jd=new oc;Md=new Hc;Nd=new Ic;Od=new Jc;Pd=new Kc;Rd=new Nc;Td=new Pc;Ud=new Qc;Sd=new Oc;Qd=new Lc;Vd=new Rc;Wd=new Sc;Xd=new Tc;Yd=new Uc;Zd=new Xc;_d=new cd;$d=new bd;ae=new dd;de=new xe;ee=new ye;ce=new we;fe=new ze;ge=new Ae;he=new Be;ie=new Ce;je=new De;ke=new Ee;me=new Ge;ne=new He;le=new Fe;oe=new Ie;pe=new Je;qe=new Ke;re=new Le;te=new Ne;ue=new Oe;se=new Me;be=new Kxb;lsb(be,'region',ae);lsb(be,'alert',nd);lsb(be,'dialog',zd);lsb(be,oEb,od);lsb(be,pEb,pd);lsb(be,'document',Bd);lsb(be,'article',qd);lsb(be,'banner',rd);lsb(be,qEb,sd);lsb(be,'checkbox',td);lsb(be,'gridcell',Ed);lsb(be,rEb,ud);lsb(be,'group',Fd);lsb(be,'combobox',vd);lsb(be,sEb,wd);lsb(be,tEb,xd);lsb(be,uEb,yd);lsb(be,'list',Jd);lsb(be,'directory',Ad);lsb(be,'form',Cd);lsb(be,'grid',Dd);lsb(be,'heading',Gd);lsb(be,'img',Hd);lsb(be,vEb,Id);lsb(be,'listbox',Kd);lsb(be,'listitem',Ld);lsb(be,'log',Md);lsb(be,'main',Nd);lsb(be,'marquee',Od);lsb(be,'math',Pd);lsb(be,'menu',Qd);lsb(be,'menubar',Rd);lsb(be,'menuitem',Sd);lsb(be,wEb,Td);lsb(be,zEb,Xd);lsb(be,'radio',$d);lsb(be,xEb,Ud);lsb(be,yEb,Vd);lsb(be,'note',Wd);lsb(be,AEb,Yd);lsb(be,BEb,Zd);lsb(be,CEb,_d);lsb(be,'row',ce);lsb(be,'rowgroup',de);lsb(be,'rowheader',ee);lsb(be,'search',ge);lsb(be,'separator',he);lsb(be,'scrollbar',fe);lsb(be,'slider',ie);lsb(be,EEb,je);lsb(be,'status',ke);lsb(be,'tab',le);lsb(be,'tablist',me);lsb(be,'tabpanel',ne);lsb(be,'textbox',oe);lsb(be,'timer',pe);lsb(be,'toolbar',qe);lsb(be,'tooltip',re);lsb(be,'tree',se);lsb(be,'treegrid',te);lsb(be,'treeitem',ue)}
function q5(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N;HBb(QBb((nnb(bA),bA.k)),'Starting layout phase');u={};K=0;N=new Wf;f=k5(b.g);g=f.length;for(n=0;n<g;n++){v=f[n];d=qfb(b.a,v,null,0);d?Ofb(d):OBb(QBb((nnb(HC),HC.k)),DIb)}f=k5(b.j);g=f.length;for(o=0;o<g;o++){v=f[o];d=qfb(b.a,v,null,1);d?Ofb(d):OBb(QBb((nnb(HC),HC.k)),EIb)}b.g={};b.j={};f=k5(b.i);g=f.length;for(p=0;p<g;p++){null.Ng(f[p])}b.i={};x5(b);while(true){++K;I=w5(b,b.a,b.c);b.c=false;if(I==0){HBb(QBb((nnb(bA),bA.k)),'No more changes in pass '+K);break}l=0;if(psb(b.e.a)!=0){H=new Sxb(b.e);osb(b.e.a);l=psb(b.e.a);for(j=(J=(new ttb(H.a)).a.qg().Oe(),new ztb(J));j.a.Ze();){i=(k=j.a.$e(),k.Ag());G=hsb(b.b,i);if(G){c=G.pg(or(FC,{822:1,3:1},806,G.size(),0,1));for(C=c,D=0,F=C.length;D<F;++D){B=C[D];try{u3(wT(B.a))}catch(a){a=GG(a);if(fs(a,22)){h=a;JBb(QBb((nnb(bA),bA.k)),(KAb(),IAb),'Error in resize listener',h)}else throw HG(a)}}}}}t=0;while(!l5(b.a.b[0])||!l5(b.a.b[1])){w=k5(b.a.b[0]);A=w.length;for(q=0;q<A;q++){s=null.Ng(w[q]);e=qfb(b.a,null.Ng(),null,0);Efb(e);d=qfb(b.a,null.Ng(),null,1);Efb(d);L=s;try{null.Ng();++t}catch(a){a=GG(a);if(fs(a,22)){h=a;JBb(QBb((nnb(bA),bA.k)),(KAb(),IAb),'Error in SimpleManagedLayout (horizontal) handling',h)}else throw HG(a)}o5(u,L)}w=k5(b.a.b[1]);A=w.length;for(r=0;r<A;r++){s=null.Ng(w[r]);e=qfb(b.a,null.Ng(),null,0);Efb(e);d=qfb(b.a,null.Ng(),null,1);Efb(d);L=s;try{null.Ng();++t}catch(a){a=GG(a);if(fs(a,22)){h=a;JBb(QBb((nnb(bA),bA.k)),(KAb(),IAb),'Error in SimpleManagedLayout (vertical) handling',h)}else throw HG(a)}o5(u,L)}}HBb(QBb((nnb(bA),bA.k)),'Pass '+K+' measured '+I+' elements, fired '+l+' listeners and did '+t+' layouts.');if(K>100){NBb(QBb((nnb(bA),bA.k)),FIb);b4();false&&NJ(_Hb)!=null&&Deb(Geb(-1,null.Ng().Ng()),FIb,(teb(),4),'error');break}}null.Ng();M=null.Ng();for(m=0;m<M;m++){null.Ng()}if(!l5(b.n)){OBb(QBb((nnb(bA),bA.k)),'pendingOverflowFixes is not empty at the end of doLayout: '+k5(b.n));b.n={}}HBb(QBb((nnb(bA),bA.k)),'Total layout phase time: '+(Dg()-N.b)+'ms')}
function Llb(b){var c,d,e;b=Pob(b,(Ezb(),Czb));this.i=b.indexOf('gecko')!=-1&&b.indexOf(BIb)==-1&&b.indexOf($Kb)==-1;b.indexOf(' presto/')!=-1;this.r=b.indexOf($Kb)!=-1;this.s=!this.r&&b.indexOf('applewebkit')!=-1;this.e=b.indexOf(' chrome/')!=-1||b.indexOf(' crios/')!=-1;this.o=b.indexOf('opera')!=-1;this.j=b.indexOf('msie')!=-1&&!this.o&&b.indexOf('webtv')==-1;this.j=this.j||this.r;this.p=b.indexOf('phantomjs/')!=-1;this.g=b.indexOf(' firefox/')!=-1||b.indexOf('fxios/')!=-1;this.q=!this.e&&!this.j&&!this.p&&!this.g&&b.indexOf('safari')!=-1;if(b.indexOf(' edge/')!=-1){this.f=true;this.e=false;this.o=false;this.j=false;this.q=false;this.g=false;this.s=false;this.i=false;this.p=false}b.indexOf('chromeframe')!=-1;try{if(this.i){d=b.indexOf('rv:');if(d>=0){e=b.substr(d+3);e=Lob(e,'(\\.[0-9]+).+','$1');this.a=Vnb(e)}}else if(this.s){e=Nob(b,b.indexOf('webkit/')+7);e=Lob(e,'([0-9]+)[^0-9].+','$1');this.a=Vnb(e)}else if(this.r){e=Nob(b,b.indexOf($Kb)+8);e=Lob(e,'([0-9]+\\.[0-9]+).*','$1');this.a=Vnb(e);this.a>7&&(this.a=7)}else this.f&&(this.a=0)}catch(a){a=GG(a);if(fs(a,17)){hpb()}else throw HG(a)}try{if(this.j){if(b.indexOf('msie')==-1){d=b.indexOf('rv:');if(d>=0){c=d+3;this.d=Clb(b,c);Ilb(this,this.d)}}else if(this.r){Klb(this,ms(this.a)+4)}else{c=b.indexOf('msie ')+5;this.d=Clb(b,c);Ilb(this,this.d)}}else if(this.g){c=b.indexOf(' firefox/');c!=-1?(c+=9):(c=b.indexOf(' fxios/')+7);this.d=Clb(b,c);Ilb(this,this.d)}else if(this.e){c=b.indexOf(' chrome/');c!=-1?(c+=8):(c=b.indexOf(' crios/')+7);this.d=Clb(b,c);Ilb(this,this.d)}else if(this.q){c=b.indexOf(' version/')+9;this.d=Clb(b,c);Ilb(this,this.d)}else if(this.o){c=b.indexOf(' version/');c!=-1?(c+=9):(c=b.indexOf('opera/')+6);this.d=Clb(b,c);Ilb(this,this.d)}else if(this.f){c=b.indexOf(' edge/')+6;this.d=Clb(b,c);Ilb(this,this.d)}else if(this.p){c=b.indexOf(' phantomjs/')+11;this.d=Clb(b,c);Ilb(this,this.d)}}catch(a){a=GG(a);if(fs(a,17)){hpb()}else throw HG(a)}if(b.indexOf('windows ')!=-1){this.t=1;b.indexOf('windows phone')!=-1}else if(b.indexOf('android')!=-1){this.t=5;Dlb(this,b)}else if(b.indexOf('linux')!=-1){this.t=3}else if(b.indexOf('macintosh')!=-1||b.indexOf('mac osx')!=-1||b.indexOf('mac os x')!=-1){this.k=b.indexOf('ipad')!=-1;this.n=b.indexOf('iphone')!=-1;if(this.k||b.indexOf('ipod')!=-1||this.n){this.t=4;Glb(this,b)}else{this.t=2}}else if(b.indexOf('; cros ')!=-1){this.t=6;Elb(this,b)}}
function Xab(a){zcb(a.b,oE,null);zcb(a.b,KD,oE);zcb(a.b,DD,oE);zcb(a.b,ND,oE);zcb(a.b,OD,oE);zcb(a.b,PD,oE);zcb(a.b,QD,oE);zcb(a.b,RD,oE);zcb(a.b,SD,oE);zcb(a.b,TD,oE);zcb(a.b,uD,DD);zcb(a.b,FD,uD);zcb(a.b,UD,FD);tcb(a.b,LC);ucb(a.b,BC,new bbb);ucb(a.b,LC,new Bbb);ucb(a.b,KD,new Jbb);ucb(a.b,UD,new Lbb);ucb(a.b,ND,new Nbb);ucb(a.b,OD,new Pbb);ucb(a.b,PD,new Rbb);ucb(a.b,QD,new Tbb);ucb(a.b,RD,new Vbb);ucb(a.b,SD,new dbb);ucb(a.b,TD,new fbb);xcb(a.b,LC,fHb,new mcb(BC));xcb(a.b,LC,'getState',new mcb(UD));vcb(a.b,YB,nJb,new ibb);vcb(a.b,YB,oJb,new kbb);vcb(a.b,LC,pJb,new mbb);vcb(a.b,LC,qJb,new obb);Yab(a.b);wcb(a.b,RD,rJb,new mcb(aE));wcb(a.b,OD,'am',new mcb(uE));wcb(a.b,uD,PIb,new mcb(uE));wcb(a.b,uD,sJb,new mcb(aE));wcb(a.b,TD,tJb,new mcb(jE));wcb(a.b,OD,uJb,new mcb(uE));wcb(a.b,OD,'dayNames',new mcb(mr(uE,1)));wcb(a.b,uD,vJb,new mcb(uE));wcb(a.b,uD,wJb,new mcb(GD));wcb(a.b,SD,xJb,new mcb(jE));wcb(a.b,SD,yJb,new mcb(aE));wcb(a.b,SD,zJb,new mcb(uE));wcb(a.b,SD,AJb,new mcb(uE));wcb(a.b,UD,BJb,new mcb(aE));wcb(a.b,DD,CJb,new mcb(aE));wcb(a.b,uD,DJb,new mcb(HD));wcb(a.b,uD,RIb,new mcb(uE));wcb(a.b,OD,EJb,new mcb(jE));wcb(a.b,ND,FJb,new mcb(jE));wcb(a.b,KD,GJb,new mcb(aE));wcb(a.b,uD,HEb,new mcb(uE));wcb(a.b,OD,HJb,new mcb(uE));wcb(a.b,uD,'id',new mcb(uE));wcb(a.b,UD,IJb,new mcb(ND));wcb(a.b,PD,JJb,new ncb(KJb,rr(mr(QB,1),zDb,5,0,[new mcb(OD)])));wcb(a.b,UD,LJb,new mcb(PD));wcb(a.b,TD,'maxWidth',new mcb(jE));wcb(a.b,RD,'mode',new mcb(CD));wcb(a.b,OD,MJb,new mcb(mr(uE,1)));wcb(a.b,OD,'name',new mcb(uE));wcb(a.b,UD,NJb,new ncb(OJb,rr(mr(QB,1),zDb,5,0,[new mcb(uE),new mcb(QD)])));wcb(a.b,QD,PJb,new mcb(JD));wcb(a.b,TD,'openDelay',new mcb(jE));wcb(a.b,UD,QJb,new mcb(uE));wcb(a.b,UD,'pageState',new mcb(KD));wcb(a.b,RD,RJb,new ncb(OJb,rr(mr(QB,1),zDb,5,0,[new mcb(uE),new mcb(uE)])));wcb(a.b,OD,'pm',new mcb(uE));wcb(a.b,UD,SJb,new mcb(jE));wcb(a.b,QD,'postfix',new mcb(uE));wcb(a.b,QD,'prefix',new mcb(uE));wcb(a.b,uD,TJb,new mcb(uE));wcb(a.b,UD,UJb,new mcb(RD));wcb(a.b,RD,'pushUrl',new mcb(uE));wcb(a.b,TD,VJb,new mcb(jE));wcb(a.b,TD,WJb,new mcb(jE));wcb(a.b,SD,XJb,new mcb(jE));wcb(a.b,UD,YJb,new mcb(SD));wcb(a.b,SD,ZJb,new mcb(jE));wcb(a.b,DD,$Jb,new ncb('java.util.Set',rr(mr(QB,1),zDb,5,0,[new mcb(uE)])));wcb(a.b,DD,QIb,new ncb(OJb,rr(mr(QB,1),zDb,5,0,[new mcb(uE),new mcb(ED)])));wcb(a.b,ND,_Jb,new mcb(jE));wcb(a.b,OD,aKb,new mcb(mr(uE,1)));wcb(a.b,OD,bKb,new mcb(mr(uE,1)));wcb(a.b,uD,cKb,new ncb(KJb,rr(mr(QB,1),zDb,5,0,[new mcb(uE)])));wcb(a.b,UD,dKb,new mcb(jE));wcb(a.b,UD,'theme',new mcb(uE));wcb(a.b,ND,eKb,new mcb(jE));wcb(a.b,UD,fKb,new mcb(aE));wcb(a.b,KD,'title',new mcb(uE));wcb(a.b,UD,gKb,new mcb(TD));wcb(a.b,OD,hKb,new mcb(aE));wcb(a.b,uD,IEb,new mcb(uE));ycb(a.b,CD,new qbb);ycb(a.b,ED,new tbb);ycb(a.b,GD,new vbb);ycb(a.b,HD,new ybb);ycb(a.b,JD,new Dbb);ycb(a.b,mr(uE,1),new Gbb);scb(a.b,LC,new dcb(YB,nJb,rr(mr(uE,1),RDb,2,6,[RIb,DJb])));scb(a.b,LC,new dcb(YB,oJb,rr(mr(uE,1),RDb,2,6,[$Jb])));scb(a.b,LC,new ecb(pJb,rr(mr(uE,1),RDb,2,6,['theme'])));scb(a.b,LC,new ecb(qJb,rr(mr(uE,1),RDb,2,6,[fKb])))}
function Zab(c){var d={setter:function(a,b){a.a=enb(b)},getter:function(a){return hnb(a.a)}};c._f(RD,rJb,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c._f(OD,'am',d);var d={setter:function(a,b){a.db=b},getter:function(a){return a.db}};c._f(uD,PIb,d);var d={setter:function(a,b){a.eb=enb(b)},getter:function(a){return hnb(a.eb)}};c._f(uD,sJb,d);var d={setter:function(a,b){a.a=b.og()},getter:function(a){return kob(a.a)}};c._f(TD,tJb,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c._f(OD,uJb,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c._f(OD,'dayNames',d);var d={noLayout:1,setter:function(a,b){a.fb=b},getter:function(a){return a.fb}};c._f(uD,vJb,d);var d={noLayout:1,setter:function(a,b){a.gb=b},getter:function(a){return a.gb}};c._f(uD,wJb,d);var d={setter:function(a,b){a.a=b.og()},getter:function(a){return kob(a.a)}};c._f(SD,xJb,d);var d={setter:function(a,b){a.b=enb(b)},getter:function(a){return hnb(a.b)}};c._f(SD,yJb,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c._f(SD,zJb,d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c._f(SD,AJb,d);var d={setter:function(a,b){a.a=enb(b)},getter:function(a){return hnb(a.a)}};c._f(UD,BJb,d);var d={setter:function(a,b){a.ob=enb(b)},getter:function(a){return hnb(a.ob)}};c._f(DD,CJb,d);var d={setter:function(a,b){a.hb=b},getter:function(a){return a.hb}};c._f(uD,DJb,d);var d={setter:function(a,b){a.ib=b},getter:function(a){return a.ib}};c._f(uD,RIb,d);var d={setter:function(a,b){a.d=b.og()},getter:function(a){return kob(a.d)}};c._f(OD,EJb,d);var d={setter:function(a,b){a.a=b.og()},getter:function(a){return kob(a.a)}};c._f(ND,FJb,d);var d={setter:function(a,b){a.a=enb(b)},getter:function(a){return hnb(a.a)}};c._f(KD,GJb,d);var d={setter:function(a,b){a.jb=b},getter:function(a){return a.jb}};c._f(uD,HEb,d);var d={setter:function(a,b){a.e=b},getter:function(a){return a.e}};c._f(OD,HJb,d);var d={setter:function(a,b){a.kb=b},getter:function(a){return a.kb}};c._f(uD,'id',d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c._f(UD,IJb,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c._f(PD,JJb,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c._f(UD,LJb,d);var d={setter:function(a,b){a.b=b.og()},getter:function(a){return kob(a.b)}};c._f(TD,'maxWidth',d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c._f(RD,'mode',d);var d={setter:function(a,b){a.f=b},getter:function(a){return a.f}};c._f(OD,MJb,d);var d={setter:function(a,b){a.g=b},getter:function(a){return a.g}};c._f(OD,'name',d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c._f(UD,NJb,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c._f(QD,PJb,d);var d={setter:function(a,b){a.c=b.og()},getter:function(a){return kob(a.c)}};c._f(TD,'openDelay',d);var d={setter:function(a,b){a.e=b},getter:function(a){return a.e}};c._f(UD,QJb,d);var d={setter:function(a,b){a.f=b},getter:function(a){return a.f}};c._f(UD,'pageState',d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c._f(RD,RJb,d);var d={setter:function(a,b){a.i=b},getter:function(a){return a.i}};c._f(OD,'pm',d);var d={setter:function(a,b){a.g=b.og()},getter:function(a){return kob(a.g)}};c._f(UD,SJb,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c._f(QD,'postfix',d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c._f(QD,'prefix',d);var d={setter:function(a,b){a.lb=b},getter:function(a){return a.lb}};c._f(uD,TJb,d);var d={setter:function(a,b){a.i=b},getter:function(a){return a.i}};c._f(UD,UJb,d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c._f(RD,'pushUrl',d);var d={setter:function(a,b){a.d=b.og()},getter:function(a){return kob(a.d)}};c._f(TD,VJb,d);var d={setter:function(a,b){a.e=b.og()},getter:function(a){return kob(a.e)}};c._f(TD,WJb,d);var d={setter:function(a,b){a.e=b.og()},getter:function(a){return kob(a.e)}};c._f(SD,XJb,d);var d={setter:function(a,b){a.j=b},getter:function(a){return a.j}};c._f(UD,YJb,d);var d={setter:function(a,b){a.f=b.og()},getter:function(a){return kob(a.f)}};c._f(SD,ZJb,d);var d={noLayout:1,setter:function(a,b){a.pb=b},getter:function(a){return a.pb}};c._f(DD,$Jb,d);var d={setter:function(a,b){a.qb=b},getter:function(a){return a.qb}};c._f(DD,QIb,d);var d={setter:function(a,b){a.b=b.og()},getter:function(a){return kob(a.b)}};c._f(ND,_Jb,d);var d={setter:function(a,b){a.j=b},getter:function(a){return a.j}};c._f(OD,aKb,d);var d={setter:function(a,b){a.k=b},getter:function(a){return a.k}};c._f(OD,bKb,d);var d={setter:function(a,b){a.mb=b},getter:function(a){return a.mb}};c._f(uD,cKb,d);var d={noLayout:1,setter:function(a,b){a.k=b.og()},getter:function(a){return kob(a.k)}};c._f(UD,dKb,d);var d={setter:function(a,b){a.n=b},getter:function(a){return a.n}};c._f(UD,'theme',d);var d={setter:function(a,b){a.c=b.og()},getter:function(a){return kob(a.c)}};c._f(ND,eKb,d);var d={setter:function(a,b){a.o=enb(b)},getter:function(a){return hnb(a.o)}};c._f(UD,fKb,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c._f(KD,'title',d);var d={setter:function(a,b){a.p=b},getter:function(a){return a.p}};c._f(UD,gKb,d)}
var wDb='object',xDb='anonymous',yDb='fnStack',zDb={3:1},ADb='Unknown',BDb='boolean',CDb='number',DDb='string',EDb=2147483647,FDb=-17592186044416,GDb=17592186044416,HDb=4194304,IDb=1048575,JDb='__noinit__',KDb={3:1,17:1,22:1,11:1},LDb={3:1,17:1,36:1,22:1,11:1},MDb='For input string: "',NDb='null',ODb=-2147483648,PDb=16384,QDb='\\$',RDb={3:1,56:1},SDb=65536,TDb=65535,UDb={40:1,86:1},VDb={40:1,90:1},WDb={85:1},XDb={3:1,40:1,86:1,198:1},YDb={3:1,131:1},ZDb={3:1,40:1,90:1},$Db='fromIndex: 0, toIndex: ',_Db=', length: ',aEb='Index: ',bEb=', Size: ',cEb='fromIndex: ',dEb=', toIndex: ',eEb='java.lang',fEb='com.google.gwt.core.client',gEb='com.google.gwt.core.client.impl',hEb='com.vaadin.client',iEb='java.util',jEb='java.util.stream',kEb=3.141592653589793,lEb='com.google.gwt.animation.client',mEb='com.google.gwt.user.client',nEb='com.google.gwt.aria.client',oEb='alertdialog',pEb='application',qEb='button',rEb='columnheader',sEb='complementary',tEb='contentinfo',uEb='definition',vEb='link',wEb='menuitemcheckbox',xEb='menuitemradio',yEb='navigation',zEb='option',AEb='presentation',BEb='progressbar',CEb='radiogroup',DEb='text',EEb='spinbutton',FEb='offsetWidth',GEb='none',HEb='height',IEb='width',JEb='Null widget handle. If you are creating a composite, ensure that initWidget() has been called.',KEb='Style names cannot be empty',LEb='aria-hidden',MEb={16:1,12:1},NEb='com.google.gwt.user.client.ui',OEb={20:1,14:1,10:1,16:1,21:1,12:1,13:1},PEb='disabled',QEb={20:1,14:1,10:1,65:1,80:1,16:1,21:1,12:1,13:1},REb='com.google.gwt.canvas.client',SEb='class',TEb={123:1},UEb='CSS1Compat',VEb='com.google.gwt.dom.client',WEb='DOMImplStandard',XEb=1000000,YEb=1000,ZEb='DOMImplMozilla',$Eb='position',_Eb='fixed',aFb='absolute',bFb='DOMImplStandardBase',cFb='DOMImplWebkit',dFb='load',eFb='display',fFb='visibility',gFb='zIndex',hFb={60:1,19:1,3:1,6:1,4:1},iFb='HIDDEN',jFb={26:1,19:1,3:1,6:1,4:1},kFb='block',lFb={19:1,68:1,3:1,6:1,4:1},mFb={19:1,69:1,3:1,6:1,4:1},nFb={19:1,70:1,3:1,6:1,4:1},oFb={19:1,101:1,3:1,6:1,4:1},pFb={37:1,3:1,6:1,4:1},qFb={19:1,102:1,3:1,6:1,4:1},rFb='visible',sFb='hidden',tFb={19:1,61:1,3:1,6:1,4:1},uFb='com.google.web.bindery.event.shared',vFb='com.google.gwt.event.shared',wFb='com.google.gwt.event.dom.client',xFb='contextmenu',yFb='mouseout',zFb='mouseup',AFb='TouchEvent',BFb='ontouchstart',CFb='touchstart',DFb='com.google.gwt.event.logical.shared',EFb={14:1},FFb='SimpleEventBus',GFb={88:1,3:1,17:1,22:1,11:1},HFb='UmbrellaException',IFb='com.google.gwt.http.client',JFb='value',KFb='Content-Type',LFb={74:1,3:1,17:1,11:1},MFb=4194303,NFb=524288,OFb=1000000000,PFb='java.util.logging',QFb='com.google.gwt.logging.client',RFb='com.google.gwt.logging.impl',SFb='java.io',TFb='com.google.gwt.safehtml.shared',UFb='com.google.gwt.text.shared.testing',VFb=32768,WFb='DOMMouseScroll',XFb=131072,YFb=1048576,ZFb=2097152,$Fb=8388608,_Fb=16777216,aGb=33554432,bGb=67108864,cGb={122:1},dGb='com.google.gwt.user.client.impl',eGb='__gwtLastUnhandledEvent',fGb={20:1,14:1,10:1,16:1,34:1,21:1,12:1,13:1},gGb='left',hGb='top',iGb={20:1,14:1,10:1,16:1,197:1,21:1,12:1,13:1},jGb={23:1},kGb='bidiwrapped',lGb='selected',mGb='subMenuIcon-selected',nGb='0.0px',oGb='offsetHeight',pGb='rect(0px, 0px, 0px, 0px)',qGb='px',rGb={27:1,164:1},sGb='overflow',tGb={20:1,14:1,10:1,16:1,34:1,21:1,142:1,12:1,13:1},uGb={750:1,27:1},vGb={71:1,3:1,6:1,4:1},wGb='com.google.gwt.user.client.ui.impl',xGb={156:1,158:1},yGb='auto',zGb='cell-comment-triangle',AGb='cell-invalidformula-triangle',BGb='pointerEvents',CGb='col',DGb=' row',EGb='com.vaadin.addon.spreadsheet.client',FGb='animate-in',GGb='animate-out',HGb='marginLeft',IGb='marginTop',JGb='com.vaadin.client.widgets',KGb={20:1,14:1,10:1,16:1,34:1,21:1,12:1,13:1,45:1},LGb='com.vaadin.client.ui',MGb='spreadsheet-overlays',NGb=57.29577951308232,OGb='rotate(',PGb='webkitTransform',QGb='comment-overlay-separator',RGb='comment-overlay-line',SGb={200:1,27:1},TGb={20:1,14:1,10:1,16:1,34:1,21:1,12:1,13:1,104:1},UGb='backgroundColor',VGb='border',WGb='invalid column index, halting parse',XGb='2px solid ',YGb='borderRight',ZGb='borderBottom',$Gb={10:1},_Gb='textAlign',aHb='merged-cell',bHb='com.vaadin.shared',cHb='There is no information about the state for ',dHb='. Did you remember to compile the right widgetset?',eHb='createWidget()',fHb='getWidget',gHb={27:1,161:1,163:1,108:1,130:1,3:1},hHb='active',iHb='com.vaadin.shared.communication',jHb={75:1,82:1,3:1},kHb='popupbutton',lHb='touch',mHb='fill',nHb='bottom-left',oHb='top-left',pHb='v-contextmenu',qHb='bottom-right',rHb='sheet-selection',sHb='square',tHb='fill-touch-square',uHb='cell',vHb='sheet',wHb=15759871,xHb='sheet-image',yHb='paddingLeft',zHb='paddingTop',AHb='marginRight',BHb='selected-tab',CHb='.col',DHb='.v-spreadsheet.',EHb='cell-range',FHb='selected-cell-highlight',GHb='selected-row-header',HHb='selected-column-header',IHb=' .sheet .cell.cell-range {',JHb=' .sheet .col',KHb='display:none;',LHb=' .sheet .row',MHb='.notusedselector',NHb=', .v-spreadsheet.',OHb={25:1,3:1},PHb='Hide column',QHb=' > div.ch.col',RHb='px;}',SHb=' > div.rh.row',THb='resize-line',UHb='5555555555',VHb='text/css',WHb='ch col',XHb='<div class="header-resize-dnd-first" ><\/div><div class="header-resize-dnd-second" ><\/div>',YHb='rh row',ZHb='notfocused',$Hb=' merged-cell',_Hb='debug',aIb=' while creating the cell styles',bIb='expandbutton',cIb='lineHeight',dIb='inactive',eIb='v-tooltip',fIb='row-resizing',gIb='col-resizing',hIb='header-resize-dnd-first',iIb='header-resize-dnd-second',jIb={162:1,27:1},kIb={23:1,199:1,135:1},lIb='workbookChangeToggle',mIb='hiddenColumnIndexes',nIb='hiddenRowIndexes',oIb='verticalSplitPosition',pIb='horizontalSplitPosition',qIb='com.vaadin.client.ui.layout',rIb='lock-format-columns',sIb='lock-format-rows',tIb='com.vaadin.addon.spreadsheet.shared',uIb='com.vaadin.shared.ui',vIb='-webkit-animation-name',wIb='animation-name',xIb='-moz-animation-name',yIb='-o-animation-name',zIb='fakeelement',AIb='animationend',BIb='webkit',CIb='com.vaadin.client.communication',DIb='No dependency found in setNeedsHorizontalLayout',EIb='No dependency found in setNeedsVerticalLayout',FIb='Aborting layout after 100 passes. This would probably be an infinite loop.',GIb='paddingRight',HIb='paddingBottom',IIb='borderTopWidth',JIb='borderRightWidth',KIb='borderBottomWidth',LIb='borderLeftWidth',MIb='content-box',NIb='head',OIb='stylesheet',PIb='caption',QIb='resources',RIb='errorMessage',SIb='v-errormessage',TIb='v-loading-indicator',UIb=-5000,VIb='websocket',WIb='long-polling',XIb='application/json; charset=UTF-8',YIb='transport',ZIb='fallbackTransport',$Ib={23:1,199:1},_Ib='XSRF-TOKEN',aJb='X-XSRF-TOKEN',bJb='callback',cJb='syncId',dJb='resynchronize',eJb='Received message with server id ',fJb='typeInheritanceMap',gJb='typeMappings',hJb='timedRedirect',iJb='state',jJb='com.vaadin.client.metadata',kJb='__deferred',lJb={749:1,27:1},mJb='com.vaadin.ui.UI',nJb='setErrorLevel',oJb='handleContextClickListenerChange',pJb='onThemeChange',qJb='onThoroughSizeChckChange',rJb='alwaysUseXhrForServerRequests',sJb='captionAsHtml',tJb='closeTimeout',uJb='dateFormat',vJb='description',wJb='descriptionContentMode',xJb='dialogGracePeriod',yJb='dialogModal',zJb='dialogText',AJb='dialogTextGaveUp',BJb='enableMobileHTML5DnD',CJb='enabled',DJb='errorLevel',EJb='firstDayOfWeek',FJb='firstDelay',GJb='hasResizeListeners',HJb='hourMinuteDelimiter',IJb='loadingIndicatorConfiguration',JJb='localeData',KJb='java.util.List',LJb='localeServiceState',MJb='monthNames',NJb='notificationConfigurations',OJb='java.util.Map',PJb='notificationRole',QJb='overlayContainerLabel',RJb='parameters',SJb='pollInterval',TJb='primaryStyleName',UJb='pushConfiguration',VJb='quickOpenDelay',WJb='quickOpenTimeout',XJb='reconnectAttempts',YJb='reconnectDialogConfiguration',ZJb='reconnectInterval',$Jb='registeredEventListeners',_Jb='secondDelay',aKb='shortDayNames',bKb='shortMonthNames',cKb='styles',dKb='tabIndex',eKb='thirdDelay',fKb='thoroughSizeCheck',gKb='tooltipConfiguration',hKb='twelveHourClock',iKb={38:1},jKb={162:1,201:1,264:1,27:1},kKb='_vScrollTop',lKb='v-scrollable',mKb='v-label-undef-w',nKb='system',oKb='v-position-top',pKb='v-position-right',qKb='v-position-bottom',rKb='v-position-left',sKb='v-position-middle',tKb='v-position-center',uKb='v-position-assistive',vKb="<p class='",wKb='com.vaadin.client.ui.dd',xKb='/favicon.ico',yKb='com.vaadin.client.ui.ui',zKb='com.vaadin.component.spreadsheet.client.js',AKb='rowBufferSize',BKb='columnBufferSize',CKb='colGroupingData',DKb='rowGroupingData',EKb='colGroupingMax',FKb='rowGroupingMax',GKb='colGroupingInversed',HKb='rowGroupingInversed',IKb='cellStyleToCSSStyle',JKb='rowIndexToStyleIndex',KKb='columnIndexToStyleIndex',LKb='lockedColumnIndexes',MKb='lockedRowIndexes',NKb='shiftedCellBorderStyles',OKb='conditionalFormattingStyles',PKb='verticalScrollPositions',QKb='horizontalScrollPositions',RKb='workbookProtected',SKb='hyperlinksTooltips',TKb='displayGridlines',UKb='displayRowColHeadings',VKb='infoLabelValue',WKb='invalidFormulaErrorMessage',XKb='lockFormatColumns',YKb='lockFormatRows',ZKb='namedRanges',$Kb='trident/',_Kb='WARNING',aLb='com.vaadin.shared.ui.ui',bLb=244140625,cLb=1220703125,dLb=0.3010299956639812,eLb=4294967295,fLb='BigInteger divide by zero',gLb=4294967296,hLb=1073741824,iLb={l:0,m:0,h:524288},jLb='delete',kLb={3:1,808:1},lLb='locale',mLb='default',nLb='user.agent';var _,jH,eH,AG=-1;$wnd.goog=$wnd.goog||{};$wnd.goog.global=$wnd.goog.global||$wnd;kH();lH(1,null,{},P);_.Wc=function Q(a){return O(this,a)};_.Xc=function S(){return this.Kg};_.Yc=function U(){return nDb(this)};_.Zc=function W(){var a;return onb(T(this))+'@'+(a=V(this)>>>0,a.toString(16))};_.equals=function(a){return this.Wc(a)};_.hashCode=function(){return this.Yc()};_.toString=function(){return this.Zc()};var mh;lH(773,1,{});lH(327,773,{},uh);_.Ld=function vh(a){var b={},j;var c=[];a[yDb]=c;var d=arguments.callee.caller;while(d){var e=(nh(),d.name||(d.name=qh(d.toString())));c.push(e);var f=':'+e;var g=b[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(b[f]=[])).push(d);d=d.caller}};_.Md=function wh(a){var b,c,d,e;d=(nh(),a&&a[yDb]?a[yDb]:[]);c=d.length;e=or(qE,zDb,81,c,0,1);for(b=0;b<c;b++){e[b]=new tob(d[b],null,-1)}return e};lH(774,773,{});_.Ld=function yh(a){};_.Nd=function zh(a,b,c,d){return new tob(b,a+'@'+d,c<0?-1:c)};_.Md=function Ah(a){var b,c,d,e,f,g;e=sh(a);f=or(qE,zDb,81,0,0,1);b=0;d=e.length;if(d==0){return f}g=xh(this,e[0]);Aob(g.d,xDb)||(f[b++]=g);for(c=1;c<d;c++){f[b++]=xh(this,e[c])}return f};lH(328,774,{},Bh);_.Nd=function Ch(a,b,c,d){return new tob(b,a,-1)};var as,bs,cs;lH(287,1,{},p6);_.Ze=function q6(){var a;return a=this.b.length-2,a>this.a+1};_.$e=function r6(){return o6(this)};_._e=function s6(){throw HG(new mpb)};_.a=-1;lH(11,1,{3:1,11:1});_.Cd=function gg(a){return new Error(a)};_.Dd=function ig(){return this.backingJsObject};_.Ed=function jg(){var a;return a=qCb(rCb(Zub((this.j==null&&(this.j=or(wE,zDb,11,0,0,1)),this.j)),new kpb),RBb(new aCb,new $Bb,new cCb,rr(mr(fG,1),zDb,92,0,[(VBb(),TBb)]))),a.pg(or(oE,zDb,1,a.size(),5,1))};_.Fd=function kg(){return this.e};_.Gd=function lg(){return this.f};_.Hd=function mg(){eg(this,hg(this.Cd(fg(this,this.f))));oh(this)};_.Zc=function og(){return fg(this,this.Gd())};_.backingJsObject=JDb;_.g=false;_.k=true;lH(17,11,{3:1,17:1,11:1});lH(22,17,KDb,rg,sg);lH(36,22,LDb,_mb,anb);lH(204,36,LDb,bnb);as={3:1,325:1,6:1};lH(202,1,{},qnb);_.ig=function rnb(a){var b;b=new qnb;b.f=4;a>1?(b.c=ynb(this,a-1)):(b.c=this);return b};_.jg=function xnb(){nnb(this);return this.b};_.kg=function znb(){return onb(this)};_.lg=function Bnb(){return pnb(this)};_.mg=function Dnb(){return (this.f&4)!=0};_.ng=function Enb(){return (this.f&1)!=0};_.Zc=function Hnb(){return ((this.f&2)!=0?'interface ':(this.f&1)!=0?'':'class ')+(nnb(this),this.k)};_.f=0;var mnb=1;lH(93,1,{3:1,93:1});var Knb;bs={3:1,6:1,326:1,93:1};lH(4,1,{3:1,6:1,4:1});_.ld=function uc(a){return this.c-a.c};_.compareTo=function tc(a){return this.c-a.c};_.equals=function vc(a){return this===a};_.Wc=function(a){return this.equals(a)};_.hashCode=function wc(){return nDb(this)};_.Yc=function(){return this.hashCode()};_.name=function xc(){return this.b!=null?this.b:''+this.c};_.ordinal=function yc(){return this.c};_.toString=function zc(){return rc(this)};_.Zc=function(){return this.toString()};_.c=0;lH(53,22,KDb,Xnb,Ynb);lH(33,22,KDb,Znb,$nb,_nb);lH(94,93,{3:1,6:1,94:1,93:1},bob);_.ld=function dob(a){return cob(this.a,a.a)};_.Wc=function eob(a){return aob(this,a)};_.Yc=function fob(){return this.a};_.og=function gob(){return this.a};_.Zc=function job(){return ''+this.a};_.a=0;lH(109,22,KDb,tg);lH(913,1,{});lH(47,109,{3:1,17:1,47:1,22:1,11:1},oob,pob,qob);_.Cd=function rob(a){return new TypeError(a)};cs={3:1,203:1,6:1,2:1};lH(229,36,LDb,fpb);lH(266,1,{},kpb);_.fg=function lpb(a){return jpb(a)};lH(28,22,KDb,mpb,npb);lH(775,1,{40:1});_.add=function zrb(a){throw HG(new npb('Add not supported on this collection'))};_.addAll=function Arb(a){return urb(this,a)};_.clear=function Brb(){var a;for(a=this.Oe();a.Ze();){a.$e();a._e()}};_.contains=function Crb(a){return vrb(this,a,false)};_.containsAll=function Drb(a){return wrb(this,a)};_.isEmpty=function Erb(){return this.size()==0};_.remove=function Frb(a){return vrb(this,a,true)};_.removeAll=function Grb(a){var b,c,d;eDb(a);b=false;for(c=this.Oe();c.Ze();){d=c.$e();if(a.contains(d)){c._e();b=true}}return b};_.retainAll=function Hrb(a){var b,c,d;eDb(a);b=false;for(c=this.Oe();c.Ze();){d=c.$e();if(!a.contains(d)){c._e();b=true}}return b};_.toArray=function Irb(){return this.pg(or(oE,zDb,1,this.size(),5,1))};_.pg=function Jrb(a){return xrb(this,a)};_.Zc=function Krb(){return yrb(this)};lH(776,775,UDb);_.addAtIndex=function Psb(a,b){throw HG(new npb('Add not supported on this list'))};_.add=function Qsb(a){this.addAtIndex(this.size(),a);return true};_.addAllAtIndex=function Rsb(a,b){var c,d,e;eDb(b);c=false;for(e=n6(b);e.Ze();){d=e.$e();this.addAtIndex(a++,d);c=true}return c};_.clear=function Ssb(){this.vg(0,this.size())};_.Wc=function Tsb(a){var b,c,d,e,f;if(a===this){return true}if(!fs(a,86)){return false}f=a;if(this.size()!=f.size()){return false}e=n6(f);for(c=this.Oe();c.Ze();){b=c.$e();d=e.$e();if(!(ls(b)===ls(d)||b!=null&&R(b,d))){return false}}return true};_.Yc=function Usb(){return lvb(this)};_.indexOf=function Vsb(a){return Osb(this,a)};_.Oe=function Wsb(){return new dtb(this)};_.lastIndexOf=function Xsb(a){var b;for(b=this.size()-1;b>-1;--b){if(Lzb(a,this.getAtIndex(b))){return b}}return -1};_.tg=function Ysb(){return this.ug(0)};_.ug=function Zsb(a){return new htb(this,a)};_.removeAtIndex=function $sb(a){throw HG(new npb('Remove not supported on this list'))};_.vg=function _sb(a,b){var c,d;d=this.ug(a);for(c=a;c<b;++c){d.$e();d._e()}};_.setAtIndex=function atb(a,b){throw HG(new npb('Set not supported on this list'))};_.subList=function btb(a,b){return new ntb(this,a,b)};lH(217,1,{},dtb);_.Ze=function etb(){return this.b<this.d.size()};_.$e=function ftb(){cDb(this.b<this.d.size());return this.d.getAtIndex(this.c=this.b++)};_._e=function gtb(){ctb(this)};_.b=0;_.c=-1;lH(329,217,{},htb);_._e=function ltb(){ctb(this)};_.wg=function itb(a){this.a.addAtIndex(this.b,a);++this.b;this.c=-1};_.xg=function jtb(){return this.b>0};_.yg=function ktb(){cDb(this.b>0);return this.a.getAtIndex(this.c=--this.b)};_.zg=function mtb(a){iDb(this.c!=-1);this.a.setAtIndex(this.c,a)};lH(330,776,UDb,ntb);_.addAtIndex=function otb(a,b){gDb(a,this.b);this.c.addAtIndex(this.a+a,b);++this.b};_.getAtIndex=function ptb(a){dDb(a,this.b);return this.c.getAtIndex(this.a+a)};_.removeAtIndex=function qtb(a){var b;dDb(a,this.b);b=this.c.removeAtIndex(this.a+a);--this.b;return b};_.setAtIndex=function rtb(a,b){dDb(a,this.b);return this.c.setAtIndex(this.a+a,b)};_.size=function stb(){return this.b};_.a=0;_.b=0;lH(777,1,{131:1});_.getOrDefault=function Vrb(a,b){var c;return c=this.get(a),c==null&&!this.containsKey(a)?b:c};_.putIfAbsent=function _rb(a,b){var c;return c=this.get(a),c!=null?c:this.put(a,b)};_.replace=function bsb(a,b){return this.containsKey(a)?this.put(a,b):null};_.clear=function Prb(){this.qg().clear()};_.containsKey=function Qrb(a){return !!Mrb(this,a,false)};_.containsValue=function Rrb(a){var b,c,d;for(c=this.qg().Oe();c.Ze();){b=c.$e();d=b.Bg();if(ls(a)===ls(d)||a!=null&&R(a,d)){return true}}return false};_.Wc=function Srb(a){var b,c,d;if(a===this){return true}if(!fs(a,131)){return false}d=a;if(this.size()!=d.size()){return false}for(c=n6(d.qg());c.Ze();){b=c.$e();if(!Lrb(this,b)){return false}}return true};_.get=function Trb(a){return Urb(Mrb(this,a,false))};_.Yc=function Wrb(){return kvb(this.qg())};_.isEmpty=function Xrb(){return this.size()==0};_.keySet=function Yrb(){return new ttb(this)};_.put=function Zrb(a,b){throw HG(new npb('Put not supported on this map'))};_.putAll=function $rb(a){Nrb(this,a)};_.remove=function asb(a){return Urb(Mrb(this,a,true))};_.size=function csb(){return this.qg().size()};_.Zc=function dsb(){var a,b,c;c=new xAb('{','}');for(b=this.qg().Oe();b.Ze();){a=b.$e();wAb(c,Orb(this,a.Ag())+'='+Orb(this,a.Bg()))}return !c.a?c.c:c.e.length==0?c.a.a:c.a.a+(''+c.e)};_.values=function esb(){return new Etb(this)};lH(778,775,VDb);_.Wc=function ysb(a){var b;if(a===this){return true}if(!fs(a,90)){return false}b=a;if(b.size()!=this.size()){return false}return wrb(this,b)};_.Yc=function zsb(){return kvb(this)};_.removeAll=function Asb(a){var b,c,d,e;eDb(a);e=this.size();if(e<a.size()){for(b=this.Oe();b.Ze();){c=b.$e();a.contains(c)&&b._e()}}else{for(d=n6(a);d.Ze();){c=d.$e();this.remove(c)}}return e!=this.size()};lH(54,778,VDb,ttb);_.clear=function utb(){this.a.clear()};_.contains=function vtb(a){return this.a.containsKey(a)};_.Oe=function wtb(){var a;return a=this.a.qg().Oe(),new ztb(a)};_.remove=function xtb(a){if(this.a.containsKey(a)){this.a.remove(a);return true}return false};_.size=function ytb(){return this.a.size()};lH(57,1,{},ztb);_.Ze=function Atb(){return this.a.Ze()};_.$e=function Btb(){var a;return a=this.a.$e(),a.Ag()};_._e=function Ctb(){this.a._e()};lH(42,775,{40:1},Etb);_.clear=function Ftb(){this.a.clear()};_.contains=function Gtb(a){return Dtb(this,a)};_.Oe=function Htb(){var a;return a=this.a.qg().Oe(),new Jtb(a)};_.size=function Itb(){return this.a.size()};lH(55,1,{},Jtb);_.Ze=function Ktb(){return this.a.Ze()};_.$e=function Ltb(){var a;return a=this.a.$e(),a.Bg()};_._e=function Mtb(){this.a._e()};lH(340,1,WDb);_.Wc=function Otb(a){var b;if(!fs(a,85)){return false}b=a;return Lzb(this.d,b.Ag())&&Lzb(this.e,b.Bg())};_.Ag=function Ptb(){return this.d};_.Bg=function Qtb(){return this.e};_.Yc=function Rtb(){return Mzb(this.d)^Mzb(this.e)};_.Cg=function Stb(a){return Ntb(this,a)};_.Zc=function Ttb(){return this.d+'='+this.e};lH(174,340,WDb,Utb);lH(8,776,{3:1,8:1,40:1,86:1,198:1},oub,pub,qub);_.addAtIndex=function rub(a,b){eub(this,a,b)};_.add=function tub(a){return fub(this,a)};_.addAllAtIndex=function uub(a,b){var c,d;gDb(a,this.a.length);c=b.toArray();d=c.length;if(d==0){return false}YCb(this.a,a,c);return true};_.addAll=function vub(a){return gub(this,a)};_.clear=function wub(){this.a=or(oE,zDb,1,0,5,1)};_.contains=function xub(a){return jub(this,a,0)!=-1};_.getAtIndex=function yub(a){return iub(this,a)};_.indexOf=function zub(a){return jub(this,a,0)};_.isEmpty=function Aub(){return this.a.length==0};_.Oe=function Bub(){return new Nub(this)};_.lastIndexOf=function Cub(a){return kub(this,a,this.a.length-1)};_.removeAtIndex=function Dub(a){return lub(this,a)};_.remove=function Eub(a){return mub(this,a)};_.vg=function Fub(a,b){var c;hDb(a,b,this.a.length);c=b-a;ZCb(this.a,a,c)};_.setAtIndex=function Gub(a,b){var c;c=(dDb(a,this.a.length),this.a[a]);this.a[a]=b;return c};_.size=function Hub(){return this.a.length};_.toArray=function Iub(){return VCb(this.a,this.a.length)};_.pg=function Jub(a){return nub(this,a)};lH(7,1,{},Nub);_.Ze=function Oub(){return Kub(this)};_.$e=function Pub(){return Lub(this)};_._e=function Qub(){Mub(this)};_.a=0;_.b=-1;var gvb,hvb,ivb;lH(429,776,XDb,nvb);_.contains=function ovb(a){return false};_.getAtIndex=function pvb(a){return dDb(a,0),null};_.Oe=function qvb(){return jvb(),uvb(),tvb};_.tg=function rvb(){return jvb(),uvb(),tvb};_.size=function svb(){return 0};lH(430,1,{},wvb);_.wg=function xvb(a){throw HG(new mpb)};_.Ze=function yvb(){return false};_.xg=function zvb(){return false};_.$e=function Avb(){return vvb()};_.yg=function Bvb(){throw HG(new Kzb)};_._e=function Cvb(){throw HG(new Znb)};_.zg=function Dvb(a){throw HG(new Znb)};var tvb;lH(432,777,YDb,Evb);_.containsKey=function Fvb(a){return false};_.containsValue=function Gvb(a){return false};_.qg=function Hvb(){return jvb(),ivb};_.get=function Ivb(a){return null};_.keySet=function Jvb(){return jvb(),ivb};_.size=function Kvb(){return 0};_.values=function Lvb(){return jvb(),gvb};lH(431,778,ZDb,Mvb);_.contains=function Nvb(a){return false};_.Oe=function Ovb(){return jvb(),uvb(),tvb};_.size=function Pvb(){return 0};lH(73,22,{3:1,17:1,22:1,11:1,73:1},Kzb);lH(167,1,{});_.Fg=function _zb(a){Nzb(this,a)};_.Dg=function Zzb(){return this.c};_.Eg=function $zb(){return this.d};_.c=0;_.d=0;lH(271,167,{});lH(274,1,{});_.Fg=function lAb(a){Nzb(this,a)};_.Dg=function jAb(){return this.b};_.Eg=function kAb(){return this.d-this.c};_.b=0;_.c=0;_.d=0;lH(275,274,{},nAb);_.Fg=function oAb(a){hAb(this,a)};_.Gg=function pAb(a){return iAb(this,a)};lH(270,1,{},zAb);_.fg=function AAb(a){return a};lH(92,4,{3:1,6:1,4:1,92:1},WBb);var SBb,TBb,UBb;lH(735,1,{},YBb);lH(268,1,{},$Bb);_.hg=function _Bb(a,b){ZBb(a,b)};lH(267,1,{},aCb);_.eg=function bCb(){return new oub};lH(269,1,{},cCb);lH(187,1,{});_.c=false;lH(103,187,{},vCb);lH(595,271,{},JCb);_.Gg=function KCb(a){return this.b.Gg(new LCb(this,a))};lH(599,1,{},LCb);_.gg=function MCb(a){ICb(this.a,this.b,a)};lH(598,1,{},OCb);_.gg=function PCb(a){NCb(this,a)};lH(602,1,{},RCb);lH(603,1,{},TCb);_.gg=function UCb(a){SCb(this,a)};lH(915,1,{});lH(911,1,{});var mDb=0;var oDb,pDb=0,qDb;var oE=tnb(eEb,'Object',1);var Tt=tnb(fEb,'JavaScriptObject$',0);var bu=tnb(gEb,'StackTraceCreator/Collector',773);var $t=tnb(gEb,'StackTraceCreator/CollectorLegacy',327);var au=tnb(gEb,'StackTraceCreator/CollectorModern',774);var _t=tnb(gEb,'StackTraceCreator/CollectorModernNoSourceMap',328);var jA=tnb(hEb,'UIDL/1',287);var wE=tnb(eEb,'Throwable',11);var eE=tnb(eEb,'Exception',17);var pE=tnb(eEb,'RuntimeException',22);var iE=tnb(eEb,'IndexOutOfBoundsException',36);var _D=tnb(eEb,'ArrayIndexOutOfBoundsException',204);var aE=tnb(eEb,'Boolean',325);var bE=tnb(eEb,'Class',202);var nE=tnb(eEb,'Number',93);var cE=tnb(eEb,'Double',326);var dE=tnb(eEb,'Enum',4);var gE=tnb(eEb,'IllegalArgumentException',53);var hE=tnb(eEb,'IllegalStateException',33);var jE=tnb(eEb,'Integer',94);var kE=tnb(eEb,'JsException',109);var lE=tnb(eEb,'NullPointerException',47);var uE=tnb(eEb,'String',2);var tE=tnb(eEb,'StringIndexOutOfBoundsException',229);var vE=tnb(eEb,'Throwable/lambda$0$Type',266);var xE=tnb(eEb,'UnsupportedOperationException',28);var AE=tnb(iEb,'AbstractCollection',775);var yF=vnb(iEb,'List');var HE=tnb(iEb,'AbstractList',776);var EE=tnb(iEb,'AbstractList/IteratorImpl',217);var FE=tnb(iEb,'AbstractList/ListIteratorImpl',329);var GE=tnb(iEb,'AbstractList/SubList',330);var CF=vnb(iEb,'Map');var PE=tnb(iEb,'AbstractMap',777);var EF=vnb(iEb,'Set');var RE=tnb(iEb,'AbstractSet',778);var JE=tnb(iEb,'AbstractMap/1',54);var IE=tnb(iEb,'AbstractMap/1/1',57);var LE=tnb(iEb,'AbstractMap/2',42);var KE=tnb(iEb,'AbstractMap/2/1',55);var ME=tnb(iEb,'AbstractMap/AbstractEntry',340);var NE=tnb(iEb,'AbstractMap/SimpleEntry',174);var TE=tnb(iEb,'ArrayList',8);var SE=tnb(iEb,'ArrayList/1',7);var WE=tnb(iEb,'Collections/EmptyList',429);var VE=tnb(iEb,'Collections/EmptyListIterator',430);var XE=tnb(iEb,'Collections/EmptyMap',432);var YE=tnb(iEb,'Collections/EmptySet',431);var DF=tnb(iEb,'NoSuchElementException',73);var OF=tnb(iEb,'Spliterators/BaseSpliterator',167);var LF=tnb(iEb,'Spliterators/AbstractSpliterator',271);var NF=tnb(iEb,'Spliterators/BaseArraySpliterator',274);var MF=tnb(iEb,'Spliterators/ArraySpliterator',275);var RF=tnb('java.util.function','Function/lambda$0$Type',270);var fG=unb(jEb,'Collector/Characteristics',92,XBb);var gG=tnb(jEb,'CollectorImpl',735);var hG=tnb(jEb,'Collectors/20methodref$add$Type',268);var iG=tnb(jEb,'Collectors/21methodref$ctor$Type',267);var jG=tnb(jEb,'Collectors/lambda$42$Type',269);var yG=tnb(jEb,'TerminatableStream',187);var xG=tnb(jEb,'StreamImpl',103);var tG=tnb(jEb,'StreamImpl/MapToObjSpliterator',595);var sG=tnb(jEb,'StreamImpl/MapToObjSpliterator/lambda$0$Type',599);var uG=tnb(jEb,'StreamImpl/ValueConsumer',598);var vG=tnb(jEb,'StreamImpl/lambda$4$Type',602);var wG=tnb(jEb,'StreamImpl/lambda$5$Type',603);lH(144,1,{});_.$c=function bb(a){return (1+$wnd.Math.cos(kEb+a*kEb))/2};_._c=function cb(){this.u&&this.ad()};_.ad=function db(){this.cd(this.$c(1))};_.bd=function eb(){this.cd(this.$c(0))};_.k=-1;_.o=false;_.p=false;_.r=-1;_.t=-1;_.u=false;var zs=tnb(lEb,'Animation',144);lH(355,1,{},gb);_.dd=function hb(a){fb(this,a)};var rs=tnb(lEb,'Animation/1',355);lH(800,1,{});var ib;var ys=tnb(lEb,'AnimationScheduler',800);lH(194,1,{194:1});var ss=tnb(lEb,'AnimationScheduler/AnimationHandle',194);lH(714,800,{},jb);_.ed=function lb(a,b){var c;c=mb(a,b);return new nb(c)};var us=tnb(lEb,'AnimationSchedulerImplStandard',714);lH(715,194,{194:1},nb);_.fd=function ob(){kb(this.a)};var ts=tnb(lEb,'AnimationSchedulerImplStandard/1',715);lH(716,800,{},rb);_.ed=function sb(a,b){var c;c=new Fb(this,a);fub(this.a,c);this.a.a.length==1&&ub(this.b,16);return c};var xs=tnb(lEb,'AnimationSchedulerImplTimer',716);lH(29,1,{});_.gd=function Ab(a){if(a!=this.c){return}this.d||(this.e=null);this.hd()};_.c=0;_.d=false;_.e=null;var Aw=tnb(mEb,'Timer',29);lH(717,29,{},Db);_.hd=function Eb(){qb(this.a)};var vs=tnb(lEb,'AnimationSchedulerImplTimer/1',717);lH(195,194,{194:1,195:1},Fb);_.fd=function Gb(){pb(this.b,this)};var ws=tnb(lEb,'AnimationSchedulerImplTimer/AnimationHandleImpl',195);lH(9,1,{});var ut=tnb(nEb,'RoleImpl',9);lH(617,9,{},Mb);var As=tnb(nEb,'AlertRoleImpl',617);lH(616,9,{},Nb);var Bs=tnb(nEb,'AlertdialogRoleImpl',616);lH(618,9,{},Ob);var Cs=tnb(nEb,'ApplicationRoleImpl',618);lH(262,1,{});var Fs=tnb(nEb,'Attribute',262);lH(63,262,{},Sb);_.kd=function Tb(a){return a.jd()};var Ds=tnb(nEb,'AriaValueAttribute',63);lH(619,9,{},Ub);var Es=tnb(nEb,'ArticleRoleImpl',619);lH(620,9,{},Vb);var Gs=tnb(nEb,'BannerRoleImpl',620);lH(621,9,{},Wb);var Hs=tnb(nEb,'ButtonRoleImpl',621);lH(622,9,{},Xb);var Is=tnb(nEb,'CheckboxRoleImpl',622);lH(623,9,{},Yb);var Js=tnb(nEb,'ColumnheaderRoleImpl',623);lH(624,9,{},Zb);var Ks=tnb(nEb,'ComboboxRoleImpl',624);lH(625,9,{},$b);var Ls=tnb(nEb,'ComplementaryRoleImpl',625);lH(626,9,{},_b);var Ms=tnb(nEb,'ContentinfoRoleImpl',626);lH(627,9,{},ac);var Ns=tnb(nEb,'DefinitionRoleImpl',627);lH(628,9,{},bc);var Os=tnb(nEb,'DialogRoleImpl',628);lH(629,9,{},cc);var Ps=tnb(nEb,'DirectoryRoleImpl',629);lH(630,9,{},dc);var Qs=tnb(nEb,'DocumentRoleImpl',630);lH(631,9,{},ec);var Rs=tnb(nEb,'FormRoleImpl',631);lH(633,9,{},fc);var Ss=tnb(nEb,'GridRoleImpl',633);lH(632,9,{},gc);var Ts=tnb(nEb,'GridcellRoleImpl',632);lH(634,9,{},hc);var Us=tnb(nEb,'GroupRoleImpl',634);lH(635,9,{},ic);var Vs=tnb(nEb,'HeadingRoleImpl',635);lH(190,1,{753:1,190:1},kc);_.jd=function lc(){return this.a};var Ws=tnb(nEb,'Id',190);lH(636,9,{},mc);var Xs=tnb(nEb,'ImgRoleImpl',636);lH(637,9,{},nc);var Ys=tnb(nEb,'LinkRoleImpl',637);lH(640,9,{},oc);var Zs=tnb(nEb,'ListRoleImpl',640);lH(638,9,{},pc);var $s=tnb(nEb,'ListboxRoleImpl',638);lH(639,9,{},qc);var _s=tnb(nEb,'ListitemRoleImpl',639);lH(100,4,{753:1,100:1,3:1,6:1,4:1},Ec);_.jd=function Fc(){switch(this.c){case 0:return 'off';case 1:return 'polite';case 2:return 'assertive';}return null};var Ac,Bc,Cc;var at=unb(nEb,'LiveValue',100,Gc);lH(641,9,{},Hc);var bt=tnb(nEb,'LogRoleImpl',641);lH(642,9,{},Ic);var ct=tnb(nEb,'MainRoleImpl',642);lH(643,9,{},Jc);var dt=tnb(nEb,'MarqueeRoleImpl',643);lH(644,9,{},Kc);var et=tnb(nEb,'MathRoleImpl',644);lH(649,9,{},Lc);var ft=tnb(nEb,'MenuRoleImpl',649);lH(645,9,{},Nc);var gt=tnb(nEb,'MenubarRoleImpl',645);lH(648,9,{},Oc);var ht=tnb(nEb,'MenuitemRoleImpl',648);lH(646,9,{},Pc);var it=tnb(nEb,'MenuitemcheckboxRoleImpl',646);lH(647,9,{},Qc);var jt=tnb(nEb,'MenuitemradioRoleImpl',647);lH(650,9,{},Rc);var kt=tnb(nEb,'NavigationRoleImpl',650);lH(651,9,{},Sc);var lt=tnb(nEb,'NoteRoleImpl',651);lH(652,9,{},Tc);var mt=tnb(nEb,'OptionRoleImpl',652);lH(653,9,{},Uc);var nt=tnb(nEb,'PresentationRoleImpl',653);lH(51,262,{},Vc);_.kd=function Wc(a){return a==null?NDb:pH(a)};var ot=tnb(nEb,'PrimitiveValueAttribute',51);lH(654,9,{},Xc);var pt=tnb(nEb,'ProgressbarRoleImpl',654);var Yc,Zc,$c,_c;lH(656,9,{},bd);var qt=tnb(nEb,'RadioRoleImpl',656);lH(655,9,{},cd);var rt=tnb(nEb,'RadiogroupRoleImpl',655);lH(657,9,{},dd);var st=tnb(nEb,'RegionRoleImpl',657);lH(89,4,{753:1,89:1,3:1,6:1,4:1},kd);_.jd=function ld(){switch(this.c){case 0:return 'additions';case 1:return 'removals';case 2:return DEb;case 3:return 'all';}return null};var ed,fd,gd,hd;var tt=unb(nEb,'RelevantValue',89,md);var nd,od,pd,qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,$d,_d,ae,be,ce,de,ee,fe,ge,he,ie,je,ke,le,me,ne,oe,pe,qe,re,se,te,ue;lH(660,9,{},we);var vt=tnb(nEb,'RowRoleImpl',660);lH(658,9,{},xe);var wt=tnb(nEb,'RowgroupRoleImpl',658);lH(659,9,{},ye);var xt=tnb(nEb,'RowheaderRoleImpl',659);lH(661,9,{},ze);var yt=tnb(nEb,'ScrollbarRoleImpl',661);lH(662,9,{},Ae);var zt=tnb(nEb,'SearchRoleImpl',662);lH(663,9,{},Be);var At=tnb(nEb,'SeparatorRoleImpl',663);lH(664,9,{},Ce);var Bt=tnb(nEb,'SliderRoleImpl',664);lH(665,9,{},De);var Ct=tnb(nEb,'SpinbuttonRoleImpl',665);lH(666,9,{},Ee);var Dt=tnb(nEb,'StatusRoleImpl',666);lH(669,9,{},Fe);var Et=tnb(nEb,'TabRoleImpl',669);lH(667,9,{},Ge);var Ft=tnb(nEb,'TablistRoleImpl',667);lH(668,9,{},He);var Gt=tnb(nEb,'TabpanelRoleImpl',668);lH(670,9,{},Ie);var Ht=tnb(nEb,'TextboxRoleImpl',670);lH(671,9,{},Je);var It=tnb(nEb,'TimerRoleImpl',671);lH(672,9,{},Ke);var Jt=tnb(nEb,'ToolbarRoleImpl',672);lH(673,9,{},Le);var Kt=tnb(nEb,'TooltipRoleImpl',673);lH(676,9,{},Me);var Lt=tnb(nEb,'TreeRoleImpl',676);lH(674,9,{},Ne);var Mt=tnb(nEb,'TreegridRoleImpl',674);lH(675,9,{},Oe);var Nt=tnb(nEb,'TreeitemRoleImpl',675);lH(12,1,MEb);_.md=function cf(){return Re(this)};_.nd=function ef(){throw HG(new mpb)};_.od=function ff(a){Xe(this,a)};_.pd=function hf(a,b){Ze(this,a,b)};_.qd=function lf(a){af(this,a)};_.Zc=function mf(){if(!this.Vc){return '(null handle)'}return Zh((wI(),this.Vc))};var zx=tnb(NEb,'UIObject',12);lH(13,12,OEb);_.rd=function yf(){};_.sd=function zf(){};_.td=function Af(a){qf(this,a)};_.ud=function Bf(){return this.Rc};_.vd=function Cf(){rf(this)};_.wd=function Df(a){sf(this,a)};_.xd=function Ef(){tf(this)};_.yd=function Ff(){};_.zd=function Gf(){};_.Rc=false;_.Sc=0;var Jx=tnb(NEb,'Widget',13);var Vw=vnb(NEb,'Focusable');lH(228,13,QEb);_.vd=function Nf(){var a;rf(this);a=UO((wI(),this.Vc));-1==a&&(this.Vc.tabIndex=0,undefined)};_.Ad=function Of(a){Jf(this,a)};_.Bd=function Pf(a){Lf(this,a)};var Hf;var Uw=tnb(NEb,'FocusWidget',228);lH(731,228,QEb,Rf);var Qf;var Qt=tnb(REb,'Canvas',731);lH(804,1,{});var Pt=tnb(REb,'Canvas/CanvasElementSupportDetector',804);lH(732,804,{},Tf);var Ot=tnb(REb,'Canvas/CanvasElementSupportDetectedMaybe',732);lH(141,1,{},Wf);_.b=0;var Rt=tnb(fEb,'Duration',141);var Xf=null;lH(375,109,KDb);var Wt=tnb(gEb,'JavaScriptExceptionBase',375);lH(66,375,{66:1,3:1,17:1,22:1,11:1},xg);_.Gd=function yg(){return wg(this),this.c};_.Id=function zg(){return ls(this.b)===ls(ug)?null:this.b};var ug;var St=tnb(fEb,'JavaScriptException',66);var Ut=vnb(fEb,'RunAsyncCallback');lH(754,1,{});var Vt=tnb(fEb,'Scheduler',754);var Eg=0,Fg=false,Gg,Hg=0,Ig=-1;lH(382,754,{});_.e=false;_.j=false;var Vg;var Zt=tnb(gEb,'SchedulerImpl',382);lH(383,1,{},ih);_.Jd=function jh(){this.a.e=true;Zg(this.a);this.a.e=false;return this.a.j=$g(this.a)};var Xt=tnb(gEb,'SchedulerImpl/Flusher',383);lH(384,1,{},kh);_.Jd=function lh(){this.a.e&&hh(this.a.f,1);return this.a.j};var Yt=tnb(gEb,'SchedulerImpl/Rescuer',384);lH(123,1,TEb);_.Qd=function vi(a){return a.button|0};_.Sd=function wi(a){return a.currentTarget};_.Wd=function xi(a){return Hi(si(a))};_.Xd=function yi(a){return Hi(ti(a))};_.Yd=function zi(a){return 0};_.Zd=function Ai(a){return 0};_.$d=function Bi(a){return Aob(a.compatMode,UEb)?a.documentElement:a.body};_._d=function Ci(a){var b='',c=a.firstChild;while(c){c.nodeType==1?(b+=this._d(c)):c.nodeValue&&(b+=c.nodeValue);c=c.nextSibling}return b};_.ae=function Di(a){return Hi(a.scrollLeft||0)};_.be=function Ei(a){return a.tabIndex};_.de=function Fi(a,b){while(a.firstChild){a.removeChild(a.firstChild)}b!=null&&a.appendChild(a.ownerDocument.createTextNode(b))};_.ee=function Gi(a,b){a.scrollLeft=b};_.fe=function Ii(a){return a.outerHTML};var li;var gu=tnb(VEb,'DOMImpl',123);lH(793,123,TEb);_.Od=function Ji(a,b,c,d){var e=a.createEvent('HTMLEvents');e.initEvent(b,c,d);return e};_.Pd=function Ki(a,b){a.dispatchEvent(b)};_.Qd=function Li(a){var b=a.button;if(b==1){return 4}else if(b==2){return 2}return 1};_.Rd=function Mi(a){return a.charCode||0};_.Td=function Ni(a){return a.relatedTarget};_.Ud=function Oi(a){return a.target};_.Vd=function Pi(a){a.preventDefault()};_.$d=function Qi(a){if(a.scrollingElement){return a.scrollingElement}return this.ge(a)};_._d=function Ri(a){return a.textContent};_.ge=function Si(a){return Aob(a.compatMode,UEb)?a.documentElement:a.body};_.ce=function Ti(a,b){return a.contains(b)};_.de=function Ui(a,b){a.textContent=b||''};var eu=tnb(VEb,WEb,793);lH(594,793,TEb,Zi);_.Td=function $i(b){var c=b.relatedTarget;if(!c){return null}try{var d=c.nodeName;return c}catch(a){return null}};_.Wd=function _i(a){return Wi(Zj(a.ownerDocument),a)};_.Xd=function aj(a){return Xi(Zj(a.ownerDocument),a)};_.Yd=function bj(a){var b=$wnd.getComputedStyle(a.documentElement,null);if(b==null){return 0}return parseInt(b.marginLeft,10)+parseInt(b.borderLeftWidth,10)};_.Zd=function cj(a){var b=$wnd.getComputedStyle(a.documentElement,null);if(b==null){return 0}return parseInt(b.marginTop,10)+parseInt(b.borderTopWidth,10)};_.ae=function ej(a){var b;b=(Vi==-2&&(Vi=dj()),Vi);if(!(b!=-1&&b>=1009000)&&Yi(a)){return Hi(a.scrollLeft||0)-(((a.scrollWidth||0)|0)-(a.clientWidth|0))}return Hi(a.scrollLeft||0)};_.ce=function fj(a,b){return a===b||!!(a.compareDocumentPosition(b)&16)};_.ee=function gj(a,b){var c;c=(Vi==-2&&(Vi=dj()),Vi);!(c!=-1&&c>=1009000)&&Yi(a)&&(b+=((a.scrollWidth||0)|0)-(a.clientWidth|0));a.scrollLeft=b};_.fe=function hj(a){var b=a.ownerDocument;var c=a.cloneNode(true);var d=b.createElement('DIV');d.appendChild(c);outer=d.innerHTML;c.innerHTML='';return outer};var Vi=-2;var cu=tnb(VEb,ZEb,594);lH(794,793,TEb);_.Sd=function jj(a){return a.currentTarget||$wnd};_.Wd=function kj(a){var b,c;c=a.getBoundingClientRect&&a.getBoundingClientRect();b=c?c.left+qi(this,a.ownerDocument):lj(a);return mi(),b|0};_.Xd=function mj(a){var b,c,d;b=a.getBoundingClientRect&&a.getBoundingClientRect();c=b?b.top+ri(this,a.ownerDocument):nj(a);return mi(),c|0};_.ae=function oj(a){if(!Bob('body',(mi(),a).tagName)&&ij(a)){return Hi(a.scrollLeft||0)-(((a.scrollWidth||0)|0)-(a.clientWidth|0))}return Hi(a.scrollLeft||0)};_.be=function pj(a){return typeof a.tabIndex!='undefined'?a.tabIndex:-1};_.ee=function qj(a,b){!Bob('body',(mi(),a).tagName)&&ij(a)&&(b+=((a.scrollWidth||0)|0)-(a.clientWidth|0));a.scrollLeft=b};var du=tnb(VEb,bFb,794);lH(593,794,TEb,rj);_.Ud=function sj(a){var b=a.target;b&&b.nodeType==3&&(b=b.parentNode);return b};_.ge=function tj(a){return a.body};var fu=tnb(VEb,cFb,593);lH(60,4,hFb);var uk,vk,wk,xk,yk;var mu=unb(VEb,'Style/BorderStyle',60,Bk);lH(539,60,hFb,Ck);var hu=unb(VEb,'Style/BorderStyle/1',539,null);lH(540,60,hFb,Dk);var iu=unb(VEb,'Style/BorderStyle/2',540,null);lH(541,60,hFb,Ek);var ju=unb(VEb,'Style/BorderStyle/3',541,null);lH(542,60,hFb,Fk);var ku=unb(VEb,'Style/BorderStyle/4',542,null);lH(543,60,hFb,Gk);var lu=unb(VEb,'Style/BorderStyle/5',543,null);lH(26,4,jFb);var Hk,Ik,Jk,Kk,Lk,Mk,Nk,Ok,Pk,Qk,Rk,Sk,Tk,Uk,Vk,Wk,Xk,Yk,Zk;var Gu=unb(VEb,'Style/Display',26,al);lH(544,26,jFb,bl);_.he=function cl(){return GEb};var xu=unb(VEb,'Style/Display/1',544,null);lH(553,26,jFb,dl);_.he=function el(){return 'table-column-group'};var nu=unb(VEb,'Style/Display/10',553,null);lH(554,26,jFb,fl);_.he=function gl(){return 'table-header-group'};var ou=unb(VEb,'Style/Display/11',554,null);lH(555,26,jFb,hl);_.he=function il(){return 'table-footer-group'};var pu=unb(VEb,'Style/Display/12',555,null);lH(556,26,jFb,jl);_.he=function kl(){return 'table-row-group'};var qu=unb(VEb,'Style/Display/13',556,null);lH(557,26,jFb,ll);_.he=function ml(){return 'table-cell'};var ru=unb(VEb,'Style/Display/14',557,null);lH(558,26,jFb,nl);_.he=function ol(){return 'table-column'};var su=unb(VEb,'Style/Display/15',558,null);lH(559,26,jFb,pl);_.he=function ql(){return 'table-row'};var tu=unb(VEb,'Style/Display/16',559,null);lH(560,26,jFb,rl);_.he=function sl(){return 'initial'};var uu=unb(VEb,'Style/Display/17',560,null);lH(561,26,jFb,tl);_.he=function ul(){return 'flex'};var vu=unb(VEb,'Style/Display/18',561,null);lH(562,26,jFb,vl);_.he=function wl(){return 'inline-flex'};var wu=unb(VEb,'Style/Display/19',562,null);lH(545,26,jFb,xl);_.he=function yl(){return kFb};var yu=unb(VEb,'Style/Display/2',545,null);lH(546,26,jFb,zl);_.he=function Al(){return 'inline'};var zu=unb(VEb,'Style/Display/3',546,null);lH(547,26,jFb,Bl);_.he=function Cl(){return 'inline-block'};var Au=unb(VEb,'Style/Display/4',547,null);lH(548,26,jFb,Dl);_.he=function El(){return 'inline-table'};var Bu=unb(VEb,'Style/Display/5',548,null);lH(549,26,jFb,Fl);_.he=function Gl(){return 'list-item'};var Cu=unb(VEb,'Style/Display/6',549,null);lH(550,26,jFb,Hl);_.he=function Il(){return 'run-in'};var Du=unb(VEb,'Style/Display/7',550,null);lH(551,26,jFb,Jl);_.he=function Kl(){return 'table'};var Eu=unb(VEb,'Style/Display/8',551,null);lH(552,26,jFb,Ll);_.he=function Ml(){return 'table-caption'};var Fu=unb(VEb,'Style/Display/9',552,null);lH(68,4,lFb);var Nl,Ol,Pl,Ql;var Lu=unb(VEb,'Style/Overflow',68,Tl);lH(563,68,lFb,Ul);var Hu=unb(VEb,'Style/Overflow/1',563,null);lH(564,68,lFb,Vl);var Iu=unb(VEb,'Style/Overflow/2',564,null);lH(565,68,lFb,Wl);var Ju=unb(VEb,'Style/Overflow/3',565,null);lH(566,68,lFb,Xl);var Ku=unb(VEb,'Style/Overflow/4',566,null);lH(69,4,mFb);var Yl,Zl,$l,_l;var Qu=unb(VEb,'Style/Position',69,cm);lH(567,69,mFb,dm);var Mu=unb(VEb,'Style/Position/1',567,null);lH(568,69,mFb,em);var Nu=unb(VEb,'Style/Position/2',568,null);lH(569,69,mFb,fm);var Ou=unb(VEb,'Style/Position/3',569,null);lH(570,69,mFb,gm);var Pu=unb(VEb,'Style/Position/4',570,null);lH(70,4,nFb);var hm,im,jm,km;var Vu=unb(VEb,'Style/TextAlign',70,nm);lH(571,70,nFb,om);var Ru=unb(VEb,'Style/TextAlign/1',571,null);lH(572,70,nFb,pm);var Su=unb(VEb,'Style/TextAlign/2',572,null);lH(573,70,nFb,qm);var Tu=unb(VEb,'Style/TextAlign/3',573,null);lH(574,70,nFb,rm);var Uu=unb(VEb,'Style/TextAlign/4',574,null);lH(101,4,oFb);var sm,tm;var Yu=unb(VEb,'Style/TextOverflow',101,wm);lH(575,101,oFb,xm);var Wu=unb(VEb,'Style/TextOverflow/1',575,null);lH(576,101,oFb,ym);var Xu=unb(VEb,'Style/TextOverflow/2',576,null);lH(37,4,pFb);var zm,Am,Bm,Cm,Dm,Em,Fm,Gm,Hm;var gv=unb(VEb,'Style/Unit',37,Km);lH(530,37,pFb,Lm);var Zu=unb(VEb,'Style/Unit/1',530,null);lH(531,37,pFb,Mm);var $u=unb(VEb,'Style/Unit/2',531,null);lH(532,37,pFb,Nm);var _u=unb(VEb,'Style/Unit/3',532,null);lH(533,37,pFb,Om);var av=unb(VEb,'Style/Unit/4',533,null);lH(534,37,pFb,Pm);var bv=unb(VEb,'Style/Unit/5',534,null);lH(535,37,pFb,Qm);var cv=unb(VEb,'Style/Unit/6',535,null);lH(536,37,pFb,Rm);var dv=unb(VEb,'Style/Unit/7',536,null);lH(537,37,pFb,Sm);var ev=unb(VEb,'Style/Unit/8',537,null);lH(538,37,pFb,Tm);var fv=unb(VEb,'Style/Unit/9',538,null);lH(102,4,qFb);var Um,Vm;var jv=unb(VEb,'Style/Visibility',102,Ym);lH(577,102,qFb,Zm);_.he=function $m(){return rFb};var hv=unb(VEb,'Style/Visibility/1',577,null);lH(578,102,qFb,_m);_.he=function an(){return sFb};var iv=unb(VEb,'Style/Visibility/2',578,null);lH(61,4,tFb);var bn,cn,dn,en,fn;var pv=unb(VEb,'Style/WhiteSpace',61,jn);lH(579,61,tFb,kn);var kv=unb(VEb,'Style/WhiteSpace/1',579,null);lH(580,61,tFb,ln);var lv=unb(VEb,'Style/WhiteSpace/2',580,null);lH(581,61,tFb,mn);var mv=unb(VEb,'Style/WhiteSpace/3',581,null);lH(582,61,tFb,nn);var nv=unb(VEb,'Style/WhiteSpace/4',582,null);lH(583,61,tFb,on);var ov=unb(VEb,'Style/WhiteSpace/5',583,null);lH(769,1,{});_.Zc=function tn(){return 'An event type'};var Sx=tnb(uFb,'Event',769);lH(770,769,{});_.ke=function vn(){return this.je()};_.le=function wn(){this.e=false;this.f=null};_.e=false;var Uv=tnb(vFb,'GwtEvent',770);lH(788,770,{});_.je=function Bn(){return this.me()};_.ke=function Cn(){return this.me()};var xn;var uv=tnb(wFb,'DomEvent',788);lH(613,788,{},Fn);_.ie=function Gn(a){a.ne(this)};_.je=function In(){return Dn};_.ke=function Jn(){return Dn};_.me=function Hn(){return Dn};var Dn;var qv=tnb(wFb,'BlurEvent',613);lH(789,788,{});var wv=tnb(wFb,'HumanInputEvent',789);lH(790,789,{});var Ev=tnb(wFb,'MouseEvent',790);lH(590,790,{},Mn);_.ie=function Nn(a){a.oe(this)};_.je=function Pn(){return Kn};_.ke=function Qn(){return Kn};_.me=function On(){return Kn};var Kn;var rv=tnb(wFb,'ClickEvent',590);lH(528,788,{},Tn);_.ie=function Un(a){a.pe(this)};_.je=function Wn(){return Rn};_.ke=function Xn(){return Rn};_.me=function Vn(){return Rn};var Rn;var sv=tnb(wFb,'ContextMenuEvent',528);lH(136,1,{136:1});_.Yc=function Zn(){return this.c};_.Zc=function $n(){return 'Event type'};_.c=0;var Yn=0;var Qx=tnb(uFb,'Event/Type',136);lH(41,136,{41:1,136:1},_n);var Tv=tnb(vFb,'GwtEvent/Type',41);lH(44,41,{44:1,41:1,136:1},ao);var tv=tnb(wFb,'DomEvent/Type',44);lH(612,788,{},eo);_.ie=function fo(a){a.qe(this)};_.je=function ho(){return bo};_.ke=function io(){return bo};_.me=function go(){return bo};var bo;var vv=tnb(wFb,'FocusEvent',612);lH(795,788,{});var zv=tnb(wFb,'KeyEvent',795);lH(796,795,{});var xv=tnb(wFb,'KeyCodeEvent',796);lH(611,796,{},lo);_.ie=function mo(a){a.re(this)};_.je=function oo(){return jo};_.ke=function po(){return jo};_.me=function no(){return jo};var jo;var yv=tnb(wFb,'KeyDownEvent',611);lH(718,795,{},so);_.ie=function to(a){qW(a,this)};_.je=function vo(){return qo};_.ke=function wo(){return qo};_.me=function uo(){return qo};var qo;var Av=tnb(wFb,'KeyPressEvent',718);lH(722,796,{},zo);_.ie=function Ao(a){a.se(this)};_.je=function Co(){return xo};_.ke=function Do(){return xo};_.me=function Bo(){return xo};var xo;var Bv=tnb(wFb,'KeyUpEvent',722);lH(721,788,{},Go);_.ie=function Ho(a){oeb(a.a.b)};_.je=function Jo(){return Eo};_.ke=function Ko(){return Eo};_.me=function Io(){return Eo};var Eo;var Cv=tnb(wFb,'LoadEvent',721);lH(610,790,{},No);_.ie=function Oo(a){a.te(this)};_.je=function Qo(){return Lo};_.ke=function Ro(){return Lo};_.me=function Po(){return Lo};var Lo;var Dv=tnb(wFb,'MouseDownEvent',610);lH(609,790,{},Uo);_.ie=function Vo(a){z7(a,this,false)};_.je=function Xo(){return So};_.ke=function Yo(){return So};_.me=function Wo(){return So};var So;var Fv=tnb(wFb,'MouseMoveEvent',609);lH(608,790,{},_o);_.ie=function ap(a){var b;b=L7(this.a);y7(a,b)};_.je=function cp(){return Zo};_.ke=function dp(){return Zo};_.me=function bp(){return Zo};var Zo;var Gv=tnb(wFb,'MouseOutEvent',608);lH(719,790,{},gp);_.ie=function hp(a){a.ue(this)};_.je=function jp(){return ep};_.ke=function kp(){return ep};_.me=function ip(){return ep};var ep;var Hv=tnb(wFb,'MouseUpEvent',719);lH(695,1,{},np);var Iv=tnb(wFb,'PrivateMap',695);lH(801,789,{});var op;var Lv=tnb(wFb,AFb,801);lH(745,801,{},rp);_.ie=function sp(a){zT(a.a,this)};_.je=function up(){return pp};_.ke=function vp(){return pp};_.me=function tp(){return pp};var pp;var Jv=tnb(wFb,'TouchEndEvent',745);lH(694,1,{},wp);_.a=false;var Kv=tnb(wFb,'TouchEvent/TouchSupportDetector',694);lH(744,801,{},zp);_.ie=function Ap(a){adb(a,this)&&uT(a.a)};_.je=function Cp(){return xp};_.ke=function Dp(){return xp};_.me=function Bp(){return xp};var xp;var Mv=tnb(wFb,'TouchMoveEvent',744);lH(720,801,{},Gp);_.ie=function Hp(a){a.ve(this)};_.je=function Jp(){return Ep};_.ke=function Kp(){return Ep};_.me=function Ip(){return Ep};var Ep;var Nv=tnb(wFb,'TouchStartEvent',720);lH(324,770,{},Mp);_.ie=function Np(a){G3(a,this)};_.ke=function Qp(){return Lp};_.je=function Pp(){return Lp};_.a=false;var Lp;var Ov=tnb(DFb,'AttachEvent',324);lH(683,770,{},Sp);_.ie=function Tp(a){a.we(this)};_.ke=function Wp(){return Rp};_.je=function Vp(){return Rp};var Rp;var Pv=tnb(DFb,'CloseEvent',683);lH(686,770,{},Yp);_.ie=function Zp(a){a.xe(this)};_.ke=function aq(){return Xp};_.je=function _p(){return Xp};var Xp;var Qv=tnb(DFb,'ResizeEvent',686);lH(705,770,{},cq);_.ie=function dq(a){a.a.D&&a.a.Ue()};_.ke=function gq(){return bq};_.je=function fq(){return bq};var bq;var Rv=tnb(DFb,'ValueChangeEvent',705);lH(782,1,{});var Rx=tnb(uFb,'EventBus',782);lH(786,782,EFb);var Sv=tnb(vFb,'EventBus',786);lH(83,1,EFb,lq,mq);_.td=function nq(a){jq(this,a)};var Wv=tnb(vFb,'HandlerManager',83);lH(182,782,{},yq);_.b=0;_.c=false;var Wx=tnb(uFb,FFb,182);lH(450,182,{},Bq);var Vv=tnb(vFb,'HandlerManager/Bus',450);lH(681,1,{},Cq);var Xv=tnb(vFb,'LegacyHandlerWrapper',681);lH(490,786,EFb,Dq);_.td=function Eq(a){hq(this,a)};var Yv=tnb(vFb,FFb,490);lH(88,22,GFb,Fq);var Xx=tnb(uFb,HFb,88);lH(170,88,GFb,Hq);var Zv=tnb(vFb,HFb,170);lH(724,1,{},Lq);_.b=0;var fw=tnb(IFb,'Request',724);lH(725,29,{},Mq);_.hd=function Nq(){Kq(this.a)};var $v=tnb(IFb,'Request/1',725);lH(196,1,{},Uq);_.d=false;_.f=0;var Oq;var bw=tnb(IFb,'RequestBuilder',196);lH(723,1,{},Wq);_.ye=function Xq(a){if(a.readyState==4){xP(a);Jq(this.b,this.a)}};var _v=tnb(IFb,'RequestBuilder/1',723);lH(127,1,{},Yq);_.Zc=function Zq(){return this.a};var aw=tnb(IFb,'RequestBuilder/Method',127);lH(74,17,LFb,$q);var cw=tnb(IFb,'RequestException',74);lH(736,74,LFb,_q);var dw=tnb(IFb,'RequestPermissionException',736);lH(747,74,LFb,ar);var ew=tnb(IFb,'RequestTimeoutException',747);lH(802,1,{});var hw=tnb(IFb,'Response',802);lH(726,802,{},br);var gw=tnb(IFb,'ResponseImpl',726);lH(117,4,{117:1,3:1,6:1,4:1},kr);var gr,hr,ir;var iw=unb('com.google.gwt.i18n.client','HasDirection/Direction',117,lr);var tr;var Xr,Yr,Zr,$r;lH(116,1,{116:1});var TF=tnb(PFb,'Handler',116);lH(282,116,{116:1},vH);_.Be=function wH(a){var b,c;if(!window.console||(sH(this),ODb>a.a.og())){return}b=HH(this.a,a);c=a.a.og();c>=(KAb(),YEb)?(window.console.error(b),undefined):c>=900?(window.console.warn(b),undefined):c>=800?(window.console.info(b),undefined):(window.console.log(b),undefined)};var jw=tnb(QFb,'ConsoleLogHandler',282);lH(283,116,{116:1},xH);_.Be=function yH(a){return};var kw=tnb(QFb,'DevelopmentModeLogHandler',283);var zH;var nw=tnb(QFb,'LogConfiguration',null);lH(281,1,{},CH);var lw=tnb(QFb,'LogConfiguration/1',281);lH(280,1,{},GH);var mw=tnb(QFb,'LogConfiguration/LogConfigurationImplRegular',280);lH(797,1,{});var SF=tnb(PFb,'Formatter',797);lH(798,797,{});var pw=tnb(RFb,'FormatterImpl',798);lH(261,798,{},IH);_.a=false;var ow=tnb(QFb,'TextLogFormatter',261);lH(757,1,{});var XD=tnb(SFb,'OutputStream',757);lH(209,757,{},JH);var WD=tnb(SFb,'FilterOutputStream',209);lH(168,209,{},KH);_.Ce=function LH(a){};var YD=tnb(SFb,'PrintStream',168);lH(711,168,{},MH);_.Ce=function NH(a){apb(this.a,a);apb(this.a,'\n')};var qw=tnb(RFb,'StackTracePrintStream',711);lH(700,1,{},RH);var rw=tnb(TFb,'SafeHtmlBuilder',700);lH(159,1,{830:1,159:1,3:1},SH);_.Wc=function TH(a){if(!fs(a,159)){return false}return Aob(this.a,a.a)};_.Yc=function UH(){return tDb(this.a)};_.Zc=function VH(){return 'safe: "'+this.a+'"'};var sw=tnb(TFb,'SafeHtmlString',159);var WH,XH,YH,ZH,_H,aI;lH(126,1,{832:1,126:1},dI);_.Wc=function eI(a){if(!fs(a,126)){return false}return Aob(this.a,a.a)};_.Yc=function fI(){return tDb(this.a)};_.Zc=function gI(){return 'safe: "'+this.a+'"'};var tw=tnb(TFb,'SafeUriString',126);lH(805,1,{});var uw=tnb('com.google.gwt.text.shared','AbstractRenderer',805);lH(734,1,{},jI);var iI;var vw=tnb(UFb,'PassthroughParser',734);lH(733,805,{},lI);var kI;var ww=tnb(UFb,'PassthroughRenderer',733);var nI=null,oI,pI=true;var tI=null,uI,vI;var MI;lH(356,770,{},ZI);_.ie=function $I(a){a.De(this);WI.c=false};_.ke=function bJ(){return VI};_.je=function aJ(){return VI};_.le=function cJ(){XI(this)};_.a=false;_.b=false;_.c=false;var VI,WI;var xw=tnb(mEb,'Event/NativePreviewEvent',356);var dJ,eJ;lH(614,1,EFb,kJ);_.td=function lJ(a){jq(this.a,a)};var yw=tnb(mEb,'History/HistoryEventSource',614);lH(615,1,{},mJ);var zw=tnb(mEb,'History/HistoryImpl',615);var oJ=false,pJ,qJ,rJ=0,sJ=0,tJ=false;lH(449,770,{},FJ);_.ie=function GJ(a){a.Ee(this)};_.ke=function IJ(){return DJ};_.je=function HJ(){return DJ};var DJ;var Bw=tnb(mEb,'Window/ClosingEvent',449);var JJ='',KJ;lH(181,83,EFb,OJ);var Cw=tnb(mEb,'Window/WindowHandlers',181);lH(122,1,cGb);var PJ=false;var Hw=tnb(dGb,'DOMImpl',122);lH(791,122,cGb);_.Fe=function fK(a,b){var c=0,d=a.firstChild;while(d){if(d.nodeType==1){if(b==c)return d;++c}d=d.nextSibling}return null};_.Ge=function gK(a){var b=0,c=a.firstChild;while(c){c.nodeType==1&&++b;c=c.nextSibling}return b};_.He=function iK(){$J()};_.Ie=function jK(a,b,c){var d=0,e=a.firstChild,f=null;while(e){if(e.nodeType==1){if(d==c){f=e;break}++d}e=e.nextSibling}a.insertBefore(b,f)};_.Je=function kK(a){RJ(this);VJ==a&&(VJ=null)};_.Ke=function lK(a){RJ(this);VJ=a};_.Le=function mK(a,b){var c,d;RJ(this);c=UJ;d=c[b]||c['_default_'];a.addEventListener(b,d,false)};_.Me=function nK(a,b){RJ(this);_J(a,b)};var UJ,VJ,WJ,XJ,YJ;var Fw=tnb(dGb,WEb,791);lH(591,791,cGb,qK);_.He=function rK(){$J();pK()};_.Me=function sK(a,b){RJ(this);_J(a,b);b&XFb&&a.addEventListener(WFb,(ZJ(),XJ),false)};var Dw=tnb(dGb,ZEb,591);lH(792,791,cGb);var Ew=tnb(dGb,bFb,792);lH(592,792,cGb,tK);var Gw=tnb(dGb,cFb,592);lH(191,1,{191:1},xK);_.Ne=function yK(){return $wnd.location.hash};var Jw=tnb(dGb,'WindowImpl',191);lH(682,191,{191:1},zK);_.Ne=function AK(){var a=$wnd.location.href;var b=a.indexOf('#');return b>0?a.substring(b):''};var Iw=tnb(dGb,'WindowImplMozilla',682);lH(768,13,fGb);_.rd=function CK(){SK(this,(QK(),OK))};_.sd=function DK(){SK(this,(QK(),PK))};var jx=tnb(NEb,'Panel',768);lH(169,768,fGb);_.Oe=function IK(){return new LO(this.o)};_.Pe=function JK(a){return GK(this,a)};var Qw=tnb(NEb,'ComplexPanel',169);lH(345,169,fGb);_.Pe=function NK(a){return LK(this,a)};var Kw=tnb(NEb,'AbsolutePanel',345);lH(296,170,GFb,RK);var OK,PK;var Nw=tnb(NEb,'AttachDetachException',296);lH(297,1,{},TK);_.Qe=function UK(a){a.vd()};var Lw=tnb(NEb,'AttachDetachException/1',297);lH(298,1,{},VK);_.Qe=function WK(a){a.xd()};var Mw=tnb(NEb,'AttachDetachException/2',298);lH(446,169,fGb);var Ow=tnb(NEb,'CellPanel',446);lH(295,1,{},$K);_.Qe=function _K(a){wf(a,null)};var Pw=tnb(NEb,'ComplexPanel/1',295);lH(772,13,iGb);_.ud=function dL(){return cL(this)};_.vd=function eL(){aL(this);if(this.Sc!=-1){xf(this.bb,this.Sc);this.Sc=-1}this.bb.vd();wI();this.Vc.__listener=this;Op(this,true)};_.wd=function fL(a){sf(this,a);this.bb.wd(a)};_.xd=function gL(){try{Op(this,false)}finally{this.bb.xd()}};_.nd=function hL(){Ve(this,this.bb.nd());return wI(),this.Vc};var Rw=tnb(NEb,'Composite',772);lH(693,1,{},kL);_.c=false;var Sw=tnb(NEb,'DirectionalTextHelper',693);lH(76,169,fGb,nL,oL);var Tw=tnb(NEb,'FlowPanel',76);lH(143,768,fGb);_.Re=function uL(){return wI(),this.Vc};_.Oe=function vL(){return new _N(this)};_.Pe=function wL(a){return qL(this,a)};_.Se=function xL(a){rL(this,a)};var vx=tnb(NEb,'SimplePanel',143);var yL;var HL,IL,JL;lH(154,13,OEb);var cx=tnb(NEb,'LabelBase',154);lH(250,154,OEb,CL);var dx=tnb(NEb,'Label',250);lH(77,250,OEb,FL,GL);var Ww=tnb(NEb,'HTML',77);var ML;lH(781,1,{});var Xw=tnb(NEb,'HasHorizontalAlignment/AutoHorizontalAlignmentConstant',781);lH(150,781,{},LL);var Yw=tnb(NEb,'HasHorizontalAlignment/HorizontalAlignmentConstant',150);lH(180,1,{},OL);var Zw=tnb(NEb,'HasVerticalAlignment/VerticalAlignmentConstant',180);lH(259,13,OEb,SL);_.wd=function TL(a){wI();QJ((mi(),a).type)==VFb&&!!this.a&&(this.Vc[eGb]='',undefined);sf(this,a)};_.yd=function UL(){VL(this.a,this)};var bx=tnb(NEb,'Image',259);lH(703,1,{});_.a=null;var _w=tnb(NEb,'Image/State',703);lH(704,1,jGb,WL);_.Kd=function XL(){var a;if(this.b.a!=this.a||this!=this.a.a){return}this.a.a=null;if(!this.b.Rc){YL(this.b)[eGb]=dFb;return}a=Bj($doc);Nh(YL(this.b),a)};var $w=tnb(NEb,'Image/State/1',704);lH(260,703,{},ZL);var ax=tnb(NEb,'Image/UnclippedState',260);lH(584,228,QEb,hM);var ex=tnb(NEb,'ListBox',584);lH(149,13,OEb,AM);_.Te=function CM(){(zL(),yL).cf((wI(),this.Vc))};_.wd=function DM(a){var b,c;b=mM(this,(wI(),(mi(),li).Ud(a)));switch(QJ(a.type)){case 1:{(zL(),yL).cf(this.Vc);!!b&&lM(this,b,true);break}case 16:{!!b&&pM(this,b,true);break}case 32:{!!b&&pM(this,null,false);break}case 2048:{vM(this);break}case 128:{c=a.keyCode|0;c=c;switch(c){case 37:uM(this);a.stopPropagation();li.Vd(a);break;case 39:sM(this);a.stopPropagation();li.Vd(a);break;case 38:rM(this);a.stopPropagation();li.Vd(a);break;case 40:qM(this);a.stopPropagation();li.Vd(a);break;case 27:wM(this,null);a.stopPropagation();li.Vd(a);break;case 9:wM(this,null);break;case 13:if(!vM(this)){lM(this,this.g,true);a.stopPropagation();li.Vd(a)}}break}}sf(this,a)};_.xd=function EM(){tf(this)};_.c=false;_.e=true;_.i=false;var hx=tnb(NEb,'MenuBar',149);lH(444,1,jGb,FM);_.Kd=function GM(){this.a.Kd()};var fx=tnb(NEb,'MenuBar/1',444);lH(445,1,{752:1,27:1},HM);_.ne=function IM(a){wM(this.a,null)};var gx=tnb(NEb,'MenuBar/2',445);lH(106,12,{16:1,106:1,12:1},LM,MM);_.Ad=function NM(a){a?Ze(this,df((wI(),this.Vc))+'-'+PEb,false):Ze(this,df((wI(),this.Vc))+'-'+PEb,true);this.b=a};_.b=true;var ix=tnb(NEb,'MenuItem',106);lH(115,143,fGb);_.Re=function fN(){return OM.ef(AI((wI(),this.Vc)))};_.md=function gN(){return OM.ff((wI(),wI(),Uh(this.Vc)))};_.Ue=function hN(){this.Ve(false)};_.Ve=function iN(a){UM(this)};_.We=function jN(a){return true};_.De=function kN(a){a.c&&!this.We(a.d)&&(a.a=true)};_.zd=function lN(){this.R&&AN(this.Q,false,true)};_.od=function mN(a){YM(this,a)};_.Xe=function nN(a,b){ZM(this,a,b)};_.Se=function oN(a){_M(this,a)};_.qd=function pN(a){aN(this,a)};_.C=false;_.D=false;_.K=false;_.L=false;_.M=0;_.N=false;_.P=false;_.R=false;_.S=0;var OM;var px=tnb(NEb,'PopupPanel',115);lH(351,1,{807:1,27:1},rN);_.xe=function sN(a){qN()};var kx=tnb(NEb,'PopupPanel/1',351);lH(352,1,rGb,tN);_.De=function uN(a){XM(this.a,a)};var lx=tnb(NEb,'PopupPanel/3',352);lH(353,1,{823:1,27:1},vN);var mx=tnb(NEb,'PopupPanel/4',353);lH(349,144,{},BN);_.ad=function CN(){xN(this)};_.bd=function DN(){this.d=SM(this.a);this.e=TM(this.a);Pe(this.a).style[sGb]=sFb;zN(this,(1+$wnd.Math.cos(kEb))/2)};_.cd=function EN(a){zN(this,a)};_.a=null;_.b=false;_.c=false;_.d=0;_.e=-1;_.i=false;var ox=tnb(NEb,'PopupPanel/ResizeAnimation',349);lH(350,29,{},FN);_.hd=function GN(){this.a.g=null;Y(this.a,200,Dg())};var nx=tnb(NEb,'PopupPanel/ResizeAnimation/1',350);lH(142,345,tGb,QN);var MN,NN,ON;var tx=tnb(NEb,'RootPanel',142);lH(346,1,{},VN);_.Qe=function WN(a){a.ud()&&a.xd()};var qx=tnb(NEb,'RootPanel/1',346);lH(227,1,uGb,XN);_.we=function YN(a){SN()};var rx=tnb(NEb,'RootPanel/2',227);lH(226,142,tGb,ZN);var sx=tnb(NEb,'RootPanel/DefaultRootPanel',226);lH(354,1,{},_N);_.$e=function bO(){return $N(this)};_.Ze=function aO(){return this.a};_._e=function cO(){!!this.b&&qL(this.c,this.b)};_.a=false;_.b=null;var ux=tnb(NEb,'SimplePanel/1',354);lH(585,228,QEb);_.wd=function jO(a){var b;b=(wI(),QJ((mi(),a).type));(b&896)!=0?sf(this,a):sf(this,a)};_.yd=function kO(){};var Fx=tnb(NEb,'ValueBoxBase',585);lH(253,585,QEb);var xx=tnb(NEb,'TextBoxBase',253);lH(706,253,QEb);var wx=tnb(NEb,'TextArea',706);lH(155,253,QEb,nO);var yx=tnb(NEb,'TextBox',155);lH(71,4,vGb);var pO,qO,rO,sO;var Ex=unb(NEb,'ValueBoxBase/TextAlignment',71,vO);lH(586,71,vGb,wO);var Ax=unb(NEb,'ValueBoxBase/TextAlignment/1',586,null);lH(587,71,vGb,xO);var Bx=unb(NEb,'ValueBoxBase/TextAlignment/2',587,null);lH(588,71,vGb,yO);var Cx=unb(NEb,'ValueBoxBase/TextAlignment/3',588,null);lH(589,71,vGb,zO);var Dx=unb(NEb,'ValueBoxBase/TextAlignment/4',589,null);lH(447,446,fGb,BO);_.Pe=function CO(a){var b,c;return b=BI((wI(),a.Vc)),c=GK(this,a),c&&Jh(this.c,pi((mi(),b))),c};var Gx=tnb(NEb,'VerticalPanel',447);lH(251,1,{},IO);_.Oe=function JO(){return new LO(this)};_.c=0;var Ix=tnb(NEb,'WidgetCollection',251);lH(252,1,{},LO);_.$e=function NO(){return KO(this)};_.Ze=function MO(){return this.b<this.c.c};_._e=function OO(){if(!this.a){throw HG(new Znb)}this.c.b.Pe(this.a);--this.b;this.a=null};_.b=0;var Hx=tnb(NEb,'WidgetCollection/WidgetIterator',252);lH(156,1,{156:1},VO);_.af=function WO(a){a.blur()};_.bf=function XO(){var a;a=wj($doc);a.tabIndex=0;return a};_.cf=function YO(a){a.focus()};var RO,SO;var Mx=tnb(wGb,'FocusImpl',156);lH(158,156,xGb,_O);_.bf=function aP(){return bP(ZO?ZO:(ZO=$O()))};var ZO;var Lx=tnb(wGb,'FocusImplStandard',158);lH(684,158,xGb,cP);_.af=function dP(a){$wnd.setTimeout(function(){a.blur()},0)};_.cf=function eP(a){$wnd.setTimeout(function(){a.focus()},0)};var Kx=tnb(wGb,'FocusImplSafari',684);lH(188,1,{188:1},fP);_.df=function gP(){return wj($doc)};_.ef=function hP(a){return a};_.ff=function iP(a){return pi((mi(),a))};_.gf=function jP(a,b){a.style['clip']=b};var Px=tnb(wGb,'PopupImpl',188);lH(606,188,{188:1},mP);_.df=function nP(){var a;a=(wI(),wj($doc));if(kP){a.innerHTML='<div><\/div>';R6((Wg(),Vg),new sP(a))}return a};_.ef=function oP(a){return kP?oi((mi(),a)):a};_.ff=function pP(a){return kP?a:pi((mi(),a))};_.gf=function rP(a,b){a.style['clip']=b;a.style[eFb]=($k(),GEb);a.style[eFb]=''};var kP=false;var Ox=tnb(wGb,'PopupImplMozilla',606);lH(607,1,jGb,sP);_.Kd=function tP(){this.a.style[sGb]=(Rl(),yGb)};var Nx=tnb(wGb,'PopupImplMozilla/1',607);lH(451,1,{},CP);var Tx=tnb(uFb,'SimpleEventBus/1',451);lH(452,1,{812:1},DP);_.Kd=function EP(){qq(this.a,this.d,this.c,this.b)};var Ux=tnb(uFb,'SimpleEventBus/2',452);lH(453,1,{812:1},FP);_.Kd=function GP(){sq(this.a,this.d,this.c,this.b)};var Vx=tnb(uFb,'SimpleEventBus/3',453);lH(59,1,{59:1},VP,WP);_.hf=function XP(){return q1(this.n.a,this.c)};_.jf=function YP(){bi(this.d,CGb+this.c+DGb+this.k+' cell '+this.b)};_.b='cs0';_.c=0;_.f=false;_.g=true;_.i=false;_.k=0;var ay=tnb(EGb,'Cell',59);lH(120,1,{120:1},ZP);_.Wc=function $P(a){var b;if(this===a){return true}if(a==null){return false}if(!fs(a,120)){return false}b=a;return this.d==b.d&&this.a==b.a&&Lzb(kob(this.c),kob(b.c))&&Lzb(kob(this.b),kob(b.b))};_.Yc=function _P(){return Sub(rr(mr(oE,1),zDb,1,5,[this.d,this.a,kob(this.c),kob(this.b)]))};_.b=0;_.c=0;var Yx=tnb(EGb,'Cell/CellValueStyleKey',120);lH(176,115,fGb);_.kf=function tQ(){return Pe((PN(),TN()))};_.Ue=function uQ(){hQ(this,false)};_.Ve=function vQ(a){hQ(this,a)};_.vd=function wQ(){var a,b;b=bQ;if(b){a=b.kf();Dh(a,(wI(),this.Vc))}rf(this)};_.xd=function xQ(){tf(this);!!this.B&&Kh(this.B)};_.od=function yQ(a){lQ(this,a)};_.Xe=function zQ(a,b){nQ(this,a,b)};_.lf=function AQ(a){(wI(),this.Vc).style[fFb]=a?rFb:sFb;!!this.B&&(this.B.style[fFb]=a?rFb:sFb,undefined)};_.qd=function BQ(a){oQ(this,a)};_.mf=function CQ(){qQ(this)};var aQ=20000,bQ,cQ=-1,dQ=-1;var RC=tnb(JGb,'Overlay',176);lH(45,176,KGb);_.kf=function GQ(){DQ(this);OBb(QBb(pnb(this.Kg)),'Could not determine ApplicationConnection for Overlay. Overlay will be attached directly to the root panel');return Pe((PN(),TN()))};var yC=tnb(LGb,'VOverlay',45);lH(118,45,KGb,JQ,KQ,LQ);_.kf=function MQ(){var a;return a=(wI(),$doc.getElementById(MGb)),!a?(PN(),$doc.body):a};var Ez=tnb(EGb,'SpreadsheetOverlay',118);lH(184,118,{20:1,14:1,10:1,16:1,34:1,21:1,12:1,13:1,184:1,45:1},$Q);_.Ue=function _Q(){PQ(this)};_.lf=function aR(a){(wI(),this.Vc).style[fFb]=a?rFb:sFb;!!this.B&&(this.B.style[fFb]=a?rFb:sFb,undefined);this.i.style[fFb]=(a?(Wm(),Vm):(Wm(),Um)).he()};_.b=0;_.d=0;_.k=0;_.n=0;var $x=tnb(EGb,'CellComment',184);lH(473,1,SGb,bR);_.oe=function cR(a){XY(this.b,this.a)};var Zx=tnb(EGb,'CellComment/1',473);lH(210,1,{210:1,3:1},dR);_.equals=function eR(a){var b;if(this===a){return true}if(a==null){return false}if(_x!=T(a)){return false}b=a;if(this.col!=b.col){return false}if(this.row!=b.row){return false}return true};_.Wc=function(a){return this.equals(a)};_.hashCode=function fR(){var a;a=this.row+((this.col+1)/2|0);return 31*(this.col+a*a)};_.Yc=function(){return this.hashCode()};_.toString=function gR(){return apb(apb(apb(Zob(apb(Zob(apb(new cpb,'r'),this.row),'c'),this.col),this.cellStyle),'|'),this.value).a};_.Zc=function(){return this.toString()};_.cellStyle='cs0';_.col=0;_.isPercentage=false;_.locked=false;_.needsMeasure=false;_.row=0;var _x=tnb(EGb,'CellData',210);lH(104,76,TGb);_.wd=function mR(a){(mi(),li).Vd(a);a.stopPropagation();if(li.Qd(a)==1){this.c.tf(this.pf(),this.e,!this.b);iR(this,!this.b)}};_.b=false;_.d=0;_.e=0;_.f=false;_.g=0;_.i=0;_.j=0;_.k=0;_.n=0;var ty=tnb(EGb,'GroupingWidget',104);lH(257,104,TGb,nR);_.nf=function oR(){var a;a=new nR(this.e,this.c);hR(this,a);return a};_.pf=function pR(){return true};_.qf=function qR(a){(wI(),this.Vc).style[HGb]=a+(Im(),qGb);this.i=a};_.rf=function rR(a,b){this.k=9+b*18;this.g=a;(wI(),this.Vc).style[hGb]=this.k+(Im(),qGb);this.Vc.style[gGb]=a+qGb};_.sf=function sR(a){(wI(),this.Vc).style[IEb]=a+(Im(),qGb);this.n=a};var by=tnb(EGb,'ColumnGrouping',257);lH(712,1,{},wR);var cy=tnb(EGb,'CopyPasteHandlerImpl',712);lH(707,706,{20:1,27:1,14:1,164:1,10:1,65:1,80:1,16:1,21:1,12:1,13:1},AR);_.De=function BR(a){var b;b=a.d;QI((mi(),b).type)==128&&yR(this,b)};var fy=tnb(EGb,'CopyPasteTextBox',707);lH(708,1,{},CR);_.Jd=function DR(){TX(this.a.c);Pe(this.a).style[gGb]=(Im(),'-1000.0px');fk(this.b)==67?this.a.a:fk(this.b)==88&&uR(this.a.a);return false};var dy=tnb(EGb,'CopyPasteTextBox/1',708);lH(709,1,{},ER);_.Jd=function FR(){var a,b;a=(b=fO(this.a),b==null?'':b);vR(this.a.a,a);TX(this.a.c);return false};var ey=tnb(EGb,'CopyPasteTextBox/2',709);lH(421,772,iGb,rS);_.f=false;_.g=false;_.k=-1;_.n=-1;_.o=-1;_.p=-1;_.q=-1;_.s=-1;_.u=false;_.v=false;_.A=null;var GR;var sy=tnb(EGb,'FormulaBarWidget',421);lH(422,1,$Gb,tS);_.wd=function uS(a){hO(this.a.a,dM(this.a.B));mS(this.a)};var jy=tnb(EGb,'FormulaBarWidget/1',422);lH(427,1,jGb,vS);_.Kd=function wS(){if(this.a.f){this.a.s=-1;this.a.q=dO(this.a.e);KR(this.a)}};var gy=tnb(EGb,'FormulaBarWidget/10',427);lH(428,29,{},xS);_.hd=function yS(){this.a.d=null};var hy=tnb(EGb,'FormulaBarWidget/11',428);lH(237,1,jGb,zS);_.Kd=function AS(){var a;if(!this.a.f){return}YR(this.a,(a=fO(this.a.e),a==null?'':a));KR(this.a)};var iy=tnb(EGb,'FormulaBarWidget/12',237);lH(423,1,$Gb,BS);_.wd=function CS(a){var b,c,d;d=(wI(),QJ((mi(),a).type));if(d==512){b=a.keyCode|0;if(b==13){mS(this.a);nS(this.a,(c=fO(this.a.a),c==null?'':c));Kf(this.a.a,false)}else if(b==27){_R(this.a);TX(this.a.t.W)}}else if(d==2048){b3(this.a.t,true);Pe(this.a.a).style[_Gb]=(lm(),gGb)}else{b3(this.a.t,false);Pe(this.a.a).style[_Gb]=''}};var ky=tnb(EGb,'FormulaBarWidget/2',423);lH(424,1,$Gb,DS);_.wd=function ES(a){var b;switch(wI(),QJ((mi(),a).type)){case 2048:if(this.a.f&&this.a.e==this.a.w){this.a.f=false;LR(this.a,this.a.j)}else{b3(this.a.t,true);this.a.c=(b=fO(this.a.j),b==null?'':b);U1(this.a.t);LR(this.a,this.a.j)}break;case 4096:if(!this.a.f){b3(this.a.t,false);T1(this.a.t,(b=fO(this.a.j),b==null?'':b))}break;case 128:SR(this.a,a);break;case NFb:case 256:MR(this.a);pS(this.a,true);bS(this.a);break;case 8:this.a.f&&pS(this.a,true);}};var ly=tnb(EGb,'FormulaBarWidget/3',424);lH(233,1,jGb,FS);_.Kd=function GS(){var a,b,c,d;if(!this.a.f){return}d=(c=fO(this.a.e),c==null?'':c);b=dO(this.a.e);a=b>0?(lDb(b-1,d.length),d.charCodeAt(b-1)):0;this.a.g=false;a==40||a==43||a==45||a==47||a==42?(this.a.g=true):a==61&&d.length==1&&(this.a.g=true)};var my=tnb(EGb,'FormulaBarWidget/4',233);lH(425,1,jGb,HS);_.Kd=function IS(){var a;Kf(this.a.e,true);iS(Pe(this.a.e),this.a.q,0);YR(this.a,(a=fO(this.a.e),a==null?'':a));KR(this.a)};var ny=tnb(EGb,'FormulaBarWidget/5',425);lH(234,29,{},JS);_.hd=function KS(){var a;W1(this.a.t,(a=fO(this.a.j),a==null?'':a))};var oy=tnb(EGb,'FormulaBarWidget/6',234);lH(235,1,jGb,LS);_.Kd=function MS(){var a;W1(this.a.t,(a=fO(this.a.j),a==null?'':a))};var py=tnb(EGb,'FormulaBarWidget/7',235);lH(236,1,jGb,NS);_.Kd=function OS(){var a;!!this.a.e&&(a=fO(this.a.e),a==null?'':a).length==0&&(this.a.e==this.a.w?lS(this.a):kS(this.a))};var qy=tnb(EGb,'FormulaBarWidget/8',236);lH(426,1,jGb,PS);_.Kd=function QS(){var a,b;if(!this.a.f){b=(a=fO(this.b),a==null?'':a);if(Aob(b.substr(0,1),'=')||Aob(b.substr(0,1),'+')){this.a.f=true;this.a.e=this.b;YR(this.a,b);KR(this.a)}}};var ry=tnb(EGb,'FormulaBarWidget/9',426);lH(192,59,{59:1,192:1},RS);_.hf=function SS(){return this.d.clientWidth|0};_.jf=function TS(){bi(this.d,CGb+this.c+DGb+this.k+' cell '+this.b+' '+aHb)};var uy=tnb(EGb,'MergedCell',192);lH(78,1,{78:1,3:1},US);_.col1=0;_.col2=0;_.id=0;_.row1=0;_.row2=0;var vy=tnb(EGb,'MergedRegion',78);lH(211,1,{211:1,3:1},YS);_.col=0;_.dx=0;_.dy=0;_.height=0;_.row=0;_.type='IMAGE';_.width=0;var WS='COMPONENT',XS='IMAGE';var wy=tnb(EGb,'OverlayInfo',211);lH(701,155,QEb,ZS);_.wd=function $S(a){var b;wI();QJ((mi(),a).type)==NFb&&R6((Wg(),Vg),new _S(this));b=QJ(a.type);(b&896)!=0?sf(this,a):sf(this,a)};var yy=tnb(EGb,'PasteAwareTextBox',701);lH(702,1,jGb,_S);_.Kd=function aT(){xY(this.a.a)};var xy=tnb(EGb,'PasteAwareTextBox/1',702);var vD=vnb(bHb,'Connector');lH(285,1,{27:1,108:1,130:1,3:1});_.uf=function mT(){return bT(this)};_.vf=function nT(){return this.G};_.wf=function oT(){return this.I};_.xf=function pT(a){return fT(this,a)};_.yf=function qT(){return gT(this)};_.zf=function sT(a){jT(this,a)};_.Af=function tT(a){lT(this,a)};_.H=true;var $B=tnb(LGb,'AbstractConnector',285);lH(286,285,{27:1,161:1,108:1,130:1,3:1});_.yf=function JT(){return this.Cf()};_.Bf=function HT(){return vT(this)};_.Cf=function IT(){return !this.L&&(this.L=this.uf()),this.L};_.Df=function KT(a){return new l6(this.Cf().fb,this.Cf().gb,this.Cf().ib,this.Cf().hb)};_.Ef=function LT(){return wT(this)};_.Ff=function MT(){var a,b,c;if(!this.n&&(b=this.yf().pb,!!b&&b.contains('cClick'))){this.n=of(this.Ef(),new cdb(this),(Sn(),Sn(),Rn));(F4(),!E4&&(E4=new T4),F4(),E4).b&&(c=this.Ef(),this.w=of(c,new edb(this,c),(Fp(),Fp(),Ep)),this.v=of(c,new bdb(this),(yp(),yp(),xp)),this.u=of(c,new gdb(this),(qp(),qp(),pp)),undefined)}else if(!!this.n&&(a=this.yf().pb,!(!!a&&a.contains('cClick')))){BP(this.n.a);this.n=null;ET(this)}};_.Gf=function NT(){var a;a=this.Cf();if(a.fb!=null&&a.fb.length!=0){return true}return a.ib!=null&&a.ib.length!=0};_.Hf=function OT(){return _lb(this.Cf())};_.If=function PT(){return amb(this.Cf())};_.Jf=function QT(){return bmb(this.Cf())};_.Kf=function RT(){return cmb(this.Cf())};_.zf=function ST(a){AT(this,a)};_.Lf=function TT(){var a;a=this.Ef();$7((wI(),a.Vc),df(a.md())+'-error',this.Cf().hb)};_.Af=function UT(a){lT(this,a);CT(this,iT(this))};_.k=20;_.n=null;_.o='';_.p='';_.r=false;_.t=false;_.A=0;_.B=0;var YB=tnb(LGb,'AbstractComponentConnector',286);lH(171,286,gHb);_.Mf=function WT(){return jvb(),jvb(),gvb};var _B=tnb(LGb,'AbstractHasComponentsConnector',171);lH(357,171,{200:1,750:1,27:1,161:1,163:1,108:1,130:1,3:1},XT);_.Cf=function ZT(){return !this.L&&(this.L=bT(this)),this.L};_.yf=function $T(){return !this.L&&(this.L=bT(this)),this.L};_.Ef=function _T(){return !this.C&&(this.C=new wU),this.C};_.Bf=function YT(){return new wU};_.oe=function aU(a){fT(this,Cy).Ng()};_.we=function bU(a){(!this.C&&(this.C=new wU),this.C).Rc&&fT(this,Cy).Ng()};_.zf=function cU(a){var b,c;c=(!this.C&&(this.C=new wU),this.C);b=(!this.L&&(this.L=bT(this)),this.L);(a.Yf(CGb)||a.Yf('row'))&&R6((Wg(),Vg),new dU(c,b));a.Yf(hHb)&&nU(c,b.active);a.Yf('popupHeight')&&rU(c,b.popupHeight);a.Yf('popupWidth')&&sU(c,b.popupWidth);a.Yf('headerHidden')&&qU(c,b.headerHidden)};var Ay=tnb(EGb,'PopupButtonConnector',357);lH(358,1,jGb,dU);_.Kd=function eU(){uU(this.b,this.a.row,this.a.col)};var zy=tnb(EGb,'PopupButtonConnector/2',358);lH(448,13,OEb,jU);_.wd=function kU(a){if(Uf((mi(),li).Ud(a),this.b)){hQ(this.c,false);TX(this.e)}else{sf(this,a)}};var By=tnb(EGb,'PopupButtonHeader',448);lH(82,1,{82:1,3:1});_.ob=true;var DD=tnb(iHb,'SharedState',82);lH(75,82,jHb);_.db=null;_.eb=false;_.fb='';_.hb=null;_.ib=null;_.jb='';_.kb=null;_.lb=null;_.mb=null;_.nb='';var uD=tnb(bHb,'AbstractComponentState',75);lH(212,75,{212:1,75:1,82:1,3:1},mU);_.active=false;_.col=0;_.headerHidden=false;_.popupHeight=null;_.popupWidth=null;_.row=0;var Dy=tnb(EGb,'PopupButtonState',212);lH(95,228,{200:1,20:1,27:1,14:1,10:1,65:1,80:1,16:1,21:1,12:1,13:1,95:1},wU);_.oe=function xU(a){oU(this);lk(a.a)};_.xd=function yU(){hQ(this.d,false);tf(this)};_.pd=function zU(a,b){gf((wI(),this.Vc),a,b);Ze(this.d,a,b)};_.b=0;_.i=0;var Gy=tnb(EGb,'PopupButtonWidget',95);lH(347,1,{},AU);_.Ye=function BU(a,b){var c,d,e,f,g;f=Eh(this.a.g);c=(mi(),li).Xd(f)+((f.offsetHeight||0)|0);d=li.Wd(f)+((f.offsetWidth||0)|0);e=d-a;e<Ph(this.a.j)&&(e=d);g=c;g+b>Oh(this.a.j)&&(g=li.Xd(f)-b);g<Rh(this.a.j)&&(g=Rh(this.a.j));nQ(this.a.d,e,g)};var Ey=tnb(EGb,'PopupButtonWidget/1',347);lH(348,1,jGb,CU);_.Kd=function DU(){$M(this.a.d,this.a.a)};var Fy=tnb(EGb,'PopupButtonWidget/2',348);lH(258,104,TGb,EU);_.nf=function FU(){var a;a=new EU(this.e,this.c);hR(this,a);return a};_.pf=function GU(){return false};_.qf=function HU(a){(wI(),this.Vc).style[IGb]=a+(Im(),qGb);this.j=a};_.rf=function IU(a,b){this.g=6+b*15;this.k=a;(wI(),this.Vc).style[gGb]=this.g+(Im(),qGb);this.Vc.style[hGb]=a+qGb};_.sf=function JU(a){(wI(),this.Vc).style[HEb]=a+(Im(),qGb);this.d=a};var Hy=tnb(EGb,'RowGrouping',258);lH(455,1,{},$U);_.a=0;_.b=0;var Iy=tnb(EGb,'SelectionHandler',455);lH(475,772,iGb,AV);_.od=function BV(a){};_.qd=function CV(a){};_.c=0;_.d=0;_.e=0;_.f=0;_.g=false;_.i=false;_.j=false;_.k=0;_.n=0;_.o=false;_.p=false;_.r=0;_.s=false;_.t=0;_.u=0;_.v=0;_.w=0;_.C=false;_.G=0;_.H=0;_.I=0;_.J=0;_.K=0;_.L=0;_.N=false;_.O=0;_.P=0;_.R=false;_.S=false;_.T=false;_.U=0;_.V=0;_.Y=0;_.Z=0;_._=false;_.ab=0;var Qy=tnb(EGb,'SelectionWidget',475);lH(477,29,{},DV);_.hd=function EV(){var a,b,c,d,e,f,g,h,i;gi(this.a.Q.xc,((this.a.Q.xc.scrollTop||0)|0)+(this.a.n/2|0));fi(this.a.Q.xc,Yh(this.a.Q.xc)+(this.a.k/2|0));bZ(this.a.Q);g=this.a.c;h=this.a.d;this.a.k<0?(g=Ph(this.a.Q.xc)+5):this.a.k>0&&(g=Qh(this.a.Q.xc)-25);this.a.n<0?(h=Rh(this.a.Q.xc)+5):this.a.n>0&&(h=Oh(this.a.Q.xc)-25);if(this.a.n!=0&&((this.a.Q.xc.scrollTop||0)|0)==0){e=new Q5;N5(e,this.a.Q.Dc,false);d=Rh(this.a.Q.Dc)+e.e[0]+5;this.a.d>d?(h=this.a.d):(h=d)}if(this.a.k!=0&&Yh(this.a.Q.xc)==0){e=new Q5;N5(e,this.a.Q.Dc,false);c=Ph(this.a.Q.Dc)+e.e[3]+5;this.a.c>c?(g=this.a.c):(g=c)}if(this.a.C){fV(this.a,g,h)}else{i=K7(g,h);if(i){a=(mi(),i).getAttribute(SEb)||'';EW(this.a.Q.wb,a);b=this.a.Q.wb.a;f=this.a.Q.wb.b;b!=0&&f!=0&&c2(this.a.Q.a,b,f)}}};var Jy=tnb(EGb,'SelectionWidget/1',477);lH(478,1,jGb,FV);_.Kd=function GV(){jV(this.a,true);hQ(this.a.$,false)};var Ky=tnb(EGb,'SelectionWidget/2',478);lH(479,1,jGb,HV);_.Kd=function IV(){$M(this.a.$,new JV(this));qQ(this.a.$)};var My=tnb(EGb,'SelectionWidget/3',479);lH(480,1,{},JV);_.Ye=function KV(a,b){var c,d,e,f,g;f=0;d=0;c=0;g=0;e=0;if(!!this.a.a.X&&Se(this.a.a.X)){f=Rh(this.a.a.X.G);d=Ph(this.a.a.X.G);g=this.a.a.X.G.clientWidth|0;c=Oh(this.a.a.X.a)+5;Se(this.a.a.W)&&(g+=this.a.a.W.G.clientWidth|0);Se(this.a.a.b)&&(c=Oh(this.a.a.b.a)+5)}else if(!!this.a.a.W&&Se(this.a.a.W)){f=Rh(this.a.a.W.G);d=Ph(this.a.a.W.G);g=this.a.a.W.G.clientWidth|0;c=Oh(this.a.a.W.a)+5;Se(this.a.a.a)&&(c=Oh(this.a.a.a.a)+5)}else if(!!this.a.a.a&&Se(this.a.a.a)){f=Rh(this.a.a.a.G);d=Ph(this.a.a.a.G);g=this.a.a.a.G.clientWidth|0;c=Oh(this.a.a.a.a)+5;Se(this.a.a.b)&&(g+=this.a.a.b.G.clientWidth|0)}else{f=Rh(this.a.a.b.G);d=Ph(this.a.a.b.G);g=this.a.a.b.G.clientWidth|0;c=Oh(this.a.a.b.a)+5}g>(Pe(this.a.a.Q).clientWidth|0)&&(g=Pe(this.a.a.Q).clientWidth|0);this.a.a.Q.Qc>0?(e=Rh(this.a.a.Q.Nc)):(e=Rh(this.a.a.Q.xc));f-=b+5;d+=(g/2|0)-(a/2|0);e>f&&(f=c+5);nQ(this.a.a.$,d,f)};var Ly=tnb(EGb,'SelectionWidget/3/1',480);lH(152,13,OEb,SV);_.b=0;_.c=0;_.e=0;_.f=0;_.g=0;_.i=0;_.n=0;_.o=0;var Ny=tnb(EGb,'SelectionWidget/PaintOutlineWidget',152);lH(151,13,OEb,gW);_.b=false;_.e=0;_.f=0;_.j=0;_.n=false;_.q=0;_.r=0;_.s=0;_.t=0;_.v=false;_.C=0;_.D=0;_.H=false;_.K=0;var Py=tnb(EGb,'SelectionWidget/SelectionOutlineWidget',151);lH(476,1,$Gb,hW);_.wd=function iW(a){var b,c,d;b=(wI(),(mi(),li).Ud(a));d=QJ(a.type);c=d==YFb||d==HDb||d==ZFb||d==$Fb;if(this.a.F.C){UV(this.a,a);a.stopPropagation()}else if(d==4){if(Uf(b,this.a.g)){UV(this.a,a);a.stopPropagation()}else if(Uf(b,this.a.G));else if(Uf(b,this.a.k));else if(Uf(b,this.a.u));else Uf(b,this.a.a)}else if(c){if(d==HDb||d==$Fb){RI(this.a.B);vV(this.a.F)}else if(Uf(b,this.a.g)||Uf(b,this.a.i)){if(d==YFb){SI(this.a.B);aV(this.a.F,a)}else{iV(this.a.F,a)}}else{this.a.F.p&&UV(this.a,a)}li.Vd(a);a.stopPropagation()}};var Oy=tnb(EGb,'SelectionWidget/SelectionOutlineWidget/1',476);lH(713,1,$Gb,oW);_.wd=function pW(a){var b;if(Sh((mi(),li).Ud(a)).indexOf(kHb)!=-1){YZ(this.c,true);return}b=(wI(),QJ(a.type));if(b==2048){YZ(this.c,true);this.b=true}else if(b==4096){YZ(this.c,false);this.b=false}else if(b==ZFb){a.stopPropagation()}else if(this.c.vc){PDb==b&&bZ(this.c);lW(this,a)}else{switch(b){case PDb:bZ(this.c);break;case 256:kW(this,a);break;case 128:jW(this,a);break;case 4:li.Qd(a)!=2&&ZY(this.c,a);break;case 8:li.Qd(a)==2&&ZY(this.c,a);break;case 2:mW(this,a);break;case 32:case 16:_Y(this.c,a);break;case 64:$Y(this.c);}}};_.a=false;_.b=false;var Ry=tnb(EGb,'SheetEventListener',713);lH(710,1,{752:1,200:1,810:1,809:1,831:1,201:1,264:1,27:1},sW);_.ne=function tW(a){var b;YZ(this.b,false);if(this.a.f){pS(this.a,false)}else if(this.b._){G1(this.b.a,(b=fO(this.b.sb),b==null?'':b));PR(this.a)}lk(a.a)};_.oe=function uW(a){this.b._&&(this.a.v=true);lk(a.a)};_.qe=function vW(a){if(!this.a.f){YZ(this.b,true);I1(this.b.a)}lk(a.a)};_.re=function wW(a){var b,c,d,e,f,g;d=fk(a.a);c=this.b.a;if(this.b._){switch(d){case 8:case 46:xY(this.b);qS(this.a);pS(this.a,true);MR(this.a);JR(this.a);break;case 27:f1(c,c.b,true);aS(c.v);TX(c.W);PR(this.a);break;case 9:J1(c,(g=fO(this.b.sb),g==null?'':g),hk(a.a));PR(this.a);!!a.a&&kk(a.a);break;case 38:if(TR(this.a)){H1(c,(f=fO(this.b.sb),f==null?'':f),true);!!a.a&&kk(a.a)}else if(VR(this.a)){WR(this.a,hk(a.a),true,false,false);!!a.a&&kk(a.a)}break;case 40:if(TR(this.a)){H1(c,(f=fO(this.b.sb),f==null?'':f),false);!!a.a&&kk(a.a)}else if(VR(this.a)){WR(this.a,hk(a.a),false,false,true);!!a.a&&kk(a.a)}break;case 37:if(TR(this.a)){J1(c,(f=fO(this.b.sb),f==null?'':f),true);!!a.a&&kk(a.a)}else if(VR(this.a)){WR(this.a,hk(a.a),false,false,false);!!a.a&&kk(a.a)}else if(this.a.v){pS(this.a,true);dO(this.b.sb)==0&&!!a.a&&kk(a.a)}break;case 39:if(TR(this.a)){J1(c,(f=fO(this.b.sb),f==null?'':f),false);!!a.a&&kk(a.a)}else if(VR(this.a)){WR(this.a,hk(a.a),false,true,false);!!a.a&&kk(a.a)}else if(this.a.v){pS(this.a,true);b=dO(this.b.sb);e=(f=fO(this.b.sb),f==null?'':f).length;b==e&&!!a.a&&kk(a.a)}}}else{f2(c,a.a,AW(ck(a.a)))}lk(a.a)};_.te=function xW(a){var b;if(ak(a.a)==2){b=this.b.wb;EW(b,pY(this.b));L1(this.b.a,a.a,b.a,b.b)}lk(a.a)};_.ue=function yW(a){pS(this.a,false)};var Sy=tnb(EGb,'SheetInputEventListener',710);lH(529,1,{},HW);_.a=0;_.b=0;var Ty=tnb(EGb,'SheetJsniUtil',529);lH(254,143,{20:1,14:1,10:1,16:1,34:1,21:1,12:1,13:1,254:1},NW);_.a=0;_.b=0;var Uy=tnb(EGb,'SheetOverlay',254);lH(320,13,OEb,cX);_.b='';_.d=false;_.j=false;_.r=-1;_.s=0;_.t=0;var Yy=tnb(EGb,'SheetTabSheet',320);lH(321,1,$Gb,dX);_.wd=function eX(a){var b,c,d,e,f;d=(mi(),li).Ud(a);f=(wI(),QJ(a.type));if(Uf(d,this.a.g)){return}a.stopPropagation();if(f==1){this.a.d&&!this.a.j&&PW(this.a);UX(this.a.e.W,false);if(Hh(this.a.i,d)&&!$h(d,sFb)){if(Uf(d,this.a.n)){this.a.t=0;this.a.s=0;this.a.c.style[HGb]=this.a.t+(Im(),qGb);_W(this.a)}else if(Uf(d,this.a.p)){if(this.a.s>0){--this.a.s;this.a.s==0?(this.a.t=0):(this.a.t+=UW(this.a,this.a.s));this.a.c.style[HGb]=this.a.t+(Im(),qGb)}_W(this.a)}else if(Uf(d,this.a.q)){if(this.a.s<this.a.u.length-1){this.a.t-=UW(this.a,this.a.s);this.a.c.style[HGb]=this.a.t+(Im(),qGb);++this.a.s;_W(this.a)}}else if(Uf(d,this.a.o)){e=SW(this.a);VW(this.a,e)}else Uf(d,this.a.a)&&(this.a.j||Y1(this.a.e))}else if(Hh(this.a.c,d)){for(c=0;c<this.a.u.length;c++){Uf(this.a.u[c],d)&&c!=this.a.r&&i2(this.a.e,c)}}}else if(f==2){if(!this.a.j){for(c=0;c<this.a.u.length;c++){if(Uf(this.a.u[c],d)){if(c!=this.a.r){i2(this.a.e,c)}else{this.a.d=true;b=this.a.u[c];this.a.b=li._d(b);_j(this.a.g,this.a.b);li.de(b,'');Dh(b,this.a.g);this.a.g.focus();aX(this.a)}}}}}};var Vy=tnb(EGb,'SheetTabSheet/1',321);lH(322,1,$Gb,fX);_.wd=function gX(a){var b,c;c=(wI(),QJ((mi(),a).type));if(this.a.d){if(c==4096){PW(this.a)}else{switch(a.keyCode|0){case 13:case 9:PW(this.a);break;case 27:this.a.d=false;Kh(this.a.g);b=this.a.u[this.a.r];b.style[IEb]='';ZW(b,this.a.b);TX(this.a.e.W);break;default:RW(this.a);}}}a.stopPropagation()};var Wy=tnb(EGb,'SheetTabSheet/2',322);lH(323,1,jGb,hX);_.Kd=function iX(){aX(this.a)};var Xy=tnb(EGb,'SheetTabSheet/3',323);lH(175,768,{20:1,14:1,10:1,16:1,34:1,21:1,12:1,13:1,175:1},d_);_.Oe=function e_(){return TY(this)};_.vd=function f_(){rf(this);zR(this.M);!this.M.Uc&&BK(this,this.M)};_.zd=function g_(){hQ(this.qb,false);hQ(this.Vb,false);xR(this.M)};_.Pe=function h_(a){return qZ(this,a)};_.f=0;_.g=0;_.k=-1;_.n=-1;_.o=false;_.v=true;_.A=0;_.B=0;_.C=true;_.G=false;_.H=0;_.L=false;_.O=false;_.P=false;_.R=false;_.V=-1;_.X=0;_.Y=0;_.Z=false;_._=false;_.ab=false;_.bb=0;_.cb=0;_.db=0;_.eb=0;_.nb=null;_.ob=0;_.ub=null;_.vb=false;_.xb=0;_.yb=0;_.zb=0;_.Ab=0;_.Bb=0;_.Cb=0;_.Db=false;_.Kb=0;_.Nb=0;_.Ob=0;_.Qb=0;_.Rb=0;_.Xb=false;_.Yb=-1;_.Zb=-1;_.$b=false;_._b=false;_.cc=false;_.dc=0;_.hc=false;_.lc=false;_.mc=0;_.nc=0;_.pc=0;_.qc=0;_.vc=false;_.Ec=false;_.Fc=false;_.Gc=false;_.Hc=0;_.Ic=0;_.Jc=0;_.Mc=0;_.Pc=false;_.Qc=0;var qz=tnb(EGb,'SheetWidget',175);lH(359,1,jGb,i_);_.Kd=function j_(){this.a.k!=-1&&this.a.n!=-1&&j$(this.a,this.a.k,this.a.n)};var gz=tnb(EGb,'SheetWidget/1',359);lH(368,1,jGb,k_);_.Kd=function l_(){var a,b;if(this.a.hc){return}b=this.d;while(x1(this.a.a,b)){--b}if(b==0){return}SI(Pe(this.a));this.a._b=true;this.a.Zb=b;this.a.Yb=-1;this.a.Zb<=this.a.Qc?(a=iub(this.a.jb,this.a.Zb-1)):(a=iub(this.a.gc,b-this.a.db));this.a.Qb=(mi(),li).Xd(a);this.a.Rb=li.Xd(a)+((a.offsetHeight||0)|0);u1(this.a.a,b)>0?BL(this.a.Wb,'Height: '+u1(this.a.a,b)+'pt'):BL(this.a.Wb,'Hide row');m$(this.a,this.b,this.c);qQ(this.a.Vb);Mh(this.a.Dc,fIb);Mh(this.a.Tb,'row'+b);++b;while(this.d<this.a.a.P&&x1(this.a.a,b)){++b}Mh(this.a.Sb,YHb+b);yY(this.a,this.b,this.c)};_.b=0;_.c=0;_.d=0;var Zy=tnb(EGb,'SheetWidget/10',368);lH(369,1,jGb,m_);_.Kd=function n_(){var a,b;if(this.a.L){return}b=this.d;while(w1(this.a.a,b)){--b}if(b<1){return}SI(Pe(this.a));this.a.$b=true;this.a.Yb=b;this.a.Zb=-1;this.a.Yb<=this.a.ob?(a=iub(this.a.ib,this.a.Yb-1)):(a=iub(this.a.K,b-this.a.bb));this.a.Qb=(mi(),li).Wd(a);this.a.Rb=li.Wd(a)+((a.offsetWidth||0)|0);q1(this.a.a,b)>0?BL(this.a.Wb,'Width: '+q1(this.a.a,b)+qGb):BL(this.a.Wb,PHb);m$(this.a,this.b,this.c);qQ(this.a.Vb);Mh(this.a.Dc,gIb);Mh(this.a.Tb,CGb+b);++b;while(this.d<=this.a.a.i&&w1(this.a.a,b)){++b}Mh(this.a.Sb,WHb+b);uY(this.a,this.b,this.c)};_.b=0;_.c=0;_.d=0;var $y=tnb(EGb,'SheetWidget/11',369);lH(370,1,{},o_);_.Ye=function p_(a,b){$Z(this.a,a,b,this.b)};var _y=tnb(EGb,'SheetWidget/12',370);lH(145,1,jGb,q_);_.Kd=function r_(){var a,b;b=(a=fO(this.a.sb),a==null?'':a);iZ(this.a,b);this.b&&K1(this.a.a,b)};_.b=false;var az=tnb(EGb,'SheetWidget/13',145);lH(371,1,jGb,s_);_.Kd=function t_(){Kf(this.a.sb,true);zob(this.b,'%')?gO(this.a.sb,this.b.length-1,0):gO(this.a.sb,this.b.length,0)};var bz=tnb(EGb,'SheetWidget/14',371);lH(146,1,jGb,u_);_.Kd=function v_(){this.a.xc.focus()};var cz=tnb(EGb,'SheetWidget/15',146);lH(372,1,$Gb,w_);_.wd=function x_(a){z1(this.a.a,true,this.b)};_.b=0;var dz=tnb(EGb,'SheetWidget/16',372);lH(373,1,$Gb,y_);_.wd=function z_(a){z1(this.a.a,false,this.b)};_.b=0;var ez=tnb(EGb,'SheetWidget/17',373);lH(374,1,jGb,A_);_.Kd=function B_(){var a,b,c,d,e,f,g,h,i,j;g=this.a.Lc.clientWidth|0;e=this.a.ec.clientWidth|0;j=g+e;if(e==0&&!NY(this.a.F)){j-=1}else if(e!=0&&!NY(this.a.F));else e!=0&&NY(this.a.F)&&(j+=2);this.a.F.style[IEb]=j+(Im(),qGb);f=this.a.Lc.clientHeight|0;b=this.a.I.clientHeight|0;c=f+b;if(b==0&&!NY(this.a.bc));else b!=0&&!NY(this.a.bc)?(c+=1):b!=0&&NY(this.a.bc)&&(c+=2);this.a.bc.style[HEb]=c+qGb;a=this.a.c.clientHeight|0;i=this.a.Nc.clientWidth|0;h=i+j;d=a+c;NY(this.a.F)&&(h+=1);NY(this.a.bc)&&(d+=1);this.a.I.style[IEb]=h+qGb;this.a.D.style[IEb]=h+qGb;this.a.ec.style[HEb]=d+qGb;this.a.ac.style[HEb]=d+qGb};var fz=tnb(EGb,'SheetWidget/18',374);lH(360,1,jGb,C_);_.Kd=function D_(){var b,c,d,e,f;if(this.a._){return}e=ek(this.a.Gb);f=Sh(pi((mi(),e))).indexOf(vHb)!=-1;b=e.getAttribute(SEb)||'';if(Aob(b.substr(0,20),RGb)){return}b.indexOf(uHb)!=-1&&(b=Oob(b,0,b.indexOf(' cell')));if(Aob(b,xHb)){e=dk(this.a.Gb);b=e.getAttribute(SEb)||''}else if(NI(this.a.Gb)==16&&f){EW(this.a.wb,b);try{c=this.a.wb.a;d=this.a.wb.b;if(c==0||d==0){return}e=jY(this.a,w3(this.a.Gb),x3(this.a.Gb),XX(this.a,c,d)).d;b=e.getAttribute(SEb)||'';b.indexOf(uHb)!=-1&&(b=Oob(b,0,b.indexOf(' cell')))}catch(a){a=GG(a);if(fs(a,66)){NBb(this.a.U,'SheetWidget:onSheetMouseOverOrOut: JSE while trying to find real event target, className:'+b)}else if(fs(a,36)){OBb(this.a.U,'SheetWidget:onSheetMouseOverOrOut: IOOBE while trying to find correct event target, className:'+b)}else throw HG(a)}}EW(this.a.wb,b);if(Aob(b,zGb)||Aob(b,AGb)||Aob(b,this.a.j)||tX(this.a,b)||uX(this.a,b)){C$(this.a,this.a.Gb,e)}else{if(!this.a.o&&this.a.q.R&&b.indexOf('comment')==-1){RI(this.a.xc);PQ(this.a.q);this.a.j=null;this.a.k=-1;this.a.n=-1}}if(f&&!!this.a.s&&jsb(this.a.s,b)){E$(this.a,NI(this.a.Gb),this.a.wb.a,this.a.wb.b,isb(this.a.s,b));return}else VM(this.a.qb)&&hQ(this.a.qb,false)};var hz=tnb(EGb,'SheetWidget/2',360);lH(361,29,{},E_);_.hd=function F_(){var a,b,c,d,e;gi(this.a.xc,((this.a.xc.scrollTop||0)|0)+(this.a.Y/2|0));fi(this.a.xc,Yh(this.a.xc)+(this.a.X/2|0));bZ(this.a);d=this.a.A;e=this.a.B;this.a.X<0?(d=Ph(this.a.xc)+5):this.a.X>0&&(d=Qh(this.a.xc)-25);this.a.Y<0?(e=Rh(this.a.xc)+5):this.a.Y>0&&(e=Oh(this.a.xc)-25);if(this.a.Y!=0&&((this.a.xc.scrollTop||0)|0)==0){c=new Q5;N5(c,this.a.Dc,false);b=Rh(this.a.Dc)+c.e[0]+5;this.a.B>b?(e=this.a.B):(e=b)}if(this.a.X!=0&&Yh(this.a.xc)==0){c=new Q5;N5(c,this.a.Dc,false);a=Ph(this.a.Dc)+c.e[3]+5;this.a.A>a?(d=this.a.A):(d=a)}zY(this.a,d,e)};var iz=tnb(EGb,'SheetWidget/3',361);lH(362,29,{},I_);_.hd=function J_(){G_(this,this.a.db,this.a.zb,this.a.bb,this.a.xb);G_(this,0,this.a.Qc,0,this.a.ob);G_(this,0,this.a.Qc,this.a.bb,this.a.xb);G_(this,this.a.db,this.a.zb,0,this.a.ob);H_(this,this.a.db,this.a.zb,this.a.bb,this.a.xb);H_(this,0,this.a.Qc,0,this.a.ob);H_(this,0,this.a.Qc,this.a.bb,this.a.xb);H_(this,this.a.db,this.a.zb,0,this.a.ob)};var jz=tnb(EGb,'SheetWidget/4',362);lH(363,1,jGb,K_);_.Kd=function L_(){this.a.Db&&aZ(this.a)};var kz=tnb(EGb,'SheetWidget/5',363);lH(364,1,jGb,M_);_.Kd=function N_(){xZ(this.a)};var lz=tnb(EGb,'SheetWidget/6',364);lH(365,1,jGb,O_);_.Kd=function P_(){this.a.Kb==0&&Fh(this.a.Lb)&&(this.a.Kb=(this.a.Lb.offsetWidth||0)|0);a_(this.a);F$(this.a);I$(this.a);FZ(this.a,this.b,this.c);DZ(this.a);b2(this.a.a,this.a.db,this.a.zb,this.a.bb,this.a.xb);zZ(this.a);EZ(this.a);H$(this.a);X$(this.a);yZ(this.a);this.a.Db=true};_.b=0;_.c=0;var mz=tnb(EGb,'SheetWidget/7',365);lH(366,1,rGb,R_);_.De=function S_(a){var b,c,d,e,f,g;c=NI(a.d);f=a.d;g=(mi(),li).Ud(f);b='';!!g&&g.nodeType==1&&(b=g.getAttribute(SEb)||'');Hh(Pe(this.a),li.Ud(f))&&(YFb==c||4==c||8==c||2==c||1==c)&&YZ(this.a,true);if((this.a.$b||this.a._b)&&c==64){if(this.a.Yb!=-1){uY(this.a,w3(f),x3(f))}else if(this.a.Zb!=-1){yY(this.a,w3(f),x3(f))}else{this.a.$b=false;this.a._b=false}a.a=true}else if(c==8&&Q_(this,g)){if(this.a.$b||this.a._b||Aob(b,hIb)||Aob(b,iIb)){this.a.L=true;this.a.hc=true;this.a.$b=false;this.a._b=false;zW(this.a.Ub);hQ(this.a.Vb,false);a.a=true;if(this.a.Yb!=-1){_h(this.a.Dc,gIb);r$(this.a,w3(a.d))}else if(this.a.Zb!=-1){_h(this.a.Dc,fIb);t$(this.a,x3(a.d))}}}else{if(Hh(Pe(this.a),g)){if(c==1){d=DW(b);if(d==1||d==2){e=FW(b);d==1?Z1(this.a.a,e,!!f.shiftKey,!!f.metaKey||!!f.ctrlKey):M1(this.a.a,e,!!f.shiftKey,!!f.metaKey||!!f.ctrlKey);a.a=true;this.a.xc.focus()}}else if(c==4&&Q_(this,g)){if(Aob(b,hIb)){b=Sh(pi(g));d=DW(b);if(d==1){d=FW(b);this.a.hc=false;p$(this.a,d-1,w3(f),x3(f))}else if(d==2){d=FW(b);this.a.L=false;n$(this.a,d-1,w3(f),x3(f))}a.a=true}else if(Aob(b,iIb)){b=Sh(pi(g));d=DW(b);if(d==1){d=FW(b);this.a.hc=false;p$(this.a,d,w3(f),x3(f))}else if(d==2){d=FW(b);this.a.L=false;n$(this.a,d,w3(f),x3(f))}a.a=true}}else if(c==2&&Q_(this,g)){if(Aob(b,hIb)){b=Sh(pi(g));d=DW(b);if(d==1){d=FW(b)-1;while(x1(this.a.a,d)&&d>0){--d}d>0&&$1(this.a.a,d)}else if(d==2){d=FW(b)-1;while(w1(this.a.a,d)&&d>0){--d}d>0&&N1(this.a.a,d)}a.a=true}else if(Aob(b,iIb)){b=Sh(pi(g));d=DW(b);if(d==1){d=FW(b);while(x1(this.a.a,d)&&d>0){--d}d>0&&$1(this.a.a,d)}else if(d==2){d=FW(b);while(w1(this.a.a,d)&&d>0){--d}d>0&&N1(this.a.a,d)}a.a=true}}}}};var nz=tnb(EGb,'SheetWidget/8',366);lH(367,1,jIb,T_);_.pe=function U_(a){var b,c,d,e;if(this.a.a.S){e=ek(a.a);b=(mi(),e).getAttribute(SEb)||'';c=DW(b);if(c==1||c==2){d=FW(b);c==1?_1(this.a.a,a.a,d):O1(this.a.a,a.a,d)}!!a.a&&kk(a.a);lk(a.a)}};var oz=tnb(EGb,'SheetWidget/9',367);lH(58,1,{58:1},V_);_.Wc=function W_(a){if(a==null||!fs(a,58)){return false}return this.b==a.b&&this.a==a.a};_.Yc=function X_(){var a;a=this.b+((this.a+1)/2|0);return 31*(this.a+a*a)};_.a=0;_.b=0;var pz=tnb(EGb,'SheetWidget/CellCoord',58);lH(135,1,kIb);_.Zc=function __(){return 'Action [owner='+this.g+', iconUrl='+this.f+', caption='+this.e+']'};_.e='';_.f=null;var bC=tnb(LGb,'Action',135);lH(263,135,kIb,a0);_.Kd=function b0(){this.c==0?Kjb(this.b,this.a):this.c==1?Ljb(this.b,this.a):Jjb(this.b,this.a);hQ(d4(this.g.a.a.D),false);UX(this.d.W,true)};_.a='';_.c=0;var sz=tnb(EGb,'SpreadsheetAction',263);lH(213,1,{213:1,3:1},c0);_.type=0;var rz=tnb(EGb,'SpreadsheetActionDetails',213);var tz=vnb(EGb,'SpreadsheetClientRpc');lH(299,171,gHb,o0);_.Cf=function s0(){return !this.L&&(this.L=new R3),this.L};_.yf=function t0(){return !this.L&&(this.L=new R3),this.L};_.Ef=function u0(){return !this.C&&(this.C=(HBb(d0,eHb),new v3)),this.C};_.uf=function p0(){return new R3};_.Bf=function q0(){return HBb(d0,eHb),new v3};_.xf=function r0(a){return this.i};_.zf=function v0(a){j0(this,a)};var d0;var Cz=tnb(EGb,'SpreadsheetConnector',299);lH(300,1,{819:1,3:1},G0);var vz=tnb(EGb,'SpreadsheetConnector/1',300);lH(301,1,{},I0);var uz=tnb(EGb,'SpreadsheetConnector/1/1',301);var FC=vnb(qIb,'ElementResizeListener');lH(302,1,{806:1},J0);var wz=tnb(EGb,'SpreadsheetConnector/2',302);lH(303,1,{},K0);var xz=tnb(EGb,'SpreadsheetConnector/3',303);lH(304,1,{},O0);var yz=tnb(EGb,'SpreadsheetConnector/4',304);lH(305,1,jIb,P0);_.pe=function Q0(a){!!a.a&&kk(a.a);lk(a.a)};var zz=tnb(EGb,'SpreadsheetConnector/5',305);lH(306,1,jGb,R0);_.Kd=function S0(){i0(this.a,this.b)};var Az=tnb(EGb,'SpreadsheetConnector/6',306);lH(307,1,{},V0);var Bz=tnb(EGb,'SpreadsheetConnector/7',307);lH(437,45,KGb);_.d=0;_.f=0;var pC=tnb(LGb,'VContextMenu',437);lH(438,437,KGb,_0);_.kf=function a1(){var a;return a=(wI(),wI(),$doc.getElementById(MGb)),!a?(PN(),$doc.body):a};var Dz=tnb(EGb,'SpreadsheetOverlay/SpreadsheetContextMenu',438);var Fz=vnb(EGb,'SpreadsheetServerRpc');var _z=vnb(hEb,'Focusable');lH(30,772,{20:1,14:1,10:1,16:1,197:1,21:1,12:1,13:1,30:1},v3);_.tf=function y3(a,b,c){zkb(this.X,a,b,c)};_.od=function z3(a){G2(this,a)};_.qd=function A3(a){i3(this,a)};_.a=0;_.c=false;_.d=false;_.e=false;_.i=0;_.j=0;_.p=false;_.r=0;_.s=0;_.u=false;_.C=false;_.D=false;_.F=true;_.G=true;_.L=true;_.M=0;_.P=0;_.Q=false;_.U=false;_.Y=0;_.Z=0;_.$=false;var Nz=tnb(EGb,'SpreadsheetWidget',30);lH(314,1,zDb,D3);var Gz=tnb(EGb,'SpreadsheetWidget/1',314);lH(315,29,{},E3);_.hd=function F3(){aab(this.a.n.a.D.j)};var Hz=tnb(EGb,'SpreadsheetWidget/2',315);lH(316,1,{820:1,27:1},H3);_.a=0;_.c=0;var Iz=tnb(EGb,'SpreadsheetWidget/3',316);lH(317,1,jGb,I3);_.Kd=function J3(){f$(this.a.W,this.b,this.c)};_.b=0;_.c=0;var Jz=tnb(EGb,'SpreadsheetWidget/4',317);lH(318,1,jGb,K3);_.Kd=function L3(){var a,b,c;i1(this.a);if(this.b){b=0;while(b<this.b.a.length){c=iub(this.b,b);lX(this.a.W,c);a=XX(this.a.W,c.col1,c.row1);!!a&&NP(a,a.o,a.b,false);++b}wX(this.a.W)}!this.b?(this.a.K=null):(this.a.K=new qub(this.b))};var Kz=tnb(EGb,'SpreadsheetWidget/5',318);lH(319,29,{},M3);_.hd=function N3(){this.a.L=true};var Lz=tnb(EGb,'SpreadsheetWidget/6',319);lH(215,1,jGb,O3);_.Kd=function P3(){if(!this.a.c){Rjb(this.a.X,this.a.W.qc,this.a.W.pc,this.c);f1(this.a,this.c,this.b)}};_.b=false;var Mz=tnb(EGb,'SpreadsheetWidget/7',215);lH(256,1,{256:1,3:1},Q3);_.collapsed=false;_.endIndex=0;_.level=0;_.startIndex=0;_.uniqueIndex=0;var Oz=tnb(tIb,'GroupingData',256);lH(137,75,{75:1,82:1,137:1,3:1});var ID=tnb(uIb,'TabIndexState',137);lH(52,137,{52:1,75:1,82:1,137:1,3:1},R3);_.d=null;_.f=false;_.g=0;_.j=0;_.k=200;_.n=null;_.p=null;_.q=0;_.r=0;_.s=true;_.t=true;_.u=false;_.v=null;_.w=null;_.B=0;_.G='Invalid formula';_.H=true;_.I=true;_.J=null;_.K=null;_.O=false;_.P=200;_.R=false;_.S=0;_.U=null;_.V=0;_.W=1;_.X=null;_.Y=false;_.Z=null;_._=0;_.bb=false;_.cb=false;var Pz=tnb(tIb,'SpreadsheetState',52);var S3;lH(265,1,{},c4);var $3,_3=0,a4;var Qz=tnb(hEb,'ApplicationConfiguration',265);lH(225,1,{14:1,225:1},j4);_.td=function k4(a){hq(this.d,a)};_.c=null;var Wz=tnb(hEb,'ApplicationConnection',225);lH(780,1,zDb);var AD=tnb(bHb,'VaadinUriResolver',780);lH(344,780,zDb,m4);var Rz=tnb(hEb,'ApplicationConnection/1',344);lH(779,770,{});var Sz=tnb(hEb,'ApplicationConnection/ApplicationConnectionEvent',779);var n4;lH(343,141,{},q4);_.a=0;var Tz=tnb(hEb,'ApplicationConnection/MultiStepDuration',343);lH(341,779,{},t4);_.ie=function u4(a){null.Ng()};_.ke=function w4(){return r4};_.je=function v4(){return r4};var r4;var Uz=tnb(hEb,'ApplicationConnection/RequestStartingEvent',341);lH(342,779,{},z4);_.ie=function A4(a){null.Ng()};_.ke=function C4(){return x4};_.je=function B4(){return x4};var x4;var Vz=tnb(hEb,'ApplicationConnection/ResponseHandlingStartedEvent',342);lH(31,1,{},T4);_.b=false;var D4=null,E4;var Xz=tnb(hEb,'BrowserInfo',31);lH(125,1,{},Z4);var Yz=tnb(hEb,'ComputedStyle',125);lH(771,770,{});var yA=tnb(CIb,'AbstractServerConnectorEvent',771);var a5;lH(465,1,{},d5);var Zz=tnb(hEb,'ConnectorMap',465);lH(494,1,{},e5);var $z=tnb(hEb,'DependencyLoader',494);lH(331,1,{},G5);_.c=false;_.o=true;var bA=tnb(hEb,'LayoutManager',331);lH(332,29,{},H5);_.hd=function I5(){u5(this.a)};var aA=tnb(hEb,'LayoutManager/1',332);var J5;var cA=tnb(hEb,'LocaleService',null);lH(79,1,{},Q5);_.c=-1;_.f=-1;var eA=tnb(hEb,'MeasuredSize',79);lH(255,1,{},T5);_.a=false;_.b=false;var dA=tnb(hEb,'MeasuredSize/MeasureResult',255);lH(395,1,{},a6);var X5;var hA=tnb(hEb,'ResourceLoader',395);lH(397,1,{751:1},d6);_.Of=function e6(a){Z5(this.a,a)};_.Pf=function f6(a){$5(this.a,a)};var fA=tnb(hEb,'ResourceLoader/1',397);lH(396,1,{},g6);var gA=tnb(hEb,'ResourceLoader/ResourceLoadEvent',396);lH(189,1,{},j6,l6);var iA=tnb(hEb,'TooltipInfo',189);var kA=tnb(hEb,'Util',null);lH(523,76,fGb,E6);var lA=tnb(hEb,'VErrorMessage',523);lH(409,1,{},K6);_.b=300;_.c=1500;_.e=5000;var pA=tnb(hEb,'VLoadingIndicator',409);lH(410,29,{},L6);_.hd=function M6(){J6(this.a)};var mA=tnb(hEb,'VLoadingIndicator/1',410);lH(411,29,{},N6);_.hd=function O6(){F6(this.a).className=TIb;Mh(F6(this.a),'second');Mh(F6(this.a),'v-loading-indicator-delay')};var nA=tnb(hEb,'VLoadingIndicator/2',411);lH(412,29,{},P6);_.hd=function Q6(){F6(this.a).className=TIb;Mh(F6(this.a),'third');Mh(F6(this.a),'v-loading-indicator-wait')};var oA=tnb(hEb,'VLoadingIndicator/3',412);lH(481,382,{},S6);_.a=0;var rA=tnb(hEb,'VSchedulerImpl',481);lH(482,1,jGb,T6);_.Kd=function U6(){this.a.a--};var qA=tnb(hEb,'VSchedulerImpl/lambda$0$Type',482);lH(398,45,KGb,h7);_.Ue=function i7(){X6(this)};_.wd=function j7(a){var b;b=(wI(),QJ((mi(),a).type));if(b==16){tb(this.b);this.c=false}else b==32&&y7(this.s,li.Ud(a))};_.a=0;_.c=false;_.i=false;_.k=0;_.n=0;_.o=false;_.p=0;_.q=0;_.t=0;_.u=0;var xA=tnb(hEb,'VTooltip',398);lH(400,29,{},k7);_.hd=function l7(){this.a.o=false;f7(this.a)};var sA=tnb(hEb,'VTooltip/1',400);lH(401,29,{},m7);_.hd=function n7(){V6(this.a)};var tA=tnb(hEb,'VTooltip/2',401);lH(402,29,{},o7);_.hd=function p7(){this.a.i=false};var uA=tnb(hEb,'VTooltip/3',402);lH(403,1,{},v7);_.Ye=function w7(a,b){u7(this,a,b)};var vA=tnb(hEb,'VTooltip/4',403);lH(399,1,{752:1,810:1,809:1,201:1,825:1,826:1,27:1},A7);_.ne=function B7(a){this.a=false;Y6(this.b)};_.qe=function C7(a){z7(this,a,true)};_.re=function D7(a){Y6(this.b)};_.te=function E7(a){Y6(this.b)};_.a=false;var wA=tnb(hEb,'VTooltip/TooltipEventHandler',399);var G7=-1;lH(688,1,{},k8);_.Qf=function n8(a){this.d=(G8(),E8);null.Ng().Ng()};_.Rf=function o8(a){this.d=(G8(),D8);null.Ng().Ng()};_.Sf=function p8(a){this.d=(G8(),E8);null.Ng().Ng()};_.Tf=function q8(a){var b,c;c=a['responseBody'];b=o9(p9(c));if(!b){null.Ng().Ng();return}else{HBb(QBb((nnb(EA),EA.k)),'Received push ('+this.e+') message: '+c);null.Ng().Ng()}};_.Uf=function r8(a){HBb(QBb((nnb(EA),EA.k)),'Push connection established using '+a[YIb]);h8(this,a)};_.Vf=function s8(a,b){this.d==(G8(),C8)&&(this.d=D8);null.Ng().Ng()};_.Wf=function t8(a){HBb(QBb((nnb(EA),EA.k)),'Push connection re-established using '+a[YIb]);h8(this,a)};_.Xf=function u8(){OBb(QBb((nnb(EA),EA.k)),'Push connection using primary method ('+this.a[YIb]+') failed. Trying with '+this.a[ZIb])};var EA=tnb(CIb,'AtmospherePushConnection',688);lH(692,1,{751:1},w8);_.Of=function x8(a){null.Ng().Ng()};_.Pf=function y8(a){v8(this)};var zA=tnb(CIb,'AtmospherePushConnection/1',692);lH(689,1,{},B8);_.a=0;var AA=tnb(CIb,'AtmospherePushConnection/FragmentedMessage',689);lH(105,4,{105:1,3:1,6:1,4:1},H8);var C8,D8,E8,F8;var BA=unb(CIb,'AtmospherePushConnection/State',105,I8);lH(691,1,$Ib,J8);_.Kd=function K8(){g8(this.a)};var CA=tnb(CIb,'AtmospherePushConnection/lambda$2$Type',691);lH(690,1,jGb,L8);_.Kd=function M8(){_7(this.a)};var DA=tnb(CIb,'AtmospherePushConnection/lambda$3$Type',690);lH(417,1,{},O8);var GA=tnb(CIb,'DefaultConnectionStateHandler',417);lH(418,29,{},P8);_.hd=function Q8(){N8(this.a)};var FA=tnb(CIb,'DefaultConnectionStateHandler/1',418);lH(680,45,KGb,U8);_.Ue=function V8(){hQ(this,false)};_.Xe=function W8(a,b){};var HA=tnb(CIb,'DefaultReconnectDialog',680);lH(491,1,{},Z8);var KA=tnb(CIb,'Heartbeat',491);lH(492,29,{},$8);_.hd=function _8(){Y8(this.a)};var IA=tnb(CIb,'Heartbeat/1',492);lH(493,1,{},a9);_.ze=function b9(a,b){null.Ng().Ng();X8(this.a)};_.Ae=function c9(a,b){var c,d;c=b.a.status;c==200?null.Ng().Ng():null.Ng().Ng();X8(this.a)};var JA=tnb(CIb,'Heartbeat/2',493);lH(376,1,{},k9);_.a=0;_.c=0;_.d=-1;_.i=false;_.j=0;_.k=0;var QA=tnb(CIb,'MessageHandler',376);lH(378,29,{},q9);_.hd=function r9(){if(psb(this.a.g.a)==0){OBb(QBb((nnb(QA),QA.k)),'Gave up waiting for message '+(this.a.d+1)+' from the server')}else{OBb(QBb((nnb(QA),QA.k)),'WARNING: reponse handling was never resumed, forcibly removing locks...');osb(this.a.g.a)}if(!f9(this.a)&&this.a.e.a.length!=0){this.a.e.a=or(oE,zDb,1,0,5,1);null.Ng().Ng()}};var LA=tnb(CIb,'MessageHandler/1',378);lH(379,1,$Ib,H9);_.Kd=function I9(){v9(this)};_.a=true;var NA=tnb(CIb,'MessageHandler/2',379);lH(380,29,{},J9);_.hd=function K9(){W7(this.a['url'])};var MA=tnb(CIb,'MessageHandler/2/1',380);lH(377,1,{},L9);var OA=tnb(CIb,'MessageHandler/ConnectorHierarchyUpdateResult',377);lH(230,1,{230:1},M9);var PA=tnb(CIb,'MessageHandler/PendingUIDLMessage',230);lH(419,1,{},T9);_.a=0;_.b=false;_.d=false;var SA=tnb(CIb,'MessageSender',419);lH(420,1,$Ib,U9);_.Kd=function V9(){O9(this.a)};var RA=tnb(CIb,'MessageSender/lambda$0$Type',420);var W9;lH(413,1,{},cab);_.b=false;var Z9;var WA=tnb(CIb,'ServerRpcQueue',413);lH(415,1,{755:1},dab);_.hd=function eab(){_9(this.a)};var TA=tnb(CIb,'ServerRpcQueue/0methodref$doFlush$Type',415);lH(414,1,{755:1},fab);_.hd=function gab(){$9()};var UA=tnb(CIb,'ServerRpcQueue/lambda$0$Type',414);lH(416,1,jGb,hab);_.Kd=function iab(){this.a.a.hd()};var VA=tnb(CIb,'ServerRpcQueue/lambda$2$Type',416);lH(110,771,{110:1},oab);_.ie=function pab(a){a.zf(this)};_.ke=function rab(){return jab};_.je=function qab(){return jab};_.Yf=function sab(a){return mab(this,a)};_.b=false;var jab;var XA=tnb(CIb,'StateChangeEvent',110);lH(737,1,{},uab);var YA=tnb(CIb,'URLReference_Serializer',737);lH(524,1,{},wab);_.a=false;var aB=tnb(CIb,'XhrConnection',524);lH(527,29,{},yab);_.hd=function zab(){xab(this.b)&&this.a.a&&ub(this,250)};var ZA=tnb(CIb,'XhrConnection/2',527);lH(525,1,{},Bab);_.ze=function Cab(a,b){null.Ng().Ng()};_.Ae=function Dab(a,b){var c,d,e;e=b.a.status;if(e!=200){null.Ng().Ng();return}HBb(QBb((nnb(aB),aB.k)),'Server visit took '+A6(null.Ng()-this.a,3)+'ms');d=b.a.responseText;c=o9(p9(d));if(!c){null.Ng().Ng();return}null.Ng().Ng();HBb(QBb((nnb(aB),aB.k)),'Received xhr message: '+d);null.Ng().Ng()};_.a=0;var $A=tnb(CIb,'XhrConnection/XhrResponseHandler',525);lH(526,1,{27:1,811:1},Eab);_.Ee=function Fab(a){this.a.a=true};var _A=tnb(CIb,'XhrConnection/lambda$0$Type',526);lH(186,1,{186:1});_.d=0;var bB=tnb(jJb,'AsyncBundleLoader',186);lH(385,1,{});var Iab;var IB=tnb(jJb,'ConnectorBundleLoader',385);lH(388,1,{824:1},Qab);var cB=tnb(jJb,'ConnectorBundleLoader/1',388);lH(386,1,SGb,Rab);_.oe=function Sab(a){uf(this.a.e)};var dB=tnb(jJb,'ConnectorBundleLoader/lambda$0$Type',386);lH(387,1,lJb,Tab);_.ve=function Uab(a){uf(this.a.e)};var eB=tnb(jJb,'ConnectorBundleLoader/lambda$1$Type',387);lH(43,385,{},Vab);var HB=tnb(jJb,'ConnectorBundleLoaderXXImpl',43);lH(495,186,{186:1},Wab);var GB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1',495);lH(496,1,{},abb);var FB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1',496);lH(497,1,iKb,bbb);_.Zf=function cbb(a,b){return new Veb};var sB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/1',497);lH(506,1,iKb,dbb);_.Zf=function ebb(a,b){return new Mmb};var fB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/10',506);lH(507,1,iKb,fbb);_.Zf=function gbb(a,b){return new Nmb};var gB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/11',507);lH(787,1,iKb);_.Zf=function hbb(a,b){var c,d,e,f,g;c=[];for(e=b,f=0,g=e.length;f<g;++f){d=e[f];c.push(d)}return this.$f(a,c)};var JB=tnb(jJb,'JsniInvoker',787);lH(508,787,iKb,ibb);_.$f=function jbb(a,b){a.Lf();return null};var hB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/12',508);lH(509,787,iKb,kbb);_.$f=function lbb(a,b){a.Ff();return null};var iB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/13',509);lH(510,787,iKb,mbb);_.$f=function nbb(a,b){a.cg();return null};var jB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/14',510);lH(511,787,iKb,obb);_.$f=function pbb(a,b){a.dg();return null};var kB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/15',511);lH(512,1,iKb,qbb);_.Zf=function rbb(a,b){return new sbb};var mB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/16',512);lH(513,1,{},sbb);var lB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/16/1',513);lH(514,1,iKb,tbb);_.Zf=function ubb(a,b){return new uab};var nB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/17',514);lH(515,1,iKb,vbb);_.Zf=function wbb(a,b){return new xbb};var pB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/18',515);lH(516,1,{},xbb);var oB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/18/1',516);lH(517,1,iKb,ybb);_.Zf=function zbb(a,b){return new Abb};var rB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/19',517);lH(518,1,{},Abb);var qB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/19/1',518);lH(498,1,iKb,Bbb);_.Zf=function Cbb(a,b){return new Zfb};var xB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/2',498);lH(519,1,iKb,Dbb);_.Zf=function Ebb(a,b){return new Fbb};var uB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/20',519);lH(520,1,{},Fbb);var tB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/20/1',520);lH(521,1,iKb,Gbb);_.Zf=function Hbb(a,b){return new Ibb};var wB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/21',521);lH(522,1,{},Ibb);var vB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/21/1',522);lH(499,1,iKb,Jbb);_.Zf=function Kbb(a,b){return new wmb};var yB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/3',499);lH(500,1,iKb,Lbb);_.Zf=function Mbb(a,b){return new Emb};var zB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/4',500);lH(501,1,iKb,Nbb);_.Zf=function Obb(a,b){return new Fmb};var AB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/5',501);lH(502,1,iKb,Pbb);_.Zf=function Qbb(a,b){return new Gmb};var BB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/6',502);lH(503,1,iKb,Rbb);_.Zf=function Sbb(a,b){return new Hmb};var CB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/7',503);lH(504,1,iKb,Tbb);_.Zf=function Ubb(a,b){return new Jmb};var DB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/8',504);lH(505,1,iKb,Vbb);_.Zf=function Wbb(a,b){return new Lmb};var EB=tnb(jJb,'ConnectorBundleLoaderXXImpl/1/1/9',505);lH(62,1,{62:1},Zbb);_.Wc=function $bb(a){var b;if(a===this){return true}else if(fs(a,62)){b=a;return Aob(b.b.b+'.'+b.a,this.b.b+'.'+this.a)}else{return false}};_.Yc=function _bb(){return tDb(this.b.b+'.'+this.a)};_.Zc=function acb(){return this.b.b+'.'+this.a};var KB=tnb(jJb,'Method',62);lH(72,17,{72:1,3:1,17:1,11:1},bcb);var LB=tnb(jJb,'NoDataException',72);lH(97,1,{97:1},dcb,ecb);var MB=tnb(jJb,'OnStateChangeMethod',97);lH(160,1,{160:1},hcb);_.Wc=function icb(a){var b;if(this===a){return true}else if(fs(a,160)){b=a;return Aob(this.a.b+'.'+this.b,b.a.b+'.'+b.b)}else{return false}};_.Yc=function jcb(){return tDb(this.a.b+'.'+this.b)};_.Zc=function kcb(){return this.a.b+'.'+this.b};var NB=tnb(jJb,'Property',160);lH(5,1,{5:1},mcb,ncb);_.Wc=function pcb(a){var b;if(a===this){return true}else if(fs(a,5)){b=a;return Aob(b.b,this.b)}else{return false}};_.Yc=function qcb(){return tDb(this.b)};_.Zc=function rcb(){return this.b};var QB=tnb(jJb,'Type',5);lH(487,1,{},Acb);_._f=function Lcb(a,b,c){this.e[nnb(a),a.k][b]=c};var PB=tnb(jJb,'TypeDataStore',487);lH(98,4,{98:1,3:1,6:1,4:1},Scb);var Ncb,Ocb,Pcb,Qcb;var OB=unb(jJb,'TypeDataStore/MethodAttribute',98,Tcb);lH(390,1,jKb);_.pe=function Vcb(a){hT(this.c,this.b)&&!!a.a&&kk(a.a)};_.te=function Wcb(a){this.d=L7(a.a);this.g=false;this.e=OI(this.f)};_.ue=function Xcb(a){hT(this.c,this.b)&&this.g&&!!this.d&&L7(a.a)==this.d&&jdb(this,a.a);this.g=false;this.d=null};_.g=false;var SB=tnb(LGb,'AbstractClickEventHandler',390);lH(394,1,rGb,Ycb);_.De=function Zcb(a){Ucb(this.a,a)};var RB=tnb(LGb,'AbstractClickEventHandler/lambda$0$Type',394);lH(309,29,{},$cb);_.hd=function _cb(){this.a.xf(wD).Ng();I7();this.a.r=true};var TB=tnb(LGb,'AbstractComponentConnector/2',309);lH(311,1,{817:1,27:1},bdb);var UB=tnb(LGb,'AbstractComponentConnector/3',311);lH(308,1,jIb,cdb);_.pe=function ddb(a){xT(this.a,a)};var VB=tnb(LGb,'AbstractComponentConnector/lambda$0$Type',308);lH(310,1,lJb,edb);_.ve=function fdb(a){yT(this.a,this.b,a)};var WB=tnb(LGb,'AbstractComponentConnector/lambda$1$Type',310);lH(312,1,{818:1,27:1},gdb);var XB=tnb(LGb,'AbstractComponentConnector/lambda$2$Type',312);lH(313,110,{110:1},hdb);_.Yf=function idb(a){return true};var ZB=tnb(LGb,'AbstractConnector/FullStateChangeEvent',313);lH(389,171,gHb);var aC=tnb(LGb,'AbstractSingleComponentContainerConnector',389);lH(232,390,jKb);var cC=tnb(LGb,'ClickEventHandler',232);lH(803,12,MEb);var eC=tnb(LGb,'Icon',803);lH(728,803,MEb,ndb);_.ag=function odb(a){};_.bg=function pdb(a){var b;b=Mob(a.substr(11),'/',0);mdb(this,(dr('encodedURL',b[0]),decodeURI(b[0])));ldb(this,Nnb(b[1],16))};var dC=tnb(LGb,'FontIcon',728);lH(729,803,MEb,rdb);_.ag=function sdb(a){ai((wI(),this.Vc),'alt',a)};_.bg=function tdb(a){KI((wI(),this.Vc),VFb|(this.Vc.__eventBits||0));(F4(),!E4&&(E4=new T4),F4(),E4).a.j&&R6((Wg(),Vg),new udb(this,a));this.Vc['src']=a};var gC=tnb(LGb,'ImageIcon',729);lH(730,1,jGb,udb);_.Kd=function vdb(){qdb(this.a,this.b)};var fC=tnb(LGb,'ImageIcon/lambda$0$Type',730);lH(741,1,rGb,Mdb);_.De=function Pdb(a){var b;b=NI(a.d);if(this.r){a.a=true;b==YFb&&Cdb(this,a.d);return}switch(b){case ZFb:if(!a.a){Gdb(this,a.d);this.j&&(a.a=true)}break;case HDb:case $Fb:if(!a.a){this.j&&(a.a=true);Fdb(this)}break;case 64:this.j&&(a.a=true);break;default:HBb(QBb((nnb(jC),jC.k)),'Non touch event:'+jk(a.d));a.a=true;}};_.a=0;_.c=0;_.e=0;_.f=0;_.j=false;_.k=0;_.n=0;_.o=0;_.r=false;var wdb=false,xdb;var jC=tnb(LGb,'TouchScrollDelegate',741);lH(743,144,{},Rdb);_.$c=function Sdb(a){return 1+$wnd.Math.pow(a-1,3)};_._c=function Tdb(){var a;a=ms(this.b-this.a.e);this.a.c-=a;Edb(this.a);this.a.r=false};_.ad=function Udb(){Qdb(this,1+$wnd.Math.pow(0,3));this.a.r=false;Idb(this.a)};_.cd=function Vdb(a){Qdb(this,a)};_.b=0;_.c=0;var hC=tnb(LGb,'TouchScrollDelegate/1',743);lH(742,1,lJb,Zdb);_.ve=function $db(a){Hdb(this.a,a)};_.b=false;var iC=tnb(LGb,'TouchScrollDelegate/TouchScrollHandler',742);lH(441,1,uGb,_db);_.we=function aeb(a){var b;b=M7();if(!!this.a.c&&(!b||Hh(Pe(this.a.e),b)||Uf((PN(),$doc.body),b))){this.a.c.focus();this.a.c=null}};var kC=tnb(LGb,'VContextMenu/1',441);lH(439,149,{828:1,827:1,20:1,27:1,14:1,10:1,16:1,21:1,12:1,13:1},ceb);_.Te=function deb(){(TO(),TO(),RO).cf((wI(),this.Vc))};_.se=function eeb(a){fk(a.a)==27&&hQ(this.a,false)};var lC=tnb(LGb,'VContextMenu/CMenuBar',439);lH(440,1,jGb,feb);_.Kd=function geb(){W0(this.a)};var mC=tnb(LGb,'VContextMenu/lambda$0$Type',440);lH(443,1,{},heb);_.Ye=function ieb(a,b){X0(this.a,a,b)};var nC=tnb(LGb,'VContextMenu/lambda$1$Type',443);lH(442,1,jGb,jeb);_.Kd=function keb(){Y0(this.a)};var oC=tnb(LGb,'VContextMenu/lambda$2$Type',442);lH(124,77,OEb,leb);_.wd=function meb(a){sf(this,a);wI();if(QJ((mi(),a).type)==VFb){t6(this);a.stopPropagation();return}};_.qd=function neb(a){(wI(),this.Vc).style[IEb]=a;a==null||a.length==0?gf(this.Vc,mKb,true):gf(this.Vc,mKb,false)};var qC=tnb(LGb,'VLabel',124);lH(96,1,{},peb);_.b=0;var sC=tnb(LGb,'VLazyExecutor',96);lH(474,29,{},qeb);_.hd=function reb(){this.a.c=null;this.a.a.Kd()};var rC=tnb(LGb,'VLazyExecutor/1',474);lH(466,45,KGb,Feb);_.Ue=function Ieb(){web(this)};_.wd=function Jeb(a){web(this)};_.We=function Keb(a){return zeb(this,a)};_.De=function Leb(a){zeb(this,a.d)||(a.a=true)};_.mf=function Meb(){Ceb(this,4,null)};_.b=0;_.c=false;_.f=0;_.g=0;var seb;var xC=tnb(LGb,'VNotification',466);lH(468,29,{},Oeb);_.hd=function Peb(){hQ(this.a,false)};var tC=tnb(LGb,'VNotification/2',468);lH(470,29,{},Qeb);_.hd=function Reb(){this.a.Rc&&web(this.a)};var uC=tnb(LGb,'VNotification/3',470);lH(467,1,{829:1},Seb);var vC=tnb(LGb,'VNotification/NotificationRedirect',467);lH(469,1,{},Teb);_.Nf=function Ueb(a){yeb(this.a,a)};var wC=tnb(LGb,'VNotification/lambda$0$Type',469);lH(241,143,{20:1,807:1,27:1,14:1,10:1,811:1,65:1,16:1,34:1,21:1,12:1,13:1,241:1},Veb);_.yd=function Web(){if(((wI(),this.Vc).ownerDocument.body.className||'').indexOf('v-generated-body')==-1){this.b=new _eb(this);ub(this.b,YEb)}};_.xe=function Xeb(a){var b;b=false;b?oeb(this.a):(uJ(),Zj($doc).clientWidth|0,Zj($doc).clientHeight|0,undefined)};_.zd=function Yeb(){if(this.b){tb(this.b);this.b=null}};_.Ee=function Zeb(a){null.Ng()};_.Bd=function $eb(a){hi((wI(),this.Vc),a)};var BC=tnb(LGb,'VUI',241);lH(472,29,{},_eb);_.hd=function afb(){uJ();Zj($doc).clientWidth|0;Zj($doc).clientHeight|0;ub(this.a.b,YEb)};var zC=tnb(LGb,'VUI/1',472);lH(471,1,jGb,bfb);_.Kd=function cfb(){uJ();Zj($doc).clientWidth|0;Zj($doc).clientHeight|0};var AC=tnb(LGb,'VUI/lambda$0$Type',471);lH(748,1,{},hfb);var CC=tnb(wKb,'DDEventHandleStrategy',748);lH(738,1,{},lfb);var ifb;var EC=tnb(wKb,'VDragAndDropManager',738);lH(739,1,rGb,nfb);_.De=function ofb(b){var c,d,e;if(gfb((kfb(this.a),b))){RI((PN(),$doc.body));b.a=true;kk(b.d);return}e=NI(b.d);if(e==128){kfb(this.a);return}null.Ng();kfb(this.a);d=dfb((kfb(this.a),b));try{if(mfb(this,d,b)){return}}catch(a){a=GG(a);if(fs(a,22)){c=a;throw HG(c)}else throw HG(a)}finally{kfb(this.a)}ffb((kfb(this.a),d),b)};var DC=tnb(wKb,'VDragAndDropManager/DefaultDragAndDropEventHandler',739);lH(381,1,{},vfb);var HC=tnb(qIb,'LayoutDependencyTree',381);lH(231,1,{231:1},Qfb);_.Zc=function Rfb(){var a,b;a=wfb(this.a)+'\n';this.b==1?(a+='Vertical'):(a+='Horizontal');b=this.a.Cf();a+=' sizing: '+xfb(this.b==1?b.jb:b.nb)+'\n';j5(rfb(this.g,this.b),this.a.vf())&&(a+='In layout queue\n');a+='Layout blockers: '+pfb(this.c)+'\n';this.e&&(a+='Needs measure\n');j5(sfb(this.g,this.b),this.a.vf())&&(a+='In measure queue\n');a+='Measure blockers: '+pfb(this.d);return a};_.b=0;_.e=false;_.f=false;var GC=tnb(qIb,'LayoutDependencyTree/LayoutDependency',231);lH(148,389,{27:1,161:1,163:1,108:1,130:1,148:1,3:1},Zfb);_.Cf=function $fb(){return !this.L&&(this.L=bT(this)),this.L};_.yf=function _fb(){return !this.L&&(this.L=bT(this)),this.L};_.Ef=function agb(){return Wfb(this)};_.Gf=function bgb(){return true};_.zf=function cgb(a){var b;AT(this,a);if(a.Yf(gKb)){$6(this.D.k,(!this.L&&(this.L=bT(this)),this.L).p.a);a7(this.D.k,(!this.L&&(this.L=bT(this)),this.L).p.c);c7(this.D.k,(!this.L&&(this.L=bT(this)),this.L).p.d);d7(this.D.k,(!this.L&&(this.L=bT(this)),this.L).p.e);_6(this.D.k,(!this.L&&(this.L=bT(this)),this.L).p.b)}if(a.Yf(IJb)){G6(this.D.f,(!this.L&&(this.L=bT(this)),this.L).b.a);H6(this.D.f,(!this.L&&(this.L=bT(this)),this.L).b.b);I6(this.D.f,(!this.L&&(this.L=bT(this)),this.L).b.c)}a.Yf(SJb)&&Tfb(this);if(a.Yf('pageState.title')){b=(!this.L&&(this.L=bT(this)),this.L).f.b;b!=null&&(uJ(),$doc.title=b,undefined)}a.Yf(UJb)&&S9(this.D.g,(!this.L&&(this.L=bT(this)),this.L).i.b!=(Xlb(),Vlb));a.Yf(YJb)&&R8(this.D.a.b,null.Ng().Ng().Og.Og);a.Yf(QJb)&&IQ(this.D,(!this.L&&(this.L=bT(this)),this.L).e)};_.cg=function dgb(){var a,b,c,d;c=this.a;a=(!this.L&&(this.L=bT(this)),this.L).n;d=Vfb(this,c);b=Vfb(this,a);if(Qmb(c,a)){if(a==null){return}!Ufb(d)?Xfb(this,null,a,null,b):$h(Pe((!this.C&&(this.C=vT(this)),this.C).Uc),a)||Sfb(this,a);return}HBb(QBb((nnb(LC),LC.k)),'Changing theme from '+c+' to '+a);Xfb(this,c,a,d,b)};_.dg=function egb(){E5(this.D.e,(!this.L&&(this.L=bT(this)),this.L).o)};var LC=tnb(yKb,'UIConnector',148);lH(391,232,jKb,fgb);var KC=tnb(yKb,'UIConnector/1',391);lH(392,29,{},ggb);_.hd=function hgb(){if(gT(this.a).g<0){tb(this.a.b);this.a.b=null;return}fT(this.a,MD).Ng();aab(this.a.D.j)};var IC=tnb(yKb,'UIConnector/10',392);lH(393,1,{751:1},igb);_.Of=function jgb(a){OBb(QBb((nnb(LC),LC.k)),'Could not load theme from '+Vfb(this.a,this.b))};_.Pf=function kgb(a){HBb(QBb((nnb(LC),LC.k)),'Loading of '+this.b+' from '+this.c+' completed');!!this.d&&Jh(Eh(this.d),this.d);Sfb(this.a,this.b)};var JC=tnb(yKb,'UIConnector/11',393);lH(406,1,{},lgb);_.Nf=function mgb(a){var b;b=V3(a);if(b.indexOf(FGb)!=-1){X3(Pe(this.a),this);Te(this.a,FGb)}};var MC=tnb(JGb,'Overlay/1',406);lH(407,1,{},ngb);_.Nf=function ogb(a){if(V3(a).indexOf(FGb)!=-1){X3(Pe(this.a),this);kQ(this.a,this.b)}};_.b=false;var NC=tnb(JGb,'Overlay/2',407);lH(408,1,{},pgb);_.Nf=function qgb(a){var b;b=V3(a);if(b.indexOf(GGb)!=-1){X3(Pe(this.a),this);Te(this.a,FGb);Te(this.a,GGb);kQ(this.a,this.b)}};_.b=false;var OC=tnb(JGb,'Overlay/3',408);lH(404,1,{},tgb);_.a=0;_.b=0;_.c=0;_.d=0;var PC=tnb(JGb,'Overlay/PositionAndSize',404);lH(405,144,{},ugb);_.cd=function vgb(a){jQ(this.a,a)};var QC=tnb(JGb,'Overlay/ResizeAnimation',405);lH(333,1,{},Agb);_.eg=function Bgb(){return new mU};var SC=tnb(zKb,'Parser/0methodref$ctor$Type',333);lH(335,1,{},Cgb);_.fg=function Dgb(a){return pH(a)};var TC=tnb(zKb,'Parser/10methodref$toString$Type',335);lH(338,1,{},Egb);_.fg=function Fgb(a){return pH(a)};var UC=tnb(zKb,'Parser/11methodref$toString$Type',338);lH(218,1,{},Ggb);_.eg=function Hgb(){return new Q3};var VC=tnb(zKb,'Parser/1methodref$ctor$Type',218);lH(219,1,{},Igb);_.fg=function Jgb(a){return kob(Nnb(a,10))};var WC=tnb(zKb,'Parser/2methodref$valueOf$Type',219);lH(220,1,{},Kgb);_.fg=function Lgb(a){return pH(a)};var XC=tnb(zKb,'Parser/3methodref$toString$Type',220);lH(221,1,{},Mgb);_.fg=function Ngb(a){return kob(Nnb(a,10))};var YC=tnb(zKb,'Parser/4methodref$valueOf$Type',221);lH(111,1,{},Ogb);_.fg=function Pgb(a){return pH(a)};var ZC=tnb(zKb,'Parser/5methodref$toString$Type',111);lH(172,1,{},Qgb);var $C=tnb(zKb,'Parser/6methodref$intValue$Type',172);lH(334,1,{},Rgb);var _C=tnb(zKb,'Parser/7methodref$doubleValue$Type',334);lH(112,1,{},Sgb);_.fg=function Tgb(a){return pH(a)};var aD=tnb(zKb,'Parser/8methodref$toString$Type',112);lH(113,1,{},Ugb);_.fg=function Vgb(a){return pH(a)};var bD=tnb(zKb,'Parser/9methodref$toString$Type',113);lH(140,1,{},Wgb);_.fg=function Xgb(a){return is(a)?Rmb(a):Mnb(pH(a))};var cD=tnb(zKb,'Parser/lambda$11$Type',140);lH(336,1,{},Ygb);_.eg=function Zgb(){return new US};var dD=tnb(zKb,'Parser/lambda$16$Type',336);lH(114,1,{},$gb);_.eg=function _gb(){return new dR};var eD=tnb(zKb,'Parser/lambda$17$Type',114);lH(337,1,{},ahb);_.eg=function bhb(){return new c0};var fD=tnb(zKb,'Parser/lambda$18$Type',337);lH(67,1,{},chb);_.fg=function dhb(a){return wgb(this.a,a)};var gD=tnb(zKb,'Parser/lambda$19$Type',67);lH(339,1,{},ehb);_.fg=function fhb(a){var b;return b=new YS,Object.assign(b,a),b};var hD=tnb(zKb,'Parser/lambda$21$Type',339);lH(222,1,{},ghb);_.fg=function hhb(a){return kob(ms(is(a)?Rmb(a):Mnb(pH(a))))};var iD=tnb(zKb,'Parser/lambda$5$Type',222);lH(223,1,{},ihb);_.fg=function jhb(a){return kob(ms(is(a)?Rmb(a):Mnb(pH(a))))};var jD=tnb(zKb,'Parser/lambda$6$Type',223);lH(224,1,{},khb);_.fg=function lhb(a){return kob(ms(is(a)?Rmb(a):Mnb(pH(a))))};var kD=tnb(zKb,'Parser/lambda$8$Type',224);lH(767,1,{},rhb);_.cellsUpdated=function shb(a){var b;b=Kob((nnb(tz),tz.k),QDb,'.');w0(n6(eT(this.e,b)).$e(),xgb(a,new chb(new $gb)))};_.disconnected=function thb(){!!this.e&&k0(this.e)};_.editCellComment=function uhb(a,b){R6((Wg(),Vg),new Hjb(this,a,b))};_.invalidCellAddress=function vhb(){var a;a=Kob((nnb(tz),tz.k),QDb,'.');_R(wT(n6(eT(this.e,a)).$e().a).v)};_.layout=function whb(){u5(this.e.D.e);k2(this.f);j2(wT(this.e))};_.load=function xhb(){A1(this.f)};_.notifyStateChanges=function yhb(a,b){var c,d,e,f,g,h;h={};for(e=a,f=0,g=e.length;f<g;++f){d=e[f];h[d]=''}c=new oab(this.e,h,b);mhb(this,this.e,c);j0(this.e,c)};_.refreshCellStyles=function zhb(){R6((Wg(),Vg),new Fjb(this))};_.relayout=function Ahb(){R6((Wg(),Vg),new zjb(this))};_.relayoutSheet=function Bhb(){k2(this.f)};_.resize=function Chb(){u3(this.f)};_.setActionOnColumnHeaderCallback=function Dhb(a){ikb(this.e.i,a)};_.setActionOnCurrentSelectionCallback=function Ehb(a){jkb(this.e.i,a)};_.setActionOnRowHeaderCallback=function Fhb(a){kkb(this.e.i,a)};_.setCellAddedToSelectionAndSelectedCallback=function Ghb(a){lkb(this.e.i,a)};_.setCellCommentAuthors=function Hhb(a){gT(this.e).a=zgb(a,new Sgb,new Ugb)};_.setCellComments=function Ihb(a){gT(this.e).b=zgb(a,new Sgb,new Ugb)};_.setCellKeysToEditorIdMap=function Jhb(a){gT(this.e).c=zgb(a,new Sgb,new Ugb)};_.setCellRangePaintedCallback=function Khb(a){mkb(this.e.i,a)};_.setCellRangeSelectedCallback=function Lhb(a){nkb(this.e.i,a)};_.setCellSelectedCallback=function Mhb(a){okb(this.e.i,a)};_.setCellStyleToCSSStyle=function Nhb(a){gT(this.e).d=zgb(a,new Igb,new Kgb)};_.setCellValueEditedCallback=function Ohb(a){qkb(this.e.i,a)};_.setCellsAddedToRangeSelectionCallback=function Phb(a){rkb(this.e.i,a)};_.setClass=function Qhb(a){var b,c,d,e,f,g,h;for(d=this.d,f=0,h=d.length;f<h;++f){b=d[f];Ze(this.f,b,false)}this.d=Mob(a,' ',0);for(c=this.d,e=0,g=c.length;e<g;++e){b=c[e];Ze(this.f,b,true)}};_.setClearSelectedCellsOnCutCallback=function Rhb(a){skb(this.e.i,a)};_.setColGroupingData=function Shb(a){gT(this.e).e=xgb(a,new chb(new Ggb))};_.setColGroupingInversed=function Thb(a){gT(this.e).f=a};_.setColGroupingMax=function Uhb(a){gT(this.e).g=a};_.setColW=function Vhb(a){gT(this.e).i=lCb(tCb(new vCb(null,new rAb(xgb(a,new Wgb))),new Qgb))};_.setCols=function Whb(a){gT(this.e).j=a};_.setColumnAddedToSelectionCallback=function Xhb(a){tkb(this.e.i,a)};_.setColumnBufferSize=function Yhb(a){gT(this.e).k=a};_.setColumnHeaderContextMenuOpenCallback=function Zhb(a){ukb(this.e.i,a)};_.setColumnIndexToStyleIndex=function $hb(a){gT(this.e).n=zgb(a,new Mgb,new ghb)};_.setColumnResizedCallback=function _hb(a){vkb(this.e.i,a)};_.setColumnSelectedCallback=function aib(a){wkb(this.e.i,a)};_.setComponentIDtoCellKeysMap=function bib(a){gT(this.e).o=zgb(a,new Sgb,new Ugb)};_.setConditionalFormattingStyles=function cib(a){gT(this.e).p=zgb(a,new Igb,new Kgb)};_.setContextMenuOpenOnSelectionCallback=function dib(a){xkb(this.e.i,a)};_.setDefColW=function eib(a){gT(this.e).q=a};_.setDefRowH=function fib(a){gT(this.e).r=a};_.setDeleteSelectedCellsCallback=function gib(a){ykb(this.e.i,a)};_.setDisplayGridlines=function hib(a){gT(this.e).s=a};_.setDisplayRowColHeadings=function iib(a){gT(this.e).t=a};_.setGroupingCollapsedCallback=function jib(a){Akb(this.e.i,a)};_.setHasActions=function kib(a){gT(this.e).u=a};_.setHeight=function lib(a){gT(this.e).jb=a};_.setHiddenColumnIndexes=function mib(a){gT(this.e).v=xgb(a,new khb)};_.setHiddenRowIndexes=function nib(a){gT(this.e).w=xgb(a,new khb)};_.setHorizontalScrollPositions=function oib(a){gT(this.e).A=lCb(tCb(new vCb(null,new rAb(xgb(a,new Wgb))),new Qgb))};_.setHorizontalSplitPosition=function pib(a){gT(this.e).B=a};_.setHyperlinksTooltips=function qib(a){gT(this.e).C=zgb(a,new Sgb,new Ugb)};_.setId=function rib(a){gT(this.e).kb=a};_.setInfoLabelValue=function sib(a){gT(this.e).D=a};_.setInvalidFormulaCells=function tib(a){gT(this.e).F=new Sxb(xgb(a,new Cgb))};_.setInvalidFormulaErrorMessage=function uib(a){gT(this.e).G=a};_.setLevelHeaderClickedCallback=function vib(a){Bkb(this.e.i,a)};_.setLinkCellClickedCallback=function wib(a){Ckb(this.e.i,a)};_.setLockFormatColumns=function xib(a){gT(this.e).H=a};_.setLockFormatRows=function yib(a){gT(this.e).I=a};_.setLockedColumnIndexes=function zib(a){gT(this.e).J=new Sxb(xgb(a,new ihb))};_.setLockedRowIndexes=function Aib(a){gT(this.e).K=new Sxb(xgb(a,new ihb))};_.setMergedRegions=function Bib(a){gT(this.e).L=xgb(a,new chb(new Ygb))};_.setNamedRanges=function Cib(a){gT(this.e).M=xgb(a,new Ogb)};_.setOnColumnAutofitCallback=function Dib(a){Dkb(this.e.i,a)};_.setOnConnectorInitCallback=function Eib(a){Ekb(this.e.i,a)};_.setOnPasteCallback=function Fib(a){Fkb(this.e.i,a)};_.setOnRedoCallback=function Gib(a){Gkb(this.e.i,a)};_.setOnRowAutofitCallback=function Hib(a){Hkb(this.e.i,a)};_.setOnSheetScrollCallback=function Iib(a){Ikb(this.e.i,a)};_.setOnUndoCallback=function Jib(a){Jkb(this.e.i,a)};_.setOverlays=function Kib(a){gT(this.e).N=zgb(a,new Egb,new ehb)};_.setPopups=function Lib(a){var b;b=xgb(a,new chb(new Agb));hub(b,new Bjb(this))};_.setProtectedCellWriteAttemptedCallback=function Mib(a){Kkb(this.e.i,a)};_.setReload=function Nib(a){gT(this.e).O=true};_.setResources=function Oib(a,b){var c;c=xgb(b,new Ogb);hub(c,new Djb(this,a))};_.setRowAddedToRangeSelectionCallback=function Pib(a){Lkb(this.e.i,a)};_.setRowBufferSize=function Qib(a){gT(this.e).P=a};_.setRowGroupingData=function Rib(a){gT(this.e).Q=xgb(a,new chb(new Ggb))};_.setRowGroupingInversed=function Sib(a){gT(this.e).R=a};_.setRowGroupingMax=function Tib(a){gT(this.e).S=a};_.setRowH=function Uib(a){gT(this.e).T=ygb(a)};_.setRowHeaderContextMenuOpenCallback=function Vib(a){Mkb(this.e.i,a)};_.setRowIndexToStyleIndex=function Wib(a){gT(this.e).U=zgb(a,new Mgb,new ghb)};_.setRowSelectedCallback=function Xib(a){Nkb(this.e.i,a)};_.setRows=function Yib(a){gT(this.e).V=a};_.setRowsResizedCallback=function Zib(a){Okb(this.e.i,a)};_.setSelectedCellAndRange=function $ib(a,b,c,d,e,f,g,h){var i;i=Kob((nnb(tz),tz.k),QDb,'.');y0(n6(eT(this.e,i)).$e(),a,b,c,d,e,f,g,h)};_.setSelectionDecreasePaintedCallback=function _ib(a){Pkb(this.e.i,a)};_.setSelectionIncreasePaintedCallback=function ajb(a){Qkb(this.e.i,a)};_.setSetCellStyleWidthRatiosCallback=function bjb(a){Rkb(this.e.i,a)};_.setSheetAddressChangedCallback=function cjb(a){Skb(this.e.i,a)};_.setSheetCreatedCallback=function djb(a){Tkb(this.e.i,a)};_.setSheetIndex=function ejb(a){gT(this.e).W=a};_.setSheetNames=function fjb(a){gT(this.e).X=nub(xgb(a,new Ogb),or(uE,RDb,2,0,6,1))};_.setSheetProtected=function gjb(a){gT(this.e).Y=a};_.setSheetRenamedCallback=function hjb(a){Ukb(this.e.i,a)};_.setSheetSelectedCallback=function ijb(a){Vkb(this.e.i,a)};_.setShiftedCellBorderStyles=function jjb(a){gT(this.e).Z=xgb(a,new Ogb)};_.setUpdateCellCommentCallback=function kjb(a){Wkb(this.e.i,a)};_.setVerticalScrollPositions=function ljb(a){gT(this.e).$=lCb(tCb(new vCb(null,new rAb(xgb(a,new Wgb))),new Qgb))};_.setVerticalSplitPosition=function mjb(a){gT(this.e)._=a};_.setVisibleCellComments=function njb(a){gT(this.e).ab=xgb(a,new Ogb)};_.setWidth=function ojb(a){gT(this.e).nb=a};_.setWorkbookChangeToggle=function pjb(a){gT(this.e).bb=a};_.setWorkbookProtected=function qjb(a){gT(this.e).cb=a};_.showActions=function rjb(a){var b;b=Kob((nnb(tz),tz.k),QDb,'.');z0(n6(eT(this.e,b)).$e(),xgb(a,new chb(new ahb)))};_.showSelectedCell=function sjb(a,b,c,d,e,f,g){var h;h=Kob((nnb(tz),tz.k),QDb,'.');A0(n6(eT(this.e,h)).$e(),a,b,c,d,e,f,g)};_.updateBottomLeftCellValues=function tjb(a){var b;b=Kob((nnb(tz),tz.k),QDb,'.');B0(n6(eT(this.e,b)).$e(),xgb(a,new chb(new $gb)))};_.updateBottomRightCellValues=function ujb(a){var b;b=Kob((nnb(tz),tz.k),QDb,'.');C0(n6(eT(this.e,b)).$e(),xgb(a,new chb(new $gb)))};_.updateCellsAndRefreshCellStyles=function vjb(){};_.updateFormulaBar=function wjb(a,b,c){var d;d=Kob((nnb(tz),tz.k),QDb,'.');D0(n6(eT(this.e,d)).$e(),a,b,c)};_.updateTopLeftCellValues=function xjb(a){var b;b=Kob((nnb(tz),tz.k),QDb,'.');E0(n6(eT(this.e,b)).$e(),xgb(a,new chb(new $gb)))};_.updateTopRightCellValues=function yjb(a){var b;b=Kob((nnb(tz),tz.k),QDb,'.');F0(n6(eT(this.e,b)).$e(),xgb(a,new chb(new $gb)))};var qD=tnb(zKb,'SpreadsheetJsApi',767);lH(288,1,jGb,zjb);_.Kd=function Ajb(){k2(this.a.f)};var lD=tnb(zKb,'SpreadsheetJsApi/lambda$0$Type',288);lH(289,1,{},Bjb);_.gg=function Cjb(a){ohb(this.a,a)};var mD=tnb(zKb,'SpreadsheetJsApi/lambda$1$Type',289);lH(290,1,{},Djb);_.gg=function Ejb(a){phb(this.a,this.b,a)};var nD=tnb(zKb,'SpreadsheetJsApi/lambda$2$Type',290);lH(291,1,jGb,Fjb);_.Kd=function Gjb(){mZ(wT(nhb(this.a).a).W)};var oD=tnb(zKb,'SpreadsheetJsApi/lambda$3$Type',291);lH(292,1,jGb,Hjb);_.Kd=function Ijb(){qhb(this.a,this.b,this.c)};_.b=0;_.c=0;var pD=tnb(zKb,'SpreadsheetJsApi/lambda$4$Type',292);lH(214,1,{815:1,3:1},alb);_.tf=function dlb(a,b,c){zkb(this,a,b,c)};var tD=tnb(zKb,'SpreadsheetServerRpcImpl',214);lH(293,1,{},flb);_.hg=function glb(a,b){blb(this.a,a,b)};var rD=tnb(zKb,'SpreadsheetServerRpcImpl/lambda$0$Type',293);lH(294,1,{},hlb);_.hg=function ilb(a,b){clb(this.a,a,b)};var sD=tnb(zKb,'SpreadsheetServerRpcImpl/lambda$1$Type',294);lH(746,1,zDb,ulb);_.Zc=function vlb(){return rc(this.b)+','+this.c+','+this.d+','+this.a+','+this.e+','+this.f+','+this.j+','+this.k+','+this.g+','+this.i};_.a=false;_.c=0;_.d=0;_.e=false;_.f=false;_.g=-1;_.i=-1;_.j=false;_.k=0;var yD=tnb(bHb,'MouseEventDetails',746);lH(129,4,{129:1,3:1,6:1,4:1},Alb);var wlb,xlb,ylb;var xD=unb(bHb,'MouseEventDetails/MouseButton',129,Blb);lH(687,1,zDb,Llb);_.a=-1;_.b=-1;_.c=-1;_.e=false;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.n=false;_.o=false;_.p=false;_.q=false;_.r=false;_.s=false;_.t=0;_.u=-1;_.v=-1;var zD=tnb(bHb,'VBrowserDetails',687);var Mlb;lH(193,1,{193:1,3:1},Qlb);_.Wc=function Rlb(a){return Plb(this,a)};_.Yc=function Slb(){var a;a=1;a=31*a+(this.a==null?0:tDb(this.a));a=31*a+(this.b==null?0:tDb(this.b));a=31*a+(this.c==null?0:tDb(this.c));a=31*a+Sub(this.d);return a};_.Zc=function Tlb(){return this.a+':'+this.b+'.'+this.c+'('+NDb+')'};var BD=tnb(iHb,'MethodInvocation',193);lH(121,4,{121:1,3:1,6:1,4:1},Ylb);var Ulb,Vlb,Wlb;var CD=unb(iHb,'PushMode',121,Zlb);lH(488,75,jHb);var FD=tnb(uIb,'AbstractSingleComponentContainerState',488);lH(119,4,{119:1,3:1,6:1,4:1},hmb);var dmb,emb,fmb;var GD=unb(uIb,'ContentMode',119,imb);lH(84,4,{84:1,3:1,6:1,4:1},pmb);var jmb,kmb,lmb,mmb,nmb;var HD=unb(uIb,'ErrorLevel',84,qmb);lH(153,4,{153:1,3:1,6:1,4:1},umb);var rmb,smb;var JD=unb(aLb,'NotificationRole',153,vmb);lH(249,1,zDb,wmb);_.a=false;_.b=null;var KD=tnb(aLb,'PageState',249);lH(107,4,{107:1,3:1,6:1,4:1},Cmb);var xmb,ymb,zmb,Amb;var LD=unb(aLb,'Transport',107,Dmb);lH(185,488,{75:1,82:1,185:1,3:1},Emb);_.a=false;_.e='This content is announced automatically and does not need to be navigated into.';_.g=-1;_.k=0;_.o=true;var UD=tnb(aLb,'UIState',185);lH(244,1,zDb,Fmb);_.a=300;_.b=1500;_.c=5000;var ND=tnb(aLb,'UIState/LoadingIndicatorConfigurationState',244);lH(489,1,zDb,Gmb);_.d=0;_.n=false;var OD=tnb(aLb,'UIState/LocaleData',489);lH(248,1,zDb,Hmb);var PD=tnb(aLb,'UIState/LocaleServiceState',248);lH(99,1,zDb,Jmb,Kmb);var QD=tnb(aLb,'UIState/NotificationTypeConfiguration',99);lH(246,1,zDb,Lmb);_.a=false;_.d=null;var RD=tnb(aLb,'UIState/PushConfigurationState',246);lH(247,1,zDb,Mmb);_.a=400;_.b=false;_.c='Server connection lost, trying to reconnect...';_.d='Server connection lost.';_.e=10000;_.f=5000;var SD=tnb(aLb,'UIState/ReconnectDialogConfigurationState',247);lH(245,1,zDb,Nmb);_.a=300;_.b=500;_.c=750;_.d=100;_.e=YEb;var TD=tnb(aLb,'UIState/TooltipConfigurationState',245);lH(483,22,KDb,Wmb);var VD=tnb('elemental.json','JsonException',483);lH(134,1,{203:1});_.Zc=function Zmb(){return this.a};var ZD=tnb(eEb,'AbstractStringBuilder',134);lH(64,22,KDb,$mb);var $D=tnb(eEb,'ArithmeticException',64);var jnb,knb;lH(138,93,{3:1,6:1,138:1,93:1},Rnb);_.ld=function Snb(a){return Qnb(this.a,a.a)};_.Wc=function Tnb(a){return fs(a,138)&&Onb(this.a,a.a)};_.Yc=function Unb(){return ms(this.a)};_.Zc=function Wnb(){return ''+this.a};_.a=0;var fE=tnb(eEb,'Float',138);var lob;lH(48,53,{3:1,17:1,48:1,22:1,11:1},sob);var mE=tnb(eEb,'NumberFormatException',48);lH(81,1,{3:1,81:1},tob);_.Wc=function uob(a){var b;if(fs(a,81)){b=a;return this.c==b.c&&this.d==b.d&&this.a==b.a&&this.b==b.b}return false};_.Yc=function vob(){return Sub(rr(mr(oE,1),zDb,1,5,[kob(this.c),this.a,this.d,this.b]))};_.Zc=function wob(){return this.a+'.'+this.d+'('+(this.b!=null?this.b:'Unknown Source')+(this.c>=0?':'+this.c:'')+')'};_.c=0;var qE=tnb(eEb,'StackTraceElement',81);lH(277,134,{203:1},Xob);var rE=tnb(eEb,'StringBuffer',277);lH(32,134,{203:1},cpb,dpb,epb);var sE=tnb(eEb,'StringBuilder',32);lH(921,1,{});var gpb;lH(39,93,{3:1,6:1,93:1,39:1},Gpb,Hpb,Ipb,Jpb);_.ld=function Mpb(a){return ypb(this,a)};_.Wc=function Npb(a){var b;if(this===a){return true}if(fs(a,39)){b=a;return this.e==b.e&&ypb(this,b)==0}return false};_.Yc=function Opb(){var a;if(this.b!=0){return this.b}if(this.a<54){a=OG(this.f);this.b=bH(JG(a,-1));this.b=33*this.b+bH(JG(YG(a,32),-1));this.b=17*this.b+ms(this.e);return this.b}this.b=17*jqb(this.c)+ms(this.e);return this.b};_.Zc=function Qpb(){return Fpb(this)};_.a=0;_.b=0;_.d=0;_.e=0;_.f=0;var opb,ppb,qpb,rpb,spb,tpb,upb,vpb,wpb;var yE=tnb('java.math','BigDecimal',39);lH(15,93,{3:1,6:1,93:1,15:1},rqb,sqb,tqb,uqb,vqb,wqb);_.ld=function yqb(a){return _pb(this,a)};_.Wc=function zqb(a){return eqb(this,a)};_.Yc=function Bqb(){return jqb(this)};_.Zc=function Dqb(){return Sqb(this,0)};_.b=-2;_.c=0;_.d=0;_.e=0;var Upb,Vpb,Wpb,Xpb,Ypb,Zpb;var zE=tnb('java.math','BigInteger',15);var Nqb,Oqb;var hrb,irb,jrb;lH(173,777,{131:1});_.clear=function qsb(){osb(this)};_.containsKey=function rsb(a){return fsb(this,a)};_.containsValue=function ssb(a){return gsb(this,a,this.e)||gsb(this,a,this.d)};_.qg=function tsb(){return new Csb(this)};_.get=function usb(a){return hsb(this,a)};_.put=function vsb(a,b){return ksb(this,a,b)};_.remove=function wsb(a){return msb(this,a)};_.size=function xsb(){return psb(this)};var DE=tnb(iEb,'AbstractHashMap',173);lH(49,778,VDb,Csb);_.clear=function Dsb(){this.a.clear()};_.contains=function Esb(a){return Bsb(this,a)};_.Oe=function Fsb(){return new Ksb(this.a)};_.remove=function Gsb(a){var b;if(Bsb(this,a)){b=a.Ag();this.a.remove(b);return true}return false};_.size=function Hsb(){return this.a.size()};var CE=tnb(iEb,'AbstractHashMap/EntrySet',49);lH(50,1,{},Ksb);_.$e=function Msb(){return Jsb(this)};_.Ze=function Lsb(){return this.b};_._e=function Nsb(){iDb(!!this.c);vxb(this.e,this);this.c._e();this.c=null;this.b=Isb(this);wxb(this.e,this)};_.b=false;var BE=tnb(iEb,'AbstractHashMap/EntrySetIterator',50);lH(785,1,WDb);_.Wc=function Vtb(a){var b;if(!fs(a,85)){return false}b=a;return Lzb(this.b.value[0],b.Ag())&&Lzb(Byb(this),b.Bg())};_.Yc=function Wtb(){return Mzb(this.b.value[0])^Mzb(Byb(this))};_.Zc=function Xtb(){return this.b.value[0]+'='+Byb(this)};var OE=tnb(iEb,'AbstractMapEntry',785);lH(783,776,UDb);_.addAtIndex=function Ztb(a,b){var c;c=this.ug(a);c.wg(b)};_.addAllAtIndex=function $tb(a,b){var c,d,e,f;eDb(b);f=false;e=this.ug(a);for(d=n6(b);d.Ze();){c=d.$e();e.wg(c);f=true}return f};_.getAtIndex=function _tb(a){return Ytb(this,a)};_.Oe=function aub(){return kzb(this,0)};_.removeAtIndex=function bub(b){var c,d;c=this.ug(b);try{d=c.$e();c._e();return d}catch(a){a=GG(a);if(fs(a,73)){throw HG(new anb("Can't remove element "+b))}else throw HG(a)}};_.setAtIndex=function cub(b,c){var d,e;d=this.ug(b);try{e=d.$e();d.zg(c);return e}catch(a){a=GG(a);if(fs(a,73)){throw HG(new anb("Can't set element "+b))}else throw HG(a)}};var QE=tnb(iEb,'AbstractSequentialList',783);lH(139,776,XDb,_ub);_.contains=function avb(a){return Osb(this,a)!=-1};_.getAtIndex=function bvb(a){return dDb(a,this.a.length),this.a[a]};_.setAtIndex=function cvb(a,b){var c;c=(dDb(a,this.a.length),this.a[a]);this.a[a]=b;return c};_.size=function dvb(){return this.a.length};_.toArray=function evb(){return $ub(this,or(oE,zDb,1,this.a.length,5,1))};_.pg=function fvb(a){return $ub(this,a)};var UE=tnb(iEb,'Arrays/ArrayList',139);lH(177,1,{40:1},Qvb);_.add=function Rvb(a){throw HG(new mpb)};_.addAll=function Svb(a){throw HG(new mpb)};_.clear=function Tvb(){throw HG(new mpb)};_.contains=function Uvb(a){return this.b.contains(a)};_.containsAll=function Vvb(a){return this.b.containsAll(a)};_.isEmpty=function Wvb(){return this.b.isEmpty()};_.Oe=function Xvb(){return new ewb(n6(this.b))};_.remove=function Yvb(a){throw HG(new mpb)};_.removeAll=function Zvb(a){throw HG(new mpb)};_.retainAll=function $vb(a){throw HG(new mpb)};_.size=function _vb(){return this.b.size()};_.toArray=function awb(){return this.b.toArray()};_.pg=function bwb(a){return this.b.pg(a)};_.Zc=function cwb(){return pH(this.b)};var $E=tnb(iEb,'Collections/UnmodifiableCollection',177);lH(179,1,{},ewb);_.Ze=function fwb(){return this.b.Ze()};_.$e=function gwb(){return this.b.$e()};_._e=function hwb(){dwb()};var ZE=tnb(iEb,'Collections/UnmodifiableCollectionIterator',179);lH(178,177,UDb,iwb);_.addAtIndex=function jwb(a,b){throw HG(new mpb)};_.addAllAtIndex=function kwb(a,b){throw HG(new mpb)};_.Wc=function lwb(a){return R(this.a,a)};_.getAtIndex=function mwb(a){return this.a.getAtIndex(a)};_.Yc=function nwb(){return V(this.a)};_.indexOf=function owb(a){return this.a.indexOf(a)};_.isEmpty=function pwb(){return this.a.isEmpty()};_.lastIndexOf=function qwb(a){return this.a.lastIndexOf(a)};_.tg=function rwb(){return new wwb(this.a.ug(0))};_.ug=function swb(a){return new wwb(this.a.ug(a))};_.removeAtIndex=function twb(a){throw HG(new mpb)};_.setAtIndex=function uwb(a,b){throw HG(new mpb)};_.subList=function vwb(a,b){return new iwb(this.a.subList(a,b))};var aF=tnb(iEb,'Collections/UnmodifiableList',178);lH(240,179,{},wwb);_._e=function Awb(){dwb()};_.wg=function xwb(a){throw HG(new mpb)};_.xg=function ywb(){return this.a.xg()};_.yg=function zwb(){return this.a.yg()};_.zg=function Bwb(a){throw HG(new mpb)};var _E=tnb(iEb,'Collections/UnmodifiableListIterator',240);lH(433,1,{131:1},Dwb);_.getOrDefault=function Kwb(a,b){var c;return c=this.c.get(a),c==null&&!this.c.containsKey(a)?b:c};_.putIfAbsent=function Qwb(a,b){var c;return c=this.c.get(a),c!=null?c:Cwb()};_.replace=function Swb(a,b){return this.c.containsKey(a)?Cwb():null};_.clear=function Ewb(){throw HG(new mpb)};_.containsKey=function Fwb(a){return this.c.containsKey(a)};_.containsValue=function Gwb(a){return this.c.containsValue(a)};_.qg=function Hwb(){!this.a&&(this.a=new $wb(this.c.qg()));return this.a};_.Wc=function Iwb(a){return R(this.c,a)};_.get=function Jwb(a){return this.c.get(a)};_.Yc=function Lwb(){return V(this.c)};_.isEmpty=function Mwb(){return this.c.isEmpty()};_.keySet=function Nwb(){!this.b&&(this.b=new Wwb(this.c.keySet()));return this.b};_.put=function Owb(a,b){return Cwb()};_.putAll=function Pwb(a){throw HG(new mpb)};_.remove=function Rwb(a){throw HG(new mpb)};_.size=function Twb(){return this.c.size()};_.Zc=function Uwb(){return pH(this.c)};_.values=function Vwb(){!this.d&&(this.d=new Qvb(this.c.values()));return this.d};var eF=tnb(iEb,'Collections/UnmodifiableMap',433);lH(238,177,VDb,Wwb);_.Wc=function Xwb(a){return R(this.b,a)};_.Yc=function Ywb(){return V(this.b)};var gF=tnb(iEb,'Collections/UnmodifiableSet',238);lH(434,238,VDb,$wb);_.contains=function _wb(a){return this.b.contains(a)};_.containsAll=function axb(a){return this.b.containsAll(a)};_.Oe=function bxb(){var a;a=n6(this.b);return new exb(a)};_.toArray=function cxb(){var a;a=this.b.toArray();Zwb(a,a.length);return a};_.pg=function dxb(a){var b;b=this.b.pg(a);Zwb(b,this.b.size());return b};var dF=tnb(iEb,'Collections/UnmodifiableMap/UnmodifiableEntrySet',434);lH(436,1,{},exb);_.$e=function gxb(){return new ixb(this.a.$e())};_.Ze=function fxb(){return this.a.Ze()};_._e=function hxb(){throw HG(new mpb)};var bF=tnb(iEb,'Collections/UnmodifiableMap/UnmodifiableEntrySet/1',436);lH(239,1,WDb,ixb);_.Wc=function jxb(a){return this.a.Wc(a)};_.Ag=function kxb(){return this.a.Ag()};_.Bg=function lxb(){return this.a.Bg()};_.Yc=function mxb(){return this.a.Yc()};_.Cg=function nxb(a){throw HG(new mpb)};_.Zc=function oxb(){return pH(this.a)};var cF=tnb(iEb,'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry',239);lH(435,178,{40:1,86:1,198:1},pxb);var fF=tnb(iEb,'Collections/UnmodifiableRandomAccessList',435);var qxb;lH(740,1,zDb,txb);_.Wc=function uxb(a){return this===a};var hF=tnb(iEb,'Comparators/NaturalOrderComparator',740);lH(727,22,KDb,yxb);var iF=tnb(iEb,'ConcurrentModificationException',727);lH(128,1,{3:1,6:1,128:1},Axb,Bxb);_.ld=function Cxb(a){return nob(OG(this.a.getTime()),OG(a.a.getTime()))};_.Wc=function Dxb(a){return fs(a,128)&&NG(OG(this.a.getTime()),OG(a.a.getTime()))};_.Yc=function Exb(){var a;a=OG(this.a.getTime());return bH(dH(a,ZG(a,32)))};_.Zc=function Gxb(){return zxb(this)};var jF=tnb(iEb,'Date',128);var Hxb,Ixb;lH(24,173,YDb,Kxb,Lxb);_.rg=function Mxb(a,b){return ls(a)===ls(b)||a!=null&&R(a,b)};_.sg=function Nxb(a){var b;b=V(a);return b|0};var kF=tnb(iEb,'HashMap',24);lH(35,778,ZDb,Rxb,Sxb);_.add=function Txb(a){return Oxb(this,a)};_.clear=function Uxb(){osb(this.a)};_.contains=function Vxb(a){return Pxb(this,a)};_.isEmpty=function Wxb(){return psb(this.a)==0};_.Oe=function Xxb(){var a;return a=(new ttb(this.a)).a.qg().Oe(),new ztb(a)};_.remove=function Yxb(a){return Qxb(this,a)};_.size=function Zxb(){return psb(this.a)};var lF=tnb(iEb,'HashSet',35);lH(486,1,{},dyb);_.Oe=function eyb(){return new fyb(this)};_.c=0;var nF=tnb(iEb,'InternalHashCodeMap',486);lH(243,1,{},fyb);_.$e=function hyb(){return this.d=this.a[this.c++],this.d};_.Ze=function gyb(){var a;if(this.c<this.a.length){return true}a=this.b.next();if(!a.done){this.a=a.value[1];this.c=0;return true}return false};_._e=function iyb(){cyb(this.e,this.d.Ag());this.c!=0&&--this.c};_.c=0;_.d=null;var mF=tnb(iEb,'InternalHashCodeMap/1',243);var lyb;lH(484,1,{},vyb);_.Oe=function wyb(){return new xyb(this)};_.c=0;_.d=0;var qF=tnb(iEb,'InternalStringMap',484);lH(242,1,{},xyb);_.$e=function zyb(){return this.c=this.a,this.a=this.b.next(),new Cyb(this.d,this.c,this.d.d)};_.Ze=function yyb(){return !this.a.done};_._e=function Ayb(){uyb(this.d,this.c.value[0])};var oF=tnb(iEb,'InternalStringMap/1',242);lH(485,785,WDb,Cyb);_.Ag=function Dyb(){return this.b.value[0]};_.Bg=function Eyb(){return Byb(this)};_.Cg=function Fyb(a){return tyb(this.a,this.b.value[0],a)};_.c=0;var pF=tnb(iEb,'InternalStringMap/2',485);lH(677,24,YDb,Myb);_.clear=function Nyb(){Hyb(this)};_.containsKey=function Oyb(a){return fsb(this.c,a)};_.containsValue=function Pyb(a){var b;b=this.b.a;while(b!=this.b){if(Lzb(b.e,a)){return true}b=b.a}return false};_.qg=function Qyb(){return new $yb(this)};_.get=function Ryb(a){return Iyb(this,a)};_.put=function Syb(a,b){return Jyb(this,a,b)};_.remove=function Tyb(a){return Lyb(this,a)};_.size=function Uyb(){return psb(this.c)};_.a=false;var uF=tnb(iEb,'LinkedHashMap',677);lH(157,174,{157:1,85:1},Xyb,Yyb);var rF=tnb(iEb,'LinkedHashMap/ChainEntry',157);lH(678,778,VDb,$yb);_.clear=function _yb(){Hyb(this.a)};_.contains=function azb(a){return Zyb(this,a)};_.Oe=function bzb(){return new ezb(this)};_.remove=function czb(a){var b;if(Zyb(this,a)){b=a.Ag();Lyb(this.a,b);return true}return false};_.size=function dzb(){return psb(this.a.c)};var tF=tnb(iEb,'LinkedHashMap/EntrySet',678);lH(679,1,{},ezb);_.$e=function gzb(){return vxb(this.c.a.c,this),cDb(this.b!=this.c.a.b),this.a=this.b,this.b=this.b.a,this.a};_.Ze=function fzb(){return this.b!=this.c.a.b};_._e=function hzb(){iDb(!!this.a);vxb(this.c.a.c,this);Wyb(this.a);msb(this.c.a.c,this.a.d);wxb(this.c.a.c,this);this.a=null};var sF=tnb(iEb,'LinkedHashMap/EntrySet/EntryIterator',679);lH(284,783,{3:1,40:1,86:1},nzb);_.add=function ozb(a){return izb(this,a)};_.clear=function pzb(){mzb(this)};_.ug=function qzb(a){return kzb(this,a)};_.size=function rzb(){return this.b};_.b=0;var xF=tnb(iEb,'LinkedList',284);lH(454,1,{},tzb);_.wg=function uzb(a){jzb(this.d,a,this.b.b,this.b);++this.a;this.c=null};_.Ze=function vzb(){return this.b!=this.d.c};_.xg=function wzb(){return this.b.b!=this.d.a};_.$e=function xzb(){return szb(this)};_.yg=function yzb(){cDb(this.b.b!=this.d.a);this.c=this.b=this.b.b;--this.a;return this.c.c};_._e=function zzb(){var a;iDb(!!this.c);a=this.c.a;lzb(this.d,this.c);this.b==this.c?(this.b=a):--this.a;this.c=null};_.zg=function Azb(a){iDb(!!this.c);this.c.c=a};_.a=0;_.c=null;var vF=tnb(iEb,'LinkedList/ListIteratorImpl',454);lH(183,1,{},Bzb);var wF=tnb(iEb,'LinkedList/Node',183);lH(756,1,{});var Czb,Dzb;var BF=tnb(iEb,'Locale',756);lH(278,756,{},Fzb);_.Zc=function Gzb(){return ''};var zF=tnb(iEb,'Locale/1',278);lH(279,756,{},Hzb);_.Zc=function Izb(){return 'unknown'};var AF=tnb(iEb,'Locale/4',279);lH(205,1,{165:1},Ozb);_.Hg=function Pzb(a){this.a.gg(a)};var FF=tnb(iEb,'Spliterator/OfDouble/0methodref$accept$Type',205);lH(206,1,{165:1},Qzb);_.Hg=function Rzb(a){SCb(this.a,a)};var GF=tnb(iEb,'Spliterator/OfDouble/1methodref$accept$Type',206);lH(207,1,{166:1},Szb);_.Ig=function Tzb(a){this.a.gg(kob(a))};var HF=tnb(iEb,'Spliterator/OfInt/2methodref$accept$Type',207);lH(208,1,{166:1},Uzb);_.Ig=function Vzb(a){SCb(this.a,kob(a))};var IF=tnb(iEb,'Spliterator/OfInt/3methodref$accept$Type',208);lH(272,167,{});_.Fg=function bAb(a){Wzb(this,new Qzb(a))};_.Gg=function cAb(a){return fs(a,165)?yCb(this,a):yCb(this,new Ozb(a))};var JF=tnb(iEb,'Spliterators/AbstractDoubleSpliterator',272);lH(273,167,{});_.Fg=function eAb(a){Wzb(this,new Uzb(a))};_.Gg=function fAb(a){return fs(a,166)?DCb(this,a):DCb(this,new Szb(a))};var KF=tnb(iEb,'Spliterators/AbstractIntSpliterator',273);lH(133,1,{},rAb);_.Dg=function sAb(){return this.a};_.Eg=function tAb(){qAb(this);return this.c};_.Fg=function uAb(a){qAb(this);Gyb(this.d,a)};_.Gg=function vAb(a){eDb(a);qAb(this);if(Kub(this.d)){a.gg(Lub(this.d));return true}return false};_.a=0;_.c=0;var PF=tnb(iEb,'Spliterators/IteratorSpliterator',133);lH(216,1,{},xAb);_.Zc=function yAb(){return !this.a?this.c:this.e.length==0?this.a.a:this.a.a+(''+this.e)};var QF=tnb(iEb,'StringJoiner',216);lH(784,1,zDb);_.kg=function LAb(){return 'DUMMY'};_.og=function MAb(){return -1};_.Zc=function OAb(){return this.kg()};var BAb,CAb,DAb,EAb,FAb,GAb,HAb,IAb,JAb;var bG=tnb(PFb,'Level',784);lH(456,784,zDb,PAb);_.kg=function QAb(){return 'ALL'};_.og=function RAb(){return ODb};var UF=tnb(PFb,'Level/LevelAll',456);lH(457,784,zDb,SAb);_.kg=function TAb(){return 'CONFIG'};_.og=function UAb(){return 700};var VF=tnb(PFb,'Level/LevelConfig',457);lH(458,784,zDb,VAb);_.kg=function WAb(){return 'FINE'};_.og=function XAb(){return 500};var WF=tnb(PFb,'Level/LevelFine',458);lH(459,784,zDb,YAb);_.kg=function ZAb(){return 'FINER'};_.og=function $Ab(){return 400};var XF=tnb(PFb,'Level/LevelFiner',459);lH(460,784,zDb,_Ab);_.kg=function aBb(){return 'FINEST'};_.og=function bBb(){return 300};var YF=tnb(PFb,'Level/LevelFinest',460);lH(461,784,zDb,cBb);_.kg=function dBb(){return 'INFO'};_.og=function eBb(){return 800};var ZF=tnb(PFb,'Level/LevelInfo',461);lH(462,784,zDb,fBb);_.kg=function gBb(){return 'OFF'};_.og=function hBb(){return EDb};var $F=tnb(PFb,'Level/LevelOff',462);lH(463,784,zDb,iBb);_.kg=function jBb(){return 'SEVERE'};_.og=function kBb(){return YEb};var _F=tnb(PFb,'Level/LevelSevere',463);lH(464,784,zDb,lBb);_.kg=function mBb(){return _Kb};_.og=function nBb(){return 900};var aG=tnb(PFb,'Level/LevelWarning',464);lH(605,1,{},rBb);var oBb;var cG=tnb(PFb,'LogManager',605);lH(685,1,zDb,uBb);_.b='';_.c=0;_.e=null;var dG=tnb(PFb,'LogRecord',685);lH(147,1,{147:1},PBb);_.e=false;var vBb=false,wBb=false,xBb=false,yBb=false,zBb=false;var eG=tnb(PFb,'Logger',147);lH(698,187,{},hCb);var lG=tnb(jEb,'DoubleStreamImpl',698);lH(699,1,{165:1},jCb);_.Hg=function kCb(a){iCb(this.a,a)};var kG=tnb(jEb,'DoubleStreamImpl/lambda$0$Type',699);lH(696,187,{},mCb);var nG=tnb(jEb,'IntStreamImpl',696);lH(697,1,{166:1},oCb);_.Ig=function pCb(a){nCb(this.a,a)};var mG=tnb(jEb,'IntStreamImpl/lambda$6$Type',697);lH(597,272,{},zCb);_.Jg=function ACb(a){return yCb(this,a)};var pG=tnb(jEb,'StreamImpl/MapToDoubleSpliterator',597);lH(601,1,{},BCb);_.gg=function CCb(a){this.a.Hg((eDb(a),a))};var oG=tnb(jEb,'StreamImpl/MapToDoubleSpliterator/lambda$0$Type',601);lH(596,273,{},ECb);_.Jg=function FCb(a){return DCb(this,a)};var rG=tnb(jEb,'StreamImpl/MapToIntSpliterator',596);lH(600,1,{},GCb);_.gg=function HCb(a){this.a.Ig(ms((eDb(a),a)))};var qG=tnb(jEb,'StreamImpl/MapToIntSpliterator/lambda$0$Type',600);lH(799,1,{});var zG=tnb('javaemul.internal','ConsoleLogger',799);var ns=wnb('char','C');var qs=wnb('int','I');var wD=vnb(bHb,'ContextClickRpc');var os=wnb('double','D');var ps=wnb('float','F');var Cy=vnb(EGb,'PopupButtonServerRpc');var MD=vnb(aLb,'UIServerRpc');var ED=tnb(iHb,'URLReference',null);_=oH('Vaadin.Spreadsheet.Api',rhb);_=oH('com.vaadin.addon.spreadsheet.client.CellData',dR);_=oH('com.vaadin.addon.spreadsheet.client.OverlayInfo',YS);_.COMPONENT=WS;_.IMAGE=XS;_=oH('com.vaadin.addon.spreadsheet.client.PopupButtonState',mU);_=oH('com.vaadin.addon.spreadsheet.client.SpreadsheetActionDetails',c0);_=oH('java.io.Serializable');_.$isInstance=Xmb;cnb();_=oH('java.lang.Boolean');_.$isInstance=dnb;_=oH('java.lang.CharSequence');_.$isInstance=inb;_=oH('java.lang.Cloneable');_.$isInstance=Inb;_=oH('java.lang.Comparable');_.$isInstance=Jnb;_=oH('java.lang.Double');_.$isInstance=Pnb;_=oH('java.lang.Number');_.$isInstance=Lnb;_=oH('java.lang.String');_.$isInstance=Eob;_=oH('java.lang.Throwable');_.of=ng;var vDb=(Jg(),Mg);var gwtOnLoad=gwtOnLoad=hH;fH(rH);iH('permProps',[[[lLb,mLb],[nLb,'gecko1_8']],[[lLb,mLb],[nLb,'gecko1_8']],[[lLb,mLb],[nLb,'safari']]]);if (SpreadsheetApi) SpreadsheetApi.onScriptLoad(gwtOnLoad);})();

let Spreadsheet = Vaadin.Spreadsheet.Api;

export { Spreadsheet };
