module.exports = {

                 development: {
                     files: {"css/WWR_main.css" : "css/WWR_main.less"}
                 },
                 production: {
                     options: {
                         cleancss: true
                     },
                     files: {"css/WWR_main.css": "css/WWR_main.less"}
                 }
             }
    