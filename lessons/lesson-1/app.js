//lib for files operation
const fs = require('fs')
//lib for clear ways to the file
const path = require("path");
//lib util for promisify some callback functions
const util = require('util')

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

//************* reading directory, stats - fs.readdir(), fs.stat()
//response - array of names files or directories
// const dirtoRead = path.join(__dirname)
// fs.readdir(dirtoRead, (err, files) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     //console.log('Files from dir -',files)
//
//     files.forEach(file => {
//         const pathFiles = path.join(dirtoRead, file)
//         fs.stat(pathFiles, (err1, stats) => {
//             console.log('----------------------------')
//             console.log(file)
//             console.log(stats.isFile(), 'isFile')
//             console.log(stats.isDirectory(), 'isDir')
//             console.log(stats.size, 'size')
//             console.log('----------------------------')
//         })
//     })
//
// })

// ************* delete dir fs.rmdir()
// only empty directories
// const rmDir = path.join(__dirname, 'dirToRm')
// fs.rmdir(rmDir, err => {
//     console.log(err)
// })

// ************* delete files -  fs.unlink()
// const rmfiles = path.join(__dirname, 'dirToRm', 'txt.txt')
// fs.unlink(rmfiles, err => {
//     console.log(err)
// })

// ************* remove files - fs.rename()
// also cane rename file
// const pathOne = path.join(__dirname, 'dir1', 'text.txt')
// const pathTwo = path.join(__dirname, 'dirToRm', 'text.txt')
// fs.rename(pathOne, pathTwo, err => {
//     console.log(err)
// })

// UTIL promise - example
// const appendFilePromise = util.promisify(fs.appendFile)
// const filePath = path.join(__dirname, 'dir1', 'text.txt')
// appendFilePromise(filePath, '\n data from promiseAppendFile').catch(reason => {
//     console.log(reason)
// })

//stream
const pathToRead = path.join(__dirname, 'stream', 'dirForStream1', 'txt.txt')
const pathToWrite = path.join(__dirname, 'stream', 'dirForStream2', 'txt.txt')
// read date and created chunk
const readStream = fs.createReadStream(pathToRead)
// accepted chunks and write to new dir
const writeStream = fs.createWriteStream(pathToWrite)

//create stream and write new stream
readStream.on('data', chunk => {
    writeStream.write(chunk)
})












