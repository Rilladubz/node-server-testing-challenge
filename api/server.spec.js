const request = require("supertest");
const server = require("./server.js");

describe("server.js", function() {
  describe("environment", function() {
    it("should set environment to testing", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });

    describe("GET /", () => {
      it("should return 200 ok", () => {
        return request(server)
          .get("/")
          .then(res => {
            expect(res.status).toBe(200);
          });
      });

      it("should return 200 ok", () => {
        return request(server)
          .get("/api/auth/login")
          .then(res => {
            expect(res.type).toMatch(/html/i);
          });
      });
    });
  });
});
