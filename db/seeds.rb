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

demo_user = User.create(email: "demo@gmail.com", password: "password", fname: "demo", lname: "user", bio:"Welcome to SomeTrails! This is where the bio will go when I feel creative enough to write one :)")
me = User.create(email: "jb@gmail.com", password: "password", fname: "Jonathan", lname: "Berzon", bio:"Welcome to SomeTrails! This is where the bio will go when I feel creative enough to write one :)")

user1 = User.create!(email: Faker::Internet.email, password: "password", fname: Faker::Name.first_name, lname: Faker::Name.last_name, bio:"I love to hike.")
user2 = User.create!(email: Faker::Internet.email, password: "password", fname: Faker::Name.first_name, lname: Faker::Name.last_name, bio:"I Hike with my dog.")
user3 = User.create!(email: Faker::Internet.email, password: "password", fname: Faker::Name.first_name, lname: Faker::Name.last_name, bio:"I Hike with my cat.")
user4 = User.create!(email: Faker::Internet.email, password: "password", fname: Faker::Name.first_name, lname: Faker::Name.last_name, bio:"I Hike at night.")
user5 = User.create!(email: Faker::Internet.email, password: "password", fname: Faker::Name.first_name, lname: Faker::Name.last_name, bio:"I Hike during the day.")

Park.destroy_all
rocky = Park.create!(name: "Rocky Mountain National Park", latitude: 40.343182, longitude: -105.688103, contact:"970-586-1206", zoom: 11, description: "Want to find the best trails in Rocky Mountain National Park for an adventurous hike or a family trip? AllTrails has 247 great hiking trails, biking trails, running trails and more. Enjoy hand-curated trail maps, along with reviews and photos from nature lovers like you.Ready for your next hike or bike ride? Explore one of 40 easy hiking trails in Rocky Mountain National Park that are great for the whole family. Looking for a more strenuous hike? We've got you covered, with trails ranging from 0 to 10,688 feet in elevation gain. Whatever you have planned for the day, you can find the perfect trail for your next trip to Rocky Mountain National Park.", acreage: "265,807", country: "United States of America", state: "Colorado"  )