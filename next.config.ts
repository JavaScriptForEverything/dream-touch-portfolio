import type { NextConfig } from "next"
import { ORIGIN } from '@/lib/config'
const { hostname } = new URL(ORIGIN)

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: hostname,
			},
			{
				hostname: 'via.placeholder.com'
			},
		],
	}
}

export default nextConfig
