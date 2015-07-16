if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: [
      { text: "Buy apples" },
      { text: "Buy bananas" },
      { text: "Buy oranges" }
    ]
  });
}
