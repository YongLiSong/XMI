var {src,dest,watch,series} = require('gulp')
var includ = require('gulp-file-include');

function includTask (){
    return src('./src/views/index.html')
            .pipe(includ({
                prefix:"@",
                basepath:'./src/views/components/'
            }))
            .pipe(dest('./dist'))
}
function watchTask (){
    watch('./dist/index.html',includ)
}

module.exports = {
    includ : series(includTask,watchTask)
}