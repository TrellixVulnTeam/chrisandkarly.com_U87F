module.exports = {
  uploadCSS:{
  	   files:{'./': ['css/*.css' , 'sass/*.scss'] } 
  },
  uploadJS:{
       files:{'./': ['js/main.js'] } 
  },
  uploadAll:{
       files:{'./': ['js/*.js' , 'js/*.min.js' , 'js/plugin/*.js', 'css/*.css' , 'sass/*.scss'] } 
  },
    options: {
      host: '<%= sshlogininfo.host %>',
      username: '<%= sshlogininfo.username %>',
      password: '<%= sshlogininfo.password %>',
      createDirectories: true,
      showProgress: true,
      path:'/'
    }
}

