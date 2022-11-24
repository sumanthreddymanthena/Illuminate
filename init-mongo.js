db.createUser(
    {
        user : "muneebkhan",
        pwd  : "Illuminate123",
        roles : [{
            role: "readWrite",
            db : "test"
        }]

        
    }
)