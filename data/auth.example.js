export default {
    token: {
        prod: "",
        dev: "",
    },
    credentials: {
        mongodb: {
            prod: {
                auth: {
                    host: "",
                    user: "",
                    password: "",
                    database: "",
                    port: "27017"
                },
                options: {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false,
                    useCreateIndex: true
                }
            },
            dev: {
                auth: {
                    host: "",
                    user: "",
                    password: "",
                    database: "",
                    port: "27017"
                },
                options: {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false,
                    useCreateIndex: true
                }
            }
        }
    },
    ws: {
        group: "",
        host: "",
        port: 0000,
        token: ""
    }
}
