module.exports = {
	options: {
      livereload: true,
  },
  html: {
      files: ['*/*.php']
  },
	sass: {
      files: ['sass/*.scss'],
      tasks: ['sass']
  },
    devWatchCSS: {
      files: ['css/*.css']
  },
    devWatchJS: {
      files: ['js/*.js'],
      tasks: ['concat','uglify']      
  },
  svg: {
    files: ["img/svg/*.svg"],
    tasks: ["svgstore"]
  }
}
