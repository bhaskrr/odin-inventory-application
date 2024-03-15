const Item = require('./models/item')
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const mongoDB = "mongodb+srv://bhaskarbordoloi:OzpLy2lvJEw3LR71@cluster0.llcewnk.mongodb.net/inventory_data?retryWrites=true&w=majority&appName=Cluster0"

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createItems();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

async function createItem(name, description, category, price, num_in_stock) {
    const itemDetail = { name, description, category, price, num_in_stock };

    const item = new Item(itemDetail);

    await item.save();

    console.log(`New item ${name} created`);
}

async function createItems() {
    // await createItem("Revitalizing Night Cream","Luxurious night cream to nourish and rejuvenate your skin.","Beauty",64.64,19);
    // await createItem("Wireless Headphones","High-fidelity wireless headphones for immersive sound.","Electronics",92.45,12);
    // await createItem("Fantasy Adventure Novel", "Epic fantasy novel filled with magic, adventure, and wonder.","Books",	46.19,2);
    // await createItem("Historical Fiction Novel", "Gripping historical fiction novel based on a true story.","Books",98.45,8);
    // await createItem("Modern Accent Chair",	"Stylish and comfortable accent chair to add a touch of elegance to your living room.","Furniture",	22.55,1);
    // await createItem("4K Smart TV", "Large-screen 4K Smart TV for an incredible viewing experience.", "Electronics",49.06,19);
    // await createItem("Illuminating Face Serum", "Lightweight face serum to brighten and even your skin tone.","Beauty",24.04,12);
    // await createItem("Portable Phone Charger", "Compact and powerful portable charger to keep your phone powered up on the go.", "Electronics",27.37,5);
    // await createItem("Virtual Reality Headset","Explore new worlds and experiences with this virtual reality headset.",	"Electronics",78.98,17);
    // await createItem("Classic Literature Collection","Box set containing some of the greatest works of classic literature.","Books",43.3,20);
    // await createItem("Anti-Aging Moisturizer","Rich moisturizer to reduce the appearance of wrinkles and fine lines.","Beauty",	95.7,12);
    // await createItem("Designer Dress","Elegant designer dress perfect for a special occasion.","Clothing",89.23,16);
    // await createItem("Modern Coffee Table","Sleek and stylish coffee table for your living room.","Furniture",95.3,17);
    // await createItem("Tinted Lip Balm","Hydrating lip balm with a hint of color.","Beauty",95.93,10);
    // await createItem("Science Fiction Novel","Thought-provoking science fiction novel that will challenge your imagination.","Books",95.36,6);
    // await createItem("Bluetooth Speaker", "Portable Bluetooth speaker for high-quality sound anywhere.","Electronics",39.27,2);
    // await createItem("Outdoor Patio Set","Comfortable and stylish patio set for enjoying the outdoors.","Furniture",65.77,14);
    // await createItem("Remote Control Car","Feature-packed remote control car for hours of fun.","Toys",94.02,5);
    // await createItem("Historical Biography","Inspiring biography of a historical figure.","Books",55.36,2);
    // await createItem("Mystery Thriller Novel","Suspenseful mystery thriller novel that will keep you guessing until the end.","Books",52.02,17);

    // await createItem("Cashmere Crewneck Sweater", "Luxuriously soft and warm crewneck sweater made from premium cashmere.", "Clothing", 149.99, 19);
    // await createItem("Linen Blend Dress Pants", "Comfortable and stylish dress pants made from a breathable linen blend.", "Clothing", 79.95, 32);
    // await createItem("Activewear Leggings", "High-performance leggings for yoga, running, or any workout.", "Clothing", 49.99, 88);
    // await createItem("Denim Jacket", "Classic and versatile denim jacket perfect for everyday wear.", "Clothing", 84.5, 15);
    // await createItem("Leather Boots", "Durable and stylish leather boots for cooler weather.", "Clothing", 199, 10);
    // await createItem("Silk Cami", "Delicate and feminine cami made from pure silk.", "Clothing", 64.75, 21);
    // await createItem("Patterned Scarf", "Cozy and colorful scarf to add a touch of style to any outfit.", "Clothing", 29.95, 42);
    // await createItem("Baseball Cap", "Casual and comfortable baseball cap with your favorite team logo.", "Clothing", 24.99, 58);
    // await createItem("Sustainable Swimsuit", "Eco-friendly swimsuit made from recycled materials.", "Clothing", 75.5, 12);
    // await createItem("Activewear Shorts", "Breathable and lightweight shorts for workouts or everyday wear.", "Clothing", 34.99, 74);

    // await createItem("Yoga Mat", "High-density yoga mat for comfortable and supportive practice.", "Sports", 39.99, 27)
    // await createItem("Basketball", "Official-size basketball for indoor or outdoor play.", "Sports", 4.95, 45)
    // await createItem("Resistance Bands", "Set of resistance bands for strength training and physical therapy.", "Sports", 19.99, 33)
    // await createItem("Jump Rope", "Weighted jump rope for a challenging cardio workout.", "Sports", 14.99, 18)
    // await createItem("Soccer Ball", "Durable soccer ball for matches or practice.", "Sports", 29.95, 22)
    // await createItem("Tennis Racket", "Lightweight and powerful tennis racket for all levels.", "Sports", 129.99, 8)
    // await createItem("Golf Clubs (Set)", "Complete set of golf clubs for beginners and experienced players.", "Sports", 399, 3)
    // await createItem("Baseball Bat", "High-quality baseball bat made from wood or composite materials.", "Sports", 79.99, 14)
    // await createItem("Bicycle Helmet", "Safe and comfortable bicycle helmet for all ages.", "Sports", 44.95, 39)
    // await createItem("Running Shoes", "Performance running shoes for maximum comfort and support.", "Sports", 99.99, 25)

    // await createItem("Multivitamin", "Daily multivitamin with essential vitamins and minerals.", "Health", 24.99, 12)
    // await createItem("Protein Powder", "High - quality protein powder to support muscle growth and recovery.", "Health", 39.95, 54)
    // await createItem("Water Bottle", "Reusable water bottle to stay hydrated throughout the day.", "Health", 19.99, 82)
    // await createItem("Yoga Mat Strap", "Convenient strap to carry your yoga mat easily.", "Health", 14.99, 61)
    // await createItem("Meditation Cushion", "Comfortable cushion for meditation practice.", "Health", 34.95, 37)
    // await createItem("Digital Scale", "Accurate and easy - to - use scale to track your weight.", "Health", 29.99, 29)
    // await createItem("Air Purifier", "Improves air quality and removes allergens from your home.", "Health", 149.00, 5)
    // await createItem("Essential Oil", "Diffuser	Diffuses essential oils for aromatherapy and relaxation.", "Health", 39.99, 17)
    // await createItem("Fitness Tracker", "Tracks your steps, calories burned, and sleep patterns.", "Health", 79.99, 48)
    // await createItem("Stress Ball", "Squeezable stress ball to relieve tension and anxiety.", "Health", 9.99, 92)

    // await createItem("Remote Control Car (Stunt)", "Performs flips, spins, and off-road maneuvers.", "Toys", 79.99, 52)
    // await createItem("Art Set (Deluxe)", "Includes a wide variety of paints, brushes, crayons, markers, and drawing paper.", "Toys", 54.95, 38)
    // await createItem("Building Blocks (Magnetic)","Magnetic tiles that snap together for creative and imaginative play.", "Toys", 39.99, 85)
    // await createItem("Board Game (Strategy)","A challenging and engaging strategy game for the whole family.", "Toys", 29.95, 47)
    // await createItem("Coding Robot","Teaches children basic coding concepts through fun and interactive play.", "Toys", 99.99, 21)
    // await createItem("Dollhouse (Modern)","A stylish and modern dollhouse with furniture and accessories.", "Toys", 129.99, 14)
    // await createItem("Dress-Up Clothes","A variety of dress-up clothes and accessories for imaginative play.", "Toys", 49.99, 63)
    // await createItem("Educational Microscope","Allows children to explore the world in close detail.", "Toys", 44.95, 29)
    // await createItem("Electronic Learning Tablet","Teaches children letters, numbers, shapes, and more through interactive games.", "Toys", 39.99, 81)
    // await createItem("Musical Instrument (Toy Keyboard)","Introduces children to music and allows them to create their own melodies.", "Toys", 24.99, 72)
    // await createItem("Play Tent","Provides a cozy and imaginative space for children to play.", "Toys", 34.99, 58)
    // await createItem("Plush Pet Carrier","A soft and cuddly carrier for children to take their favorite stuffed animals on the go.", "Toys", 19.99, 44)
    // await createItem("Puzzle (3D)","A challenging and rewarding 3D puzzle for children and adults alike.", "Toys", 24.99, 19)
    // await createItem("Science Kit (Chemistry)","Introduces children to basic chemistry concepts through safe and fun experiments.", "Toys", 49.99, 32)
    // await createItem("Slime Kit","Allows children to create their own slime in different colors and textures.", "Toys", 14.99, 88)
    // await createItem("Water Gun (Soaker)","Perfect for a summer day of fun.", "Toys", 9.99, 95)
    // await createItem("Wooden Train Set","A classic and timeless toy that encourages creativity and imagination.", "Toys", 69.99, 27)
}