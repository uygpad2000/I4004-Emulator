html = document.getElementsByTagName("html")[0];
AttachAttributes(html,["lang","en-us"]);
meta = GenerateElement("meta","head");
AttachAttributes(meta,["charset","utf-8"]);
style = GenerateElement("link","head");
AttachAttributes(style,["rel","stylesheet"]);
AttachAttributes(style,["type","text/css"]);
AttachAttributes(style,["href",".\\Style\\page.css"]);
Script = GenerateElement("script","body");
AttachAttributes(Script,["type","text/javascript"]);
AttachAttributes(Script,["src",".\\Script\\4004.js"]);
title = GenerateElement("title","head");
title.textContent = "I4004 Emulator";
h1 = GenerateElement("h1","body");
h1.textContent = "Javascript Intel 4004 Emulator";
AttachAttributes(h1,["onclick","pageinfo()"])
b0 = GenerateElement("button","body");
b0.textContent = "Power On";
Screen = GenerateElement("canvas");

reg0 = GenerateElement("div","body")
reg0.textContent = "R0:"+r0.join("")
reg1 = GenerateElement("div","body")
reg1.textContent = "R1:"+r1.join("")

function pageinfo(){
    window.alert("Intel 4004 Emulator Made by Uygpad2000 :)");
}