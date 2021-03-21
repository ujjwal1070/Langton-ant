class Table {
  constructor(resolution) {
    this.setResolution(resolution);
  }

  draw() {
    noStroke();
    fill(30);
    for (let x = 0; x < this.columns; x++) {
      for (let y = 0; y < this.rows; y++) {
        if (this.square[x][y])
          rect(
            x * this.resolution,
            y * this.resolution,
            this.resolution,
            this.resolution
          );
      }
    }
  }

  squareState(x, y) {
    if (!this.exist(x, y)) return false;
    else return this.square[x][y] == true;
  }

  flipSquareState(x, y) {
    if (this.exist(x, y)) this.square[x][y] = !this.square[x][y];
  }

  exist(x, y) {
    if (this.square[x] === undefined) return false;
    else if (this.square[x][y] === undefined) return false;
    else return true;
  }

  fillWith(val) {
    for (let x = 0; x < this.columns; x++) {
      for (let y = 0; y < this.rows; y++) {
        this.square[x][y] = val;
      }
    }
  }

  setResolution(resolution) {
    this.columns = floor(width / resolution);
    this.rows = floor(height / resolution);
    this.resolution = resolution;

    // create a new empty table array with the new resolution
    this.square = [];
    for (let i = 0; i < this.columns; i++) {
      this.square[i] = [];
    }
    this.fillWith(false);
  }

  setBlock(X, Y) {
    let x = Math.round(X / this.resolution);
    let y = Math.round(Y / this.resolution);
    this.square[x][y] = true;
    // console.log(`${x} and ${y}`);
  }
}
