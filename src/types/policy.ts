import type { Document, Model } from 'mongoose'
import type { PolicyType } from './common'

/*
{
  "type": "faq",
	"title": "Privacy Policy",
	"description": "This policy explains how we collect, use, and protect your personal data.",
	"effectiveDate": "2024-01-01",
	"expireDate": "2026-01-01",
	"isVisible": true
},

faq, privary, terms-and-conditions
*/
export interface Policy {
	type: PolicyType

	title: string
	description: string
	effectiveDate: Date
	expireDate: Date

	isVisible: boolean
}
export interface PolicyDocument extends Document, Policy {}

export interface CreatePolicy extends Policy {}
export interface UpdatePolicy extends Policy {}

export interface PolicyModel extends Model<PolicyDocument> {}