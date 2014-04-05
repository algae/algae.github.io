// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "https://dl.dropboxusercontent.com/u/6419285/1.png",
        "https://dl.dropboxusercontent.com/u/6419285/2.png",
        "https://dl.dropboxusercontent.com/u/6419285/3.png",
        "https://dl.dropboxusercontent.com/u/6419285/4.png",
        "https://dl.dropboxusercontent.com/u/6419285/5.png",
        "https://dl.dropboxusercontent.com/u/6419285/6.png",        
        "https://dl.dropboxusercontent.com/u/6419285/7.png",
        "https://dl.dropboxusercontent.com/u/6419285/8.png",
        "https://dl.dropboxusercontent.com/u/6419285/9.png",        
        "https://dl.dropboxusercontent.com/u/6419285/10.png",
        "https://dl.dropboxusercontent.com/u/6419285/11.png",
        "https://dl.dropboxusercontent.com/u/6419285/12.png",
    ];

    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
