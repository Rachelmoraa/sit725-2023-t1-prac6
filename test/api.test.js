
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app");

chai.use(chaiHttp);
const should = chai.should()

describe("Addition api tests", () => {
    it("should return render the homepage template", (done) => {
        chai
            .request(app)
            .get("/")
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
    it("should return render the form template", (done) => {
        chai
            .request(app)
            .get("/form")
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
    it("should add a new site to the database", (done) => {
        chai
            .request(app)
            .post("/new")
            .send({ name: "test", description: "test", profile: "" })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

});
