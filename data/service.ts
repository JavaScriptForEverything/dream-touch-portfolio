import type { Image } from '@/types/common'


export const serviceOutlines = [
	{
		label: 'projects',
		title: 'projects',
		value: '500+',
		image: '/images/service/icons/project-100x100.webp',
		slug: '/service/projects',
	},
	{
		label: 'Years of Experience',
		title: 'Goal',
		value: '12+',
		image: '/images/service/icons/goal-100x100.webp',
		slug: '/service/years-of-experience',
	},
	{
		label: 'Time Handover',
		title: 'Key',
		value: 'on',
		image: '/images/service/icons/key-100x100.webp',
		slug: '/service/time_handover',
	},
	{
		label: 'Happy Clients',
		title: 'Ratting',
		value: '500+',
		image: '/images/service/icons/rating-100x100.webp',
		slug: '/service/happy-clients',
	},
]


interface Row {
	text: string
	image?: Image
	isChangeOrder: boolean
}

interface Service {
	coverPhoto: Image
	title: string
	slug: string
	slogan: string
	content: string

	rows: Row[]
	createdAt: string
	location: string
	summary: string
	description: string

	// images: string[]
	// descriptions: string[]
}
// Service need categoryId: and show filter based on category too
export const services: Service[] = [
  {
    coverPhoto: {
			public_id: '1',
			secure_url: '/images/service/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
		},
    title: 'Apartment Decor',
    slug: 'apartment-decor',
    slogan: 'we turn ideas into works of art',
		rows: [
			{
				isChangeOrder: false,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora nam officiis iure fugiat quaerat esse expedita. Recusandae nam nesciunt adipisci, libero non dolor vitae commodi, quod et quae voluptas magni, maiores praesentium laudantium. Magnam ipsum necessitatibus suscipit dolorem iure doloremque, facere tempora quia vel? Corporis hic vel voluptas blanditiis distinctio recusandae sed laboriosam rerum nobis natus ratione voluptate ea deleniti labore doloribus numquam optio, beatae minima nemo quidem officia! Cupiditate et ullam exercitationem repellat ipsum nobis laudantium ex sunt, quidem labore corrupti commodi dolor rem, illo nemo dignissimos cum tenetur minima. Voluptate neque, ab debitis quasi omnis minima sapiente accusamus tempora est totam magni? Ea, soluta placeat! Magni culpa quia obcaecati voluptatem amet incidunt voluptatibus debitis commodi doloremque laborum animi perferendis eius unde nulla, fugiat ipsam nemo est dolores suscipit a deserunt fugit. Rem nobis labore soluta ullam sequi! Iure illo doloribus',
				image: { 
					public_id: 'placeholder', 
					secure_url: '/images/service/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp' 
				},
			},
			{
				isChangeOrder: true,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora nam officiis iure fugiat quaerat esse expedita. Recusandae nam nesciunt adipisci, libero non dolor vitae commodi, quod et quae voluptas magni, maiores praesentium laudantium. Magnam ipsum necessitatibus suscipit dolorem iure doloremque, facere tempora quia vel? Corporis hic vel voluptas blanditiis distinctio recusandae sed laboriosam rerum nobis natus ratione voluptate ea deleniti labore doloribus numquam optio, beatae minima nemo quidem officia! Cupiditate et ullam exercitationem repellat ipsum nobis laudantium ex sunt, quidem labore corrupti commodi dolor rem, illo nemo dignissimos cum tenetur minima. Voluptate neque, ab debitis quasi omnis minima sapiente accusamus tempora est totam magni? Ea, soluta placeat! Magni culpa quia obcaecati voluptatem amet incidunt voluptatibus debitis commodi doloremque laborum animi perferendis eius unde nulla, fugiat ipsam nemo est dolores suscipit a deserunt fugit. Rem nobis labore soluta ullam sequi! Iure illo doloribus',
				image: { 
					public_id: 'placeholder', 
					secure_url: '/images/service/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp' 
				},
			},
			{
				isChangeOrder: true,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora nam officiis iure fugiat quaerat esse expedita. Recusandae nam nesciunt adipisci, libero non dolor vitae commodi, quod et quae voluptas magni, maiores praesentium laudantium. Magnam ipsum necessitatibus suscipit dolorem iure doloremque, facere tempora quia vel? Corporis hic vel voluptas blanditiis distinctio recusandae sed laboriosam rerum nobis natus ratione voluptate ea deleniti labore doloribus numquam optio, beatae minima nemo quidem officia! Cupiditate et ullam exercitationem repellat ipsum nobis laudantium ex sunt, quidem labore corrupti commodi dolor rem, illo nemo dignissimos cum tenetur minima. Voluptate neque, ab debitis quasi omnis minima sapiente accusamus tempora est totam magni? Ea, soluta placeat! Magni culpa quia obcaecati voluptatem amet incidunt voluptatibus debitis commodi doloremque laborum animi perferendis eius unde nulla, fugiat ipsam nemo est dolores suscipit a deserunt fugit. Rem nobis labore soluta ullam sequi! Iure illo doloribus',
			},
			{
				isChangeOrder: true,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora nam officiis iure fugiat quaerat esse expedita. Recusandae nam nesciunt adipisci, libero non dolor vitae commodi, quod et quae voluptas magni, maiores praesentium laudantium. Magnam ipsum necessitatibus suscipit dolorem iure doloremque, facere tempora quia vel? Corporis hic vel voluptas blanditiis distinctio recusandae sed laboriosam rerum nobis natus ratione voluptate ea deleniti labore doloribus numquam optio, beatae minima nemo quidem officia! Cupiditate et ullam exercitationem repellat ipsum nobis laudantium ex sunt, quidem labore corrupti commodi dolor rem, illo nemo dignissimos cum tenetur minima. Voluptate neque, ab debitis quasi omnis minima sapiente accusamus tempora est totam magni? Ea, soluta placeat! Magni culpa quia obcaecati voluptatem amet incidunt voluptatibus debitis commodi doloremque laborum animi perferendis eius unde nulla, fugiat ipsam nemo est dolores suscipit a deserunt fugit. Rem nobis labore soluta ullam sequi! Iure illo doloribus',
			},
		],

    summary: 'A beautifully designed apartment with modern decor elements.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui voluptas ratione voluptates dolorem aspernatur, blanditiis magnam est explicabo unde itaque dolor temporibus vel asperiores possimus laboriosam earum, adipisci magni nihil? Eos laborum sint illum corrupti hic dolor commodi nostrum sit libero exercitationem minima, vero nihil similique aspernatur, facilis tempora modi dolores ut est. Dignissimos vel consequuntur cum perspiciatis eaque accusantium vitae asperiores nobis, repudiandae itaque natus ipsum quibusdam quidem ex magni id cupiditate labore! Aliquid officiis quam, quo in ipsam odio sed fugiat voluptatibus ea magni voluptatem quaerat ullam cum porro beatae id ratione distinctio reiciendis, amet architecto commodi eveniet incidunt? Vel fuga corporis dolorem veniam quia mollitia! Quo ipsa laborum voluptatum fugit perferendis voluptate facilis sit quasi voluptatem deserunt provident debitis architecto consequatur ab, eaque molestias officia impedit nostrum fuga! Corporis vel assumenda sunt alias dolores esse molestias quibusdam sed provident, sint fugiat sapiente id iste quia, dicta aspernatur optio, quod voluptates mollitia inventore. Est odit vero, aliquid, dicta dolor corporis veniam deserunt, assumenda eveniet optio debitis quae architecto ipsam. Nesciunt suscipit laborum nostrum quae, cum sequi voluptatum quibusdam maiores officia repudiandae maxime sapiente magni perferendis pariatur tempore expedita hic. Ratione, deserunt. Consequatur a ab cumque nesciunt dolores.',
		createdAt: new Date().toISOString(),
		location: 'badda, dhaka',
		content: `<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><p><br></p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><p><br></p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><p><br></p><h3><strong>Qualified Team for Residential Interior Design</strong></h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><p><br></p><p><br></p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><p><br></p><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards.</p><p><br></p><p><br></p>`
  },
  {
    coverPhoto: {
			public_id: '2',
    	secure_url: '/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
		},
    title: 'Home Decor Ideas',
    slug: 'link-2',
    slogan: 'we turn ideas into works of art2',
		rows: [
			{
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora nam officiis iure fugiat quaerat esse expedita. Recusandae nam nesciunt adipisci, libero non dolor vitae commodi, quod et quae voluptas magni, maiores praesentium laudantium. Magnam ipsum necessitatibus suscipit dolorem iure doloremque, facere tempora quia vel? Corporis hic vel voluptas blanditiis distinctio recusandae sed laboriosam rerum nobis natus ratione voluptate ea deleniti labore doloribus numquam optio, beatae minima nemo quidem officia! Cupiditate et ullam exercitationem repellat ipsum nobis laudantium ex sunt, quidem labore corrupti commodi dolor rem, illo nemo dignissimos cum tenetur minima. Voluptate neque, ab debitis quasi omnis minima sapiente accusamus tempora est totam magni? Ea, soluta placeat! Magni culpa quia obcaecati voluptatem amet incidunt voluptatibus debitis commodi doloremque laborum animi perferendis eius unde nulla, fugiat ipsam nemo est dolores suscipit a deserunt fugit. Rem nobis labore soluta ullam sequi! Iure illo doloribus',
				image: { 
					public_id: 'placeholder', 
					secure_url: '/images/service/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp' 
				},
				isChangeOrder: true
			},
		],

    summary: 'Creative home decor ideas to transform your living space.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui voluptas ratione voluptates dolorem aspernatur, blanditiis magnam est explicabo unde itaque dolor temporibus vel asperiores possimus laboriosam earum, adipisci magni nihil? Eos laborum sint illum corrupti hic dolor commodi nostrum sit libero exercitationem minima, vero nihil similique aspernatur, facilis tempora modi dolores ut est. Dignissimos vel consequuntur cum perspiciatis eaque accusantium vitae asperiores nobis, repudiandae itaque natus ipsum quibusdam quidem ex magni id cupiditate labore! Aliquid officiis quam, quo in ipsam odio sed fugiat voluptatibus ea magni voluptatem quaerat ullam cum porro beatae id ratione distinctio reiciendis, amet architecto commodi eveniet incidunt? Vel fuga corporis dolorem veniam quia mollitia! Quo ipsa laborum voluptatum fugit perferendis voluptate facilis sit quasi voluptatem deserunt provident debitis architecto consequatur ab, eaque molestias officia impedit nostrum fuga! Corporis vel assumenda sunt alias dolores esse molestias quibusdam sed provident, sint fugiat sapiente id iste quia, dicta aspernatur optio, quod voluptates mollitia inventore. Est odit vero, aliquid, dicta dolor corporis veniam deserunt, assumenda eveniet optio debitis quae architecto ipsam. Nesciunt suscipit laborum nostrum quae, cum sequi voluptatum quibusdam maiores officia repudiandae maxime sapiente magni perferendis pariatur tempore expedita hic. Ratione, deserunt. Consequatur a ab cumque nesciunt dolores.',
		createdAt: new Date().toISOString(),
		location: 'badda, dhaka',
		content: `
			<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p>
		`
  },
  {
    coverPhoto: {
			public_id: '1',
    	secure_url: '/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
		},
    title: 'Home Design Trends',
    slug: 'link-3',
    slogan: 'we turn ideas into works of art3',

		rows: [
			{
				isChangeOrder: false,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora nam officiis iure fugiat quaerat esse expedita. Recusandae nam nesciunt adipisci, libero non dolor vitae commodi, quod et quae voluptas magni, maiores praesentium laudantium. Magnam ipsum necessitatibus suscipit dolorem iure doloremque, facere tempora quia vel? Corporis hic vel voluptas blanditiis distinctio recusandae sed laboriosam rerum nobis natus ratione voluptate ea deleniti labore doloribus numquam optio, beatae minima nemo quidem officia! Cupiditate et ullam exercitationem repellat ipsum nobis laudantium ex sunt, quidem labore corrupti commodi dolor rem, illo nemo dignissimos cum tenetur minima. Voluptate neque, ab debitis quasi omnis minima sapiente accusamus tempora est totam magni? Ea, soluta placeat! Magni culpa quia obcaecati voluptatem amet incidunt voluptatibus debitis commodi doloremque laborum animi perferendis eius unde nulla, fugiat ipsam nemo est dolores suscipit a deserunt fugit. Rem nobis labore soluta ullam sequi! Iure illo doloribus',
				image: { 
					public_id: 'placeholder', 
					secure_url: '/images/service/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp' 
				},
			},
			{
				isChangeOrder: true,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora nam officiis iure fugiat quaerat esse expedita. Recusandae nam nesciunt adipisci, libero non dolor vitae commodi, quod et quae voluptas magni, maiores praesentium laudantium. Magnam ipsum necessitatibus suscipit dolorem iure doloremque, facere tempora quia vel? Corporis hic vel voluptas blanditiis distinctio recusandae sed laboriosam rerum nobis natus ratione voluptate ea deleniti labore doloribus numquam optio, beatae minima nemo quidem officia! Cupiditate et ullam exercitationem repellat ipsum nobis laudantium ex sunt, quidem labore corrupti commodi dolor rem, illo nemo dignissimos cum tenetur minima. Voluptate neque, ab debitis quasi omnis minima sapiente accusamus tempora est totam magni? Ea, soluta placeat! Magni culpa quia obcaecati voluptatem amet incidunt voluptatibus debitis commodi doloremque laborum animi perferendis eius unde nulla, fugiat ipsam nemo est dolores suscipit a deserunt fugit. Rem nobis labore soluta ullam sequi! Iure illo doloribus',
				image: { 
					public_id: 'placeholder', 
					secure_url: '/images/service/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp' 
				},
			},
			{
				isChangeOrder: true,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora nam officiis iure fugiat quaerat esse expedita. Recusandae nam nesciunt adipisci, libero non dolor vitae commodi, quod et quae voluptas magni, maiores praesentium laudantium. Magnam ipsum necessitatibus suscipit dolorem iure doloremque, facere tempora quia vel? Corporis hic vel voluptas blanditiis distinctio recusandae sed laboriosam rerum nobis natus ratione voluptate ea deleniti labore doloribus numquam optio, beatae minima nemo quidem officia! Cupiditate et ullam exercitationem repellat ipsum nobis laudantium ex sunt, quidem labore corrupti commodi dolor rem, illo nemo dignissimos cum tenetur minima. Voluptate neque, ab debitis quasi omnis minima sapiente accusamus tempora est totam magni? Ea, soluta placeat! Magni culpa quia obcaecati voluptatem amet incidunt voluptatibus debitis commodi doloremque laborum animi perferendis eius unde nulla, fugiat ipsam nemo est dolores suscipit a deserunt fugit. Rem nobis labore soluta ullam sequi! Iure illo doloribus',
			},
			{
				isChangeOrder: true,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora nam officiis iure fugiat quaerat esse expedita. Recusandae nam nesciunt adipisci, libero non dolor vitae commodi, quod et quae voluptas magni, maiores praesentium laudantium. Magnam ipsum necessitatibus suscipit dolorem iure doloremque, facere tempora quia vel? Corporis hic vel voluptas blanditiis distinctio recusandae sed laboriosam rerum nobis natus ratione voluptate ea deleniti labore doloribus numquam optio, beatae minima nemo quidem officia! Cupiditate et ullam exercitationem repellat ipsum nobis laudantium ex sunt, quidem labore corrupti commodi dolor rem, illo nemo dignissimos cum tenetur minima. Voluptate neque, ab debitis quasi omnis minima sapiente accusamus tempora est totam magni? Ea, soluta placeat! Magni culpa quia obcaecati voluptatem amet incidunt voluptatibus debitis commodi doloremque laborum animi perferendis eius unde nulla, fugiat ipsam nemo est dolores suscipit a deserunt fugit. Rem nobis labore soluta ullam sequi! Iure illo doloribus',
			},
		],

    summary: 'A beautifully designed apartment with modern decor elements.',
    description: 'Explore the latest trends in home design and architecture.',
		createdAt: new Date().toISOString(),
		location: 'badda, dhaka',
		content: `
			<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p>
		`
  },
  {
    coverPhoto: {
			public_id: '1',
    	secure_url: '/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
		},
    title: 'Home Interior Planning',
    slug: 'link-4',
    slogan: 'we turn ideas into works of art4',

    description: 'Plan your home interiors with expert guidance and ideas.',
		createdAt: new Date().toISOString(),
		location: 'badda, dhaka',

		rows: [
			{
				isChangeOrder: false,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora nam officiis iure fugiat quaerat esse expedita. Recusandae nam nesciunt adipisci, libero non dolor vitae commodi, quod et quae voluptas magni, maiores praesentium laudantium. Magnam ipsum necessitatibus suscipit dolorem iure doloremque, facere tempora quia vel? Corporis hic vel voluptas blanditiis distinctio recusandae sed laboriosam rerum nobis natus ratione voluptate ea deleniti labore doloribus numquam optio, beatae minima nemo quidem officia! Cupiditate et ullam exercitationem repellat ipsum nobis laudantium ex sunt, quidem labore corrupti commodi dolor rem, illo nemo dignissimos cum tenetur minima. Voluptate neque, ab debitis quasi omnis minima sapiente accusamus tempora est totam magni? Ea, soluta placeat! Magni culpa quia obcaecati voluptatem amet incidunt voluptatibus debitis commodi doloremque laborum animi perferendis eius unde nulla, fugiat ipsam nemo est dolores suscipit a deserunt fugit. Rem nobis labore soluta ullam sequi! Iure illo doloribus',
				image: { 
					public_id: 'placeholder', 
					secure_url: '/images/service/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp' 
				},
			},
			{
				isChangeOrder: true,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora nam officiis iure fugiat quaerat esse expedita. Recusandae nam nesciunt adipisci, libero non dolor vitae commodi, quod et quae voluptas magni, maiores praesentium laudantium. Magnam ipsum necessitatibus suscipit dolorem iure doloremque, facere tempora quia vel? Corporis hic vel voluptas blanditiis distinctio recusandae sed laboriosam rerum nobis natus ratione voluptate ea deleniti labore doloribus numquam optio, beatae minima nemo quidem officia! Cupiditate et ullam exercitationem repellat ipsum nobis laudantium ex sunt, quidem labore corrupti commodi dolor rem, illo nemo dignissimos cum tenetur minima. Voluptate neque, ab debitis quasi omnis minima sapiente accusamus tempora est totam magni? Ea, soluta placeat! Magni culpa quia obcaecati voluptatem amet incidunt voluptatibus debitis commodi doloremque laborum animi perferendis eius unde nulla, fugiat ipsam nemo est dolores suscipit a deserunt fugit. Rem nobis labore soluta ullam sequi! Iure illo doloribus',
				image: { 
					public_id: 'placeholder', 
					secure_url: '/images/service/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp' 
				},
			},
			{
				isChangeOrder: true,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora nam officiis iure fugiat quaerat esse expedita. Recusandae nam nesciunt adipisci, libero non dolor vitae commodi, quod et quae voluptas magni, maiores praesentium laudantium. Magnam ipsum necessitatibus suscipit dolorem iure doloremque, facere tempora quia vel? Corporis hic vel voluptas blanditiis distinctio recusandae sed laboriosam rerum nobis natus ratione voluptate ea deleniti labore doloribus numquam optio, beatae minima nemo quidem officia! Cupiditate et ullam exercitationem repellat ipsum nobis laudantium ex sunt, quidem labore corrupti commodi dolor rem, illo nemo dignissimos cum tenetur minima. Voluptate neque, ab debitis quasi omnis minima sapiente accusamus tempora est totam magni? Ea, soluta placeat! Magni culpa quia obcaecati voluptatem amet incidunt voluptatibus debitis commodi doloremque laborum animi perferendis eius unde nulla, fugiat ipsam nemo est dolores suscipit a deserunt fugit. Rem nobis labore soluta ullam sequi! Iure illo doloribus',
			},
			{
				isChangeOrder: true,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora nam officiis iure fugiat quaerat esse expedita. Recusandae nam nesciunt adipisci, libero non dolor vitae commodi, quod et quae voluptas magni, maiores praesentium laudantium. Magnam ipsum necessitatibus suscipit dolorem iure doloremque, facere tempora quia vel? Corporis hic vel voluptas blanditiis distinctio recusandae sed laboriosam rerum nobis natus ratione voluptate ea deleniti labore doloribus numquam optio, beatae minima nemo quidem officia! Cupiditate et ullam exercitationem repellat ipsum nobis laudantium ex sunt, quidem labore corrupti commodi dolor rem, illo nemo dignissimos cum tenetur minima. Voluptate neque, ab debitis quasi omnis minima sapiente accusamus tempora est totam magni? Ea, soluta placeat! Magni culpa quia obcaecati voluptatem amet incidunt voluptatibus debitis commodi doloremque laborum animi perferendis eius unde nulla, fugiat ipsam nemo est dolores suscipit a deserunt fugit. Rem nobis labore soluta ullam sequi! Iure illo doloribus',
			},
		],

    summary: 'A beautifully designed apartment with modern decor elements.',
		content: `
			<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p>
		`
  },
  // {
  //   coverPhoto: '/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
  //   title: 'Interior Setup',
  //   slug: 'link-5',
  //   slogan: 'we turn ideas into works of art5',

  //   description: 'A complete interior setup for a modern and functional space.',
	// 	createdAt: new Date().toISOString(),
	// 	location: 'badda, dhaka',
	// 	images: [
	// 		'/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
	// 		'/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
	// 		'/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
	// 		'/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
	// 		'/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
	// 		'/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
	// 		'/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
	// 		'/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
	// 		'/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
	// 	],
	// 	content: `
	// 		<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p>
	// 	`
  // },
  // {
  //   coverPhoto: '/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
  //   title: 'Modern Space Design',
  //   slug: 'link-6',
  //   slogan: 'we turn ideas into works of art6',

  //   description: 'Designing modern spaces with a focus on aesthetics and utility.',
	// 	createdAt: new Date().toISOString(),
	// 	location: 'badda, dhaka',
	// 	images: [
	// 		'/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
	// 		'/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
	// 		'/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
	// 		'/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
	// 		'/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
	// 		'/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
	// 		'/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
	// 		'/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
	// 		'/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
	// 	],
	// 	content: `
	// 		<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p>
	// 	`
  // },
  // {
  //   coverPhoto: '/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
  //   title: 'Residential Design 1',
  //   slug: 'link-7',
  //   slogan: 'we turn ideas into works of art7',

  //   description: 'A stunning residential design with a focus on comfort and style.',
	// 	createdAt: new Date().toISOString(),
	// 	location: 'badda, dhaka',
	// 	images: [
	// 		'/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
	// 		'/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
	// 		'/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
	// 		'/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
	// 		'/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
	// 		'/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
	// 		'/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
	// 		'/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
	// 		'/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
	// 	],
	// 	content: `
	// 		<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p>
	// 	`
  // },
  // {
  //   coverPhoto: '/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
  //   title: 'Residential Design',
  //   slug: 'link-8',
  //   slogan: 'we turn ideas into works of art8',

  //   description: 'Elegant residential designs tailored to your preferences.',
	// 	createdAt: new Date().toISOString(),
	// 	location: 'badda, dhaka',
	// 	images: [
	// 		'/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
	// 		'/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
	// 		'/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
	// 		'/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
	// 		'/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
	// 		'/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
	// 		'/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
	// 		'/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
	// 		'/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
	// 	],
	// 	content: `
	// 		<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p>
	// 	`
  // },
  // {
  //   coverPhoto: '/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
  //   title: 'Space Organization',
  //   slogan: 'we turn ideas into works of art9',

  //   slug: 'link-9',
  //   description: 'Organizing spaces to maximize functionality and aesthetics.',
	// 	createdAt: new Date().toISOString(),
	// 	location: 'badda, dhaka',
	// 	images: [
	// 		'/images/home/portfolios/apartment-decor-r13paque78wtipjj12u3ofnnjvgiwt23rmsk70pi2w.webp',
	// 		'/images/home/portfolios/home-decor-ideas-r13phfh2su282vtzzyuleqxnmiihnble0psv1uspu0.webp',
	// 		'/images/home/portfolios/home-design-trends-r13pgle8q4x1rd1ovluj6yiwm6mqt09z8kxbp01bd4.webp',
	// 		'/images/home/portfolios/home-interior-planning-r13plsg4i613xrhzjcpah5bmtv0scrwkaaqy72byyw.webp',
	// 		'/images/home/portfolios/interior-setup-r13pl24n6t12wok7t1bqjbyq72mid902uohcrbezt4.webp',
	// 		'/images/home/portfolios/modern-space-design-r13pfkqjbliv6kixto02zprxg5nfgt8g3jhdz7jo3s.webp',
	// 		'/images/home/portfolios/residential-design-1-r13peh9bck0tmy4a86xr2zqkhz20hivpy42ztl67d4.webp',
	// 		'/images/home/portfolios/residential-design-r13pblv2gs3a5uagzy8sgptv5l7myth8vwbl15fidk.webp',
	// 		'/images/home/portfolios/space-organization-r13pig4s7dgenocr1wp1lzomsjhszimx5r8srnad3c.webp',
	// 	],

	// 	content: `<p>Dream Touch Interiors is a leading interior design company in Bangladesh, specializing in residence interior design. Since our inception in 2010, we have successfully completed numerous prestigious residential projects across the country.</p><p><br></p><p>Every client has unique needs, and we tailor our designs to reflect their personality and lifestyle. At Dream Touch Interiors, we work tirelessly to turn our clients' dreams into reality. While some may consider designing their interiors themselves, hiring a professional interior designer can save time, money, and effort while ensuring a flawless result.</p><p><br></p><h2><strong>Why Hire an Interior Designer?</strong></h2><p>Without an interior designer, residence interior design can become chaotic. Designers are trained professionals who understand space requirements, furniture placement, and color psychology. They ensure that your space is both functional and aesthetically pleasing.</p><h3><strong>Avoiding Aesthetic Mismatches</strong></h3><p>Interior designers have a trained eye for textures, colors, and materials. They can quickly decide on wall colors, wallpapers, and accent designs that suit your space. Without professional guidance, you may end up with mismatched designs or colors that don't meet your expectations, leading to wasted time and money.</p><h3><strong>Material Collection</strong></h3><p>Interior designers have access to a wide range of high-quality materials, textures, and finishes. They know where to source the best materials at competitive prices. At Dream Touch Interiors, we ensure that all materials used in our projects are of premium quality, ensuring durability and longevity.</p><h3>Qualified Team for Residential Interior Design</h3><p>A successful residence interior design project requires a team of skilled professionals, including electricians, plumbers, carpenters, and contractors. At Dream Touch Interiors, we have a qualified team that works together seamlessly to deliver exceptional results.</p><h2><strong>Our Services</strong></h2><p>Dream Touch Interiors offers a wide range of services for residence interior design, including:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Living room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Bedroom interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Dining room interior design</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Kitchen cabinet design and installation</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Custom furniture design</li></ol><h3><strong>How We Work</strong></h3><p>Our process begins with understanding your style, preferences, and budget. We then design the space to meet your requirements and source the best materials for the project. Our skilled team works together to complete the project efficiently and to the highest standards</p><p><br></p> `
  // },
];


export const missionItems = [
	'Making customers happy with helpful solutions.',
	'Creating a great place to work for employees.',
	'Giving clients high-quality products at fair prices.',
	'Always delivering products on time.',
	'Providing support after delivery to meet client needs.',
	'Helping society by creating jobs.',
]