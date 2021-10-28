# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

# user1 = (email: "jb@gmail.com", password: "password", first_name:"jon", last_name: "b", bio:"I love to hike.")
# user1 = (email: "jb@gmail.com", password: "password", first_name:"jon", last_name: "b", bio:"I Hike with my dog.")

user1 = User.create(email: Faker::Internet.email, password: "password", first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, bio:"I love to hike.")
user2 = User.create(email: Faker::Internet.email, password: "password", first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, bio:"I Hike with my dog.")
user3 = User.create(email: Faker::Internet.email, password: "password", first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, bio:"I Hike with my cat.")
user4 = User.create(email: Faker::Internet.email, password: "password", first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, bio:"I Hike at night.")
user5 = User.create(email: Faker::Internet.email, password: "password", first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, bio:"I Hike during the day.")

