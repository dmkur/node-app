//lib for files operation
const fs = require('fs')
//lib for clear ways to the file
const path = require('path')


//************* crete file - fs.writeFile()
//
//don`t create directory, only files with some text
//second time with other message
//const pathToDir = path.join(__dirname, 'dir1', 'text.txt')
//
//new message will delete old message
//
//fs.writeFile(pathToDir, 'New world!', err => {
//   console.log('ERROR from writeFile -',err)
//})

//************* write in file - fs.appendFile()
//write new text without lost old data
//
// const pathToDir = path.join(__dirname, 'dir1', 'text.txt')
// fs.appendFile(pathToDir, '\nnew text from appendFile \n', err => {
//     console.log('ERROR from appendFile -',err)
// })

//************* create directory - fs.mkdir()
//
// const dirPath = path.join(__dirname, 'dir2', 'dir3', 'examples')
// fs.mkdir(dirPath, {recursive: true}, err => {
//     if (err) {
//         console.log(e)
//         return
//     }
//     console.log('dir created')
// })

//************* reading file - fs.readFile()
// const fileToRead = path.join(__dirname, 'dir2', 'dir3', 'examples', 'fileToread.txt')
// const fileToWrite = path.join(__dirname, 'dir1', 'text.txt')
// fs.readFile(fileToRead, (err, data) => {
//     if(err) {
//         console.log(err)
//         return
//     }
// //received data write to another file
//     fs.appendFile(fileToWrite, data, err1 => {
//         if(err) {
//             console.log(err)
//             return
//         }
//         console.log('File write new info')
//     })
//
//     console.log('data from readFile-',data.toString())
// })

//************* reading directory - fs.readdir()
//response - array of names files or directories
const dirtoRead = path.join(__dirname)
fs.readdir(dirtoRead, (err, files) => {
    if(err) {
        console.log(err)
        return
    }
    console.log('Files from dir -',files)
})