
// List of allowed origins
const allowedOrigins = [
	'http://localhost:5000', 												// => backend
	'http://localhost:3001', 												// => frontend	
	'http://localhost:3002', 												// => admin

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


export const corsOptions = {
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
