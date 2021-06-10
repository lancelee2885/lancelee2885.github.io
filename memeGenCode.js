window.onload = function(){
    let form = document.getElementById("form")
    let imageCanvas = document.getElementById("memeCanvas");

    form.addEventListener("submit", function(event){
        event.preventDefault();
    
        let newMeme = document.createElement("p");
        newMeme.setAttribute("id", "meme");
        
        let imgSource = document.getElementById("imageSource").value
        
        newMeme.className = "container";
        newMeme.style.backgroundImage = "url('" + imgSource + "')";
        newMeme.style.backgroundSize = "cover";
        newMeme.style.backgroundRepeat = "no-repeat";
        newMeme.style.backgroundPosition = "center";
        newMeme.style.display = "flex";
        newMeme.style.flexDirection = "column";
        newMeme.style.height = '300px';
        newMeme.style.width = '300px';
        newMeme.style.justifyContent = "space-between";
        newMeme.style.alignItems = "center";
        

        
        let topText = document.createElement("div");
        topText.innerText = document.getElementById("topText").value;
        topText.setAttribute("id", "memeText");
        
        topText.style.color = "white";
        topText.style.fontWeight = "bold";
        topText.style.textShadow = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';

        
    
        let bottomText = document.createElement("div");
        bottomText.innerText = document.getElementById("bottomText").value;
        bottomText.setAttribute("id", "memeText");

        bottomText.style.color = "white";
        bottomText.style.fontWeight = "bold";
        bottomText.style.textShadow = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';
        

    
            
        imageCanvas.appendChild(newMeme);
        newMeme.appendChild(topText);
        newMeme.appendChild(bottomText);

        form.reset();


        
    })

    imageCanvas.addEventListener('click', function(event){
        if (event.target.tagName.toLowerCase() === 'p')  {
            event.target.remove();
        }

    })
    
    
}
