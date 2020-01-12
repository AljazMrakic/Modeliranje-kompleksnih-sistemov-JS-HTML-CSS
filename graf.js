class Graf{
    constructor(idCanvas, maxGrafX, maxGrafY){
        this.canvas = document.getElementById(idCanvas);
        this.ctx = this.canvas.getContext("2d");
        this.ctx.strokeStyle = "#ff0000";
        this.x = new Array();
        this.y = new Array();
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.maxGrafX = maxGrafX;
        this.maxGrafY = maxGrafY;

        for(var i = 0; i < this.maxGrafX + 1; i++){
            this.x[i] = i;
        }
    }

    addValueOrDeleteAndAdd(numOfAgents){
        if(this.y.length == this.maxGrafX + 1){
            this.y.splice(0, 1);
            this.y[this.maxGrafX] = numOfAgents;
        }
        else{
            this.y.push(numOfAgents);
        }
    }

    draw(numOfAgents){
        this.addValueOrDeleteAndAdd(numOfAgents);
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        this.ctx.beginPath();

        for(var i = 0; i < this.y.length; i++){
            this.ctx.lineTo(this.x[i] / this.maxGrafX * this.canvasWidth, (this.canvasHeight - (this.y[i] / this.maxGrafY) * this.canvasHeight)); 
        }

        this.ctx.stroke();

        this.ctx.font = "10px Arial";
        this.ctx.fillText(this.maxGrafY, 5, 10);
        this.ctx.fillText("0", 5, this.canvasHeight - 5);
    }
}