var game;
window.onload = function()
{
    game=new Phaser.Game(1500,750,Phaser.AUTO,"ph_game");
	
    game.state.add("StateMain",StateMain);
    game.state.start("StateMain");
}