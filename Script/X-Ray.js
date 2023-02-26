/*
    The Worst Framework for "The Best Ever Language"
*/

"Use-Strict"

function GenerateElement(TagName="",ParentNode="body") {

    var Node = document.createElement(TagName);
    var Parent = document.getElementsByTagName(ParentNode)[0];
    var Node = Parent.appendChild(Node);
    return Node;

}

function AttachAttributes(Node,Attributes=[]) {
    Node.setAttribute(Attributes[0],Attributes[1]);
}