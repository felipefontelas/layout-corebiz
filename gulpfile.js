var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");

gulp.task("sass", function() {
  return gulp
    .src("src/sass/index.scss")
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest("css"));
});

gulp.task("js", () => {
  return gulp
    .src("src/js/index.js", { allowEmpty: true })
    .pipe(uglify())
    .pipe(gulp.dest("js"));
});
