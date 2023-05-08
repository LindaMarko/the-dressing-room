import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Linda',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Linda',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Adidas NMD',
      slug: 'adidas-nmd',
      category: 'Sneakers',
      image: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
      price: 150,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Adidas Yeezy',
      slug: 'adidas-yeezy',
      category: 'Sneakers',
      image: 'https://i.ibb.co/dJbG1cT/yeezy.png',
      price: 180,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Black Converse',
      slug: 'black-converse',
      category: 'Sneakers',
      image: 'https://i.ibb.co/bPmVXyP/black-converse.png',
      price: 110,
      brand: 'Converse',
      rating: 4,
      numReviews: 15,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Nike White AirForce',
      slug: 'nike-white -airforce',
      category: 'Sneakers',
      image: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
      price: 160,
      brand: 'Nike',
      rating: 4.8,
      numReviews: 25,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Nike Red High Tops',
      slug: 'nike-red-high-tops',
      category: 'Sneakers',
      image: 'https://i.ibb.co/QcvzydB/nikes-red.png',
      price: 160,
      brand: 'Nike',
      rating: 4.3,
      numReviews: 23,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Nike Brown High Tops',
      slug: 'nike-brown-high-tops',
      category: 'Sneakers',
      image: 'https://i.ibb.co/fMTV342/nike-brown.png',
      price: 160,
      brand: 'Nike',
      rating: 4.1,
      numReviews: 23,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Air Jordan Limited',
      slug: 'air-jordan-limited',
      category: 'Sneakers',
      image: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
      price: 190,
      brand: 'Nike',
      rating: 4.9,
      numReviews: 29,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Brown Brim',
      slug: 'brown-brim',
      category: 'Hats',
      image: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      price: 45,
      brand: 'Casely',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Grey Brim',
      slug: 'grey-brim',
      category: 'Hats',
      image: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
      price: 40,
      brand: 'Casely',
      rating: 5,
      numReviews: 8,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Brown Cowboy',
      slug: 'brown-cowboy',
      category: 'Hats',
      image: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
      price: 35,
      brand: 'Casely',
      rating: 4,
      numReviews: 13,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Palm Tree Cap',
      slug: 'palm-tree-cap',
      category: 'Hats',
      image: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
      price: 25,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 16,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Wolf Cap',
      slug: 'wolf-cap',
      category: 'Hats',
      image: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
      price: 20,
      brand: 'Oliver',
      rating: 3,
      numReviews: 6,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Blue Snapback',
      slug: 'blue-snapback',
      category: 'Hats',
      image: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
      price: 20,
      brand: 'Adidas',
      rating: 4.3,
      numReviews: 6,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Blue Tanktop',
      slug: 'blue-tanktop',
      category: 'Womens',
      image: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
      price: 70,
      brand: 'Nike',
      rating: 4,
      numReviews: 4,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Floral Dress',
      slug: 'floral-dress',
      category: 'Womens',
      image: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
      price: 70,
      brand: 'Casely',
      rating: 3.5,
      numReviews: 8,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Red Dots Dress',
      slug: 'red-dots-dress',
      category: 'Womens',
      image: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
      price: 80,
      brand: 'Casely',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Striped Sweater',
      slug: 'striped-sweater',
      category: 'Womens',
      image: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
      price: 60,
      brand: 'Zara',
      rating: 5,
      numReviews: 8,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Yellow Track Suit',
      slug: 'yellow-track-suit',
      category: 'Womens',
      image: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
      price: 80,
      brand: 'Nike',
      rating: 4.2,
      numReviews: 20,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'White Blouse',
      slug: 'white-blouse',
      category: 'Womens',
      image: 'https://i.ibb.co/qBcrsJg/white-vest.png',
      price: 30,
      brand: 'Zara',
      rating: 4,
      numReviews: 4,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Floral T-shirt',
      slug: 'floral-t-shirt',
      category: 'Mens',
      image: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
      price: 80,
      brand: 'Adidas',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'B&W Longsleeve',
      slug: 'black-white-longsleeve',
      category: 'Mens',
      image: 'https://i.ibb.co/55z32tw/long-sleeve.png',
      price: 90,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Pink T-shirt',
      slug: 'pink-t-shirt',
      category: 'Mens',
      image: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
      price: 90,
      brand: 'Oliver',
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Jean Long Sleeve',
      slug: 'jean-long-sleeve',
      category: 'Mens',
      image: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
      price: 95,
      brand: 'Zara',
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
    {
      name: 'Burgundy T-shirt',
      slug: 'burgundy-t-shirt',
      category: 'Mens',
      image: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
      price: 75,
      brand: 'Casely',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description:
        'Yuccie cronut tofu, vaporware aute helvetica pop-up hoodie taxidermy banh mi non. Sriracha lyft flannel fit deep v laborum, polaroid godard ramps kogi aliqua put a bird on it portland cillum kickstarter.',
    },
  ],
};

export default data;
