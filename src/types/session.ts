import type { Role } from '@/types/common'

export interface Session {
	state: string
	authToken: string
	user: {
		id: string
		role: Role
	}
}