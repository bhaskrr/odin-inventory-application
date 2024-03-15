const Category = require('./models/category');

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const mongoDB = "mongodb+srv://bhaskarbordoloi:OzpLy2lvJEw3LR71@cluster0.llcewnk.mongodb.net/inventory_data?retryWrites=true&w=majority&appName=Cluster0"

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createCategories();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

async function createCategory(name, description){
    const categoryDetail = {name, description};

    const category = new Category(categoryDetail);

    await category.save();

    console.log(`New category ${name} created`);
}

async function createCategories(){
    // await createCategory('Electronics','This category encompasses a wide range of electronic devices and components used for various purposes. It includes items powered by electricity or semiconductors, typically used for entertainment, communication, computing, or household applications.')
    // await createCategory('Furniture','This category covers a wide range of movable items used for furnishing a space, providing seating, storage, and functionality. It includes furniture for homes, offices, and other commercial settings.')
    // await createCategory('Beauty','This category encompasses a wide range of products used for personal care, cosmetics, and fragrance. It includes items for skincare, makeup, haircare, bath and body, and fragrances.')
    // await createCategory('Health','This category covers products that promote health, wellness, and personal hygiene. It includes items for general health, nutrition, fitness, and medical supplies.')
    // await createCategory('Sports','This category encompasses equipment, apparel, and footwear specifically designed for athletic activities and exercise.')
    // await createCategory('Clothing','This category covers clothing, footwear, and accessories for personal style and appearance. It includes items for men, women, and children.')
    // await createCategory('Books','This category covers printed publications containing information, stories, or entertainment. It includes fiction, non-fiction, textbooks, children\'s books.')
    // await createCategory('Toys','This category includes products for children\'s play and entertainment. It covers a wide range of toys from educational to imaginative play.')
}
