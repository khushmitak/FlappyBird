class mainScene {

    preload() {
        this.load.image('player', 'assets/player.png')
        this.load.image('coin', 'assets/coin.png')
    }

    create() {
        this.player = this.physics.add.sprite(100, 100, 'player')
        this.player = this.physics.add.sprite(300, 300, 'coin')

        this.score = 0;
        let style = {font: '20px Arial', fill: '#fff' };
        this.scoreText = this.add.text(20,20, 'Score: ' + this.score, style);
    }

    update()  {

    }

}


new Phaser.Game ({
    width: window.innerWidth, 
    height: window.innerHeight,
    backgroundColor: '#3498db',
    scene: mainScene,
    physics: { default: 'arcade' },
    parent: 'game',
});