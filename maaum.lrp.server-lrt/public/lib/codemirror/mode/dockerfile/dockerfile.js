!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../../addon/mode/simple")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../addon/mode/simple"],e):e(CodeMirror)}(function(e){"use strict";var t=["from","maintainer","run","cmd","expose","env","add","copy","entrypoint","volume","user","workdir","onbuild"],n="("+t.join("|")+")",r=new RegExp(n+"\\s*$","i"),o=new RegExp(n+"(\\s+)","i");e.defineSimpleMode("dockerfile",{start:[{regex:/#.*$/,token:"comment",next:"start"},{regex:r,token:"variable-2",next:"start"},{regex:o,token:["variable-2",null],next:"arguments"},{token:null,next:"start"}],arguments:[{regex:/#.*$/,token:"error",next:"start"},{regex:/[^#]+\\$/,token:null,next:"arguments"},{regex:/[^#]+/,token:null,next:"start"},{regex:/$/,token:null,next:"start"},{token:null,next:"start"}]}),e.defineMIME("text/x-dockerfile","dockerfile")});