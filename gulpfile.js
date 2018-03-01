var gulp = require('gulp');
var exec = require('child_process').exec;
var spawn = require('cross-spawn');

gulp.task('start', function () {
  process.chdir('client');
  var client = spawn('npm', ['start'], { stdio: 'inherit' });
  process.chdir('..');
  process.chdir('functions');
  var functions = spawn('npm', ['run', 'serve'], { stdio: 'inherit' });
});

gulp.task('install', function () {
  process.chdir('client');
  var client = spawn('npm', ['install'], { stdio: 'inherit' });
  process.chdir('..');
  process.chdir('functions');
  var functions = spawn('npm', ['install'], { stdio: 'inherit' });

});
