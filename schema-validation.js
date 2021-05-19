db.createCollection("student_with_validation", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "firstName", "lastName", "country", "isStudentActive",
                "email", "totalSpentInBooks", "gender"
            ],
            properties: {
                firstName: {
                    bsonType: "string",
                    description: "must be a string and is required",
                },
                lastName: {
                    bsonType: "string",
                    description: "must be a string and is required",
                },
                country: {
                    bsonType: "string",
                    description: "must be a string and is required",
                },
                isStudentActive: {
                    bsonType: "bool",
                    description: "must be a bool and is required"
                },
                gender: {
                    enum: ["M", "F"],
                    description: "can only be one of the enum values and is required",
                },
                favouriteSubjects: {
                    bsonType: "array",
                    description: "favourite subject is required",
                },
                totalSpentInBooks: {
                    bsonType: "double",
                    description: "must be a double if the field exists",
                },
                email: {
                    bsonType : "string",
                    pattern : "@amigoscode\.com$",
                    description: "must be a string and match the regular expression pattern"
                },
            },
        },
    }
});
