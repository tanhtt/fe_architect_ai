let apiRoot = ''
if(process.env.BUILD_MODE === 'dev'){
    apiRoot = 'https://architectaiapp-ecf9apatbyatc4dx.canadacentral-01.azurewebsites.net'
    // apiRoot = 'http://localhost:8080'
}
if(process.env.BUILD_MODE === 'production'){
    apiRoot = 'https://architectaiapp-ecf9apatbyatc4dx.canadacentral-01.azurewebsites.net'
}
export const API_ROOT = apiRoot