gulp = require 'gulp'
coffee = require 'gulp-coffee'
del = require 'del'
browserSync = require 'browser-sync'

# src/tsをコンパイルしてdist/jsに展開
gulp.task 'compile-coffee', () ->
    gulp.src 'src/coffee/**/*.coffee'
        .pipe coffee()
        .pipe gulp.dest('src/js/')

# distの中身を削除
gulp.task 'clean-dist', () ->
    del.sync(['dist/*'])

# htmlをsrcからdistにコピー
gulp.task 'copy-html', () ->
    gulp.src 'src/**'
        .pipe gulp.dest('dist/')

# coffee,htmlが編集されたらタスクを再実行
gulp.task 'watch', () ->
    gulp.watch([
        'src/coffee/**/*.coffee',
#        'src/views/*.html'
        ], ['compile-coffee']) 

# filesで指定したファイルが更新された時にリロードしてくれる
gulp.task 'server', () ->
    browserSync.init
        server: {
            baseDir: 'dist/views'
            index: 'index.html'
        },
        files: 'dist/*'

gulp.task 'copy-bower', () ->
    # アスタリスク2つを指定しないとファイルがコピーされない
    # baseの指定はフォルダ構成を再現する起点
    gulp.src 'src/js/bower_components/**', { base: 'src/js/' }
        .pipe gulp.dest('dist/js/')

# gulpコマンドで全部実行するように
gulp.task 'default', [
#    'clean-dist',
    'compile-coffee',
#    'copy-html',
#    'copy-bower',
#    'server',
    'watch'
    ]
