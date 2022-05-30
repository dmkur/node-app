const fs = require('fs')
const path = require('path')

const pathToDir1800 = path.join(__dirname, '1800')
const pathToDir2000 = path.join(__dirname, '2000')

fs.readdir(pathToDir1800, (err, files) => {
    if (err) {
        console.log(err)
        return
    }
    files.forEach(file => {
        const pathFile1800 = path.join(pathToDir1800, file)
        fs.readFile(pathFile1800, (err1, stats) => {
            if (err) {
                console.log(err1)
                return
            }
            const data = JSON.parse(stats.toString())

            if (data.gender === 'female') {
                const pathToRemove = path.join(pathToDir2000, file)
                fs.rename(pathFile1800, pathToRemove, err2 => {
                    if (err) {
                        console.log(err2)
                        return
                    }
                    console.log('Done')
                })
            }
        })
    })

})


