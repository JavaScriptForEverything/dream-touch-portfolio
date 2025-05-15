import { ORIGIN } from "@/lib/config"

const API_BASE_URL = ORIGIN

interface ApiResponse<Data> {
  status: string
  message?: string
  data?: Data
  count?: number
  total?: number
  limit?: number
}

export const actionApiRequest = async <Data>( endpoint: string, method: string = "GET", body?: unknown): Promise<ApiResponse<Data>> => {
  // const authToken = localStorage.getItem("authToken") || ""
  const authToken = false

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
  }

  const options: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include", 
  }

	try {
		
		const response = await fetch(`${API_BASE_URL}${endpoint}`, options)
		const result: ApiResponse<Data> = await response.json()

		return result

	} catch (error: any) {
		return error
	}
}
