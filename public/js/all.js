/**
 * <ul>
 * <li>Project: UkeGeeks' Scriptasaurus</li>
 * <li>Version: 1.4.3</li>
 * <li>Homepage: http://ukegeeks.com</li>
 * <li>Project Repository: https://github.com/buzcarter/UkeGeeks</li>
 * <li>Author: Buz Carter</li>
 * <li>Contact: buz@ukegeeks.com</li>
 * <li>Copyright: Copyright 2010-2014 Buz Carter.</li>
 * <li>License GNU General Public License (http://www.gnu.org/licenses/gpl.html)</li>
 * </ul>
 *
 * <h3>Overview</h3>
 * <p>Reads marked-up music (lyrics + chords) extracting all of the chords used;
 * Generates a chord diagrams using HTML5 &lt;canvas&gt; and rewrites the music with
 * standard HTML wrapping the chords.</p>
 *
 * @module ukeGeeks
 * @main ukeGeeks
 */
var ukeGeeks = window.ukeGeeks || {};
;ukeGeeks.definitions=function(){var a={},g=[],d=[],b=[],f=0,e=[];a.instrument={sopranoUke:0,baritoneUke:5};a.addInstrument=function(c){"object"===typeof c&&(c=c.join("\n"));b.push(c)};a.useInstrument=function(c){c=0<arguments.length?c:a.instrument.sopranoUke;f=parseInt(c,10);0<f&&(e=ukeGeeks.transpose.retune(f));a.setChords(ukeGeeks.chordImport.runBlock(b[0]).chords)};a.get=function(c){var b,a,d;for(b=0;b<g.length;b++)if(c==g[b].name)return g[b];if(1>f)return l(c);d=n(c);for(b in e)if(d==e[b].original&&
(a=l(e[b].transposed)))return c=new ukeGeeks.data.expandedChord(c),c.dots=a.dots,c.muted=a.muted,c;return null};var c={"A#":"Bb",Db:"C#","D#":"Eb",Gb:"F#",Ab:"G#"},n=function(b){var a=b.substr(0,2);return c[a]?c[a]+b.substr(2):b},l=function(c){var b,a=n(c);for(b=0;b<d.length;b++)if(a==d[b].name)return c=new ukeGeeks.data.expandedChord(c),c.dots=d[b].dots,c.muted=d[b].muted,c;return null};a.add=function(c){if(c.length)for(var b=0;b<c.length;b++)g.push(c[b]);return g.length};a.replace=function(c){g=
[];return a.add(c)};a.getChords=function(){return d};a.setChords=function(c){d=c};return a}();
ukeGeeks.settings=function(){var a={fonts:{dot:"9pt Arial Black,Arial",text:"bold 14pt Arial",fret:"bold 13pt Arial"},colors:{fretLines:"#003366",dots:"#ff0000",dotText:"#ffffff",text:"#000000",fretText:"#4a4a4a",xStroke:"#444444"},fretBox:{showText:!0,height:150,width:100,fretSpace:20,stringSpace:20,dotRadius:8,lineWidth:1.6,topLeftPos:{x:22,y:25},xWidth:9,xStroke:1.6*1.6},inlineFretBox:{showText:!1,height:50,width:40,fretSpace:9,stringSpace:7,dotRadius:3,lineWidth:1,topLeftPos:{x:10,y:2},xWidth:0.7*
7,xStroke:1.4,fonts:{dot:"8pt Arial",text:"8pt Arial",fret:"8pt Arial"}},ids:{songText:"ukeSongText",canvas:"ukeChordsCanvas",container:"ukeSongContainer"},wrapClasses:{wrap:"ugs-song-wrap",diagrams:"ugs-diagrams-wrap",text:"ugs-source-wrap"},opts:{columnsEnabled:!0,retainBrackets:!1,ignoreCommonChords:!1,sortAlphabetical:!1,autoFixOverlaps:!0},inlineDiagrams:!1,numFrets:5,tuning:["G","C","E","A"]};a.defaultInstrument=ukeGeeks.definitions.instrument.sopranoUke;a.tabs={lineSpacing:16,noteSpacing:14,
lineWidth:1,lineColor:"#999999",labelWidth:12,labelFont:"10pt Arial, Helvetica, Verdana, Geneva, sans-serif",dotColor:"#eaeaea",dotRadius:10,textFont:"bold 12pt Arial, Helvetica, Verdana, Geneva, sans-serif",textColor:"#000000",bottomPadding:10};a.environment={isIe:!1};a.commonChords="A B C D E F G Am".split(" ");var g=function(b,a){if("number"==typeof b)return b*a;if("object"==typeof b)for(var e in b)b[e]=g(b[e],a);return b},d=/\b(\d+)(pt|px)\b/;a.scale=function(b){if(1!=b){for(var a in this.fonts){var e=
this.fonts,c=a,n;n=this.fonts[a];var l=b,m=n.match(d);2>m.length||(l*=parseInt(m[1],10),n=n.replace(d,l+m[2]));e[c]=n}this.fretBox=g(this.fretBox,b)}};return a}();
ukeGeeks.data=function(){return{expandedChord:function(a){this.name=a;this.dots=[];this.muted=[]},song:function(){this.body=this.key=this.st2=this.st=this.artist=this.album=this.title="";this.hasChords=!1;this.ugsMeta=[];this.defs=[];this.chords=[]},dot:function(a,g,d){this.string=a;this.fret=g;this.finger=d},instrument:function(a,g,d,b){this.key=a;this.name=g;this.tuning=d;this.chords=b},htmlHandles:function(a,g,d){this.wrap=a;this.diagrams=g;this.text=d}}}();
ukeGeeks.toolsLite=function(){var a={},g=/\s{2,}/g,d=/^\s+|\s+$/g;a.addClass=function(b,f){a.hasClass(b,f)||(b.className+=" "+f)};a.hasClass=function(b,a){return b.className.match(RegExp("(\\s|^)"+a+"(\\s|$)"))};a.removeClass=function(b,d){a.hasClass(b,d)&&(b.className=b.className.replace(RegExp("(\\s|^)"+d+"(\\s|$)")," "))};a.setClass=function(b,d,e){e?a.addClass(b,d):a.removeClass(b,d)};a.trim=function(b){return b.replace(d,"")};a.pack=function(b){return b.replace(g," ").replace(d,"")};a.getElementsByClass=
function(b,a,d){var c;a||(a=document);if(a.getElementsByClassName)return a.getElementsByClassName(b);var n=[];d||(d="*");a=a.getElementsByTagName(d);d=a.length;var g=RegExp("(^|\\s)"+b+"(\\s|$)");for(c=b=0;b<d;b++)g.test(a[b].className)&&(n[c]=a[b],c++);return n};return a}();
ukeGeeks.chordImport=function(){var a={},g=function(c,b){this.define=c;this.adds=b},d=/\s*{?define\s*:(.*?)(}|add:)/i,b=/(add:.*?)(}|add:)/i,f=/(\S+)\s+/,e=/\s+frets\s+([\dx]{4}|(([\dx]{1,2}\s){3})[\dx]{1,2})/i,c=/\s+fingers\s+((\d\s+){3}\d|\d{4})/i,n=/add:\s*string\s*(\S+)\s+fret\s+(\d+)\sfinger\s(\d)/i,l=/{\s*instrument\s*:\s*(.*?)\s*}/i,m=/{\s*tuning\s*:\s*(\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s*}/i,k=/(\d{1,2}|x)/gi,p=/(.)/g,r=function(c){var a=ukeGeeks.toolsLite.pack(c);if(1<a.length&&"#"!=a[0]&&(c=
a.match(d))&&1<c.length){c=c[1];for(var e=[],m=a.match(b);m&&1<m.length;)e.push(m[1]),a=a.replace(m[1],""),m=a.match(b);return new g(c,e)}return null},h=function(b,a){var d=[],m=[];var g=b.match(e);if(g)for(var g=4==g[1].length?g[1].match(p):g[1].match(k),h=0;h<g.length;h++){var l="x"==g[h]||"X"==g[h];d[h]=l?0:parseInt(g[h],10);m[h]=l}g=(g=b.match(f))?g[1]:null;(h=b.match(c))?(h=h[1],4==h.length&&(h=h.replace(p,"$1 ")),h=h.split(" ")):h=[];if(null===g||"frets"==g)return s.push('bad "define" instruction: chord name not found: '+
b),null;if(null===d)return s.push('bad "define" instruction: frets not found: '+b),null;for(var g=new ukeGeeks.data.expandedChord(g),l=h,h=[],r=ukeGeeks.settings.tuning,A=0;A<r.length;A++){var B=parseInt(d[A],10);0<B&&h.push(new ukeGeeks.data.dot(A,B,l.length-1>=A?parseInt(l[A],10):0))}if(a&&!(1>a.length))for(var C in a)(d=a[C].match(n))&&2<d.length&&h.push(new ukeGeeks.data.dot(parseInt(d[1],10)-1,parseInt(d[2],10),parseInt(d[3],10)));g.dots=h;g.muted=m;return g},s=[];a.runLine=function(c){return(c=
r(c))?h(c.define,c.adds):null};a.runBlock=function(c){var b=c.split("\n");2>b.length&&(b=c.split("{"));var a=b,b=[],d;for(d in a){var e=r(a[d]);e&&b.push(e)}d=(d=c.match(l))?ukeGeeks.toolsLite.pack(d[1]):null;c=(c=c.match(m))?[c[1],c[2],c[3],c[4]]:null;var a=ukeGeeks.data.instrument,e=d.replace(" ","-"),f;for(f in c)e+="-"+c[f];f=e.toLowerCase();var e=[],k=null,g;for(g in b)(k=h(b[g].define,b[g].adds))&&e.push(k);return new a(f,d,c,e)};return a}();
ukeGeeks.transpose=function(){var a={},g=/^([A-G][#b]?)(.*)/,d={A:0,"A#":1,Bb:1,B:2,C:3,"C#":4,Db:4,D:5,"D#":6,Eb:6,E:7,F:8,"F#":9,Gb:9,G:10,"G#":11,Ab:11};a.shift=function(b,a){var e;e=b.match(g);e=!e||1>e.length?null:{tone:parseInt(d[e[1]],10),prefix:e[1],suffix:e[2]};if(null===e)return null;var c=(e.tone+a)%12;0>c&&(c+=12);for(var n in d)if(c==d[n])return n+e.suffix;return null};a.retune=function(){var b=0<arguments.length?arguments[0]:0,d=ukeGeeks.definitions.getChords(),e=[];if(0===b)for(var c in d)e.push({original:d[c].name,
transposed:d[c].name});else for(var g in d)e.push({original:d[g].name,transposed:a.shift(d[g].name,b)});return e};a.shiftChords=function(b,d){for(var e=[],c=0;c<b.length;c++)e.push(a.shift(b[c],d));return e};return a}();ukeGeeks.definitions.sopranoUkuleleGcea="{instrument: Soprano Ukulele};{tuning: G C E A};{define: A frets 2 1 0 0 fingers 1 2 0 0};{define: Am frets 2 0 0 0 fingers 1 0 0 0};{define: A7 frets 0 1 0 0 fingers 0 1 0 0};{define: A7sus4 frets 0 2 0 0 fingers 0 2 0 0};{define: Am7 frets 0 0 0 0};{define: Adim frets 2 3 2 3 fingers 1 3 2 4};{define: Amaj7 frets 1 1 0 0 fingers 1 2 0 0};{define: A6 frets 2 4 2 4 fingers 1 3 2 4};{define: Asus2 frets 2 4 5 2 fingers 2 3 4 1};{define: Asus4 frets 2 2 0 0 fingers 1 2 0 0};{define: Aaug frets 2 1 1 4 fingers 2 1 1 4 add: string 1 fret 1 finger 1 add: string 4 fret 1 finger 1};{define: Am6 frets 2 4 2 3 fingers 1 3 1 2 add: string 2 fret 2 finger 1};{define: A9 frets 0 1 0 2 fingers 0 1 0 2};{define: Bb frets 3 2 1 1 fingers 3 2 1 1};{define: Bbm frets 3 1 1 1 fingers 3 1 1 1 add: string 1 fret 1 finger 1};{define: Bb7 frets 1 2 1 1 fingers 1 2 1 1 add: string 2 fret 1 finger 1};{define: Bb7sus4 frets 1 3 1 1 fingers 1 3 1 1 add: string 2 fret 1 finger 1};{define: Bbm7 frets 1 1 1 1 fingers 1 1 1 1};{define: Bbdim frets 0 1 0 1 fingers 0 1 0 2};{define: Bbmaj7 frets 2 2 1 1 fingers 2 2 1 1};{define: Bb6 frets 0 2 1 1 fingers 0 2 1 1};{define: Bbm6 frets 0 1 1 1 fingers 0 1 1 1};{define: Bbsus2 frets 3 0 1 1 fingers 3 0 1 1};{define: Bbsus4 frets 3 3 1 1 fingers 3 3 1 1};{define: Bbaug frets 3 2 2 5 fingers 2 1 1 4 add: string 1 fret 2 finger 1 add: string 4 fret 2 finger 1};{define: Bb9 frets 1 2 1 3 fingers 2 1 4 3};{define: Bbmaj7 frets 2 2 1 1 fingers 2 2 1 1};{define: Bbm7-5 frets 1 1 0 1 fingers 1 2 0 3};{define: B frets 4 3 2 2 fingers 3 2 1 1};{define: Bm frets 4 2 2 2 fingers 3 1 1 1 add: string 1 fret 2 finger 1};{define: Bm6 frets 1 2 2 2 fingers 1 2 3 4};{define: B7 frets 2 3 2 2 fingers 1 2 1 1 add: string 2 fret 2 finger 1};{define: B7sus4 frets 2 4 2 2 fingers 1 3 1 1 add: string 2 fret 2 finger 1};{define: Bm7 frets 2 2 2 2 fingers 1 1 1 1};{define: Bdim frets 1 2 1 2 fingers 1 3 2 4};{define: Bmaj7 frets 3 3 2 2 fingers 2 2 1 1};{define: B6 frets 1 3 2 2 fingers 1 4 2 3};{define: Bsus2 frets 5 1 2 2 fingers 4 1 3 2};{define: Bsus4 frets 4 4 2 2 fingers 2 2 1 1};{define: Baug frets 0 3 3 2 fingers 0 2 2 1};{define: B9 frets 2 3 2 4};{define: C frets 0 0 0 3 fingers 0 0 0 3};{define: Cm frets 0 3 3 3 fingers 0 1 2 3};{define: C7 frets 0 0 0 1 fingers 0 0 0 1};{define: C7sus4 frets 0 0 1 1 fingers 0 0 1 1};{define: Cm7 frets 3 3 3 3 fingers 1 1 1 1};{define: Cdim frets 2 3 2 3 fingers 1 3 2 4};{define: Cmaj7 frets 0 0 0 2 fingers 0 0 0 1};{define: C6 frets 0 0 0 0};{define: Cm6 frets 0 3 5 5 fingers 0 1 3 1};{define: Csus2 frets 0 2 3 3 fingers 0 1 2 2};{define: Csus4 frets 0 0 1 3 fingers 0 0 1 3};{define: Caug frets 1 0 0 3 fingers 1 0 0 4};{define: C9 frets 0 2 0 1 fingers 0 2 0 1};{define: C# frets 1 1 1 4 fingers 1 1 1 4 add: string 4 fret 1 finger 1};{define: C#m frets 1 4 4 4 fingers 1 2 3 3};{define: C#7 frets 1 1 1 2 fingers 1 1 1 2 add: string 4 fret 1 finger 1};{define: C#7sus4 frets 1 1 2 2 fingers 1 1 2 3};{define: C#m7 frets 1 4 4 2 fingers 1 3 3 2};{define: C#dim frets 0 1 0 1 fingers 0 1 0 2};{define: C#maj7 frets 1 1 1 3 fingers 1 1 1 3 add: string 4 fret 1 finger 1};{define: C#6 frets 1 1 1 1 fingers 1 1 1 1};{define: C#m6 frets 1 1 0 1 fingers 1 2 0 3};{define: C#sus2 frets 1 3 4 4 fingers 1 2 3 3};{define: C#sus4 frets 1 1 2 4 fingers 1 1 2 4};{define: C#aug frets 2 1 1 4 fingers 2 1 1 4 add: string 1 fret 1 finger 1 add: string 4 fret 1 finger 1};{define: C#9 frets 1 3 1 2};{define: D frets 2 2 2 0 fingers 1 1 1 0};{define: Dm frets 2 2 1 0 fingers 2 2 1 0};{define: Dm6 frets 0 2 1 2 fingers 0 2 1 3};{define: D7 frets 2 2 2 3 fingers 1 1 1 2 add: string 4 fret 2 finger 1};{define: D7sus4 frets 2 2 3 3 fingers 1 1 2 3};{define: Dm7 frets 2 2 1 3 fingers 2 2 1 3};{define: Ddim frets 1 2 1 2 fingers 1 3 2 4};{define: Dmaj7 frets 2 2 2 4 fingers 1 1 1 2 add: string 4 fret 2 finger 1};{define: D6 frets 2 2 2 2 fingers 2 2 2 2};{define: Dsus2 frets 2 2 0 0 fingers 1 2 0 0};{define: Dsus4 frets 0 2 3 0 fingers 0 1 2 0};{define: Daug frets 3 2 2 5 fingers 2 1 1 4 add: string 1 fret 2 finger 1 add: string 4 fret 2 finger 1};{define: D9 frets 2 4 2 3};{define: Eb frets 0 3 3 1 fingers 0 2 2 1};{define: Ebm frets 3 3 2 1 fingers 3 3 2 1};{define: Eb7 frets 3 3 3 4 fingers 1 1 1 2 add: string 4 fret 3 finger 1};{define: Eb7sus4 frets 3 3 4 4 fingers 1 1 2 3};{define: Ebm7 frets 3 3 2 4 fingers 2 2 1 4};{define: Ebdim frets 2 3 2 3 fingers 1 3 2 4};{define: Ebmaj7 frets 3 3 3 5 fingers 1 1 1 2 add: string 4 fret 3 finger 1};{define: Eb6 frets 3 3 3 3 fingers 1 1 1 1};{define: Ebm6 frets 3 3 2 3 fingers 2 3 1 4};{define: Ebsus2 frets 3 3 1 1 fingers 2 2 1 1};{define: Ebsus4 frets 1 3 4 1 fingers 2 3 4 1};{define: Ebaug frets 0 3 3 2 fingers 0 2 2 1};{define: Eb9 frets 0 1 1 1};{define: E frets 4 4 4 2 fingers 2 3 4 1};{define: Em frets 0 4 3 2 fingers 0 3 2 1};{define: E7 frets 1 2 0 2 fingers 1 2 0 3};{define: E7sus4 frets 2 2 0 2 fingers 2 3 0 4};{define: Em6 frets 4 4 3 4 fingers 2 3 1 4};{define: Em7 frets 0 2 0 2 fingers 0 1 0 2};{define: Edim frets 0 1 0 1 fingers 0 1 0 2};{define: Emaj7 frets 1 3 0 2 fingers 1 3 0 2};{define: E6 frets 4 4 4 4 fingers 1 1 1 1};{define: Esus2 frets 4 4 2 2 fingers 3 3 1 1};{define: Esus4 frets 2 4 0 2 fingers 2 4 0 1};{define: Eaug frets 1 0 0 3 fingers 1 0 0 4};{define: E9 frets 1 2 2 2};{define: F frets 2 0 1 0 fingers 2 0 1 0};{define: Fm frets 1 0 1 3 fingers 1 0 2 4};{define: F7 frets 2 3 1 0 fingers 2 3 1 0};{define: F7sus4 frets 3 3 1 3 fingers 2 3 1 4};{define: Fm6 frets 1 2 1 3 fingers 1 2 1 3 add: string 2 fret 1 finger 1 add: string 4 fret 1 finger 1};{define: Fm7 frets 1 3 1 3 fingers 1 3 2 4};{define: Fdim frets 1 2 1 2 fingers 1 3 2 4};{define: Fmaj7 frets 5 5 0 0 fingers 1 2 0 0};{define: F6 frets 2 2 1 3 fingers 2 2 1 4};{define: Fsus2 frets 0 0 1 3 fingers 0 0 1 3};{define: Fsus4 frets 3 0 1 3 fingers 3 0 1 4};{define: F6sus2 frets 0 0 1 3 fingers 0 0 1 3};{define: F6sus4 frets 3 0 1 1 fingers 3 0 1 1};{define: F6aug frets 2 1 1 4 fingers 2 1 1 4 add: string 1 fret 1 finger 1 add: string 4 fret 1 finger 1};{define: F9 frets 2 3 3 3};{define: Faug frets 2 1 1 0 fingers 3 1 2 0};{define: F# frets 3 1 2 1 fingers 3 1 2 1 add: string 1 fret 1 finger 1 add: string 3 fret 1 finger 1};{define: F#m frets 2 1 2 0 fingers 2 1 3 0};{define: F#7 frets 3 4 2 4 fingers 2 3 1 4};{define: F#7sus4 frets 4 4 2 4 fingers 2 3 1 4};{define: F#m7 frets 2 4 2 4 fingers 1 3 2 4};{define: F#dim frets 2 3 2 3 fingers 1 3 2 4};{define: F#maj7 frets 3 5 2 4 fingers 2 4 1 3};{define: F#m6 frets 2 1 2 4 fingers 2 1 3 4};{define: F#6 frets 3 3 2 4 fingers 2 2 1 4};{define: F#sus2 frets 1 1 2 4 fingers 1 1 2 4};{define: F#sus4 frets 4 1 2 2 fingers 4 1 2 3};{define: F#aug frets 3 2 2 5 fingers 2 1 1 4 add: string 1 fret 2 finger 1 add: string 4 fret 2 finger 1};{define: F#9 frets 1 1 0 1};{define: G frets 0 2 3 2 fingers 0 1 3 2};{define: Gm frets 0 2 3 1 fingers 0 2 3 1};{define: Gm6 frets 0 2 0 1 fingers 0 2 0 1};{define: G7 frets 0 2 1 2 fingers 0 2 1 3};{define: G7sus4 frets 0 2 1 3 fingers 0 2 1 4};{define: Gm7 frets 0 2 1 1 fingers 0 2 1 1};{define: Gdim frets 0 1 0 1 fingers 0 1 0 2};{define: Gmaj7 frets 0 2 2 2 fingers 0 1 2 3};{define: G6 frets 0 2 0 2 fingers 0 1 0 2};{define: Gsus2 frets 0 2 3 0 fingers 0 1 2 0};{define: Gsus4 frets 0 2 3 3 fingers 0 1 2 3};{define: Gaug frets 0 3 3 2 fingers 0 2 2 1};{define: Gsus4 frets 0 2 3 3};{define: G9 frets 2 2 1 2};{define: G# frets 5 3 4 3 fingers 3 1 2 1 add: string 1 fret 3 finger 1 add: string 3 fret 3 finger 1};{define: G#m frets 1 3 4 2 fingers 1 3 4 2};{define: G#7 frets 1 3 2 3 fingers 1 3 2 4};{define: G#7sus4 frets 1 3 2 4 fingers 1 3 2 4};{define: G#m7 frets 1 3 2 2 fingers 1 4 2 3};{define: G#dim frets 1 2 1 2 fingers 1 3 2 4};{define: G#maj7 frets 1 3 3 3 fingers 1 2 2 3};{define: G#6 frets 1 3 1 3 fingers 1 3 2 4};{define: G#m6 frets 1 3 1 2 fingers 1 3 1 2 add: string 2 fret 1 finger 1 add: string 4 fret 1 finger 1};{define: G#sus2 frets 1 3 4 1 fingers 2 3 4 1};{define: G#sus4 frets 1 3 4 4 fingers 1 2 3 3};{define: G#aug frets 1 0 0 3 fingers 1 0 0 4};{define: G#9 frets 1 0 2 1 fingers 1 0 3 2};{define: C-F frets 2 0 1 3};{define: D/A frets 2 2 2 0};{define: Dm/C frets 2 2 1 3};{define: Fm7/C frets 1 3 1 3};{define: G/B frets 0 2 3 2};{define: G/F# frets 0 2 2 2};{define: G/F frets 0 2 1 2};{define: G7/B frets 0 2 1 2}".split(";");
ukeGeeks.canvasTools=function(){return{drawDot:function(a,g,d,b){a.beginPath();a.arc(g.x,g.y,d,0,2*Math.PI,!0);a.closePath();a.fillStyle=b;a.fill()},drawText:function(a,g,d,b,f,e){a.fillText&&(a.font=b,a.textAlign=e||"center",a.fillStyle=f,a.fillText(d,g.x,g.y))},addCanvas:function(a,g,d){var b=document.createElement("canvas");if(!b)return null;ukeGeeks.settings.environment.isIe&&(b=G_vmlCanvasManager.initElement(b));a.appendChild(b);b.width=g;b.height=d;return(a=b.getContext("2d"))?a:null}}}();
ukeGeeks.chordBrush=function(){return{init:function(){},plot:function(a,g,d,b,f){var e,c;if(a=ukeGeeks.canvasTools.addCanvas(a,d.width,d.height)){b||(b=ukeGeeks.settings.fonts);f||(f=ukeGeeks.settings.colors);var n=d.topLeftPos.x,l=d.topLeftPos.y,m=f.fretLines,k;e=d.lineWidth/2;c=ukeGeeks.settings.numFrets*d.fretSpace;var p=3*d.stringSpace;a.beginPath();for(k=1;3>k;k++){var r=n+k*d.stringSpace+e;a.moveTo(r,l+e);a.lineTo(r,l+c+e)}for(k=1;k<ukeGeeks.settings.numFrets;k++)r=l+k*d.fretSpace+e,a.moveTo(n+
e,r),a.lineTo(n+p+e,r);a.rect(n+e,l+e,p,c);a.strokeStyle=m;a.lineWidth=d.lineWidth;a.stroke();a.closePath();m=l+d.dotRadius;k=(d.fretSpace-2*d.dotRadius)/2;e=g.dots;c=-1;p=300;for(r=0;r<e.length;r++)e[r].fret>c&&(c=e[r].fret),e[r].fret<p&&(p=e[r].fret);e=300>p?p:0;c=0<c?c:0;p=5>=c?1:c-4;for(r=0;r<g.dots.length;r++){var h={x:n+g.dots[r].string*d.stringSpace,y:k+m+(g.dots[r].fret-p)*d.fretSpace};ukeGeeks.canvasTools.drawDot(a,h,d.dotRadius,f.dots);0<g.dots[r].finger&&d.showText&&4<d.dotRadius&&ukeGeeks.canvasTools.drawText(a,
{x:h.x,y:h.y+5},g.dots[r].finger,b.dot,f.dotText)}1!=p&&(m={x:0,y:l+0.96*d.fretSpace*(5-(c-e))},ukeGeeks.canvasTools.drawText(a,m,e,b.fret,f.fretText,"left"),1<c-e&&(m.y=l+4.8*d.fretSpace,ukeGeeks.canvasTools.drawText(a,m,c,b.fret,f.fretText,"left")));d.showText&&ukeGeeks.canvasTools.drawText(a,{x:n+1.5*d.stringSpace,y:l-5},g.name,b.text,f.text);g=g.muted;f=f.xStroke;b=d.topLeftPos.x+d.lineWidth/2;n=d.topLeftPos.y+d.lineWidth/4;for(l=0;l<g.length;l++)g[l]&&(m=a,k=b+l*d.stringSpace,e=n,c=d,p=f,k-=
c.xWidth/2,e-=c.xWidth/2,m.beginPath(),m.moveTo(k,e),m.lineTo(k+c.xWidth,e+c.xWidth),m.moveTo(k,e+c.xWidth),m.lineTo(k+c.xWidth,e),m.strokeStyle=p,m.lineWidth=c.xStroke,m.stroke(),m.closePath())}}}};
ukeGeeks.chordParser=function(){var a={},g=[];a.init=function(){};a.parse=function(a){var b,f,e=a.match(/\[(.+?)]/img);if(e){var c=[],n;for(b=0;b<e.length;b++){n=!1;for(f=0;f<c.length;f++)if(c[f]==e[b]){n=!0;break}n||c.push(e[b])}for(f in c)c[f]=c[f].replace("[","").replace("]","");g=c}else g=[];b=g;f=ukeGeeks.settings.opts.retainBrackets?"[":" ";var e=ukeGeeks.settings.opts.retainBrackets?"]":" ",l;for(l in b)for(;a.length!=(a=a.replace("["+b[l]+"]",'<code data-chordName="'+b[l]+'"><strong>'+f+"<em>"+
b[l]+"</em>"+e+"</strong></code>")).length;);l=a;ukeGeeks.settings.inlineDiagrams?(a=/(<\/strong><\/code>)[ \t]*(<code data-chordName="[^"]*"><strong>)/ig,a=l.replace(a,'$1<span class="ugsInlineSpacer">&nbsp;</span>$2')):(a=/<\/strong><\/code>[ \t]*<code data-chordName="[^"]*"><strong>/ig,a=l.replace(a," "));return a};a.getChords=function(){return g};return a};
ukeGeeks.cpmParser=function(){var a={},g=1,d=!1,b="";a.init=function(){};a.parse=function(a){var k=new ukeGeeks.data.song;a=a.replace(/<\/?pre>/img,"").replace(/\x3c!--(.|\n)*?--\x3e/gm,"");var p;a=a.split("\n");var r=[],h=null,s,q;for(q in a)0<a[q].length&&"#"==a[q][0]||((s=f.blocks.test(a[q]))||null===h?(null!==h&&r.push(h),h=a[q],h={type:f.chorusBlock.test(h)?c.ChorusBlock:f.tabBlock.test(h)?c.TabBlock:c.TextBlock,lines:[]},s||h.lines.push(a[q])):(s=ukeGeeks.toolsLite.trim(a[q]),0<s.length&&h.lines.push(s)));
0<h.lines.length&&r.push(h);q=r;a=/\{[^}]+?:.*?\}/im;var r=/\{.+?:(.*)\}/gi,h=/\{(.+?)\s*:.*\}/gi,t;for(t in q)for(var v in q[t].lines)if(a.test(q[t].lines[v])){s=q[t].lines[v].replace(r,"$1");var y=q[t].lines[v].replace(h,"$1").toLowerCase(),y=y.replace(/\r/,""),x={type:"",lines:[]};switch(y){case "title":case "t":x.type=c.Title;break;case "artist":x.type=c.Artist;break;case "subtitle":case "st":x.type=c.Subtitle;break;case "album":x.type=c.Album;break;case "comment":case "c":x.type=c.Comment;break;
case "key":case "k":x.type=c.Key;break;case "define":x.type=c.ChordDefinition;break;case "ukegeeks-meta":x.type=c.UkeGeeksMeta;break;default:x.type="Undefined-"+y}x.lines[0]=ukeGeeks.toolsLite.trim(s);q[t].lines[v]=x}t=q;v=/\s*{\s*(column_break|colb|np|new_page)\s*}\s*/im;for(var w in t)for(var z in t[w].lines)if(v.test(t[w].lines[z]))switch(t[w].lines[z].replace(v,"$1").toLowerCase()){case "column_break":case "colb":g++;t[w].lines[z]={type:c.ColumnBreak,lines:[]};break;case "new_page":case "np":t[w].lines[z]=
{type:c.NewPage,lines:[]}}w=t;z=/\[(.+?)]/i;t=/\[(.+?)]/img;for(p in w)if(w[p].type==c.TextBlock||w[p].type==c.ChorusBlock)for(var u in w[p].lines)a=w[p].lines[u],"string"==typeof a&&(v=z.test(a),d=d||v,q=v&&1>ukeGeeks.toolsLite.trim(a.replace(t,"")).length,w[p].lines[u]={type:q?c.ChordOnlyText:v?c.ChordText:c.PlainText,lines:[a]},v&&""===b&&(v=a.match(z))&&(b=v[1]));p=w;k.body=n(p);1<g&&(k.body='<div class="'+e.ColumnWrap+" "+e.ColumnCount+g+'"><div class="'+e.Column+'">'+k.body+"</div></div>");
k.hasChords=d;u=l(p,c.Title);0<u.length&&(k.title=u[0]);u=l(p,c.Artist);0<u.length&&(k.artist=u[0]);u=l(p,c.Subtitle);0<u.length&&(k.st=u[0]);1<u.length&&(k.st2=u[1]);u=l(p,c.Album);0<u.length&&(k.album=u[0]);u=l(p,c.UkeGeeksMeta);0<u.length&&(k.ugsMeta=u);u=l(p,c.Key);0<u.length?k.key=u[0]:""!==b&&(k.key=b);u=l(p,c.ChordDefinition);if(0<u.length)for(var A in u)k.defs.push(ukeGeeks.chordImport.runLine("{define: "+u[A]+"}"));return k};var f={blocks:/\s*{\s*(start_of_tab|sot|start_of_chorus|soc|end_of_tab|eot|end_of_chorus|eoc)\s*}\s*/im,
tabBlock:/\s*{\s*(start_of_tab|sot)\s*}\s*/im,chorusBlock:/\s*{\s*(start_of_chorus|soc)\s*}\s*/im},e={Comment:"ugsComment",Tabs:"ugsTabs",Chorus:"ugsChorus",PreChords:"ugsChords",PrePlain:"ugsPlain",NoLyrics:"ugsNoLyrics",ColumnWrap:"ugsWrap",ColumnCount:"ugsColumnCount",Column:"ugsColumn",NewPage:"ugsNewPage"},c={TextBlock:1,ChorusBlock:2,TabBlock:3,Comment:101,Title:102,Subtitle:103,Album:104,ChordDefinition:105,UkeGeeksMeta:106,ColumnBreak:107,Artist:108,NewPage:109,Key:110,ChordText:201,PlainText:202,
ChordOnlyText:203,Undefined:666},n=function(a){for(var b="",d=0;d<a.length;d++)if(a[d].type==c.Comment)b+='<h6 class="'+e.Comment+'">'+a[d].lines[0]+"</h6>\n";else if(a[d].type==c.NewPage)b+='<hr class="'+e.NewPage+'" />\n';else if(a[d].type==c.ChordText||a[d].type==c.PlainText||a[d].type==c.ChordOnlyText){if(!(1>a[d].lines[0].length)){var f=a[d].type==c.PlainText?e.PrePlain:e.PreChords;a[d].type==c.ChordOnlyText&&(f+=" "+e.NoLyrics);var g=a[d].type,l=0<=d-1?a[d-1].type:c.Undefined,q=d+1<a.length?
q=a[d+1].type:c.Undefined,b=b+(l!=g?'<pre class="'+f+'">':"\n"),b=b+a[d].lines[0],b=b+(q!=g?"</pre>\n":"")}}else if(a[d].type==c.ChorusBlock)b+='<div class="'+e.Chorus+'">\n',b+=n(a[d].lines),b+="</div>\n";else if(a[d].type==c.TabBlock){var b=b+('<pre class="'+e.Tabs+'">'),t;for(t in a[d].lines)b+=a[d].lines[t]+"\n";b+="</pre>\n"}else a[d].type==c.TextBlock?b+=n(a[d].lines):a[d].type==c.ColumnBreak&&(b+='</div><div class="'+e.Column+'">');return b},l=function(a,b){var d=[],e;for(e in a)if(a[e].type==
b)d.push(a[e].lines[0]);else if(a[e].type==c.TextBlock)for(var f in a[e].lines)a[e].lines[f].type==b&&d.push(a[e].lines[f].lines[0]);return d};return a};
ukeGeeks.chordPainter=function(){var a={},g=null,d=[],b=null,f=[],e=/^(n.?\/?c.?|tacet)$/i;a.init=function(a){g=new ukeGeeks.chordBrush;g.init();b=a};a.show=function(a){b.diagrams.innerHTML="";d=[];f=[];ukeGeeks.settings.opts.sortAlphabetical&&a.sort();for(var n=0;n<a.length;n++)if(!e.test(a[n])){var l;if(l=ukeGeeks.settings.opts.ignoreCommonChords)a:{for(l=0;l<ukeGeeks.settings.commonChords.length;l++)if(a[n]==ukeGeeks.settings.commonChords[l]){l=!0;break a}l=!1}l?"function"===typeof Array.prototype.indexOf&&
-1==f.indexOf(a[n])&&f.push(a[n]):(l=ukeGeeks.definitions.get(a[n]))?g.plot(b.diagrams,l,ukeGeeks.settings.fretBox):d.push(a[n])}0<f.length&&(a=document.createElement("p"),a.className="ugsIgnoredChords",a.innerHTML="Also uses: "+f.sort().join(", "),b.diagrams.appendChild(a))};a.showInline=function(a){var d=b.text.getElementsByTagName("code");if(!(1>d.length))for(var e=0;e<a.length;e++){var f=ukeGeeks.definitions.get(a[e]);if(f)for(var k=0;k<d.length;k++)d[k].getAttribute("data-chordName")==f.name&&
g.plot(d[k],f,ukeGeeks.settings.inlineFretBox,ukeGeeks.settings.inlineFretBox.fonts)}};a.getErrors=function(){return d};a.getIgnoredChords=function(){return f};return a};
ukeGeeks.tabs=function(){var a=ukeGeeks.settings.tabs,g=function(d,b,f){if(!f)return a.noteSpacing*d[0].length+b+a.dotRadius;f=d[0].length;var e=a.dotRadius;"|"==d[0][f-1]&&(f-=1,e=0);return a.noteSpacing*f+b+e};return{init:function(){},replace:function(d){d=d.getElementsByTagName("pre");for(var b in d)if("ugsTabs"==d[b].className){var f=d[b].innerHTML;d[b].innerHTML="";var e=d[b],f=f.split("\n"),c=[],n=void 0;for(n in f){var l=ukeGeeks.toolsLite.trim(f[n]);0<l.length&&c.push(l);if(4==c.length){var m=
c,c=e,k=void 0,l=void 0,m="string"==typeof m?m.split("\n"):m;if(!(4>m.length)){if(l="G"==m[3][0])for(var k=m,p=0;4>p;p++)k[p]=k[p].substr(1);for(var k=m,p=/([0-9]+)/g,r=[],h=0;4>h;h++)r[h]=k[h].match(p);for(var k=r,p=m,r=/([0-9]{2})/g,h=/([0-9])/g,s=[],q=0;4>q;q++)s[q]=p[q].replace(r,"-*"),s[q]=s[q].replace(h,"*");p=s;r=0;h=void 0;s=/-+$/gi;for(q=0;q<m.length;q++)h=m[q].trim().replace(s,""),h.length>r&&(r=h.length);h="";for(m=0;m<r;m++)h="|"==p[0][m]?h+"|":h+("*"==p[0][m]||"*"==p[1][m]||"*"==p[2][m]||
"*"==p[3][m]?"*":"-");m=/--/g;h=h.replace(m,"- ");m=/ -/g;for(s=h;;){h=h.replace(m,"  ");if(h==s)break;s=h}for(var m=p,p=h,h=[],s="",t=q=void 0,v=void 0,y=void 0,t=0;4>t;t++)h.push([]);for(t=0;4>t;t++)for(q=y=v=0;q<r;q++)" "!=p[q]&&("*"==m[t][q]?(s=k[t][y],y++):s="|"==p[q]?"|":"-",h[t][v]=s,v++);k=h;r=l?a.labelWidth:0;m=3*a.lineSpacing+2*a.dotRadius+a.bottomPadding;c="string"==typeof c?document.getElementById(c):c;c=ukeGeeks.canvasTools.addCanvas(c,g(k,r,!1),m);p=a.dotRadius+r;m=1+a.dotRadius;r=g(k,
r,!0);s=a.lineWidth/2;h=p+s;s=m+s;c.beginPath();for(q=0;4>q;q++)c.moveTo(h,s),c.lineTo(h+r,s),s+=a.lineSpacing;c.strokeStyle=a.lineColor;c.lineWidth=a.lineWidth;c.stroke();c.closePath();a:for(s in q=void 0,h={x:0,y:m},s=void 0,k){if(3<s)break a;h.x=p;for(var x in k[s]){q=k[s][x];if("|"==q){var w=parseInt(x,10),q=c,t=x==k[s].length-1?p+r:h.x,v=m,y=a,w=w+1<k[s].length-1&&"|"==k[s][w+1]||w==k[s].length-1&&"|"==k[s][w-1],z=y.lineWidth/2;q.beginPath();q.moveTo(t+z,v);q.lineTo(t+z,v+3*y.lineSpacing);q.strokeStyle=
y.lineColor;q.lineWidth=(w?4.5:1)*y.lineWidth;q.stroke();q.closePath()}else isNaN(q)||(ukeGeeks.canvasTools.drawDot(c,h,a.dotRadius,a.dotColor),ukeGeeks.canvasTools.drawText(c,{x:h.x,y:h.y+0.5*a.dotRadius},q,a.textFont,a.textColor));h.x+=a.noteSpacing}h.y+=a.lineSpacing}if(l)for(l=ukeGeeks.settings.tuning.slice(0).reverse(),k=0;4>k;k++)ukeGeeks.canvasTools.drawText(c,{x:1,y:m+(k+0.3)*a.lineSpacing},l[k],a.labelFont,a.lineColor,"left")}c=[]}}}}}};
ukeGeeks.overlapFixer=function(){var a={},g=function(a){for(var f=a,e={top:0,left:0,right:0,width:0};f&&!isNaN(f.offsetLeft)&&!isNaN(f.offsetTop);)e.left+=f.offsetLeft-f.scrollLeft,e.top+=f.offsetTop-f.scrollTop,f=f.offsetParent;e.width=d(a);if(a=a.getElementsByTagName("em")[0])a=d(a),a>e.width&&(e.width=a+2);e.right=e.left+e.width;return e},d=function(a){return"undefined"!==typeof a.clip?a.clip.width:a.style.pixelWidth?a.style.pixelWidth:a.offsetWidth};a.Fix=function(a){var d=a.getElementsByTagName("code");
for(a=0;a<d.length;a++)d[a].style.paddingRight="0px";for(a=0;a<d.length-1;a++){var e=d[a],c=d[a+1],n=e.getElementsByTagName("strong")[0],c=c.getElementsByTagName("strong")[0];n&&c&&(n=g(n),c=g(c),n.top!=c.top||c.left>n.right||c.right<n.left?0:c.left>n.left&&c.left<n.right||c.right>n.left&&c.right<n.right)&&(n=n.right-c.left+1,e.style.paddingRight=(1>n?1:n)+"px")}};return a}();
ukeGeeks.scriptasaurus=function(){var a=[],g=function(d){var b=new ukeGeeks.cpmParser;b.init();b=b.parse(d.text.innerHTML);ukeGeeks.definitions.replace(b.defs);var f=new ukeGeeks.chordParser;f.init();d.text.innerHTML=f.parse(b.body);b.chords=f.getChords();f=new ukeGeeks.chordPainter;f.init(d);f.show(b.chords);ukeGeeks.settings.inlineDiagrams&&(ukeGeeks.toolsLite.addClass(d.wrap,"ugsInlineDiagrams"),f.showInline(b.chords));var e=new ukeGeeks.tabs;e.init();e.replace(d.text);a.push(f.getErrors());(f=
d.wrap)&&ukeGeeks.toolsLite.setClass(f,"ugsNoChords",!b.hasChords);ukeGeeks.settings.opts.autoFixOverlaps&&ukeGeeks.overlapFixer.Fix(d.text);return b};return{init:function(a){var b=ukeGeeks.definitions;ukeGeeks.settings.environment.isIe=a;b.addInstrument(b.sopranoUkuleleGcea);b.useInstrument(b.instrument.sopranoUke);ukeGeeks.settings.defaultInstrument!=b.instrument.sopranoUke&&b.useInstrument(ukeGeeks.settings.defaultInstrument)},run:function(){var d=new ukeGeeks.data.htmlHandles(document.getElementById(ukeGeeks.settings.ids.container),
document.getElementById(ukeGeeks.settings.ids.canvas),document.getElementById(ukeGeeks.settings.ids.songText));if(!(d&&d.diagrams&&d.text&&d.wrap))return null;a=[];d=g(d);var b=a[0];if(!(1>b.length)){for(var f="",e=0;e<b.length;e++)f+=0<f.length?", ":"",f+=b[e];alert("Forgive me, but I don't know the following chords: "+f)}return d},runByClasses:function(){for(var a=[],b=ukeGeeks.toolsLite.getElementsByClass(ukeGeeks.settings.wrapClasses.wrap),f=0;f<b.length;f++){var e;e=b[f];var c=ukeGeeks.toolsLite.getElementsByClass(ukeGeeks.settings.wrapClasses.diagrams,
e),n=ukeGeeks.toolsLite.getElementsByClass(ukeGeeks.settings.wrapClasses.text,e);e=void 0===c||1>c.length||void 0===n||1>n.length?null:new ukeGeeks.data.htmlHandles(e,c[0],n[0]);null!==e&&a.push(g(e))}return a},setTuningOffset:function(a){ukeGeeks.definitions.useInstrument(a)}}}();
//# sourceMappingURL=all.js.map
