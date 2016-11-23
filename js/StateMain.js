var StateMain={    
    
   preload:function()
    {
        game.load.tilemap('city', 'js/board.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('rogue_city', 'image/roguelikeCity_transparent.png');
        game.load.image('tiles', 'image/RPGpack_sheet.png');
    },
    
    create:function()
    {
        map = game.add.tilemap('city');

    },
    
    update:function()
    {       
        
    }    
    
}