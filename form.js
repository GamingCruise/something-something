class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html("car racing game?");
        title.position(350,100)
        var input=createInput("name");
        input.position(350,260);
        var button=createButton('play');
        button.position(350,300);
        var greetings=createElement('h3');
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greetings.html("hello whats up!"+name);
            greetings.position(350,260)
        })
    }
}