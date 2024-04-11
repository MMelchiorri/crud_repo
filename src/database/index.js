const array = [
    require('./createConnection')
]

for (const elem of array) {
    await elem;
}
