class mainScene {

    preload() {
        this.load.image('player', 'assets/player.png')
        this.load.image('coin', 'assets/coin.png')
    }

    create() {
        this.player = this.physics.add.sprite(100, 100, 'player')
        this.coin = this.physics.add.sprite(300, 300, 'coin')

        // adding score
        this.score = 0;
        let style = {font: '20px Arial', fill: '#fff' };
        this.scoreText = this.add.text(20,20, 'Score: ' + this.score, style);

        // taking arrows as inputs
        this.arrow = this.input.keyboard.createCursorKeys();
    }

    update()  {
        //if there is an overlap of player and coin, call the hit method
        if (this.physics.overlap(this.player, this.coin)) {
            this.hit();
          }

        // move player left or right 
        if (this.arrow.right.isDown) {
            this.player.x += 3;
        }
        else if (this.arrow.left.isDown) {
            this.player.x -=3;
        }

        //move player up or down
        if(this.arrow.up.isDown) {
            this.player.y -=3;
        }
        else if(this.arrow.down.isDown) {
            this.player.y +=3;
        }

    }

    hit() {
        //assigns the coin a new position
        this.coin.x = Phaser.Math.Between(100, 600);
        this.coin.y = Phaser.Math.Between(100, 300);

        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);
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