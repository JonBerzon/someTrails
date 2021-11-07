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
emerald = Trail.create!(park_id: rocky.id, name: "Emerald Lake Trail", duration: "1 h 46 m", difficulty: "moderate", length: "3.2 mi", elevation: "698 ft", route: "Out & back", latitude: 40.31195, longitude: -105.64567, zoom: 17, directions: "https://www.google.com/maps/dir//40.31195,-105.64567/@40.3114007,-105.6465976,18.14z", description: "Emerald Lake Trail is a 3.2 mile heavily trafficked out and back trail located near Estes Park, Colorado that features a lake and is rated as moderate. The trail is primarily used for hiking and snowshoeing and is best used from June until October." )
emerald.photos.attach(io: File.open('app/assets/images/aws/RMNP3.jpg', ), filename: 'RMNP3.jpg')

sky = Trail.create!(park_id: rocky.id, name: "Sky Pond Trail", duration: "4 h 58 m", difficulty: "hard", length: "9.4 mi", elevation: "1,758 ft", route: "Out & back", latitude: 40.31046, longitude: -105.64036, zoom: 17, directions: "https://www.google.com/maps/dir//40.31052,-105.6403/@40.3110612,-105.6432294,16.9z", description: "Sky Pond Trail is a 9.4 mile heavily trafficked out and back trail located near Estes Park, Colorado that features a lake and is rated as difficult. The trail is primarily used for hiking and snowshoeing and is best used from June until October." )
sky.photos.attach(io: File.open('app/assets/images/aws/RMNP2.jpg', ), filename: 'RMNP2.jpg')

alberta = Trail.create!(park_id: rocky.id, name: "Alberta Falls Trail", duration: "1 h 02 m", difficulty: "easy", length: "1.6 mi", elevation: "232 ft", route: "Out & back", latitude: 40.31046, longitude: -105.64036, zoom: 17, directions: "https://www.google.com/maps/dir//40.31052,-105.6403/@40.3110612,-105.6432294,16.9z", description: "Alberta Falls Trail is a 1.6 mile heavily trafficked out and back trail located near Estes Park, Colorado that features a waterfall and is good for all skill levels. The trail is primarily used for hiking, walking, running, horses, and snowshoeing and is best used from May until October. Horses are also able to use this trail." )
alberta.photos.attach(io: File.open('app/assets/images/aws/RMNP1.jpg', ), filename: 'RMNP1.jpg')

gem = Trail.create!(park_id: rocky.id, name: "Gem Lake Trail", duration: "1 h 55 m", difficulty: "moderate", length: "3.1 mi", elevation: "994 ft", route: "Out & back", latitude: 40.39645, longitude: -105.51303, zoom: 17, directions: "https://www.google.com/maps/dir//40.39645,-105.51303/@40.3965461,-105.5478323,13z", description: "Gem Lake Trail is a 3.1 mile heavily trafficked out and back trail located near Estes Park, Colorado that features a lake and is rated as moderate. The trail is primarily used for hiking and is best used from May until October." )
gem.photos.attach(io: File.open('app/assets/images/aws/RMNP4.jpg', ), filename: 'RMNP4.jpg')


chasm = Trail.create!(park_id: rocky.id, name: "Chasm Lake", duration: "5 h 16 m", difficulty: "hard", length: "8.8 mi", elevation: "2,542 ft", route: "Out & back", latitude: 40.2715862, longitude: -105.5566217, zoom: 17, directions: "https://www.google.com/maps/dir//Longs+Peak+Trailhead,+1398+Longs+Peak+Rd,+Estes+Park,+CO+80517/@40.2715368,-105.5568251,21z/data=!4m9!4m8!1m0!1m5!1m1!1s0x876963050c48bb31:0x41fdf2cd2e219144!2m2!1d-105.5565693!2d40.2713991!3e2", description: "Chasm Lake is a 8.8 mile heavily trafficked out and back trail located near Estes Park, Colorado that features a waterfall and is rated as difficult. The trail is primarily used for hiking, horses, and snowshoeing and is best used from June until October. Horses are also able to use this trail." )
chasm.photos.attach(io: File.open('app/assets/images/aws/RMNP5.jpg', ), filename: 'RMNP5.jpg')



Descriptor.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('descriptors')
kid = Descriptor.create!(name: "Kid friendly")
hiking = Descriptor.create!(name: "Hiking")
snow = Descriptor.create!(name: "Snowshoeing")
forest = Descriptor.create!(name: "Forest")
lake = Descriptor.create!(name: "Lake")
paved = Descriptor.create!(name: "Partially paved")
river = Descriptor.create!(name: "River")
views = Descriptor.create!(name: "Views")
flowers = Descriptor.create!(name: "Wildflowers")
wildlife = Descriptor.create!(name: "Wildlife")
dogs = Descriptor.create!(name: "No dogs")
scramble = Descriptor.create!(name: "Scramble")
horse = Descriptor.create!(name: "Horseback riding")
walking = Descriptor.create!(name: "Walking")
running = Descriptor.create!(name: "Running")
waterfall = Descriptor.create!(name: "Waterfall")
rocky = Descriptor.create!(name: "Rocky")
fee = Descriptor.create!(name: "Fee")
scramble = Descriptor.create!(name: "Scramble")
horse = Descriptor.create!(name: "Horseback riding")
walk = Descriptor.create!(name: "Walking")
run = Descriptor.create!(name: "Running")

TrailDescriptor.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('trail_descriptors')
emerald0 = TrailDescriptor.create!(trail_id: emerald.id, descriptor_id: kid.id)
emerald1 = TrailDescriptor.create!(trail_id: emerald.id, descriptor_id: hiking.id)
emerald2 = TrailDescriptor.create!(trail_id: emerald.id, descriptor_id: snow.id)
emerald3 = TrailDescriptor.create!(trail_id: emerald.id, descriptor_id: forest.id)
emerald4 = TrailDescriptor.create!(trail_id: emerald.id, descriptor_id: lake.id)
emerald5 = TrailDescriptor.create!(trail_id: emerald.id, descriptor_id: paved.id)
emerald6 = TrailDescriptor.create!(trail_id: emerald.id, descriptor_id: river.id)
emerald7 = TrailDescriptor.create!(trail_id: emerald.id, descriptor_id: views.id)
emerald8 = TrailDescriptor.create!(trail_id: emerald.id, descriptor_id: waterfall.id)
emerald9 = TrailDescriptor.create!(trail_id: emerald.id, descriptor_id: flowers.id)
emerald10 = TrailDescriptor.create!(trail_id: emerald.id, descriptor_id: wildlife.id)
emerald11 = TrailDescriptor.create!(trail_id: emerald.id, descriptor_id: rocky.id)
emerald12 = TrailDescriptor.create!(trail_id: emerald.id, descriptor_id: fee.id)
emerald13 = TrailDescriptor.create!(trail_id: emerald.id, descriptor_id: dogs.id)

sky0 = TrailDescriptor.create!(trail_id: sky.id, descriptor_id: hiking.id)
sky1 = TrailDescriptor.create!(trail_id: sky.id, descriptor_id: snow.id)
sky2 = TrailDescriptor.create!(trail_id: sky.id, descriptor_id: forest.id)
sky3 = TrailDescriptor.create!(trail_id: sky.id, descriptor_id: lake.id)
sky4 = TrailDescriptor.create!(trail_id: sky.id, descriptor_id: river.id)
sky5 = TrailDescriptor.create!(trail_id: sky.id, descriptor_id: views.id)
sky6 = TrailDescriptor.create!(trail_id: sky.id, descriptor_id: waterfall.id)
sky7 = TrailDescriptor.create!(trail_id: sky.id, descriptor_id: flowers.id)
sky8 = TrailDescriptor.create!(trail_id: sky.id, descriptor_id: wildlife.id)
sky9 = TrailDescriptor.create!(trail_id: sky.id, descriptor_id: rocky.id)
sky10 = TrailDescriptor.create!(trail_id: sky.id, descriptor_id: fee.id)
sky11 = TrailDescriptor.create!(trail_id: sky.id, descriptor_id: dogs.id)
sky12 = TrailDescriptor.create!(trail_id: sky.id, descriptor_id: scramble.id)

alberta0 = TrailDescriptor.create!(trail_id: alberta.id, descriptor_id: kid.id)
alberta1 = TrailDescriptor.create!(trail_id: alberta.id, descriptor_id: hiking.id)
alberta2 = TrailDescriptor.create!(trail_id: alberta.id, descriptor_id: snow.id)
alberta3 = TrailDescriptor.create!(trail_id: alberta.id, descriptor_id: forest.id)
alberta4 = TrailDescriptor.create!(trail_id: alberta.id, descriptor_id: river.id)
alberta5 = TrailDescriptor.create!(trail_id: alberta.id, descriptor_id: views.id)
alberta6 = TrailDescriptor.create!(trail_id: alberta.id, descriptor_id: waterfall.id)
alberta7 = TrailDescriptor.create!(trail_id: alberta.id, descriptor_id: flowers.id)
alberta8 = TrailDescriptor.create!(trail_id: alberta.id, descriptor_id: wildlife.id)
alberta9 = TrailDescriptor.create!(trail_id: alberta.id, descriptor_id: rocky.id)
alberta10 = TrailDescriptor.create!(trail_id: alberta.id, descriptor_id: fee.id)
alberta11 = TrailDescriptor.create!(trail_id: alberta.id, descriptor_id: dogs.id)
alberta12 = TrailDescriptor.create!(trail_id: alberta.id, descriptor_id: horse.id)
alberta13 = TrailDescriptor.create!(trail_id: alberta.id, descriptor_id: walk.id)
alberta14 = TrailDescriptor.create!(trail_id: alberta.id, descriptor_id: run.id)

gem0 = TrailDescriptor.create!(trail_id: gem.id, descriptor_id: hiking.id)
gem1 = TrailDescriptor.create!(trail_id: gem.id, descriptor_id: forest.id)
gem2 = TrailDescriptor.create!(trail_id: gem.id, descriptor_id: lake.id)
gem3 = TrailDescriptor.create!(trail_id: gem.id, descriptor_id: river.id)
gem4 = TrailDescriptor.create!(trail_id: gem.id, descriptor_id: views.id)
gem5 = TrailDescriptor.create!(trail_id: gem.id, descriptor_id: flowers.id)
gem6 = TrailDescriptor.create!(trail_id: gem.id, descriptor_id: wildlife.id)
gem7 = TrailDescriptor.create!(trail_id: gem.id, descriptor_id: rocky.id)
gem8 = TrailDescriptor.create!(trail_id: gem.id, descriptor_id: scramble.id)
gem9 = TrailDescriptor.create!(trail_id: gem.id, descriptor_id: fee.id)
gem10 = TrailDescriptor.create!(trail_id: gem.id, descriptor_id: dogs.id)

chasm0 = TrailDescriptor.create!(trail_id: chasm.id, descriptor_id: hiking.id)
chasm1 = TrailDescriptor.create!(trail_id: chasm.id, descriptor_id: horse.id)
chasm2 = TrailDescriptor.create!(trail_id: chasm.id, descriptor_id: snow.id)
chasm3 = TrailDescriptor.create!(trail_id: chasm.id, descriptor_id: forest.id)
chasm4 = TrailDescriptor.create!(trail_id: chasm.id, descriptor_id: lake.id)
chasm5 = TrailDescriptor.create!(trail_id: chasm.id, descriptor_id: river.id)
chasm6 = TrailDescriptor.create!(trail_id: chasm.id, descriptor_id: views.id)
chasm7 = TrailDescriptor.create!(trail_id: chasm.id, descriptor_id: waterfall.id)
chasm8 = TrailDescriptor.create!(trail_id: chasm.id, descriptor_id: flowers.id)
chasm9 = TrailDescriptor.create!(trail_id: chasm.id, descriptor_id: wildlife.id)
chasm10 = TrailDescriptor.create!(trail_id: chasm.id, descriptor_id: rocky.id)
chasm11 = TrailDescriptor.create!(trail_id: chasm.id, descriptor_id: scramble.id)
chasm12 = TrailDescriptor.create!(trail_id: chasm.id, descriptor_id: fee.id)
chasm13 = TrailDescriptor.create!(trail_id: chasm.id, descriptor_id: dogs.id)






