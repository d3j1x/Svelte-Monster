class Clock {
    constructor() {
      this.time = Date.now();
    }
  
    tick(){
      this.time = Date.now();
      // console.log(`tick(): ${this.time`);
    }
}
  
export default Clock;