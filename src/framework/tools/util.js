const wfm = {
  delay(ms = 1000) {
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        res()
      }, ms)
    })
  }
}

export { wfm };