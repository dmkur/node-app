const fs = require('fs')
const path = require('path')
const e = require("express");

const pathToDir1800 = path.join(__dirname, '1800')
const pathToDir2000 = path.join(__dirname, '2000')

const readDir1800 = () => {
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
                    })
                }
            })
        })
        console.log("All woman transferred to 2000 dir")

    })
}

const readDir2000 = () => {
    fs.readdir(pathToDir2000, (err, files) => {
        if(err) {
            console.log(e)
            return
        }
        files.forEach(file => {
            const pathFile2000 = path.join(pathToDir2000, file)
            fs.readFile(pathFile2000, (err1, stats) => {
                if(err1){
                    console.log(e)
                    return
                }
                const data = JSON.parse(stats)

                if(data.gender === 'male'){
                    const pathToRemove = path.join(pathToDir1800, file)
                    fs.rename(pathFile2000,pathToRemove, err2 => {
                        if(err2){
                            console.log(err2)
                            return
                        }
                    })
                }
            })
        })
        console.log('All mens transferred to 1800 dir')
    })
}

readDir1800()
readDir2000()