import 'dotenv/config'
import { NODE_ENV } from '@/config/config'

// List of allowed origins
export const allowedOrigins = [

	'http://localhost:300', 												// => frontend	
	'http://localhost:5173', 												// => dashboard


	// 'http://dreamtouch.com.bd:5000', 						// => backend
	// 'http://dreamtouch.com.bd:3001', 						// => frontend	
	// 'http://dreamtouch.com.bd:3002', 						// => admin

	// 'http://dreamtouch.com.bd', 							// main
	// 'http://vendor.dreamtouch.com.bd', 			// vendor
	// 'http://admin.dreamtouch.com.bd', 				// admin

	// 'http://www.dreamtouch.com.bd', 		
	// 'http://www.vendor.dreamtouch.com.bd', 	
	// 'http://www.admin.dreamtouch.com.bd', 	

]


export const prodCorsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      callback(new Error(msg), false);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Add the methods you need to allow
  credentials: true,
}

const devCorsOptions = { 																								// <= fetch(`${backendOrigin}/auth/login`, { credentials: 'include' })
	// origin:  '*', 					// => all all origins
	// origin:  true, 				// => if request comes from abc then response header will be abc
	origin: allowedOrigins, 	// => array of allowed origins
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Add the methods you need to allow
	credentials: true
}	

export const corsOptions = NODE_ENV === 'production' ? prodCorsOptions : devCorsOptions