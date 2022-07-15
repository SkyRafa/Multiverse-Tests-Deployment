const HandleBars = require("handlebars");
const axios = require("axios");

describe("server", () => {
  test("PORT is set", () => {
    expect(process.env.PORT).toBe("3001");
  });
  test("ENV is set", () => {
    expect(process.env.NODE_ENV).toBe("test");
  });
});

// describe("Add task button", () => {
//   test("works when clicked", async () => {
//     const response = await axios.get(`http://localhost:3001/boards/1`);
//     const page = HandleBars.compile(response.data);
//   });
// });
