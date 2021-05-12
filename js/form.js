class Form{
    constructor(){

    }
    display(){
    var title=createElement("h2");
    title.html("carRacing");
    title.position(130,0);
    var input=createInput("name");
    var button=createButton("play");
    input.position(490,200);
    button.position(550,250);
    button.mousePressed(function(){
    input.hide();
    button.hide();
    var name=input.value();
    playerCount+=1;
    player.update(name);
    player.updateCount(playerCount);
    var greeting=createElement('h3');
    greeting.html("hello"+name);
    greeting.position(490,200);

    })
    }
}