class Plyer{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
        this.health=200;
    }

    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",(data=>{
            playerCount= data.val();
        }))
    }

    updateCount(count){
        datatbase.ref('/').updae({
            playerCount:count
        });
    }

  update(){
      var playerIndex="players/player"+ this.index
      database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
      })
  }
}
