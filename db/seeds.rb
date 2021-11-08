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



Review.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('reviews')

revEm1 = Review.create!(user_id: user1.id, trail_id: emerald.id, date: "01-01-2021", description: "Gorgeous! Lakes look mostly frozen, though I didn’t venture out on them. Traction highly recommended. Saw a few people without but they weren’t moving fast or at all. Arrived at the main parking lot at 8:50ish (15 minute wait at the main gate) and there was plenty of parking. But all lots full at 10:45 (except shuttle lot).", rating: 5)
revEm2 = Review.create!(user_id: user2.id, trail_id: emerald.id, date: "2021-01-01", description: "Great hike. Get there early 7am if you want to beat the busy time and catch a sunrise. I wore spikes and I'm glad I did but there were definitely people doing it without them. Like a previous user said it's mostly at the beginning and end. Enjoy!", rating: 5)
revEm3 = Review.create!(user_id: user3.id, trail_id: emerald.id, date: "2021-01-01", description: "Have done this hike several times over the years and it never disappoints! Hiked it this past Sunday, 10/31. Less crowded this time of year, plenty of parking at Bear Lake trailhead. Lots of ice on the trail. People were doing it in sneakers, but I would highly recommend bringing microspikes. I wore mine the entire hike,  except at the very beginning and end. Got caught in a bit of a snow storm leaving Emerald Lake, and ran into a momma moose and two moose babies on the trail at Dream Lake on the way up.", rating: 5)
revEm4 = Review.create!(user_id: user4.id, trail_id: emerald.id, date: "2021-01-01", description: "Maybe the most touristy hike in the park, but that doesn't make it bad by any means. Plenty of traffic when the weather is decent and really beautiful paths and views. Each lake is a treat to stop at and enjoy and nice for a break as well. You can reach Haiyaha from this trail and you definitely should. Great payoff at the end, highly recommend this hike. ", rating: 5)
revEm5 = Review.create!(user_id: user5.id, trail_id: emerald.id, date: "2021-01-01", description: "Been here a couple of times - the most recent trip was back in late August. The trail is really straight forward and super busy when there's no snow. All the lakes are beautiful. My favorite of the lot being Dream Lake and the mini waterfall right before it. Nymph lake is pretty quiet than the other two. Great views of Long's peak and the other mountains from the trail. ", rating: 5)

revSk1 = Review.create!(user_id: user5.id, trail_id: sky.id, date: "2021-01-01", rating: 5, description: "Started around 6:30 AM, not too cold until we got to the scramble before Lake of Glass — and that was a scramble! Verrrry windy at the top. We had spikes and poles, and thank goodness for that because we would not have made it to the top. We didn’t put the spikes on until about a mile in from the trailhead, but they were useful all the way up and back. My first ever difficult hike, and it was the longest. I am not a seasoned hiker, but it was the most fun I’ve ever had, even if it was the most difficult thing I’d done!" )
revSk2 = Review.create!(user_id: user4.id, trail_id: sky.id, date: "2021-01-01", rating: 5, description: "One of, if not the best trail in RMNP. Spikes required for this time of year once you get past loch lake but the trail is well marked all the way through. Waist high snow in some areas at the top but definitely still hikeable." )
revSk3 = Review.create!(user_id: user3.id, trail_id: sky.id, date: "2021-01-01", rating: 5, description: "Amazing hike but you’re going to need spikes pretty much from the parking lot at this time of year. The scramble up the waterfall is frozen, making it even more challenging. There are two lakes after climbing the waterfall, make sure you keep going! It’s not well marked but so worth it!" )
revSk4 = Review.create!(user_id: user2.id, trail_id: sky.id, date: "2021-01-01", rating: 5, description: "Climbed to the top of the waterfall which required spikes. After about 10 minutes at the top we had to turn around due to the winds. (over 50mph gusts easily). Great view at the top though. " )
revSk5 = Review.create!(user_id: user1.id, trail_id: sky.id, date: "2021-01-01", rating: 5, description: "Would recommend arriving early, we got to the trailhead around 8:15 and there were only ~3 spots still available. You don't really need microspikes until the Loch and then I'd definitely recommend. The waterfall to Lake of Glass is extremely icy in most areas making the ascent/descent difficult and slippery. You don't need spikes after Lake of Glass since the area is bathed in sunlight and fairly ice/snow free." )

revAl1= Review.create!(user_id: user2.id, trail_id: alberta.id, date: "2021-01-01", rating: 5, description: "Great hike. Family friendly. A little bit icy right now. But well worth it and definitely manageable. Views of the aspens and the falls are top notch!" )
revAl2= Review.create!(user_id: user1.id, trail_id: alberta.id, date: "2021-01-01", rating: 5, description: "It was ok, I wish I would have done it first that day. We’d already done Bear and Dream and the trail was a little more demanding than I expected (had a toddler we were carrying at this point). Definitely not a stroll like Bear Lake. Went on a Sunday so the falls were so crowded we couldn’t really get any good pictures or even sit where we could see it.  I would do this hike again on a weekday, or early morning next time. The falls were a bit anti-climactic after the lakes and by far the most crowded hike we did that day. It’s a beautiful trail though, especially during leaf season." )
revAl3= Review.create!(user_id: user4.id, trail_id: alberta.id, date: "2021-01-01", rating: 5, description: "Fun moderate hike. Dream Lake is probably beautiful, but it was fogged in so I’ll never know. Well maintained, very busy. No parking available at the trailhead; we took the shuttle." )
revAl4= Review.create!(user_id: user3.id, trail_id: alberta.id, date: "2021-01-01", rating: 5, description: "Easy hike. Beautiful view of a canyon just before the waterfall. Tons of wildlife on the trail. If the Glacier lot is full and you have to park at Bear Lake, park as close to the road as you can. There is a horse trail that connects to the main trail. It will shave 0.1 off your route. " )
revAl5= Review.create!(user_id: user5.id, trail_id: alberta.id, date: "2021-01-01", rating: 5, description: "Beautiful hike. In the summer best to arrive by 7 am to find a parking space and to beat the crowds. We hiked to the waterfall then walked back to Bear Lake, Nymph Lake and Emerald Lake, which Emerald lake is spectacular." )

revGe1= Review.create!(user_id: user5.id, trail_id: gem.id, date: "2021-01-01", rating: 5, description: "Great views throughout the hike. Lake is underwhelming. But  with this trail it is not the destination but the journey that matters. Climbs at the beginning and end middle relatively level. Was snow and ice free Nov7" )
revGe2= Review.create!(user_id: user3.id, trail_id: gem.id, date: "2021-01-01", rating: 5, description: "Pretty decent trail. Views are good at some points but the lake was a little disappointing. Very windy at the top. If there weren’t better trails nearby this one would be great but knowing emerald lake trail is nearby makes this seem like a waste of time in my opinion." )
revGe3= Review.create!(user_id: user2.id, trail_id: gem.id, date: "2021-01-01", rating: 5, description: "Great short hike with good workout and stunning scenery.  Lake was windy-rest of the trail mostly sheltered.  Plenty of parking at 8:45 am but almost full by 11:30 am on a Friday.  Definitely getting busy toward noon time. Expect rocky and steep trails in parts. Took me about 2 hours and 40 minutes." )
revGe4= Review.create!(user_id: user1.id, trail_id: gem.id, date: "2021-01-01", rating: 5, description: "So many beautiful vistas on this hike, highly recommend trekking poles as the upper steps are pretty steep. The lake initially does appear as underwhelming, but it’s much more striking when taking the trail to the left to the far end of the lake and look south. I would definitely hike this again and allow time to continue us on to Balanced Rock. " )
revGe5= Review.create!(user_id: user4.id, trail_id: gem.id, date: "2021-01-01", rating: 5, description: "Beautiful trails with beautiful views all the way up! Gem Lake was very pretty & very windy. The ascend was tough for these Hoosier lungs, but there was plenty of places to take a quick break. Recommend!!" )

revCh1= Review.create!(user_id: user2.id, trail_id: chasm.id, date: "2021-01-01", rating: 5, description: "Well maintained trail, quite windy in the last mile up but great weather most of the way. There wasn’t too much ice in the last climb, sun was out and I suppose melted quite a bit. Stayed towards the left on the last climb up to the lake, a little bit more difficult but there wasn’t any ice to deal with. " )
revCh2= Review.create!(user_id: user3.id, trail_id: chasm.id, date: "2021-01-01", rating: 5, description: "Took us 4.7 miles to get to Chasm Lake from the trailhead, 9.15 total hike, 2,631 feet in elevation gain. The trail was clear and dry, but there were A LOT of steps the entire way. The scramble to Chasm was hard… there’s no clear path to the lake (and it was a sheet of ice on one of the potential routes) so we rock climbed up. Before Chasm, you will also see Peacock Pool and some other small water falls. Weather was perfect, not too hot or cold but a little bit windy in certain parts." )
revCh3= Review.create!(user_id: user1.id, trail_id: chasm.id, date: "2021-01-01", rating: 5, description: "Absolutely stunning! Ice wasn’t too bad and spikes weren’t necessary! Definitely recommend gloves with rubber to help with rock scramble at the end! Saw a couple moose on the trail! Super cool but please be careful!! Arrived at 8:30 am at trailhead and plenty of parking left! :) " )
revCh4= Review.create!(user_id: user4.id, trail_id: chasm.id, date: "2021-01-01", rating: 5, description: "Wind and snow to maneuver from last nights snowfall. Drifts 4-8” some ice at the top. Wind gusts 40 mph+ which became sustained after 3pm. A few frozen falls on the way up to the Alpine hike, not much to look at except the stairs until you get above the treeline. If you can make it that far its a big elevation gain but you are rewarded with incredible views.  Worth it" )
revCh5= Review.create!(user_id: user5.id, trail_id: chasm.id, date: "2021-01-01", rating: 5, description: "Got to trail head about 5:45 am, only a few cars in parking lot.  Started the hike around 6:30 when it was light enough to see without headlamp.  Great hike, well maintained and marked trail.  Somewhere between moderate and difficult.  Lots of ice on scramble at end but still doable, even for us without crampons.  It was pretty cold at start and up top.  3 hours up, 2 hours back.  Parking lot was still only half full when we were leaving.  " )








