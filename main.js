var images=
    ["pai.png","mãe.jpg","vovó.jpg","vovô.jpg"
];
var nomes=[
    "Ciro" , "paloma" , "Ilca" , "Tadeu"
];

var i = 0;
function update()
{
    i++;
    var numeroffamilymenberinarray = 4
    if(i > numeroffamilymenberinarray)
    {
        i=0;
    }
    var updatedimage = images[i];
    var updatedname = nomes[i];
    document.getElementById("foto1").src =updatedimage;
    document.getElementById("membrodafamilia").innerHTML = updatedname;
}