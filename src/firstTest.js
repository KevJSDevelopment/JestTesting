export const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    createUser: () => {
        const user = {
            firstName: "Mickey",
            lastName: "Mouse"
        }
        return user
    },
    fetchUser: () => {
       return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data
        })
        .catch(error => error)
    }
}



