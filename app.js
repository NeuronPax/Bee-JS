const canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')
let circle = (x, y, r, f) => {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2, false)
    f ? ctx.fill() : ctx.stroke()
}
let drawBee = (x, y) => {
    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'gold'
    circle(x, y, 8, true)
    circle(x, y, 8, false)
    circle(x - 5, y - 11, 5, false)
    circle(x + 5, y - 11, 5, false)
    circle(x - 2, y - 1, 2, false)
    circle(x + 2, y - 1, 2, false)
}
let update = cor => {
    const offset = Math.random() * 4 - 2
    cor += offset
    cor > 200 ? cor = 200 :
    cor < 0 ? cor = 0 : null
    return cor
}
let x = 100
let y = 100
setInterval(() => {
    ctx.clearRect(0, 0, 200, 200)
    drawBee(x, y)
    x = update(x)
    y = update(y)
    ctx.strokeRect(0, 0, 200, 200)
}, 30)