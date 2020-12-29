const users = [
    {name: 'Mark', email: 'mark@mail.com', age: 34},
    {name: 'Elena', email: 'elena@mail.com', age: 32}
]

module.exports = {
    test() {
        return {
            count: Math.trunc(Math.random() * 10),
            users
        }
    },
    random({min, max, count}) {
       const arr = []
       for (let i = 0; i<count; i++) {
           const random = Math.random() * (max - min) + min
           arr.push(random)
       }
       return arr
    },
   addTestUser({user: {name, email}}) {
       const user = {
        name, email, 
        age: Math.ceil(Math.random() * 30)
       }
       users.push(user)
       return user
   }
}