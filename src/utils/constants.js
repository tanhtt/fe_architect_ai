let apiRoot = ''
if(process.env.BUILD_MODE === 'dev'){
    apiRoot = 'https://architectaiapp-ecf9apatbyatc4dx.canadacentral-01.azurewebsites.net'
}
if(process.env.BUILD_MODE === 'production'){
    apiRoot = 'http://localhost:8080' //for deploy api
}
export const API_ROOT = apiRoot