const Request = require("request");

describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../build/server");
    });
    afterAll(() => {
        server.stop();
    });
    describe("GET /", () => {
        const data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3333/api/device", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Status not 404", () => {
            expect(data.status).not.toBe(404);
        });
    });
});