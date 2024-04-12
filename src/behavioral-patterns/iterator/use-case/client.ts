// The Iterator Pattern use case

class NumberWheel {
  // The concrete iterator ( iterable )

  index: number

  constructor(){
    this.index = 0
  }

  /** @returns a new number next in the wheel */
  next(){
    this.index = this.index + 1
    return (this.index * 2) % 11
  }
}

// Client side
const NUMBERWHEEl = new NumberWheel()


for ( let i = 0; i < 22; i++ ){
    process.stdout.write(NUMBERWHEEl.next() + ' ')
}