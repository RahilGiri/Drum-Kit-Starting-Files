var noOFElements = document.querySelectorAll(".drum").length;
for (var i = 0;i < noOFElements;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
{ //detecting button press
    var buttonInnerHtml = this.innerHTML;
    // this.style.color = "white";
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
    // document.querySelectorAll(".drum")
   makeSound(buttonInnerHtml);
   buttonAnimation(buttonInnerHtml);
})
}
//detecting keyboar press 
document.addEventListener("keypress",function(event) {
   makeSound(event.key);
   buttonAnimation(event.key);
});
function makeSound(key)
{
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        default:
            break;
    }

}
function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey); 
   activeButton.classList.add("pressed"); 
   setTimeout(function() {
    activeButton.classList.remove("pressed");
   },100);
}