let apiRoot = ''
if(process.env.BUILD_MODE === 'dev'){
    apiRoot = 'http://localhost:8080'
}
if(process.env.BUILD_MODE === 'production'){
    apiRoot = 'http://localhost:8080' //for deploy api
}
export const API_ROOT = apiRoot