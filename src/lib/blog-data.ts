export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    author: string;
    image: string;
    category: string;
    content: string; // HTML content
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        slug: "tesla-the-electric-evolution",
        title: "Tesla The Electric Evolution",
        excerpt: "Tesla, Inc. is an American multinational corporation that specializes in electric vehicles.",
        date: "Nov 25, 2025",
        readTime: "5 min read",
        author: "Admin",
        image: "/images/blog/tesla.png",
        category: "EV News",
        content: `
            <p>Tesla, Inc. is an American multinational corporation that specializes in electric vehicles, energy storage and solar panel manufacturing based in Palo Alto, California. Tesla was founded in 2003 by a group of engineers who wanted to prove that people didn't need to compromise to drive electric – that electric vehicles can be better, quicker and more fun to drive than gasoline cars.</p>
            <h3>The Mission</h3>
            <p>Tesla's mission is to accelerate the world's transition to sustainable energy. To achieve this, Tesla builds infinitely scalable clean energy generation and storage products.</p>
            <h3>Innovation</h3>
            <p>Tesla believes the faster the world stops relying on fossil fuels and moves towards a zero-emission future, the better. Tesla launched the Roadster in 2008, followed by the Model S, Model X, Model 3, and Model Y.</p>
        `
    },
    {
        id: 2,
        slug: "pollution",
        title: "Pollution",
        excerpt: "Petrol and diesel vehicles are a major source of pollution. Understanding the impact is crucial for our future.",
        date: "Nov 24, 2025",
        readTime: "4 min read",
        author: "Admin",
        image: "/images/blog/pollution.jpg",
        category: "Environment",
        content: `
            <p>Petrol and diesel vehicles are a major source of pollution. They emit harmful pollutants such as carbon monoxide, nitrogen oxides, and particulate matter, which contribute to air quality degradation and climate change.</p>
            <h3>The Impact</h3>
            <p>Air pollution causes significant health problems, including respiratory infections, heart disease, and lung cancer. It also harms the environment by contributing to acid rain, eutrophication, and haze.</p>
            <h3>Solutions</h3>
            <p>Transitioning to electric vehicles, improving public transportation, and promoting active mobility like cycling and walking are key steps to reducing vehicle pollution.</p>
        `
    },
    {
        id: 3,
        slug: "pollution-in-india",
        title: "Pollution in India",
        excerpt: "Air pollution in India is a major environmental issue that affects the health and well-being of millions.",
        date: "Nov 22, 2025",
        readTime: "6 min read",
        author: "Admin",
        image: "/images/blog/india-pollution.jpg",
        category: "Environment",
        content: `
            <p>Air pollution in India is a major environmental issue. Of the 30 most polluted cities in the world, 21 were in India in 2019. Sources include vehicle exhaust, heavy industry, construction dust, and crop burning.</p>
            <h3>Health Crisis</h3>
            <p>The toxic air quality leads to millions of premature deaths annually. Children and the elderly are particularly vulnerable to the effects of smog and particulate matter.</p>
            <h3>Government Initiatives</h3>
            <p>The government has launched the National Clean Air Programme (NCAP) to reduce particulate matter pollution by 20-30% by 2024. Stricter emission norms (BS-VI) have also been implemented.</p>
        `
    },
    {
        id: 4,
        slug: "how-to-drive",
        title: "How to Drive ?",
        excerpt: "Driving vehicles is a necessary part of modern life, but it also has a significant impact on fuel consumption.",
        date: "Nov 20, 2025",
        readTime: "7 min read",
        author: "Admin",
        image: "/images/blog/how-to-drive.jpg",
        category: "Tips",
        content: `
            <p>Driving vehicles is a necessary part of modern life, but it also has a significant impact on fuel consumption and safety. Adopting eco-driving habits can save money and reduce emissions.</p>
            <h3>Eco-Driving Tips</h3>
            <ul>
                <li><strong>Accelerate Gently:</strong> Avoid rapid starts to save fuel.</li>
                <li><strong>Maintain Steady Speed:</strong> Use cruise control on highways.</li>
                <li><strong>Anticipate Traffic:</strong> Look ahead to avoid unnecessary braking.</li>
                <li><strong>Check Tire Pressure:</strong> Under-inflated tires increase rolling resistance.</li>
            </ul>
        `
    },
    {
        id: 5,
        slug: "fuel-efficiency-training",
        title: "Fuel Efficiency Training (Govt. Of India)",
        excerpt: "The Government of India has implemented a Fuel Efficiency Training Scheme (FETS) to promote better driving habits.",
        date: "Nov 18, 2025",
        readTime: "5 min read",
        author: "Admin",
        image: "/images/blog/fuel-training.jpg",
        category: "Government",
        content: `
            <p>The Government of India has implemented a Fuel Efficiency Training Scheme (FETS) to promote better driving habits among commercial vehicle drivers.</p>
            <h3>Objectives</h3>
            <p>The main objective is to reduce fuel consumption in the transport sector, which is a major consumer of petroleum products. The training covers vehicle maintenance, driving techniques, and safety.</p>
            <h3>Benefits</h3>
            <p>Drivers who undergo this training have reported fuel savings of up to 10-15%. This not only reduces operational costs but also lowers the environmental footprint of the logistics industry.</p>
        `
    }
];

export const FEATURED_POST: BlogPost = {
    id: 0,
    slug: "meet-fuelabc-app",
    title: "MEET AN APP THAT HELPS YOU RIDE RIGHT AND SAVE FUEL",
    excerpt: "An innovative solution for fuel saving, Cost per km, Mileage tracking, and reducing your carbon footprint. Discover how FUELabc is changing the way we drive.",
    date: "Nov 27, 2025",
    readTime: "8 min read",
    author: "FUELabc Team",
    image: "/images/blog/featured.png",
    category: "Featured",
    content: `
        <p><strong>MEET AN APP THAT HELPS YOU RIDE RIGHT AND SAVE FUEL.</strong></p>
        <p>An innovative solution for fuel saving, Cost per km, Mileage tracking, and reducing your carbon footprint. Discover how FUELabc is changing the way we drive.</p>
        <h3>Key Features</h3>
        <ul>
            <li><strong>Mileage Tracking:</strong> Keep accurate records of your vehicle's performance.</li>
            <li><strong>Cost Analysis:</strong> Understand your cost per kilometer to optimize spending.</li>
            <li><strong>Reminders:</strong> Get timely alerts for DL, RC, PUC, and Insurance renewals.</li>
            <li><strong>Fuel Prices:</strong> Check district-wise fuel prices instantly.</li>
        </ul>
        <h3>Why Choose FUELabc?</h3>
        <p>We are committed to helping you save money and save the planet. By optimizing your driving and vehicle maintenance, you contribute to a greener future.</p>
    `
};
