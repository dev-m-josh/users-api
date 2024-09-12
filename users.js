
const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        password: "$2b$08$.cNhRFw6YVAOMe45vcTWUuqFI7IKE5JaPZLBGxUpXSu2hgIZZwdTG",
        username: "johndoe"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "$2b$08$fix57QifPve.eiTxJiZ9wOGZqfl4ymiFxThrH9HC6tKcoieFmdLrK",
        username: "janesmith"
    },
    {
        id: 3,
        name: "Alice Jones",
        email: "alice.jones@example.com",
        password: "qwerty",
        username: "alicejones"
    },
    {
        id: 4,
        name: "Bob Brown",
        email: "bob.brown@example.com",
        password: "abc123",
        username: "bobbrown"
    },
    {
        id: 5,
        name: "Charlie Davis",
        email: "charlie.davis@example.com",
        password: "letmein",
        username: "charliedavis"
    },
    {
        id: 6,
        name: "David Martin",
        email: "david.martin@example.com",
        password: "welcome",
        username: "davidmartin"
    },
    {
        id: 7,
        name: "Emily Wilson",
        email: "emily.wilson@example.com",
        password: "password1",
        username: "emilywilson"
    },
    {
        id: 8,
        name: "Frank Lee",
        email: "frank.lee@example.com",
        password: "admin123",
        username: "franklee"
    },
    {
        id: 9,
        name: "Grace Thompson",
        email: "grace.thompson@example.com",
        password: "user2024",
        username: "gracethompson"
    },
    {
        id: 10,
        name: "Hannah White",
        email: "hannah.white@example.com",
        password: "default",
        username: "hannahwhite"
    },
    {
        id: 11,
        name: "Ian Jones",
        email: "ian.jones@example.com",
        password: "summer2024",
        username: "ianjones"
    },
    {
        id: 12,
        name: "Julia Morris",
        email: "julia.morris@example.com",
        password: "holiday1",
        username: "juliammorris"
    },
    {
        id: 13,
        name: "Kyle Roberts",
        email: "kyle.roberts@example.com",
        password: "mypassword",
        username: "kyleroberts"
    },
    {
        id: 14,
        name: "Lisa Johnson",
        email: "lisa.johnson@example.com",
        password: "secure123",
        username: "lisajohnson"
    },
    {
        id: 15,
        name: "Michael Green",
        email: "michael.green@example.com",
        password: "123abc",
        username: "michaelgreen"
    }
];

const bcrypt = require('bcrypt');





module.exports = {users: users, bcrypt};