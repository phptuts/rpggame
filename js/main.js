var game;
window.onload = function()
{
    game=new Phaser.Game(1500,780,Phaser.AUTO,"ph_game");
	
    game.state.add("StateMain",StateMain);
    game.state.start("StateMain");
}