export const contactInfo = {
    phone: '+8801955-521500',
};

export const clients = [
    {
        image: '/images/home/clients/best-interior-design-company-in-bangladesh.webp',
        title: 'Best Interior Design Company in Bangladesh',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        url: '#',
    },
    {
        image: '/images/home/clients/best-interior-design-company-in-dhaka-10.webp',
        title: 'Best Interior Design Company in Dhaka',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        url: '#',
    },
    {
        image: '/images/home/clients/best-interior-design-company-in-dhaka-11.webp',
        title: 'Best Interior Design Company in Dhaka',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        url: '#',
    },
    {
        image: '/images/home/clients/best-interior-design-company-in-dhaka-12.webp',
        title: 'Best Interior Design Company in Dhaka',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        url: '#',
    },
    {
        image: '/images/home/clients/best-interior-design-company-in-dhaka-13.webp',
        title: 'Best Interior Design Company in Dhaka',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        url: '#',
    },
    {
        image: '/images/home/clients/best-interior-design-company-in-dhaka-9.webp',
        title: 'Best Interior Design Company in Dhaka',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        url: '#',
    },
    {
        image: '/images/home/clients/interior-design-company-in-bangladesh.webp',
        title: 'Interior Design Company in Bangladesh',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        url: '#',
    },
    {
        image: '/images/home/clients/interior-design-company-in-dhaka-5.webp',
        title: 'Interior Design Company in Dhaka',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        url: '#',
    },
    {
        image: '/images/home/clients/interior-design-company-in-dhaka-7.webp',
        title: 'Interior Design Company in Dhaka',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        url: '#',
    },
    // {
    //     image: '/images/home/clients/interior-design-company-in-dhaka-8.webp',
    //     title: 'Interior Design Company in Dhaka',
    //     description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    //     url: '#',
    // },
    // {
    //     image: '/images/home/clients/interior-design-company-in-dhaka-9.webp',
    //     title: 'Interior Design Company in Dhaka',
    //     description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    //     url: '#',
    // },
    // {
    //     image: '/images/home/clients/top-10-1.png',
    //     title: 'Top 10 Interior Design Company',
    //     description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    //     url: '#',
    // },
];


interface Portfolio {
	coverPhoto: string
	title: string
	description: string
	url: string
	createdAt: string
	location: string
	images: string[]
	content: string
}
// portfolio need categoryId: and show filter based on category too
export const portfolioes: Portfolio[] = [
  {
    coverPhoto: '/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
    title: 'Apartment Decor',
    description: 'A beautifully designed apartment with modern decor elements.',
    url: 'link-1',
		createdAt: new Date().toISOString(),
		location: 'badda, dhaka',
		images: [
			'/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
			'/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
			'/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
			'/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
			'/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
			'/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
			'/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
			'/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
			'/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
		],

		content: `<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><p><br></p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><p><br></p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><p><br></p><h3><strong>Qualified Team for Residential Interior Design</strong></h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><p><br></p><p><br></p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><p><br></p><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards.</p><p><br></p><p><br></p>`
  },
  {
    coverPhoto: '/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
    title: 'Home Decor Ideas',
    description: 'Creative home decor ideas to transform your living space.',
    url: 'link-2',
		createdAt: new Date().toISOString(),
		location: 'badda, dhaka',
		images: [
			'/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
			'/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
			'/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
			'/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
			'/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
			'/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
			'/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
			'/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
			'/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
		],
		content: `
			<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p>
		`
  },
  {
    coverPhoto: '/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
    title: 'Home Design Trends',
    description: 'Explore the latest trends in home design and architecture.',
    url: 'link-3',
		createdAt: new Date().toISOString(),
		location: 'badda, dhaka',
		images: [
			'/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
			'/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
			'/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
			'/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
			'/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
			'/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
			'/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
			'/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
			'/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
		],
		content: `
			<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p>
		`
  },
  {
    coverPhoto: '/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
    title: 'Home Interior Planning',
    description: 'Plan your home interiors with expert guidance and ideas.',
    url: 'link-4',
		createdAt: new Date().toISOString(),
		location: 'badda, dhaka',
		images: [
			'/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
			'/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
			'/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
			'/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
			'/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
			'/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
			'/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
			'/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
			'/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
		],
		content: `
			<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p>
		`
  },
  {
    coverPhoto: '/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
    title: 'Interior Setup',
    description: 'A complete interior setup for a modern and functional space.',
    url: 'link-5',
		createdAt: new Date().toISOString(),
		location: 'badda, dhaka',
		images: [
			'/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
			'/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
			'/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
			'/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
			'/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
			'/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
			'/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
			'/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
			'/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
		],
		content: `
			<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p>
		`
  },
  {
    coverPhoto: '/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
    title: 'Modern Space Design',
    description: 'Designing modern spaces with a focus on aesthetics and utility.',
    url: 'link-6',
		createdAt: new Date().toISOString(),
		location: 'badda, dhaka',
		images: [
			'/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
			'/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
			'/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
			'/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
			'/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
			'/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
			'/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
			'/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
			'/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
		],
		content: `
			<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p>
		`
  },
  {
    coverPhoto: '/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
    title: 'Residential Design 1',
    description: 'A stunning residential design with a focus on comfort and style.',
    url: 'link-7',
		createdAt: new Date().toISOString(),
		location: 'badda, dhaka',
		images: [
			'/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
			'/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
			'/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
			'/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
			'/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
			'/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
			'/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
			'/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
			'/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
		],
		content: `
			<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p>
		`
  },
  {
    coverPhoto: '/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
    title: 'Residential Design',
    description: 'Elegant residential designs tailored to your preferences.',
    url: 'link-8',
		createdAt: new Date().toISOString(),
		location: 'badda, dhaka',
		images: [
			'/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
			'/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
			'/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
			'/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
			'/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
			'/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
			'/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
			'/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
			'/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
		],
		content: `
			<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p>
		`
  },
  {
    coverPhoto: '/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
    title: 'Space Organization',
    description: 'Organizing spaces to maximize functionality and aesthetics.',
    url: 'link-9',
		createdAt: new Date().toISOString(),
		location: 'badda, dhaka',
		images: [
			'/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
			'/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
			'/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
			'/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
			'/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
			'/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
			'/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
			'/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
			'/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
		],
		content: `
			<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p>
		`
  },
];


export const missionItems = [
	'Making customers happy with helpful solutions.',
	'Creating a great place to work for employees.',
	'Giving clients high-quality products at fair prices.',
	'Always delivering products on time.',
	'Providing support after delivery to meet client needs.',
	'Helping society by creating jobs.',
]