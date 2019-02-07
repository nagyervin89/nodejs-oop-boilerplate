module.exports = () => {
  process.on('uncaughtException', (errExeption) => {
    console.log('FATAL ERROR:', errExeption.message)
    process.exit(1)
  })

  process.on('unhandledRejection', (errExeption) => {
    console.log('FATAL ERROR:', errExeption.message)
    process.exit(1)
  })
}