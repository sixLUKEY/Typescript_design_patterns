import UserBuilder from "./user-builder";

let userTemplate = new UserBuilder()
userTemplate.setFirstName('Chicago')
userTemplate.getAllValues()
userTemplate.build()