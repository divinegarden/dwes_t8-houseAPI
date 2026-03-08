export const users = [
    {
        "id": "0933a07d-a832-4602-b34c-dc16c0a32b5b",
        "email": "test@google.com",
        "password": "$2y$10$N9jvCspHhC8m6xUrozW6O.zgzSlRs38/xPSjde63KyJrr3Vk8NnyO",
        "fullName": "Admin Tester",
        "isActive": true,
        "roles": [
            "admin"
        ]
    },
    {
        "id": "80ba6e8b-599f-4fbb-83fa-403cc2b92f6e",
        "email": "test1@google.com",
        "password": "$2a$10$5/2xowOA/JQL4820gXezKuN9MYW2H1HU7lAGMl87KTuioOr2weOi.",
        "fullName": "Juan Carlos",
        "isActive": true,
        "roles": [
            "admin"
        ]
    },
    {
        "id": "c0354a21-79ea-453b-8e86-f52b57a250fd",
        "email": "test2@google.com",
        "password": "$2a$10$dQSjafvbKY5tOucAdYxJQOs48fHYtmJsd/vt2b/1Cmvb4m350Z/JG",
        "fullName": "María Solano",
        "isActive": true,
        "roles": [
            "user",
            "super"
        ]
    }
];

export const houseImages = [
    {
        "url": "apt_downtown_1",
        "houseId": "11111111-2222-3333-4444-000000000001"
    },
    {
        "url": "apt_downtown_2",
        "houseId": "11111111-2222-3333-4444-000000000001"
    },
    {
        "url": "apt_downtown_3",
        "houseId": "11111111-2222-3333-4444-000000000001"
    },
    {
        "url": "suburban_home_1",
        "houseId": "11111111-2222-3333-4444-000000000002"
    },
    {
        "url": "suburban_home_2",
        "houseId": "11111111-2222-3333-4444-000000000002"
    },
    {
        "url": "penthouse_1",
        "houseId": "11111111-2222-3333-4444-000000000003"
    },
    {
        "url": "penthouse_2",
        "houseId": "11111111-2222-3333-4444-000000000003"
    },
    {
        "url": "penthouse_3",
        "houseId": "11111111-2222-3333-4444-000000000003"
    },
    {
        "url": "penthouse_4",
        "houseId": "11111111-2222-3333-4444-000000000003"
    },
    {
        "url": "cabin_front",
        "houseId": "11111111-2222-3333-4444-000000000004"
    },
    {
        "url": "cabin_interior",
        "houseId": "11111111-2222-3333-4444-000000000004"
    },
    {
        "url": "villa_exterior",
        "houseId": "11111111-2222-3333-4444-000000000005"
    },
    {
        "url": "villa_pool",
        "houseId": "11111111-2222-3333-4444-000000000005"
    },
    {
        "url": "villa_living",
        "houseId": "11111111-2222-3333-4444-000000000005"
    },
    {
        "url": "studio_main",
        "houseId": "11111111-2222-3333-4444-000000000006"
    },
    {
        "url": "studio_kitchen",
        "houseId": "11111111-2222-3333-4444-000000000006"
    },
    {
        "url": "townhouse_ext",
        "houseId": "11111111-2222-3333-4444-000000000007"
    },
    {
        "url": "townhouse_living",
        "houseId": "11111111-2222-3333-4444-000000000007"
    },
    {
        "url": "townhouse_courtyard",
        "houseId": "11111111-2222-3333-4444-000000000007"
    },
    {
        "url": "tiny_home_1",
        "houseId": "11111111-2222-3333-4444-000000000008"
    },
    {
        "url": "tiny_home_2",
        "houseId": "11111111-2222-3333-4444-000000000008"
    }
];

export const houses = [
    {
        "id": "11111111-2222-3333-4444-000000000001",
        "title": "Modern Apartment in Downtown",
        "price": 350000,
        "description": "A beautiful, newly renovated modern apartment in the heart of downtown. Features an open concept living area, high-end stainless steel appliances, and large floor-to-ceiling windows offering lots of natural light.",
        "slug": "modern_apartment_in_downtown",
        "rooms": 2,
        "bathrooms": 2,
        "squareMeters": 85,
        "propertyType": "apartment",
        "tags": [
            "modern",
            "downtown",
            "renovated"
        ],
        "userId": "80ba6e8b-599f-4fbb-83fa-403cc2b92f6e"
    },
    {
        "id": "11111111-2222-3333-4444-000000000002",
        "title": "Cozy Suburban Family Home",
        "price": 520000,
        "description": "Spacious family home located in a quiet, highly sought-after suburban neighborhood. Includes a large backyard perfect for children and an attached two-car garage. Recent upgrades to the kitchen and master bath.",
        "slug": "cozy_suburban_family_home",
        "rooms": 4,
        "bathrooms": 3,
        "squareMeters": 210,
        "propertyType": "house",
        "tags": [
            "family",
            "suburbs",
            "garage"
        ],
        "userId": "80ba6e8b-599f-4fbb-83fa-403cc2b92f6e"
    },
    {
        "id": "11111111-2222-3333-4444-000000000003",
        "title": "Luxury Penthouse with City Views",
        "price": 1250000,
        "description": "Experience ultimate luxury in this stunning penthouse suite. Offers panoramic views of the city skyline, a private rooftop terrace with a jacuzzi, and smart home technology throughout.",
        "slug": "luxury_penthouse_city_views",
        "rooms": 3,
        "bathrooms": 4,
        "squareMeters": 320,
        "propertyType": "penthouse",
        "tags": [
            "luxury",
            "penthouse",
            "views",
            "rooftop"
        ],
        "userId": "80ba6e8b-599f-4fbb-83fa-403cc2b92f6e"
    },
    {
        "id": "11111111-2222-3333-4444-000000000004",
        "title": "Rustic Countryside Cabin",
        "price": 210000,
        "description": "Charming log cabin nestled in the woods, perfect as a vacation home or a peaceful year-round retreat. Features a stone fireplace, wrap-around porch, and over an acre of private land.",
        "slug": "rustic_countryside_cabin",
        "rooms": 2,
        "bathrooms": 1,
        "squareMeters": 95,
        "propertyType": "cabin",
        "tags": [
            "rustic",
            "nature",
            "quiet"
        ],
        "userId": "80ba6e8b-599f-4fbb-83fa-403cc2b92f6e"
    },
    {
        "id": "11111111-2222-3333-4444-000000000005",
        "title": "Beachfront Villa",
        "price": 2800000,
        "description": "Stunning villa sitting directly on the white sandy beaches. Includes a private infinity pool facing the ocean, outdoor kitchen, and private beach access. An absolute dream home.",
        "slug": "beachfront_villa",
        "rooms": 5,
        "bathrooms": 6,
        "squareMeters": 450,
        "propertyType": "villa",
        "tags": [
            "beach",
            "villa",
            "luxury",
            "pool"
        ],
        "userId": "80ba6e8b-599f-4fbb-83fa-403cc2b92f6e"
    },
    {
        "id": "11111111-2222-3333-4444-000000000006",
        "title": "Compact Studio near University",
        "price": 150000,
        "description": "Efficiently designed studio apartment within walking distance to the university campus. Ideal for students or young professionals looking for a convenient and affordable living space.",
        "slug": "compact_studio_university",
        "rooms": 1,
        "bathrooms": 1,
        "squareMeters": 40,
        "propertyType": "studio",
        "tags": [
            "studio",
            "affordable",
            "university"
        ],
        "userId": "80ba6e8b-599f-4fbb-83fa-403cc2b92f6e"
    },
    {
        "id": "11111111-2222-3333-4444-000000000007",
        "title": "Renovated Historic Townhouse",
        "price": 780000,
        "description": "Beautifully preserved historic townhouse with modern interior updates. Features original exposed brick walls, hardwood floors, a private courtyard, and a fully finished basement.",
        "slug": "renovated_historic_townhouse",
        "rooms": 3,
        "bathrooms": 3,
        "squareMeters": 180,
        "propertyType": "townhouse",
        "tags": [
            "historic",
            "townhouse",
            "brick"
        ],
        "userId": "80ba6e8b-599f-4fbb-83fa-403cc2b92f6e"
    },
    {
        "id": "11111111-2222-3333-4444-000000000008",
        "title": "Eco-Friendly Tiny Home",
        "price": 85000,
        "description": "A fully self-sufficient tiny home equipped with solar panels and a rainwater collection system. Cleverly designed storage solutions make this compact space feel incredibly open and functional.",
        "slug": "eco_friendly_tiny_home",
        "rooms": 1,
        "bathrooms": 1,
        "squareMeters": 25,
        "propertyType": "tiny_home",
        "tags": [
            "eco",
            "tiny",
            "solar"
        ],
        "userId": "80ba6e8b-599f-4fbb-83fa-403cc2b92f6e"
    }
];
