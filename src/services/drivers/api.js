import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost'
})

const callApiLogin = (credentials) => {
    credentials.grant_type = 'password'
    credentials.client_id = 2
    credentials.client_secret = 'NZYaqOkCG9V6b6vy1WN1ot7PMO2ROABQ3ppGTsc0'
    credentials.scope = '*'
    return new Promise((resolve, reject) => {
        request.post('/oauth/token', credentials)
        .then(function(response) {
            resolve(response.data)
        })
        .catch(function(error) {
            reject(error)
        })
    })
}

export default callApiLogin