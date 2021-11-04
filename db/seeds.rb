# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
demo_user = User.create(email: "demo@gmail.com", password: "password", fname: "demo", lname: "user", bio:"Welcome to SomeTrails! This is where the bio will go when I feel creative enough to write one :)")
me = User.create(email: "jb@gmail.com", password: "password", fname: "Jonathan", lname: "Berzon", bio:"Welcome to SomeTrails! This is where the bio will go when I feel creative enough to write one :)")
user1 = User.create!(email: Faker::Internet.email, password: "password", fname: Faker::Name.first_name, lname: Faker::Name.last_name, bio:"I love to hike.")
user2 = User.create!(email: Faker::Internet.email, password: "password", fname: Faker::Name.first_name, lname: Faker::Name.last_name, bio:"I Hike with my dog.")
user3 = User.create!(email: Faker::Internet.email, password: "password", fname: Faker::Name.first_name, lname: Faker::Name.last_name, bio:"I Hike with my cat.")
user4 = User.create!(email: Faker::Internet.email, password: "password", fname: Faker::Name.first_name, lname: Faker::Name.last_name, bio:"I Hike at night.")
user5 = User.create!(email: Faker::Internet.email, password: "password", fname: Faker::Name.first_name, lname: Faker::Name.last_name, bio:"I Hike during the day.")

Park.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('parks')
rocky = Park.create!(name: "Rocky Mountain National Park", latitude: 40.343182, longitude: -105.688103, contact:"970-586-1206", zoom: 11, directions: "https://goo.gl/maps/WL2g9UPZw2rpFqsS6", description: "Want to find the best trails in Rocky Mountain National Park for an adventurous hike or a family trip? AllTrails has 247 great hiking trails, biking trails, running trails and more. Enjoy hand-curated trail maps, along with reviews and photos from nature lovers like you.Ready for your next hike or bike ride? Explore one of 40 easy hiking trails in Rocky Mountain National Park that are great for the whole family. Looking for a more strenuous hike? We've got you covered, with trails ranging from 0 to 10,688 feet in elevation gain. Whatever you have planned for the day, you can find the perfect trail for your next trip to Rocky Mountain National Park.", acreage: "265,807", country: "United States of America", state: "Colorado"  )


Trail.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('trails')
emerald = Trail.create!(park_id: rocky.id, name: "Emerald Lake Trail", duration: "1 h 46 m", difficulty: "moderate", length: "3.2 mi", elevation: "698 ft", route: "Out & back", latitude: 40.31195, longitude: -105.64567, zoom: 10, directions: "https://www.google.com/maps/dir//40.31195,-105.64567/@40.3114007,-105.6465976,18.14z", description: "Emerald Lake Trail is a 3.2 mile heavily trafficked out and back trail located near Estes Park, Colorado that features a lake and is rated as moderate. The trail is primarily used for hiking and snowshoeing and is best used from June until October." )
emerald.photos.attach(io: File.open('app/assets/images/aws/RMNP1.jpg', ), filename: 'RMNP1.jpg')

sky = Trail.create!(park_id: rocky.id, name: "Sky Pond Trail", duration: "4 h 58 m", difficulty: "hard", length: "9.4 mi", elevation: "1,758 ft", route: "Out & back", latitude: 40.31052, longitude: -107.7178223, zoom: 10, directions: "https://www.google.com/maps/dir//40.31052,-105.6403/@38.8417478,-107.7178223,4z", description: "Sky Pond Trail is a 9.4 mile heavily trafficked out and back trail located near Estes Park, Colorado that features a lake and is rated as difficult. The trail is primarily used for hiking and snowshoeing and is best used from June until October." )
sky.photos.attach(io: File.open('app/assets/images/aws/RMNP2.jpg', ), filename: 'RMNP2.jpg')

alberta = Trail.create!(park_id: rocky.id, name: "Alberta Falls Trail", duration: "1 h 02 m", difficulty: "easy", length: "1.6 mi", elevation: "232 ft", route: "Out & back", latitude: 40.31046, longitude: -105.64036, zoom: 10, directions: "https://www.google.com/maps/dir//40.31046,-105.64036/@38.8417478,-107.7191496,4z", description: "Alberta Falls Trail is a 1.6 mile heavily trafficked out and back trail located near Estes Park, Colorado that features a waterfall and is good for all skill levels. The trail is primarily used for hiking, walking, running, horses, and snowshoeing and is best used from May until October. Horses are also able to use this trail." )
alberta.photos.attach(io: File.open('app/assets/images/aws/RMNP3.jpg', ), filename: 'RMNP3.jpg')

