import { getProfile } from '../actions/index'

const auth = {
    login: (userData, action) => {
        return fetch('https://hobbiesbuildforgood.herokuapp.com/api/auth', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email : userData.email,
                password: userData.password,
            })
        })
        .then((response) => response.json())
        .then((json) => {
            return fetch('https://hobbiesbuildforgood.herokuapp.com/api/profile/me', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'x-auth-token': json.token
                },
            })
            .then((response) => response.json())       
        })   
    },
    signup: async (userData, action) => {
        fetch('https://hobbiesbuildforgood.herokuapp.com/api/users?', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email : userData.email,
                name: userData.name || "empty",
                password: userData.password,
                password2: userData.passwordConfirm,
                image: "room-avatar.png"
            })
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            fetch('https://hobbiesbuildforgood.herokuapp.com/api/profile?', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-auth-token': json.token
                },
                body: JSON.stringify({
                    hobbies: ["5fa2f8486c1f11448419ed07"],
                    gender: "male"
                })
            })
            .then((response) => response.json())
            .then((json) => {
                console.log('profile', json)
                fetch('https://hobbiesbuildforgood.herokuapp.com/api/profile/user/' + json.user)
                .then((response) => response.json())
                .then((json) => { 
                    console.log('getProfile', json)
                    action(json)
                })
            })          
        })      
    }
}
export { auth }