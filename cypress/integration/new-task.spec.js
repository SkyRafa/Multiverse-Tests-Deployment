describe("Adding Users", () => {
  it("has a modal opened by an add task button", () => {
    cy.visit("http://localhost:3001");
    cy.get(".user-list button").click();
    cy.get("#modal").contains("Add User");
  });
  it("you can add users with a name and avatar", () => {
    cy.visit("http://localhost:3001");
    cy.get(".user-list button").click();
    cy.get("#modal").contains("Add User");
    cy.get('[data-test-id="username-input"]').type("Rafa");
    cy.get('[data-test-id="avatar-input"]').type(
      "https://cdn.vox-cdn.com/thumbor/JgCPp2BBxETY596wCp50ccosCfE=/0x0:2370x1574/1200x800/filters:focal(996x598:1374x976)/cdn.vox-cdn.com/uploads/chorus_image/image/68870438/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png"
    );
    cy.get('[data-test-id="add-user-button"]').click();
    cy.contains("Rafa");
  });
});
